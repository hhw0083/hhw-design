import type { CSSProperties, ReactNode } from "react";
import {
  ArrowRight,
  Bell,
  Check,
  ChevronDown,
  Heart,
  Info,
  Leaf,
  List,
  Map,
  Search,
  User,
  X,
} from "lucide-react";

const tokens = {
  primaryGreen: "#137D6A",
  secondaryAqua: "#80CACE",
  backgroundIvory: "#FBF9F4",
  neutralGray: "#D7D7D7",
  textPrimary: "#212529",
  textSecondary: "#6B7280",
  border: "#E5E5E5",
  surface: "#FFFFFF",
  accentYellow: "#F2B600",
  notificationRed: "#F05B63",
};

const colorPalette = [
  {
    name: "Primary Green",
    value: tokens.primaryGreen,
    background: "linear-gradient(145deg, #137D6A, #0F6F5D)",
  },
  {
    name: "Secondary Aqua",
    value: tokens.secondaryAqua,
    background: "linear-gradient(145deg, #80CACE, #A9DFDD)",
  },
  {
    name: "Background Ivory",
    value: tokens.backgroundIvory,
    background: "linear-gradient(145deg, #FBF9F4, #F3EFE5)",
  },
  {
    name: "Neutral Gray",
    value: tokens.neutralGray,
    background: "linear-gradient(145deg, #F2F2F2, #CFCFCF)",
  },
];

const uiColors = [
  {
    name: "Text / Primary",
    value: tokens.textPrimary,
    background: "linear-gradient(145deg, #212529, #111827)",
  },
  {
    name: "Text / Secondary",
    value: tokens.textSecondary,
    background: "linear-gradient(145deg, #6B7280, #4B5563)",
  },
  {
    name: "Border",
    value: tokens.border,
    background: "linear-gradient(145deg, #F6F6F6, #E5E5E5)",
  },
  {
    name: "Surface",
    value: tokens.surface,
    background: "#FFFFFF",
  },
  {
    name: "Success",
    value: tokens.primaryGreen,
    background: "linear-gradient(145deg, #137D6A, #0F8E79)",
  },
  {
    name: "Accent",
    value: tokens.accentYellow,
    background: "linear-gradient(145deg, #F2B600, #FFCC35)",
  },
];

const typeScale = [
  { name: "Display", size: "48px" },
  { name: "Page Title", size: "40px" },
  { name: "Section Title", size: "28px" },
  { name: "Card Title", size: "20px" },
  { name: "Body", size: "16px" },
  { name: "Caption", size: "14px" },
  { name: "Label", size: "12px" },
];

const spacingScale = ["4px", "8px", "12px", "16px", "24px", "32px", "48px", "64px"];

const navItems = [
  "政策與指引",
  "解決方案",
  "媒體中心",
  "ESG 成果展示",
  "Q & A",
  "系統管理",
];

const footerGroups = [
  {
    title: "政策與指引",
    links: ["ESG 知識", "法規說明", "作業指引"],
  },
  {
    title: "解決方案",
    links: ["私有林地方案", "公有林地方案", "碳匯方案"],
  },
  {
    title: "媒體中心",
    links: ["最新消息", "公告", "活動"],
  },
  {
    title: "ESG 成果展示",
    links: ["專案查詢", "互動地圖", "ESG 憑證"],
  },
  {
    title: "Q & A",
    links: ["常見問題", "聯絡我們", "意見回饋"],
  },
];

const statusItems = [
  { label: "進行中", tone: "success" as const },
  { label: "符合條件", tone: "green" as const },
  { label: "已完成", tone: "blue" as const },
  { label: "已過期", tone: "neutral" as const },
  { label: "待審核", tone: "warning" as const },
  { label: "已取消", tone: "error" as const },
];

const tableRows = [
  {
    date: "2022/12/20",
    certificate: "0000000000000001",
    company: "Forest & Nature Co., Ltd.",
    status: "有效",
    validUntil: "2024/12/19",
  },
  {
    date: "2022/12/20",
    certificate: "0000000000000002",
    company: "Green Future Ltd.",
    status: "有效",
    validUntil: "2024/12/19",
  },
  {
    date: "2022/12/20",
    certificate: "0000000000000003",
    company: "Eco Solutions Co.",
    status: "已過期",
    validUntil: "2023/12/19",
  },
  {
    date: "2022/12/20",
    certificate: "0000000000000004",
    company: "Sustainable Forest Inc.",
    status: "待審核",
    validUntil: "2024/12/19",
  },
];

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function LeafMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={cx(
        "inline-grid place-items-center rounded-full border border-[#137D6A]/30 bg-[#137D6A]/10 text-[#137D6A]",
        className,
      )}
    >
      <Leaf className="size-5" aria-hidden="true" />
    </span>
  );
}

