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

export type CaseStudySectionType =
  | "overview"
  | "challenge"
  | "goals"
  | "key-screens"
  | "information-architecture"
  | "user-flow"
  | "design-system"
  | "ui-components"
  | "final-design"
  | "reflection";

export type CaseStudyVisualKind =
  | "home"
  | "login"
  | "list"
  | "map"
  | "news"
  | "certificate";

export type CaseStudyCardIcon =
  | "palette"
  | "layers"
  | "code"
  | "accessibility"
  | "map-pinned"
  | "refresh"
  | "sparkles";

export type CaseStudyCard = {
  title: string;
  description: string;
  eyebrow?: string;
  icon?: CaseStudyCardIcon;
};

export type DesignGoalIcon = "navigation" | "layers" | "check";

export type DesignGoal = {
  title: string;
  description: string;
  icon: DesignGoalIcon;
};

export type CaseStudyGalleryItem = {
  title: string;
  description: string;
  eyebrow?: string;
  image?: string;
  visual?: CaseStudyVisualKind;
};

export type CaseStudyContentBlock =
  | {
      type: "facts";
      items: { label: string; value: string }[];
    }
  | {
      type: "cards";
      columns?: 2 | 3 | 5;
      items: CaseStudyCard[];
    }
  | {
      type: "comparison";
      sourceTitle: string;
      targetTitle: string;
      items: { source: string; target: string }[];
    }
  | {
      type: "design-goals";
      goals: DesignGoal[];
      previewImage?: string;
    }
  | {
      type: "feature-gallery";
      items: CaseStudyGalleryItem[];
    }
  | {
      type: "architecture";
      groups: { title: string; items: string[] }[];
      showInteractiveSitemap?: boolean;
    }
  | {
      type: "flow";
      items: string[];
    }
  | {
      type: "design-system";
    }
  | {
      type: "ui-components";
    }
  | {
      type: "gallery";
      items: CaseStudyGalleryItem[];
    }
  | {
      type: "tags";
      items: string[];
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
    };

export type CaseStudySection = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  type: CaseStudySectionType;
  contentBlocks: CaseStudyContentBlock[];
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
  caseStudySections: CaseStudySection[];
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
} satisfies Record<string, ProjectImageAssets>;

