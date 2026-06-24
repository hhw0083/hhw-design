import type { CaseStudySection, Project } from "../types";
import { projectImageAssets } from "./assets";

const domeCaseStudySections: CaseStudySection[] = [
  {
    number: "01",
    title: "Project Overview",
    subtitle: "專案概覽",
    type: "overview",
    description:
      "DOME 是以情感記憶、人類演化與機器文明為核心的原創動畫概念作品。作品透過角色、場景與世界觀設定，探索科技、倫理與人性抉擇之間的關係。",
    contentBlocks: [
      {
        type: "facts",
        items: [
          { label: "Project Type", value: "Original Animation Concept" },
          { label: "Role", value: "Concept Design / Visual Development" },
          { label: "Scope", value: "Story · Character · Worldbuilding" },
          { label: "Deliverables", value: "Story Concept · Visual Direction · Final Visuals" },
        ],
      },
      {
        type: "cards",
        columns: 3,
        items: [
          {
            title: "原創世界觀",
            description:
              "以地下文明、機器系統與人類記憶作為創作核心，建立故事衝突與視覺基調。",
            icon: "sparkles",
          },
          {
            title: "角色設定",
            description:
              "透過角色比例、服裝、裝備與表情探索，讓人物能呼應故事中的倫理命題。",
            icon: "layers",
          },
          {
            title: "美術語氣",
            description:
              "以冷色、壓迫感、未來系統與孤立空間建立動畫概念的視覺張力。",
            icon: "moon",
          },
        ],
      },
    ],
  },
  {
    number: "02",
    title: "Story Concept",
    subtitle: "故事概念",
    type: "visual-direction",
    description:
      "故事概念圍繞情感記憶、演化選擇與機器文明的秩序，角色需要在科技承諾與人性代價之間做出抉擇。",
    contentBlocks: [
      {
        type: "visual-showcase",
        layout: "hero-grid",
        items: [
          {
            title: "Worldbuilding / 世界觀",
            description:
              "以封閉式城市、機器管理系統與記憶保存技術建立故事背景。",
            image: "/projects/dome/story-01.webp",
            visual: "dome-story-concept",
            aspectRatio: "18/9",
          },
          {
            title: "Memory Core / 記憶核心",
            description:
              "人類記憶與意識被保存、解析與再利用的核心裝置。",
            image: "/projects/dome/story-02.webp",
            visual: "dome-final-visual-01",
          },
          {
            title: "Reproduction Chamber / 繁衍艙室",
            description:
              "描繪未來人類繁衍被系統化管理的空間，透過艙體、排列結構與冷色光影，呈現生命誕生被科技介入後的疏離感。。",
            image: "/projects/dome/story-03.webp",
            visual: "dome-final-visual-02",
          },
        ],
      },
    ],
  },
  {
    number: "03",
    title: "Visual Direction",
    subtitle: "美術方向",
    type: "visual-direction",
    description:
      "整體美術語氣以地下文明、冷色調、機器秩序與壓迫感為主，透過幾何結構、低光源與巨大尺度建立未來感氛圍。",
    contentBlocks: [
      {
        type: "visual-showcase",
        layout: "single",
        items: [
          {
            title: "Atmosphere / 場景氛圍",
            description:
              "以冷灰、藍黑與系統光源建立機器文明的秩序感，並用空間尺度強化角色的孤立感。",
            image: "/projects/dome/visual-01.webp",
            visual: "dome-visual-direction",
            aspectRatio: "21/9",
          },
        ],
      },
    ],
  },
  {
    number: "04",
    title: "Character Design",
    subtitle: "角色設計",
    type: "visual-direction",
    description:
      "角色設計從故事命題出發，整理輪廓、服裝、裝備與表情方向，讓角色在外觀上呼應記憶、科技與人性選擇。",
    contentBlocks: [
      {
        type: "visual-showcase",
        layout: "two-column",
        items: [
          {
            title: "Machine Character / 機械人",
            description:
              "負責維持人工繁衍系統的機器角色，以異化的人形比例呈現科技對生命流程的控制。",
            image: "/projects/dome/character-01.webp",
            visual: "dome-character-design",
          },
          {
            title: "Unexpected Child / 意外之子",
            description:
              "人工生殖系統中意外誕生的男孩，作為 DOME 世界裡打破秩序的生命例外。",
            image: "/projects/dome/character-02.webp",
            visual: "dome-character-design",
          },
        ],
      },
    ],
  },
  {
    number: "05",
    title: "Final Visuals",
    subtitle: "最終視覺",
    type: "final-design",
    description:
      "最終視覺整理主視覺、角色圖、場景氛圍與動畫概念畫，呈現 DOME 的世界觀與視覺開發成果。",
    contentBlocks: [
      {
        type: "gallery",
        items: [
          {
            eyebrow: "Future Reproduction",
            title: "Artificial Reproductionl / 人工繁衍系統",
            description:
              "未來人類透過機械系統進行人工受孕，生命的誕生成為被科技控制與管理的流程。",
            image: "/projects/dome/final-01.webp",
            visual: "dome-final-visual-01",
          },
          {
            eyebrow: "Micro Process",
            title: "Fertilization Process / 受精過程",
            description:
              "以微觀視角呈現卵子被注入精子的瞬間，說明 DOME 世界中人類繁衍方式的科技化轉變。",
            image: "/projects/dome/final-02.webp",
            visual: "dome-final-visual-01",
          },
          {
            eyebrow: "Final Visual",
            title: "Birth Chamber / 誕生艙室",
            description:
              "描繪在人工繁衍艙中誕生的瞬間，以模糊光影與濕冷質感呈現生命被系統製造出的不安感。",
            image: "/projects/dome/final-03.webp",
            visual: "dome-final-visual-01",
          },
          {
            eyebrow: "Final Visual",
            title: "Anomalous Birth / 異常誕生",
            description:
              "透過異常的頭部比例、蒼白膚色與天真的表情，呈現男孩介於人類與實驗產物之間的不安存在。",
            image: "/projects/dome/final-04.webp",
            visual: "dome-final-visual-01",
          },
        ],
      },
    ],
  },
];

