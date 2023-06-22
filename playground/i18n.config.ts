export default defineI18nConfig((nuxt) => ({
  debug: true,
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  // globalInjection: true,
  dateTimeFormats: {
    short: {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
    long: {
      year: "numeric",
      month: "short",
      day: "numeric",
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
    },
  },
}));
