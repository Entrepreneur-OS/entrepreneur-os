# Switching Costs & Lock-in — Why Leaving Is Expensive

> Plain English: switching costs are everything a customer has to *pay, learn, risk, or
> lose* to move from you to a competitor — even a better one. The higher they are, the
> more a customer stays put out of *cost*, not just love. Expert phrasing: **switching
> costs** (Klemperer) — one of Hamilton Helmer's **7 Powers** — are the disutility a
> customer incurs to change suppliers, which lets the incumbent hold customers (and
> price) that pure product quality alone couldn't.

- **Domain:** strategy
- **Stage:** growth
- **Prerequisites:** [pmf](./pmf.md) (you need something worth getting locked into first), [retention](./retention.md)
- **Related:** [moat](./moat.md), [churn](./churn.md), [ltv](./ltv.md), [network-effects](./network-effects.md) · **Contrast with:** [network-effects](./network-effects.md) (staying is *valuable because of others*, not merely *costly to leave*)

## What it is

Switching costs are the friction of leaving. Two products can be equally good, but if
walking away from yours means re-importing three years of data, retraining a team,
rebuilding six integrations, and eating an early-termination fee, the customer stays —
not because you're winning the feature race this quarter, but because *leaving is a
project nobody wants to run.* The competitor has to be better by *more than the cost of
the move* before switching is even rational.

Economist Paul Klemperer formalized this: when consumers face switching costs, a market
that looks competitive on the surface behaves like a series of small monopolies — each
firm has some pricing power over its *own installed base* because those customers are
partially locked in. Helmer folds the same idea into **7 Powers** as one of the seven
durable barriers: **Switching Costs** are a Power because the Benefit (you can charge
more / retain longer) comes paired with a Barrier (a rival *can see* your happy margins
but can't profitably poach the customer, because they'd have to pay the customer's
switching cost *for* them to win the deal).

The academic taxonomy (Burnham, Frels & Mahajan) sorts them into three families —
**procedural** (time and effort), **financial** (money and sunk value), and
**relational** (emotional and social ties). In founder-practical terms, that's this:

| Type | What locks the customer in | Everyday example |
|---|---|---|
| **Data** | Their history, records, and content live in your system; exporting and re-importing is lossy and scary | Years of CRM records, accounting history, saved documents, message archives |
| **Workflow / learning** | The team has internalized *your* way of working; a competitor means re-training and lost productivity during the dip | Photoshop shortcuts, Excel muscle memory, a bespoke internal process built around your UI |
| **Integration** | You're wired into their other systems; ripping you out breaks a web of connections | ERP/CRM plumbed into billing, data warehouse, and 12 SaaS tools via API |
| **Contractual** | Formal, financial penalties for leaving | Annual lock-ins, early-termination fees, minimum commits, volume discounts you'd forfeit |
| **Social / relational** | Identity, reputation, and relationships tied to the product | A public profile/handle, a community, a vendor relationship, "nobody got fired for buying IBM" |

> The families stack. The stickiest products (Salesforce, SAP, a bank) impose **all
> five at once** — data + workflow + integration + contract + relationship — which is
> why "just switch" is a sentence nobody in the customer's org wants to say out loud.

## Why it exists / the problem it solves

Every recurring business has the same enemy: the customer can leave every renewal.
Acquisition is expensive and one-time; the value is in *keeping* them (see
[ltv](./ltv.md), where lifetime ≈ 1/[churn](./churn.md)). But if staying is a pure
quality contest re-run every month, you're on a treadmill — one better competitor, one
cheaper price, and the customer walks with zero friction.

Switching costs exist as a concept to name the thing that *breaks that treadmill*: they
convert a repeated, winnable-by-anyone decision into a **one-way door**. Once a customer
has poured their data, habits, and integrations into you, the renewal question stops
being "is this the best tool?" and becomes "is switching worth the pain?" — a much
higher bar that protects you *even on the days you're not the best product in the
category.* That is precisely why Helmer counts it among the few structural barriers that
let a business sustain superior returns instead of having them competed away.

## How experts reason with it

