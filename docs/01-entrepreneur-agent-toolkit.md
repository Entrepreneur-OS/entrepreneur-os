# Entrepreneur Agent Toolkit — what to absorb (and what to ignore)

> A curated, **vision-grounded** catalog of online Claude/agent resources — skills,
> plugins, MCP servers, knowledge sources — picked through one lens:
> *does this help a solo engineer become a paying entrepreneur, or is it more
> beautiful scaffolding?* Researched 2026-06-30. Sources at the bottom.

---

## The filter (read this first)

This repo's stated bottleneck is **monetisation + follow-through, not technical skill**
(`docs/00-context-handoff.md` §1). That changes what "useful" means here.

So every item below is sorted into one of two buckets — and one anti-pattern:

- **🧠 Knowledge sources** — things that feed the *knowledge graph itself* (frameworks,
  concept libraries, expert mental models). These are the most on-vision: the repo's
  whole point is compounding business judgment, not collecting tools.
- **🛠 Capability tools** — things that let the founder *do real business work* faster
  (build a deck, model finances, research a market, pull CRM data). On-vision only
  when there's a **real, live task** to point them at.
- **🪤 The trap** — installing 50 plugins "to be ready." That is the exact
  engineer-brain failure mode the context handoff warns about (§5, *the beautiful
  empty cathedral*). A tool with no live task attached is scaffolding, not progress.

> **Candid take:** for *this* founder, the first three rows of the "🧠 Knowledge"
> table matter more than the entire "🛠 Capability" section. Capability tools are a
> trap until there is a customer, a deck to send, or a market to size **this week**.

---

## 🧠 Knowledge sources — feed the graph

These don't *do* tasks; they teach the **vocabulary and mental models** the repo is
built to compound. They map almost 1:1 onto the `concepts/` template's "How experts
reason with it" section.

