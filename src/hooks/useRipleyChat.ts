import { useCallback, useRef, useState } from "react";

import { TYPING_DELAY_MS } from "@/lib/lead-qualification";

export type ChatMessage = {
  id: string;
  role: "bot" | "user";
  text: string;
};

export function useRipleyChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const messageId = useRef(0);

  const nextId = () => {
    messageId.current += 1;
    return `msg-${messageId.current}`;
  };

  const scrollToEnd = useCallback(() => {
    const el = scrollRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  const pushBot = useCallback((text: string, onDone?: () => void) => {
    setTyping(true);
    window.setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { id: nextId(), role: "bot", text }]);
      onDone?.();
    }, TYPING_DELAY_MS);
  }, []);

  const pushUser = useCallback((text: string) => {
    setMessages((prev) => [...prev, { id: nextId(), role: "user", text }]);
  }, []);

  return {
    messages,
    typing,
    pushBot,
    pushUser,
    scrollToEnd,
    scrollRef,
    clearMessages,
  };
}