export const domeProject: Project = {
  slug: "dome-animation-concept",
  ...projectImageAssets["dome-animation-concept"],
  visualFallback: "dome-hero",
  caseStudySections: domeCaseStudySections,
  title: "DOME",
  subtitle: "Original Animation Concept",
  eyebrow: "Original Animation Concept / Visual Development / Character Design",
  description:
    "以情感記憶、人類演化與機器文明為核心，透過角色、場景與世界觀設定，探索科技、倫理與人性抉擇之間的關係。",
  role: "Concept Design / Visual Development",
  scope: "Story Concept / Character Design / Worldbuilding / Key Visual",
  timeline: "Personal Project",
  year: "2026",
  duration: "Original concept",
  summary:
    "DOME 是以情感記憶、人類演化與機器文明為核心的原創動畫概念作品，透過角色、場景與世界觀設定建立完整視覺方向。",
  challenge:
    "如何將抽象的科技倫理、情感記憶與人類演化命題，轉化為可被理解的角色、場景與視覺氛圍。",
  outcome:
    "整理故事概念、角色設計、美術方向與最終視覺，建立 DOME 作為原創動畫概念作品的世界觀與視覺基礎。",
  metrics: [
    { label: "Story arcs", value: "1" },
    { label: "Visual sets", value: "4" },
    { label: "Final visuals", value: "2" },
  ],
  tags: [
    "Original Concept",
    "Animation",
    "Visual Development",
    "Character Design",
    "Worldbuilding",
  ],
  tools: ["Photoshop", "Illustrator", "Maya", "ZBrush"],
  process: [
    "整理情感記憶、人類演化與機器文明之間的世界觀命題。",
    "探索角色輪廓、服裝、裝備與場景氛圍，建立動畫概念的視覺方向。",
    "將故事核心收斂為角色、場景與主視覺，形成可展示的創作成果。",
  ],
  deliverables: [
    "Story Concept",
    "Character Design",
    "Visual Direction",
    "Final Visuals",
  ],
  theme: {
    primary: "#1E293B",
    secondary: "#64748B",
    accent: "#38BDF8",
  },
};