function BoardShell({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-[24px] border border-[#E5E5E5] bg-[#FBF9F4] p-2 shadow-[0_24px_70px_rgba(33,37,41,0.08)]">
      {children}
    </div>
  );
}

function BoardIntro({
  subtitle,
  description,
}: {
  subtitle: string;
  description: string;
}) {
  return (
    <aside className="relative flex min-h-[22rem] flex-col rounded-[18px] border border-[#E5E5E5] bg-white p-6 shadow-sm md:p-8">
      <p className="text-[40px] font-bold leading-none tracking-[-0.02em] text-[#137D6A]">
        ESG Platform
      </p>
      <p className="mt-3 text-2xl font-light text-[#6B7280]">{subtitle}</p>
      <div className="mt-8 h-1 w-16 rounded-full bg-[#137D6A]" />
      <p className="mt-8 max-w-xs text-base leading-8 text-[#6B7280]">
        {description}
      </p>
      <LeafMark className="mt-auto size-14" />
    </aside>
  );
}

export function ComponentPanel({
  title,
  number,
  className,
  children,
}: {
  title: string;
  number?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <article
      className={cx(
        "rounded-[18px] border border-[#E5E5E5] bg-white p-5 shadow-sm md:p-6",
        className,
      )}
    >
      <h3 className="text-xl font-bold leading-tight text-[#137D6A]">
        {number ? `${number}. ` : ""}
        {title}
      </h3>
      <div className="mt-5">{children}</div>
    </article>
  );
}

export function DesignSystemHero() {
  return (
    <BoardIntro
      subtitle="Design System / 設計系統"
      description="建立清楚、可及且值得信任的 ESG 平台視覺基礎。"
    />
  );
}

export function ColorSwatch({
  name,
  value,
  background,
  compact = false,
}: {
  name: string;
  value: string;
  background: string;
  compact?: boolean;
}) {
  return (
    <div>
      <div
        className={cx(
          "rounded-[12px] border border-black/5 shadow-[0_12px_24px_rgba(33,37,41,0.08)]",
          compact ? "h-20" : "h-28 md:h-32",
        )}
        style={{ background }}
      />
      <p
        className={cx(
          "mt-3 font-semibold leading-5 text-[#212529]",
          compact ? "text-xs" : "text-sm",
        )}
      >
        {name}
      </p>
      <p
        className={cx(
          "mt-1 break-all text-[#6B7280]",
          compact ? "text-xs" : "text-sm",
        )}
      >
        {value}
      </p>
    </div>
  );
}

export function ColorPaletteSection() {
  return (
    <ComponentPanel title="Color Palette / 色彩系統" number="1">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {colorPalette.map((color) => (
          <ColorSwatch key={color.name} {...color} />
        ))}
      </div>
    </ComponentPanel>
  );
}

export function UIColorSection() {
  return (
    <ComponentPanel title="UI Colors / UI 色彩" number="2">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 2xl:grid-cols-6">
        {uiColors.map((color) => (
          <ColorSwatch key={color.name} {...color} compact />
        ))}
      </div>
    </ComponentPanel>
  );
}

export function TypeScaleRow({ name, size }: { name: string; size: string }) {
  return (
    <div className="flex items-center justify-between border-b border-[#E5E5E5] py-2.5 last:border-b-0">
      <span className="text-sm text-[#212529]">{name}</span>
      <span className="text-sm text-[#6B7280]">{size}</span>
    </div>
  );
}

export function TypographySection() {
  return (
    <ComponentPanel title="Typography" number="3">
      <div className="grid gap-6 md:grid-cols-[1fr_1px_1.15fr] md:items-center">
        <div>
          <p className="text-base text-[#212529]">Font Family</p>
          <p className="mt-2 text-2xl font-bold text-[#137D6A]">
            Noto Sans TC
          </p>
          <div className="my-7 h-px bg-[#E5E5E5]" />
          <p className="text-[72px] font-bold leading-none tracking-[-0.04em] text-[#212529] md:text-[96px]">
            Aa
          </p>
        </div>
        <div className="hidden h-full bg-[#E5E5E5] md:block" />
        <div>
          {typeScale.map((type) => (
            <TypeScaleRow key={type.name} {...type} />
          ))}
        </div>
      </div>
    </ComponentPanel>
  );
}

export function TypographyExampleSection() {
  return (
    <ComponentPanel title="Typography Example / 字級範例" number="4">
      <div className="space-y-4">
        <p className="text-[40px] font-bold leading-[1.05] tracking-[-0.02em] text-[#212529] md:text-[48px]">
          森林及自然碳匯專案媒合平台
        </p>
        <p className="text-[28px] font-bold leading-tight text-[#212529]">
          專案查詢與成果展示
        </p>
        <p className="max-w-2xl text-base leading-8 text-[#212529]">
          平台協助企業探索 ESG 專案標的、比較合作機會，並以清楚的資訊層級呈現永續成果。
        </p>
        <p className="text-sm text-[#6B7280]">輔助說明文字範例</p>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#137D6A]">
          LABEL / 狀態標籤
        </p>
      </div>
    </ComponentPanel>
  );
}

function FoundationNotesSection({ className }: { className?: string }) {
  return (
    <ComponentPanel
      title="Foundation Notes / 設計基礎說明"
      number="5"
      className={cx("overflow-hidden", className)}
    >
      <div className="relative flex flex-col gap-5 rounded-[16px] bg-gradient-to-r from-[#137D6A]/10 via-white to-[#80CACE]/20 p-5 md:flex-row md:items-center md:justify-between">
        <div className="absolute inset-y-0 right-0 hidden w-80 opacity-40 md:block">
          <div className="h-full w-full bg-[radial-gradient(circle_at_20%_30%,rgba(19,125,106,0.14)_0_1px,transparent_1px),radial-gradient(circle_at_62%_58%,rgba(128,202,206,0.18)_0_1px,transparent_1px)] bg-[length:28px_28px]" />
        </div>
        <LeafMark className="size-16 shrink-0" />
        <div className="relative max-w-4xl space-y-2 text-sm leading-7 text-[#212529]">
          <p>
            統一核心色彩與字級，支援前台展示頁與管理頁面在不同資訊密度下保持一致。
          </p>
          <p>
            一致的視覺 token 有助於提升可讀性、切版效率與後續維護品質。
          </p>
        </div>
        <div className="relative hidden h-20 w-32 shrink-0 md:block">
          <div className="absolute bottom-3 left-3 h-10 w-24 rounded-full border-b-2 border-[#8F6B3A]/40" />
          <Leaf className="absolute right-8 top-2 size-10 rotate-12 text-[#137D6A]" />
          <Leaf className="absolute right-1 top-7 size-8 rotate-45 text-[#80CACE]" />
          <Leaf className="absolute right-16 top-8 size-7 -rotate-45 text-[#137D6A]/70" />
        </div>
      </div>
    </ComponentPanel>
  );
}

function ColorTypographyBoard() {
  return (
    <BoardShell>
      <div className="grid gap-2 xl:grid-cols-[20rem_minmax(0,1fr)]">
        <DesignSystemHero />
        <div className="grid gap-2 lg:grid-cols-2">
          <ColorPaletteSection />
          <UIColorSection />
          <TypographySection />
          <TypographyExampleSection />
          <FoundationNotesSection className="lg:col-span-2" />
        </div>
      </div>
    </BoardShell>
  );
}

function LabeledDemo({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="mb-2 text-xs font-bold text-[#212529]">{label}</p>
      {children}
    </div>
  );
}

function LogoMark() {
  return (
    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#137D6A] text-white shadow-sm">
      <Leaf className="size-5" aria-hidden="true" />
    </span>
  );
}

export function GlobalNavigationShowcase() {
  return (
    <ComponentPanel title="Global Navigation / 全站導覽" number="1" className="xl:col-span-2">
      <div className="space-y-5">
        <LabeledDemo label="Header / 頁首">
          <header className="flex flex-col gap-3 rounded-[12px] border border-[#E5E5E5] bg-white p-3 shadow-[0_10px_28px_rgba(33,37,41,0.08)] md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <LogoMark />
              <p className="text-lg font-bold text-[#212529]">ESG Platform</p>
            </div>
            <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-[#D7D7D7] px-4 py-2 text-sm text-[#6B7280] md:ml-8">
              <span className="truncate">搜尋平台內容</span>
              <Search className="ml-auto size-4" aria-hidden="true" />
            </div>
            <div className="flex items-center gap-3">
              <button className="relative rounded-full p-2 text-[#6B7280]" aria-label="Notifications">
                <Bell className="size-5" aria-hidden="true" />
                <span className="absolute -right-0.5 -top-0.5 grid size-5 place-items-center rounded-full bg-[#F05B63] text-[10px] font-bold text-white">
                  2
                </span>
              </button>
              <button className="rounded-full px-3 py-2 text-sm font-semibold text-[#212529]">
                登入
              </button>
              <button className="rounded-full bg-[#F2B600] px-4 py-2 text-sm font-bold text-white shadow-sm">
                申請媒合
              </button>
            </div>
          </header>
        </LabeledDemo>

        <LabeledDemo label="Primary Navigation / 主要導覽">
          <nav className="grid gap-1 rounded-[8px] bg-[#137D6A] p-2 text-xs font-bold text-white shadow-sm sm:grid-cols-2 lg:grid-cols-6">
            {navItems.map((item) => (
              <a key={item} className="rounded-[8px] px-3 py-3 text-center hover:bg-white/10" href="#">
                {item}
              </a>
            ))}
          </nav>
        </LabeledDemo>

        <LabeledDemo label="Footer / 頁尾">
          <footer className="rounded-[12px] border border-[#E5E5E5] bg-[#FBF9F4] p-5">
            <div className="grid gap-6 md:grid-cols-[1.2fr_repeat(5,1fr)]">
              <div className="space-y-3">
                <LogoMark />
                <p className="text-xs font-bold text-[#212529]">
                  Forestry and Nature Conservation Agency
                </p>
                <p className="text-xs leading-5 text-[#6B7280]">
                  100024 Taipei City, Zhongzheng District
                  <br />
                  Service Hours: Mon-Fri 09:00-17:00
                </p>
              </div>
              {footerGroups.map((group) => (
                <div key={group.title}>
                  <p className="text-xs font-bold text-[#212529]">{group.title}</p>
                  <ul className="mt-2 space-y-1.5 text-xs text-[#137D6A]">
                    {group.links.map((link) => (
                      <li key={link}>{link}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </footer>
        </LabeledDemo>
      </div>
    </ComponentPanel>
  );
}

function DemoInput({
  placeholder,
  icon = true,
}: {
  placeholder: string;
  icon?: boolean;
}) {
  return (
    <div className="flex h-11 items-center rounded-[8px] border border-[#D7D7D7] bg-white px-3 text-sm text-[#6B7280]">
      <span className="truncate">{placeholder}</span>
      {icon ? <Search className="ml-auto size-4" aria-hidden="true" /> : null}
    </div>
  );
}

function SelectDemo({ label }: { label: string }) {
  return (
    <button className="flex h-11 w-full items-center rounded-[8px] border border-[#D7D7D7] bg-white px-3 text-left text-sm text-[#212529]">
      <span className="truncate">{label}</span>
      <ChevronDown className="ml-auto size-4 text-[#137D6A]" aria-hidden="true" />
    </button>
  );
}

function SegmentControl({
  options,
  active,
}: {
  options: Array<{ label: string; icon?: ReactNode }>;
  active: string;
}) {
  return (
    <div className="inline-grid rounded-[8px] border border-[#D7D7D7] bg-white p-1 sm:auto-cols-fr sm:grid-flow-col">
      {options.map((option) => (
        <button
          key={option.label}
          className={cx(
            "inline-flex items-center justify-center gap-2 rounded-[6px] px-4 py-2 text-sm font-semibold",
            option.label === active
              ? "bg-[#137D6A] text-white"
              : "text-[#6B7280]",
          )}
        >
          {option.icon}
          {option.label}
        </button>
      ))}
    </div>
  );
}

export function SearchFilterShowcase() {
  return (
    <ComponentPanel title="Search & Filter / 查詢與篩選" number="2">
      <div className="grid gap-5 md:grid-cols-2">
        <LabeledDemo label="Search Input / 搜尋欄位">
          <DemoInput placeholder="搜尋專案、企業或指標..." />
        </LabeledDemo>
        <LabeledDemo label="Dropdown / 下拉選單">
          <SelectDemo label="臺北市，全區" />
        </LabeledDemo>
        <LabeledDemo label="Checkbox Filter / 核取篩選">
          <div className="space-y-3">
            {["縣市", "鄉鎮區", "森林類型", "已取得憑證"].map(
              (item, index) => (
                <label key={item} className="flex items-center gap-2 text-sm text-[#212529]">
                  <input
                    type="checkbox"
                    className="size-4 rounded border-[#D7D7D7] accent-[#137D6A]"
                    defaultChecked={index === 0 || index === 2}
                    disabled
                  />
                  {item}
                </label>
              ),
            )}
          </div>
        </LabeledDemo>
        <LabeledDemo label="Search Panel / 查詢面板">
          <div className="rounded-[12px] border border-[#E5E5E5] bg-white p-4 shadow-sm">
            <p className="text-center text-sm font-bold text-[#212529]">
              專案標的查詢
            </p>
            <div className="mx-auto mt-2 h-0.5 w-10 bg-[#F2B600]" />
            <div className="mt-4 space-y-3">
              <SelectDemo label="臺北市，全區" />
              <div className="grid gap-2 sm:grid-cols-[1fr_auto]">
                <DemoInput placeholder="輸入關鍵字，例如專案或企業名稱" icon={false} />
                <button className="inline-flex h-11 items-center justify-center gap-2 rounded-[8px] bg-[#137D6A] px-5 text-sm font-bold text-white">
                  <Search className="size-4" aria-hidden="true" />
                  查詢
                </button>
              </div>
            </div>
          </div>
        </LabeledDemo>
        <LabeledDemo label="Sorting / 排序">
          <SelectDemo label="排序：最新更新" />
        </LabeledDemo>
        <div className="grid gap-4 sm:grid-cols-2 md:col-span-2">
          <LabeledDemo label="View Mode / 檢視模式">
            <SegmentControl
              active="列表檢視"
              options={[
                { label: "列表檢視", icon: <List className="size-4" /> },
                { label: "地圖檢視", icon: <Map className="size-4" /> },
              ]}
            />
          </LabeledDemo>
          <LabeledDemo label="Map Layer / 地圖圖層">
            <SegmentControl
              active="地圖"
              options={[
                { label: "地圖" },
                { label: "衛星" },
              ]}
            />
          </LabeledDemo>
        </div>
      </div>
    </ComponentPanel>
  );
}

export function ButtonsInputsShowcase() {
  return (
    <ComponentPanel title="Buttons & Inputs / 按鈕與輸入" number="3">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <LabeledDemo label="Primary Button / 主要按鈕">
          <button className="h-11 rounded-[8px] bg-[#137D6A] px-6 text-sm font-bold text-white shadow-sm">
            主要按鈕
          </button>
        </LabeledDemo>
        <LabeledDemo label="Secondary / 次要按鈕">
          <button className="h-11 rounded-[8px] border border-[#137D6A] bg-white px-6 text-sm font-bold text-[#137D6A]">
            次要按鈕
          </button>
        </LabeledDemo>
        <LabeledDemo label="CTA Pill Button / 行動按鈕">
          <button className="h-11 rounded-full bg-[#F2B600] px-6 text-sm font-bold text-white shadow-sm">
            立即申請
          </button>
        </LabeledDemo>
        <LabeledDemo label="Text Link / 文字連結">
          <a className="inline-flex items-center gap-2 text-sm font-bold text-[#137D6A]" href="#">
            了解更多
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </LabeledDemo>
        <LabeledDemo label="Input Field / 輸入欄位">
          <DemoInput placeholder="請輸入文字..." icon={false} />
        </LabeledDemo>
        <LabeledDemo label="Icon Button / 圖示按鈕">
          <button className="grid size-11 place-items-center rounded-[8px] border border-[#D7D7D7] bg-white text-[#212529] shadow-sm" aria-label="Favorite">
            <Heart className="size-5" aria-hidden="true" />
          </button>
        </LabeledDemo>
      </div>
    </ComponentPanel>
  );
}

function ForestPreview({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={cx(
        "relative overflow-hidden rounded-[12px] border border-[#E5E5E5] bg-[#80CACE]/30",
        compact ? "h-20 w-24" : "h-44 w-full",
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#bfe4e4_0%,#dff4ef_34%,#97c988_35%,#6ea768_60%,#4f8d5d_100%)]" />
      <div className="absolute inset-x-0 bottom-6 h-12 bg-[repeating-linear-gradient(155deg,rgba(255,255,255,0.25)_0_2px,transparent_2px_15px)]" />
      <div className="absolute left-0 top-12 h-20 w-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.55),transparent_55%)]" />
    </div>
  );
}

export function StatusBadge({
  label,
  tone = "success",
}: {
  label: string;
  tone?: "success" | "green" | "blue" | "neutral" | "warning" | "error";
}) {
  const toneClass = {
    success: "bg-[#137D6A]/10 text-[#137D6A]",
    green: "bg-[#2F855A]/10 text-[#2F855A]",
    blue: "bg-[#2B78C6]/10 text-[#2B78C6]",
    neutral: "bg-[#6B7280]/10 text-[#6B7280]",
    warning: "bg-[#F2B600]/20 text-[#9A6B00]",
    error: "bg-[#F05B63]/10 text-[#C73740]",
  }[tone];

  return (
    <span className={cx("inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold", toneClass)}>
      {tone === "error" ? <X className="size-3" /> : <Check className="size-3" />}
      {label}
    </span>
  );
}

function FavoriteButton({ active = false }: { active?: boolean }) {
  return (
    <button
      className="grid size-9 place-items-center rounded-full border border-[#E5E5E5] bg-white text-[#6B7280] shadow-sm"
      aria-label="Favorite"
    >
      <Heart
        className={cx("size-5", active ? "fill-[#F05B63] text-[#F05B63]" : "")}
        aria-hidden="true"
      />
    </button>
  );
}

export function PropertyCard() {
  return (
    <article className="max-w-[19rem] overflow-hidden rounded-[12px] border border-[#E5E5E5] bg-white shadow-sm">
      <div className="relative">
        <ForestPreview />
        <div className="absolute right-3 top-3">
          <FavoriteButton />
        </div>
        <LeafMark className="absolute bottom-3 left-3 size-10 bg-white" />
      </div>
      <div className="space-y-3 p-4">
        <div>
          <p className="text-sm font-bold text-[#212529]">示範私有林地專案</p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <StatusBadge label="進行中" />
            <span className="text-xs text-[#6B7280]">2024/05/12 更新</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <p className="text-[#6B7280]">減碳效益</p>
            <p className="mt-1 font-bold text-[#212529]">12,450 tCO2e</p>
          </div>
          <div>
            <p className="text-[#6B7280]">狀態</p>
            <p className="mt-1 font-bold text-[#137D6A]">進行中</p>
          </div>
        </div>
        <a className="inline-flex items-center gap-2 text-xs font-bold text-[#137D6A]" href="#">
          View Details <ArrowRight className="size-3" />
        </a>
      </div>
    </article>
  );
}

export function PropertyListItem() {
  return (
    <article className="grid gap-4 rounded-[12px] border border-[#E5E5E5] bg-white p-3 shadow-sm sm:grid-cols-[9rem_1fr_auto]">
      <ForestPreview compact />
      <div className="min-w-0">
        <p className="truncate text-sm font-bold text-[#212529]">
          示範私有林地專案
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          <StatusBadge label="進行中" />
          <span className="text-xs text-[#6B7280]">2024/05/12 更新</span>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-3 text-xs">
          <div>
            <p className="text-[#6B7280]">減碳效益</p>
            <p className="font-bold text-[#137D6A]">12,450</p>
          </div>
          <div>
            <p className="text-[#6B7280]">狀態</p>
            <p className="font-bold text-[#137D6A]">進行中</p>
          </div>
          <div>
            <p className="text-[#6B7280]">SDGs</p>
            <div className="mt-1 flex gap-1">
              {["13", "15", "17"].map((item) => (
                <span key={item} className="grid size-5 place-items-center rounded bg-[#137D6A] text-[10px] font-bold text-white">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FavoriteButton />
    </article>
  );
}

function CompactMapResultCard() {
  return (
    <article className="inline-grid max-w-[16rem] grid-cols-[4.5rem_1fr_auto] gap-3 rounded-[12px] border border-[#E5E5E5] bg-white p-3 shadow-sm">
      <ForestPreview compact />
      <div>
        <p className="text-xs font-bold text-[#212529]">示範林地</p>
        <p className="text-[11px] text-[#6B7280]">專案標的</p>
        <StatusBadge label="進行中" />
        <p className="mt-1 text-xs font-bold text-[#212529]">12,450 tCO2e</p>
      </div>
      <FavoriteButton />
    </article>
  );
}

export function MetricStrip() {
  const metrics = [
    { label: "私有林地", value: "80", caption: "件", color: "#137D6A" },
    { label: "參與單位", value: "33", caption: "家", color: "#B77900" },
    { label: "媒體報導", value: "4", caption: "篇", color: "#2B78C6" },
    { label: "合作企業", value: "7", caption: "家", color: "#F05B63" },
    { label: "已認證專案", value: "2", caption: "件", color: "#137D6A" },
  ];

  return (
    <div className="grid rounded-[12px] border border-[#E5E5E5] bg-white shadow-sm md:grid-cols-5">
      {metrics.map((metric) => (
        <div key={metric.label} className="border-b border-[#E5E5E5] p-4 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
          <p className="text-xs text-[#6B7280]">{metric.label}</p>
          <p className="mt-1 text-2xl font-bold" style={{ color: metric.color }}>
            {metric.value}
            <span className="ml-1 text-xs font-normal text-[#6B7280]">
              {metric.caption}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

export function DataCardsShowcase() {
  return (
    <ComponentPanel title="Data Cards / 資料卡片" number="4" className="xl:col-span-2">
      <div className="grid gap-6 xl:grid-cols-[18rem_1fr]">
        <LabeledDemo label="Featured Card / 精選標的卡片">
          <PropertyCard />
        </LabeledDemo>
        <div className="space-y-5">
          <LabeledDemo label="List Item / 橫式列表項目">
            <PropertyListItem />
          </LabeledDemo>
          <div className="grid gap-5 lg:grid-cols-[17rem_1fr]">
            <LabeledDemo label="Map Result / 地圖結果卡片">
              <CompactMapResultCard />
            </LabeledDemo>
            <LabeledDemo label="Metric Strip / 數據摘要">
              <MetricStrip />
            </LabeledDemo>
          </div>
          <div className="grid gap-5 lg:grid-cols-[1fr_auto]">
            <LabeledDemo label="Status Tags / 狀態標籤">
              <div className="flex flex-wrap gap-2">
                {statusItems.map((status) => (
                  <StatusBadge key={status.label} {...status} />
                ))}
              </div>
            </LabeledDemo>
            <LabeledDemo label="Favorite / 收藏狀態">
              <div className="flex gap-3">
                <FavoriteButton />
                <FavoriteButton active />
              </div>
            </LabeledDemo>
          </div>
        </div>
      </div>
    </ComponentPanel>
  );
}

export function PaginationDemo() {
  return (
    <nav className="flex items-center gap-1" aria-label="分頁範例">
      {["‹", "1", "2", "3", "...", "10", "›"].map((item) => (
        <button
          key={item}
          className={cx(
            "grid size-8 place-items-center rounded-[6px] border text-xs font-semibold",
            item === "1"
              ? "border-[#137D6A] bg-[#137D6A] text-white"
              : "border-[#E5E5E5] bg-white text-[#6B7280]",
          )}
        >
          {item}
        </button>
      ))}
    </nav>
  );
}

export function DataDisplayShowcase() {
  return (
    <ComponentPanel title="Data Display / 資料呈現" number="5">
      <div className="space-y-6">
        <LabeledDemo label="Table / 結果表格">
          <div className="overflow-x-auto rounded-[12px] border border-[#E5E5E5]">
            <table className="min-w-[40rem] w-full border-collapse bg-white text-left text-xs">
              <thead className="bg-[#137D6A]/10 text-[#212529]">
                <tr>
                  {["發放日期", "憑證編號", "企業名稱", "狀態", "有效期限", "詳細"].map((head) => (
                    <th key={head} scope="col" className="px-4 py-3 font-bold">
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row) => (
                  <tr key={row.certificate} className="border-t border-[#E5E5E5]">
                    <td className="px-4 py-3 text-[#212529]">{row.date}</td>
                    <td className="px-4 py-3 text-[#212529]">{row.certificate}</td>
                    <td className="px-4 py-3 text-[#212529]">{row.company}</td>
                    <td
                      className="px-4 py-3 font-bold"
                      style={{
                        color:
                          row.status === "已過期"
                            ? tokens.notificationRed
                            : row.status === "待審核"
                              ? "#B77900"
                              : tokens.primaryGreen,
                      }}
                    >
                      {row.status}
                    </td>
                    <td className="px-4 py-3 text-[#212529]">{row.validUntil}</td>
                    <td className="px-4 py-3">
                      <Info className="size-4 text-[#137D6A]" aria-hidden="true" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </LabeledDemo>
        <div className="grid gap-6 md:grid-cols-2">
          <LabeledDemo label="Pagination / 分頁">
            <PaginationDemo />
          </LabeledDemo>
          <LabeledDemo label="Breadcrumb / 頁面標題">
            <div>
              <p className="text-xs font-medium text-[#137D6A]">
                首頁 <span className="text-[#6B7280]">›</span> ESG 成果展示{" "}
                <span className="text-[#6B7280]">›</span> 專案查詢
              </p>
              <h4 className="mt-2 text-2xl font-bold text-[#212529]">
                專案查詢
              </h4>
              <div className="mt-2 h-0.5 w-12 bg-[#F2B600]" />
            </div>
          </LabeledDemo>
        </div>
      </div>
    </ComponentPanel>
  );
}

export function CoreComponentsSection() {
  return (
    <BoardShell>
      <div className="grid gap-2 xl:grid-cols-[20rem_minmax(0,1fr)]">
        <BoardIntro
          subtitle="Core Components / 核心元件"
          description="支援一致、可及且值得信任 ESG 體驗的可重複使用元件。"
        />
        <div className="grid gap-2 xl:grid-cols-2">
          <GlobalNavigationShowcase />
          <SearchFilterShowcase />
          <ButtonsInputsShowcase />
          <DataCardsShowcase />
          <DataDisplayShowcase />
          <ComponentPanel title="Notes / 元件說明" number="6">
            <div className="relative flex flex-col gap-5 rounded-[16px] bg-gradient-to-r from-[#137D6A]/10 via-white to-[#80CACE]/20 p-5 md:flex-row md:items-center">
              <LeafMark className="size-16 shrink-0" />
              <div className="space-y-2 text-sm leading-7 text-[#212529]">
                <p>
                  ESG 平台同時支援前台展示頁與管理頁面。
                </p>
                <p>
                  可重複使用元件協助查詢、列表、地圖與憑證相關頁面維持一致且可信任的操作體驗。
                </p>
              </div>
            </div>
          </ComponentPanel>
        </div>
      </div>
    </BoardShell>
  );
}

function TokenSummaryPanel() {
  return (
    <div className="grid gap-2 md:grid-cols-3">
      <div className="rounded-[18px] border border-[#E5E5E5] bg-white p-5 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#137D6A]">
          Spacing
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {spacingScale.map((space) => (
            <span key={space} className="rounded-full border border-[#E5E5E5] bg-[#FBF9F4] px-3 py-1 text-xs font-semibold text-[#6B7280]">
              {space}
            </span>
          ))}
        </div>
      </div>
      <div className="rounded-[18px] border border-[#E5E5E5] bg-white p-5 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#137D6A]">
          Radius
        </p>
        <div className="mt-4 flex items-end gap-3">
          {[
            ["S", "8px", "rounded-[8px]"],
            ["M", "12px", "rounded-[12px]"],
            ["L", "24px", "rounded-[24px]"],
          ].map(([label, value, radius]) => (
            <div key={label} className={cx("grid size-16 place-items-center border border-[#D7D7D7] bg-[#FBF9F4] text-xs font-bold text-[#137D6A]", radius)}>
              {value}
            </div>
          ))}
          <div className="rounded-full border border-[#D7D7D7] bg-[#FBF9F4] px-4 py-3 text-xs font-bold text-[#137D6A]">
            Pill
          </div>
        </div>
      </div>
      <div className="rounded-[18px] border border-[#E5E5E5] bg-white p-5 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#137D6A]">
          Usage Principle
        </p>
        <p className="mt-4 text-sm leading-7 text-[#6B7280]">
          Use green for trust and completion, aqua for supportive environmental
          context, yellow for attention, and red only for cancellation or risk.
        </p>
      </div>
    </div>
  );
}

export function DesignSystemPage() {
  return (
    <section
      aria-labelledby="esg-design-system-title"
      className="font-noto text-[#212529]"
      style={
        {
          "--ds-primary": tokens.primaryGreen,
          "--ds-aqua": tokens.secondaryAqua,
        } as CSSProperties
      }
    >
      <div className="space-y-5 rounded-[24px] bg-[#FBF9F4] p-3 sm:p-4 md:p-5">
        <article className="rounded-[24px] border border-[#E5E5E5] bg-white p-3 shadow-sm md:p-4">
          <div className="mb-4 flex flex-col gap-2 px-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#137D6A]">
                Board 01
              </p>
              <h3
                id="esg-design-system-title"
                className="mt-2 text-2xl font-bold text-[#212529]"
              >
                Color & Typography / 色彩與字級
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#6B7280]">
              以色彩、字級與基礎視覺規範建立一致閱讀節奏。
            </p>
          </div>
          <ColorTypographyBoard />
        </article>

        <article className="rounded-[24px] border border-[#E5E5E5] bg-white p-3 shadow-sm md:p-4">
          <div className="mb-4 flex flex-col gap-2 px-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#137D6A]">
                Board 02
              </p>
              <h3 className="mt-2 text-2xl font-bold text-[#212529]">
                Core Components / 核心元件
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#6B7280]">
              將查詢、篩選、卡片、表格與狀態整理為可延伸元件。
            </p>
          </div>
          <CoreComponentsSection />
        </article>
      </div>
    </section>
  );
}
