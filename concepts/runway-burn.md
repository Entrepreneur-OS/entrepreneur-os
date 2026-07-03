# Runway & Burn Rate

> Plain English: **burn** is how much cash you lose each month; **runway** is how many
> months of cash you have left before you hit zero. Expert phrasing: net burn is the
> monthly rate at which the business consumes its cash reserves, and runway is
> `cash ÷ net monthly burn` — the clock that governs every other decision a founder makes.

- **Domain:** finance
- **Stage:** building
- **Prerequisites:** [mrr-arr](./mrr-arr.md) (recurring revenue is what offsets burn), [cac](./cac.md) (acquisition spend is a major burn line, and payback governs how fast cash returns)
- **Related:** [gtm](./gtm.md) (runway sets the tempo of go-to-market bets), default-alive/dead, fundraising-timing · **Contrast with:** profitability (positive cash generation — the opposite of burn)

## What it is

Two numbers, tightly linked:

- **Burn rate** — how fast you spend cash. It comes in two flavors, and the difference is
  the whole game:
  - **Gross burn** = total cash going *out* the door each month (salaries, rent, ad spend,
    tools, everything). It ignores revenue.
  - **Net burn** = cash *out* − cash *in* = the amount your bank balance actually shrinks
    each month. This is the number that kills companies.
- **Runway** — how many months you can survive at the current net burn before the cash
  runs out.

```
Net burn   = gross burn − monthly revenue (cash in)
Runway (months) = cash in bank ÷ net monthly burn
```

A company with **$500k in the bank** burning **$50k net/month** has **10 months** of
runway. That "10" is not a finance-team trivia number — it is the master clock. Every bet
about hiring, [GTM](./gtm.md), pricing, and fundraising is really a bet about whether it
pays off *before the clock hits zero*.

## Why it exists / the problem it solves

A startup is, financially, a machine that spends money now in the hope of making more money
later. The existential risk isn't "will this be profitable someday" — it's "will we still
be *alive* when someday arrives." Burn and runway exist to make that risk **countable**:
they convert a vague dread ("are we going to make it?") into a hard number of months,
which you can then manage, extend, or race against.

Without this lens, founders confuse *activity* with *survival* — revenue is climbing, the
team is shipping, momentum feels good — while the cash quietly drains toward a wall nobody
put a date on. Runway puts the date on the wall.

## How experts reason with it

The insight a beginner misses: **runway isn't a status number you check — it's the
constraint that should shape every decision.** Cash is the one resource you cannot get more
of by trying harder; when it's gone, the company is over regardless of how good the product
is. So experts reason *backward from the wall*.

1. **Default alive vs. default dead (Paul Graham).** The single most important question a
   founder can ask: *given current revenue, current growth rate, and current expenses — and
   assuming you never raise again — do you reach profitability before the money runs out?*
   If yes, you are **default alive**. If no, you are **default dead**, living on borrowed
   time that only more fundraising can extend. PG's point is that founders discover this far
   too late: they *feel* fine because a round is always "coming," and they don't run the
   projection that would tell them they're actually default dead *today*. Run it early;
   run it often.

2. **Net burn is the number, not gross.** Growing revenue *reduces* net burn even while
   gross spending stays flat — because more cash is coming in to offset it. This is why
   [MRR/ARR](./mrr-arr.md) growth is the cleanest way to extend runway without cutting
   anything: every dollar of new recurring revenue shrinks net burn dollar-for-dollar.
   Conversely, revenue that *hasn't materialized yet* must not be counted in runway (see
   traps). Runway is built on cash in the bank and cash actually arriving — not pipeline.

3. **Runway sets the tempo of every bet.** With 18 months you can run a slow, deliberate
   [GTM](./gtm.md) experiment, hire ahead of need, and let a channel prove itself. With 6
   months you can only place bets that pay back *inside* the window — which is exactly why
   [CAC](./cac.md) **payback period** matters more than the LTV:CAC ratio for anyone on a
   tight runway. A channel with a 4-month payback returns cash while you're still alive; a
   channel with an 18-month payback is, on a 6-month runway, just burning cash faster. Short
   runway forces short-payback bets.

