import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWind,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  theme: {
    colors: {
      blue1: "#2257c1",
      blue2: "#619edf",
    },
    boxShadow: {
      br: "6px 6px 0 0 rgba(34,87,193,.2)",
    },
  },

  presets: [
    presetUno(),
    presetAttributify(),
    presetWind(),
    presetIcons(),
    presetTypography(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