The insight a beginner misses: **switching costs let you keep customers you couldn't
win on merit alone — but only the *earned* kind is safe; the *imposed* kind is a loan
against your brand.**

1. **Switching costs are, mechanically, a [churn](./churn.md)-suppression machine.**
   This is the whole "so what." High switching costs → fewer customers can be bothered
   to leave → lower churn → higher [retention](./retention.md) → and because lifetime ≈
   1/churn, directly higher [ltv](./ltv.md). They also unlock **pricing power**: a
   locked-in base tolerates price increases up to (roughly) the cost of switching, which
   is how NRR climbs above 100%. This is the same causal chain that makes switching costs
   a [moat](./moat.md) — a moat *is* a churn-suppression machine, and switching costs are
   one of its cleanest forms.

2. **Distinguish "costly to leave" from "valuable to stay" — switching costs ≠
   [network effects](./network-effects.md).** This is the trap that catches everyone.
   *Switching costs* protect you from the **inside**: the friction lives in the
   individual customer's own data, habits, and contracts, and would exist even if they
   were your only customer. *Network effects* protect you from the **outside**: the
   product is more valuable *because other people use it*, and the value grows with every
   new user. A single-player note app can have huge switching costs (your whole life is
   in it) and zero network effect. A brand-new social app can have a strong network
   effect and near-zero switching cost (nothing to export). They're distinct — but when
   they **compound**, you get the strongest positions in business: leaving is both
   personally expensive *and* means abandoning everyone else (Slack, iMessage, a
   marketplace with your reviews and reputation). Network effects raise the *value of
   staying*; switching costs raise the *cost of leaving*; together they slam the door
   from both sides.

3. **There's a bright line between healthy stickiness and user-hostile lock-in — and
   crossing it backfires.** *Earned* stickiness comes from the customer accumulating
   genuine value in you (their data, their mastery, their integrations) — they *don't
   want* to leave. *Imposed* lock-in comes from friction you manufacture to trap someone
   who *does* want to leave: no data export, deliberately painful offboarding, punitive
   contracts, hostage-taking of the customer's own content. The test: **would the
   customer thank you for it, or resent it?** Earned stickiness deepens
   trust and brand; hostile lock-in is a short-term retention loan
   repaid with reputation — public "how to escape $VENDOR" guides, viral cancellation
   horror stories, and regulators writing data-portability law (GDPR's right to data
   portability exists *because* firms weaponized switching costs). The durable play is to
   make **staying** the obvious choice, not to make **leaving** impossible.

4. **Switching costs are not permanent — they get *engineered away*.** Assuming your
   lock-in is forever is how incumbents get disrupted. Migration tooling is a business
   model precisely because a challenger's fastest path in is to *pay the customer's
   switching cost for them*: one-click importers, "we'll migrate your data free,"
   white-glove onboarding, "we'll buy out your contract." Open standards, APIs, and
   commoditized data formats all erode the barrier over time. So switching costs must be
   **deepened and defended**, not banked — and you should assume a smart competitor is
   actively working to dissolve yours.

5. **Contracts are the weakest form; real product value is the strongest.** A contract
   locks a customer in until the renewal date — and the moment it expires, if the only
   thing keeping them was the contract, they're *gone*, often angry. Legal switching
   costs buy time; they don't buy loyalty. The strong, compounding switching costs are
   the ones the customer builds *themselves* by using you well — accumulated data, deep
   integration, ingrained workflow. Over-relying on contractual lock-in is a tell that
   the product isn't sticky on its own merits, and it's fragile exactly when you need it
   (a frustrated customer counting down to their escape date).

## When you use it

- **When designing onboarding and the product roadmap** — deliberately build features
  that let customers accumulate *their own* value in you (import their data, build
  workflows, connect integrations), because that's earned stickiness that compounds.
- **When setting pricing and contract terms** — a locked-in base tolerates price
  increases up to the switching cost; but lean on *value* lock-in over *contractual*
  lock-in, or you inflate near-term retention while eroding trust.
- **When attacking an incumbent** — find the customers who *want* to leave a competitor
  and can't, then **pay their switching cost for them** (free migration, contract
  buyouts, importers). Their lock-in is your wedge.
