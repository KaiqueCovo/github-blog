const colors = {
  base: {
    input: "#040F1A",
    background: "#071422",
    profile: "#0B1B2B",
    post: "#112131",
    border: "#1C2F41",
    label: "#3A536B",
    span: "#7B96B2",
    text: "#AFC2D4",
    subtitle: "#C4D4E3",
    title: "#E7EDF4",
  },

  blue: "#3294F8",
};

const fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
};

export const defaultTheme = {
  colors,
  fontSizes,
} as const;
