# NRR & Expansion Revenue — Net Revenue Retention

> Plain English: how much a group of *existing* customers is worth to you a year
> later — before you sign anyone new. Expert phrasing: **Net Revenue Retention (NRR**,
> a.k.a. Net Dollar Retention / NDR**)** — the revenue a cohort retains *plus* the
> revenue it expands into, minus contraction and churn, all measured on that cohort's
> starting base. When NRR > 100%, the installed base compounds on its own; growth stops
> depending on the [CAC](./cac.md) treadmill.

- **Domain:** finance
- **Stage:** growth
- **Prerequisites:** [mrr-arr](./mrr-arr.md) (NRR is a movement of the MRR bridge), [churn](./churn.md), [retention](./retention.md)
- **Related:** [pricing](./pricing.md) (the value-metric that makes expansion automatic), [ltv](./ltv.md) · **Contrast with:** Gross Revenue Retention (GRR), which caps at 100%

## What it is

**Net Revenue Retention** answers one question: *if I stopped acquiring customers
entirely, would the revenue from the customers I already have grow, hold flat, or
shrink over the next year?* You take a cohort's revenue at the start of a period, then
add every dollar of **expansion** (upgrades, more seats, more usage, cross-sell), and
subtract every dollar of **contraction** (downgrades, fewer seats) and **churn**
(customers who left entirely). Divide by the starting revenue. Crucially, **new logos
are excluded** — NRR is a closed-cohort measure of the base you already won.

```
NRR = (Starting MRR + Expansion − Contraction − Churn) / Starting MRR
```

The number is usually quoted as a percentage over a trailing 12 months. **NRR > 100%**
is the magic threshold: it means expansion out-ran contraction *and* churn combined, so
the base grew **with zero new sales**. That condition has a name — **"negative churn"**
(a.k.a. negative net churn): the leak in the bucket is more than offset by the existing
customers pouring in more water themselves.

**Expansion revenue** is the fuel. It comes in three flavours:
- **Upsell** — same product, bigger plan (Pro → Enterprise, higher tier).
- **Seat / usage growth** — the account simply *uses more* of what it bought (more
  users, more API calls, more GB stored). This is the holy grail because it's automatic.
- **Cross-sell** — a *different* product added to the account (a second module, an add-on).

## Why it exists / the problem it solves

Top-line growth hides a fatal ambiguity: a company growing revenue 40% could be a
durable compounding machine, or a leaky bucket sprinting to stay level — filling the top
with expensive new logos while the bottom drains through churn. Two companies with
identical new-sales numbers can have wildly different *quality* of growth. Gross metrics
can't tell them apart because they mix new acquisition in with the fate of the existing
base.

NRR exists to **isolate the fate of the base.** By deliberately excluding new logos, it
exposes the truth the top line conceals: *is the business we already built getting more
valuable or less valuable over time, on its own?* That's the question that predicts
whether growth is cheap and compounding — or a treadmill you have to keep buying.

## How experts reason with it

The insight a beginner misses: **NRR > 100% turns your customer base into a second growth
engine that runs without sales-and-marketing spend — and that second engine is what the
market actually pays a premium for.**

1. **Negative churn compounds.** A business with **120% NRR** grows ~20%/year *even if it
   never signs another customer.* Stack new logos on top of a base that's already
   compounding and growth becomes both fast *and* capital-efficient. This is why NRR is
   the headline SaaS metric: it decouples growth from the [CAC](./cac.md) treadmill.
2. **NRR ≠ GRR — and the gap is the whole story.** **Gross Revenue Retention (GRR)**
   subtracts contraction and churn but gives **no credit for expansion**, so it's capped
   at 100% — it measures pure *leakage*. NRR can exceed 100% because expansion is added
   back. Read them **together**: `GRR = 88%, NRR = 125%` means the base leaks 12% a year
   but expands 37 points on top — a strong product with a healthy value-metric. `GRR =
   70%, NRR = 102%` is a warning: heavy churn *masked* by a few whales expanding. Same
   NRR, opposite health. **NRR alone can lie; GRR is the honesty check.**