const esgCaseStudySections: CaseStudySection[] = [
  {
    number: "01",
    title: "Project Overview",
    subtitle: "專案概覽",
    type: "overview",
    description:
      "ESG 林地媒合平台整合政策資訊、林地標的、媒合流程、地圖查詢、成果展示與憑證查詢，讓企業在資訊量較大的情況下，仍能快速理解平台功能並找到合適的合作機會。",
    contentBlocks: [
      {
        type: "facts",
        items: [
          { label: "Role", value: "UI/UX Designer" },
          { label: "Year", value: "2026" },
          { label: "Duration", value: "6 weeks" },
          { label: "Tools", value: "Figma · FigJam · Design Tokens" },
        ],
      },
      {
        type: "cards",
        columns: 3,
        items: [
          {
            title: "平台定位",
            description:
              "協助企業探索森林與自然碳匯相關 ESG 專案，建立企業與專案標的之間的媒合入口。",
          },
          {
            title: "使用情境",
            description:
              "企業可透過條件篩選、列表查詢與地圖查詢，理解不同專案的位置、類型與合作資訊。",
          },
          {
            title: "設計目標",
            description:
              "建立清楚、可信任且易於維護的介面系統，支援前台展示、管理頁面與後續功能擴充。",
          },
        ],
      },
      {
        type: "cards",
        columns: 5,
        items: [
          {
            title: "UI Design",
            description: "負責平台主要頁面視覺設計、資訊層級整理與介面規劃。",
            icon: "palette",
          },
          {
            title: "Design System",
            description:
              "整理色彩、字級、間距、按鈕、表單、卡片與表格等基礎元件。",
            icon: "layers",
          },
          {
            title: "Front-end Layout",
            description:
              "參與部分前台頁面切版，協助將 Figma 設計稿轉換為 HTML / CSS 結構。",
            icon: "code",
          },
          {
            title: "Accessibility AA",
            description:
              "配合無障礙規範調整文字對比、表單狀態、按鈕回饋與操作提示。",
            icon: "accessibility",
          },
          {
            title: "CI Refresh",
            description:
              "因應專案中途品牌 CI 更新，協助調整既有頁面與元件視覺。",
            icon: "refresh",
          },
        ],
      },
    ],
  },
  {
    number: "02",
    title: "The Challenge",
    subtitle: "設計挑戰",
    type: "challenge",
    description:
      "平台需要同時處理高資訊密度、政府服務可及性、品牌更新與地理圖資等限制，設計重點是把複雜條件轉化為可理解、可操作的介面。",
    contentBlocks: [
      {
        type: "cards",
        columns: 2,
        items: [
          {
            eyebrow: "Challenge 01",
            title: "資訊量大，需快速理解",
            description:
              "平台包含多角色、多頁面與多種資料類型，包含專案資訊、查詢條件、地圖資料、ESG 成果與憑證資訊，因此需要建立清楚的資訊層級與瀏覽節奏。",
            icon: "layers",
          },
          {
            eyebrow: "Challenge 02",
            title: "符合無障礙 AA 規範",
            description:
              "介面設計需兼顧文字可讀性、色彩對比、表單提示、按鈕狀態與操作回饋，讓使用者在不同情境下都能清楚辨識資訊。",
            icon: "accessibility",
          },
          {
            eyebrow: "Challenge 03",
            title: "專案中途遇到 CI 更新",
            description:
              "專案進行期間品牌視覺進行更新，既有頁面、色彩、元件與視覺資產需要同步調整，也考驗設計系統的延展性與維護效率。",
            icon: "palette",
          },
          {
            eyebrow: "Challenge 04",
            title: "整合地理圖資查詢",
            description:
              "平台同時支援列表查詢與地圖查詢，因此設計上需要讓搜尋條件、專案資訊與地理位置能夠清楚連動。",
            icon: "map-pinned",
          },
        ],
      },
    ],
  },
  {
    number: "03",
    title: "Design Goals",
    subtitle: "設計目標",
    type: "goals",
    description:
      "從企業查找專案的決策路徑出發，建立可掃讀、可比較且能延伸到管理情境的產品體驗。",
    contentBlocks: [
      {
        type: "design-goals",
        previewImage: "/projects/esg/hero.webp",
        goals: [
          {
            title: "清晰瀏覽",
            description:
              "讓使用者能快速理解 ESG 專案內容與合作方式。",
            icon: "navigation",
          },
          {
            title: "理解專案",
            description:
              "降低資訊門檻並建立可信的專案資訊架構。",
            icon: "layers",
          },
          {
            title: "促進行動",
            description:
              "讓使用者能快速比較、收藏與媒合申請。",
            icon: "check",
          },
        ],
      },
    ],
  },
  {
    number: "04",
    title: "Key Screens",
    subtitle: "核心畫面",
    type: "key-screens",
    description:
      "以搜尋、地圖、成果與憑證四個高價值情境，建立企業從探索到驗證的主要操作路徑。",
    contentBlocks: [
      {
        type: "feature-gallery",
        items: [
          {
            eyebrow: "Feature 01",
            title: "物件查詢",
            description:
              "使用者可透過地區、類型、關鍵字與排序條件查詢 ESG 專案標的，快速找到合適的合作機會。",
            visual: "list",
          },
          {
            eyebrow: "Feature 02",
            title: "地圖查詢",
            description:
              "地圖模式協助使用者從空間位置理解專案分布與區域條件，補足列表查詢無法呈現的地理脈絡。",
            visual: "map",
          },
          {
            eyebrow: "Feature 03",
            title: "ESG 成果展示",
            description:
              "透過數據摘要、精選物件、最新消息與相關連結，提升平台的專業感與永續成果展示性。",
            visual: "home",
          },
          {
            eyebrow: "Feature 04",
            title: "ESG 憑證查詢",
            description:
              "提供企業查詢憑證編號、發放日期、有效期限、狀態與相關詳細資料的入口。",
            visual: "certificate",
          },
        ],
      },
    ],
  },
  {
    number: "05",
    title: "Information Architecture",
    subtitle: "資訊架構",
    type: "information-architecture",
    description:
      "先以公開內容、媒合功能與會員管理三個層級整理平台，再透過互動式 Sitemap 呈現九大主模組與平台 Root 的包含關係。",
    contentBlocks: [
      {
        type: "architecture",
        showInteractiveSitemap: true,
        groups: [
          {
            title: "Public Pages / 公開資訊",
            items: [
              "政策說明",
              "專案方法介紹",
              "媒合流程介紹",
              "企業 ESG 成果展示",
              "Q&A",
            ],
          },
          {
            title: "Matching Features / 媒合功能",
            items: [
              "物件查詢",
              "地圖查詢",
              "物件詳情",
              "媒合申請",
              "收藏物件",
            ],
          },
          {
            title: "Member / Management / 會員與管理",
            items: [
              "個人最新消息",
              "ESG 憑證查詢",
              "系統管理",
              "使用者中心",
            ],
          },
        ],
      },
    ],
  },
  {
    number: "06",
    title: "User Flow",
    subtitle: "使用流程",
    type: "user-flow",
    description:
      "流程聚焦企業使用者如何從進入平台、探索標的、提出媒合，到最後查看成果與憑證。",
    contentBlocks: [
      {
        type: "flow",
        items: [
          "企業進入平台",
          "選擇查詢方式",
          "使用條件篩選或地圖查詢",
          "查看專案資訊",
          "收藏或申請媒合",
          "查看 ESG 成果",
          "查詢 ESG 憑證",
        ],
      },
    ],
  },
  {
    number: "07",
    title: "Design System",
    subtitle: "設計系統",
    type: "design-system",
    description:
      "透過統一的品牌色彩與字級層級，讓平台在大量資訊呈現下仍維持清楚的閱讀節奏與一致的視覺語言。",
    contentBlocks: [{ type: "design-system" }],
  },
  {
    number: "08",
    title: "UI Components",
    subtitle: "介面元件",
    type: "ui-components",
    description: "",
    contentBlocks: [{ type: "ui-components" }],
  },
  {
    number: "09",
    title: "Final Design",
    subtitle: "最終介面",
    type: "final-design",
    description:
      "最終介面涵蓋企業從公開資訊、身分登入、物件探索到會員通知與憑證查詢的完整體驗。",
    contentBlocks: [
      {
        type: "gallery",
        items: [
          {
            title: "首頁 / ESG 成果展示",
            description:
              "整合 ESG 專案摘要、精選內容與成果入口，讓企業快速理解平台價值。",
            visual: "home",
          },
          {
            title: "登入身分選擇",
            description:
              "依照企業、管理者與一般使用者角色，建立清楚的進入路徑。",
            visual: "login",
          },
          {
            title: "物件列表查詢",
            description:
              "透過列表卡片、篩選條件與排序，協助使用者比較不同 ESG 專案。",
            visual: "list",
          },
          {
            title: "物件地圖查詢",
            description:
              "以地理位置補足專案查詢脈絡，讓使用者理解區域與專案分布。",
            visual: "map",
          },
          {
            title: "個人最新消息",
            description:
              "集中呈現申請進度、平台通知與後續行動，降低使用者追蹤成本。",
            visual: "news",
          },
          {
            title: "ESG 憑證查詢",
            description:
              "提供憑證編號、狀態與有效期限查詢，提升專案成果的可信度。",
            visual: "certificate",
          },
        ],
      },
    ],
  },
  {
    number: "10",
    title: "Reflection",
    subtitle: "成果與反思",
    type: "reflection",
    description:
      "透過此專案，我學習到如何將資訊量較大的平台整理為清楚的使用流程與可重複使用的元件系統。Design System 的整理也讓品牌更新、前台切版與後續頁面延伸更有效率，降低設計與實作之間的落差。",
    contentBlocks: [
      {
        type: "cards",
        columns: 3,
        items: [
          {
            title: "提升介面一致性",
            description:
              "透過統一色彩、字級、元件與狀態規範，讓不同頁面保持一致的操作體驗。",
            icon: "sparkles",
          },
          {
            title: "支援後續擴充",
            description:
              "將高頻使用介面整理為可重複使用元件，方便後續頁面與功能延伸。",
            icon: "sparkles",
          },
          {
            title: "縮短設計與開發落差",
            description:
              "透過參與部分前台切版，更能在設計階段考量實作可行性與維護性。",
            icon: "sparkles",
          },
        ],
      },
    ],
  },
];

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
    caseStudySections: esgCaseStudySections,
    title: "ESG 林地媒合平台",
    eyebrow: "企業參與森林及自然碳匯 ESG 專案媒合平台",
    role:
      "UI/UX Designer，負責產品資訊架構、媒合流程、設計系統規格與高保真介面設計。",
    year: "2026",
    duration: "6 weeks",
    summary:
      "本專案協助企業查詢森林與自然碳匯相關 ESG 專案，透過列表、地圖、媒合流程與憑證查詢，降低企業理解與參與 ESG 專案的門檻。",
    challenge:
      "ESG 林地合作牽涉企業永續目標、地主資料、林地條件、專案認證、風險揭露與後續追蹤。若資訊架構不清楚，企業難以判斷可信度，供給方也難以有效呈現專案價值。",
    outcome:
      "建立以需求篩選、林地卡片、專案詳情、媒合詢問與 ESG impact tracking 為核心的服務流程，並整理出可擴充的設計 tokens、色彩系統與元件庫。",
    metrics: [
      { label: "Core flows", value: "5" },
      { label: "IA groups", value: "7" },
      { label: "Components", value: "12" },
    ],
    tags: [
      "UI Design",
      "Design System",
      "Front-end Layout Support",
      "Accessibility AA",
      "ESG Platform",
    ],
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
];