4. **Growth changes burn — usually upward.** A beginner models burn as flat. In reality,
   scaling almost always *raises* burn: more hires, more ad spend, more infrastructure. So
   "we have 12 months" computed at today's burn can silently become 7 months once you step
   on the gas. Model runway against your *planned* burn, not last month's.

5. **Fundraising is a function of runway, not a rescue from it.** Raising with **~6 months
   of runway left is a weak position** — the counterparty knows you're near the wall, so
   terms get worse and the risk of *not closing in time* becomes existential. The strong
   move is to raise from a position of strength (12+ months left, metrics trending up) or to
   engineer default-alive so you never *need* to raise. Fundraising takes 3–6 months; if you
   start when you have 6 months of cash, you're negotiating with a gun to your own head.

The founder's takeaway: **know your runway to the month, know whether you're default alive,
and make every bet pay back before the wall.** For a bootstrapped solo founder especially,
extending runway (revenue up, burn down) *is* the strategy — it buys the one thing that
compounds: more time to figure it out.

## When you use it

- **Every month, as a standing check:** recompute cash ÷ net burn; watch the trend, not just
  the level. Runway *shortening* faster than planned is the early warning.
- **Before any hire or spend increase:** re-run runway against the *new* burn. "Can we
  afford this person?" is really "how many months does this cost us?"
- **Before starting a fundraise:** count backward. Start when you have 9–12+ months, not 6.
- **When choosing [GTM](./gtm.md) channels:** filter by [CAC](./cac.md) payback against your
  runway window — short runway demands short-payback motions.
- **When deciding whether to scale:** are you default alive? If not, growth that raises burn
  can shorten the very runway you need to reach profitability.

## Metrics / how it's measured

```
Gross burn      = total monthly cash outflows
Net burn        = gross burn − monthly cash revenue
Runway (months) = cash in bank ÷ net monthly burn
```

If net burn is **zero or negative** (revenue ≥ gross burn), runway is **infinite** — you
are cash-flow positive and, by definition, **default alive**.

**Default-alive vs. default-dead example.** Two startups, each with **$600k in the bank**:

| | Startup A (default *dead*) | Startup B (default *alive*) |
|---|---|---|
| Cash in bank | $600k | $600k |
| Gross burn / mo | $100k | $100k |
| Revenue / mo (now) | $20k | $20k |
| **Net burn / mo (now)** | **$80k** | **$80k** |
| **Runway at today's burn** | **7.5 months** | **7.5 months** |
| Revenue growth | +5% / mo | +20% / mo |

They look *identical* today — same cash, same burn, same 7.5-month runway. The difference is
only in the growth rate, and it's decisive. Project revenue forward against roughly flat
gross burn:

- **Startup A** (revenue +5%/mo): revenue crawls from $20k toward ~$32k over a year — it
  **never catches** $100k of gross burn before the cash is gone. **Default dead.** Its only
  futures are: raise more, or cut burn hard.
- **Startup B** (revenue +20%/mo): revenue compounds — ~$24k, $29k, $35k, $42k … crossing
  **$100k in roughly 9 months**, at which point net burn hits zero and burn *stops*. If the
  cash lasts until that crossover, it reaches **profitability first**. **Default alive.**

Same snapshot, opposite fate — because default-alive is about the *trajectory* (growth vs.
burn), not the *balance* (cash today). That's exactly Paul Graham's point: the number that
matters isn't your runway, it's whether your growth curve crosses your burn line before the
runway ends.

*Rough benchmarks:* healthy early-stage startups target **18–24 months** of runway after a
raise; **under ~6 months** is the danger zone where you should already be raising or cutting.

## Common misconceptions

- **"Burn is just what we spend" (confusing gross and net).** The number that ends companies
  is **net** burn — cash out *minus* cash in. Growing revenue can extend runway even with
  gross spending flat; tracking only gross hides that.
- **"We have 12 months of runway" (computed at flat burn).** Burn usually *rises* as you
  scale (hires, ad spend, infra). Runway must be modeled against *planned* burn, or a
  hiring spree silently turns 12 months into 7.
- **"Runway includes the revenue in our pipeline."** Runway counts **cash in the bank and
  cash actually arriving** — not deals you *expect* to close. Counting unmaterialized
  revenue is how founders think they have a year and discover they have four months.
