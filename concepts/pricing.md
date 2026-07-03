# Pricing — Capturing the Value You Create

> Plain English: pricing is deciding *what to charge* — and, more deeply, *how* you
> charge — so the number reflects the value the customer gets rather than what the
> product cost you to build. Expert phrasing: the deliberate design of price *level*,
> price *metric*, and price *structure* to capture a defensible share of the
> **willingness-to-pay** you create for a chosen segment — the single highest-leverage,
> most-neglected lever on profit a founder controls.

- **Domain:** finance
- **Stage:** growth
- **Prerequisites:** [positioning](./positioning.md) (value is relative to the frame of reference), a real product customers already want
- **Related:** [ltv](./ltv.md), [cac](./cac.md), [mrr-arr](./mrr-arr.md), willingness-to-pay, packaging · **Contrast with:** cost-plus pricing

## What it is

Pricing is the decision of what a customer pays you. Beginners treat it as *one
number*; experts treat it as *three linked decisions*:

1. **The price level** — the actual dollar figure ($29, $2,900).
2. **The price metric** (a.k.a. the *value metric*) — the *unit* you charge per: per
   seat, per GB, per API call, per invoice processed, per outcome delivered. This is
   what the meter counts.
3. **The structure / packaging** — tiers, add-ons, the good/better/best ladder that
   sorts customers by how much value they get.

There are three canonical ways to arrive at the level, and they are not equal:

- **Cost-plus** — take what it cost you to make, add a markup. Simple, "fair-feeling,"
  and almost always *wrong*: it anchors price to your costs, which the customer does
  not care about at all.
- **Competitor-based** — price relative to rivals (match, undercut, or premium). A
  useful sanity check, but it outsources your most important number to companies whose
  costs, segment, and strategy you don't actually know.
- **Value-based** — price against the *economic value the customer receives* and their
  **willingness-to-pay** (WTP) for it. This is the expert default, because it's the
  only method anchored to the one thing that determines whether a price sticks: what
  the outcome is worth to the buyer.

## Why it exists / the problem it solves

Every business has to answer "what do we charge?" — and that single number moves profit
more than almost anything else a founder can touch. A classic result (often attributed
to McKinsey / Marn & Rosiello) is that, for a typical company, a **1% improvement in
price** drives a far larger profit gain than a 1% cut in costs or a 1% rise in volume,
because price flows almost entirely to the bottom line. Yet founders — engineers
especially — pour months into the product and spend an afternoon on price, usually by
guessing a round number and adding a discount.

Pricing as a discipline exists to stop that leak: to convert the value you actually
create into revenue you actually capture, deliberately, instead of leaving money on the
table by default. It's the bridge between *how good the product is* and *whether the
business works* — it sets the ceiling on [ltv](./ltv.md), determines whether
[cac](./cac.md) payback is fast or fatal, and is the raw input to
[mrr-arr](./mrr-arr.md).

## How experts reason with it

The insight a beginner misses — the "so what" — is twofold:

**1. Price the value, not the cost.** Your cost is your floor, not your target. The
customer's willingness-to-pay is set by the *value they receive* (time saved, revenue
gained, risk removed), not by your AWS bill. A tool that saves a law firm $200k/year
can rationally charge tens of thousands, whether it cost you $50/month or $5,000/month
to run. Cost-plus systematically *underprices* your best products (where value far
exceeds cost) and *overprices* your worst — it's anchored to the wrong number entirely.
Engineers default to cost-plus because it feels precise, fair, and controllable; it is
precisely, fairly, and controllably wrong.

**2. The price *metric* often matters more than the price *number*.** This is the pro
move most founders never make. The value metric is *what you charge per*, and getting
it right means your revenue **scales with the value the customer gets** — so as they
succeed with you, they naturally pay more, and it never *feels* like a price hike. A
great value metric has three properties: it aligns with value (customers who get more,
pay more), it's easy for the customer to understand and predict, and it grows as the
account grows.

- Slack charges **per active user** — you pay for people actually getting value, not
  for empty seats. It aligns billing with realized value and expands as teams adopt it.
- AWS charges **per unit of compute/storage** — you pay in proportion to what you
  consume, which is a proxy for the value you're extracting.
