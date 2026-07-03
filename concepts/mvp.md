# MVP — Minimum Viable Product

> Plain English: the smallest thing you can build to *learn* whether the business is
> real — not the cheapest version of the product you eventually want to sell. Expert
> phrasing (Eric Ries): the version of a new product that lets a team collect the
> **maximum amount of validated learning about customers with the least effort.**

- **Domain:** product
- **Stage:** validation → building
- **Prerequisites:** [icp](./icp.md) (know *who* you're testing on), [jtbd](./jtbd.md) (know *what job* you're testing), a falsifiable hypothesis
- **Related:** [pmf](./pmf.md), [retention](./retention.md), [churn](./churn.md) · **Contrast with:** "a cheap, half-broken v1"

## What it is

An MVP is an **experiment wearing the costume of a product.** Its job is not to
delight and not to ship features — it is to answer one dangerous question as fast and
cheaply as possible: *is the thing I believe about my customers actually true?*

The word everyone fixates on is "minimum," so they hear "build less code." The word
that actually carries the meaning is **viable** — viable *as an instrument for
learning.* An MVP is viable when it can produce a real signal from real people putting
real skin in the game (money, time, data, a signature). A landing page that captures
100 pre-orders can be a more viable MVP than six months of polished software that
nobody has been asked to pay for, because the landing page *learned something* and the
software only *assumed something.*

## Why it exists / the problem it solves

Founders — especially engineers — default to building the whole product before showing
it to anyone. The MVP concept was invented to break that reflex. It answers the
question: **"How do I avoid spending a year building something nobody wants?"**

The deeper problem is that startups operate under **extreme uncertainty**, yet the
engineer's instinct is to reduce *technical* risk (does it work?) while ignoring the
risk that actually kills startups — **market risk** (does anybody care?). Eric Ries's
reframe: a startup is not a small company building a product; it is an **organization
designed to search for a repeatable business model under uncertainty**, and the MVP is
its primary search instrument. You are not building; you are *learning by building the
least you can get away with.*

## How experts reason with it

The insight a beginner misses: **the unit of an MVP is not effort or features — it is
validated learning *per unit of effort.* You are optimizing a rate, not a size.**

Reframe the whole thing as a fraction:

```
                learning you can trust (validated)
MVP quality  =  ──────────────────────────────────
                effort / time / money spent
```

A beginner tries to *minimize the denominator* ("write less code"). An expert tries to
*maximize the whole ratio* — and often the fastest way to do that is to spend **near-
zero on the denominator by not building software at all** (concierge, Wizard-of-Oz,
landing page), so the numerator arrives in days instead of quarters. This is why "which
MVP is smaller?" is the wrong question and "which MVP *learns faster?*" is the right
one.

Key mental models experienced founders hold:

1. **The MVP is one loop of Build–Measure–Learn, run backwards.** You don't start with
   "what should I build?" You start with **what you need to *learn*** (Learn), decide
   the **metric** that would prove or kill the belief (Measure), and only *then* build
   the smallest thing that generates that metric (Build). The build is the *last* and
   *smallest* decision, not the first and biggest.
2. **A leap-of-faith assumption comes first.** Every startup rests on one or two beliefs
   that, if false, sink everything ("recruiters will pay to automate outreach"). The MVP
   exists to test *that specific belief* — not to be a smaller product in general. No
   named hypothesis → it's not an MVP, it's just a small product built on hope.
3. **Validated ≠ people said they liked it.** Praise is the cheapest, most misleading
   signal there is. Validation means **behavior with a cost**: they paid, they returned
   (see [retention](./retention.md)), they gave a credit card, they did the manual
   onboarding. Ries's rule: *the only way to win is to learn faster than anyone else,*
   and you only learn from behavior you can trust.
4. **Non-code MVPs are usually superior, not inferior.** Doing things that don't scale —
   by hand, faked behind a curtain — is often the *highest-learning* option, precisely
   the opposite of the engineer's efficiency instinct.
5. **The MVP is how you *search* for [PMF](./pmf.md).** PMF is the destination; the MVP
   is the vehicle you take to look for it. Each MVP iteration is a probe: pull toward the
   fit, or a signal to pivot.

The founder's takeaway: before you open your editor, write the sentence *"I will have
learned X when I observe Y."* If you can't, you are about to build a monument to an
assumption, not an experiment.

## When you use it

- **At the start of any new product, feature, or market** — whenever you hold a belief
  about customers that is expensive to be wrong about.
- **To choose the flavor of MVP** by asking *what's the riskiest assumption right now?*
  - **Concierge MVP** — you deliver the service *manually*, in the open, to a few real
    customers (no product yet). Best when you don't yet understand the job deeply.
  - **Wizard-of-Oz MVP** — the customer sees a "finished" product; behind the curtain
    *you* are doing the work by hand. Best when the *demand* is the risk, not the tech.
  - **Landing-page / smoke test** — a page describing the offer with a real call to
    action (pre-order, waitlist, "buy now"). Best for testing demand and message before
    building anything.
