import { cx } from "@fuel/css";
import { Children } from "react";

import { Box } from "../Box";
import type { ButtonBaseProps } from "../Button";
import { SPINNER_SIZE } from "../Button";
import { Spinner } from "../Spinner";
import { createIcon } from "../Text";

import { TagCloseButton } from "./TagCloseButton";
import * as styles from "./styles";

import { createComponent } from "@/utils";
import type { HTMLProps } from "@/utils";

type GetChildrenParams = TagProps & {
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
};
function getChildren({
  isLoading,
  size,
  children,
  iconLeft,
  iconRight,
}: GetChildrenParams) {
  if (isLoading) {
    return (
      <>
        <Spinner color="current" size={SPINNER_SIZE[size || "md"]} />
        {children}
      </>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const hasCloseBtn = Children.toArray(children).some((child: any) =>
    child.type?.displayName?.includes("TagCloseButton")
  );
  return (
    <>
      {iconLeft}
      {children}
      {!hasCloseBtn && iconRight}
    </>
  );
}

export type TagVariants = "solid" | "outlined" | "ghost";
export type TagSizes = "xs" | "sm" | "md";

export type TagProps = HTMLProps["div"] &
  Omit<ButtonBaseProps, "iconAriaLabel"> & {
    size?: TagSizes;
    variant?: TagVariants;
  };

const TagBase = createComponent<TagProps>(
  ({
    as = "span",
    size = "sm",
    color = "accent",
    variant = "solid",
    leftIcon,
    rightIcon,
    iconSize,
    leftIconAriaLabel,
    rightIconAriaLabel,
    isLoading,
    isDisabled,
    children,
    className,
    ...props
  }) => {
    const disabled = isLoading || isDisabled;
    const iconLeft = createIcon(leftIcon, iconSize, leftIconAriaLabel);
    const iconRight = createIcon(rightIcon, iconSize, rightIconAriaLabel);

    const classes = cx(
      className,
      styles.tag({
        size,
        variant,
        disabled,
        color,
      })
    );

    const customChildren = getChildren({
      isLoading,
      size,
      iconLeft,
      iconRight,
      children,
    });

    return (
      <Box as={as} {...props} className={classes}>
        {customChildren}
      </Box>
    );
  }
);

type TagComponent = typeof TagBase & {
  CloseButton: typeof TagCloseButton;
};

export const Tag = TagBase as TagComponent;
Tag.CloseButton = TagCloseButton;