- Stripe charges **a % of payment volume** — it earns more precisely when its customers
  earn more. The metric *is* the alignment.

Choosing "per seat" vs. "per outcome" vs. "flat fee" can matter more than whether the
number is $40 or $50, because the metric determines your **expansion revenue** — the
compounding engine behind healthy [mrr-arr](./mrr-arr.md) and net revenue retention.

**3. Willingness-to-pay is researchable, not mystical.** Experts don't guess WTP — they
*measure* it before building, then again after. The **Van Westendorp Price Sensitivity
Meter** asks four questions:

- At what price is this *so expensive* you wouldn't consider it? (too expensive)
- At what price is it *getting expensive* but you'd still consider it? (expensive)
- At what price is it *a good deal*? (cheap)
- At what price is it *so cheap* you'd doubt its quality? (too cheap)

Plotting the answers reveals an acceptable price band and an optimal point. Even lighter
than that: structured customer interviews (*"walk me through the last time you paid to
solve this — what did it cost, what would make it a no-brainer, at what price would you
walk away?"*) surface WTP and the value metric together. The rule Ramanujam & Tacke
press in *Monetizing Innovation*: **have the pricing conversation before you build the
product, not after** — design the thing around what people have told you they'll pay
for and how they want to be charged.

**4. Price is a positioning signal.** Price is never just a number to the buyer — it's
information. A premium price says "this is serious/for professionals"; a rock-bottom
price says "this is cheap, possibly risky." So price must be *coherent with*
[positioning](./positioning.md): if you've framed yourself as the premium, outcome-grade
option, a bargain price actively undermines the frame and confuses the buyer.

## When you use it

- **Before building** — run WTP research so you design a product people will pay for,
  charged on a metric they'll accept (the *Monetizing Innovation* discipline).
- **At launch and on a schedule after** — pricing is a hypothesis; revisit it as you
  learn who buys and what they value. Most founders set it once and never touch it —
  leaving compounding money on the table.
- **When designing packaging/tiers** — sorting customers into good/better/best so each
  self-selects into paying near their own WTP.
- **When unit economics are off** — if [ltv](./ltv.md):[cac](./cac.md) is thin, a price
  or value-metric change is often faster and cheaper than chasing volume.
- **When you add capability that raises the value delivered** — the price (or the meter)
  should move with it.

## Metrics / how it's measured

Pricing is a design decision, but it leaves quantitative fingerprints — you *test* it:

- **Willingness-to-pay band** — from Van Westendorp or interviews: the acceptable range
  and an optimal point, per segment.
- **Price elasticity** — how much demand moves when price moves. B2B value-based
  products are often *less* elastic than founders fear (raising price loses few, gains
  much margin).
- **Effect on [ltv](./ltv.md), [cac](./cac.md) payback, and [mrr-arr](./mrr-arr.md)** —
  price sets the ARPU that flows into every one of these. A price increase drops
  straight to margin and shortens CAC payback.
- **Expansion / net revenue retention** — reveals whether your *value metric* is
  working: a good metric makes accounts grow their spend over time without a formal
  price hike.
- **Win rate & discount depth** — chronic heavy discounting is a signal your list price
  or packaging is wrong, not that your salespeople are weak.

## Common misconceptions

- **"Add up my costs and mark it up — that's the fair price."** Cost-plus is anchored to
  the wrong number. Cost is your *floor*; value is your target. This is the single most
  common — and most expensive — founder pricing mistake.
- **"The number is the whole decision."** The *metric* (what you charge per) and the
  *packaging* often matter more than the figure. Get the meter right and revenue scales
  with value on its own.
- **"Underpricing wins deals and market share."** A low price wins the *wrong*
  customers (price-shoppers who churn), starves you of the margin to fund
  [cac](./cac.md) and support, and signals low quality — undercutting your
  [positioning](./positioning.md). It's usually easier to lower a high price than to
  raise a low one.
- **"One price for everyone is simplest and fairest."** Customers get wildly different
  value from the same product; a single price overcharges the low-value segment (who
  leave) and undercharges the high-value one (leaving money behind). Tiers exist to fix
  this.
- **"Set it once."** Pricing is a live hypothesis. Never testing it is the quiet
  default that caps a business's profit for years.
- **"Just copy a competitor."** Their price encodes *their* costs, segment, and
  strategy — none of which you can see. Use it as a reference point, not an anchor.

## Examples

- **Value-based, priced on outcome — Stripe.** Charges ~2.9% + 30¢ *per transaction*.
  The value metric is payment volume, so Stripe earns more exactly when its customers
  do — perfect value alignment, and expansion is automatic as the customer grows.
- **The value-metric swing — Slack vs. a flat "per company" fee.** By charging per
  *active* user, Slack ties revenue to realized adoption; a flat company-wide fee would
  have either scared off small teams or badly undercharged big ones. Same product, the
  metric decides the economics.
- **Cost-plus underpricing a high-value product.** A solo founder builds an AI tool that
  saves agencies ~$3,000/month in labor. Costing it at "$40/mo hosting + markup =
  $99/mo" leaves nearly all the created value on the table; a value-based read (a
  fraction of the $3,000 saved) supports 5–10× that — and the agencies would happily
  pay it, because it's cheap relative to what they *get*.