- **To decide persevere vs. pivot** — the MVP's whole output is evidence for that one
  decision. (See [pmf](./pmf.md).)

## Metrics / how it's measured

There's no formula; the MVP is judged by **the quality of the decision it lets you
make.** Useful yardsticks:

- **Time-to-learning (cycle time):** how long from hypothesis → trustworthy signal? The
  metric an expert actually optimizes. Days good; quarters bad.
- **A pre-committed success/kill threshold:** *stated before launch* — e.g. "≥ 20 of
  100 visitors pre-order" or "3 of 5 concierge customers renew." Deciding the bar *after*
  seeing results is how founders fool themselves.
- **Behavioral conversion, not vanity metrics:** pre-orders, paid signups, repeat use,
  credit cards entered — costly actions. Page views, likes, and "great idea!" are noise.
- **Falsifiability:** a good MVP can *fail.* If no realistic result would change your
  mind, you built theater, not an experiment.

## Common misconceptions

- **"MVP = version 1, but cheaper/uglier."** No. A v1 is a small *product*; an MVP is an
  *experiment*. Same code, different intent — and the intent changes what you build.
- **"Minimum means the least code."** Minimum means the least *effort to learn the one
  thing.* Sometimes that's zero code (a landing page); the point is the learning rate.
- **"Ship junk and call it lean."** Shipping a broken product that produces no clean
  signal isn't lean — it's noise plus reputational damage. Viable = it can *teach* you.
- **"Gold-plate it so it makes a great first impression."** Over-building the MVP
  (gold-plating — polishing beyond what the experiment needs) is the classic trap: it
  slows the learning loop and gets you emotionally attached to an unvalidated bet.
- **"Users said they loved it → validated."** Stated preference is not revealed
  preference. Only behavior with a cost counts.

## Examples

- **Zappos (concierge / Wizard-of-Oz):** before building inventory or logistics, the
  founder photographed shoes in local stores, posted them online, and when someone
  ordered, *bought the shoes at retail and shipped them himself.* The risky assumption
  wasn't "can we build a store" — it was "**will people buy shoes online without trying
  them on?**" He tested exactly that, for almost no money.
- **Dropbox (smoke test):** instead of building the full sync engine (technically hard),
  the founder released a **3-minute video** demoing the intended experience to the right
  community. Beta waitlist jumped from ~5,000 to ~75,000 overnight — validating demand
  before the hardest engineering was done.
- **Airbnb (concierge):** the founders hosted guests in their own apartment and manually
  ran the experience, learning the job before there was any platform.

## Talking to an LLM about it

- **Weak prompt:** "How do I build an MVP for my app idea?"
- **Better prompt:** "I have a SaaS idea for recruiters. What's a minimum viable product
  I could build to test it, and what should I measure?"
- **Expert prompt:** "I'm a solo founder targeting boutique recruiting agencies (my
  [ICP](./icp.md)). My riskiest leap-of-faith assumption is that recruiters will pay
  ~$100/mo to auto-draft candidate outreach. Design three MVP options — a landing-page
  smoke test, a Wizard-of-Oz, and a concierge — ranked by **validated learning per week
  of effort.** For each, give the exact hypothesis it tests, the single behavioral
  metric to watch, a pre-committed pass/fail threshold, and what result would tell me to
  pivot rather than persevere."

The expert version names the ICP and the *specific* leap-of-faith assumption, asks for
options ranked by **learning rate**, and demands pre-committed thresholds and a
pivot/persevere signal — so the model returns an experiment design, not a feature list.

## My evolving understanding

- **v1 (2026-07-02):** First pass. The reframe that landed: I read "MVP" as *"the
  cheapest first version of my product"* — an engineering-scope word. The sharper model
  is that MVP measures a **rate: validated learning per unit of effort**, so the goal is
  to *learn fastest*, not build smallest — and the fastest option is frequently **no
  code at all** (landing page, Wizard-of-Oz, concierge). Biggest behavioral implication
  for me: before writing a line, I have to name the leap-of-faith assumption and a
  pre-committed metric that could *kill* it — otherwise my engineer's instinct will
  quietly rebuild the whole product and call it "minimum."

## Sources

- Eric Ries, *The Lean Startup* (2011) — MVP, Build–Measure–Learn, validated learning,
  leap-of-faith assumptions, "learn faster than anyone else."
- Steve Blank, *The Four Steps to the Epiphany* — customer development; get out of the
  building and test the model against real customers before scaling.
- Concrete MVP lore: Zappos (concierge), Dropbox (smoke-test video), Airbnb (concierge)
  — widely documented founder stories (to re-verify details on revisit).
- See also [icp](./icp.md), [pmf](./pmf.md), [retention](./retention.md).
