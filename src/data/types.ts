export type ProjectMetric = {
  label: string;
  value: string;
};

export type SitemapNode = {
  label: string;
  description?: string;
  children?: SitemapNode[];
};

export type DesignToken = {
  name: string;
  value: string;
  usage: string;
};

export type DesignTokenSection = {
  title: string;
  description?: string;
  tokens: DesignToken[];
};

export type ColorGroup = {
  name: string;
  description?: string;
  colors: {
    name: string;
    value: string;
    usage: string;
  }[];
};

export type ComponentSpec = {
  name: string;
  purpose: string;
  anatomy: string[];
  states: string[];
  usageGuidelines?: string[];
};

export type ProjectScreen = {
  name: string;
  purpose: string;
  keyElements: string[];
  userGoal?: string;
};

export type ProjectImageAssets = {
  coverImage?: string;
  heroImage?: string;
  heroVisualImage?: string;
  heroMobileImage?: string;
  galleryImages?: string[];
};

export type CaseStudySectionType =
  | "overview"
  | "challenge"
  | "goals"
  | "key-screens"
  | "dashboard-design"
  | "key-improvements"
  | "theme-system"
  | "feature-extension"
  | "wireframe-prototype"
  | "component-extension"
  | "visual-direction"
  | "shopping-experience"
  | "checkout-experience"
  | "frontend-layout"
  | "information-architecture"
  | "user-flow"
  | "design-system"
  | "ui-components"
  | "final-design"
  | "reflection";

export type CaseStudyVisualKind =
  | "home"
  | "login"
  | "list"
  | "map"
  | "news"
  | "certificate"
  | "tcb-hero"
  | "tcb-dashboard-light"
  | "tcb-dashboard-dark"
  | "tcb-vm-list"
  | "tcb-vm-detail"
  | "tcb-deploy-flow"
  | "tcb-announcement"
  | "tcb-theme-system"
  | "tcb-design-system"
  | "tcb-ui-components"
  | "tcb-final-light"
  | "tcb-final-dark"
  | "rmic-hero"
  | "rmic-platform-overview"
  | "rmic-map-system"
  | "rmic-case-list"
  | "rmic-feature-extension"
  | "rmic-wireframe"
  | "rmic-prototype"
  | "rmic-component-extension"
  | "rmic-final-ui-01"
  | "rmic-final-ui-02"
  | "jule-hero"
  | "jule-homepage"
  | "jule-visual-direction"
  | "jule-product-list"
  | "jule-product-detail"
  | "jule-cart"
  | "jule-checkout"
  | "jule-rewards-coupons"
  | "jule-mobile-rwd"
  | "jule-bootstrap-layout"
  | "jule-final-ui-01"
  | "jule-final-ui-02"
  | "ina-hero"
  | "ina-ui-direction"
  | "ina-visual-extension"
  | "ina-final-ui-01"
  | "ina-final-ui-02"
  | "ina-final-ui-03"
  | "dome-hero"
  | "dome-story-concept"
  | "dome-visual-direction"
  | "dome-character-design"
  | "dome-final-visual-01"
  | "dome-final-visual-02"
  | "meow-hero"
  | "meow-brand-concept"
  | "meow-logo-process"
  | "meow-visual-identity"
  | "meow-application-packaging"
  | "meow-application-storefront"
  | "meow-application-sticker"
  | "tian-liang-hero"
  | "tian-liang-logo-exploration"
  | "tian-liang-wordmark-exploration"
  | "tian-liang-selected-direction"
  | "tian-liang-visual-identity"
  | "tian-liang-storefront"
  | "tian-liang-awning"
  | "tian-liang-packaging"
  | "tian-liang-cup"
  | "tian-liang-business-card"
  | "tian-liang-sticker";

export type CaseStudyCardIcon =
  | "palette"
  | "layers"
  | "code"
  | "accessibility"
  | "map-pinned"
  | "refresh"
  | "sparkles"
  | "gauge"
  | "monitor"
  | "moon"
  | "workflow"
  | "bell"
  | "server";

export type CaseStudyCard = {
  title: string;
  description: string;
  eyebrow?: string;
  icon?: CaseStudyCardIcon;
};

export type DesignGoalIcon = "navigation" | "layers" | "check";

export type DesignGoal = {
  title: string;
  description: string;
  icon: DesignGoalIcon;
};

export type CaseStudyImageAspectRatio =
  | "18/9"
  | "16/10"
  | "16/9"
  | "4/3"
  | "3/2"
  | "1/1"
  | "21/9"
  | "3/4";

export type CaseStudyGalleryItem = {
  title: string;
  description: string;
  eyebrow?: string;
  image?: string;
  visual?: CaseStudyVisualKind;
  aspectRatio?: CaseStudyImageAspectRatio;
};

export type CaseStudyContentBlock =
  | {
    type: "facts";
    items: { label: string; value: string }[];
  }
  | {
    type: "cards";
    columns?: 2 | 3 | 5;
    items: CaseStudyCard[];
  }
  | {
    type: "comparison";
    sourceTitle: string;
    targetTitle: string;
    items: { source: string; target: string }[];
  }
  | {
    type: "design-goals";
    goals: DesignGoal[];
    previewImage?: string;
    previewVisual?: CaseStudyVisualKind;
  }
  | {
    type: "feature-gallery";
    items: CaseStudyGalleryItem[];
  }
  | {
      type: "architecture";
      groups: { title: string; items: string[] }[];
      showInteractiveSitemap?: boolean;
    }
  | {
      type: "sitemap-tree";
      root: string;
      items: string[];
    }
  | {
    type: "flow";
    items: string[];
  }
  | {
    type: "design-system";
  }
  | {
    type: "ui-components";
  }
  | {
    type: "gallery";
    items: CaseStudyGalleryItem[];
  }
  | {
    type: "visual-showcase";
    layout?: "hero-grid" | "two-column" | "single";
    items: CaseStudyGalleryItem[];
  }
  | {
    type: "tags";
    items: string[];
  }
  | {
    type: "image";
    src: string;
    alt: string;
    caption?: string;
  };

export type CaseStudySection = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  type: CaseStudySectionType;
  contentBlocks: CaseStudyContentBlock[];
};

export type Project = ProjectImageAssets & {
  slug: string;
  isHidden?: boolean;
  figmaPrototypeUrl?: string;
  visualFallback?: CaseStudyVisualKind;
  title: string;
  subtitle: string;
  eyebrow: string;
  description: string;
  role: string;
  scope: string;
  timeline: string;
  year: string;
  duration: string;
  summary: string;
  challenge: string;
  outcome: string;
  metrics: ProjectMetric[];
  tags: string[];
  tools: string[];
  process: string[];
  deliverables: string[];
  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };
  overview?: string[];
  problemStatements?: string[];
  informationArchitecture?: string[];
  sitemap?: SitemapNode[];
  designTokens?: DesignTokenSection[];
  colorSystem?: ColorGroup[];
  components?: ComponentSpec[];
  screens?: ProjectScreen[];
  reflection?: string[];
  caseStudySections: CaseStudySection[];
};
