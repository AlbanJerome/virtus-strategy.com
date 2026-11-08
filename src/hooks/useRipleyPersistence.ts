import { useCallback, useEffect, useState } from "react";

import {
  RIPLEY_LEAD_CONTEXT_STORAGE_KEY,
  RIPLEY_LEAD_DATA_STORAGE_KEY,
  RIPLEY_NAME_STORAGE_KEY,
  RIPLEY_QUALIFIED_STORAGE_KEY,
  type StoredLeadContext,
  type StoredLeadData,
} from "@/lib/lead-qualification";

export function readStoredLeadData(): StoredLeadData | null {
  try {
    const raw = window.localStorage.getItem(RIPLEY_LEAD_DATA_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as StoredLeadData;
  } catch {
    return null;
  }
}

export function useRipleyPersistence() {
  const [isReturningVisitor, setIsReturningVisitor] = useState(false);
  const [savedName, setSavedName] = useState<string | null>(null);

  useEffect(() => {
    try {
      setIsReturningVisitor(
        window.localStorage.getItem(RIPLEY_QUALIFIED_STORAGE_KEY) === "true",
      );
      setSavedName(window.localStorage.getItem(RIPLEY_NAME_STORAGE_KEY));
    } catch {
      setIsReturningVisitor(false);
      setSavedName(null);
    }
  }, []);

  const loadStoredDraftFields = useCallback((): {
    vertical?: StoredLeadContext["vertical"];
    bottleneck?: StoredLeadContext["bottleneck"];
    size?: StoredLeadContext["size"];
    timeline?: StoredLeadContext["timeline"];
    firstName: string;
    lastName: string;
    company: string;
    email: string;
    phone: string;
  } | null => {
    try {
      const contextRaw = window.localStorage.getItem(RIPLEY_LEAD_CONTEXT_STORAGE_KEY);
      const leadData = readStoredLeadData();
      const parsedContext = contextRaw
        ? (JSON.parse(contextRaw) as StoredLeadContext)
        : null;

      return {
        vertical: parsedContext?.vertical,
        bottleneck: parsedContext?.bottleneck,
        size: parsedContext?.size,
        timeline: parsedContext?.timeline,
        firstName: leadData?.firstName ?? "",
        lastName: leadData?.lastName ?? "",
        company: leadData?.company ?? "",
        email: leadData?.email ?? "",
        phone: leadData?.phone ?? "",
      };
    } catch {
      return null;
    }
  }, []);

  const persistQualifiedLead = useCallback(
    (
      firstName: string,
      context: StoredLeadContext,
      leadData: StoredLeadData,
    ) => {
      try {
        window.localStorage.setItem(RIPLEY_QUALIFIED_STORAGE_KEY, "true");
        window.localStorage.setItem(RIPLEY_NAME_STORAGE_KEY, firstName);
        window.localStorage.setItem(
          RIPLEY_LEAD_CONTEXT_STORAGE_KEY,
          JSON.stringify(context),
        );
        window.localStorage.setItem(
          RIPLEY_LEAD_DATA_STORAGE_KEY,
          JSON.stringify(leadData),
        );
        setIsReturningVisitor(true);
        setSavedName(firstName);
      } catch {
        /* ignore private browsing / storage disabled */
      }
    },
    [],
  );

  return {
    isReturningVisitor,
    savedName,
    loadStoredDraftFields,
    persistQualifiedLead,
    readStoredLeadData,
  };
}
