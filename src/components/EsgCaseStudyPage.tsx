import type { ReactNode } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Layers3,
  MapPinned,
  Palette,
  RefreshCw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { DesignSystemPage } from "@/components/DesignSystemPage";
import { InteractiveSitemap } from "@/components/InteractiveSitemap";
import type { Project } from "@/data/projects";

const overviewCards = [
  {
    title: "平台定位",
    body: "協助企業探索森林與自然碳匯相關 ESG 專案，建立企業與專案標的之間的媒合入口。",
  },
  {
    title: "使用情境",
    body: "企業可透過條件篩選、列表查詢與地圖查詢，理解不同專案的位置、類型與合作資訊。",
  },
  {
    title: "設計目標",
    body: "建立清楚、可信任且易於維護的介面系統，支援前台展示、管理頁面與後續功能擴充。",
  },
];

const roleCards = [
  {
    icon: Palette,
    title: "UI Design",
    body: "負責平台主要頁面視覺設計、資訊層級整理與介面規劃。",
  },
  {
    icon: Layers3,
    title: "Design System",
    body: "整理色彩、字級、間距、按鈕、表單、卡片與表格等基礎元件。",
  },
  {
    icon: Code2,
    title: "Front-end Layout Support",
    body: "參與部分前台頁面切版，協助將 Figma 設計稿轉換為 HTML / CSS 結構。",
  },
  {
    icon: ShieldCheck,
    title: "Accessibility AA",
    body: "配合無障礙規範調整文字對比、表單狀態、按鈕回饋與操作提示。",
  },
  {
    icon: RefreshCw,
    title: "CI Refresh",
    body: "因應專案中途品牌 CI 更新，協助調整既有頁面與元件視覺。",
  },
];

const challengeCards = [
  {
    index: "Challenge 01",
    title: "資訊量大，需快速理解",
    body: "平台包含多角色、多頁面與多種資料類型，包含專案資訊、查詢條件、地圖資料、ESG 成果與憑證資訊，因此需要建立清楚的資訊層級與瀏覽節奏。",
  },
  {
    index: "Challenge 02",
    title: "符合無障礙 AA 規範",
    body: "介面設計需兼顧文字可讀性、色彩對比、表單提示、按鈕狀態與操作回饋，讓使用者在不同情境下都能清楚辨識資訊。",
  },
  {
    index: "Challenge 03",
    title: "專案中途遇到 CI 更新",
    body: "專案進行期間品牌視覺進行更新，導致既有頁面、色彩、元件與視覺資產需要同步調整，也考驗設計系統的延展性與維護效率。",
  },
  {
    index: "Challenge 04",
    title: "整合地理圖資查詢",
    body: "平台同時支援列表查詢與地圖查詢，因此設計上需要讓搜尋條件、專案資訊與地理位置能夠清楚連動。",
  },
];

const researchPairs = [
  ["物件列表", "ESG 專案列表"],
  ["地圖查詢", "林地位置查詢"],
  ["篩選條件", "專案條件篩選"],
  ["物件詳情", "專案資訊詳情"],
  ["收藏物件", "收藏 / 媒合申請"],
];

const userFlow = [
  "企業進入平台",
  "選擇查詢方式",
  "使用條件篩選或地圖查詢",
  "查看專案資訊",
  "收藏或申請媒合",
  "查看 ESG 成果",
  "查詢 ESG 憑證",
];

const iaGroups = [
  {
    title: "Public Pages / 公開資訊",
    items: ["政策說明", "專案方法介紹", "媒合流程介紹", "企業 ESG 成果展示", "Q&A"],
  },
  {
    title: "Matching Features / 媒合功能",
    items: ["物件查詢", "地圖查詢", "物件詳情", "媒合申請", "收藏物件"],
  },
  {
    title: "Member / Management / 會員與管理",
    items: ["個人最新消息", "ESG 憑證查詢", "系統管理", "使用者中心"],
  },
];

