# Cohort Analysis — reading customers by the date they joined

> Plain English: instead of one blended number for "all customers," you split them
> into groups by *when they started* and watch each group age. Expert phrasing:
> grouping users by a shared start event (their **vintage**) and tracking a metric —
> usually [retention](./retention.md) — over each group's own lifetime, so the *shape
> and trend* of behaviour becomes visible where an aggregate would hide it.

- **Domain:** product
- **Stage:** growth
- **Prerequisites:** [retention](./retention.md) (the metric a cohort curve usually plots)
- **Related:** [churn](./churn.md), [ltv](./ltv.md), [aarrr-funnel](./aarrr-funnel.md) · **Contrast with:** blended/aggregate metrics (a single number across all customers, which averages away the truth)

## What it is

A **cohort** is a set of customers who share a starting moment — everyone who signed up
in January, everyone who first paid in Q2, everyone acquired from a given campaign. Once
you've grouped them, you follow each group *on its own clock* (month 1, month 2, month
3 after *their* start) rather than on the calendar.

The payoff is comparison. Line the January, February, and March cohorts up side by side
and you can see whether the product is getting **better or worse at keeping people** —
because each cohort ages through the same "month 3" independently. A single blended
"we retain 40% of users" number can't tell you that; it smears every vintage together.

## Why it exists / the problem it solves

Aggregates lie by construction. Suppose your business is growing fast: a flood of *new*
signups (who are all still early in their lifecycle and haven't had a chance to churn)
mathematically props up your blended retention number, even if your product is quietly
getting *worse* at holding onto people. The average looks healthy while the underlying
trend rots. This is **Simpson's paradox** (= an aggregate trend that reverses or vanishes
once you split the data into its real groups) showing up in your dashboard.

Cohort analysis exists to break that spell. By slicing customers into vintages and
never mixing them, it answers the question the blended number physically cannot:
*"Holding age constant, is each new class of customers better or worse than the last?"*
That is the only honest way to read whether product and onboarding changes are actually
working.

## How experts reason with it

The insight a beginner misses: **the blended number is the enemy; the truth lives in the
shape of a single cohort's curve and in the trend *across* cohorts.**

1. **Read the curve's shape, not its height.** Plot one cohort's activity over its
   lifetime and one of two things happens. It **decays toward zero** — nobody forms a
   lasting habit, there is no durable value, you have no [PMF](./pmf.md). Or it
   **flattens into a plateau** — a core of users for whom the product became a habit
   that sticks. That plateau is Andrew Chen's retention **"smile"** (curves that dip,
   then curl back up as the sticky core re-engages). *The flattening point — the level
   the curve settles at — is the single most important number on the chart.* A curve
   that starts high but never flattens still ends at zero.
2. **Trend across vintages is the report card.** One cohort tells you *whether* you have
   a sticky core. Stacking successive cohorts tells you whether you're **improving**.
   If March's month-2 retention beats January's month-2 retention, your product/
   onboarding work is landing. If it's sliding, you're growing on borrowed time — the
   blended number will catch up to the truth eventually.
3. **Logo cohorts vs. revenue cohorts are different stories.** A *logo* (customer-count)
   cohort can be decaying while the *revenue* cohort of the same group is *growing*,
   because the survivors expand (upsells, seats). That gap is **net revenue retention
   (NRR)** — track both, because "we're losing customers" and "this vintage is worth
   more every month" can be true at once.
4. **Cohorts are how you compute an honest [LTV](./ltv.md).** A blended lifetime-value
   number averages your best and worst vintages into a fiction. LTV *by cohort* — sum
   the revenue each vintage actually delivers as it ages — tells you whether the
   customers you're acquiring *today* (often more expensive, sometimes lower-intent)
   still pay back their [CAC](./cac.md).
5. **The start event is a modelling choice, and it matters.** "Signed up," "activated,"
   and "first paid" produce completely different curves. Pick the event that marks
   *real value received*, or you'll cohort on a vanity milestone and mis-read everything
   downstream.

The founder's takeaway: never trust a blended retention or LTV number. Cut it into
cohorts, read the *shape* of each and the *trend* across them — that's where the business
tells you the truth about itself.

## When you use it

- Diagnosing whether product/onboarding changes actually improved retention (compare
  post-change cohorts to pre-change ones on the same lifecycle month).
- Establishing real [PMF](./pmf.md) evidence — a flattening cohort curve for a defined
  [ICP](./icp.md) beats any survey.
- Computing trustworthy [LTV](./ltv.md) and checking it against [CAC](./cac.md) by
  vintage before scaling spend.
- Reading the **Retention** stage of the [AARRR funnel](./aarrr-funnel.md) — that stage's
  "one metric that matters" *is* a cohort curve, not a blended percentage.
- Spotting a channel or campaign that acquires users who never stick (cohort by
  acquisition source).

## Metrics / how it's measured

