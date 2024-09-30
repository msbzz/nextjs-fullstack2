import { ThemeTypographyVariants } from "@src/theme/theme";
import { StyleSheet } from "@src/theme/StyleSheet";
import styled from "styled-components";
import Text from "../Text/Text";
import React from "react";

import { useRipple } from "react-use-ripple";
import { useRouter } from "next/router";

const StyledButton = styled(Text)<any>``;

export interface ButtonBaseProps {
  href?:string;
  children: React.ReactNode;
  textVariant?: ThemeTypographyVariants;
  styleSheet?: StyleSheet;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonBase({
  textVariant,
  styleSheet,
  children,
  href,
  ...props
}: ButtonBaseProps) {
  const router = useRouter();
  const ref = React.useRef();
  const isLink=Boolean(href);
  const Tag = isLink ? 'a' : 'button';

  useRipple(ref,{animationLength:600,rippleColor:'rgba(255,255,255,0.7)'});

  return (
    <StyledButton
      ref={ref}
      tag={Tag}
      href={href}
      {...props}
      styleSheet={{
        border:'0',
        backgroundColor:'transparent',
        color:'inherit',
        outline:'0',
        cursor:'pointer',
        textDecoration:'none',
        ...styleSheet,
      }}
      onClick = {(event ) =>{
        isLink && event.preventDefault();
        isLink && router.push(href);
        !isLink && props.onClick && props.onClick(event);
      }}
    >
      {children}
    </StyledButton>
  );
}
