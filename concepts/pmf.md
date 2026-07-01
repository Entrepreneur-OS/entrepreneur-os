# PMF — Product–Market Fit

> Plain English: the moment your product so clearly solves a real problem for a real
> group of people that they pull it out of your hands — demand starts to outrun your
> ability to serve it. Expert phrasing: being in a good market with a product that can
> satisfy that market.

- **Domain:** strategy
- **Stage:** validation
- **Prerequisites:** [icp](./icp.md), a real problem, [mvp](./mvp.md), validation with real users
- **Related:** jtbd, retention, churn, [cac](./cac.md) · **Contrast with:** "we launched and it's quiet"

## What it is

Product–market fit is the transition from *pushing* to *being pulled*. Before PMF, you
chase customers, beg for meetings, and growth only happens when you shove it forward.
After PMF, customers find you, use the product hard, refuse to give it up, and tell
others. Marc Andreessen's classic framing: *"you can always feel when product–market
fit isn't happening"* — and, just as unmistakably, when it is. It is less a metric than
a **state of the business** you can feel in the demand.

## Why it exists / the problem it solves

Founders waste years — and money — optimizing things that don't matter yet:
scaling ad spend, hiring salespeople, polishing onboarding, raising funding — all *on
top of a product nobody deeply wants.* PMF exists as the concept that says: **this is
the one thing that must be true before any of that pays off.** It's the gate. It tells
you *what game you're playing*: still searching for fit, or scaling a fit you've found.

## How experts reason with it

The insight a beginner misses: **PMF is a prerequisite for scaling, not a result of
it.** Almost every expensive startup mistake is scaling something before PMF — buying
growth for a product that doesn't retain, so you pour customers into a leaky bucket.

Key mental models experienced founders hold:

1. **Retention is the truest signal.** Anyone can get a spike of signups. PMF shows up
   as a **retention curve that flattens** — a stable core of users who keep coming back
   instead of a curve that decays to zero. Flat retention = people got durable value.
2. **The "pull" test beats any survey.** Are users hacking around limitations to use it
   more? Complaining when it's down? Referring others unprompted? That desperation *for*
   the product is fit.
3. **PMF is not permanent.** Markets shift, competitors arrive, your ICP evolves. You
   can *lose* fit. It's a state to maintain, not a trophy to shelve.
4. **Before PMF, do things that don't scale.** Manual onboarding, hand-holding, talking
   to every user — this is how you *find* fit, and it's the opposite of the efficiency
   instinct an engineer brings.

The founder's takeaway: your job before PMF is **learning**, not growing. Spending on
[CAC](./cac.md) or hiring before PMF converts your runway into noise.

## When you use it

- As the gate before scaling anything (spend, hiring, fundraising).
- To diagnose "we launched but it's quiet" — usually a fit problem, not a marketing one.
- To decide whether to **persevere or pivot**: no fit after honest effort → change the
  problem, the ICP, or the product, rather than pushing harder on the same thing.

## Metrics / how it's measured

There's no single number, but useful proxies:

- **The Sean Ellis test:** survey users — *"How would you feel if you could no longer
  use this product?"* If **≥ 40%** say **"very disappointed,"** that's a widely-cited
  PMF signal.
- **Retention / cohort curves:** does a cohort's usage flatten at a healthy level, or
  decay toward zero?
- **Organic pull:** unprompted referrals, word-of-mouth growth, inbound demand.
- **Usage intensity:** frequency and depth of use relative to the job it does.

## Common misconceptions

- **"Launch = PMF."** Launching is an event; PMF is sustained pull. Silence after launch
  means you don't have it yet.
- **"More features → PMF."** Usually the opposite — fit comes from solving *one* problem
  deeply for a *specific* [ICP](./icp.md), not from breadth.
- **"Once you have it, you're safe."** Fit can erode; it must be maintained.
- **"It's a vibe, not measurable."** It's partly felt, but retention curves and the
  Sean Ellis test make it concrete enough to track.

## Examples

- **Superhuman** famously engineered its way to PMF by driving the Sean-Ellis
  "very disappointed" score above 40% through a tight feedback loop with its most
  engaged users.
- **Slack** — internal tool that users pulled into every team unprompted; the "pull"
  was obvious long before any growth spend.

## Talking to an LLM about it

- **Weak prompt:** "How do I know if my product is good?"
- **Better prompt:** "How do I know if my SaaS has product–market fit?"
- **Expert prompt:** "For a bootstrapped B2B SaaS targeting recruiting agencies, help me
  design a lightweight PMF measurement plan: which retention/cohort metric to track,
  how to run the Sean Ellis 40% test with my first ~30 users, what 'good' looks like,
  and clear signals that would tell me to pivot rather than keep pushing."

The expert version names the ICP, asks for *measurement* and *decision criteria*
(persevere vs. pivot) — so the model gives an operating plan, not a definition.

## My evolving understanding

- **v1 (2026-07-01):** First pass. The reframe that landed: I thought of PMF as
  "people like the product." The sharper model is **pull vs. push** — before PMF you're
  shoving, after PMF the market pulls — and the **truest evidence is a flattening
  retention curve, not signups or praise.** Biggest behavioral implication for me: PMF
  is a *gate*, and my engineer's instinct to optimize/scale/automate is exactly the
  wrong instinct to indulge before I'm through it.

## Sources

- Marc Andreessen, "The Only Thing That Matters" (2007) — the canonical PMF essay.
- Sean Ellis — the 40% "very disappointed" survey.
- Rahul Vohra / Superhuman — engineering toward PMF via that survey (to verify and
  deepen on revisit).
- See also [icp](./icp.md), [retention](./retention.md), [churn](./churn.md).