| Resource | What it gives the graph | Why on-vision | Link |
|---|---|---|---|
| **`phuryn/pm-skills`** (MIT, free) | 68 product-management skills across discovery → strategy → GTM → growth: `opportunity-solution-tree`, `pricing-strategy`, `market-sizing`, `north-star-metric`, `create-prd`. Each skill *is* a mini knowledge object. | Mine these for concept names + expert framing, then write them up as `concepts/` files. A ready-made syllabus of what a founder must know. | [github](https://github.com/phuryn/pm-skills) |
| **`anthropics/skills`** → `brand-guidelines`, `mcp-builder`, `skill-creator` (Apache-2.0) | Official reference skills. `skill-creator` teaches you to *author* skills well — directly useful for turning concepts into reusable agent skills later. | First-party, reliable, vendor-neutral. The gold standard for "what a good skill looks like." | [github](https://github.com/anthropics/skills) |
| **everything-claude-code** business skills (already cloned locally) | `market-research`, `business-strategy` (Blue Ocean, Porter, Business Model Canvas), `investor-materials`, `investor-outreach`, `content-engine`. | Frameworks named explicitly = a backlog of `concepts/` to write. You already have this at `/Users/bm/cod/claude/everything-claude-code/`. | [github](https://github.com/affaan-m/everything-claude-code) |
| **Agent Skills open standard** (`agentskills.io`, Dec 2025) | The vendor-neutral spec behind `SKILL.md`. | Directly serves the repo's **portability** principle (`AGENTS.md`, "optimise for any model"). Write concepts as portable skills and they run on GPT/Gemini too. | [agentskills.io](https://agentskills.io) · [anthropic](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills) |

**How to actually use these:** don't install them as live tools yet. **Read them as a
curriculum.** Each skill folder names a concept + how experts wield it → that's a
`concepts/<slug>.md` waiting to be written. This is the highest-leverage move on the
whole page.

---

## 🛠 Capability tools — only when a live task demands one

Install **on demand**, the day you have the task. Each row notes the *trigger* that
justifies it. No trigger → don't install (🪤).

### Build investor / sales artifacts
| Tool | Trigger to install | Source |
|---|---|---|
| **`anthropics/skills` document skills** — `pptx`, `xlsx`, `docx`, `pdf` | You're building a real **pitch deck** (pptx), **financial model** (xlsx), or one-pager. Source-available, first-party. | `/plugin marketplace add anthropics/skills` then `/plugin install document-skills@anthropic-agent-skills` |
| **SaaS CFO / financial-model skill** (community) | You're projecting **MRR/ARR, CAC, LTV, cohorts** for a real fundraise or pricing decision. | [Snyk roundup](https://snyk.io/articles/top-8-claude-skills-entrepreneurs-startup-founders-solopreneurs/) |
| **`frontend-design`** (official, 829k installs — #1 plugin) | You're shipping a real **landing page** to test demand. Pairs with the repo's `frontend-design` skill. | `/plugin install frontend-design@claude-plugins-official` |

### Research a market / competitor (this is the founder's daily bread)
| Tool | What it does | Source |
|---|---|---|
| **Exa MCP** | Semantic/neural web search built for AI — discovery-oriented research where phrasing varies. | `claude mcp add exa -e EXA_API_KEY=… -- npx -y exa-mcp-server` |
| **Firecrawl MCP** | Scrape/crawl competitor sites → clean Markdown. Highest relevance in independent benchmarks (4.30/5). 130k+ ⭐. | `claude mcp add firecrawl -e FIRECRAWL_API_KEY=… -- npx -y firecrawl-mcp` |
| **Context7 MCP** (#1 MCP by installs, official) | Version-specific docs in-context — useful when you *are* building the product. | `claude mcp add context7 -- npx -y @upstash/context7-mcp@latest` |
| Built-in `deep-research` skill | You already have a fan-out + verify research harness. **Use this before reaching for a paid API.** | local skill |

### Run the business (post-revenue, mostly not yet)
| Tool | Trigger | Source |
|---|---|---|
| **Stripe MCP** | You have **paying customers** and want billing data in-context. | official remote MCP |
| **HubSpot MCP** (free, GA in 2026) | You have a **pipeline** worth querying (contacts, deals). | HubSpot remote MCP |
| **Zapier MCP** | A specific repetitive workflow across 8,000+ apps is eating your time. | `actions.zapier.com/mcp` |

> Note: the marketing/sales MCP universe is huge (GA4, Google Ads, Ahrefs, Apollo,
> Attio, SegmentStream…). **Resist the urge to catalog them all.** A founder pre-revenue
> needs ~zero of them. Bookmark this paragraph; return when you have a funnel to measure.

---

## The official baseline (already strong, don't over-shop)

As of 2026 the **official marketplace** ships ~101 plugins (33 Anthropic + 68 partner:
GitHub, Playwright, Supabase, Figma, Vercel, Linear, Sentry, Stripe, Firebase). Top
plugins by install: **Frontend Design (829k), Superpowers (752k), Context7 (348k)** —
you already run Superpowers. The community side (ClaudePluginHub, claudemarketplaces.com,
awesome-claude-plugins) tracks 2,500+ plugins across 190+ marketplaces. **Breadth is not
your problem; follow-through is.**

---

## What to actually do this week (the anti-trap)

1. **Don't install anything yet.** (Yes, really.)
2. **Read `phuryn/pm-skills` + everything-claude-code business skills as a curriculum.**
   Pull out 10 concept names you don't deeply understand.
3. **Write 3–5 of them as `concepts/` files** — the ones from the handoff (§7): **ICP,
   JTBD, CAC, LTV, PMF**. That's a *living graph*, not a tool shelf.
4. **The first time a concept needs real data** (e.g. sizing a market for `concepts/tam-sam-som.md`)
   — *then* install Exa or Firecrawl. Tool arrives pulled by a task, never pushed ahead of one.
5. Keep `~/.claude-borahanmirzaii/reference/` (your existing 7-file dev catalog) for the
   *engineering* side. This doc is the *entrepreneurship* lens — they don't overlap.

---

## Sources

- [anthropics/skills](https://github.com/anthropics/skills) · [Agent Skills (Anthropic eng blog)](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills) · [agentskills.io standard](https://agentskills.io)
- [phuryn/pm-skills](https://github.com/phuryn/pm-skills) · [affaan-m/everything-claude-code](https://github.com/affaan-m/everything-claude-code)
- [Snyk — Top 8 Claude skills for entrepreneurs](https://snyk.io/articles/top-8-claude-skills-entrepreneurs-startup-founders-solopreneurs/) · [Snyk — Claude skills for PMs](https://snyk.io/articles/7-claude-skills-product-managers/)
- [Composio — best Claude Code plugins 2026](https://composio.dev/content/top-claude-code-plugins) · [claudemarketplaces.com](https://claudemarketplaces.com/)
- [mcp.directory — top MCP servers 2026](https://mcp.directory/blog/top-10-most-popular-mcp-servers) · [SegmentStream — best MCPs for marketers](https://segmentstream.com/blog/articles/best-mcp-servers-for-marketers)
- [Firecrawl — deep research APIs](https://www.firecrawl.dev/blog/best-deep-research-apis) · [Amplemarket — MCPs for sales](https://www.amplemarket.com/blog/best-mcp-servers-for-sales)