- **When defending against a challenger doing exactly that to you** — assume your
  switching costs are being actively dissolved and deepen the *earned* kinds faster than
  a competitor can automate them away.
- **When an investor asks "what stops churn / what's your moat?"** — switching costs are
  a legitimate, nameable answer *if* you can point to earned, structural ones (data,
  integration, workflow), not just an annual contract.

## Metrics / how it's measured

Switching costs are structural, so — like a [moat](./moat.md) — they show up as
*persistence* rather than a single number:

- **Retention / churn curves that flatten and hold** — high, stable
  [retention](./retention.md) (especially *logo* retention among large, deeply-integrated
  accounts) is the fingerprint of real switching costs.
- **Net Revenue Retention (NRR) > 100%** — a locked-in base you can expand and re-price
  without losing is the clearest financial signature of pricing power from switching
  costs.
- **Retention rising with tenure, account size, and integration depth** — if customers
  who've been with you longer, bought more, or connected more integrations churn *less*,
  that's switching costs accumulating (a cohort/[retention](./retention.md) read).
- **Expansion / seat & usage growth within accounts** — customers deepening their
  footprint are raising *their own* switching costs.
- **The counter-signal — voluntary churn despite contracts** — customers leaving the
  instant a contract ends (or loudly trying to) means your "switching costs" are
  contractual, not real. Watch the renewal-date exit spike.

There's no single "switching cost score"; you triangulate from these over time. Like a
moat, it's a claim about the *future*, validated by persistence.

## Common misconceptions

