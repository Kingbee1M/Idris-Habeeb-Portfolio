"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const resume = {
  name: "Habeeb Idris Babatunde Resume.pdf",
  href: "/docs/Habeeb%20Idris%20Babatunde%20Resume.pdf",
  details: "PDF DOCUMENT · 109 KB",
};

type ResumeDownloadProps = { dark: boolean };

export default function ResumeDownload({ dark }: ResumeDownloadProps) {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const trigger = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab") return;

      const focusable = document.querySelectorAll<HTMLElement>(
        ".resume-dialog button, .resume-dialog a[href]",
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <div className="resume-float">
        <button
          className="resume-float-button"
          ref={triggerRef}
          type="button"
          aria-label="Open resume download details"
          aria-haspopup="dialog"
          onClick={() => setOpen(true)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3v11m0 0 4-4m-4 4-4-4M5 16v4h14v-4" />
          </svg>
        </button>
        <span>Download my resume</span>
      </div>

      {open
        ? createPortal(
            <div
              className={`resume-overlay ${dark ? "theme-dark" : "theme-light"}`}
              data-theme={dark ? "dark" : "light"}
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) setOpen(false);
              }}
            >
              <section
                className="resume-dialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby="resume-dialog-title"
                aria-describedby="resume-dialog-description"
              >
                <div className="resume-dialog-topline">
                  <span><i /> RESUME / DOWNLOAD</span>
                  <button
                    ref={closeButtonRef}
                    type="button"
                    className="resume-close"
                    aria-label="Close resume details"
                    onClick={() => setOpen(false)}
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="m6 6 12 12M18 6 6 18" />
                    </svg>
                  </button>
                </div>

                <p className="resume-dialog-kicker">A COPY OF MY EXPERIENCE</p>
                <h2 id="resume-dialog-title">My resume.</h2>
                <p className="resume-dialog-description" id="resume-dialog-description">
                  A concise overview of my experience, skills, and recent work.
                </p>

                <div className="resume-file-card">
                  <span className="resume-file-icon" aria-hidden="true">PDF</span>
                  <span className="resume-file-copy">
                    <b>{resume.name}</b>
                    <small>{resume.details}</small>
                  </span>
                  <span className="resume-file-status">READY</span>
                </div>

                <a className="resume-download-link" href={resume.href} download={resume.name}>
                  Download resume
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 3v11m0 0 4-4m-4 4-4-4M5 16v4h14v-4" />
                  </svg>
                </a>
                <p className="resume-dialog-footnote">PDF FILE · APPROX. 109 KB</p>
              </section>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
