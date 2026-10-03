import type { Metadata } from "next";
import ProjectBrief from "@/components/ProjectBrief";
import { ENTITY } from "@/data/entity";

export const metadata: Metadata = {
  title: "Start a Project — Capricorn Hub",
  description:
    "Tell us about your business and what you need built, and we will come back with a proposal, timeline and quote.",
};

export default function StartAProjectPage() {
  return (
    <main className="section" style={{ paddingTop: "var(--s8)" }}>
      <div className="brief-grid">
        <div className="brief-intro">
          <h1 className="display display-fit" style={{ marginBottom: "var(--s5)" }}>
            Start a project.
          </h1>

          <p style={{ fontSize: "16px", lineHeight: 1.6, maxWidth: "48ch", marginBottom: "var(--s3)" }}>
            This brief helps us understand your business, your goals and what
            you need built, so we can come back with an accurate proposal,
            timeline and quote rather than guesswork.
          </p>

          <p style={{ fontSize: "16px", lineHeight: 1.6, maxWidth: "48ch", marginBottom: "var(--s3)" }}>
            It takes about five minutes. The clearer your answers, the sharper
            our proposal. We reply within one to two business days.
          </p>

          <p className="muted" style={{ fontSize: "14px", lineHeight: 1.6, maxWidth: "48ch" }}>
            Would rather just send a message? Email {ENTITY.email}.
          </p>
        </div>

        <div>
          <ProjectBrief />
        </div>
      </div>
    </main>
  );
}
