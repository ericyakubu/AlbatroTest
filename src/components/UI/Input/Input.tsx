"use client";
import { ChangeEvent, FunctionComponent, ReactNode, useState } from "react";
import { useController } from "react-hook-form";
import classes from "./Input.module.scss";
import { IconType } from "react-icons";

type Props = {
  name: string;
  label: string;
  control: any;
  rules?: any;
  type: "checkbox" | "text" | "password" | "number" | "email";
  icon?: ReactNode;
};

const Input: FunctionComponent<Props> = ({
  name,
  label,
  control,
  rules,
  icon,
  type,
  ...rest
}) => {
  const { field, fieldState } = useController({ name, control, rules });
  const [transformLabel, setTransformLabel] = useState<boolean>(true);

  const check = (e: ChangeEvent<HTMLInputElement>) => {
    field.onChange(e);
    e.target.value ? setTransformLabel(false) : setTransformLabel(true);
  };

  return (
    <>
      {type === "checkbox" && (
        <div className={classes.Checkbox}>
          <input type="checkbox" {...field} {...rest} />
          <label
            className={classes.Label}
            style={{
              transform: transformLabel
                ? "translateY(100%)"
                : "translateY(-20%)",
            }}
          >
            {label}
          </label>
          {fieldState.error ? (
            <p className={classes.Error}>{fieldState.error.message}</p>
          ) : null}
        </div>
      )}

      {type !== "checkbox" && (
        <div className={classes.Input}>
          <label
            className={classes.Label}
            style={{
              transform: transformLabel
                ? "translateY(100%)"
                : "translateY(-20%)",
            }}
          >
            {icon}
            {label}
          </label>
          <input
            {...field}
            {...rest}
            type={type}
            onChange={check}
            onFocus={() => setTransformLabel(false)}
          />
          {fieldState.error ? (
            <p className={classes.Error}>{fieldState.error.message}</p>
          ) : null}
        </div>
      )}
    </>
  );
};

export default Input;
