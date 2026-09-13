"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { Content } from "@/lib/content";
import { useContactModal } from "./ContactModalContext";

export function Header({ content }: { content: Content }) {
  const [open, setOpen] = useState(false);
  const { openModal } = useContactModal();
  const { header } = content;

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a className="logo" href="#top">
          Therapeutics <span>Data</span>
        </a>

        <nav className="primary-nav" aria-label="Principal">
          {header.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            className="lang-switch"
            href={header.langSwitch.href}
            aria-label={header.langSwitch.label}
            title={header.langSwitch.label}
          >
            <span aria-hidden="true">{header.langSwitch.flag}</span>
            <span className="lang-switch-code">{header.langSwitch.code}</span>
          </a>
          <button
            type="button"
            className="btn btn-primary btn-sm header-cta-desktop"
            onClick={openModal}
          >
            {header.cta}
          </button>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu" id="mobile-menu">
          <div className="wrap mobile-menu-inner">
            {header.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="mobile-link"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              className="btn btn-primary"
              style={{ marginTop: 16 }}
              onClick={() => {
                setOpen(false);
                openModal();
              }}
            >
              {header.cta}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
