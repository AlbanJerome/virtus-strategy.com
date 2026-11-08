import { useEffect, useImperativeHandle, useRef, forwardRef } from "react";

import {
  TURNSTILE_LEAD_ACTION,
  getTurnstileSiteKey,
  loadTurnstileScript,
} from "@/lib/turnstile";

export type TurnstileFieldHandle = {
  getToken: () => string | undefined;
  reset: () => void;
};

type TurnstileFieldProps = {
  className?: string;
  onReady?: () => void;
  onError?: () => void;
};

export const TurnstileField = forwardRef<TurnstileFieldHandle, TurnstileFieldProps>(
  function TurnstileField({ className, onReady, onError }, ref) {
    const containerRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<string | null>(null);
    const tokenRef = useRef<string | undefined>(undefined);

    useImperativeHandle(ref, () => ({
      getToken: () => tokenRef.current,
      reset: () => {
        tokenRef.current = undefined;
        if (widgetIdRef.current && window.turnstile) {
          window.turnstile.reset(widgetIdRef.current);
        }
      },
    }));

    useEffect(() => {
      const siteKey = getTurnstileSiteKey();
      const container = containerRef.current;
      if (!siteKey || !container) {
        onError?.();
        return;
      }

      let cancelled = false;

      loadTurnstileScript()
        .then(() => {
          if (cancelled || !window.turnstile || !containerRef.current) return;

          if (widgetIdRef.current) {
            window.turnstile.remove(widgetIdRef.current);
            widgetIdRef.current = null;
          }

          widgetIdRef.current = window.turnstile.render(containerRef.current, {
            sitekey: siteKey,
            action: TURNSTILE_LEAD_ACTION,
            callback: (token: string) => {
              tokenRef.current = token;
              onReady?.();
            },
            "error-callback": () => {
              tokenRef.current = undefined;
              onError?.();
            },
            "expired-callback": () => {
              tokenRef.current = undefined;
            },
          });
        })
        .catch(() => {
          if (!cancelled) onError?.();
        });

      return () => {
        cancelled = true;
        if (widgetIdRef.current && window.turnstile) {
          window.turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = null;
        }
        tokenRef.current = undefined;
      };
    }, [onError, onReady]);

    return <div ref={containerRef} className={className} aria-hidden={false} />;
  },
);
