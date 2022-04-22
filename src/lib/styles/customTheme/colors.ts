import type { DeepPartial, Theme } from "@chakra-ui/react";
import { theme } from "@chakra-ui/react";

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme["colors"]["blackAlpha"]>
> = {
  brand: {
    100: "",
    200: "",
    300: "",
    400: "",
    500: "",
    600: "",
    700: "",
    800: "",
    900: "",
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme["colors"]> = {
  purple: {
    ...theme.colors.purple,
    500: "#8060DE",
  },
  gray: {
    ...theme.colors.gray,
    50: "#f4f4f5",
    100: "#ECECEC",
    200: "#c2c4c4",
    300: "#c0c0c6",
    900: "#4a4a4a",
  },
  orange: {
    ...theme.colors.orange,
    300: "#fc580a",
    500: "#FF4F00",
    600: "#FF690A",
  },
  blue: {
    ...theme.colors.blue,
    400: "#7902dd",
    500: "#0061f9",
    600: "#2686ff",
  },
  green: {
    ...theme.colors.green,
    50: "rgba(36, 161, 72, 0.5)",
    300: "#24A148",
    400: "#20bc29",
  },
  red: {
    ...theme.colors.red,
    600: "#C70606",
    700: "#B00020",
  },
};

const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};

export default colors;
