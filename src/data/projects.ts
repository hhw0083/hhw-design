export type ProjectMetric = {
  label: string;
  value: string;
};

export type SitemapNode = {
  label: string;
  description?: string;
  children?: SitemapNode[];
};

export type DesignToken = {
  name: string;
  value: string;
  usage: string;
};

export type DesignTokenSection = {
  title: string;
  description?: string;
  tokens: DesignToken[];
};

export type ColorGroup = {
  name: string;
  description?: string;
  colors: {
    name: string;
    value: string;
    usage: string;
  }[];
};

export type ComponentSpec = {
  name: string;
  purpose: string;
  anatomy: string[];
  states: string[];
  usageGuidelines?: string[];
};

export type ProjectScreen = {
  name: string;
  purpose: string;
  keyElements: string[];
  userGoal?: string;
};

export type ProjectImageAssets = {
  coverImage?: string;
  heroImage?: string;
  galleryImages?: string[];
};

export type Project = ProjectImageAssets & {
  slug: string;
  title: string;
  eyebrow: string;
  role: string;
  year: string;
  duration: string;
  summary: string;
  challenge: string;
  outcome: string;
  metrics: ProjectMetric[];
  tags: string[];
  tools: string[];
  process: string[];
  deliverables: string[];
  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };
  overview?: string[];
  problemStatements?: string[];
  informationArchitecture?: string[];
  sitemap?: SitemapNode[];
  designTokens?: DesignTokenSection[];
  colorSystem?: ColorGroup[];
  components?: ComponentSpec[];
  screens?: ProjectScreen[];
  reflection?: string[];
};

export const projectImageAssets = {
  "esg-forest-matching-platform": {
    coverImage: "/projects/esg/cover.webp",
    heroImage: "/projects/esg/hero.webp",
    galleryImages: [
      "/projects/esg/sitemap.webp",
      "/projects/esg/design-system.webp",
      "/projects/esg/components.webp",
      "/projects/esg/final-ui-01.webp",
      "/projects/esg/final-ui-02.webp",
    ],
  },
  "the-one": {
    coverImage: "/projects/the-one/cover.webp",
    heroImage: "/projects/the-one/hero.webp",
    galleryImages: [],
  },
  "tea-space": {
    coverImage: "/projects/tea-space/cover.webp",
    heroImage: "/projects/tea-space/hero.webp",
    galleryImages: [],
  },
} satisfies Record<string, ProjectImageAssets>;

export const profile = {
  name: "HHW",
  title: "UI/UX Designer",
  location: "Taipei / Remote",
  email: "hello@hhw.design",
  availability: "Open to Product Design roles",
  intro:
    "我把複雜產品拆成清楚的使用者任務、可驗證的介面流程，以及能讓工程團隊順利落地的設計系統。",
  bio:
    "專注於 B2B SaaS、金融科技與資料密集型產品。擅長從研究、資訊架構、互動原型到 UI system handoff，讓產品在商業目標與使用者體驗之間取得精準平衡。",
};

