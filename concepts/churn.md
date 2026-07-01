# Churn — Customer & Revenue Churn

> Plain English: the rate at which customers (or the revenue they bring) leak out of
> the business over a period. Expert phrasing: the percentage of customers or recurring
> revenue lost in a given period — the drain that caps how big you can get.

- **Domain:** finance
- **Stage:** growth
- **Related:** [retention](./retention.md) (its mirror image), [ltv](./ltv.md), [pmf](./pmf.md), nrr

## What it is

Churn measures loss. If you start a month with 100 customers and 5 leave, that's **5%
customer churn**. If you start with $10,000 in monthly recurring revenue and lose $700
of it, that's **7% revenue churn**. Retention and churn are two sides of one coin:
retention is who stays, churn is who leaves.

## Why it exists / the problem it solves

In a recurring business, you're not just adding customers — you're also *losing* them,
continuously. Churn exists to make that loss visible, because it's easy to celebrate
new signups while quietly bleeding out the back door. It answers: *is the bucket I'm
pouring customers into holding water, or leaking?*

## How experts reason with it

The insight a beginner misses: **churn silently sets a ceiling on your maximum size.**
If you add a fixed number of customers per month but a *percentage* churns, growth
stalls where new adds equal churned customers. At 5% monthly churn, that ceiling
arrives far sooner than founders expect — you can be "growing" and plateauing at once.

Key models:

1. **Customer churn vs. revenue churn.** You can lose small customers (high logo churn)
   but keep revenue flat if big accounts stay — or vice versa. Track both.
2. **Net Revenue Retention (NRR).** Revenue churn *offset by expansion* from existing
   customers (upgrades, seats). **NRR > 100% = "negative churn"**: your existing base
   grows revenue even if you add zero new customers. This is the holy grail of SaaS.
3. **Churn compounds.** It's a *rate*, so its damage multiplies over time — and it
   quietly crushes [LTV](./ltv.md), since LTV ≈ margin / churn.
4. **Churn is a lagging symptom.** High churn usually means weak [PMF](./pmf.md) or the
   wrong [ICP](./icp.md) — customers who never got durable value. Fix the cause, not the
   symptom.

The founder's takeaway: reducing churn is often the **highest-leverage** growth work,
because it improves LTV, raises the growth ceiling, and compounds — all at once.

## When you use it

- Diagnosing why growth has stalled despite steady signups.
- Estimating [LTV](./ltv.md) (churn sets the customer lifetime).
- Judging [PMF](./pmf.md) — persistently high churn = you don't have it.
- Deciding whether to fix the product/ICP before spending on acquisition.

## Metrics / how it's measured

```
customer churn = customers lost in period / customers at start of period
revenue churn  = MRR lost in period / MRR at start of period
NRR = (starting MRR + expansion − churn − contraction) / starting MRR
```

Rough benchmarks: **SMB** churns faster (~3–7%/mo is common), **enterprise** much
slower (often <1%/mo). Benchmarks vary wildly by segment — compare like with like.

## Common misconceptions

- **"A few percent is nothing."** 5%/month ≈ **46% of customers gone in a year**. Small
  rates compound into big leaks.
- **"Churn = customers leaving only."** Revenue churn (downgrades) matters as much;
  expansion can offset it (NRR).
- **"Fix churn with retention tricks."** Discounts and exit-surveys are band-aids if the
  root cause is weak fit — churn is usually a *product/ICP* problem.
- **Confusing gross vs. net.** Gross churn ignores expansion; net (NRR) includes it.

## Examples

- Start month with 200 customers, lose 10 → **5% customer churn** → average lifetime
  ~20 months → directly caps [LTV](./ltv.md).
- A SaaS with 8% gross revenue churn but 15% expansion → **NRR ≈ 107%**: the existing
  base *grows* revenue on its own. New sales are pure acceleration on top.

## Talking to an LLM about it

- **Weak prompt:** "How do I stop losing customers?"
- **Better prompt:** "How do I reduce churn in my SaaS?"
- **Expert prompt:** "For a bootstrapped B2B SaaS with ~5% monthly customer churn and
  ~7% gross revenue churn, help me separate whether this is a PMF/ICP problem or an
  onboarding problem: what cohort analysis to run, which leading indicators to watch,
  and whether to prioritize expansion (to push NRR over 100%) or reducing gross churn
  first."

The expert version distinguishes churn *types*, asks for diagnosis (root cause) and a
*prioritization* — so the model gives an operating plan, not platitudes.

## My evolving understanding

- **v1 (2026-07-01):** First pass. The reframe that landed: I saw churn as "some
  customers cancel — annoying but minor." The sharper model is that churn is a
  **compounding rate that sets a hard ceiling on company size** and **crushes LTV**, and
  that high churn is usually a *symptom of weak PMF/ICP*, not a retention-tactics
  problem. NRR > 100% ("negative churn") reframed growth for me: a business can grow from
  its existing base alone.

## Sources

- SaaS metrics lineage (David Skok; NRR / negative churn discourse) — to verify and
  deepen on revisit.
- See also [retention](./retention.md), [ltv](./ltv.md), [pmf](./pmf.md).