3. **Expansion is a pricing-design decision, not a sales tactic.** Whether the base
   expands automatically is decided upstream, when you pick the [pricing](./pricing.md)
   **value-metric.** Price on a metric that *grows as the customer succeeds* — seats,
   API calls, GB, transactions — and expansion becomes the default, not a renegotiation.
   Snowflake (consumption) and Slack (active seats) expand as usage grows; a flat
   per-company license does not. **You can't sell your way to great NRR if the pricing
   model doesn't let accounts grow.**
4. **NRR sits on top of the [MRR bridge](./mrr-arr.md).** It's the same four movements
   (new / expansion / contraction / churn) — but NRR drops the *new* term to isolate the
   cohort. [Retention](./retention.md) and [churn](./churn.md) drive the leak side;
   expansion drives the compounding side. Improve the value-metric and you lift expansion
   *and* revenue retention at once.
5. **It lifts the valuation multiple.** Predictable, compounding, low-CAC revenue is
   worth more per dollar. Public-market and VC benchmarks tie high NRR directly to higher
   ARR multiples, because a >100%-NRR base lets an investor underwrite next year's revenue
   before a single new deal closes.

The founder's takeaway: **chase expansion and kill contraction to push NRR past 100% —
but always read GRR alongside it.** NRR over 100% is the difference between a business
that compounds and one that runs to stand still; GRR is what stops you from lying to
yourself about how you got there.

## When you use it

- **Fundraising / board reporting** — NRR and ARR are the two headline numbers investors
  ask for first; NRR is often the single strongest predictor they weight.
- **Diagnosing growth quality** — separate "the base is compounding" from "we're
  out-running churn with new sales." Pair NRR with GRR to catch churn hidden under whales.
- **Pricing & packaging decisions** ([pricing](./pricing.md)) — choosing a value-metric,
  tiers, and add-ons explicitly to make expansion automatic.
- **Prioritizing product & CS work** — whether to invest in reducing gross churn (lift
  GRR) or in expansion paths (lift the NRR-minus-GRR gap).
- **Segmenting** — enterprise and SMB have very different NRR profiles; compare like with
  like, never blended.

## Metrics / how it's measured

```
NRR = (Starting MRR + Expansion − Contraction − Churn) / Starting MRR      # can exceed 100%
GRR = (Starting MRR            − Contraction − Churn) / Starting MRR        # capped at 100%
NRR − GRR = Expansion / Starting MRR   # the "expansion lift" — how much upsell adds back
```

**Worked >100% example.** Take a cohort that starts the year at **$100k MRR** — and sign
**zero** new customers all year, on purpose, to isolate the base:

| Movement | Amount |
|---|---|
| Starting MRR | **$100,000** |
| + Expansion (upsell + seat/usage growth) | **+ $30,000** |
| − Contraction (downgrades) | **− $5,000** |
| − Churn (customers who left) | **− $8,000** |
| **Ending MRR (existing cohort)** | **$117,000** |

```
NRR = (100,000 + 30,000 − 5,000 − 8,000) / 100,000 = 117,000 / 100,000 = 117%
GRR = (100,000            − 5,000 − 8,000) / 100,000 =  87,000 / 100,000 =  87%
Expansion lift = NRR − GRR = 30,000 / 100,000 = 30 percentage points
```

**Reading it:** the base *lost* 13% to contraction + churn (GRR = 87%) yet *grew* 17%
overall (NRR = 117%) — because $30k of expansion more than covered the $13k leak. That
17% is **growth from customers you already had, at effectively zero CAC.** This is
"negative churn": the existing book of business compounds on its own.

**Benchmarks (compare like segments only):** best-in-class SaaS runs **NRR ≥ 120%**
(enterprise) and **≥ 100%** (SMB). **GRR** above ~90% (enterprise) / ~80% (SMB) is
healthy. A large **NRR − GRR** gap on a *low* GRR is a flag, not a trophy: expansion is
papering over churn.

## Common misconceptions

- **"NRR and GRR are basically the same."** No — GRR ignores expansion and is capped at
  100% (pure leakage); NRR adds expansion back and can exceed 100%. Quoting only NRR
  hides how leaky the base is. **Always report both.**
