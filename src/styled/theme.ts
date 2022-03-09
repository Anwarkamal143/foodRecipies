// JS reimplementation of Style Closet scales for use in styled-components
const buttonProps = {
  colors: {
    // Button Colors
    btnbgprimary: "#C4C4C4",
    btnbgsecondary: "#7ccf78",
    btnbgblue: "#255b87",
    btnbginfo: "#2179ee",
    btncolorprimary: "#FFFFFF",
    btnbgprimaryhover: "#000000",
    btnbgdanger: "#FF0000",
    btnbgdangerhover: "#940b0b",
    // default variation
    btnbgdefault: "#ebeef1",
    btnbgdefaulthover: "#940b0b",
    btncolordefault: "#72777d",
    btnborderdefault: "#e5e5e5",
    btncolorvairationdefault: "#a3a0a0",
  },
}
const colors = {
  blue: "#2179ee",
  green: "#00cc9a",
  coral: "#ff6759",
  gold: "#f0b95b",
  purple: "#7537ef",
  white: "#ffffff",
  black: "#000000",
  red: "#FF0000",

  grey10: "#f3f4f8",
  grey20: "#e1e5eb",
  grey30: "#c2c6cc",
  grey40: "#9ea2a8",
  grey50: "#686c73",
  grey60: "#30363d",
  grey70: "#6B7280",
  grey80: "#4B5563",
  grey90: "#374151",
  grey100: "#1F2937",
  grey105: "#111827",
  primary: "#2179ee",
  secondary: "#00cc9a",
  disabeld: "#e1e5eb",
  ...buttonProps.colors,
}

const secondaryColors = {
  blue10: "#ade7ff",
  blue20: "#61bcff",
  blue30: "#2179ee",
  blue40: "#1f4ab4",
  blue50: "#1d2064",
  green10: "#b5ffcb",
  green20: "#5dffa3",
  green30: "#00cc9a",
  green40: "#219a8a",
  green50: "#183f51",
  purple10: "#dec7ff",
  purple20: "#a673ff",
  purple30: "#7537ef",
  purple40: "#4e23b6",
  purple50: "#2d1b64",
  coral10: "#ffc6b3",
  coral20: "#ff8e75",
  coral30: "#ff6759",
  coral40: "#eb312a",
  coral50: "#7b1e30",
  gold10: "#ffedc2",
  gold20: "#ffda8b",
  gold30: "#f0b95b",
  gold40: "#e5a229",
  gold50: "#6a4a24",
}

// const breakpoints = ["31.25em", "43.75em", "46.875em"]
const breakpoints = {
  "31.25": "31.25em",
  "43.75": "43.75em",
  "46.875": "46.875em",
}
const fontSizes = {
  ".3": ".3rem",
  ".5": ".5rem",
  ".7": ".7rem",
  ".9": ".9rem",
  "1": "1rem",
  "1.2": "1.2rem",
  "1.4": "1.4rem",
  "1.6": "1.6rem",
  "1.8": "1.8rem",
  "2": "2rem",
  "2.4": "2.4rem",
  "2.6": "2.6rem",
  "2.8": "2.8rem",
  "3": "3rem",
  "3.2": "3.2rem",
  "3.4": "3.4rem",
  "3.6": "3.6rem",
  "3.8": "3.8rem",
  "4": "4rem",
  "4.2": "4.2rem",
  "4.4": "4.4rem",
  "4.6": "4.6rem",
  "4.8": "4.8rem",
  "5": "5rem",
  "5.2": "5.2rem",
  "5.4": "5.4rem",
  "5.6": "5.6rem",
  "5.8": "5.8rem",
  "6": "6rem",
  "6.2": "6.2rem",
  "6.4": "6.4rem",
  "6.6": "6.6rem",
  "6.8": "6.8rem",
}
// const fontSizes = [
//   ".3rem",
//   ".5rem",
//   ".7rem",
//   ".9rem",
//   "1rem",
//   "1.2rem",
//   "1.4rem",
//   "1.6rem",
//   "1.8rem",
//   "2rem",
//   "2.4rem",
//   "2.6rem",
//   "2.8rem",
//   "3rem",
//   "3.2rem",
//   "3.4rem",
//   "3.6rem",
//   "3.8rem",
//   "4.0rem",
//   "4.8rem",
//   "6.4rem",
// ]
const space = {
  "0": "0",
  ".4": ".4rem",
  ".8": ".8rem",
  "1.2": "1.2rem",
  "1.4": "1.4rem",
  "1.6": "1.6rem",
  "1.8": "1.8rem",
  "2": "2rem",
  "2.2": "2.2rem",
  "2.5": "2.5rem",
  "2.7": "2.7rem",
  "3": "3rem",
  "3.2": "3.2rem",
  "3.5": "3.5rem",
  "3.7": "3.7rem",
  "4": "4rem",
  "4.2": "4.2rem",
  "4.5": "4.5rem",
  "4.8": "4.8rem",
  "5": "5rem",
  "6.4": "6.4rem",
  "9.6": "9.6rem",
}
// const space = [
//   "0",
//   ".4rem",
//   ".8rem",
//   "1.2rem",
//   "1.4rem",
//   "1.6rem",
//   "1.8rem",
//   "2rem",
//   "2.2rem",
//   "2.5rem",
//   "2.7rem",
//   "3rem",
//   "3.2rem",
//   "3.5rem",
//   "3.7rem",
//   "4rem",
//   "4.2rem",
//   "4.5rem",
//   "4.8rem",
//   "5rem",
//   "6.4rem",
//   "9.6rem",
// ]
const zindexes = {
  negative: [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10],
  positive: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  header: 99,
  dropdown: 11,
}
const shadows = ["0px 0px 15px -2px rgba(0, 0, 0, 0.28)"]

export interface StyleClosetTheme {
  // breakpoints: string[]
  breakpoints: typeof breakpoints
  // fontSizes: string[]
  fontSizes: typeof fontSizes
  // space: string[]
  space: typeof space
  colors: { [key in keyof typeof colors]: string }
  secondaryColors: { [key in keyof typeof secondaryColors]: string }
  zindexes: typeof zindexes
  shadows: typeof shadows
}

export const theme: StyleClosetTheme = {
  breakpoints,
  fontSizes,
  space,
  colors,
  secondaryColors,
  zindexes,
  shadows,
}

export default theme
