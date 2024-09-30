import React from "react";
import styled from "styled-components";
import { StyleSheet } from "@src/theme/StyleSheet";
import { parseStyleSheet } from "@skynexui/responsive_stylesheet";

interface StyledBaseComponentProps {
  styleSheet?: StyleSheet;
  ref: any;
}

const StyledBaseComponent = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'styleSheet',
})<StyledBaseComponentProps>`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  ${({ styleSheet }) => parseStyleSheet(styleSheet)}
`;

interface BaseComponentProps {
  styleSheet?: StyleSheet;
  [key: string]: any;
}

export const BaseComponent = React.forwardRef<unknown, BaseComponentProps>(
  ({ styleSheet = {}, ...props }, ref) => {
    return (
      <StyledBaseComponent ref={ref} styleSheet={styleSheet} {...props} />
    );
  }
);
