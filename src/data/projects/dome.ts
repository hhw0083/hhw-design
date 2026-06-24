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
            image: "/projects/dome/story-concept.webp",
            visual: "dome-story-concept",
            aspectRatio: "16/8",
          },
          {
            title: "Core Conflict / 核心衝突",
            description:
              "角色面對科技、倫理與人性之間的取捨，故事聚焦記憶是否仍代表真正的自我。",
            image: "/projects/dome/final-visual-01.webp",
            visual: "dome-final-visual-01",
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
            image: "/projects/dome/visual-direction.webp",
            visual: "dome-visual-direction",
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
            title: "Character Exploration",
            description:
              "透過比例、輪廓與服裝探索角色定位，區分人類與機器文明之間的視覺差異。",
            image: "/projects/dome/character-design-01.webp",
            visual: "dome-character-design",
          },
          {
            title: "Expression & Details",
            description:
              "以表情、配件與裝備細節補強角色情緒與故事背景。",
            image: "/projects/dome/character-design-02.webp",
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
            eyebrow: "Final Visual",
            title: "Key Visual",
            description:
              "以巨大機器結構與角色對比呈現世界觀壓迫感與核心命題。",
            image: "/projects/dome/final-visual-01.webp",
            visual: "dome-final-visual-01",
          },
          {
            eyebrow: "Final Visual",
            title: "Character & Environment",
            description:
              "整合角色設定與場景氛圍，作為動畫概念的視覺成果展示。",
            image: "/projects/dome/final-visual-02.webp",
            visual: "dome-final-visual-02",
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
