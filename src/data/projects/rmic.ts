import type { CaseStudySection, Project } from "../types";
import { projectImageAssets } from "./assets";

const rmicCaseStudySections: CaseStudySection[] = [
  {
    number: "01",
    title: "Project Overview",
    subtitle: "專案概覽",
    type: "overview",
    description:
      "RMIC 桃園市道管資訊中心系統用於道路挖掘、施工案件與相關申請流程管理，平台整合案件進度、表單資料與地圖圖資，支援跨部門在審核、追蹤與道路管理上的協作需求。本次專案是在既有平台架構下進行功能擴充，透過 Wireframe 與 Prototype 協助需求單位與開發團隊確認新增功能的操作邏輯。",
    contentBlocks: [
      {
        type: "facts",
        items: [
          { label: "Project", value: "RMIC 桃園市道管資訊中心系統" },
          { label: "Role", value: "UI/UX Designer" },
          { label: "Platform", value: "Government · Map-based System" },
          { label: "Focus", value: "Wireframe · Prototype · Feature Extension" },
        ],
      },
      {
        type: "cards",
        columns: 3,
        items: [
          {
            title: "市政案件管理",
            description:
              "整合道路挖掘、施工申請、案件狀態與跨單位待辦，支援日常審核與追蹤。",
            icon: "layers",
          },
          {
            title: "地圖圖資整合",
            description:
              "讓案件位置、道路圖層與申請資料在同一管理情境中被查詢與比對。",
            icon: "map-pinned",
          },
          {
            title: "既有功能擴充",
            description:
              "以既有流程與元件為基礎新增功能，避免破壞原有操作習慣與開發架構。",
            icon: "workflow",
          },
        ],
      },
      {
        type: "visual-showcase",
        layout: "two-column",
        items: [
          {
            title: "平台總覽",
            description:
              "以案件數據、地圖、流程狀態與待辦任務呈現道路管理工作的全貌。",
            image: "/projects/rmic/platform-overview.webp",
            visual: "rmic-platform-overview",
          },
          {
            title: "地圖圖資系統",
            description:
              "結合道路圖層、案件標記與篩選工具，協助承辦人掌握施工位置與案件關係。",
            image: "/projects/rmic/map-system.webp",
            visual: "rmic-map-system",
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
      "功能擴充需要同時回應既有系統限制、跨部門需求、地圖與案件資料關係，以及平台元件一致性。",
    contentBlocks: [
      {
        type: "cards",
        columns: 2,
        items: [
          {
            eyebrow: "Challenge 01",
            title: "既有系統限制",
            description:
              "新增功能必須符合原有流程、資料結構與開發架構，不能獨立重做。",
            icon: "layers",
          },
          {
            eyebrow: "Challenge 02",
            title: "跨部門需求對齊",
            description:
              "道路管理涉及多個單位與角色，需要在開發前釐清需求與操作邏輯。",
            icon: "workflow",
          },
          {
            eyebrow: "Challenge 03",
            title: "案件與地圖資料整合",
            description:
              "功能需與案件資料、申請流程與地圖圖資連動，資訊關係較複雜。",
            icon: "map-pinned",
          },
          {
            eyebrow: "Challenge 04",
            title: "元件一致性維護",
            description:
              "新增介面需沿用既有元件與互動模式，避免造成平台體驗斷裂。",
            icon: "refresh",
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
      "以低成本原型先消除需求與操作邏輯的不確定性，再將確認後的功能穩定整合回既有平台。",
    contentBlocks: [
      {
        type: "design-goals",
        previewImage: "/projects/rmic/design-goals.webp",
        previewVisual: "rmic-wireframe",
        goals: [
          {
            title: "降低需求落差",
            description:
              "透過 Wireframe 與需求單位快速確認流程與欄位邏輯。",
            icon: "navigation",
          },
          {
            title: "確認操作可行性",
            description:
              "以 Prototype 驗證使用路徑，讓功能邏輯在開發前被清楚確認。",
            icon: "check",
          },
          {
            title: "維持系統一致性",
            description:
              "以既有元件與平台規範延伸新功能，降低開發與維護成本。",
            icon: "layers",
          },
        ],
      },
    ],
  },
  // {
  //   number: "04",
  //   title: "Feature Extension",
  //   subtitle: "功能擴充設計",
  //   type: "feature-extension",
  //   description:
  //     "本次設計聚焦在既有平台中的新增功能模組。設計過程先盤點原有頁面、欄位與操作邏輯，再依需求補足新增功能的入口、表單狀態與操作回饋，確保功能能自然整合至既有案件管理流程中。",
  //   contentBlocks: [
  //     {
  //       type: "visual-showcase",
  //       layout: "hero-grid",
  //       items: [
  //         {
  //           title: "新增功能模組",
  //           description:
  //             "整合新增入口、表單欄位、狀態切換與操作回饋，維持既有案件流程的連續性。",
  //           image: "/projects/rmic/feature-extension.webp",
  //           visual: "rmic-feature-extension",
  //         },
  //         // {
  //         //   title: "案件列表",
  //         //   description:
  //         //     "將案件狀態、申請類型、承辦單位與常用操作整理為可快速掃讀的資料表格。",
  //         //   image: "/projects/rmic/case-list.webp",
  //         //   visual: "rmic-case-list",
  //         // },
  //         // {
  //         //   title: "地圖與案件連動",
  //         //   description:
  //         //     "透過地圖標記、圖層與篩選條件，連結施工位置與案件資料。",
  //         //   image: "/projects/rmic/map-system.webp",
  //         //   visual: "rmic-map-system",
  //         // },
  //       ],
  //     },
  //   ],
  // },
  {
    number: "04",
    title: "Wireframe & Prototype",
    subtitle: "線框稿與原型驗證",
    type: "wireframe-prototype",
    description:
      "在進入視覺與開發前，先以 Wireframe 建立低成本溝通稿，協助需求單位確認功能範圍、欄位順序與操作路徑。後續再透過 Prototype 模擬實際操作情境，確認流程是否符合使用者任務與系統邏輯。",
    contentBlocks: [
      {
        type: "visual-showcase",
        layout: "two-column",
        items: [
          {
            title: "Wireframe Screens",
            description:
              "以低彩度線框稿確認頁面框架、表單欄位、狀態與主要操作位置。",
            image: "/projects/rmic/wireframe.webp",
            visual: "rmic-wireframe",
          },
          {
            title: "Prototype Validation",
            description:
              "以多畫面點擊路徑模擬彈窗、表單、狀態切換與確認頁，驗證完整操作邏輯。",
            image: "/projects/rmic/prototype.webp",
            visual: "rmic-prototype",
          },
        ],
      },
    ],
  },
  {
    number: "05",
    title: "Component Extension",
    subtitle: "既有元件延伸",
    type: "component-extension",
    description:
      "由於系統已有既定介面規範，本次新增功能並未重新建立設計語言，而是以既有元件為基礎延伸頁面、表單、按鈕、表格與狀態提示，讓新功能在視覺與操作上能與原平台保持一致。",
    contentBlocks: [
      {
        type: "visual-showcase",
        layout: "single",
        items: [
          {
            title: "RMIC Component Extension",
            description:
              "展示 Table、Form、Button、Status Badge、Modal、Map Marker、Tabs、Filter、Search 與 Pagination。",
            image: "/projects/rmic/component-extension.webp",
            visual: "rmic-component-extension",
          },
        ],
      },
    ],
  },
  {
    number: "06",
    title: "Final Design & Reflection",
    subtitle: "最終設計與反思",
    type: "reflection",
    description:
      "這次專案讓我更明確理解到，既有系統的功能擴充不只是新增畫面，而是在既有流程、元件與開發限制下，找到最穩定的整合方式。透過 Wireframe 與 Prototype 先行驗證，可以有效降低需求落差，也讓設計更容易被需求單位與開發團隊理解。",
    contentBlocks: [
      {
        type: "gallery",
        items: [
          {
            title: "案件管理介面",
            description:
              "將新增功能整合至既有案件管理情境，維持資料層級與操作模式的一致性。",
            image: "/projects/rmic/final-ui-01.webp",
            visual: "rmic-final-ui-01",
          },
          {
            title: "地圖圖資介面",
            description:
              "透過地圖圖層、案件標記與資訊面板呈現道路施工案件的空間關係。",
            image: "/projects/rmic/final-ui-02.webp",
            visual: "rmic-final-ui-02",
          },
          {
            title: "地圖系統",
            description:
              "整合篩選、圖層控制與案件資訊，支援道路管理與案件追蹤。",
            image: "/projects/rmic/final-ui-03.webp",
            visual: "rmic-map-system",
          },
          {
            title: "功能擴充頁",
            description:
              "以既有元件與流程規範承接新增功能，降低使用與開發端的轉換成本。",
            image: "/projects/rmic/final-ui-04.webp",
            visual: "rmic-feature-extension",
          },
        ],
      },
    ],
  },
];

export const rmicProject: Project = {
    slug: "rmic",
    ...projectImageAssets.rmic,
    figmaPrototypeUrl:
      "https://www.figma.com/proto/HhzIYp8NJMg2UkxtKaGqnj/-M--RMIC-%E6%A1%83%E5%9C%92%E5%B8%82%E9%81%93%E7%AE%A1%E8%B3%87%E8%A8%8A%E4%B8%AD%E5%BF%83%E7%B3%BB%E7%B5%B1-Final?node-id=85-1113&p=f&viewport=301%2C157%2C0.06&t=qTctTlCG2VODrGFh-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=85%3A1113&page-id=85%3A1083",
    visualFallback: "rmic-hero",
    caseStudySections: rmicCaseStudySections,
    title: "RMIC 桃園市道管資訊中心系統",
    subtitle: "Road Management Information Center",
    eyebrow: "既有平台的功能擴充設計",
    description:
      "在既有道路管理平台架構下擴充案件與地圖功能，透過 Wireframe 與 Prototype 對齊跨部門需求，降低開發前的流程與操作落差。",
    role: "UI/UX Design / Prototyping",
    scope: "案件管理 / 地圖圖資 / 表單 / 功能擴充",
    timeline: "1 月",
    year: "2026",
    duration: "1 months",
    summary:
      "RMIC 桃園市道管資訊中心系統用於道路挖掘、施工案件與相關申請流程的管理，平台整合案件進度、表單資料與地圖圖資，支援跨部門在道路管理、審核與案件追蹤上的協作需求。",
    challenge:
      "新增功能必須整合既有案件流程、表單模組、地圖圖資與開發架構，同時讓多個需求單位在開發前對操作邏輯與範圍形成共同理解。",
    outcome:
      "透過 Wireframe 快速對齊欄位與狀態，再以 Prototype 驗證實際操作路徑，並使用既有平台元件延伸功能介面，降低需求、設計與開發之間的落差。",
    metrics: [
      { label: "Core methods", value: "2" },
      { label: "Focus areas", value: "4" },
      { label: "Sections", value: "7" },
    ],
    tags: [
      "UI/UX Design",
      "Wireframe",
      "Prototype",
      "Feature Extension",
      "Government Platform",
      "Map-based System",
    ],
    tools: ["Figma", "Wireframe", "Prototype", "UI Specification"],
    process: [
      "依據需求單位提出的功能需求，梳理新增功能的操作流程、欄位、狀態與介面結構。",
      "使用 Wireframe 快速對齊功能範圍，再以 Prototype 驗證使用情境與操作路徑。",
      "以既有平台元件與視覺規範延伸新介面，協助 PM 與開發端確認實作範圍。",
    ],
    deliverables: [
      "Wireframe",
      "Prototype",
      "Component Extension",
      "Final UI",
    ],
    theme: {
      primary: "#147d84",
      secondary: "#2c6f9e",
      accent: "#49a6a3",
    },
    reflection: [
      "既有系統的功能擴充需要先理解限制，再找到最穩定的整合方式，而不是從視覺表面重新開始。",
      "Wireframe 與 Prototype 能在開發前暴露欄位、狀態與流程上的模糊處，降低跨部門需求落差。",
      "沿用既有元件與互動模式，能讓新增功能更容易被使用者理解，也能降低後續開發與維護成本。",
    ],
  };