- **"Switching costs are the same as network effects."** No — related but distinct.
  Switching costs make *leaving* costly (friction inside the customer's own setup);
  network effects make *staying* valuable (worth grows with other users). One can exist
  without the other; the powerhouses have both. Confusing them leads you to build the
  wrong barrier.
- **"A contract is a moat."** A contract is the *weakest* switching cost — it expires,
  and if it was the only thing holding the customer, they leave the day it does. Real,
  compounding lock-in is the value the customer builds in you themselves (data,
  integration, workflow). Over-indexing on contractual lock-in usually means the product
  isn't sticky on its own.
- **"More lock-in is always better."** Only *earned* stickiness is safe. Lock-in built
  on friction the customer **resents** — no data export, hostile offboarding, holding
  their content hostage — backfires on brand and trust: bad reviews,
  viral cancellation stories, and portability regulation. The goal is to make staying the
  obvious choice, not leaving impossible.
- **"Our switching costs are permanent."** They erode. Migration tools, free-migration
  offers, contract buyouts, open standards, and APIs are all built to dissolve them — a
  competitor's fastest path in is to pay the customer's switching cost *for* them.
  Switching costs must be defended and deepened, not banked.
- **"High switching costs mean we can neglect the product."** Lock-in buys tolerance, not
  immunity. A neglected product with locked-in, resentful customers is a churn cliff the
  moment a challenger removes the friction — and a magnet for exactly the migration-tooling
  attack above. Stickiness is a reason to *keep earning it*, not to coast.

## Examples

- **Data + integration — Salesforce / ERP (SAP, NetSuite).** Once a company runs its
  sales org, data, custom fields, reports, and dozens of integrations on the platform,
  ripping it out is a terrifying, multi-quarter migration project. Retention stays high
  not purely from love but from the *cost of leaving* — which directly protects
  [ltv](./ltv.md) and lets the vendor raise prices. Textbook earned switching costs.
- **Workflow / learning — Adobe Photoshop, Excel.** The switching cost isn't the file —
  it's the *years of muscle memory* and the team's internalized way of working. A rival
  can match the features and still lose, because the customer would eat a painful
  productivity dip to relearn everything.
- **Compounded with a network effect — Slack / marketplaces.** Leaving Slack means
  exporting years of history (switching cost) *and* abandoning every colleague already
  there (network effect). A seller leaving a marketplace forfeits their reviews and
  ranking (switching cost) *and* the buyer traffic (network effect). Both doors slam at
  once — the strongest positions.
- **Hostile lock-in that backfired — early data-hostage SaaS / carrier contracts.**
  Products that made *export* deliberately impossible, or telecoms with punitive
  early-termination fees, bought short-term retention and paid in reputation: "how to
  escape" guides, regulatory intervention (number portability, GDPR data portability),
  and a brand known for trapping people. A cautionary case of crossing the healthy-lock-in
  line.

## Talking to an LLM about it

The same intent, framed three ways — this is how vocabulary becomes leverage:

- **Weak prompt:** "How do I stop customers from leaving my product?"
- **Better prompt:** "What kinds of switching costs can a B2B SaaS build so customers
  don't churn to competitors?"
- **Expert prompt:** "Act as a competitive strategist using Hamilton Helmer's *7 Powers*
  and the switching-cost literature. My business is a bootstrapped B2B SaaS for recruiting
  agencies, post-PMF, ~$40k MRR, ~3% monthly logo churn. Map the switching costs I could
  realistically build across the five types — data, workflow/learning, integration,
  contractual, social — and for each, name the specific product or onboarding move that
  creates it and how it would suppress churn and lift LTV. Be skeptical: flag anything
  that's *imposed* friction the customer would resent (hostile lock-in) versus *earned*
  stickiness they'd thank me for, since the former risks brand/trust and portability
  regulation. Separate switching costs from network effects for my case, and tell me
  which switching costs a challenger could dissolve with a free-migration offer — so I
  deepen the durable ones. Then recommend the single switching cost to concentrate on
  next quarter."

The expert version names the frameworks, supplies stage/metrics, demands the
earned-vs-imposed test, and forces the switching-cost-vs-network-effect distinction — so
the model reasons about *durable, non-hostile defensibility* instead of listing generic
"improve retention" tips.

## My evolving understanding

- **v1 (2026-07-06):** First pass while building Entrepreneur-OS. Three reframes landed.
  (1) Switching costs are the barrier that lets you **keep customers you couldn't win on
  merit** — a rival has to be better *by more than the cost of the move*, which is what
  breaks the every-renewal-is-a-fresh-fight treadmill. Mechanically it's the same
  churn-suppression → [retention](./retention.md) → [ltv](./ltv.md) engine as a
  [moat](./moat.md), plus pricing power over the locked-in base. (2) The distinction I
  kept blurring: switching costs (*costly to leave* — friction inside the customer's own
  setup) are **not** [network effects](./network-effects.md) (*valuable to stay* — worth
  grows with other users). Either can exist alone; the strongest businesses stack both so
  the door slams from inside and outside. (3) The sharp, non-obvious line: only *earned*
  stickiness (data, workflow, integration the customer builds themselves) is durable and
  safe. *Imposed* lock-in — manufactured friction on someone who wants to leave — is a
  retention loan repaid in brand damage, bad reviews, and portability regulation. And
  none of it is permanent: contracts are the weakest form (they expire), and a smart
  challenger's whole play is to **pay the customer's switching cost for them**. So the
  durable move is to make *staying* the obvious choice, not *leaving* impossible.

## Sources

- Hamilton Helmer, *7 Powers: The Foundations of Business Strategy* — **Switching Costs**
  as one of the seven durable Powers, and the Benefit + Barrier framing that makes it a
  moat (the barrier being that a rival must fund the customer's switch to win them).
- Paul Klemperer, *"Competition when Consumers have Switching Costs"* (Review of Economic
  Studies, 1995) — the formal result that switching costs give firms pricing power over
  their own installed base, turning a competitive market into a set of small monopolies.
- Burnham, Frels & Mahajan, *"Consumer Switching Costs: A Typology, Antecedents, and
  Consequences"* (Journal of the Academy of Marketing Science, 2003) — the
  **procedural / financial / relational** taxonomy underlying the five practical types
  used above (to verify and deepen on revisit).
- GDPR Art. 20 (right to data portability) — regulation that exists *because* firms
  weaponized data switching costs; the clearest evidence that hostile lock-in invites a
  legal counter-force.
- See also [moat](./moat.md), [retention](./retention.md), [churn](./churn.md),
  [network-effects](./network-effects.md).
