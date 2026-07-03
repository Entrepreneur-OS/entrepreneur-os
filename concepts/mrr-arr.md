# MRR / ARR — Recurring Revenue

> Plain English: the predictable revenue a subscription business earns every month
> (MRR) or year (ARR), if nothing changed. Expert phrasing: normalized recurring
> revenue — the run-rate of committed, repeating revenue, tracked as a *flow* whose
> month-to-month movement (new, expansion, contraction, churn) reveals the true health
> of the business.

- **Domain:** finance
- **Stage:** growth
- **Prerequisites:** [churn](./churn.md) / [retention](./retention.md) (they drive the "leak" side of the flow)
- **Related:** [ltv](./ltv.md), [cac](./cac.md), nrr, valuation-multiple · **Contrast with:** one-off / non-recurring revenue

## What it is

**MRR (Monthly Recurring Revenue)** is the sum of all *recurring* subscription revenue,
normalized to a single month. **ARR (Annual Recurring Revenue)** is the same idea on a
yearly basis — for a pure-subscription business, `ARR = MRR × 12`. Both are *run-rates*:
a snapshot of "what we'd earn over the next period if nobody joined, left, upgraded, or
downgraded."

The word that matters is **recurring**. A one-off setup fee, a consulting engagement, or
a hardware sale is real revenue but it is *not* MRR — it won't repeat next month on its
own. MRR/ARR deliberately strip those out to isolate the *predictable* base.

The real power isn't the single number — it's decomposing how MRR *moves* each month:

```
Ending MRR = Starting MRR
           + New MRR          (revenue from newly acquired customers)
           + Expansion MRR    (upgrades, more seats, add-ons from existing customers)
           − Contraction MRR  (downgrades, fewer seats — still customers, less revenue)
           − Churned MRR      (revenue lost from customers who left entirely)
```

This is the **MRR bridge** (a.k.a. the MRR waterfall / movement) — the single most
revealing view a subscription business has of itself.

## Why it exists / the problem it solves

Traditional accounting revenue answers "how much did we bill this period?" — but for a
subscription business that lumps together a $12,000 annual prepayment and a $1,000/mo
subscription as if they were the same, and it hides the churn happening beneath growth.
MRR/ARR exist to answer a sharper question: *"what is our predictable, repeating revenue
base — and which direction is it moving, and why?"*

Because the revenue repeats, it can be **forecast**, **compounded**, and **valued** in a
way one-off revenue never can. That predictability is the whole reason the subscription
model — and the metric that measures it — took over software.

## How experts reason with it

The insight a beginner misses: **MRR is a flow, not a balance — and its *composition*
matters more than its size.** Two companies can both add $50k of net new MRR in a month;
one did it with $50k of new logos on top of zero churn, the other papered over $80k of
churn with $130k of frantic new sales. The first is healthy; the second is a leaking
bucket being filled with a firehose.

1. **Net New MRR = New + Expansion − Contraction − Churn.** This is the number that
   actually grew (or shrank) the business. Positive net-new with *low* gross churn is the
   signal of a durable engine.
2. **Net Revenue Retention (NRR) is the holy grail.** NRR measures what happens to a
   cohort's revenue from *existing customers alone*, with **zero new logos**:
   `NRR = (Starting + Expansion − Contraction − Churn) / Starting`. **NRR > 100%** means
   your existing base *grows on its own* — "negative churn." A business with 120% NRR
   grows ~20%/year even if it never signs another customer. That's why investors prize it:
   it's growth that doesn't depend on the [CAC](./cac.md) treadmill.
3. **Recurring revenue earns a higher valuation multiple.** Markets pay far more per
   dollar of *recurring* revenue than per dollar of one-off sales — often several times
   more — because it's **predictable** (you can underwrite next year's revenue),
   **compounding** (expansion stacks on a retained base), and **durable** (switching costs
   + habit). A services business is valued on ~1× revenue; a healthy SaaS can be valued on
   ~5–15× ARR. Same dollar, wildly different worth — because of *repeatability*.
4. **MRR sits downstream of churn/retention and upstream of LTV.** [Churn](./churn.md) and
   [retention](./retention.md) determine how much MRR leaks each month; MRR × margin ÷
   churn feeds [LTV](./ltv.md). Improve retention and you lift MRR *and* LTV at once.

The founder's takeaway: don't celebrate top-line MRR growth — **read the bridge.** Chase
expansion and kill contraction/churn to push NRR over 100%; that's the difference between
a business that compounds and one that runs to stand still.

## When you use it

