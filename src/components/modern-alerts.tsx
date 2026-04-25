"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Info, TriangleAlert, X } from "lucide-react";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type AlertTone = "success" | "error" | "info";

type AlertItem = {
  id: number;
  title: string;
  message?: string;
  tone: AlertTone;
};

type AlertContextValue = {
  success: (title: string, message?: string) => void;
  error: (title: string, message?: string) => void;
  info: (title: string, message?: string) => void;
};

const AlertContext = createContext<AlertContextValue | null>(null);

function toneStyles(tone: AlertTone) {
  if (tone === "success") {
    return {
      icon: <CheckCircle2 size={18} className="text-emerald-300" />,
      ring: "ring-emerald-400/30",
      stripe: "from-emerald-300/70 to-emerald-500/70",
    };
  }
  if (tone === "error") {
    return {
      icon: <TriangleAlert size={18} className="text-rose-300" />,
      ring: "ring-rose-400/30",
      stripe: "from-rose-300/70 to-rose-500/70",
    };
  }
  return {
    icon: <Info size={18} className="text-sky-300" />,
    ring: "ring-sky-400/30",
    stripe: "from-sky-300/70 to-sky-500/70",
  };
}

export function AlertProvider({ children }: { children: ReactNode }) {
  const [alerts, setAlerts] = useState<AlertItem[]>([]);

  const remove = useCallback((id: number) => {
    setAlerts((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const push = useCallback((tone: AlertTone, title: string, message?: string) => {
    const id = Date.now() + Math.floor(Math.random() * 1000);
    setAlerts((prev) => [...prev, { id, title, message, tone }]);
    window.setTimeout(() => remove(id), 4200);
  }, [remove]);

  const value = useMemo<AlertContextValue>(
    () => ({
      success: (title, message) => push("success", title, message),
      error: (title, message) => push("error", title, message),
      info: (title, message) => push("info", title, message),
    }),
    [push]
  );

  return (
    <AlertContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed inset-x-0 top-24 z-[80] flex justify-center px-4 sm:justify-end">
        <div className="w-full max-w-sm space-y-3">
          <AnimatePresence>
            {alerts.map((alert) => {
              const styles = toneStyles(alert.tone);
              return (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0, y: -20, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -14, scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className={`pointer-events-auto overflow-hidden rounded-2xl border border-white/15 bg-black/80 p-4 shadow-2xl backdrop-blur-xl ring-1 ${styles.ring}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5">{styles.icon}</span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-white">{alert.title}</p>
                      {alert.message ? (
                        <p className="mt-1 text-xs leading-relaxed text-white/70">{alert.message}</p>
                      ) : null}
                    </div>
                    <button
                      onClick={() => remove(alert.id)}
                      className="rounded-full border border-white/10 p-1 text-white/70 transition hover:border-white/30 hover:text-white"
                      aria-label="Close alert"
                    >
                      <X size={14} />
                    </button>
                  </div>
                  <motion.div
                    className={`mt-3 h-1 rounded-full bg-gradient-to-r ${styles.stripe}`}
                    initial={{ width: "100%" }}
                    animate={{ width: "0%" }}
                    transition={{ duration: 4.2, ease: "linear" }}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </AlertContext.Provider>
  );
}

export function useAlerts() {
  const ctx = useContext(AlertContext);
  if (!ctx) {
    throw new Error("useAlerts must be used within AlertProvider");
  }
  return ctx;
}
