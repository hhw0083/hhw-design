export type ProjectMetric = {
  label: string;
  value: string;
};

export type Project = {
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
};

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
      primary: "#67e8f9",
      secondary: "#6ee7b7",
      accent: "#f5c86a",
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
      primary: "#fb7185",
      secondary: "#67e8f9",
      accent: "#f5c86a",
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
      primary: "#6ee7b7",
      secondary: "#67e8f9",
      accent: "#fb7185",
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
