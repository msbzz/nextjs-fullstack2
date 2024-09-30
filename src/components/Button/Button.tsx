import ButtonBase, { ButtonBaseProps } from "./ButtonBase";
import React from "react";
import { ColorVariant, colorVariantBy, Variant } from "./colorVariantBy";
import { useTheme } from "@src/theme/ThemeProvider";
import { buttonSize, ButtonSize } from "./buttonSize";

interface ButtonProps extends ButtonBaseProps {
  styleSheet?: any;
  fullWidth?: boolean;
  children: React.ReactNode;
  colorVariant?: ColorVariant;
  variant?: Variant;
  size?: ButtonSize;
}

export default function Button({
  styleSheet,
  children,
  fullWidth = false, // Define default value here
  colorVariant = "primary", // Define default value here
  variant = "contained", // Define default value here
  size = "md", // Define default value here
}: ButtonProps) {
  const theme = useTheme();
  return (
    <ButtonBase
      styleSheet={{
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        // [Color + Variant]
        ...colorVariantBy(theme, colorVariant, variant),
        ...buttonSize[size],
        ...(fullWidth && { alignSelf: "initial" }),
        ...styleSheet,
      }}
    >
      {children}
    </ButtonBase>
  );
}

Button.Base = ButtonBase;
