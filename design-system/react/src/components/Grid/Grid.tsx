import type { ThemeUtilsCSS } from "@fuel-ui/css";
import { cx } from "@fuel-ui/css";

import type { HTMLProps } from "../../utils";
import { createComponent } from "../../utils";
import { Box } from "../Box";

import { GridItem } from "./GridItem";

export type GridProps = HTMLProps["div"] & {
  /**
   * Shorthand prop for `gridAutoColumns`
   * @type ThemeUtilsCSS["gridAutoColumns"];
   */
  autoColumns?: ThemeUtilsCSS["gridAutoColumns"];
  /**
   * Shorthand prop for `gridAutoRows`
   * @type ThemeUtilsCSS["gridAutoRows"];
   */
  autoRows?: ThemeUtilsCSS["gridAutoRows"];
  /**
   * Shorthand prop for `gridColumn`
   * @type ThemeUtilsCSS["gridColumn"];
   */
  column?: ThemeUtilsCSS["gridColumn"];
  /**
   * Shorthand prop for `gridAutoFlow`
   * @type ThemeUtilsCSS["gridAutoFlow"];
   */
  direction?: ThemeUtilsCSS["gridAutoFlow"];
  /**
   * Shorthand prop for `gap`
   * @type ThemeUtilsCSS["gap"];
   */
  gap?: ThemeUtilsCSS["gap"];
  /**
   * Shorthand prop for `gridRow`
   * @type ThemeUtilsCSS["gridRow"];
   */
  row?: ThemeUtilsCSS["gridRow"];
  /**
   * Shorthand prop for `gridTemplateAreas`
   * @type ThemeUtilsCSS["gridTemplateAreas"];
   */
  templateAreas?: ThemeUtilsCSS["gridTemplateAreas"];
  /**
   * Shorthand prop for `gridTemplateColumns`
   * @type ThemeUtilsCSS["gridTemplateColumns"];
   */
  templateColumns?: ThemeUtilsCSS["gridTemplateColumns"];
  /**
   * Shorthand prop for `gridTemplateRows`
   * @type ThemeUtilsCSS["gridTemplateRows"];
   */
  templateRows?: ThemeUtilsCSS["gridTemplateRows"];
};

type ObjProps = {
  Item: typeof GridItem;
};

export const Grid = createComponent<GridProps, ObjProps>(
  ({
    autoColumns,
    autoRows,
    column,
    direction = "row",
    gap,
    row,
    templateAreas,
    templateColumns,
    templateRows,
    css,
    className,
    ...props
  }) => {
    const classes = cx("fuel_box--grid", className);
    return (
      <Box
        {...props}
        className={classes}
        css={{
          gap,
          gridAutoFlow: direction,
          gridAutoColumns: autoColumns,
          gridAutoRows: autoRows,
          gridColumn: column,
          gridRow: row,
          gridTemplateAreas: templateAreas,
          gridTemplateColumns: templateColumns,
          gridTemplateRows: templateRows,
          ...css,
          display: "grid",
        }}
      />
    );
  }
);

Grid.Item = GridItem;
