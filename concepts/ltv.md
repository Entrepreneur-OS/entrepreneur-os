# LTV — Customer Lifetime Value

> Plain English: the total profit one customer brings over their whole relationship
> with you. Expert phrasing: the discounted gross-margin a customer generates across
> their expected lifetime — the ceiling on what you can afford to acquire them.

- **Domain:** finance
- **Stage:** growth
- **Prerequisites:** [retention](./retention.md) / [churn](./churn.md) (lifetime length comes from these)
- **Related:** [cac](./cac.md), payback-period, pricing · **Contrast with:** one-time revenue

## What it is

LTV is how much a customer is *worth* to the business over time — not what they pay
once, but what they pay across their whole life as a customer, minus the cost to serve
them. It is the counterweight to [CAC](./cac.md): CAC is what you *spend* to get a
customer, LTV is what you *get back*.

A simple, honest version:

```
LTV = (average monthly revenue per customer × gross margin %) / monthly churn rate
```

The `1 / churn` term is the key: it converts a churn rate into an *average lifetime*.
5% monthly churn → an average customer stays ~20 months (1 / 0.05).

## Why it exists / the problem it solves

Revenue-per-sale tells you almost nothing about whether a business works, because most
businesses earn from customers *repeatedly*. LTV exists to answer *"what is a customer
actually worth?"* — which is the only way to know how much you can rationally spend to
acquire one, how much to invest in keeping them, and whether your pricing is sane.

## How experts reason with it

The insight a beginner misses: **LTV and CAC are meaningless apart from each other.**
LTV alone doesn't tell you if the business works; CAC alone doesn't either. The
relationship does:

1. **LTV:CAC ratio.** Healthy is roughly **≥ 3:1**. Below 1:1 you lose money on every
   customer. *Far* above 3:1 can mean you're underinvesting in growth.
2. **Retention is the hidden engine of LTV.** Because LTV ≈ margin / churn, small
   changes in [churn](./churn.md) swing LTV massively. Cutting churn from 5% to 2.5%
   *doubles* average lifetime and therefore LTV — often cheaper than lowering CAC.
3. **Use gross-margin LTV, not revenue LTV.** Counting top-line revenue as "value"
   ignores the cost to serve and overstates what you can afford. Experts discount for
   margin (and sometimes for time/interest).

The founder's takeaway: the two biggest levers on LTV are **retention** (lower churn)
and **pricing/expansion** (higher revenue per customer) — and improving retention
usually beats chasing new customers.

## When you use it

- Setting a maximum affordable [CAC](./cac.md) for each channel.
- Justifying investment in onboarding, success, and retention (it raises LTV).
- Pricing and packaging decisions.
- Comparing customer segments — some ICPs have far higher LTV than others.

## Metrics / how it's measured

- **Revenue LTV** vs. **gross-margin LTV** (prefer the latter — it's honest).
- Requires a churn/retention estimate, which early on is a guess — treat early LTV as
  directional, not precise.
- Often paired with **LTV:CAC** and **CAC payback period**.

## Common misconceptions

- **"LTV = lifetime revenue."** No — subtract cost to serve (use gross margin).
- **"Higher LTV is always the goal."** Only relative to CAC and cash flow; a huge LTV
  that takes 3 years to realize doesn't pay this month's bills.
- **"LTV is a fixed fact."** It's an *estimate* built on churn assumptions that shift;
  recompute as real retention data arrives.
- **Overstating it** by using early, unusually-loyal customers to project everyone's
  lifetime.

## Examples

- Customer pays **$50/mo**, gross margin **80%**, monthly churn **5%** →
  LTV = (50 × 0.8) / 0.05 = **$800**. If CAC = $200 → **LTV:CAC = 4:1** (healthy).
- Halve churn to **2.5%** → LTV = (50 × 0.8) / 0.025 = **$1,600**. Same product, same
  spend — *retention doubled the customer's worth.*

## Talking to an LLM about it

- **Weak prompt:** "How valuable are my customers?"
- **Better prompt:** "How do I calculate customer lifetime value for my SaaS?"
- **Expert prompt:** "For a B2B SaaS at $50/mo ARPU, 80% gross margin, and ~5% monthly
  churn, compute gross-margin LTV and LTV:CAC given a $200 CAC. Then show how LTV and
  the maximum affordable CAC change if I cut churn to 2.5%, and advise whether to invest
  next in retention or in lowering acquisition cost."

The expert version supplies the inputs (ARPU, margin, churn, CAC) and asks for a
*decision* — so the model reasons about unit economics, not definitions.

## My evolving understanding

- **v1 (2026-07-01):** First pass. The reframe that landed: I thought of LTV as "how
  much a customer pays." The sharper model is **margin ÷ churn** — which means
  **retention is the dominant lever on LTV**, and improving churn is often a cheaper
  path to better unit economics than reducing CAC. LTV is also an *estimate*, not a
  fact, and must use gross margin to be honest.

## Sources

- Standard SaaS metrics lineage (David Skok / "SaaS Metrics 2.0") — LTV, LTV:CAC, the
  role of churn (to verify and deepen on revisit).
- See also [cac](./cac.md), [churn](./churn.md), [retention](./retention.md).
