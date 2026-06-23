import type { CaseStudySection, Project } from "../types";
import { projectImageAssets } from "./assets";

const inaCaseStudySections: CaseStudySection[] = [
  {
    number: "01",
    title: "Project Overview",
    subtitle: "專案概覽",
    type: "overview",
    description:
      "INA Waxing 是以熱蠟除毛服務為核心的品牌官網設計案。本案延伸既有品牌視覺，重新整理服務資訊、品牌氛圍與預約導向，打造更中性、專業且具包容性的數位體驗。",
    contentBlocks: [
      {
        type: "facts",
        items: [
          { label: "Project Type", value: "Brand Website / Service Design" },
          { label: "Role", value: "UI/UX Design / Visual Design" },
          { label: "Scope", value: "Website · Service Pages · RWD" },
          { label: "Deliverables", value: "Website Design · UI Layout · RWD Screens" },
        ],
      },
      {
        type: "cards",
        columns: 3,
        items: [
          {
            title: "品牌官網定位",
            description:
              "將服務介紹、品牌價值與預約導向整理成清楚的官網瀏覽路徑。",
            icon: "sparkles",
          },
          {
            title: "服務資訊整理",
            description:
              "降低熱蠟除毛服務的理解門檻，讓使用者能快速掌握流程、部位與注意事項。",
            icon: "layers",
          },
          {
            title: "RWD 介面延伸",
            description:
              "讓首頁、服務頁與預約導向在桌機與手機上都維持穩定閱讀節奏。",
            icon: "monitor",
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
      "本案需要在既有品牌基礎上，調整出更中性、專業且具包容性的數位體驗，讓女性與男性消費者都能安心理解服務內容。",
    contentBlocks: [
      {
        type: "cards",
        columns: 3,
        items: [
          {
            eyebrow: "Challenge 01",
            title: "讓除毛服務資訊更清楚易懂",
            description:
              "服務項目、流程與注意事項需要被重新整理，避免使用者在首次接觸時感到不確定。",
            icon: "layers",
          },
          {
            eyebrow: "Challenge 02",
            title: "建立專業且不具壓迫感的品牌氛圍",
            description:
              "視覺需要兼顧專業感、親近感與留白節奏，讓服務內容讀起來更安心。",
            icon: "palette",
          },
          {
            eyebrow: "Challenge 03",
            title: "兼顧女性與男性消費者的瀏覽感受",
            description:
              "避免過度單一性別化的語氣，以中性、乾淨且包容的介面語言傳達服務價值。",
            icon: "sparkles",
          },
        ],
      },
    ],
  },
  {
    number: "03",
    title: "UI Direction",
    subtitle: "介面方向",
    type: "visual-direction",
    description:
      "UI Direction 聚焦首頁、服務介紹、流程說明與預約導向，透過清楚資訊架構、溫和視覺節奏與明確 CTA，建立安心且可信任的服務體驗。",
    contentBlocks: [
      {
        type: "visual-showcase",
        layout: "hero-grid",
        items: [
          {
            title: "Website Structure / 官網內容架構",
            description:
              "整理首頁主視覺、服務分類、流程說明、常見問題與預約入口，讓使用者能循序理解服務。",
            image: "/projects/ina-waxing/ui-direction.webp",
            visual: "ina-ui-direction",
          },
          {
            title: "Service Pages / 服務頁面",
            description:
              "以卡片、分段說明與重點提示呈現服務部位、流程與注意事項。",
            image: "/projects/ina-waxing/final-ui-02.webp",
            visual: "ina-final-ui-02",
          },
          {
            title: "Booking Path / 預約導向",
            description:
              "將預約 CTA 放在使用者理解服務後的關鍵位置，降低轉換路徑中的猶豫感。",
            image: "/projects/ina-waxing/final-ui-03.webp",
            visual: "ina-final-ui-03",
          },
        ],
      },
    ],
  },
  {
    number: "04",
    title: "Visual Extension",
    subtitle: "品牌視覺延伸",
    type: "visual-direction",
    description:
      "視覺延伸以中性、乾淨、專業為核心，整理色彩、字體、圖片語氣與版面節奏，讓既有品牌能自然轉化為網站介面。",
    contentBlocks: [
      {
        type: "visual-showcase",
        layout: "single",
        items: [
          {
            title: "Brand Website Visual Language",
            description:
              "以柔和中性色、細緻留白、乾淨字級與服務情境照片建立專業且具包容性的品牌氛圍。",
            image: "/projects/ina-waxing/visual-extension.webp",
            visual: "ina-visual-extension",
          },
        ],
      },
    ],
  },
  {
    number: "05",
    title: "Final Design",
    subtitle: "最終設計",
    type: "final-design",
    description:
      "最終畫面展示品牌官網主要頁面、服務資訊與行動版 RWD 呈現，讓品牌氛圍與服務轉換路徑保持一致。",
    contentBlocks: [
      {
        type: "gallery",
        items: [
          {
            eyebrow: "Final Design",
            title: "Homepage",
            description:
              "以品牌主視覺、服務重點與預約入口建立官網第一印象。",
            image: "/projects/ina-waxing/final-ui-01.webp",
            visual: "ina-final-ui-01",
          },
          {
            eyebrow: "Final Design",
            title: "Service Detail",
            description:
              "分段呈現服務內容、流程與注意事項，降低初次瀏覽的理解成本。",
            image: "/projects/ina-waxing/final-ui-02.webp",
            visual: "ina-final-ui-02",
          },
          {
            eyebrow: "Final Design",
            title: "Mobile Booking Flow",
            description:
              "手機版強化服務掃讀、CTA 可見性與預約導向，支援快速決策。",
            image: "/projects/ina-waxing/final-ui-03.webp",
            visual: "ina-final-ui-03",
          },
        ],
      },
    ],
  },
];

export const inaProject: Project = {
  slug: "ina-waxing",
  ...projectImageAssets["ina-waxing"],
  visualFallback: "ina-hero",
  caseStudySections: inaCaseStudySections,
  title: "INA Waxing",
  subtitle: "Waxing Brand Website",
  eyebrow: "UI/UX Design / Brand Website / Visual Extension",
  description:
    "延伸既有品牌視覺，重新整理熱蠟除毛服務資訊、品牌氛圍與預約導向，打造更中性、專業且具包容性的數位體驗。",
  role: "UI/UX Design / Visual Design",
  scope: "Website / Service Pages / Visual Extension / RWD",
  timeline: "Project-based",
  year: "2026",
  duration: "Brand website",
  summary:
    "INA Waxing 是以熱蠟除毛服務為核心的品牌官網設計案。本案延伸既有品牌視覺，重新整理服務資訊、品牌氛圍與預約導向。",
  challenge:
    "如何在原有品牌基礎上，調整出更中性、專業且具包容性的數位體驗，讓不同消費者都能安心理解服務內容。",
  outcome:
    "完成品牌官網主視覺、服務頁面、流程說明與預約導向設計，並建立適合 RWD 延伸的介面版型。",
  metrics: [
    { label: "Core pages", value: "5" },
    { label: "Service flows", value: "3" },
    { label: "RWD views", value: "2" },
  ],
  tags: [
    "UI/UX Design",
    "Brand Website",
    "Visual Design",
    "Service Design",
    "Responsive Design",
  ],
  tools: ["Figma", "Photoshop", "Illustrator", "Responsive Layout"],
  process: [
    "整理熱蠟除毛服務資訊與使用者首次瀏覽時需要理解的內容順序。",
    "延伸既有品牌視覺，建立中性、專業且具包容性的網站語氣。",
    "規劃首頁、服務介紹與預約導向，讓 RWD 畫面維持清楚閱讀與轉換節奏。",
  ],
  deliverables: [
    "Website Design",
    "Brand Visual Extension",
    "UI Layout",
    "RWD Screens",
  ],
  theme: {
    primary: "#7D6F66",
    secondary: "#D7C6B8",
    accent: "#B58B72",
  },
};