const keyFeatures = [
  {
    number: "Feature 01",
    title: "物件查詢",
    body: "使用者可透過地區、類型、關鍵字與排序條件查詢 ESG 專案標的，快速找到合適的合作機會。",
    kind: "list" as const,
  },
  {
    number: "Feature 02",
    title: "地圖查詢",
    body: "地圖模式協助使用者從空間位置理解專案分布與區域條件，補足列表查詢無法呈現的地理脈絡。",
    kind: "map" as const,
  },
  {
    number: "Feature 03",
    title: "ESG 成果展示",
    body: "透過數據摘要、精選物件、最新消息與相關連結，提升平台的專業感與永續成果的展示性。",
    kind: "home" as const,
  },
  {
    number: "Feature 04",
    title: "ESG 憑證查詢",
    body: "提供企業後續查詢憑證編號、發放日期、有效期限、狀態與相關詳細資料的入口。",
    kind: "certificate" as const,
  },
];

const designSystemNotes = [
  {
    title: "Color & Typography",
    body: "透過統一色彩與字級層級，讓平台在大量資訊呈現下仍維持清楚的閱讀節奏與品牌一致性。",
  },
  {
    title: "Core Components",
    body: "將高頻使用的查詢、篩選、卡片、表格與分頁整理為可重複使用元件，支援前台頁面與管理頁面延伸。",
  },
  {
    title: "Accessibility States",
    body: "針對按鈕、表單與狀態元件補上 hover、focus、disabled 與 error 狀態，協助符合無障礙 AA 規範。",
  },
];

const galleryItems = [
  {
    title: "首頁 / ESG 成果展示",
    caption: "整合 ESG 專案摘要、精選內容與成果入口，讓企業快速理解平台價值。",
    kind: "home" as const,
  },
  {
    title: "登入身分選擇",
    caption: "依照企業、管理者與一般使用者角色，建立清楚的進入路徑。",
    kind: "login" as const,
  },
  {
    title: "物件列表查詢",
    caption: "透過列表卡片、篩選條件與排序，協助使用者比較不同 ESG 專案。",
    kind: "list" as const,
  },
  {
    title: "物件地圖查詢",
    caption: "以地理位置補足專案查詢脈絡，讓使用者理解區域與專案分布。",
    kind: "map" as const,
  },
  {
    title: "個人最新消息",
    caption: "集中呈現申請進度、平台通知與後續行動，降低使用者追蹤成本。",
    kind: "news" as const,
  },
  {
    title: "ESG 憑證查詢",
    caption: "提供憑證編號、狀態與有效期限查詢，提升專案成果的可信度。",
    kind: "certificate" as const,
  },
];

const handoffTags = ["HTML", "CSS", "RWD", "Design Handoff", "Accessibility States"];

const outcomes = [
  {
    title: "提升介面一致性",
    body: "透過統一色彩、字級、元件與狀態規範，讓不同頁面保持一致的操作體驗。",
  },
  {
    title: "支援後續擴充",
    body: "將高頻使用介面整理為可重複使用元件，方便後續頁面與功能延伸。",
  },
  {
    title: "縮短設計與開發落差",
    body: "透過參與部分前台切版，更能在設計階段考量實作可行性與維護性。",
  },
];

type ScreenKind = "home" | "login" | "list" | "map" | "news" | "certificate";

function CaseSection({
  title,
  description,
  children,
  compact = false,
}: {
  title: string;
  description?: string;
  children: ReactNode;
  compact?: boolean;
}) {
  return (
    <section className={compact ? "space-y-5" : "space-y-6 md:space-y-8"}>
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyanline">
          Case Study
        </p>
        <h2 className="mt-3 text-2xl font-semibold leading-tight text-slate-950 md:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-base leading-8 text-slate-600">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

function TextCard({
  title,
  body,
  eyebrow,
  icon,
}: {
  title: string;
  body: string;
  eyebrow?: string;
  icon?: ReactNode;
}) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        {icon ? (
          <div className="grid size-10 shrink-0 place-items-center rounded-lg border border-teal-100 bg-teal-50 text-cyanline">
            {icon}
          </div>
        ) : null}
        <div>
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyanline">
              {eyebrow}
            </p>
          ) : null}
          <h3 className={eyebrow ? "mt-2 text-lg font-semibold text-slate-950" : "text-lg font-semibold text-slate-950"}>
            {title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{body}</p>
        </div>
      </div>
    </article>
  );
}

