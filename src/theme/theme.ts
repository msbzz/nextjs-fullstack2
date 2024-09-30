import { typography } from "../theme/defaults/typography";
import { colors } from '../theme/defaults/colors';

const theme = {
  typography:{
    //fontFamily:"Roboto Condensed,Open Sans,sans-serif",
    ...typography,
    },
    colors:{
      ... colors,
    }
};

export type Theme = typeof theme;
export type ThemeTypographyVariants = keyof typeof typography.variants;
export default theme;