export type Experience = {
  period: string;
  title: string;
  company: string;
  summary: string;
};

export type PortfolioAward = {
  year: string;
  title: string;
  subtitle: string;
  image?: string;
};

export const experiences: Experience[] = [
  {
    period: "2024 – Present",
    title: "Senior UI/UX Designer",
    company: "AscendisTech Pte. Ltd. Taiwan Branch",
    summary:
      "與產品、行銷與前端團隊協作，推動平台型專案的使用流程、設計系統與介面優化落地。",
  },
  {
    period: "2019 – 2023",
    title: "UI/UX Designer",
    company: "Motivation Software Co., Ltd.",
    summary:
      "負責平台介面流程、wireframe 與 prototype 設計，並串接前端協作與多元專案需求落地。",
  },
  {
    period: "2015 – 2018",
    title: "Junior UI Designer",
    company: "IDT, Interactive Digital Technologies Inc.",
    summary:
      "參與地理圖資與政府專案介面設計，支援切版、視覺優化與產品維護執行。",
  },
];

export const skills = [
  "Interaction Design",
  "Design Systems",
  "Information Architecture",
  "Prototype Testing",
];

export const awards: PortfolioAward[] = [
  {
    year: "2014",
    title: "Red Dot Award 2014 Winner",
    subtitle: "Communication Design",
    image: "/awards/red-dot-award.svg"
  },
];
