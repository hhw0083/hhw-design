import type { CaseStudySection, Project } from "../types";
import { projectImageAssets } from "./assets";

const tcbCaseStudySections: CaseStudySection[] = [
  {
    number: "01",
    title: "Project Overview",
    subtitle: "專案概覽",
    type: "overview",
    description:
      "本專案針對既有虛擬機管理平台進行介面與功能體驗優化，重點包含 Dashboard 設計、公告功能整合、Light / Dark Theme 雙主題、Design System 建立，以及虛擬機部署流程優化。",
    contentBlocks: [
      {
        type: "facts",
        items: [
          { label: "Project", value: "TCB 虛擬機管理平台" },
          { label: "Role", value: "UI/UX Designer" },
          { label: "Platform", value: "Enterprise Admin Platform" },
          { label: "Focus", value: "Dashboard · Theme · Workflow" },
        ],
      },
      {
        type: "cards",
        columns: 3,
        items: [
          {
            title: "Dashboard 與資訊層級",
            description:
              "重新整理平台首頁的資訊優先順序，讓資源、公告與虛擬機狀態更容易被快速判讀。",
            icon: "gauge",
          },
          {
            title: "雙主題與品牌融合",
            description:
              "延伸合作金庫品牌識別，建立兼顧金融穩定感與科技產品感的 Light / Dark Theme。",
            icon: "moon",
          },
          {
            title: "流程與系統一致性",
            description:
              "優化部署設定步驟，並統一表格、表單、狀態與操作元件，降低模組間的視覺落差。",
            icon: "workflow",
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
      "在既有功能與工程架構限制下，重新建立資訊層級、視覺一致性與長時間管理情境下的操作舒適度。",
    contentBlocks: [
      {
        type: "cards",
        columns: 2,
        items: [
          {
            eyebrow: "Challenge 01",
            title: "資訊層級不夠清楚",
            description:
              "Dashboard 資訊需要重新整理，協助使用者快速掌握系統狀態。",
            icon: "layers",
          },
          {
            eyebrow: "Challenge 02",
            title: "既有介面偏工程導向",
            description:
              "功能完整但視覺與操作層級較分散，需要提升產品感與一致性。",
            icon: "monitor",
          },
          {
            eyebrow: "Challenge 03",
            title: "長時間使用可讀性",
            description:
              "平台屬於管理工具，需要支援亮色與暗色主題，降低長時間操作負擔。",
            icon: "moon",
          },
          {
            eyebrow: "Challenge 04",
            title: "部署流程理解成本高",
            description:
              "虛擬機部署涉及多項設定，需要重新整理步驟與欄位關係。",
            icon: "workflow",
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
      "從管理者日常查看狀態與執行任務的情境出發，建立清楚、穩定且能長時間使用的產品體驗。",
    contentBlocks: [
      {
        type: "design-goals",
        previewImage: "/projects/tcb/goals-01.webp",
        previewVisual: "tcb-dashboard-light",
        goals: [
          {
            title: "清楚掌握狀態",
            description:
              "讓使用者進入平台後，能快速理解資源、公告與虛擬機狀態。",
            icon: "navigation",
          },
          {
            title: "建立品牌一致性",
            description:
              "融合合作金庫既有視覺，建立穩定且現代的後台產品體驗。",
            icon: "layers",
          },
          {
            title: "降低操作成本",
            description:
              "重新整理部署流程與元件狀態，讓操作路徑更清楚。",
            icon: "check",
          },
        ],
      },
    ],
  },
  {
    number: "04",
    title: "Sitemap",
    subtitle: "平台架構",
    type: "information-architecture",
    description:
      "將虛擬機管理平台整理為七個平行主模組，協助團隊清楚理解功能邊界與系統導覽層級。",
    contentBlocks: [
      {
        type: "sitemap-tree",
        root: "虛擬機管理",
        items: [
          "Dashboard",
          "電子表單管理",
          "雲服務管理",
          "權限管理",
          "系統管理",
          "報表管理",
          "使用者功能",
        ],
      },
    ],
  },
  {
    number: "05",
    title: "Dashboard Design",
    subtitle: "Dashboard 設計",
    type: "dashboard-design",
    description:
      "Dashboard 被重新設計為平台的資訊總覽入口，整合虛擬機狀態、系統公告與關鍵資源資訊，讓使用者在進入平台後能快速掌握目前系統狀況。",
    contentBlocks: [
      {
        type: "visual-showcase",
        layout: "hero-grid",
        items: [
          {
            title: "Light Theme Dashboard",
            description:
              "以明亮表面與清楚的資訊分區呈現資源用量、虛擬機狀態與常用操作。",
            image: "/projects/tcb/dashboard-01.webp",
            visual: "tcb-dashboard-light",
          },
          {
            title: "Dark Theme Dashboard",
            description:
              "透過深藍黑背景、低透明卡片與細邊框，維持長時間監控情境的閱讀舒適度。",
            image: "/projects/tcb/dashboard-02.webp",
            visual: "tcb-dashboard-dark",
          },
          {
            title: "優化登入頁面並整合公告",
            description:
              "優化登入視覺，並將公告整合進登入卡片，提升重要訊息的辨識效率。",
            image: "/projects/tcb/dashboard-03.webp",
            visual: "tcb-announcement",
          },
        ],
      },
    ],
  },
  {
    number: "06",
    title: "Key Improvements",
    subtitle: "關鍵優化",
    type: "key-improvements",
    description:
      "優化範圍聚焦日常管理中最常被使用的資訊入口、部署任務與跨模組元件，讓既有功能更容易理解與操作。",
    contentBlocks: [
      {
        type: "cards",
        columns: 2,
        items: [
          // {
          //   eyebrow: "01",
          //   title: "Dashboard 資訊重整",
          //   description:
          //     "重新整理首頁資訊優先順序，讓資源狀態、公告與虛擬機狀態更容易被判讀。",
          //   icon: "gauge",
          // },
          // {
          //   eyebrow: "02",
          //   title: "公告功能整合",
          //   description:
          //     "將公告整合進平台介面，讓重要訊息能在管理情境中被快速查看。",
          //   icon: "bell",
          // },
          {
            eyebrow: "01",
            title: "虛擬機部署流程優化",
            description:
              "重新整理部署設定欄位與步驟，引導使用者更清楚完成建立流程。",
            icon: "workflow",
          },
          {
            eyebrow: "02",
            title: "狀態與操作元件統一",
            description:
              "統一表格、狀態標籤、按鈕與表單樣式，降低不同模組之間的視覺落差。",
            icon: "server",
          },
        ],
      },
      {
        type: "visual-showcase",
        layout: "hero-grid",
        items: [
          {
            title: "虛擬機部署流程",
            description:
              "以 stepper、設定群組與即時摘要協助使用者理解建立進度。",
            image: "/projects/tcb/improvements-01.webp",
            visual: "tcb-deploy-flow",
          },
          // {
          //   title: "公告功能",
          //   description:
          //     "依訊息重要性與閱讀狀態建立更清楚的公告層級。",
          //   image: "/projects/tcb/improvements-02.webp",
          //   visual: "tcb-announcement",
          // },
          // {
          //   title: "虛擬機列表",
          //   description:
          //     "統一狀態、資源資訊與操作入口，提升大量資料的掃讀效率。",
          //   image: "/projects/tcb/improvements-03.webp",
          //   visual: "tcb-vm-list",
          // },
        ],
      },
    ],
  },
  // {
  //   number: "06",
  //   title: "Theme & Design System",
  //   subtitle: "雙主題與設計系統",
  //   type: "theme-system",
  //   description:
  //     "Dark Theme 不只是將介面反白，而是重新處理背景層級、卡片透明度、文字對比與狀態色，確保在長時間使用下仍維持可讀性。",
  //   contentBlocks: [
  //     {
  //       type: "visual-showcase",
  //       layout: "two-column",
  //       items: [
  //         {
  //           title: "Light / Dark Theme",
  //           description:
  //             "以相同資訊架構對照兩種主題的背景層級、卡片透明度與文字對比。",
  //           image: "/projects/tcb/theme-01.webp",
  //           visual: "tcb-theme-system",
  //         },
  //         {
  //           title: "Design System",
  //           description:
  //             "整理合作金庫品牌色延伸、字級、間距、狀態色與互動元件狀態。",
  //           image: "/projects/tcb/theme-02.webp",
  //           visual: "tcb-design-system",
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    number: "07",
    title: "UI Components",
    subtitle: "介面元件",
    type: "ui-components",
    description:
      "元件庫涵蓋 Button、Input、Select、Table、Status Badge、Dashboard Card、Announcement Card、Modal、Stepper、Theme Switch 與 VM Status。",
    contentBlocks: [
      {
        type: "visual-showcase",
        layout: "single",
        items: [
          {
            title: "TCB Core Components",
            description:
              "以一致的狀態、間距與互動規則，支援 Dashboard、虛擬機管理與部署任務。",
            image: "/projects/tcb/components-01.webp",
            visual: "tcb-ui-components",
          },
        ],
      },
    ],
  },
  {
    number: "08",
    title: "Final Design & Reflection",
    subtitle: "最終介面與反思",
    type: "reflection",
    description:
      "這次專案讓我更明確理解到，後台系統的優化不只是視覺翻新，而是需要在既有功能限制下，重新建立資訊層級、操作節奏與設計規範。尤其在亮暗主題與金融品牌視覺的整合上，需要同時兼顧品牌識別、可讀性與系統延展性。",
    contentBlocks: [
      {
        type: "gallery",
        items: [
          {
            title: "Final Dashboard / Light",
            description:
              "明亮模式強調資訊掃讀、狀態辨識與日常管理效率。",
            image: "/projects/tcb/final-01.webp",
            visual: "tcb-final-light",
          },

          {
            title: "Dashboard Overview / Light",
            description:
              "整合系統資源、公告與虛擬機狀態的亮色資訊總覽。",
            image: "/projects/tcb/final-02.webp",
            visual: "tcb-dashboard-light",
          },
          {
            title: "Final Dashboard / Dark",
            description:
              "暗色模式以玻璃霧化層級與低刺激對比支援長時間使用。",
            image: "/projects/tcb/final-03.webp",
            visual: "tcb-final-dark",
          },
          {
            title: "Dashboard Overview / Dark",
            description:
              "維持相同資訊架構，在暗色環境中重新校準表面與狀態對比。",
            image: "/projects/tcb/final-04.webp",
            visual: "tcb-dashboard-dark",
          },


        ],
      },
    ],
  },
];

export const tcbProject: Project = {
    slug: "tcb",
    ...projectImageAssets.tcb,
    visualFallback: "tcb-hero",
    caseStudySections: tcbCaseStudySections,
    title: "TCB 虛擬機管理平台",
    subtitle: "Virtual Machine Management Platform",
    eyebrow: "虛擬機管理平台的功能與視覺優化",
    description:
      "針對既有虛擬機管理平台重新整理 Dashboard、公告與部署流程，並導入 Light / Dark Theme，提升長時間管理情境的可讀性與操作效率。",
    role: "UI/UX Design / Design System",
    scope: "Dashboard / 虛擬機部署 / 公告 / 雙主題",
    timeline: "3 月",
    year: "2026",
    duration: "3 months",
    summary:
      "本專案針對既有的虛擬機管理平台進行功能與視覺優化，重新梳理 Dashboard 資訊呈現、公告功能、虛擬機部署流程與系統介面一致性，並導入 Light / Dark Theme 亮色／暗色主題切換，提升長時間管理情境下的可讀性與操作體驗。",
    challenge:
      "既有平台功能完整，但資訊層級與元件狀態較分散。使用者需要在高資訊密度與長時間操作情境中快速掌握系統狀態，也需要更清楚地完成虛擬機部署設定。",
    outcome:
      "延續合作金庫品牌識別，融合金融產業的穩定感與科技後台產品的現代感，透過雙主題、玻璃霧化表面與一致的元件規範，建立更具產品感與辨識度的管理系統。",
    metrics: [
      { label: "Themes", value: "2" },
      { label: "Core areas", value: "4" },
      { label: "Sections", value: "8" },
    ],
    tags: [
      "UI/UX Design",
      "Dashboard Design",
      "Light / Dark Theme",
      "Design System",
      "Enterprise Platform",
      "Workflow Optimization",
    ],
    tools: ["Figma", "Design System", "Prototype", "UI Specification"],
    process: [
      "優化虛擬機管理平台整體視覺與介面層級，重新安排 Dashboard 的關鍵資訊。",
      "融合合作金庫品牌視覺，建立 Light / Dark Theme 與可延伸的元件規範。",
      "整合公告功能並優化虛擬機部署流程，降低設定與操作理解成本。",
    ],
    deliverables: [
      "Dashboard",
      "Design System",
      "Light / Dark Theme",
      "Deployment Flow",
    ],
    theme: {
      primary: "#0f7b68",
      secondary: "#0b5f55",
      accent: "#2cc7ad",
    },
    reflection: [
      "後台系統的優化不只是視覺翻新，而是需要在既有功能限制下重新建立資訊層級、操作節奏與設計規範。",
      "亮暗主題需要分別處理表面層級、文字對比、玻璃透明度與狀態色，而不是單純反轉顏色。",
      "金融品牌識別與科技產品感可以透過穩定的主色、清楚的狀態設計與克制的玻璃霧化效果取得平衡。",
    ],
  };