- **"High NRR = healthy retention."** Not necessarily. A handful of whales expanding hard
  can push blended NRR over 100% while most of the base quietly churns. High NRR with
  *low* GRR is a churn problem wearing a growth costume. The GRR (and per-segment NRR)
  reveals it.
- **"Expansion is the sales team's job."** Expansion is mostly designed *upstream* in the
  [pricing](./pricing.md) value-metric. If accounts can't grow their spend as they
  succeed, no amount of upsell effort produces durable NRR.
- **"NRR includes new customers."** It deliberately excludes new logos — it's a
  *closed-cohort* measure of the existing base. Mixing new sales in defeats its purpose.
- **"Contraction doesn't matter if they didn't cancel."** A downgrade from $500 to $200
  is $300 of lost revenue — silent churn. It drags NRR just like a cancellation.
- **"NRR is an annual snapshot."** It's usually a *trailing-12-month* measure of a
  cohort's movement, not a point-in-time balance.

## Examples

- **Snowflake** has posted NRR around **~158%** at peak — because it charges for
  *consumption*: as a customer's data workloads grow, spend grows automatically. The
  value-metric *is* the expansion engine; almost no renegotiation required.
- **Slack** expanded as companies added active users (seats). Land in one team, spread
  org-wide, and revenue climbs with adoption — seat-based expansion driving NRR well
  above 100%.
- **The masked-churn trap:** a SaaS reports **NRR = 104%** and the founder celebrates.
  But **GRR = 74%** — a quarter of the base leaves every year, hidden by two enterprise
  accounts that tripled. The "growth" is one renewal away from collapse. The blended NRR
  lied; the GRR and per-segment split told the truth.

## Talking to an LLM about it

- **Weak prompt:** "How do I grow revenue without new customers?"
- **Better prompt:** "How do I calculate Net Revenue Retention for my SaaS, and what's a
  good number?"
- **Expert prompt:** "For a B2B SaaS cohort starting the year at $100k MRR with $30k
  expansion, $5k contraction, and $8k churned MRR and zero new logos, compute NRR and GRR,
  explain the gap between them, and tell me whether my growth is genuine base-compounding
  ('negative churn') or churn masked by a few expanding whales. Then recommend whether to
  prioritize lifting GRR (reduce gross churn) or widening the NRR−GRR gap (expansion), and
  what pricing value-metric would make expansion more automatic — and how each choice moves
  my valuation multiple."

The expert version supplies the full cohort movements, asks for **both** NRR and GRR and
the *gap* between them, demands a diagnosis (real compounding vs. masked churn), and asks
for a pricing-and-priority *decision* — so the model reasons about the quality of growth,
not just the definition.

## My evolving understanding

- **v1 (2026-07-04):** First pass. The reframe that landed: I thought "grow without new
  customers" meant *upselling harder.* The sharper model is that **NRR turns the existing
  base into a second, near-zero-CAC growth engine** — and whether that engine exists is
  decided *upstream* in the [pricing](./pricing.md) value-metric, not in the sales motion.
  The trap I now watch for: **NRR alone can lie.** A blended NRR > 100% can sit on top of a
  badly leaking base (low GRR) propped up by a few whales — so GRR is the honesty check
  that has to be read alongside it. "Negative churn" stopped sounding like jargon once I saw
  it in the worked example: 87% GRR (a leaking base) *and* 117% NRR (net compounding) at the
  same time, because $30k of expansion swamped $13k of leak.

## Sources

- Bessemer Venture Partners, *State of the Cloud* / "Net Revenue Retention" writing — why
  NDR/NRR is the metric investors obsess over and how it maps to valuation multiples — to
  verify and deepen on revisit.
- David Skok, *forEntrepreneurs* — "negative churn," expansion revenue, and why NRR > 100%
  changes the growth math — to verify and deepen on revisit.
- See also [mrr-arr](./mrr-arr.md), [churn](./churn.md), [retention](./retention.md),
  [pricing](./pricing.md).
