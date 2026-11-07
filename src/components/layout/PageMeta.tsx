import { useEffect } from "react";

type PageMetaProps = {
  noindex?: boolean;
};

export function PageMeta({ noindex }: PageMetaProps) {
  useEffect(() => {
    if (!noindex) {
      return;
    }

    let meta = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const previous = meta?.getAttribute("content") ?? "index, follow";

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "robots");
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", "noindex, nofollow");

    return () => {
      meta?.setAttribute("content", previous);
    };
  }, [noindex]);

  return null;
}
