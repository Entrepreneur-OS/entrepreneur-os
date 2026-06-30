# Entrepreneur-OS — Context & Handoff

> Durable context for any AI agent (Claude Code, ChatGPT, Gemini, local models) and
> for the founder's future self. Written 2026-06-30. This is what is currently
> understood — not a final spec. It captures intent, constraints, the source
> brainstorm, a critical analysis of it, and the open decision.

---

## 1. Who this is for (the founder)

- **Solo builder.** Tech-, stack-, and platform-agnostic. Rare, deep technical ability.
- Lives in the terminal: **WezTerm + Zellij + gh + Claude Code + yazi + eza + nvim**.
  GitHub-first workflow (Issues / PRs / Projects / Discussions / Releases are the
  single source of truth — no Notion/Linear/Confluence).
- Non-native English speaker, actively levelling up (wants rich English + glosses).
- **The real bottleneck (stated explicitly):** *not* technical skill. It is
  **monetisation, financial stability, and follow-through**, hampered by ADHD.
  Past pattern: builds sophisticated systems, never converts capability into a
  repeatable, paying business.
- **The transition:** from *software engineer* identity → *entrepreneur* identity.
  Goal is financial freedom, stability, and better entrepreneurial judgment.

## 2. The goal that started this

The founder spends most of their working time with LLMs. They realised that
**fluency in the precise vocabulary and mental models of business** dramatically
improves what an LLM can do for them. A vague prompt ("help me sell software")
gets generic advice; an expert-framed prompt ("design a GTM strategy for a
bootstrapped B2B SaaS targeting recruiting agencies with a sub-$500 CAC") unlocks
a far richer region of the model's knowledge.

So the immediate need is to **learn the industry language** — business, finance,
marketing, sales, investing, strategy, psychology, plus adjacent fields (trends,
politics, macro, human behaviour) — under the umbrella of **entrepreneurship**.

## 3. The vision (Entrepreneur-OS)

The founder created a **GitHub organization** named `Entrepreneur-OS`
(https://github.com/Entrepreneur-OS) — deliberately an *org*, not a single repo.

Vision (one sentence): **An AI-native knowledge operating system that
systematically transforms an experienced software engineer into an exceptional
entrepreneur by building a structured, interconnected, versioned knowledge graph
of entrepreneurship.**

Core principles:
- Knowledge over information. Concepts over definitions. Relationships over lists.
- Mental models over memorisation. Evidence over opinion.
- Versioned understanding (record *why* your understanding changed, not just the
  final definition).
- GitHub is the source of truth. AI is a research partner, not an authority.
- An *asset that compounds*, not a pile of notes.

## 4. The source brainstorm (an earlier AI thread)

The founder brainstormed this extensively with another AI before arriving here.
That thread proposed a layered "AI Operating Manual":

- **Layered context for the agent:** Identity → Vision → Constitution → Knowledge
  Standard → Workflow → Tasks.
- **Files:** `FOUNDER.md` (outranks everything), `identity/founder.md`, `vision.md`,
  `constitution.md`, `philosophy.md`, `docs/research-workflow.md`,
  `docs/knowledge-standard.md`, `docs/repository-architecture.md`.
- **Templates:** `templates/{concept,research,company,person,book,framework}.md`.
- **Prompts:** `prompts/{discover-domain,research-concept,compare-frameworks,...}.md`.
- **Playbooks:** `playbooks/{onboarding,adding-domain,reviewing-concepts}.md`.
- **CLAUDE.md as a thin "loader"** that points to the above in reading order.
- **Possibly one repo per domain** (business, marketing, finance, sales, ...).
- **GitHub primitives as a learning loop:** Issues = open questions, Discussions =
  thinking with your future self, Projects = a learn-board (Backlog → Researching →
  Reading → Understood → Applied → Mastered), PRs = preserved reasoning, Releases =
  quarterly versions of "your entrepreneurial brain."
- **A "knowledge object" template** richer than a definition (what / why it exists /
  problem it solves / when used / who cares / misconceptions / related / prereqs /
  consequences / metrics / questions / LLM prompts / references / how-my-
  understanding-evolved).
- **An identity-gap table** (engineer question vs. entrepreneur question) as the
  most important artifact.
- **Agent portability:** optimise for any model, not just Claude.

## 5. Critical analysis (Claude Code's honest take)

**The vision is right. The proposed *structure* is a trap for this founder
specifically.**

- The proposed layout is a **beautiful empty cathedral**: FOUNDER.md + identity.md
  + vision.md + constitution.md + philosophy.md + templates/ + prompts/ +
  playbooks/ + 20 domain folders/repos — all before a single concept is learned.
- Given the **stated bottleneck (ADHD + follow-through)**, elaborate scaffolding is
  the precise failure mode: weeks spent perfecting meta-structure (the fun
  engineer-brain part), nothing actually learned, no dollars closer to freedom.
- It is self-contradicting: the thread warns "success is not the number of markdown
  files," then optimises for producing markdown files.

**Keep these ideas (genuinely sharp):**
- The identity-gap table (engineer → entrepreneur) — the north star.
- Knowledge objects, not definitions — but ONE template.
- GitHub primitives as a learning loop (Issues = questions, Project = learn-board,
  Discussions = thinking).
- The LLM-vocabulary angle (weak prompt → expert prompt per concept) — directly
  serves the original goal.
- Agent portability (AGENTS.md, not Claude-only).

**Cut hard (at least for now):**
- Multiple repos / org-of-repos. Start with **one repo**.
- Five overlapping manifesto files (FOUNDER/identity/vision/constitution/philosophy
  all say the same thing). Collapse to one short file.
- `prompts/` and `playbooks/` folders before there is content to put in them.
- CLAUDE.md as a pointer-chaser. CLAUDE.md is auto-loaded; agents don't reliably
  chase "read these 5 files in order." Put the operative content directly in it.

**Guiding principle:** *the OS earns its complexity by growing into it.* Don't
pre-build the org chart of a company with no customers.

## 6. The open decision (not yet resolved)

How to do the actual build — three options put to the founder:

1. **Lean & alive today (recommended):** ONE repo. Tiny `CLAUDE.md` + identity-gap
   doc + ONE concept template. Then immediately write the first 3–5 *real*
   concepts (ICP, CAC, LTV, PMF, ...) and wire the GitHub learning loop. Founder
   ends the session with a living system + actual knowledge, not empty folders.
2. **Full Operating Manual:** scaffold the entire layered structure now, fill
   content later. Maximal structure up front; high empty-cathedral risk.
3. **Spec it first:** no code; converge on a written design doc, then build.

Reversibility note: **lean → full is always possible later; nothing is lost.**
The founder has not yet chosen. (This doc was requested as a context dump before
that choice — "write down all you understand on disk.")

## 7. Recommended first concepts (when build starts)

Tied to the original "learn the language" goal — the highest-leverage, most
frequently-used terms a zero-phase founder will hit immediately:
**ICP, JTBD, MVP, PMF, CAC, LTV, MRR/ARR, churn, GTM, positioning.**

Each as a knowledge object with the LLM weak-prompt → expert-prompt section, so the
repo simultaneously teaches the concept *and* teaches how to wield it with an LLM.

## 8. Working agreements (how the agent should behave here)

- Be a candid technical partner, not a yes-man. Push back when structure threatens
  follow-through.
- Bias toward **shipping something alive** over perfect scaffolding.
- Rich, native-register English with brief inline glosses for new terms.
- For substantive answers, also produce the Persian RTL HTML digest (house style).
- GitHub via `gh`; never the web UI when `gh` can do it. Use `claude-issue` for
  filing issues.
