import { css, cx, styled } from "@fuel-ui/css";
import { createElement } from "react";

import type { HTMLProps } from "../../utils";
import { createComponent } from "../../utils";

export type BoxProps = HTMLProps["div"];

const Root = styled("div");

export const Box = createComponent<BoxProps>(
  ({ className, children, ...props }) => {
    const classes = cx("fuel_box", className, styles.root());
    return createElement(Root, { ...props, className: classes }, children);
  }
);

const styles = {
  root: css({
    fontFamily: "$sans",
  }),
};
