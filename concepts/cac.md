# CAC — Customer Acquisition Cost

> Plain English: the average amount you spend to win *one* new paying customer.
> Expert phrasing: total sales-and-marketing cost over a period divided by the number
> of new customers that period produced — the price you pay for growth.

- **Domain:** finance
- **Stage:** growth
- **Prerequisites:** [icp](./icp.md) (you can't cost-effectively acquire a customer you can't define)
- **Related:** ltv, retention, churn, payback-period, gtm · **Contrast with:** organic/word-of-mouth (CAC ≈ 0)

## What it is

CAC is the fully-loaded cost of turning a stranger into a paying customer. "Fully
loaded" matters: it's not just ad spend. It's ad spend **plus** the salaries of the
people doing sales and marketing, the tools they use, agency fees, and content
costs — everything spent to acquire, divided by the customers acquired.

Basic formula:

```
CAC = (total sales + marketing spend in a period) / (new customers won in that period)
```

## Why it exists / the problem it solves

Growth is not free, and it is easy to "buy" revenue that loses money. CAC exists to
make the cost of growth **visible and comparable** — so you can answer: *is acquiring
customers building value or quietly destroying it?* Without CAC, a founder can feel
busy and successful (revenue going up!) while every new customer digs the hole deeper.

## How experts reason with it

The insight a beginner misses: **CAC is meaningless on its own — it only has meaning
relative to what a customer is worth ([LTV](./ltv.md)) and how fast you get your money
back (payback period).**

Three lenses experienced founders use:

1. **LTV : CAC ratio.** A common rule of thumb is you want LTV to be roughly **3× CAC
   or more**. If LTV < CAC, every customer you acquire loses money — you are *paying*
   for the privilege of having customers. Growth makes it worse, not better.
2. **CAC payback period.** How many months of revenue from a customer it takes to earn
   back their CAC. Shorter = less cash tied up = you can grow faster without running out
   of money. For bootstrapped founders this often matters *more* than the ratio, because
   it governs **cash flow and runway**, not just long-run profitability.
3. **Marginal CAC rises.** The cheapest customers come first (your warm network, your
   ICP's obvious watering holes). As you scale a channel, CAC tends to climb. A CAC that
   looks great at small scale can break at large scale.

The founder's takeaway: a business with LTV > 3×CAC and a short payback is one where
*spending more to grow is rational*. Until you have that, scaling spend is gambling.

## When you use it

- Deciding whether a marketing channel is worth keeping or killing.
- Setting a target before you start spending ("I need CAC under $X for the unit
  economics to work").
- Pricing decisions — a higher price raises LTV and the CAC you can afford.
- Knowing whether you're *allowed* to scale yet (see [pmf](./pmf.md) — don't scale CAC
  before product–market fit).

## Metrics / how it's measured

- **Blended CAC** = *all* new customers (including free/organic) into the denominator.
  Flattering, but hides whether paid acquisition actually works.
- **Paid CAC** = only customers from paid channels, against only paid spend. Harsher
  and more honest about whether a channel pays for itself.
- Watch both. A great blended CAC propped up by organic can mask a paid channel that
  loses money on every customer.

## Common misconceptions

- **"CAC = my ad spend."** No — it includes salaries, tools, content, agency fees. The
  cheap-looking ad number is rarely the real CAC.
- **"Lower CAC is always better."** Not necessarily. If a higher-CAC channel brings
  customers with much higher LTV and retention, it can be the *better* channel. CAC is
  judged against value, never in isolation.
- **"Hit CAC once and you're done."** CAC drifts — channels saturate, competition bids
  up ad prices, and your mix changes. It's a number to monitor, not to set and forget.

## Examples

- A SaaS spends **$10,000** on sales + marketing in a month and wins **50** customers
  → **CAC = $200**. If each customer pays $50/month and stays ~24 months, LTV ≈ $1,200
  → **LTV:CAC = 6:1** (healthy), **payback ≈ 4 months** (strong).
- Flip it: same $200 CAC but customers pay $20/month and churn after 6 months → LTV ≈
  $120 → **LTV:CAC = 0.6:1**. Every customer *loses* $80. Growth here is a trap.

## Talking to an LLM about it

- **Weak prompt:** "How do I get more customers cheaply?"
- **Better prompt:** "How do I lower my customer acquisition cost for my SaaS?"
- **Expert prompt:** "For a bootstrapped B2B SaaS at ~$50/month ARPU targeting
  recruiting agencies, help me model unit economics: estimate a sustainable CAC given a
  target LTV:CAC of 3:1 and a CAC payback under 6 months. Then rank acquisition
  channels by likely CAC for this ICP, and flag where marginal CAC would rise as I
  scale."

The expert version supplies pricing, the ICP, and explicit ratio/payback targets — so
the model reasons about *unit economics* instead of handing back generic "do content
marketing" advice.

## My evolving understanding

- **v1 (2026-07-01):** First pass. The reframe that landed: I instinctively thought of
  CAC as a cost to *minimize*. The expert mental model is the opposite — CAC is a
  cost to *evaluate against LTV and payback*. A high CAC can be excellent and a low CAC
  can be a trap. And for a bootstrapper, **payback period (cash flow) often beats the
  LTV:CAC ratio** in importance, because you can be "profitable on paper" and still run
  out of cash.

## Sources

- Standard SaaS unit-economics framing (LTV:CAC ≈ 3:1, payback < 12 months) — David
  Skok / "SaaS metrics" lineage (to verify and deepen on revisit).
- See also [ltv](./ltv.md), [retention](./retention.md), [churn](./churn.md).
