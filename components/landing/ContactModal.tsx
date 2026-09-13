"use client";

import { useEffect, useRef, useState } from "react";
import { CircleCheck, Loader2, TriangleAlert, X } from "lucide-react";
import type { Content } from "@/lib/content";
import { CONTACT_EMAIL, CONTACT_HREF, FORMSUBMIT_ENDPOINT } from "@/lib/config";
import { useContactModal } from "./ContactModalContext";

type Status = "idle" | "sending" | "success" | "error";

export function ContactModal({ content }: { content: Content }) {
  const { isOpen, closeModal } = useContactModal();
  const { contactForm: t } = content;

  const [status, setStatus] = useState<Status>("idle");
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  function handleClose() {
    setStatus("idle");
    closeModal();
  }

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    nameInputRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        handleClose();
        return;
      }
      if (e.key !== "Tab") return;
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])'
      );
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocused.current?.focus();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (!isOpen) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if ((data.get("_honey") as string)?.length) {
      setStatus("success");
      return;
    }

    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    setStatus("sending");
    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `New message from ${name} — Therapeutics Data`,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      className="modal-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div
        className="modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        ref={dialogRef}
      >
        <button type="button" className="modal-close" aria-label={t.close} onClick={handleClose}>
          <X size={18} />
        </button>

        {status === "success" ? (
          <div className="modal-status">
            <CircleCheck size={36} color="var(--success)" aria-hidden="true" />
            <h3>{t.successTitle}</h3>
            <p>{t.successBody}</p>
          </div>
        ) : (
          <>
            <h3 id="contact-modal-title" className="modal-title">
              {t.title}
            </h3>
            <p className="modal-subtitle">{t.subtitle}</p>

            <form onSubmit={handleSubmit} noValidate>
              <input
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
              />

              <div className="form-field">
                <label htmlFor="contact-name">{t.nameLabel}</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder={t.namePlaceholder}
                  required
                  ref={nameInputRef}
                  disabled={status === "sending"}
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-email">{t.emailLabel}</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder={t.emailPlaceholder}
                  required
                  disabled={status === "sending"}
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-message">{t.messageLabel}</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder={t.messagePlaceholder}
                  required
                  disabled={status === "sending"}
                />
              </div>

              {status === "error" && (
                <p className="form-error">
                  <TriangleAlert size={15} aria-hidden="true" />
                  {t.errorBody}{" "}
                  <a href={CONTACT_HREF} className="form-error-link">
                    {CONTACT_EMAIL}
                  </a>
                </p>
              )}

              <button type="submit" className="btn btn-primary modal-submit" disabled={status === "sending"}>
                {status === "sending" ? (
                  <>
                    <Loader2 size={16} className="spin" aria-hidden="true" />
                    {t.sending}
                  </>
                ) : status === "error" ? (
                  t.errorRetry
                ) : (
                  t.submit
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
