import { FunctionComponent, MouseEvent } from "react";
import cn from "classnames";
import classes from "./Button.module.scss";
import { IconType } from "react-icons";

type Props = {
  text: string;
  type: "button" | "submit";
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

const Button: FunctionComponent<Props> = ({
  text,
  type,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={cn(className, classes.Button, {})}
    >
      {text}
    </button>
  );
};

export default Button;
