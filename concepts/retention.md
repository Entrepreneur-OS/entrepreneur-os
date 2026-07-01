# Retention — keeping customers active over time

> Plain English: the share of customers who stick around and keep getting value,
> period after period. Expert phrasing: the inverse of [churn](./churn.md) — the
> foundation every durable business and every LTV estimate is built on.

- **Domain:** product
- **Stage:** growth
- **Related:** [churn](./churn.md) (its mirror), [ltv](./ltv.md), [pmf](./pmf.md), cohort-analysis

## What it is

Retention is whether customers *keep coming back*. If 100 people start using your
product and 60 are still active (and paying) three months later, that cohort has 60%
3-month retention. It's the same information as [churn](./churn.md), viewed from the
optimistic side: retention counts who stays, churn counts who leaves.

## Why it exists / the problem it solves

Acquisition gets all the attention, but a business that acquires well and retains
poorly is a leaky bucket — you pour water (and [CAC](./cac.md)) in the top and it runs
out the bottom. Retention exists as the concept that says: *the durability of value is
what actually makes a business*. Everything compounding — LTV, word-of-mouth, revenue
— stands on retention.

## How experts reason with it

The insight a beginner misses: **the shape of the retention curve is the single truest
signal of a real business — and of [PMF](./pmf.md).**

1. **Flattening beats high.** Plot a cohort's activity over time. If the curve
   **decays toward zero**, you have no durable value — a leaky bucket no amount of
   marketing fixes. If it **flattens** at some level, you've found a group for whom the
   product is a lasting habit. *A flattening curve is the classic PMF signal.*
2. **Retention is the foundation, not a tactic.** It caps [LTV](./ltv.md) (lifetime =
   1/churn), fuels organic growth (retained users refer), and lowers effective CAC.
   Small retention gains compound across all of them.
3. **Logo vs. revenue retention.** You can retain *revenue* (via expansion) even while
   losing some *logos* — NRR captures this. Track both.
4. **Leading indicators exist.** Activation, time-to-first-value, and early engagement
   predict later retention — so you can act *before* customers churn, not after.

The founder's takeaway: before scaling anything, earn a **flat retention curve** for a
real [ICP](./icp.md). Retention is the metric that tells you the foundation is solid.

## When you use it

- As the primary evidence for [PMF](./pmf.md) (retention curve shape).
- To estimate [LTV](./ltv.md) and set affordable [CAC](./cac.md).
- To prioritize product work — improving activation/onboarding lifts the whole curve.
- To decide readiness to scale: don't pour CAC into a bucket that doesn't hold water.

## Metrics / how it's measured

- **Cohort retention curves:** group users by when they joined, track % still active
  over time; read the *shape* (decaying vs. flattening), not a single number.
- **Logo (customer) retention** vs. **revenue/net retention (NRR)**.
- **N-day / N-month retention** (e.g. D30, M3) for the relevant usage cadence.
- Retention = 1 − churn for the same period.

## Common misconceptions

- **"Retention is a growth tactic."** It's the *foundation* growth compounds on, not a
  campaign you run.
- **"High month-1 retention = solid."** What matters is whether the curve **flattens**,
  not the starting height. A high-but-still-decaying curve still ends at zero.
- **"Retention = churn, so why track separately?"** Same math, but the cohort-curve
  *shape* carries information a single churn % hides.
- **"You retain with discounts/nags."** Durable retention comes from real value/habit;
  incentives only delay churn if fit is weak.

## Examples

- Two SaaS apps both start cohorts at 100 users. App A decays to ~5% by month 6 (no
  fit). App B flattens at ~45% by month 3 and holds — App B has PMF and a real LTV; App
  A is a leaky bucket.
- Improving onboarding so more users hit "first value" in week 1 lifts the *entire*
  retention curve and, through it, LTV.

## Talking to an LLM about it

- **Weak prompt:** "How do I keep users coming back?"
- **Better prompt:** "How do I improve retention for my SaaS?"
- **Expert prompt:** "For a B2B SaaS targeting recruiting agencies, help me set up
  cohort retention analysis: which activation event to define as 'first value,' how to
  read whether my curves flatten (PMF) or decay, which leading indicators predict M3
  retention, and where to intervene in onboarding to lift the curve."

The expert version asks for cohort *analysis*, an activation definition, leading
indicators, and *where to act* — so the model gives a diagnostic plan, not tips.

## My evolving understanding

- **v1 (2026-07-01):** First pass. The reframe that landed: I treated retention as
  "keep users happy so they don't leave." The sharper model is that the **retention
  curve's shape is the truest test of a real business** — flat = durable value = PMF,
  decaying = leaky bucket — and that retention is the **foundation** LTV, organic
  growth, and effective CAC all compound on. So retention work usually beats acquisition
  work in leverage.

## Sources

- Cohort-analysis / retention-curve practice; PMF-via-retention discourse (Andreessen,
  Ellis lineage) — to verify and deepen on revisit.
- See also [churn](./churn.md), [ltv](./ltv.md), [pmf](./pmf.md).