export const projects: Project[] = [
  {
    slug: "esg-forest-matching-platform",
    ...projectImageAssets["esg-forest-matching-platform"],
    title: "ESG 林地媒合平台",
    eyebrow: "ESG Marketplace / Sustainability Platform",
    role:
      "UI/UX Designer，負責產品資訊架構、媒合流程、設計系統規格與高保真介面設計。",
    year: "2026",
    duration: "6 weeks",
    summary:
      "為企業 ESG 採購與林地保育方打造媒合平台，協助需求方快速找到符合地區、面積、碳匯、認證與長期維護條件的林地方案。",
    challenge:
      "ESG 林地合作牽涉企業永續目標、地主資料、林地條件、專案認證、風險揭露與後續追蹤。若資訊架構不清楚，企業難以判斷可信度，供給方也難以有效呈現專案價值。",
    outcome:
      "建立以需求篩選、林地卡片、專案詳情、媒合詢問與 ESG impact tracking 為核心的服務流程，並整理出可擴充的設計 tokens、色彩系統與元件庫。",
    metrics: [
      { label: "Core flows", value: "5" },
      { label: "IA groups", value: "7" },
      { label: "Components", value: "12" },
    ],
    tags: ["ESG", "Marketplace UX", "Information Architecture"],
    tools: ["Figma", "FigJam", "Notion", "Design Tokens"],
    process: [
      "定義企業端與林地方的雙邊需求，拆解搜尋、比較、詢問與追蹤四個主要任務。",
      "建立資訊架構與 sitemap，讓林地資料、合作條件、永續成果與信任訊號有一致呈現方式。",
      "設計 token、色彩與元件規格，讓平台可支援不同林地類型、狀態與 ESG 指標擴充。",
    ],
    deliverables: [
      "Project overview",
      "Information architecture",
      "Sitemap",
      "Design token system",
      "Component library spec",
    ],
    theme: {
      primary: "#0f766e",
      secondary: "#2563eb",
      accent: "#b45309",
    },
    overview: [
      "此專案聚焦在企業 ESG 需求方與林地專案供給方之間的信任建立。平台需要同時呈現林地基本資料、專案可行性、合作條件、永續成果與聯繫流程。",
      "產品定位不是單純列表型 marketplace，而是支援企業做初步 ESG due diligence 的媒合工作台。使用者需要快速篩選，也需要在深入閱讀時看見足夠的風險與效益資訊。",
      "設計目標是降低企業從瀏覽林地、比較方案、送出媒合需求到後續追蹤 impact 的認知成本。",
    ],
    problemStatements: [
      "企業使用者需要在有限時間內判斷林地專案是否符合 ESG 目標、地理條件、合作預算與認證要求，但現有資訊常分散在簡報、表格與人工往返訊息中。",
      "林地供給方需要以可信、可比較、可維護的方式展示專案，但不同林地資料欄位不一致，容易讓需求方無法橫向比較。",
      "媒合流程若缺少清楚狀態與下一步提示，企業端會不知道詢問是否送出、資料是否足夠、後續會由誰聯繫。",
    ],
    informationArchitecture: [
      "首頁以企業需求導向入口為主，提供 ESG 目標、地區、合作方式與林地類型的快速篩選。",
      "林地列表以可比較卡片呈現核心資料，包括地區、面積、碳匯潛力、認證狀態、合作模式與風險標籤。",
      "林地詳情頁分為 Overview、Impact、Land Profile、Certification、Partnership Terms、Timeline 與 Contact CTA。",
      "企業會員區保留已收藏林地、媒合詢問紀錄、文件上傳、專案追蹤與 impact reports。",
    ],
    sitemap: [
      {
        label: "Home",
        description: "企業 ESG 需求入口、推薦林地與平台價值摘要。",
        children: [
          { label: "Hero Search", description: "以 ESG 目標與地區開始搜尋。" },
          {
            label: "Featured Forest Projects",
            description: "展示高可信度與高媒合度專案。",
          },
          {
            label: "How Matching Works",
            description: "說明瀏覽、詢問、評估與合作流程。",
          },
        ],
      },
      {
        label: "Forest Marketplace",
        description: "林地搜尋、篩選、排序與比較。",
        children: [
          { label: "Search Results", description: "林地卡片列表與地圖輔助檢視。" },
          { label: "Compare Panel", description: "比較面積、價格、認證與 impact 指標。" },
          { label: "Saved Projects", description: "暫存候選林地與後續評估清單。" },
        ],
      },
      {
        label: "Forest Detail",
        description: "單一林地專案完整 case profile。",
        children: [
          { label: "Project Overview" },
          { label: "ESG Impact" },
          { label: "Land Profile" },
          { label: "Certification & Risk" },
          { label: "Partnership Terms" },
          { label: "Inquiry CTA" },
        ],
      },
      {
        label: "Company Workspace",
        description: "企業端媒合管理與專案追蹤。",
        children: [
          { label: "Inquiry Status" },
          { label: "Document Upload" },
          { label: "Impact Tracking" },
          { label: "Reports" },
        ],
      },
    ],
    designTokens: [
      {
        title: "Spacing",
        description: "以 4px base 建立可預期的表單、卡片與資料區塊間距。",
        tokens: [
          { name: "space-2", value: "8px", usage: "icon 與 label 間距" },
          { name: "space-4", value: "16px", usage: "卡片內層 padding 與表單群組" },
          { name: "space-6", value: "24px", usage: "詳情頁 section 內部區塊" },
          { name: "space-10", value: "40px", usage: "主要資訊區塊之間的垂直節奏" },
        ],
      },
      {
        title: "Typography",
        description: "兼顧 ESG 報告語氣與平台操作效率。",
        tokens: [
          { name: "text-display", value: "48/56 semibold", usage: "首頁與林地詳情主標" },
          { name: "text-heading", value: "28/36 semibold", usage: "case section 標題" },
          { name: "text-body", value: "16/28 regular", usage: "長段落與說明文字" },
          { name: "text-meta", value: "13/20 medium", usage: "狀態、標籤與輔助資料" },
        ],
      },
      {
        title: "Elevation",
        description: "在明亮介面中用留白、邊框、柔和陰影與 focus ring 表示資訊層級。",
        tokens: [
          { name: "surface-base", value: "#F6F7F9", usage: "頁面背景" },
          { name: "surface-card", value: "#FFFFFF", usage: "林地卡片與資料面板" },
          { name: "border-muted", value: "#E5E7EB", usage: "預設邊框" },
          { name: "focus-ring", value: "#0F766E", usage: "鍵盤 focus 與主要互動提示" },
        ],
      },
    ],
    colorSystem: [
      {
        name: "Forest Trust",
        description: "用於主要 CTA、可信狀態與保育相關訊息。",
        colors: [
          { name: "Forest 500", value: "#16a34a", usage: "primary action" },
          { name: "Teal 700", value: "#0f766e", usage: "positive impact / verified badge" },
          { name: "Moss 700", value: "#14532d", usage: "沉穩輔助色與深色文字搭配" },
        ],
      },
      {
        name: "Data Clarity",
        description: "用於數據、比較、互動 focus 與中性資訊。",
        colors: [
          { name: "Blue 600", value: "#2563eb", usage: "active filters / data highlight" },
          { name: "Slate 300", value: "#cbd5e1", usage: "secondary text" },
          { name: "Slate 500", value: "#64748b", usage: "metadata / disabled text" },
        ],
      },
      {
        name: "Risk & Attention",
        description: "用於未完成、需審核、風險揭露與重要提醒。",
        colors: [
          { name: "Amber 600", value: "#d97706", usage: "pending certification" },
          { name: "Rose 700", value: "#be123c", usage: "risk tag / incomplete requirement" },
          { name: "Brass 700", value: "#b45309", usage: "premium report / highlighted note" },
        ],
      },
    ],
    components: [
      {
        name: "Forest Project Card",
        purpose: "在列表中快速呈現林地專案的比較資訊與信任訊號。",
        anatomy: ["Project title", "Location", "Area", "Impact metrics", "Certification badge", "CTA"],
        states: ["Default", "Hovered", "Saved", "Unavailable", "High match"],
        usageGuidelines: [
          "卡片首屏只顯示決策必要資訊，詳細風險與文件放在詳情頁。",
          "認證狀態需使用文字與顏色雙重提示，避免只依賴色彩。",
        ],
      },
      {
        name: "ESG Filter Panel",
        purpose: "讓企業以地區、林地類型、合作模式、認證狀態與 impact 指標縮小搜尋範圍。",
        anatomy: ["Filter group", "Checkbox", "Range input", "Selected chips", "Reset action"],
        states: ["Collapsed", "Expanded", "Selected", "Empty results"],
        usageGuidelines: [
          "高影響篩選條件放在上方，進階條件可收合。",
          "已選條件以 chips 回饋，支援快速移除。",
        ],
      },
      {
        name: "Impact Metric Tile",
        purpose: "呈現碳匯潛力、保育面積、生物多樣性與社會共益等 ESG 指標。",
        anatomy: ["Metric label", "Value", "Unit", "Confidence note", "Source"],
        states: ["Verified", "Estimated", "Pending review"],
        usageGuidelines: [
          "估算值必須標示資料來源與信心水準。",
          "單位需固定格式，降低企業比較時的認知成本。",
        ],
      },
      {
        name: "Matching Inquiry Form",
        purpose: "收集企業媒合需求，並讓供給方理解合作條件。",
        anatomy: ["Company profile", "ESG goal", "Budget range", "Timeline", "Message", "Submit CTA"],
        states: ["Draft", "Validation error", "Submitted", "Follow-up required"],
        usageGuidelines: [
          "送出前顯示摘要，避免企業提交不完整需求。",
          "成功狀態需明確告知後續聯繫窗口與預估回覆時間。",
        ],
      },
    ],
    screens: [
      {
        name: "Marketplace Search",
        purpose: "讓企業從 ESG 目標與林地條件開始探索。",
        userGoal: "快速縮小候選林地，找到值得深入評估的專案。",
        keyElements: ["Search bar", "Filter panel", "Forest project cards", "Compare shortcut"],
      },
      {
        name: "Forest Detail",
        purpose: "提供單一林地完整資訊與信任依據。",
        userGoal: "判斷專案是否符合企業合作與報告需求。",
        keyElements: ["Impact summary", "Land profile", "Certification section", "Inquiry CTA"],
      },
      {
        name: "Company Workspace",
        purpose: "追蹤詢問狀態、文件與 ESG impact。",
        userGoal: "管理多個媒合案並回到可行的下一步。",
        keyElements: ["Inquiry status", "Saved projects", "Document checklist", "Impact reports"],
      },
    ],
    reflection: [
      "ESG 產品的介面不只要好看，更重要的是建立信任。設計上必須把資料來源、估算狀態、認證進度與風險揭露放在使用者做決策的位置。",
      "雙邊 marketplace 容易只偏向需求方搜尋效率，但供給方資料結構也會直接影響媒合品質。這次 IA 的關鍵是讓林地資料能被一致比較，同時保留各專案的特殊價值。",
      "下一步會優先補上媒合後的 collaboration flow，包括文件交換、補件提醒、合約前評估與年度 impact report 產出。",
    ],
  },
  {
    slug: "flowdesk-analytics",
    title: "FlowDesk Analytics",
    eyebrow: "B2B SaaS Dashboard",
    role: "Lead Product Designer",
    year: "2025",
    duration: "10 weeks",
    summary:
      "重新設計營運團隊每日使用的分析工作台，讓資料監控、異常追蹤與跨團隊協作集中在同一個決策介面。",
    challenge:
      "原產品資訊密度高但缺乏優先級，使用者需要在多個報表之間切換才能判斷問題來源，導致處理事件的時間過長。",
    outcome:
      "建立分層 dashboard、事件 triage flow 與 reusable insight cards，讓使用者可以先判斷狀態，再深入查看細節。",
    metrics: [
      { label: "Task time", value: "-38%" },
      { label: "Alert clarity", value: "+46%" },
      { label: "Design tokens", value: "72" },
    ],
    tags: ["Dashboard UX", "Design System", "Data Visualization"],
    tools: ["Figma", "FigJam", "Maze", "Amplitude"],
    process: [
      "訪談 8 位營運與客服角色，重建日常判斷模型與痛點優先級。",
      "把 14 種報表整理成 4 個決策層級，建立 dashboard information hierarchy。",
      "用 high-fidelity prototype 測試異常判讀流程，並將回饋轉成元件與狀態規格。",
    ],
    deliverables: [
      "Dashboard IA",
      "Triage prototype",
      "Insight card system",
      "Handoff documentation",
    ],
    theme: {
      primary: "#2563eb",
      secondary: "#0f766e",
      accent: "#b45309",
    },
  },
  {
    slug: "paywave-checkout",
    title: "PayWave Checkout",
    eyebrow: "Mobile Fintech Experience",
    role: "Product Designer",
    year: "2024",
    duration: "8 weeks",
    summary:
      "優化行動支付結帳流程，降低首次使用者在驗證、付款確認與錯誤修正時的中斷率。",
    challenge:
      "原流程把風險提示、付款明細與驗證步驟混在一起，造成使用者在高壓付款情境下無法快速確認下一步。",
    outcome:
      "拆分關鍵決策點，重寫微文案與錯誤狀態，並建立可擴充的 checkout interaction pattern。",
    metrics: [
      { label: "Drop-off", value: "-24%" },
      { label: "First success", value: "+31%" },
      { label: "Prototype tests", value: "5 rounds" },
    ],
    tags: ["Mobile UX", "Fintech", "Conversion"],
    tools: ["Figma", "ProtoPie", "Hotjar", "Notion"],
    process: [
      "分析 funnel data 與客服 ticket，定位三個最常見的中斷點。",
      "設計低壓確認頁、驗證 stepper 與錯誤修正模式，降低使用者認知負荷。",
      "與 PM、法遵、工程共同 review 交易風險訊息與 edge cases。",
    ],
    deliverables: [
      "Checkout flow",
      "Mobile prototype",
      "Error-state matrix",
      "UX writing guide",
    ],
    theme: {
      primary: "#be123c",
      secondary: "#2563eb",
      accent: "#b45309",
    },
  },
  {
    slug: "clinic-os",
    title: "ClinicOS Scheduler",
    eyebrow: "Healthcare Operations",
    role: "UX Designer",
    year: "2024",
    duration: "12 weeks",
    summary:
      "為診所櫃台與護理師打造排程與病患狀態管理介面，支援高頻、快速、不可出錯的現場工作節奏。",
    challenge:
      "使用者同時處理掛號、候診、檢查、醫師叫號與臨時插單，舊系統缺乏清楚狀態與即時協作提示。",
    outcome:
      "設計 timeline-based scheduler、狀態色階與角色權限訊息，讓現場團隊可以快速辨識下一個行動。",
    metrics: [
      { label: "Scheduling errors", value: "-29%" },
      { label: "Queue visibility", value: "+52%" },
      { label: "Core screens", value: "18" },
    ],
    tags: ["Service Design", "Workflow UX", "Accessibility"],
    tools: ["Figma", "Miro", "UserTesting", "Zeplin"],
    process: [
      "到現場觀察 2 天，整理前台與護理站在尖峰時段的資訊流。",
      "建立 service blueprint，確認人員交接點、系統提示與例外處理。",
      "把狀態、提醒與權限整理成可維護的 UI rules，交付工程實作。",
    ],
    deliverables: [
      "Service blueprint",
      "Scheduler UI",
      "State system",
      "Accessibility checklist",
    ],
    theme: {
      primary: "#047857",
      secondary: "#0891b2",
      accent: "#be123c",
    },
  },
];

export const experiences = [
  {
    period: "2024 - Present",
    title: "Product Designer",
    company: "Independent / Contract",
    description:
      "與早期產品團隊合作，負責研究、產品策略、設計系統與高保真原型，聚焦 SaaS 與 workflow-heavy tools。",
  },
  {
    period: "2022 - 2024",
    title: "UI/UX Designer",
    company: "Digital Product Studio",
    description:
      "參與金融、醫療與企業內部工具設計，建立從 discovery 到 design QA 的跨職能合作流程。",
  },
  {
    period: "2020 - 2022",
    title: "Visual Designer",
    company: "Brand & Web Agency",
    description:
      "累積品牌識別、網站介面與視覺系統經驗，將品牌語言轉化為可延展的數位產品介面。",
  },
];

export const skills = [
  "UX Research",
  "Interaction Design",
  "Design Systems",
  "Information Architecture",
  "Prototype Testing",
  "Accessibility",
  "Product Strategy",
  "Design QA",
];
