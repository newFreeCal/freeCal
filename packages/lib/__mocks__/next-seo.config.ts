vi.mock("@calcom/lib/next-seo.config", () => ({
  default: {
    headSeo: {
      siteName: "freeCal",
    },
    defaultNextSeo: {
      title: "freeCal",
      description: "Scheduling infrastructure for everyone.",
    },
  },
  seoConfig: {
    headSeo: {
      siteName: "freeCal",
    },
  },
  buildSeoMeta: vi.fn().mockReturnValue({}),
}));
