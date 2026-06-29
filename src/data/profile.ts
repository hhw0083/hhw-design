export const profile = {
  name: "HHW",
  title: "UI/UX Designer",
  location: "Taipei / Remote",
  email: "hhwstudio0083@gmail.com",
  availability: "Open to Product Design roles",
  intro:
    "從複雜需求與操作流程中梳理設計方向，讓功能、介面與使用體驗之間形成更清楚、自然的連結",
  bio:
    "設計範圍橫跨 UI/UX、品牌識別與視覺設計，曾參與產品介面、電商平台、品牌視覺與 3D 視覺相關專案。擅長從使用情境與操作流程出發，將分散的需求整理成清楚的介面與視覺成果，讓設計不只停留在畫面，也能回到實際情境中被理解、使用與落實。",
};

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
    period: "2024 – 2025",
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
