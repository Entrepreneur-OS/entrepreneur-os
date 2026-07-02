# GTM — Go-To-Market Strategy

> Plain English: the concrete plan for *how* your product reaches, wins, and keeps its
> first customers — who you target, through which channel, with what message, at what
> price, sold in what way. Expert phrasing: the coordinated choice of **segment,
> motion, channel, pricing, and messaging** that turns a product into repeatable
> revenue — deliberately narrowed to a **beachhead** you can actually win.

- **Domain:** marketing
- **Stage:** launch
- **Prerequisites:** [positioning](./positioning.md) (you can't route a message you haven't framed), [icp](./icp.md) (you must know who you're for before you choose how to reach them)
- **Related:** [cac](./cac.md), [pmf](./pmf.md), [ltv](./ltv.md) · **Contrast with:** "build it and they will come" (product with no distribution plan)

## What it is

A GTM strategy is the **distribution half of a business** — the answer to "we have
something worth buying; now *how* does it actually get into customers' hands, at a
price that works, faster than we run out of money?" A product is only half a company;
GTM is the other half. Building something good and having no plan to reach anyone is
one of the most common ways a technically-strong founder stalls.

A complete GTM strategy pins down five decisions, and they must be **mutually
consistent**:

1. **Target segment / beachhead** — the narrow slice of your [ICP](./icp.md) you attack
   *first* (not the whole market — the first foothold you can dominate).
2. **Motion** — the dominant *way* you sell: product-led, sales-led, or
   marketing/community-led (defined below). This is the load-bearing choice.
3. **Channel** — the specific route to that segment (SEO/content, paid ads, cold
   outbound, partnerships, app marketplaces, communities, events).
4. **Pricing** — the model and price point (self-serve monthly, annual contract,
   usage-based, freemium). Price and motion are locked together — see below.
5. **Messaging** — the words that make the target feel "this is for me," which come
   straight out of your [positioning](./positioning.md).

## Why it exists / the problem it solves

The problem GTM solves is that **a great product does not distribute itself.** Markets
are noisy, attention is scarce, and buyers don't magically find you. Worse, most
founders default to *spray-and-pray* — a bit of everything, a landing page, some ads,
a few cold emails, an occasional post — and end up doing five things at 10% intensity
each, none well enough to learn whether it works.

GTM exists to force a **single coherent bet**: one segment, one motion, one or two
channels, executed hard enough to get a real signal. It is the discipline that
converts "we could sell to anyone, somehow" into "we win *these* customers, *this*
way, at *this* price" — repeatably, which is what makes revenue predictable instead of
accidental.

## How experts reason with it

The insight a beginner misses: **GTM is not "marketing." It is the choice of a
*motion*, and the motion is dictated by your price point and sales cycle — not by
personal taste.** Founders love the motion that matches their own personality
(engineers love PLG because it feels like building; extroverts love sales). The
expert lets the **economics choose the motion**, then builds the org around it.

**The three motions, and when each fits:**

| Motion | How it sells | Fits when… | Anti-pattern |
|---|---|---|---|
| **Product-Led (PLG)** | The product sells itself — free trial / freemium, self-serve signup, value felt before you ever talk to a human. | Low price / low ACV, short time-to-value, individual can adopt without approval, huge top-of-funnel. | Forcing self-serve onto a complex $50k enterprise deal nobody buys without a human. |
| **Sales-Led** | Humans sell — inbound (leads request a demo) or outbound (reps prospect cold). Demos, negotiation, contracts. | High ACV, multiple stakeholders/approval, long consideration, product needs explaining or configuring. | Hiring expensive reps to sell a $15/month tool — the CAC can never pay back. |
| **Marketing / Community / Content-Led** | Trust and demand are built at scale — SEO, content, a community, a category — that then *feeds* PLG or sales. | You can out-teach or out-community competitors; the buyer researches before buying; word-of-mouth compounds. | Producing content forever with no motion underneath to *convert* the audience into revenue. |

**The single most important selection heuristic — price picks the motion:**

> The economics of the deal decide who can afford to be in the loop. A **sales rep
> costs money on every deal**, so the deal must be big enough to pay for that human.
> **Self-serve costs almost nothing per deal**, so it must scale on volume.

A rough, widely-cited mental model (a *heuristic*, not a law):

- **ACV (annual contract value) under ~$1–2k** → you generally *cannot afford* human
  sales. The math forces **PLG / self-serve**. A rep's fully-loaded cost divided across
  tiny deals blows up [CAC](./cac.md).
- **ACV ~$1k–$25k** → a **hybrid / inside-sales** zone. Often PLG to *acquire* + light
  human touch to *expand* ("product-led sales").
- **ACV above ~$25k+** → the deal is big and complex enough to *fund* human
  **sales-led** motion, and usually *requires* it (multiple approvers, procurement).

The chain experts hold in their head: **[ICP](./icp.md) → price point → ACV & sales
cycle → motion → channel → CAC.** Get the front of the chain wrong and everything
downstream misfires — which is why GTM is **downstream of positioning and ICP.** You
cannot route a message you haven't framed, and you cannot choose a channel for a
customer you haven't defined.

Second expert reflex: **GTM choice *drives* [CAC](./cac.md), channel by channel.** Each
channel has its own CAC curve, and the cheapest customers come first. The motion sets
the floor: a healthy PLG funnel can have near-zero marginal CAC; an outbound-sales
motion carries rep salaries in every acquisition. So "which motion?" is partly "which
CAC can my price point sustain?" — the same unit-economics question CAC asks, seen
from the distribution side.

Third reflex — **the beachhead.** Geoffrey Moore's *Crossing the Chasm* argument: don't
attack the whole market at once. Win a **single narrow segment** so completely that you
become the obvious default there, generate word-of-mouth *inside* it, then expand to
adjacent segments. A GTM aimed at "everyone" is a GTM aimed at no one — it dilutes the
message and inflates CAC.

## When you use it

- **At launch** — before writing a single ad or hiring a single rep, decide the motion.
  The motion determines what you even build (self-serve onboarding vs. a demo flow).
- **When acquisition feels random** — leads trickle from everywhere and nothing
  compounds. Usually a symptom of no chosen motion (spray-and-pray).
- **When CAC won't pay back** — often the motion doesn't match the price point (human
  sales on a cheap product, or self-serve on a deal that needs hand-holding).
- **When you're ready to scale a channel** — but only after [PMF](./pmf.md). Scaling GTM
  spend before product–market fit just buys churn faster.
- **When choosing what to build next** — a PLG motion forces investment in onboarding
  and time-to-value; a sales-led motion forces investment in demos, security reviews,
  and integrations.

## Metrics / how it's measured

GTM itself is a strategy, not a single number, but you judge it by the metrics of the
motion you chose:

- **Cross-cutting:** [CAC](./cac.md) by channel, CAC payback period, and the LTV:CAC
  ratio (see [ltv](./ltv.md)) — the ultimate test of whether the motion's economics work.
- **PLG:** signup → activation rate, time-to-value, free→paid conversion, viral/
  referral coefficient, net revenue retention (expansion).
- **Sales-led:** pipeline coverage, win rate, sales-cycle length, average deal size
  (ACV), quota attainment per rep.
- **Content/community-led:** organic traffic → signup, share of voice, community
  growth and engagement, attributed pipeline.

The meta-metric: is acquisition becoming **more repeatable and cheaper per dollar of
revenue over time**, or more erratic and expensive? A working GTM compounds.

## Common misconceptions

- **"GTM = marketing."** Marketing is one channel *inside* a GTM. GTM is the whole
  distribution strategy — segment, motion, channel, pricing, message — and the *motion*
  choice is the heart of it.
- **"PLG is the modern/best motion, so use it."** PLG is a *fit for low-ACV,
  self-serve-able products*, not a universally superior default. Forcing PLG onto a
  complex, high-ACV enterprise product is a classic trap — the reverse trap (hiring reps
  to sell a $50/month tool) is just as fatal.
- **"Pick lots of channels so you don't miss one."** The opposite of the winning move.
  Spray-and-pray guarantees no channel gets enough intensity to produce a clean signal.
  Concentrate, learn, *then* add channels.
- **"Nail GTM once and you're done."** The motion is stable, but channels saturate and
  CAC drifts (competition bids up ad prices, a channel maxes out). GTM is monitored and
  re-tuned, not set-and-forget.
- **"GTM comes first."** It's *downstream* of [positioning](./positioning.md) and
  [ICP](./icp.md). Choose the motion before framing who you're for, and you'll build the
  wrong funnel for the wrong buyer.

## Examples

- **Slack (PLG):** a free, individually-adoptable product with near-instant value; teams
  pulled it in bottom-up, and sales came *later* to close the big accounts that
  self-serve had already seeded. Low friction, high volume — motion matched to a product
  anyone could try in minutes.
- **Salesforce (sales-led):** high-ACV, multi-stakeholder enterprise contracts that need
  demos, procurement, and negotiation — a motion built on a real sales org because the
  deal size funds (and demands) it.
- **HubSpot (content/marketing-led):** essentially *invented* "inbound marketing" as a
  category, out-taught everyone with free content and tools, and used that demand engine
  to feed its sales motion — content-led acquisition feeding a hybrid close.
- **The mismatch trap:** a startup with a genuinely complex $40k/year product tries pure
  self-serve PLG. Prospects sign up, don't understand it, never talk to a human, and
  churn — the deal needed a human but the motion removed one. Same product with an
  inside-sales motion converts. *The product was fine; the motion was wrong.*

## Talking to an LLM about it

The same intent, framed three ways — this is how vocabulary becomes leverage:

- **Weak prompt:** "How do I get customers for my product?"
- **Better prompt:** "Help me plan a go-to-market strategy for my B2B SaaS as a solo
  founder — what channels should I use?"
- **Expert prompt:** "Help me design a go-to-market strategy for a bootstrapped B2B SaaS
  that automates candidate screening, ICP = recruiting agencies of 10–50 staff, priced
  at ~$300/month (ACV ≈ $3.6k). Recommend a **motion** (PLG vs. sales-led vs.
  content-led) justified by that ACV and sales cycle, define the **beachhead segment**
  to attack first, rank 2–3 **channels** by likely [CAC](./cac.md) for this ICP with a
  target LTV:CAC of 3:1 and payback under 6 months, and flag where the motion and price
  point might be mismatched."

The expert version supplies the ICP, the price point / ACV, and explicit ratio and
payback targets — so the model reasons about **motion selection and unit economics**
instead of handing back a generic "do content marketing and run some ads" list.

## My evolving understanding

- **v1 (2026-07-02):** First pass while bootstrapping Entrepreneur-OS. The reframe that
  landed: I used to think of GTM as "marketing + picking some channels." The expert
  mental model is that GTM is fundamentally a choice of **motion**, and the motion is
  *dictated by price point and sales cycle*, not by preference — a rep costs money on
  every deal, so the deal has to be big enough to pay for the rep; self-serve scales on
  volume because it costs almost nothing per deal. The two symmetric traps (PLG on a
  high-ACV enterprise product; human sales on a cheap self-serve product) are both about
  a motion that doesn't match the economics. And GTM sits *downstream* of positioning
  and ICP — you can't route a message you haven't framed, to a customer you haven't
  defined. The beachhead idea (win one narrow segment totally, then expand) is the
  antidote to my instinct to address "the whole market."

## Sources

- Geoffrey Moore, *Crossing the Chasm* — beachhead strategy: win one narrow segment
  completely before expanding; don't sell to the whole market at once.
- Wes Bush, *Product-Led Growth* (and OpenView Partners' PLG research) — the PLG motion,
  when self-serve/freemium fits, and product-led sales as a hybrid.
- Bowery Capital, *The Go-To-Market Playbook* — motion selection and the segment →
  channel → pricing → messaging structure of a GTM.
- Widely-cited ACV → motion heuristic (sub-$1–2k ACV forces self-serve; $25k+ funds
  sales-led) — standard SaaS GTM practice, to verify and deepen on revisit.
- See also [positioning](./positioning.md), [icp](./icp.md), [cac](./cac.md), [pmf](./pmf.md).
