import type { CaseStudySection, Project } from "../types";
import { projectImageAssets } from "./assets";

const meowDayCaseStudySections: CaseStudySection[] = [
  {
    number: "01",
    title: "Project Overview",
    subtitle: "專案概覽",
    type: "overview",
    description:
      "貓之日是以手工玉米片為核心的品牌識別設計案，將產品特色與貓的趣味意象結合，建立具有記憶點、親和力與實體延伸性的品牌形象。",
    contentBlocks: [
      {
        type: "facts",
        items: [
          { label: "Project Type", value: "Brand Identity / Packaging" },
          { label: "Role", value: "Brand Identity / Visual Design" },
          { label: "Scope", value: "Logo · Visual Identity · Packaging" },
          { label: "Deliverables", value: "Logo Design · Brand Visual · Applications" },
        ],
      },
      {
        type: "cards",
        columns: 3,
        items: [
          {
            title: "產品角色化",
            description:
              "將手工玉米片的形狀與貓的趣味意象結合，建立容易被記住的品牌符號。",
            icon: "sparkles",
          },
          {
            title: "包裝延伸",
            description:
              "讓 Logo、角色感與色彩能延伸到包裝、店面、貼紙與社群視覺。",
            icon: "layers",
          },
          {
            title: "拍照記憶點",
            description:
              "透過活潑圖形與實體接觸點，讓品牌在消費與分享情境中更具辨識度。",
            icon: "palette",
          },
        ],
      },
    ],
  },
  {
    number: "02",
    title: "Brand Concept",
    subtitle: "品牌概念",
    type: "visual-direction",
    description:
      "品牌概念以「玉米片 × 貓」作為核心發想，將產品形狀、手作感與趣味角色印象轉化為親和、有記憶點的視覺語氣。",
    contentBlocks: [
      {
        type: "visual-showcase",
        layout: "hero-grid",
        items: [
          {
            title: "Corn Chips × Cat",
            description:
              "以玉米片三角形輪廓與貓耳、表情、爪印等元素建立品牌符號的發想基礎。",
            image: "/projects/meow-day-chips/concept-01.webp",
            visual: "meow-brand-concept",
          },
          {
            title: "Tone & Personality",
            description:
              "品牌語氣比一般食品品牌更活潑，帶有角色感、手作感與社群分享友善的視覺節奏。",
            image: "/projects/meow-day-chips/concept-02.webp",
            visual: "meow-application-sticker",
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
      "Logo process 從玉米片形狀、貓意象、圖形組合與字標探索出發，讓品牌識別能從產品特色自然延伸而來。",
    contentBlocks: [
      {
        type: "visual-showcase",
        layout: "single",
        items: [
          {
            title: "Shape Exploration / 圖形探索",
            description:
              "將三角玉米片、貓耳、眼睛與爪印轉化為多種識別方向，並收斂出最具記憶點的 Logo 組合。",
            image: "/projects/meow-day-chips/logo-01.webp",
            visual: "meow-logo-process",
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
      "視覺識別整理品牌色、字體、圖形元素與角色感應用，讓貓之日能在包裝與店面中維持親和且鮮明的品牌記憶。",
    contentBlocks: [
      {
        type: "visual-showcase",
        layout: "single",
        items: [
          {
            title: "Color / Typography / Graphic Elements",
            description:
              "以暖黃、橘色、奶油白與深墨色建立食品溫度，搭配貓咪符號與手作感圖形元素強化品牌辨識。",
            image: "/projects/meow-day-chips/identity-01.webp",
            visual: "meow-visual-identity",
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
      "品牌應用展示包裝、店面、招牌、貼紙與社群視覺，呈現 Logo 與角色化品牌語氣如何延伸到實體體驗與拍照記憶點。",
    contentBlocks: [
      {
        type: "gallery",
        items: [
          {
            eyebrow: "Brand Application",
            title: "Packaging / 包裝",
            description:
              "以活潑色彩、角色符號與產品形狀建立包裝上的第一記憶點。",
            image: "/projects/meow-day-chips/applications-01.webp",
            visual: "meow-application-packaging",
          },
          {
            eyebrow: "Brand Application",
            title: "Storefront / 店面",
            description:
              "將品牌色與貓咪符號延伸到店面與吧台視覺，提升拍照與辨識度。",
            image: "/projects/meow-day-chips/applications-02.webp",
            visual: "meow-application-storefront",
          },
          {
            eyebrow: "Brand Application",
            title: "Sticker / 貼紙",
            description:
              "將角色感轉化為小尺寸貼紙與社群素材，支援包裝封口與分享情境。",
            image: "/projects/meow-day-chips/applications-03.webp",
            visual: "meow-application-sticker",
          },
        ],
      },
    ],
  },
];

export const meowDayProject: Project = {
  slug: "meow-day-chips",
  ...projectImageAssets["meow-day-chips"],
  visualFallback: "meow-hero",
  caseStudySections: meowDayCaseStudySections,
  title: "貓之日 Meow Day Chips",
  subtitle: "Handmade Tortilla Chips Brand Identity",
  eyebrow: "Brand Identity / Visual Design / Packaging",
  description:
    "以手工玉米片為核心，結合產品特色與貓的趣味意象，建立具有記憶點、親和力與實體延伸性的品牌形象。",
  role: "Brand Identity / Visual Design",
  scope: "Logo / Visual Identity / Packaging / Storefront",
  timeline: "Project-based",
  year: "2026",
  duration: "Brand identity",
  summary:
    "貓之日是以手工玉米片為核心的品牌識別設計案，將產品特色與貓的趣味意象結合，建立親和且具辨識度的品牌形象。",
  challenge:
    "如何將玉米片形狀與貓的趣味意象轉化為品牌記憶點，並延伸到包裝、店面與貼紙等實體應用。",
  outcome:
    "建立 Logo、品牌視覺、包裝與實體應用方向，讓品牌在產品與拍照分享情境中都具備清楚辨識度。",
  metrics: [
    { label: "Concepts", value: "3" },
    { label: "Applications", value: "3" },
    { label: "Color sets", value: "4" },
  ],
  tags: [
    "Brand Identity",
    "Logo Design",
    "Visual Design",
    "Packaging",
    "Storefront",
  ],
  tools: ["Illustrator", "Photoshop", "Figma", "Brand Applications"],
  process: [
    "從玉米片形狀與貓咪意象發想品牌核心符號，建立角色化的識別方向。",
    "整理品牌色、字體、圖形元素與包裝語氣，讓視覺更親和且具記憶點。",
    "將 Logo 與輔助圖形延伸到包裝、店面與貼紙等實體接觸點。",
  ],
  deliverables: [
    "Logo Design",
    "Brand Visual",
    "Packaging",
    "Brand Applications",
  ],
  theme: {
    primary: "#F7B733",
    secondary: "#F47C3C",
    accent: "#2E2A25",
  },
};