function ScreenMockup({ kind }: { kind: ScreenKind }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-slate-200 bg-[#f7fbf8] shadow-sm">
      <div className="absolute inset-x-0 top-0 flex h-10 items-center gap-2 border-b border-slate-200 bg-white px-4">
        <span className="size-2 rounded-full bg-red-300" />
        <span className="size-2 rounded-full bg-amber-300" />
        <span className="size-2 rounded-full bg-emerald-400" />
        <span className="ml-3 h-3 w-32 rounded-full bg-slate-100" />
      </div>
      <div className="absolute inset-x-0 bottom-0 top-10 p-4">
        {kind === "home" ? <HomePreview /> : null}
        {kind === "login" ? <LoginPreview /> : null}
        {kind === "list" ? <ListPreview /> : null}
        {kind === "map" ? <MapPreview /> : null}
        {kind === "news" ? <NewsPreview /> : null}
        {kind === "certificate" ? <CertificatePreview /> : null}
      </div>
    </div>
  );
}

function HomePreview() {
  return (
    <div className="grid h-full gap-3 md:grid-cols-[1fr_0.75fr]">
      <div className="rounded-lg bg-gradient-to-br from-teal-700 to-emerald-500 p-4 text-white">
        <div className="h-3 w-24 rounded-full bg-white/45" />
        <div className="mt-8 h-8 w-48 rounded-full bg-white/80" />
        <div className="mt-3 h-3 w-56 rounded-full bg-white/45" />
        <div className="mt-8 grid grid-cols-3 gap-2">
          {[1, 2, 3].map((item) => (
            <div key={item} className="h-12 rounded-lg bg-white/20" />
          ))}
        </div>
      </div>
      <div className="grid gap-3">
        <div className="rounded-lg border border-slate-200 bg-white p-3">
          <div className="h-3 w-24 rounded-full bg-slate-200" />
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[1, 2, 3].map((item) => (
              <div key={item} className="h-14 rounded-lg bg-teal-50" />
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-3">
          <div className="h-3 w-28 rounded-full bg-slate-200" />
          <div className="mt-4 space-y-2">
            <div className="h-3 rounded-full bg-slate-100" />
            <div className="h-3 w-3/4 rounded-full bg-slate-100" />
          </div>
        </div>
      </div>
    </div>
  );
}

function LoginPreview() {
  return (
    <div className="grid h-full place-items-center">
      <div className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mx-auto size-12 rounded-full bg-teal-50" />
        <div className="mx-auto mt-4 h-4 w-40 rounded-full bg-slate-200" />
        <div className="mt-6 grid gap-3">
          {["企業使用者", "管理者", "一般訪客"].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-lg border border-slate-200 p-3">
              <div className="size-8 rounded-lg bg-teal-50" />
              <div className="h-3 w-24 rounded-full bg-slate-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ListPreview() {
  return (
    <div className="grid h-full gap-3 md:grid-cols-[13rem_1fr]">
      <aside className="rounded-lg border border-slate-200 bg-white p-3">
        <div className="h-3 w-24 rounded-full bg-slate-200" />
        <div className="mt-5 space-y-3">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="h-8 rounded-lg bg-slate-50" />
          ))}
        </div>
      </aside>
      <div className="grid gap-3">
        {[1, 2, 3].map((item) => (
          <div key={item} className="grid grid-cols-[7rem_1fr] gap-3 rounded-lg border border-slate-200 bg-white p-3">
            <div className="rounded-lg bg-gradient-to-br from-emerald-100 to-teal-200" />
            <div>
              <div className="h-3 w-40 rounded-full bg-slate-200" />
              <div className="mt-3 h-3 w-28 rounded-full bg-teal-100" />
              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="h-8 rounded-lg bg-slate-50" />
                <div className="h-8 rounded-lg bg-slate-50" />
                <div className="h-8 rounded-lg bg-slate-50" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MapPreview() {
  return (
    <div className="relative h-full overflow-hidden rounded-lg border border-slate-200 bg-[#e9f5ef]">
      <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_0_46%,rgba(19,125,106,0.18)_46%_48%,transparent_48%_100%),linear-gradient(120deg,transparent_0_58%,rgba(128,202,206,0.3)_58%_60%,transparent_60%_100%)]" />
      <div className="absolute left-4 top-4 w-56 rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
        <div className="h-3 w-24 rounded-full bg-slate-200" />
        <div className="mt-3 grid gap-2">
          <div className="h-8 rounded-lg bg-slate-50" />
          <div className="h-8 rounded-lg bg-slate-50" />
        </div>
      </div>
      {[["70%", "28%"], ["58%", "62%"], ["82%", "52%"], ["42%", "38%"]].map(
        ([left, top]) => (
          <div
            key={`${left}-${top}`}
            className="absolute grid size-9 place-items-center rounded-full bg-cyanline text-white shadow-lg"
            style={{ left, top }}
          >
            <MapPinned className="size-4" aria-hidden="true" />
          </div>
        ),
      )}
    </div>
  );
}

function NewsPreview() {
  return (
    <div className="grid h-full gap-3">
      <div className="rounded-lg border border-slate-200 bg-white p-4">
        <div className="h-4 w-36 rounded-full bg-slate-200" />
        <div className="mt-4 grid gap-3">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
              <div className="size-9 rounded-full bg-teal-100" />
              <div className="flex-1">
                <div className="h-3 w-2/3 rounded-full bg-slate-200" />
                <div className="mt-2 h-2 w-1/2 rounded-full bg-slate-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CertificatePreview() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="h-4 w-36 rounded-full bg-slate-200" />
          <div className="mt-2 h-3 w-24 rounded-full bg-teal-100" />
        </div>
        <div className="h-10 w-48 rounded-lg border border-slate-200 bg-slate-50" />
      </div>
      <div className="mt-5 overflow-hidden rounded-lg border border-slate-200">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="grid grid-cols-5 gap-3 border-b border-slate-200 p-3 last:border-b-0">
            <div className="h-3 rounded-full bg-slate-100" />
            <div className="h-3 rounded-full bg-slate-100" />
            <div className="h-3 rounded-full bg-slate-100" />
            <div className="h-3 rounded-full bg-teal-100" />
            <div className="h-3 rounded-full bg-slate-100" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function EsgCaseStudyPage({ project }: { project: Project }) {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl space-y-14 px-4 sm:px-6 lg:px-8">
          <CaseSection
            title="Project Overview / 專案概述"
            description="ESG 林地媒合平台需要整合政策資訊、林地標的、媒合流程、地圖查詢、成果展示與憑證查詢等多種內容。設計上需要在資訊量較大的情況下，讓企業使用者能快速理解平台功能，並找到適合的 ESG 專案合作機會。"
          >
            <div className="grid gap-4 md:grid-cols-3">
              {overviewCards.map((card) => (
                <TextCard key={card.title} {...card} />
              ))}
            </div>
          </CaseSection>

          <CaseSection
            title="My Role / 我的角色"
            description="在此專案中，我負責 UI 設計、Design System 整理、部分前台切版，以及品牌 CI 更新後的視覺調整。同時也配合無障礙 AA 規範，檢查介面的可讀性、互動狀態與元件一致性。"
          >
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {roleCards.map((card) => {
                const Icon = card.icon;
                return (
                  <TextCard
                    key={card.title}
                    title={card.title}
                    body={card.body}
                    icon={<Icon className="size-5" aria-hidden="true" />}
                  />
                );
              })}
            </div>
          </CaseSection>

          <CaseSection title="Design Challenge / 設計挑戰">
            <div className="grid gap-4 md:grid-cols-2">
              {challengeCards.map((card) => (
                <TextCard
                  key={card.index}
                  eyebrow={card.index}
                  title={card.title}
                  body={card.body}
                />
              ))}
            </div>
          </CaseSection>

          <CaseSection
            title="Competitive Research / 競品參考"
            description="由於 ESG 專案標的與房地產物件具有相似的瀏覽邏輯，都需要被查詢、篩選、比較與查看詳情，因此我參考房地產平台的物件查詢模式，觀察其如何透過列表卡片、地圖、篩選條件與詳情頁，協助使用者快速理解不同標的之間的差異。"
          >
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr]">
                <div className="rounded-lg bg-slate-50 p-4">
                  <p className="font-semibold text-slate-950">
                    Real Estate Search Pattern
                  </p>
                </div>
                <div className="hidden items-center justify-center text-cyanline md:flex">
                  <ArrowRight className="size-5" aria-hidden="true" />
                </div>
                <div className="rounded-lg bg-teal-50 p-4">
                  <p className="font-semibold text-slate-950">
                    ESG Project Search Pattern
                  </p>
                </div>
              </div>
              <div className="mt-4 grid gap-3">
                {researchPairs.map(([source, target]) => (
                  <div
                    key={source}
                    className="grid gap-3 rounded-lg border border-slate-200 p-3 md:grid-cols-[1fr_auto_1fr]"
                  >
                    <p className="text-sm text-slate-600">{source}</p>
                    <ArrowRight className="hidden size-4 text-cyanline md:block" aria-hidden="true" />
                    <p className="text-sm font-medium text-slate-950">{target}</p>
                  </div>
                ))}
              </div>
            </div>
          </CaseSection>

          <CaseSection title="User Flow / 使用流程">
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div className="grid gap-3 md:grid-cols-7">
                {userFlow.map((step, index) => (
                  <div key={step} className="relative">
                    <div className="flex h-full min-h-24 flex-col rounded-lg border border-slate-200 bg-slate-50 p-4">
                      <span className="text-xs font-semibold text-cyanline">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="mt-3 text-sm font-semibold leading-6 text-slate-950">
                        {step}
                      </p>
                    </div>
                    {index < userFlow.length - 1 ? (
                      <ArrowRight className="mx-auto my-2 size-4 text-cyanline md:absolute md:-right-3 md:top-1/2 md:my-0 md:-translate-y-1/2" aria-hidden="true" />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </CaseSection>

          <CaseSection
            title="Information Architecture / 資訊架構"
            description="先以公開內容、媒合功能與會員管理三個層級整理平台，再透過互動式 Sitemap 呈現九大主模組之間的包含關係。"
          >
            <div className="grid gap-4 md:grid-cols-3">
              {iaGroups.map((group) => (
                <article key={group.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-950">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-slate-600">
                        <CheckCircle2 className="size-4 flex-none text-mint" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            {project.sitemap?.length ? (
              <div className="mt-5">
                <InteractiveSitemap />
              </div>
            ) : null}
          </CaseSection>

          <CaseSection title="Key Features / 核心功能">
            <div className="grid gap-5">
              {keyFeatures.map((feature, index) => (
                <article
                  key={feature.title}
                  className="grid gap-5 rounded-lg border border-slate-200 bg-white p-5 shadow-sm lg:grid-cols-[0.85fr_1.15fr] lg:items-center"
                >
                  <div className={index % 2 ? "lg:order-2" : ""}>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyanline">
                      {feature.number}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-slate-950">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {feature.body}
                    </p>
                  </div>
                  <ScreenMockup kind={feature.kind} />
                </article>
              ))}
            </div>
          </CaseSection>

          <CaseSection
            title="Design System / 設計系統"
            description="由於此平台包含多角色使用情境與較高資訊密度，我整理了基礎 Design System，涵蓋色彩、字級、間距與可重複使用元件。核心元件包含全站導覽、查詢篩選表單、物件卡片、結果表格、分頁與狀態標籤，以維持前台與管理頁面的操作一致性。"
          >
            <div className="grid gap-4 md:grid-cols-3">
              {designSystemNotes.map((card) => (
                <TextCard key={card.title} {...card} />
              ))}
            </div>
            <div className="mt-5">
              <DesignSystemPage />
            </div>
          </CaseSection>

          <CaseSection title="Final UI Screens / 最終介面">
            <div className="grid gap-5 md:grid-cols-2">
              {galleryItems.map((item) => (
                <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <ScreenMockup kind={item.kind} />
                  <h3 className="mt-4 text-lg font-semibold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.caption}
                  </p>
                </article>
              ))}
            </div>
          </CaseSection>

          <CaseSection
            title="Front-end Layout Support / 前台切版支援"
            description="除了 UI 設計外，我也參與部分前台頁面的切版作業，協助將 Figma 設計稿轉換為 HTML / CSS 結構。過程中需同時考量 RWD、元件一致性、無障礙狀態與前端實作限制，讓設計與開發之間能更有效對齊。"
            compact
          >
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap gap-2">
                {handoffTags.map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </CaseSection>

          <CaseSection
            title="Outcome / Reflection / 成果與反思"
            description="透過此專案，我學習到如何將資訊量較大的平台整理為清楚的使用流程與可重複使用的元件系統。Design System 的整理也讓品牌更新、前台切版與後續頁面延伸更有效率，降低設計與實作之間的落差。"
          >
            <div className="grid gap-4 md:grid-cols-3">
              {outcomes.map((card) => (
                <TextCard
                  key={card.title}
                  title={card.title}
                  body={card.body}
                  icon={<Sparkles className="size-5" aria-hidden="true" />}
                />
              ))}
            </div>
          </CaseSection>
        </div>
      </section>
    </>
  );
}
