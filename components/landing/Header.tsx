"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import type { Content } from "@/lib/content";
import { CONTACT_HREF } from "@/lib/config";

export function Header({ content }: { content: Content }) {
  const [open, setOpen] = useState(false);
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
          <a className="lang-toggle" href={header.langSwitch.href}>
            {header.langLabel}
            <ChevronDown size={14} aria-hidden="true" />
          </a>
          <a className="btn btn-primary btn-sm header-cta-desktop" href={CONTACT_HREF}>
            {header.cta}
          </a>
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
            <a
              className="btn btn-primary"
              style={{ marginTop: 16 }}
              href={CONTACT_HREF}
              onClick={() => setOpen(false)}
            >
              {header.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
