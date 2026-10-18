export type Project = {
  slug: string;
  title: string;
  category: string;
  industry: string;
  problem: string;
  summary: string;
  outcome: string;
  thumbnail: string;
  executiveSummary: string;
  context: string;
  problemDetail: string;
  discovery: string;
  strategy: string;
  execution: string;
  measurement: string;
  reflection: string;
  myRole: string;
};

export const projects: Project[] = [
  {
    slug: "tinfc-website-redesign",
    title: "T INFC — B2C Website Redesign",
    category: "Product strategy · SEO · Conversion",
    industry: "Fintech / Broking",
    problem: "The existing B2C platform had poor SEO visibility, an outdated information architecture, and a non-responsive layout that was losing organic traffic and converting poorly on mobile.",
    summary:
      "Led an end-to-end redesign of Religare's B2C platform — overhauling information architecture, SEO structure, and responsive design to modernise the user experience and improve organic reach.",
    outcome: "35% increase in digital engagement",
    thumbnail: "/thumbnails/tinfc.png",
    executiveSummary:
      "The T INFC redesign transformed a legacy B2C financial website into a responsive, SEO-optimised platform. Digital engagement across the platform increased by 35%, and the project became a reference point for Religare's broader digital transformation programme.",
    context:
      "Religare Broking operates in a competitive retail broking market where digital presence directly influences customer acquisition. The T INFC platform was the primary B2C entry point but had not been meaningfully updated in several years, resulting in declining organic rankings and a poor mobile experience.",
    problemDetail:
      "The platform suffered from three compounding issues: an unstructured content hierarchy that confused new visitors, a desktop-only layout that degraded on mobile devices, and weak on-page SEO that limited discoverability. Bounce rates were high and time-on-site was low.",
    discovery:
      "I audited the existing site using Google Analytics and Search Console to identify high-exit pages and keyword gaps. I reviewed competitor platforms and conducted informal walkthroughs with five prospective customers to understand where the experience broke down. The clearest finding: users couldn't locate key product information within two clicks.",
    strategy:
      "I prioritised three workstreams in sequence: information architecture restructure first (highest impact on both SEO and usability), responsive layout second, and content and metadata optimisation third. This sequencing allowed design and development to work in parallel on the latter two phases.",
    execution:
      "I worked with a UI designer, two frontend developers, and the SEO team. I wrote the product brief, defined the new site map, reviewed wireframes in Figma, and coordinated weekly with the SEO lead on metadata and content structure. Stakeholder reviews were held at wireframe, prototype, and pre-launch stages.",
    measurement:
      "Primary KPI: digital engagement (sessions, time-on-site, pages per session). Secondary: organic search ranking for target keywords. Engagement increased 35% within the first quarter post-launch. The project also contributed to a broader 35% increase in digital engagement reported across Religare's platforms.",
    reflection:
      "The biggest lesson was that SEO and UX are not separate workstreams — the content hierarchy decisions that improved navigation also improved crawlability. In future, I would involve the SEO team from the first IA workshop rather than as a downstream reviewer.",
    myRole: "Lead PM at Religare Broking Ltd. I owned the product brief, site architecture, stakeholder alignment, and launch coordination. Design, development, and SEO were collaborating functions.",
  },
  {
    slug: "religare-online-product-expansion",
    title: "Religare Online — Product Expansion",
    category: "Product roadmap · Onboarding · Analytics",
    industry: "Fintech / Retail broking",
    problem: "New users were dropping off during onboarding before completing account activation, and the product lacked real-time analytics visibility for both users and internal teams.",
    summary:
      "Defined and executed a product roadmap for Religare Online — streamlining the onboarding flow, integrating real-time analytics dashboards, and laying the foundation for the algo trading platform.",
    outcome: "30% reduction in onboarding drop-off",
    thumbnail: "/thumbnails/religare-online.png",
    executiveSummary:
      "By restructuring the onboarding flow and integrating real-time analytics dashboards, Religare Online reduced onboarding drop-off by 30% and improved user retention by 15%. The platform also became the foundation for the algo trading MVP.",
    context:
      "Religare Online is the core retail broking platform serving individual investors. At the start of this initiative, the product had grown feature-by-feature without a coherent onboarding strategy, and internal teams had no real-time view of user behaviour or platform performance.",
    problemDetail:
      "Drop-off analysis showed that 40% of new registrations never completed the KYC and account activation steps. The onboarding flow had seven steps with no progress indication, no contextual help, and no re-engagement mechanism. Internally, the team relied on weekly Excel reports rather than live dashboards.",
    discovery:
      "I mapped the full onboarding funnel using Google Analytics event tracking and identified the two highest drop-off points: document upload and video KYC. I ran five user interviews with recently onboarded customers to understand friction points. The core insight: users didn't understand what documents were needed or why the video step was required.",
    strategy:
      "I prioritised onboarding flow simplification as the first milestone because it had the highest drop-off impact and was fully within the product team's control. Analytics dashboard integration was sequenced second, as it would give the team the visibility needed to iterate faster on subsequent releases.",
    execution:
      "I collaborated with two frontend developers, a UX designer, and the compliance team (for KYC requirements). I wrote user stories in Jira, facilitated sprint planning, and ran fortnightly demos with the Head of Digital. The analytics dashboard was built using Power BI connected to the platform's event data.",
    measurement:
      "Primary KPI: onboarding completion rate. Secondary: 30-day retention. Drop-off reduced by 30% within two months of the new flow going live. Retention improved by 15% over the following quarter, attributed to better early activation. Dashboard adoption by internal teams reached 80% within six weeks.",
    reflection:
      "The compliance team's involvement earlier in the process would have saved two weeks of rework on the KYC step. The lesson: for regulated products, compliance is a design constraint, not a sign-off step — they need to be in the room from the start.",
    myRole: "Product Manager at Religare Broking Ltd. I owned the roadmap, user story definition, sprint facilitation, and stakeholder communication. Design, engineering, and compliance were collaborating functions.",
  },
  {
    slug: "algo-trading-platform",
    title: "Algo Trading Platform — MVP",
    category: "MVP definition · Fintech · Dashboards",
    industry: "Fintech / Algorithmic trading",
    problem: "Retail traders wanted to automate strategies but had no accessible, compliant tool within the Religare ecosystem — forcing them to use third-party platforms with no integration to their existing accounts.",
    summary:
      "Defined the MVP for Religare's algo trading platform — collaborating with development and UI teams to build interactive dashboards and deliver a compliant, accessible trading automation tool.",
    outcome: "30% engagement growth post-launch",
    thumbnail: "/thumbnails/algo-trading.png",
    executiveSummary:
      "The algo trading MVP gave retail traders a compliant, integrated automation tool within the Religare platform. Engagement grew 30% following launch, and the platform established a new product line for Religare Broking's digital offering.",
    context:
      "Algorithmic trading was growing among retail investors, but most accessible tools were either too complex for non-technical users or required leaving the Religare ecosystem entirely. The business saw an opportunity to retain higher-value traders by offering a native solution.",
    problemDetail:
      "The core tension was between simplicity and capability: experienced traders needed enough configurability to build meaningful strategies, while less technical users needed guardrails and clear feedback. There was also a regulatory constraint — all automated orders had to pass through SEBI-compliant risk checks.",
    discovery:
      "I interviewed eight active traders across different experience levels to understand their current workflow, the tools they used, and where they felt underserved. I also reviewed SEBI guidelines on algorithmic trading for retail participants. Key insight: most users wanted pre-built strategy templates they could customise, not a blank canvas.",
    strategy:
      "I scoped the MVP around three capabilities: strategy selection from a template library, backtesting against historical data, and live execution with risk controls. Advanced features like custom scripting and multi-leg strategies were deferred to v2. This kept the build to 12 weeks and reduced regulatory complexity.",
    execution:
      "I worked with three developers, a UI designer, and the compliance and risk teams. I defined the MVP scope in a product brief, ran two-week sprints in Jira, and facilitated weekly design reviews. The interactive dashboard was built to surface key metrics — P&L, win rate, drawdown — in real time. I presented progress to senior leadership at four-week intervals.",
    measurement:
      "Primary KPI: platform engagement (active sessions, strategy activations). Secondary: trader retention. Engagement grew 30% in the quarter following launch. The platform also contributed to a 20% increase in engagement following a mobile trading redesign that extended the algo features to mobile.",
    reflection:
      "The template-first approach was the right call — it reduced time-to-first-value for new users significantly. The main gap was in the backtesting UX: users wanted more granular control over the test parameters than the MVP provided. This became the top priority for v2.",
    myRole: "Lead PM at Religare Broking Ltd. I owned MVP scoping, sprint planning, compliance coordination, and stakeholder reporting. Development, design, and risk were collaborating functions.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
