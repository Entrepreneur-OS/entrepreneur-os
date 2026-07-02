# JTBD — Jobs To Be Done

> Plain English: people don't really buy products — they *hire* something to make
> progress in a situation they're stuck in. Expert phrasing: a customer's purchase is
> best understood as a **"job" they're trying to get done**, along functional,
> emotional, and social dimensions — and the product is just the thing they hire to do
> that job.

- **Domain:** product
- **Stage:** validation
- **Prerequisites:** a real problem worth solving, early customer conversations (leads into [icp](./icp.md))
- **Related:** [icp](./icp.md), [pmf](./pmf.md), [mvp](./mvp.md), positioning · **Contrast with:** feature thinking, demographic segmentation

## What it is

Jobs To Be Done flips the unit of analysis. Instead of starting from *your product* and
its features, or from *who the customer is* demographically, you start from the
**progress the customer is trying to make** in a specific circumstance. Clayton
Christensen's line: *"people don't want a quarter-inch drill, they want a quarter-inch
hole"* — and, one step further, they want the *shelf on the wall* and the feeling of a
tidy home that the hole enables. The "job" is that desired progress, not the tool.

A well-formed job has three dimensions layered together:

- **Functional** — the practical task ("get a filling breakfast I can eat one-handed on
  a boring commute").
- **Emotional** — how the person wants to *feel* ("not bored", "competent", "in
  control").
- **Social** — how they want to be *perceived* by others ("a responsible parent", "a
  serious professional").

The product is the *candidate you hire* to do that job — and it competes with every
other candidate the customer might hire instead, including non-obvious ones and "doing
nothing at all."

## Why it exists / the problem it solves

The concept was invented to answer a maddening question: *why do so many well-researched
products fail?* Companies segment markets by attributes they can measure — age, income,
company size — and by *product category*, then correlate the two and ship. But
**correlation isn't causation.** Knowing that 35-year-old suburban dads buy your minivan
tells you nothing about the *causal mechanism* that makes anyone reach for a product in a
moment of need. JTBD exists to recover that causal story: the *circumstance* and the
*progress being sought* are what actually cause a purchase, and they cut across the
demographic boxes. It reframes needs as **jobs** so you design for the thing that
actually drives the "hire."

## How experts reason with it

The insight a beginner misses: **your real competition is defined by the job, not by
your product category.** If the job is "help me stay awake and occupied on a boring
morning drive," a morning milkshake competes with bananas, bagels, donuts, coffee, and
podcasts — *not* with other milkshakes. Miss the job and you optimize against the wrong
rivals (making the shake "tastier" when the customer actually wanted it *thicker so it
lasts the whole commute*).

Mental models experienced operators hold:

1. **Circumstance over customer.** The same person hires different products for the same
   category depending on the situation. Don't ask "what kind of person buys this?" ask
   "what job are they in when they reach for it?"
2. **Progress, not preferences.** A job is a verb-shaped struggle for progress, not an
   adjective describing a demographic. "Help me feel like a good host when friends drop
   by unexpectedly" is a job; "millennials who like wine" is not.
3. **Hiring implies firing.** To hire your product, the customer fires something else —
   an old habit, a rival, a workaround. Understanding what they're firing (and what
   *anxieties* hold them back from switching) is half the strategy. Bob Moesta's "Forces
   of Progress": push of the situation + pull of the new solution, minus the anxiety of
   the new + the habit of the present.
4. **Jobs are stable; solutions churn.** The job "communicate a moment to friends" has
   existed forever; the solutions (letter → phone → SMS → Snapchat) keep getting fired
   and rehired. Anchoring on the durable job future-proofs your thinking.

This is where JTBD earns its keep against the rest of the graph: a sharp job statement
**sharpens your [ICP](./icp.md)** (you target the people *in that circumstance*, not a
demographic guess) and **de-risks the leap to [PMF](./pmf.md)** (fit is far more likely
when the [MVP](./mvp.md) is aimed at a real job people are already struggling to get
done, rather than a feature you found clever).

## When you use it

- **Before building:** to decide what the [MVP](./mvp.md) must nail and what it can skip
  — features that don't serve the core job are noise.
- **In customer interviews:** to dig for the *struggling moment* and the *forces* around
  a switch, instead of asking people to rate features they can't yet imagine.
- **When positioning:** the job dictates the message ("finally, a X that lets you Y")
  and reveals the *real* competitive set you must beat.
- **When growth stalls despite a "good" product:** usually you built for a category, not
  a job — or you're solving a functional job while the emotional/social one goes unmet.

## Metrics / how it's measured

JTBD is mostly qualitative, but **Tony Ulwick's Outcome-Driven Innovation (ODI)** makes
it quantitative. The pipeline:

1. Define the core **functional job** and break it into steps.
2. Elicit **desired outcomes** — measurable statements of the form
   *"minimize the time it takes to \_\_\_"* or *"increase the likelihood that \_\_\_."*
3. Survey customers on each outcome's **importance** and current **satisfaction**.
4. Score the **opportunity**: `Opportunity = Importance + max(Importance − Satisfaction, 0)`.

Outcomes that are *important but poorly satisfied* are the underserved openings worth
building for; important-and-already-satisfied ones are table stakes; unimportant ones are
traps. This turns "listen to customers" into a ranked, defensible innovation backlog.

## Common misconceptions

- **A job is not a feature.** The single most common misuse is writing a "job" that is
  really a feature in disguise: *"the customer's job is to use our dashboard"* — no, the
  dashboard is what you *hired* them to... it's backwards. A real job is
  solution-agnostic: *"know whether my business is healthy without digging through
  spreadsheets."* If your job statement names your product, it isn't a job yet.
- **JTBD ≠ demographics.** "Busy moms aged 30–45" is a segment, not a job. Two people in
  wildly different demographics can share the exact same job; one person hires different
  products for the same category in different circumstances.
- **JTBD ≠ user persona.** A persona describes *who*; a job describes the *progress
  sought in a circumstance*. Useful together, but the job is the causal driver.
- **"Just ask people what they want."** Customers report *preferences* and *solutions*
  ("I want it faster"), not jobs. You have to interrogate the struggling moment to
  recover the underlying job — hence the milkshake interviews below.

## Examples

- **The milkshake study (Christensen / Moesta).** A fast-food chain tried to boost
  milkshake sales by making them tastier — segmentation by customer profile went
  nowhere. Studying *when* shakes were bought revealed a huge morning cohort buying one
  shake, alone, to go. The job: *"make my long, boring commute more bearable and keep me
  full till lunch — one-handed, no mess."* The shake beat bananas (gone too fast),
  bagels (dry, two hands), and donuts (crumbly) precisely because it was *thick and slow
  to drink*. The improvement wasn't "tastier" — it was *thicker, with chunks to make the
  drive more interesting.* A rival "afternoon-with-my-kid" job wanted the opposite: a
  small, quick shake. Same product, two different jobs, opposite designs.
- **Snapchat vs. the camera.** The job "share a fleeting moment casually without it
  becoming a permanent record" was under-served by permanent-feed social apps —
  ephemerality *was* the job, not a feature.
- **QuickBooks.** Intuit found small-business owners weren't hiring accounting software
  to "do accounting" (an accountant's job) — they hired it to *"know if my business is
  okay"* without learning double-entry bookkeeping. The winning product stripped out
  accounting jargon rather than adding it.

## Talking to an LLM about it

The same intent, framed three ways — this is how vocabulary becomes leverage:

- **Weak prompt:** "What features should I add to my app?"
- **Better prompt:** "Help me figure out what job my note-taking app is really doing for
  users so I can prioritize features."
- **Expert prompt:** "Act as a JTBD strategist. For a bootstrapped note-taking app, help
  me write a core job statement (functional + emotional + social dimensions) for the
  'capture a fleeting idea before it's lost' circumstance. Then map the Forces of
  Progress (push, pull, anxiety, habit) around a user switching from paper, and use
  Ulwick's Outcome-Driven Innovation to draft 8 desired-outcome statements I could survey
  on importance vs. satisfaction to find the biggest opportunity. Flag any of my inputs
  that are features disguised as jobs."

The expert version names the circumstance, the three dimensions, the Forces framework,
and the ODI method with a concrete deliverable — so the model reasons from the actual
JTBD literature instead of handing back generic "talk to your users" advice.

## My evolving understanding

- **v1 (2026-07-02):** First pass while bootstrapping Entrepreneur-OS. The reframe that
  landed hardest: I default to *feature thinking* (engineer brain — "what should I
  build?") and JTBD forces the prior question — *"what progress is someone hiring this to
  make, and who/what am I firing?"* Two things clicked. First, **the job defines the
  competitive set**, so my real rivals are often outside my category (including "do
  nothing"). Second, JTBD is the missing front-end to the concepts I already wrote: it
  gives [ICP](./icp.md) its causal spine (target a circumstance, not a demographic) and
  makes [PMF](./pmf.md) less of a gamble because the [MVP](./mvp.md) is aimed at a job
  people are *already* struggling to complete. The discipline I'll hold myself to: if a
  "job" I write names my product or a feature, it's not a job yet — rewrite it
  solution-agnostically.

## Sources

- Clayton M. Christensen, Taddy Hall, Karen Dillon & David S. Duncan, *Competing Against
  Luck: The Story of Innovation and Customer Choice* (2016) — the milkshake study and the
  "hire/fire a product to make progress" framing.
- Tony Ulwick, *Jobs to Be Done: Theory to Practice* (2016) — Outcome-Driven Innovation:
  jobs → desired outcomes → importance/satisfaction → opportunity scoring.
- Bob Moesta & Chris Spiek (Re-Wired Group) — the "Forces of Progress" switching model
  (push/pull/anxiety/habit); to verify and deepen on revisit.
- See also [icp](./icp.md), [pmf](./pmf.md), [mvp](./mvp.md).
