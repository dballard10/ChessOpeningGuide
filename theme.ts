import { createSystem, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#e6f2ff" },
          100: { value: "#cce6ff" },
          200: { value: "#99ccff" },
          300: { value: "#66b3ff" },
          400: { value: "#3399ff" },
          500: { value: "#007fff" },
          600: { value: "#0066cc" },
          700: { value: "#004c99" },
          800: { value: "#003366" },
          900: { value: "#001933" },
        },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: "{colors.brand.500}" },
          contrast: { value: "{colors.brand.50}" },
          fg: { value: "{colors.brand.700}" },
          muted: { value: "{colors.brand.100}" },
          subtle: { value: "{colors.brand.200}" },
          emphasized: { value: "{colors.brand.300}" },
          focusRing: { value: "{colors.brand.500}" },
        },
      },
    },
  },
});

const theme = createSystem(config);

export default theme;
