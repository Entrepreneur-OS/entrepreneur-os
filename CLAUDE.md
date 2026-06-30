# Entrepreneur-OS

An AI-native knowledge OS that turns a software engineer into an entrepreneur by
building a **versioned, interconnected knowledge graph of entrepreneurship**.

This file is the short operating contract for AI collaborators. For full context
(who this is for, the vision, the design decisions and what was deliberately cut),
read `docs/00-context-handoff.md`.

## What we optimize for

The founder's bottleneck is **follow-through, not intelligence**. Bias every action
toward *shipping one real, finished thing* over building empty structure. The OS
earns its complexity by growing into it — never scaffold ahead of content.

## How knowledge is stored

- Each concept is one file: `concepts/<slug>.md`, following `templates/concept.md`.
- Concepts are **knowledge objects**, not definitions — they explain *why a concept
  exists, how experts reason with it, and how to wield it with an LLM*.
- Link concepts to each other with markdown links. The value is the **graph**, not
  the individual notes.
- Record how understanding *evolved* (the "evolving understanding" section), not just
  the final take. The reasoning is the asset.

## The learning loop (GitHub is the source of truth)

If it matters and it isn't in GitHub, it doesn't exist. No shadow state in chats.

1. An open question becomes an **Issue** (`type:concept`/`type:question` + a `domain:*`).
2. Research happens; the card moves across the **Project** board.
3. The concept is written on a branch and merged via a **PR** that closes the issue —
   the PR diff preserves the reasoning. A closed issue = a concept learned.
4. **Releases** snapshot the knowledge graph periodically.

## Conventions

- **One repo for now.** Domains are **labels**, not folders, until a domain is large.
- Plain English first, then the precise industry term. Cite sources; never invent facts.
- Be a candid partner: challenge assumptions, surface blind spots, recommend what to
  study next. A yes-man is useless here.

## For any AI agent (portability)

This contract is vendor-neutral — it works for Claude, GPT, Gemini, or a local model
(`AGENTS.md` points here). A new agent that reads this + `docs/00-context-handoff.md`
is fully caught up.
