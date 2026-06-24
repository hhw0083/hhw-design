import type { CaseStudySection, Project } from "../types";
import { projectImageAssets } from "./assets";

const tianLiangCaseStudySections: CaseStudySection[] = [
  {
    number: "01",
    title: "Project Overview",
    subtitle: "品牌概述",
    type: "overview",
    description:
      "天亮茶空間是一個以茶飲、空間體驗與日常停留感為核心的品牌識別設計案。本案從 Logo 發想、品牌視覺語言到實體應用，建立一致且具辨識度的品牌形象。",
    contentBlocks: [
      {
        type: "facts",
        items: [
          { label: "Project Type", value: "Brand Identity / Visual Design" },
          { label: "Role", value: "Brand Identity / Visual Design" },
          { label: "Scope", value: "Logo · Visual Identity · Applications" },
          { label: "Deliverables", value: "Logo Design · Brand Color · Typography" },
        ],
      },
      {
        type: "cards",
        columns: 3,
        items: [
          {
            title: "品牌定位",
            description:
              "以茶飲、空間體驗與日常停留感為核心，建立安定、溫潤且容易被記住的品牌印象。",
            icon: "sparkles",
          },
          {
            title: "視覺語氣",
            description:
              "以米白、墨黑、茶綠與暖橘作為主要基調，讓品牌在東方茶感與現代識別之間取得平衡。",
            icon: "palette",
          },
          {
            title: "應用延伸",
            description:
              "讓 Logo 能穩定延伸到招牌、遮雨棚、包裝、杯身、名片與貼紙等實體接觸點。",
            icon: "layers",
          },
        ],
      },
    ],
  },
  {
    number: "02",
    title: "Design Challenge",
    subtitle: "設計挑戰",
    type: "challenge",
    description:
      "品牌需要在 Logo、招牌、包裝與實體應用中維持溫潤、安定且具辨識度的視覺語氣，同時保留茶空間的清晨感與停留感。",
    contentBlocks: [
      {
        type: "cards",
        columns: 3,
        items: [
          {
            eyebrow: "Challenge 01",
            title: "建立具有記憶點的品牌符號",
            description:
              "從日出、山形、茶席與留白感中萃取可識別的符號，讓品牌在第一眼就能留下印象。",
            icon: "sparkles",
          },
          {
            eyebrow: "Challenge 02",
            title: "延續溫潤、安定的茶空間氛圍",
            description:
              "避免過度商業化或過於傳統的視覺語氣，以克制的線條、比例與色彩建立安定感。",
            icon: "palette",
          },
          {
            eyebrow: "Challenge 03",
            title: "穩定延伸到實體應用",
            description:
              "Logo 需要在招牌、遮雨棚、包裝、杯身與貼紙等不同尺寸與材質中保持清楚辨識。",
            icon: "layers",
          },
        ],
      },
    ],
  },
  {
    number: "03",
    title: "Logo Process",
    subtitle: "Logo 發展過程",
    type: "visual-direction",
    description:
      "Logo process 以符號探索、字標測試與方向收斂為主軸，將大量草圖整理為有主次的設計脈絡，而不是單純堆疊素材。",
    contentBlocks: [
      {
        type: "cards",
        columns: 3,
        items: [
          {
            title: "Symbol Exploration",
            description:
              "從日出、山形、茶席與留白感探索品牌符號，尋找能代表清晨、停留與茶空間的圖像語彙。",
            icon: "sparkles",
          },
          {
            title: "Wordmark Exploration",
            description:
              "嘗試不同字形比例與筆觸氣質，尋找安定、溫潤且適合空間品牌使用的字標方向。",
            icon: "palette",
          },
          {
            title: "Selected Direction",
            description:
              "以日出與山形構成品牌記憶點，保留茶空間的靜謐與清晨感，並利於後續招牌與包裝延伸。",
            icon: "layers",
          },
        ],
      },
      {
        type: "visual-showcase",
        layout: "hero-grid",
        items: [
          {
            title: "Selected Direction / 最終收斂方向",
            description:
              "將日出、山形與茶空間的留白感收斂為主要識別符號，建立品牌核心記憶點。",
            image: "/projects/tian-liang-tea-space/logo-01.webp",
            visual: "tian-liang-selected-direction",
          },
          {
            title: "Symbol Exploration / 符號探索",
            description:
              "以淡灰草圖呈現多方向嘗試，並用較深框線標示進入收斂階段的方案。",
            image: "/projects/tian-liang-tea-space/logo-02.webp",
            visual: "tian-liang-logo-exploration",
          },
          {
            title: "Wordmark Exploration / 字標探索",
            description:
              "比較字距、筆觸、比例與中文品牌名稱的視覺重量，找出穩定且溫潤的字標語氣。",
            image: "/projects/tian-liang-tea-space/logo-03.webp",
            visual: "tian-liang-wordmark-exploration",
          },
        ],
      },
    ],
  },
  {
    number: "04",
    title: "Visual Identity",
    subtitle: "品牌視覺系統",
    type: "visual-direction",
    description:
      "視覺系統整理 Logo、品牌色彩、字體、圖形元素與基本使用規範，讓識別能在不同材質與尺寸上保持一致。",
    contentBlocks: [
      {
        type: "visual-showcase",
        layout: "single",
        items: [
          {
            title: "Logo / Color / Typography / Pattern",
            description:
              "以米白、墨黑、茶綠、暖灰與橘色作為主要視覺基調，搭配 Cinzel 與霞鶩文楷建立東方茶感與現代識別。",
            image: "/projects/tian-liang-tea-space/identity-01.webp",
            visual: "tian-liang-visual-identity",
          },
        ],
      },
    ],
  },
  {
    number: "05",
    title: "Brand Applications",
    subtitle: "品牌應用",
    type: "final-design",
    description:
      "最終品牌應用聚焦 Logo 與品牌語氣如何落到實體接觸點，包含招牌、遮雨棚、包裝、杯身、名片與貼紙。",
    contentBlocks: [
      {
        type: "gallery",
        items: [
          {
            eyebrow: "Brand Application",
            title: "Storefront Signage / 招牌",
            description:
              "以穩定比例呈現品牌主識別，讓街邊視覺保有清楚辨識與安定感。",
            image: "/projects/tian-liang-tea-space/applications-01.webp",
            visual: "tian-liang-storefront",
          },
          {
            eyebrow: "Brand Application",
            title: "Awning / 遮雨棚",
            description:
              "將品牌色與 Logo 延伸至大面積材質，建立入口處的第一印象。",
            image: "/projects/tian-liang-tea-space/applications-02.webp",
            visual: "tian-liang-awning",
          },
          {
            eyebrow: "Brand Application",
            title: "Packaging / 包裝",
            description:
              "以乾淨留白與品牌符號建立禮盒、外帶包裝與商品包裝的連貫性。",
            image: "/projects/tian-liang-tea-space/applications-03.webp",
            visual: "tian-liang-packaging",
          },
          {
            eyebrow: "Brand Application",
            title: "Cup / 杯身",
            description:
              "杯身應用保留符號辨識度，讓日常使用情境也能形成品牌記憶。",
            image: "/projects/tian-liang-tea-space/applications-04.webp",
            visual: "tian-liang-cup",
          },
          {
            eyebrow: "Brand Application",
            title: "Business Card / 名片",
            description:
              "以品牌標準字、識別符號與聯絡資訊建立名片版面，讓品牌在日常交流與實體接觸點中保持一致。",
            image: "/projects/tian-liang-tea-space/applications-05.webp",
            visual: "tian-liang-business-card",
          },
          {
            eyebrow: "Brand Application",
            title: "Sticker / 貼紙",
            description:
              "將 Logo 與輔助圖形轉化為小尺寸貼紙，支援包裝封口與周邊應用。",
            image: "/projects/tian-liang-tea-space/applications-06.webp",
            visual: "tian-liang-sticker",
          },
        ],
      },
    ],
  },
];

