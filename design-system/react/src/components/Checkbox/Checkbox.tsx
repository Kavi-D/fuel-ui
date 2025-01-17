import { cx, styled } from "@fuel-ui/css";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { createElement } from "react";

import { createComponent } from "../../utils";
import { useFormControlProps } from "../Form/FormControl";
import { Icon } from "../Icon";

import * as styles from "./styles";

type OmitProps = "children" | "as";
export type CheckboxProps = CheckboxPrimitive.CheckboxProps & {
  isDisabled?: boolean;
  isReadOnly?: boolean;
};

type ObjProps = {
  id: string;
};

const Root = styled(CheckboxPrimitive.Root);
export const Checkbox = createComponent<CheckboxProps, ObjProps, OmitProps>(
  ({ isDisabled, isReadOnly, className, ...props }) => {
    const formControlProps = useFormControlProps();
    const disabled =
      isDisabled ||
      isReadOnly ||
      formControlProps.isDisabled ||
      formControlProps.isReadOnly;

    const readonly = isReadOnly || formControlProps.isReadOnly;
    const classes = cx("fuel_checkbox", className, styles.root({ disabled }));
    const indicatorClass = styles.indicator({ disabled });

    const customProps = {
      ...props,
      disabled,
      "aria-disabled": disabled,
      "aria-readonly": readonly,
      className: classes,
      required: props.required || formControlProps.isRequired,
    };

    return createElement(
      Root,
      customProps,
      <CheckboxPrimitive.CheckboxIndicator className={indicatorClass}>
        <Icon icon="Check" />
      </CheckboxPrimitive.CheckboxIndicator>
    );
  }
);

Checkbox.id = "Checkbox";