- **The cohort retention table/curve:** rows = vintages (Jan, Feb, Mar…), columns =
  lifecycle age (month 0, 1, 2…), cells = % of that cohort still active. Read *down* a
  column to compare vintages at the same age; read *across* a row to see one cohort's
  curve.
- **How to read the shape:**
  - **Decay to ~0** → no durable value, no PMF. A leaky bucket — more acquisition just
    leaks faster.
  - **Flatten / "smile" plateau** → a sticky core exists; the *plateau level* is your
    real retained base and the truest PMF signal.
  - The **flattening point** (which lifecycle month the curve stops falling) tells you
    how long it takes a cohort to settle into its durable core.
- **Logo retention** (customers still active) vs. **revenue / net retention (NRR)**
  (dollars retained + expanded) — NRR can exceed 100% while logo retention falls.
- **LTV by cohort:** cumulative revenue per vintage as it ages, checked against that
  vintage's [CAC](./cac.md).
- **Benchmarks are directional, not universal.** Good retention plateaus vary wildly by
  category (consumer social vs. B2B SaaS vs. e-commerce) — Lenny Rachitsky's benchmark
  write-ups are a starting reference, but compare a cohort to *your own earlier
  cohorts* first.

## Common misconceptions

- **"Our retention is 40%."** A single blended number is almost always the wrong unit.
  It hides whether newer vintages are better or worse and is inflated by recent signups
  who simply haven't had time to churn yet.
- **"Higher starting retention is better."** Height at month 1 barely matters; whether
  the curve **flattens** does. A high-but-still-decaying curve still trends to zero.
- **"Cohort by signup date, always."** The *start event* is a choice. Cohorting on
  signup when value only lands at activation will make a fine product look broken (or
  vice-versa). Cohort on the event that marks real value.
- **"Small cohorts are fine."** A cohort of 15 users produces noise, not signal — one
  person leaving swings the curve 7 points. Too-small cohorts read as random.
- **"Logo cohort down = business shrinking."** Not if revenue cohorts (NRR) are
  expanding. Losing small accounts while growing big ones can be *healthy*.

## Examples

- **Two SaaS apps, same blended number.** Both report "40% retained." Split into
  cohorts: App A's every vintage decays toward 5% by month 6 — the 40% is an illusion
  propped up by fast new signups. App B's cohorts flatten at ~45% by month 3 and each
  new vintage flattens a little higher — real PMF, improving. Same headline number,
  opposite businesses.
- **The onboarding fix that "did nothing."** A team ships a better onboarding flow;
  blended retention is flat, so it looks like a dud. Cohorting reveals post-launch
  vintages retain 8 points higher at month 2 — the blended number was masked by a
  seasonal signup surge. The fix worked; only the cohort view could see it.
- **Superhuman / consumer apps and the "smile."** Well-fit products often show a
  retention curve that dips early (casual users leave) then curls back up as the sticky
  core re-engages — the visual "smile" Andrew Chen popularised as the signature of a
  product people genuinely need.

## Talking to an LLM about it

- **Weak prompt:** "How do I know if users are sticking around?"
- **Better prompt:** "How do I run a cohort retention analysis for my SaaS and tell if
  I have product-market fit?"
- **Expert prompt:** "For a B2B SaaS at ~$50/mo targeting recruiting agencies, help me
  design a cohort retention analysis: which start event to use ('signed up' vs.
  'completed first placement') and why, how to build the vintage-by-lifecycle-month
  retention table, how to read whether my curves flatten (PMF) or decay, how to compare
  successive monthly cohorts to judge if my onboarding changes are working, and when to
  track net revenue retention (NRR) instead of logo retention given expansion revenue."

The expert version fixes the business model, pricing, and segment, forces a *choice of
start event*, and asks for the *diagnostic read* (flatten vs. decay, trend across
vintages, logo vs. revenue) — so the model returns an analysis plan, not a definition.

## My evolving understanding

- **v1 (2026-07-04):** First pass. The reframe that landed: I thought "cohort analysis"
  was just a fancier way to chart retention. The sharper model is that its whole reason
  to exist is that **blended aggregates lie** — a single retention or [LTV](./ltv.md)
  number is inflated by recent signups and averages good and bad vintages into a
  fiction. Grouping by *join vintage* is the only way to hold age constant and see two
  truths: the **shape** of one cohort's curve (flatten = sticky core / PMF; decay =
  leaky bucket) and the **trend across cohorts** (are newer classes better or worse?).
  "Read the shape and the trend, never the blended number" is the whole concept.

## Sources

- Andrew Chen — writing on retention curves and the retention **"smile"** (Reforge /
  andrewchen.com) — the flattening-plateau-as-PMF framing (to verify and deepen on
  revisit).
- Lenny Rachitsky — cohort retention **benchmarks** by category (Lenny's Newsletter) —
  for directional "what's good" comparisons.
- Cohort / Simpson's-paradox reasoning on why blended metrics mislead — general
  analytics practice.
- See also [retention](./retention.md), [churn](./churn.md), [ltv](./ltv.md),
  [aarrr-funnel](./aarrr-funnel.md).
