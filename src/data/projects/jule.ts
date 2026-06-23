import type { CaseStudySection, Project } from "../types";
import { projectImageAssets } from "./assets";

const juleCaseStudySections: CaseStudySection[] = [
  {
    number: "01",
    title: "Project Overview",
    subtitle: "專案概覽",
    type: "overview",
    description:
      "聚樂電商以「歡樂、活潑」作為品牌核心，本專案延續其品牌精神，設計網站主視覺與 UI 介面，並依照團購與電商購物情境，重新規劃瀏覽、選購、結帳與優惠折抵流程，提升整體購買體驗。",
    contentBlocks: [
      {
        type: "facts",
        items: [
          { label: "Project", value: "聚樂電商" },
          { label: "Role", value: "UI/UX · Visual · Front-end Layout" },
          { label: "Platform", value: "Responsive E-commerce" },
          { label: "Framework", value: "Bootstrap 5" },
        ],
      },
      {
        type: "cards",
        columns: 3,
        items: [
          {
            title: "品牌視覺延伸",
            description:
              "延續歡樂、活潑的品牌精神，建立主視覺、活動標籤與商品展示語言。",
            icon: "palette",
          },
          {
            title: "團購購物體驗",
            description:
              "依照團購情境整理商品探索、規格選擇、購物車與結帳路徑。",
            icon: "workflow",
          },
          {
            title: "設計落地",
            description:
              "使用 Bootstrap 5 進行 RWD 切版，讓視覺稿能轉化為可維護的前端結構。",
            icon: "code",
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
      "設計需要同時維持品牌的活潑辨識度、商品資訊的清楚度，以及多種折扣機制下的結帳透明度。",
    contentBlocks: [
      {
        type: "cards",
        columns: 2,
        items: [
          {
            eyebrow: "Challenge 01",
            title: "品牌感與購物效率平衡",
            description:
              "介面需要延續歡樂活潑的品牌個性，同時維持清楚的商品瀏覽與購買效率。",
            icon: "palette",
          },
          {
            eyebrow: "Challenge 02",
            title: "團購情境資訊較多",
            description:
              "商品、活動、價格與購買條件需要被清楚呈現，避免使用者在選購時產生理解成本。",
            icon: "layers",
          },
          {
            eyebrow: "Challenge 03",
            title: "優惠機制需清楚整合",
            description:
              "回饋點數與折價券折扣需要自然納入結帳流程，讓使用者理解套用狀態與最終金額。",
            icon: "workflow",
          },
          {
            eyebrow: "Challenge 04",
            title: "RWD 與前端實作一致性",
            description:
              "頁面需使用 Bootstrap 5 進行切版，並在桌機與行動裝置上維持一致的瀏覽與操作體驗。",
            icon: "code",
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
      "以品牌感吸引瀏覽，以清楚資訊協助選購，再以透明優惠與結帳回饋促成購買。",
    contentBlocks: [
      {
        type: "design-goals",
        previewImage: "/projects/jule-ecommerce/design-goals.webp",
        previewVisual: "jule-homepage",
        goals: [
          {
            title: "延續品牌活潑感",
            description:
              "以明亮、親和且具活動感的視覺語言，建立符合品牌精神的電商介面。",
            icon: "layers",
          },
          {
            title: "提升商品瀏覽效率",
            description:
              "讓商品列表、詳情與活動資訊更容易閱讀與比較。",
            icon: "navigation",
          },
          {
            title: "清楚呈現優惠折抵",
            description:
              "將點數、折價券與金額明細整合至購物與結帳流程。",
            icon: "check",
          },
          {
            title: "落實 RWD 切版",
            description:
              "透過 Bootstrap 5 建立可響應、可維護的前端頁面。",
            icon: "navigation",
          },
        ],
      },
    ],
  },
  {
    number: "04",
    title: "Visual Direction",
    subtitle: "視覺方向",
    type: "visual-direction",
    description:
      "視覺設計延續聚樂「歡樂、活潑」的品牌精神，透過明亮色彩、圓角元素、活動感 Banner 與親和的商品卡片設計，建立更具吸引力的電商首頁與商品瀏覽體驗。",
    contentBlocks: [
      {
        type: "visual-showcase",
        layout: "hero-grid",
        items: [
          {
            title: "Homepage Visual",
            description:
              "整合主視覺 Banner、團購活動、熱門商品與購物 CTA，建立品牌第一印象。",
            image: "/projects/jule-ecommerce/homepage.webp",
            visual: "jule-homepage",
          },
          {
            title: "Visual Direction",
            description:
              "整理品牌色彩、促銷標籤、圓潤卡片、商品攝影框架與文字層級。",
            image: "/projects/jule-ecommerce/visual-direction.webp",
            visual: "jule-visual-direction",
          },
        ],
      },
    ],
  },
  {
    number: "05",
    title: "Shopping Flow",
    subtitle: "購物流程設計",
    type: "shopping-experience",
    description:
      "購物流程依照團購與一般電商情境進行整理，讓使用者能從商品瀏覽、商品詳情、加入購物車到結帳確認，逐步完成購買任務。",
    contentBlocks: [
      {
        type: "visual-showcase",
        layout: "two-column",
        items: [
          {
            title: "Product List",
            description:
              "以活動標籤、價格、銷售進度與快速操作提升團購商品的掃讀效率。",
            image: "/projects/jule-ecommerce/product-list.webp",
            visual: "jule-product-list",
          },
          {
            title: "Product Detail",
            description:
              "整合商品圖、規格選擇、數量、活動倒數與購買 CTA。",
            image: "/projects/jule-ecommerce/product-detail.webp",
            visual: "jule-product-detail",
          },
          {
            title: "Shopping Cart",
            description:
              "集中管理商品規格、數量、小計、優惠提示與前往結帳操作。",
            image: "/projects/jule-ecommerce/cart.webp",
            visual: "jule-cart",
          },
          {
            title: "Checkout",
            description:
              "將收件資料、付款方式、訂單明細與總金額整理為清楚的確認階段。",
            image: "/projects/jule-ecommerce/checkout.webp",
            visual: "jule-checkout",
          },
        ],
      },
    ],
  },
  {
    number: "06",
    title: "Rewards & Coupons",
    subtitle: "點數與折價券流程",
    type: "checkout-experience",
    description:
      "購物流程中整合回饋點數與折價券折扣，讓使用者能在結帳時清楚查看可使用優惠、折抵金額與最終付款金額，降低優惠規則造成的理解成本。",
    contentBlocks: [
      {
        type: "visual-showcase",
        layout: "hero-grid",
        items: [
          {
            title: "Rewards & Coupons",
            description:
              "呈現可用點數、折價券選擇、折扣套用狀態與不可使用提示。",
            image: "/projects/jule-ecommerce/rewards-coupons.webp",
            visual: "jule-rewards-coupons",
          },
          {
            title: "Checkout Summary",
            description:
              "同步更新金額明細、優惠折抵與最終付款金額。",
            image: "/projects/jule-ecommerce/checkout.webp",
            visual: "jule-checkout",
          },
        ],
      },
    ],
  },
  {
    number: "07",
    title: "RWD & Bootstrap Layout",
    subtitle: "RWD 與 Bootstrap 5 切版",
    type: "frontend-layout",
    description:
      "本專案使用 Bootstrap 5 進行頁面切版，依照桌機與行動裝置購物情境調整商品列表、購物車與結帳頁面排列，確保介面在不同螢幕尺寸下仍維持清楚的閱讀與操作體驗。",
    contentBlocks: [
      {
        type: "visual-showcase",
        layout: "two-column",
        items: [
          {
            title: "Bootstrap 5 Layout",
            description:
              "以 container、grid、utility 與元件結構支援設計稿落地與後續維護。",
            image: "/projects/jule-ecommerce/bootstrap-layout.webp",
            visual: "jule-bootstrap-layout",
          },
          {
            title: "Mobile Shopping Flow",
            description:
              "展示手機版商品瀏覽、詳情、購物車與結帳內容的響應式排列。",
            image: "/projects/jule-ecommerce/mobile-rwd.webp",
            visual: "jule-mobile-rwd",
          },
        ],
      },
    ],
  },
  {
    number: "08",
    title: "Final Design & Reflection",
    subtitle: "最終設計與反思",
    type: "reflection",
    description:
      "這次專案讓我更明確理解到，電商設計不只是建立吸引人的視覺畫面，也需要讓購物流程、優惠規則與付款資訊被清楚理解。尤其在導入回饋點數與折價券折扣後，介面需要在品牌活潑感與資訊清楚度之間取得平衡，才能讓使用者更安心地完成購買。",
    contentBlocks: [
      {
        type: "gallery",
        items: [
          {
            title: "Homepage & Campaign",
            description:
              "以主視覺、團購活動與熱門商品建立活潑且具導購力的首頁。",
            image: "/projects/jule-ecommerce/final-ui-01.webp",
            visual: "jule-final-ui-01",
          },
          {
            title: "Shopping & Checkout",
            description:
              "將商品選購、優惠折抵與付款摘要整合為清楚的購物體驗。",
            image: "/projects/jule-ecommerce/final-ui-02.webp",
            visual: "jule-final-ui-02",
          },
          {
            title: "Product Discovery",
            description:
              "透過商品分類、活動標籤與商品卡片支援快速比較。",
            image: "/projects/jule-ecommerce/final-ui-03.webp",
            visual: "jule-product-list",
          },
          {
            title: "Checkout Experience",
            description:
              "清楚呈現回饋點數、折價券、運費與最終付款金額。",
            image: "/projects/jule-ecommerce/final-ui-04.webp",
            visual: "jule-checkout",
          },
        ],
      },
    ],
  },
];

export const juleProject: Project = {
    slug: "jule-ecommerce",
    isHidden: true,
    ...projectImageAssets["jule-ecommerce"],
    visualFallback: "jule-hero",
    caseStudySections: juleCaseStudySections,
    title: "聚樂電商",
    subtitle: "Group-buying E-commerce Experience",
    eyebrow: "活潑品牌電商的視覺設計與購物流程優化",
    description:
      "延續歡樂活潑的品牌精神，整合商品瀏覽、購物車、優惠折抵與結帳流程，建立清楚且具導購力的響應式電商體驗。",
    role: "UI/UX Design / Visual Design / Front-end Layout",
    scope: "首頁 / 商品頁 / 購物車 / 結帳",
    timeline: "Project-based",
    year: "2026",
    duration: "E-commerce design",
    summary:
      "延續「歡樂、活潑」的品牌精神，設計網站主視覺與 UI 介面，並規劃符合團購情境的購物流程，提升整體瀏覽與購買體驗。",
    challenge:
      "需要在活潑促銷視覺、高密度商品資訊與團購情境之間建立清楚層級，並讓回饋點數、折價券與最終付款金額在結帳時容易理解。",
    outcome:
      "完成品牌主視覺、商品瀏覽、購物車、結帳與優惠折抵流程，並以 Bootstrap 5 建立可開發、可維護且支援多裝置的響應式版型。",
    metrics: [
      { label: "Core flows", value: "4" },
      { label: "Discount types", value: "2" },
      { label: "Sections", value: "8" },
    ],
    tags: [
      "UI/UX Design",
      "Visual Design",
      "E-commerce Design",
      "Shopping Flow",
      "Bootstrap 5 Layout",
    ],
    tools: ["Figma", "Photoshop", "Illustrator", "Bootstrap 5"],
    process: [
      "設計網站主視覺與商品展示介面，延伸歡樂、活潑的品牌視覺語言。",
      "規劃商品瀏覽、購物車、回饋點數、折價券與結帳流程。",
      "使用 Bootstrap 5 進行 RWD 頁面切版，協助設計落實為可維護的前端版型。",
    ],
    deliverables: [
      "Visual Design",
      "Shopping Flow",
      "RWD",
      "Bootstrap 5 Layout",
    ],
    theme: {
      primary: "#f06449",
      secondary: "#ffbe3d",
      accent: "#7257d9",
    },
    reflection: [
      "品牌視覺需要一路延伸到商品卡片、優惠提示與結帳回饋，才能形成完整一致的購物體驗。",
      "點數與折價券機制若缺乏即時金額回饋，容易增加使用者在付款前的不確定感。",
      "實際參與 Bootstrap 5 切版，有助於在設計階段更早考量 breakpoint、內容優先順序與元件維護性。",
    ],
  };
