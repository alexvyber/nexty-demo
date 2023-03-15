import React from "react";
import type { Story } from "@ladle/react";
import { Button, buttonConfig, type ButtonProps as Props } from "./Button";

const { variants } = buttonConfig;

export default {
  title: "Button/Default",
};

export const Default: Story<Props> = (props) => (
  <Button {...props}>{props.children}</Button>
);

Default.args = {
  children: <>AAAAAAAAAAAAAAAAAAAAAAAA</>,
  variant: "primary",
  size: "sm",
} satisfies Props;

Default.argTypes = {
  variant: {
    options: getOptions(variants.variant),
    control: {
      type: "radio",
    },
    defaultValue: getFirstValue(variants.variant),
  },
  size: {
    options: getOptions(variants.size),
    control: {
      type: "radio",
    },
    defaultValue: getFirstValue(variants.size),
  },
};

// TODO: extract
function getOptions<T extends Record<string, string>>(arg: T): Array<keyof T> {
  return (Object.keys(arg) as Array<keyof typeof arg>).map((key) => key);
}

// TODO: extract
function getFirstValue<T extends object>(variants: T): keyof T {
  return (Object.keys(variants) as Array<keyof T>)[0];
}
