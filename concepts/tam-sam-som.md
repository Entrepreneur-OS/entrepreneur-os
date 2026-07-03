# TAM / SAM / SOM — Market Sizing

> Plain English: three nested circles that answer *"how big is this opportunity,
> really?"* — the **whole** market, the slice you could **serve**, and the slice you
> could realistically **win**. Expert phrasing: **TAM** (total addressable market),
> **SAM** (serviceable available market), and **SOM** (serviceable obtainable market) —
> a top-line demand estimate progressively narrowed by business model, reach, and
> competition into a number you can actually defend.

- **Domain:** strategy
- **Stage:** validation
- **Prerequisites:** [icp](./icp.md) (you cannot size a market until you know *whose* market it is), a [pricing](./pricing.md) assumption (a market's dollar size = customers × price)
- **Related:** [gtm](./gtm.md), [pmf](./pmf.md), beachhead strategy · **Contrast with:** "it's a huge market, we only need 1%" (the top-down fallacy)

## What it is

Market sizing turns the hand-wavy question *"is this big enough to be worth doing?"*
into three numbers, each a **subset of the one above it**:

- **TAM — Total Addressable Market.** The total annual revenue available *if you had
  100% of every customer who could conceivably use a product like yours*, worldwide,
  ignoring competition and your own limits. The theoretical ceiling.
- **SAM — Serviceable Available Market.** The portion of TAM you can *actually serve*
  given your business model, product, geography, language, segment, and channel. You
  don't sell to "everyone who could use software like this" — you sell to the subset
  your [ICP](./icp.md) and [GTM](./gtm.md) can reach.
- **SOM — Serviceable Obtainable Market.** The slice of SAM you can *realistically
  capture* in a defined window (say 1–3 years), given competition, your sales
  capacity, and your budget. This is your **beachhead**, expressed in dollars — the
  number your plan has to actually deliver.

The relationship is strict containment: **SOM ⊆ SAM ⊆ TAM.** Each circle is smaller
and more real than the last. TAM inspires; SOM is what you're held accountable to.

## Why it exists / the problem it solves

Two failures it exists to prevent, pulling in opposite directions:

1. **Fooling investors (and yourself) with a big number.** "The global staffing
   industry is \$650B" is true and meaningless — it's not *your* market, it's an
   industry. Market sizing forces you to narrow a headline number down to the demand
   *you* can serve and win, so the figure you present is one a skeptical investor —
   and your own future self staring at a sales forecast — will believe.
2. **Killing a good idea because the *visible* market looks tiny.** The opposite
   error: sizing only the sliver you can see today and concluding "too small," when
   the real opportunity is the adjacent expansion after the beachhead. Sizing *all
   three* circles keeps both the near-term target (SOM) and the long-term prize (TAM)
   in view at once.

The deeper reason: a market size is really a **claim about a business model**. To
compute it you're forced to state who the customer is, what they'd pay, and how you'd
reach them — so the exercise smokes out fuzzy thinking in the ICP and pricing *before*
you've burned a year building.

## How experts reason with it

The insight a beginner misses: **the number matters far less than the *method that
produced it*.** Two founders can both write "\$50M SAM." One multiplied an analyst
report by a guessed percentage; the other counted real customers and multiplied by a
real price. An experienced investor barely reads the number — they interrogate *how
you got it*. So the master skill isn't estimating big, it's **building the estimate
bottom-up so every assumption is inspectable and defensible.**

**The two ways to size a market — and why the direction matters:**

| | **Top-down** | **Bottom-up** |
|---|---|---|
| **Method** | Start from a huge published figure (analyst/industry report), multiply by shrinking percentages. | Start from unit reality: *number of target customers × annual revenue per customer* ([ACV](./gtm.md)). |
| **Example shape** | "\$650B staffing market × 5% software spend × 10% our niche = \$3.25B SAM." | "20,000 target agencies × \$3,600/yr = \$72M SAM." |
| **Feels** | Impressive, fast, authoritative. | Modest, slower, grounded. |
| **Fails because** | The percentages are invented; it invites the **"we just need 1%"** fantasy. | Requires you to actually know your customer count and price — which is the point. |
| **Investors trust** | Rarely — it signals you haven't done the work. | Almost always — every input can be checked. |

**Why bottom-up wins.** A top-down estimate hides its assumptions inside a single
percentage nobody can audit ("why 5% and not 2%?"). A bottom-up estimate exposes every
lever — *how many customers exist* and *what each pays* — so a critic can push on each
input independently. That auditability *is* the credibility. The famous tell of lazy
sizing is the line **"the market is \$X billion; if we capture just 1% we're a \$X0M
business."** The 1% is arbitrary, disconnected from any channel or sales plan, and
almost always wildly optimistic — nobody explains *how* you reach that 1%. Bottom-up
makes that hand-wave impossible: to claim 1,000 customers you must name where they come
from.

**Best practice — build bottom-up, sanity-check top-down.** Experts do the bottom-up
number as the real estimate, then glance at the top-down figure as a *ceiling check*:
if your bottom-up SAM exceeds the entire published industry, you've made an arithmetic
error. The two should bracket each other; the bottom-up one is the one you defend.

**Sizing is downstream of ICP and pricing.** The chain in an expert's head:
**[ICP](./icp.md) (who) → count of that ICP (how many) → [pricing](./pricing.md) (× what
each pays) → SAM → realistic share → SOM.** Sharpen the ICP and the customer count gets
countable; guess the price and the whole tower is built on sand. This is why market
sizing is a *validation-stage* act, not an idea-stage one — you need a defined customer
and a price hypothesis first.

**SOM is a GTM claim, not a wish.** Your obtainable market is bounded by how many
customers your [GTM](./gtm.md) motion and budget can actually touch and close in the
window. SOM ≈ (customers your beachhead channel can realistically reach) × (a credible
win rate) × price. If you can't trace SOM back to a channel and a conversion assumption,
it's fiction. This is the direct bridge between market sizing and **beachhead
strategy**: SOM *is* the beachhead, denominated in revenue.

## When you use it

- **Validating whether an idea is worth your time** — is the obtainable market big
  enough to hit your income goal, or is even 100% of SOM too small?
- **Fundraising** — VCs need a plausible path to a large TAM (venture returns require
  it); bootstrappers care far more that SOM clears their personal number.
- **Prioritizing between ideas or segments** — compare the SOM (not the TAM) of each;
  the winnable near-term market is the honest basis for choosing.
- **Choosing a beachhead** — sizing candidate segments turns "which niche first?" into
  a number-backed decision.
- **Sanity-checking a forecast** — if your revenue plan implies capturing 60% of SAM in
  year two, the plan (or the SAM) is wrong.

## Metrics / how it's measured

The core formulas:

- **TAM** = (total number of potential customers everywhere) × (annual revenue per
  customer). Or, top-down: total industry spend on this category.
- **SAM** = (number of customers matching your [ICP](./icp.md), in the geographies/
  segments you can serve) × ([ACV](./gtm.md)).
- **SOM** = SAM × (realistic market share you can win in the window), where that share
  is justified by your [GTM](./gtm.md) reach and win rate — *not* pulled from the air.

### Worked bottom-up example

Reusing the running ICP from [icp](./icp.md)/[gtm](./gtm.md): a bootstrapped B2B SaaS
that automates candidate screening, ICP = **US recruiting agencies, 10–50 staff**,
priced at **~\$300/month (ACV ≈ \$3,600/yr)**. *(Every count below is illustrative —
in a real memo you'd source each one; the method is the deliverable, not the digits.)*

**Step 1 — SAM (bottom-up, count × price).**
Suppose there are **~20,000** US recruiting agencies in the 10–50-staff band *(verify
against BLS / SIA / an industry association — do not invent this)*.
> SAM = 20,000 agencies × \$3,600/yr = **\$72M/yr.**

**Step 2 — TAM (widen the circle).**
Drop the geography and size filters: *all* staffing/recruiting agencies globally that
could use screening software — say **~300,000** firms, at a blended ACV of ~\$5,000
(larger firms pay more).
> TAM ≈ 300,000 × \$5,000 = **\$1.5B/yr.** *(Cross-check top-down: this should sit
> well under total global staffing-software spend — if it exceeded it, the estimate is
> broken.)*

**Step 3 — SOM (what GTM can actually win, 3-year window).**
Your beachhead channel (say, content + outbound to one vertical of agencies) can
credibly reach and close, optimistically, **~5%** of the SAM in three years:
> SOM = \$72M × 5% = **\$3.6M ARR** ≈ **1,000 customers.**

Now the numbers *say something*: 1,000 paying agencies over three years is ~330 net new
per year — a target you can reverse-engineer into a channel plan and a
[CAC](./cac.md) budget. That traceability is exactly what a scribbled "\$650B market ×
1% = \$6.5B" can never give you.

**Contrast — the same market, done top-down (the fallacy):**
> "Global staffing is a \$650B industry. If we capture just 1%, that's \$6.5B." — No
> ICP, no price, no channel, no win rate. The 1% is decoration. An investor discounts
> this to zero on sight.

**Benchmarks / rules of thumb.** Venture investors typically want a **TAM in the
billions** (the fund's model needs the *possibility* of a huge outcome). A bootstrapper
should instead test whether **100% of SOM comfortably clears their target income** —
you never get 100%, so if the whole obtainable market barely covers your salary, the
idea is too small regardless of a shiny TAM.

## Common misconceptions

- **Conflating the three circles.** The most common founder error: quoting TAM when
  asked "how big is your market?" TAM is the *ceiling*, SOM is the *plan*. Presenting
  TAM as if it were reachable revenue is the classic tell of an unsophisticated pitch.
- **"We only need 1% of a huge market."** The signature amateur move. 1% of a giant
  number is still arbitrary; markets aren't captured by decree. *How* do you reach that
  1%? If there's no channel behind it, it's fantasy. Bottom-up sizing forbids this.
- **Inflating TAM to look venture-scale.** Founders stretch the definition ("everyone
  who hires, ever") to hit a billion-dollar headline. Sophisticated investors *penalize*
  an implausibly broad TAM — it signals you don't understand your actual customer. A
  credible \$300M is worth more than a fantasy \$50B.
- **Treating TAM as static.** Markets grow (or shrink). A market that's small today but
  expanding 30%/yr can beat a large, flat one — sizing should include the **growth
  rate** and where the market is *heading*, not just a snapshot. (Uber's TAM wasn't
  "existing taxi rides"; cheaper, better supply *expanded* the market.)
- **Top-down = doing the work.** Multiplying an analyst report by a percentage *feels*
  rigorous but is the lazy path. The rigor is in the bottom-up count.
- **Sizing before you have an ICP or price.** With no defined customer and no price
  hypothesis, there's nothing to multiply — the estimate is guesswork dressed as math.

## Examples

- **Uber's expanding TAM.** Sizing Uber against the *existing* taxi market
  dramatically understated it — by making rides cheaper, more available, and more
  convenient, Uber *grew* the market it was addressing. Lesson: a static TAM built from
  today's spend can badly under- (or over-) count a market that your own product
  reshapes.
- **The beachhead that looked too small.** Facebook's initial SOM was "Harvard
  undergraduates" — a trivial obtainable market that would fail a naive "is the SAM big
  enough?" test, yet its TAM was "everyone online." Sizing all three circles keeps the
  tiny-but-winnable SOM and the enormous TAM legible at the same time (see the beachhead
  logic in [icp](./icp.md) and [gtm](./gtm.md)).
- **The recruiting-SaaS memo above.** \$1.5B TAM → \$72M SAM → \$3.6M/1,000-customer
  SOM. The SOM is the number the plan is judged on; the TAM is the reason the plan is
  worth starting.

## Talking to an LLM about it

The same intent, framed three ways — this is how vocabulary becomes leverage:

- **Weak prompt:** "How big is the market for my recruiting software?"
- **Better prompt:** "Help me estimate the market size for a B2B SaaS that automates
  candidate screening for recruiting agencies."
- **Expert prompt:** "Build me a **bottom-up** TAM/SAM/SOM for a bootstrapped B2B SaaS
  that automates candidate screening. ICP = US recruiting agencies of 10–50 staff,
  priced at ~\$300/month (ACV ≈ \$3,600). For **SAM**, estimate the count of US agencies
  in that band and name the data sources I should verify it against (BLS, SIA, industry
  associations). For **TAM**, widen to global agencies of all sizes with a blended ACV,
  and cross-check it against total staffing-software spend as a ceiling. For **SOM**,
  propose a realistic 3-year obtainable share *justified by a specific GTM channel and
  win rate* — not an arbitrary 1%. Flag every assumption I must validate, and call out
  where I'm at risk of inflating TAM or conflating the three circles."

The expert version fixes the ICP and price, demands the **bottom-up** method, asks for
*sources to verify* each input, forces the SOM to be tied to a channel and win rate, and
requests an explicit trap-check — so the model reasons like an analyst instead of
handing back an inflated top-down headline.

## My evolving understanding

- **v1 (2026-07-03):** First pass while bootstrapping Entrepreneur-OS. The reframe that
  landed: I used to think "market size" was one big impressive number you *find*. The
  expert model is that it's **three nested circles you *build*** — and the credibility
  lives entirely in the *method*, not the magnitude. Bottom-up (customers × price) beats
  top-down (giant report × guessed %) because every input is auditable, which is exactly
  why "we only need 1% of a \$X billion market" reads as a red flag rather than a
  strength. The other shift: **SOM is a GTM claim** — it has to trace back to a real
  channel and win rate — and sizing is genuinely *downstream* of a sharp
  [ICP](./icp.md) and a [pricing](./pricing.md) assumption; without those there's
  nothing concrete to multiply. TAM inspires the investor and my future self; SOM is the
  number the plan is actually accountable to.

## Sources

- Andreessen Horowitz (a16z), writing on market sizing — the case for **bottom-up** over
  top-down and why "% of a big market" estimates signal weak thinking.
- First Round Review — founder-facing guidance on sizing a market credibly and avoiding
  the inflated-TAM trap.
- Anu Hariharan (Y Combinator / YC Continuity), talks and essays on TAM and market
  sizing for founders — the nested TAM/SAM/SOM framing and bottom-up discipline.
- Bill Aulet, *Disciplined Entrepreneurship* — TAM for a *beachhead* market computed
  bottom-up (customers × annual revenue per customer), and expanding from it.
- See also [icp](./icp.md), [gtm](./gtm.md), [pricing](./pricing.md), [cac](./cac.md),
  [pmf](./pmf.md). *(Specific customer counts in the worked example are illustrative
  placeholders — verify against BLS / SIA / industry-association data before use.)*