export const tianLiangProject: Project = {
    slug: "tian-liang-tea-space",
    ...projectImageAssets["tian-liang-tea-space"],
    visualFallback: "tian-liang-hero",
    caseStudySections: tianLiangCaseStudySections,
    title: "天亮茶空間",
    subtitle: "Tian Liang Tea Space",
    eyebrow: "Brand Identity / Visual Design",
    description:
      "以茶飲、空間體驗與日常停留感為核心，從 Logo 發想、品牌視覺語言到實體應用，建立一致且具辨識度的品牌形象。",
    role: "Brand Identity / Visual Design",
    scope: "Logo / Visual Identity / Signage / Packaging",
    timeline: "Project-based",
    year: "2026",
    duration: "Brand identity",
    summary:
      "天亮茶空間是一個以茶飲、空間體驗與日常停留感為核心的品牌識別設計案。本案從 Logo 發想、品牌視覺語言到實體應用，建立一致且具辨識度的品牌形象。",
    challenge:
      "如何讓茶空間品牌在 Logo、招牌、包裝與實體應用中，維持溫潤、安定且具辨識度的視覺語氣。",
    outcome:
      "建立以日出、山形與茶空間留白感為核心的品牌識別，並延伸到招牌、遮雨棚、包裝、杯身、名片與貼紙等實體應用。",
    metrics: [
      { label: "Logo routes", value: "3" },
      { label: "Color groups", value: "3" },
      { label: "Applications", value: "6" },
    ],
    tags: [
      "Brand Identity",
      "Logo Design",
      "Visual Design",
      "Signage",
      "Packaging",
    ],
    tools: ["Illustrator", "Photoshop", "Figma", "Brand Applications"],
    process: [
      "從日出、山形、茶席與留白感探索品牌符號，建立可被記住的主識別方向。",
      "比較中文與英文標準字比例，尋找安定、溫潤且適合空間品牌的字標語氣。",
      "將 Logo、品牌色、字體與輔助圖形延伸到招牌、包裝、杯身與名片等接觸點。",
    ],
    deliverables: [
      "Logo Design",
      "Brand Color",
      "Typography",
      "Brand Applications",
    ],
    theme: {
      primary: "#435242",
      secondary: "#DB7F3E",
      accent: "#DCB65D",
    },
    colorSystem: [
      {
        name: "天亮",
        description: "清晨、霧面與溫暖第一道光的品牌色組。",
        colors: [
          { name: "Mist Gray", value: "#BCBBB7", usage: "背景、輔助表面與低調材質" },
          { name: "Warm Orange", value: "#DB7F3E", usage: "品牌重點、符號與醒目應用" },
        ],
      },
      {
        name: "黃昏",
        description: "較深的識別與高對比應用色組。",
        colors: [
          { name: "Ink Black", value: "#2E3133", usage: "主文字、招牌與高對比品牌應用" },
          { name: "Sunset Orange", value: "#D8752D", usage: "包裝亮點與視覺輔助" },
        ],
      },
      {
        name: "拂曉",
        description: "茶綠、金色與低彩度植物感的應用色組。",
        colors: [
          { name: "Deep Green", value: "#435242", usage: "品牌主色、空間應用與招牌背景" },
          { name: "Dawn Gold", value: "#DCB65D", usage: "輔助色、細節線條與包裝點綴" },
          { name: "Soft Green Gray", value: "#DCB65D", usage: "待確認色值的輔助色票" },
        ],
      },
    ],
    reflection: [
      "品牌識別的關鍵不是把所有草圖放上頁面，而是整理出符號如何被選擇、收斂與延伸的脈絡。",
      "茶空間品牌需要在溫潤與辨識度之間取得平衡，讓 Logo 在實體材質與小尺寸應用中都能保持穩定。",
    ],
  };