- **Van Westendorp in practice.** Before launch, surveying 50 target users with the four
  price-sensitivity questions reveals an acceptable band of $80–$150 and an optimal near
  $120 — replacing a founder's nervous "$49 feels safe" guess with evidence.

## Talking to an LLM about it

The same intent, framed three ways — this is how vocabulary becomes leverage:

- **Weak prompt:** "How much should I charge for my app?"
- **Better prompt:** "Help me price my SaaS tool for small marketing agencies. What's a
  good monthly price and should I have tiers?"
- **Expert prompt:** "Act as a monetization strategist in the tradition of Ramanujam &
  Tacke's *Monetizing Innovation*. My product is a bootstrapped B2B SaaS for small
  marketing agencies (5–20 people) that automates client reporting and saves each agency
  ~20 hours/month. Assume a target [ltv](./ltv.md):[cac](./cac.md) of 3:1 and a premium
  [positioning](./positioning.md). (1) Propose a **value metric** and argue why it beats
  a flat per-company fee for expansion revenue. (2) Design a good/better/best packaging
  ladder that sorts agencies by value received. (3) Recommend a value-based price *band*
  and how I'd validate it with a Van Westendorp survey or 10 customer interviews before
  committing. (4) Flag where I'm at risk of underpricing and how it would hurt my unit
  economics and [mrr-arr](./mrr-arr.md)."

The expert version names the framework, the business model, the segment, the value
delivered, and the objective — so the model reasons about value capture and price
*architecture* instead of blurting out a round number.

## My evolving understanding

- **v1 (2026-07-03):** First pass while bootstrapping Entrepreneur-OS. The reframe that
  landed hardest: as an engineer I instinctively reach for **cost-plus** — tally what it
  costs to run, add a markup, done. That's precisely the worst method, because it anchors
  price to *my* costs, which the customer could not care less about. The expert move is to
  price against the customer's **willingness-to-pay** for the *value* they receive — and,
  bigger still, to realize the **price metric** (what I charge *per*) often matters more
  than the number: a metric that scales with the customer's value turns growth into
  expansion revenue with no "price hike" friction. Pricing isn't a number I set at the
  end; it's a value-capture system I should design *before* building — and it has to stay
  coherent with [positioning](./positioning.md), because price is itself a signal.

## Sources

- Madhavan Ramanujam & Georg Tacke, *Monetizing Innovation* — design the product around
  price and willingness-to-pay *before* building; the primacy of the value metric and
  packaging; segment-based pricing over one-size-fits-all.
- Patrick Campbell / ProfitWell (Paddle) writing on SaaS pricing — value metrics as the
  core of scalable pricing, WTP research, and why most companies badly under-invest in
  pricing relative to acquisition.
- Van Westendorp Price Sensitivity Meter — the four-question method for estimating an
  acceptable price band and optimal point (to verify/deepen on revisit).
- Marn & Rosiello (McKinsey), "Managing Price, Gaining Profit" — the outsized leverage of
  a 1% price change on operating profit (to verify exact figures on revisit).
- See also [positioning](./positioning.md), [ltv](./ltv.md), [cac](./cac.md),
  [mrr-arr](./mrr-arr.md).
