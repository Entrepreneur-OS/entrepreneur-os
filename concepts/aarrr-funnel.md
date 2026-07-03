# AARRR — the pirate-metrics funnel

> Plain English: a five-stage map of a customer's whole journey — find you, get
> value, come back, tell friends, pay you — so "growth" becomes a set of measurable
> steps instead of a vibe. Expert phrasing: Dave McClure's **Pirate Metrics**
> (Acquisition, Activation, Retention, Referral, Revenue) — a funnel where each stage
> has one metric you can instrument, diagnose, and improve independently.

- **Domain:** marketing
- **Stage:** growth
- **Prerequisites:** [icp](./icp.md) (you can't measure a funnel for a customer you can't define)
- **Related:** [cac](./cac.md), [retention](./retention.md), [churn](./churn.md), [mrr-arr](./mrr-arr.md) · **Contrast with:** vanity metrics (totals that don't map to a stage)

## What it is

AARRR breaks the customer lifecycle into five sequential stages, each answering one
question:

| Stage | The question it answers | The one metric that matters |
|---|---|---|
| **Acquisition** | Do people find you / show up? | traffic → signups; cost per signup (feeds [CAC](./cac.md)) |
| **Activation** | Do they reach first value fast? | % of new users hitting the "aha" / first-value event |
| **Retention** | Do they come back and keep getting value? | cohort [retention](./retention.md) curve (does it flatten?) |
| **Referral** | Do they bring others? | % who refer; viral coefficient / invites sent |
| **Revenue** | Do they pay — and expand? | conversion to paid; [MRR/ARR](./mrr-arr.md), NRR |

The name is the joke: say the initials out loud and you get a pirate's "AARRR." The
substance is that it turns one fuzzy word — *growth* — into five instrumented steps,
each of which can be measured and fixed on its own.

## Why it exists / the problem it solves

Before the funnel, "grow the business" is a vibe with no handle on it — you can pour
effort in and have no idea *where* it's leaking. McClure's insight was that a startup's
growth is a **pipeline**, and a pipeline has a *narrowest point*. Naming the five
stages exists to make that pipeline visible: instead of "get more users," you can ask
"of the 1,000 who signed up, why did only 200 ever come back?" — a question you can
actually answer and act on. It converts growth from motivation into diagnosis.

## How experts reason with it

The insight a beginner misses: **fix the biggest leak, not the top of the funnel.**

Pouring more traffic into Acquisition feels like progress, but if only 20% of signups
activate, every extra visitor mostly leaks straight out the bottom — you're paying
[CAC](./cac.md) to fill a bucket with a hole in it. The leverage is almost never at the
top.

1. **Multiply, don't add.** The funnel is a *product* of conversion rates, not a sum.
   1,000 visitors × 40% activate × 50% retain × 20% pay = 40 paying customers. Doubling
   the *worst* rate roughly doubles the output; doubling an already-healthy rate barely
   moves it. So the first job is always **find the stage with the steepest drop-off**,
   then fix *that*.
2. **Activation and [Retention](./retention.md) usually beat Acquisition.** A leaky
   funnel makes acquisition spend *destroy* value — high [CAC](./cac.md), nothing
   sticking. Get users to first value (Activation) and keep them (Retention) and the
   same acquisition suddenly compounds. Retention is also the foundation everything else
   stands on: no retention → no LTV, no referral base, no expansion revenue.
3. **The funnel is a loop, not a straight line.** Referral feeds *back into*
   Acquisition — retained, activated users invite others, which lowers effective CAC.
   Revenue funds more acquisition. The stages compound on each other; that's why fixing
   the middle (Activation/Retention) lifts *both* ends.
4. **It ties cost to money.** Acquisition sets [CAC](./cac.md); Revenue sets
   [MRR/ARR](./mrr-arr.md) and, with Retention, LTV. A funnel where LTV comfortably
   exceeds CAC is one you're *allowed* to scale; until then, more acquisition is
   gambling.
5. **One owner per stage.** Each stage needs a single metric *and* a single accountable
   person. A funnel that's "everyone's job" is no one's — the drop-offs go unwatched.

The founder's takeaway: instrument all five, then **attack the narrowest point first**.
Growth is a diagnosis problem before it's an effort problem.

## When you use it

- Diagnosing *why* growth is stalling — locate the stage with the worst conversion
  before spending a dollar more on ads.
- Deciding where to invest next quarter (usually: shore up Activation/Retention before
  scaling Acquisition).
- Setting up analytics from scratch: define the one event that marks each stage.
- Sanity-checking whether you're *ready* to scale — a healthy funnel with LTV > CAC is
  the green light (see [cac](./cac.md), [pmf](./pmf.md)).

## Metrics / how it's measured

- **Per-stage conversion rate:** the % that move from each stage to the next. The
  product of all four transitions = overall funnel conversion.
- **Acquisition:** signups, cost per signup / [CAC](./cac.md) by channel.
- **Activation:** % of new users who reach a defined first-value event (pick the action
  that predicts retention).
- **Retention:** cohort [retention](./retention.md) curve — read the *shape* (flattening
  = durable), and [churn](./churn.md) as its mirror.
- **Referral:** % who invite; viral coefficient *k* (invites × acceptance); if *k* > 1,
  organic growth is self-sustaining.
- **Revenue:** free→paid conversion, [MRR/ARR](./mrr-arr.md), NRR (net revenue
  retention, which counts expansion).

## Common misconceptions

- **"Growth = more traffic."** Top-of-funnel obsession is the classic trap. If the
  middle leaks, more traffic just leaks faster and raises [CAC](./cac.md).
- **"Big totals mean it's working."** Cumulative signups, pageviews, "total users" are
  **vanity metrics** — they only go up and map to no stage. Rates and cohorts tell the
  truth; totals flatter.
- **"AARRR is a rigid order."** It's a diagnostic frame, not a march. You often work
  Retention *before* pouring into Acquisition, precisely because that's where the
  leverage is.
- **"One dashboard = a funnel."** Numbers without a **single owner per stage** rot.
  Ownership is what turns a chart into action.
- **"Referral is a growth hack you bolt on."** Referral only works *downstream* of
  Activation and Retention — people don't refer a product they never got value from.

## Examples

- **Diagnosis by arithmetic.** A SaaS gets 10,000 visitors/month: 30% sign up (3,000),
  25% activate (750), 40% retain to M1 (300), 10% pay (30). The steepest drop is
  Activation (30% signup → 25% activate is fine; the killer is that only 25% of *those*
  ever hit first value, and only 10% pay). Doubling ad spend adds ~30 more paying
  customers at full CAC; fixing onboarding so activation doubles gets the same result
  for near-zero marginal cost.
- **Referral loop.** Dropbox's "give space, get space" referral turned Retention +
  Referral into an Acquisition engine — retained users pulled in new ones, driving down
  effective [CAC](./cac.md) toward zero for that slice of growth.

## Talking to an LLM about it

- **Weak prompt:** "How do I grow my startup?"
- **Better prompt:** "How do I use the AARRR funnel to improve my SaaS's growth?"
- **Expert prompt:** "For a bootstrapped B2B SaaS at ~$50/mo targeting recruiting
  agencies, here are my AARRR numbers: 10k visitors → 30% signup → 25% activate → 40%
  M1 retention → 10% paid. Identify the stage with the highest-leverage leak, propose
  the one first-value event I should define for Activation, and tell me whether to
  invest in onboarding or acquisition next given a target LTV:CAC of 3:1."

The expert version supplies the ICP, pricing, actual per-stage rates, and a unit-
economics target — so the model does *funnel diagnosis* (where's the leak, what to fix
first) instead of handing back a generic "do content marketing" list.

## My evolving understanding

- **v1 (2026-07-03):** First pass. The reframe that landed: I read AARRR as a *checklist
  of things to grow*. The expert mental model is that it's a **diagnostic** — the funnel
  is a *product* of conversion rates, so the whole game is finding the **narrowest point
  and fixing that**, not adding more at the top. Activation and [retention](./retention.md)
  usually out-leverage acquisition because a leaky funnel makes [CAC](./cac.md) destroy
  value, and Referral loops back into Acquisition only once the middle holds. "Fix the
  biggest leak, not the top" is the whole concept.

## Sources

- Dave McClure, *Startup Metrics for Pirates (AARRR)* (2007 talk / slides) — the origin
  of the five-stage pirate funnel.
- Reforge / Andrew Chen writing on growth funnels, activation, and the "leaky bucket"
  framing — for depth on why the middle out-leverages the top (to verify and deepen on
  revisit).
- See also [cac](./cac.md), [retention](./retention.md), [churn](./churn.md),
  [mrr-arr](./mrr-arr.md).
</content>
</invoke>
