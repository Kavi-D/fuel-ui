import { cx } from "@fuel-ui/css";

import { createComponent } from "../../utils";
import type { IconButtonProps } from "../IconButton";
import { IconButton } from "../IconButton";

export type TagCloseButtonsProp = Omit<IconButtonProps, "icon" | "aria-label">;

type ObjProps = {
  id: string;
};

export const TagCloseButton = createComponent<TagCloseButtonsProp, ObjProps>(
  ({ className, ...props }) => {
    const classes = cx("fuel_tag--close-btn", className);
    return (
      <IconButton
        {...props}
        aria-label="close"
        icon="X"
        variant="link"
        className={classes}
      />
    );
  }
);

TagCloseButton.id = "TagCloseButton";
