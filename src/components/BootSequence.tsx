import React, { useCallback, useEffect, useRef, useState } from "react";
import PortfolioDashboard from "./PortfolioDashboard";

const NAME = "ABHISHEK RAGHURAMAN";
const ROLE = "Security Engineer";
const GLYPHS = "!<>-_\\/[]{}—=+*^?#0123456789ABCDEF";

const bootLines = [
  {
    tag: "[net]",
    message: "establishing secure channel",
    type: "normal",
  },
  {
    tag: "[auth]",
    message: "verifying credentials",
    type: "normal",
  },
  {
    tag: "[scan]",
    message: "checking for known threats ... 0 found",
    type: "success",
  },
  {
    tag: "[keys]",
    message: "loading decryption keys",
    type: "normal",
  },
  {
    tag: "[id]",
    message: "reconstructing identity layer",
    type: "warning",
  },
];

const sleep = (milliseconds: number) =>
  new Promise<void>((resolve) => {
    window.setTimeout(resolve, milliseconds);
  });

const randomCharacter = () =>
  GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

const BootSequence: React.FC = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  const bootRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const logRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);
  const percentageRef = useRef<HTMLSpanElement | null>(null);
  const cipherRef = useRef<HTMLDivElement | null>(null);
  const roleRef = useRef<HTMLDivElement | null>(null);
  const grantedRef = useRef<HTMLDivElement | null>(null);

  const typeLogLines = async () => {
    if (!logRef.current) return;

    for (const line of bootLines) {
      const row = document.createElement("div");
      row.className = "boot-log-line";

      const tag = document.createElement("span");
      tag.className = "boot-log-tag";
      tag.textContent = line.tag;

      const message = document.createElement("span");
      message.className = `boot-log-message ${line.type}`;
      message.textContent = line.message;

      row.append(tag, message);
      logRef.current.appendChild(row);

      await sleep(280);
    }
  };

  const fillProgressBar = async () => {
    for (let value = 0; value <= 100; value += 2) {
      if (barRef.current) {
        barRef.current.style.width = `${value}%`;
      }

      if (percentageRef.current) {
        percentageRef.current.textContent = `${value}%`;
      }

      await sleep(14);
    }
  };

  const decodeName = async () => {
    if (!cipherRef.current) return;

    const targetCharacters = NAME.split("");

    const currentCharacters = targetCharacters.map((character) =>
      character === " " ? " " : randomCharacter(),
    );

    const revealOrder = targetCharacters
      .map((_, index) => index)
      .filter((index) => targetCharacters[index] !== " ");

    for (let index = revealOrder.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));

      [revealOrder[index], revealOrder[randomIndex]] = [
        revealOrder[randomIndex],
        revealOrder[index],
      ];
    }

    const lockedCharacters = new Set<number>();

    const renderCipher = () => {
      if (!cipherRef.current) return;

      cipherRef.current.replaceChildren();

      currentCharacters.forEach((character, index) => {
        const characterElement = document.createElement("span");

        if (
          lockedCharacters.has(index) ||
          targetCharacters[index] === " "
        ) {
          characterElement.className = "locked-character";
          characterElement.textContent = targetCharacters[index];
        } else {
          characterElement.textContent = character;
        }

        cipherRef.current?.appendChild(characterElement);
      });
    };

    renderCipher();

    const scrambleInterval = window.setInterval(() => {
      currentCharacters.forEach((_, index) => {
        if (
          targetCharacters[index] !== " " &&
          !lockedCharacters.has(index)
        ) {
          currentCharacters[index] = randomCharacter();
        }
      });

      renderCipher();
    }, 45);

    for (const index of revealOrder) {
      await sleep(90);

      lockedCharacters.add(index);
      currentCharacters[index] = targetCharacters[index];

      renderCipher();
    }

    window.clearInterval(scrambleInterval);
    renderCipher();
  };

  const runSequence = useCallback(async () => {
    if (
      !bootRef.current ||
      !heroRef.current ||
      !logRef.current ||
      !barRef.current ||
      !percentageRef.current ||
      !cipherRef.current ||
      !roleRef.current ||
      !grantedRef.current
    ) {
      return;
    }

    setShowDashboard(false);

    logRef.current.innerHTML = "";
    barRef.current.style.width = "0%";
    percentageRef.current.textContent = "0%";
    cipherRef.current.textContent = "";

    roleRef.current.classList.remove("show");
    grantedRef.current.classList.remove("show");
    bootRef.current.classList.remove("leaving");
    heroRef.current.classList.remove("show");

    bootRef.current.style.display = "flex";

    await sleep(300);

    await Promise.all([typeLogLines(), fillProgressBar()]);

    await sleep(200);
    await decodeName();

    roleRef.current.classList.add("show");

    await sleep(300);
    grantedRef.current.classList.add("show");

    await sleep(900);

    bootRef.current.classList.add("leaving");

    await sleep(650);

    bootRef.current.style.display = "none";
    heroRef.current.classList.add("show");

    await sleep(1200);

    setShowDashboard(true);
  }, []);

  useEffect(() => {
    void runSequence();
  }, [runSequence]);

  if (showDashboard) {
    return <PortfolioDashboard />;
  }

  return (
    <>
      <style>{`
        :root {
          --intro-background: #0a0e12;
          --intro-raised: #10161c;
          --intro-amber: #ffb347;
          --intro-cyan: #4ce0d2;
          --intro-slate: #6b7684;
          --intro-slate-dim: #3d454f;
          --intro-line: #1c242c;
          --intro-white: #f2f4f6;
        }

        * {
          box-sizing: border-box;
        }

        .boot-stage {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          background: var(--intro-background);
          color: var(--intro-slate);
          font-family: "IBM Plex Mono", Consolas, monospace;
        }

        .boot-overlay {
          position: absolute;
          inset: 0;
          z-index: 20;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: var(--intro-background);
          transition:
            opacity 0.6s ease,
            filter 0.6s ease;
        }

        .boot-overlay.leaving {
          opacity: 0;
          filter: blur(6px);
          pointer-events: none;
        }

        .boot-scanline {
          position: absolute;
          right: 0;
          left: 0;
          height: 2px;
          opacity: 0.5;
          filter: blur(0.5px);
          background: linear-gradient(
            90deg,
            transparent,
            var(--intro-cyan) 40%,
            var(--intro-cyan) 60%,
            transparent
          );
          animation: bootSweep 3.2s linear infinite;
        }

        @keyframes bootSweep {
          from {
            top: -2px;
          }

          to {
            top: 100%;
          }
        }

        .boot-noise {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: repeating-linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.015) 0,
            rgba(255, 255, 255, 0.015) 1px,
            transparent 1px,
            transparent 3px
          );
          mix-blend-mode: overlay;
        }

        .boot-log {
          width: min(560px, 90vw);
          min-height: 190px;
          font-size: 12.5px;
          line-height: 1.9;
          letter-spacing: 0.02em;
        }

        .boot-log-line {
          display: flex;
          gap: 10px;
          opacity: 0;
          animation: bootAppear 0.15s ease forwards;
        }

        @keyframes bootAppear {
          to {
            opacity: 1;
          }
        }

        .boot-log-tag {
          width: 64px;
          flex-shrink: 0;
          color: var(--intro-slate-dim);
        }

        .boot-log-message {
          color: var(--intro-slate);
        }

        .boot-log-message.success {
          color: var(--intro-cyan);
        }

        .boot-log-message.warning {
          color: var(--intro-amber);
        }

        .boot-progress-row {
          display: flex;
          align-items: center;
          gap: 14px;
          width: min(560px, 90vw);
          margin-top: 22px;
          color: var(--intro-slate-dim);
          font-size: 11.5px;
          letter-spacing: 0.08em;
        }

        .boot-progress-track {
          position: relative;
          flex: 1;
          height: 3px;
          overflow: hidden;
          background: var(--intro-line);
        }

        .boot-progress-fill {
          position: absolute;
          inset: 0 auto 0 0;
          width: 0;
          background: var(--intro-amber);
          box-shadow: 0 0 8px rgba(255, 179, 71, 0.6);
          transition: width 0.1s linear;
        }

        .boot-percentage {
          width: 34px;
          color: var(--intro-amber);
          text-align: right;
          font-variant-numeric: tabular-nums;
        }

        .boot-identity {
          margin-top: 46px;
          text-align: center;
        }

        .boot-cipher {
          min-height: 1.2em;
          color: var(--intro-slate-dim);
          font-family: "Space Grotesk", "Segoe UI", sans-serif;
          font-size: clamp(30px, 5vw, 52px);
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .locked-character {
          color: var(--intro-white);
        }

        .boot-role {
          margin-top: 10px;
          color: var(--intro-cyan);
          font-size: 12.5px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .boot-role.show {
          opacity: 1;
        }

        .boot-granted {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 26px;
          padding: 6px 14px;
          border: 1px solid var(--intro-amber);
          color: var(--intro-amber);
          font-size: 11px;
          letter-spacing: 0.2em;
          opacity: 0;
          transform: translateY(4px);
          transition:
            opacity 0.4s ease,
            transform 0.4s ease;
        }

        .boot-granted::before {
          color: var(--intro-amber);
          font-size: 8px;
          content: "●";
        }

        .boot-granted.show {
          opacity: 1;
          transform: translateY(0);
        }

        .boot-hero {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px;
          text-align: center;
          opacity: 0;
          transition: opacity 0.8s ease;
        }

        .boot-hero.show {
          opacity: 1;
        }

        .boot-eyebrow {
          margin-bottom: 18px;
          color: var(--intro-cyan);
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
        }

        .boot-hero h1 {
          margin: 0;
          color: var(--intro-white);
          font-family: "Space Grotesk", "Segoe UI", sans-serif;
          font-size: clamp(34px, 6vw, 64px);
          font-weight: 700;
        }

        .boot-hero p {
          max-width: 560px;
          margin: 18px auto 0;
          color: var(--intro-slate);
          font-size: 13.5px;
          line-height: 1.7;
        }

        @media (prefers-reduced-motion: reduce) {
          .boot-scanline,
          .boot-progress-fill,
          .boot-overlay,
          .boot-hero,
          .boot-granted,
          .boot-role {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <section className="boot-stage">
        <div ref={bootRef} className="boot-overlay">
          <div className="boot-scanline" />
          <div className="boot-noise" />

          <div ref={logRef} className="boot-log" />

          <div className="boot-progress-row">
            <span>DECRYPTING</span>

            <div className="boot-progress-track">
              <div ref={barRef} className="boot-progress-fill" />
            </div>

            <span ref={percentageRef} className="boot-percentage">
              0%
            </span>
          </div>

          <div className="boot-identity">
            <div ref={cipherRef} className="boot-cipher" />

            <div ref={roleRef} className="boot-role">
              {ROLE}
            </div>

            <div ref={grantedRef} className="boot-granted">
              ACCESS GRANTED
            </div>
          </div>
        </div>

        <div ref={heroRef} className="boot-hero">
          <div className="boot-eyebrow">
            Portfolio // Authenticated Session
          </div>

          <h1>Abhishek Raghuraman</h1>

          <p>Security Engineer</p>
        </div>
      </section>
    </>
  );
};

export default BootSequence;