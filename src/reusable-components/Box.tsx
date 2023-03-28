import { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import {
  BorderBottomProps,
  BorderLeftProps,
  BorderRadiusProps,
  BorderRightProps,
  BorderStyleProps,
  BorderTopProps,
  BorderWidthProps,
  BottomProps,
  FlexboxProps,
  LayoutProps,
  LeftProps,
  OverflowProps,
  PositionProps,
  RightProps,
  TopProps,
  ZIndexProps,
} from "styled-system";

export interface BoxProps
  extends StyledSystemProps,
    ComponentPropsWithoutRef<"div"> {
  children?: ReactNode;
  row?: boolean;
}

export const Box: FC<BoxProps> = ({
  children,
  row,
  style,
  flex,
  display,
  justifyContent = "start",
  alignContent,
  alignItems,
  alignSelf,
  position,
  ...props
}) => {
  return (
    <div
      style={{
        ...style,
        display: "flex",
        flexDirection: row ? "row" : "column",
      }}
      {...props}
    >
      {children}
    </div>
  );
};

interface StyledSystemProps
  extends BorderRadiusProps,
    BorderStyleProps,
    BorderWidthProps,
    BorderLeftProps,
    BorderRightProps,
    BorderTopProps,
    BorderBottomProps,
    FlexboxProps,
    LayoutProps,
    OverflowProps,
    PositionProps,
    ZIndexProps,
    LeftProps,
    RightProps,
    TopProps,
    BottomProps {}