- **"We're fine, revenue's growing" (not checking default-alive).** Growing revenue can
  still be default *dead* if the growth rate is too slow to cross the burn line before cash
  runs out. Feeling busy and successful is not the same as being default alive — run the
  projection.
- **"We'll raise when we run low."** Fundraising *takes* 3–6 months and is hardest from a
  position of weakness. Waiting until ~6 months of runway remain is negotiating from the
  back foot; the counterparty prices in your desperation.

## Examples

- **Bootstrapped solo SaaS.** $40k saved, no salary drawn, ~$1.5k/mo in tools and ads →
  gross burn ~$1.5k. Revenue at $2k MRR → **net burn is negative**: the business generates
  cash. Runway is effectively infinite, i.e. **default alive**. Here the whole job is to keep
  net burn ≤ 0 while [MRR](./mrr-arr.md) climbs — time is on your side.
- **Funded startup racing the clock.** Raised $2M, burning $150k gross, $110k net → **~18
  months** runway. If it stays default dead, it must either cross into profitability or open
  the next raise by **month ~9–12** (leaving 6+ months to close). Starting the raise at month
  16 with 2 months of cash left is how good companies die on the doorstep of a term sheet.
- **The growth-that-shortened-runway trap.** A team with "12 months" doubles its ad spend to
  chase [GTM](./gtm.md) traction. Gross burn jumps, net burn jumps, and the 12 months quietly
  becomes 6 — and if the new [CAC](./cac.md) channel has a payback longer than the remaining
  runway, they've spent themselves *closer* to the wall, not further from it.

## Talking to an LLM about it

- **Weak prompt:** "How much money do I need for my startup?"
- **Better prompt:** "How do I calculate my startup's runway and burn rate, and how much runway should I keep?"
- **Expert prompt:** "For a startup with $600k cash, $100k/mo gross burn, $20k/mo revenue
  growing 20% month-over-month, model my net burn and runway month-by-month. Tell me whether
  I'm *default alive or default dead* in Paul Graham's sense — i.e. do I reach profitability
  before cash runs out at current growth and expenses? Then advise: should I raise now, cut
  burn, or push growth — and if I raise, at what month should I *start*, given fundraising
  takes ~4 months and I don't want to negotiate with under 6 months of runway left?"

The expert version supplies the full cash/burn/growth inputs and asks for the *default-alive
diagnosis plus a decision* (raise vs. cut vs. grow, and fundraising *timing*) — so the model
reasons about survival trajectory and strategy, not just the arithmetic of a formula.

## My evolving understanding

- **v1 (2026-07-03):** First pass. The reframe that landed: I thought of runway as a
  *status number* you glance at — "how much cash is left." The expert model is that runway is
  a **constraint that shapes every decision**, and that the number that actually matters is
  not the balance but the **trajectory** — Paul Graham's *default alive vs. default dead*:
  does your growth curve cross your burn line before the cash runs out? Two startups with
  identical cash and burn can have opposite fates purely from growth rate. Three things
  clicked as consequences: (1) **net** burn, not gross, is the killer, so growing
  [MRR](./mrr-arr.md) extends runway as surely as cutting costs; (2) short runway forces
  short-**payback** bets, which is why [CAC](./cac.md) payback period outranks the LTV:CAC
  ratio when cash is tight; and (3) fundraising is a *timing* problem — you raise from
  strength at 12+ months, never as a rescue at 6, because the raise itself takes months and
  weakness gets priced in.

## Sources

- Paul Graham, *Default Alive or Default Dead?* (2015 essay) — the central framing: at
  current growth and expenses, do you reach profitability before the money runs out, and why
  founders discover the answer too late.
- Standard venture / YC framing on burn, runway, and fundraising timing (raise from strength
  with 12+ months; treat ~6 months as the danger zone) — to verify and deepen on revisit.
- See also [mrr-arr](./mrr-arr.md) (recurring revenue offsets net burn), [cac](./cac.md)
  (acquisition spend and payback vs. runway), [gtm](./gtm.md) (runway sets go-to-market tempo).
</content>
</invoke>