- Reporting growth to yourself or investors — always as the *bridge*, not just the total.
- Forecasting: run-rate ARR (`MRR × 12`) is the standard way to size a subscription business.
- Diagnosing quality of growth: high new MRR masking high churned MRR is a red flag.
- Pricing/packaging decisions aimed at **expansion** (seats, tiers, usage) to lift NRR.
- Valuation and fundraising conversations — ARR and NRR are the headline numbers.

## Metrics / how it's measured

The MRR movement (the bridge) is the core formula:

```
Net New MRR = New MRR + Expansion MRR − Contraction MRR − Churned MRR
Ending MRR  = Starting MRR + Net New MRR
ARR         = MRR × 12

Gross Revenue Retention (GRR) = (Starting − Contraction − Churn) / Starting     # ≤ 100%
Net  Revenue Retention (NRR)  = (Starting + Expansion − Contraction − Churn) / Starting
```

Normalization rules that keep MRR honest:
- **Annual contract → monthly.** A $12,000/yr deal is **$1,000 MRR**, not $12,000 in the
  signing month. (Cash and revenue-recognition differ from MRR — don't conflate them.)
- **Exclude one-off revenue.** Setup fees, professional services, and usage overages that
  don't recur are *not* MRR.

Rough benchmarks: best-in-class SaaS runs **NRR ≥ 120%** (enterprise) and **≥ 100%** (SMB);
**GRR** above ~90% (enterprise) / ~80% (SMB) is healthy. Compare like segments only.

## Common misconceptions

- **"Book the annual contract as one month of MRR."** A $12k/yr deal is $1k MRR — booking
  it as $12k inflates MRR 12× and destroys the run-rate's meaning.
- **"Services/one-off fees are revenue, so count them."** They're revenue but not
  *recurring* — including them makes MRR unpredictable and un-forecastable.
- **"Ignore contraction — they didn't cancel."** A customer who downgrades from $500 to
  $200 is $300 of lost MRR. Contraction is silent churn; leaving it out overstates health.
- **"MRR growth = healthy business."** Not if churned + contraction MRR is large beneath
  it. Read *net* new MRR and NRR, not just the top line.
- **"ARR = last year's billed revenue."** ARR is a forward *run-rate* (`MRR × 12`), not a
  historical accounting figure.

## Examples

- Start month at **$100k MRR**. Add **+$20k New**, **+$8k Expansion**, **−$3k
  Contraction**, **−$5k Churn** → Net New = **+$20k** → Ending MRR = **$120k**, ARR = **$1.44M**.
  For existing customers alone: NRR = (100 + 8 − 3 − 5) / 100 = **100%** — the base held
  flat and all real growth came from new logos.
- A SaaS with **8% gross revenue churn** but **15% expansion** → **NRR ≈ 107%**: even with
  *zero* new sales, revenue grows ~7%/yr from the existing base. New logos are pure
  acceleration on top — this is why the company can be valued on a high ARR multiple.

## Talking to an LLM about it

- **Weak prompt:** "How is my subscription revenue doing?"
- **Better prompt:** "How do I calculate MRR and ARR for my SaaS, and what's a good growth rate?"
- **Expert prompt:** "For a B2B SaaS starting the month at $100k MRR with $20k new, $8k
  expansion, $3k contraction, and $5k churned MRR, build the MRR bridge and compute net new
  MRR, ending ARR, GRR, and NRR. Then tell me whether my growth is retention-driven or
  acquisition-driven, and whether to prioritize expansion (to push NRR past 100%) or reduce
  gross churn first — and how each choice affects my valuation multiple."

The expert version supplies the full bridge inputs and asks for a *diagnosis and decision*
(retention vs. acquisition, NRR, valuation) — so the model reasons about the quality and
worth of growth, not just definitions.

## My evolving understanding

- **v1 (2026-07-02):** First pass. The reframe that landed: I thought MRR/ARR were just
  "monthly revenue × 12." The sharper model is that MRR is a **flow decomposed by the
  bridge** (new + expansion − contraction − churn), and that the *composition* — not the
  headline — tells you if growth is durable. **NRR > 100%** ("negative churn") reframed
  growth entirely: a business can compound from its existing base with zero new logos. And
  the reason recurring revenue is worth several times more per dollar than one-off revenue
  is simply **predictability + compounding + durability** — which is also why annual
  contracts must be normalized to monthly and one-off services excluded, or the number
  loses the very predictability that gives it value.

## Sources

- David Skok, *forEntrepreneurs* — SaaS metrics (MRR, the MRR bridge, NRR, unit economics)
  — to verify and deepen on revisit.
- Bessemer Venture Partners, *State of the Cloud* / "Efficiency is the new growth" — NRR
  benchmarks and why recurring revenue commands premium multiples.
- See also [ltv](./ltv.md), [churn](./churn.md), [retention](./retention.md), [cac](./cac.md).
</content>
</invoke>
