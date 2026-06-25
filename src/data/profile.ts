export const profile = {
  name: "HHW",
  title: "UI/UX Designer",
  location: "Taipei / Remote",
  email: "hhwstudio0083@gmail.com",
  availability: "Open to Product Design roles",
  intro:
    "我專注於整理複雜產品的資訊與流程，讓使用者更容易完成任務，也讓團隊更容易推進開發。",
  bio:
    "專注於研究、資訊架構、互動原型到 Design System ，讓產品在商業目標與使用者體驗之間取得精準平衡。",
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
