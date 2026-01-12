SPEC.md

Purpose

This repository is a starter codebase for high-converting SaaS landing pages and microsites.

The goal is to produce a reusable, content-driven, section-based landing page system where new pages can be created primarily by editing content and theme files — not by rewriting layout or architecture.

This repo is opinionated toward conversion, simplicity, and agent-friendliness.

Reference

A reference layout image is provided in /docs as guidance for section order and intent. It represents the target anatomy of the landing page.

Do not attempt to recreate the image visually pixel-for-pixel. Use it only as a structural and conceptual guide.

Tech Stack

Use exactly:
	•	Next.js (App Router)
	•	Tailwind CSS
	•	shadcn/ui
	•	lucide-react icons
	•	framer-motion (light usage only)

Do not introduce additional UI frameworks, CSS systems, or state management libraries.

Core Principle

The page must be driven by a single content source of truth.

A user or agent should be able to generate a new landing page by editing:
	•	a content file (copy, structure, data)
	•	optionally a theme file (colors, fonts, radius)
	•	assets in /public

They should not need to touch JSX to change copy or section structure.

High-Level Architecture
	•	Each landing page section is its own component.
	•	Sections are rendered from a central registry in a fixed default order.
	•	Sections can be enabled/disabled via content config.
	•	Each section supports simple layout variants.
	•	No section should depend on another section’s internal logic.

Target Sections

Implement these sections in this order by default:
	1.	Navbar (sticky, anchor links, CTA)
	2.	Hero
	3.	Partners / Logos
	4.	Benefits (bento style cards)
	5.	How It Works (3 steps)
	6.	Pricing (3 plans, middle highlighted)
	7.	Testimonials
	8.	FAQ
	9.	Final CTA
	10.	Footer

Each section must be responsive and production-ready.

Implementation Stages

Stage 1 — Project scaffold
Set up Next.js, Tailwind, shadcn/ui, lucide, framer-motion.
Create base layout components: Container, Section, Button.

Stage 2 — Content schema
Create a single typed content file that defines all section content and structure.
All copy must come from this file.

Stage 3 — Section registry
Create a renderer that outputs sections based on the content schema.

Stage 4 — Build sections
Implement each section as an isolated component that consumes schema data.

Stage 5 — Polish + defaults
Ensure sensible defaults, spacing consistency, responsive layouts, and clear CTAs.

Definition of Done

This project is complete when:
	•	The full landing page renders using only content data.
	•	A new page can be produced by editing only the content file and assets.
	•	No section requires manual wiring to appear or disappear.
	•	The design matches modern SaaS landing standards.
	•	Build passes with no lint or type errors.

Guardrails
	•	Do not over-engineer.
	•	Prefer clarity over abstraction.
	•	Prefer explicit over clever.
	•	Do not rewrite structure unless explicitly required.
	•	Do not introduce unnecessary configuration layers.
	•	Do not collapse sections into generic “one component for everything.”

Your role

You are building a reusable product, not a one-off landing page.

Optimize for:
	•	Agent usability
	•	Human readability
	•	Conversion best practices
	•	Long-term extensibility