import clsx from "clsx";
import React from "react";
import StyledContainer from "../StyledContainer";
import styles from "./index.module.scss";

export interface ListPickerProps extends React.HTMLAttributes<HTMLDivElement> {
  onSelection?: (value: string) => void;
  options: Option[];
}

interface Option {
  key: string;
  text: string;
  value: any;
  selectable?: boolean;
}

const ListPicker: React.FC<ListPickerProps> = ({
  onSelection = () => {},
  options,
  children,
  className,
  ...props
}) => {
  return (
    <div className={clsx(styles.ListPicker, className)} {...props}>
      {options.map((option) => {
        option.selectable =
          typeof option.selectable === "undefined" ? true : option.selectable;

        return (
          <StyledContainer
            key={option.key}
            className={styles.container}
            onClick={() => option.selectable && onSelection(option.value)}
            pressable={option.selectable}
            background={option.selectable ? "default" : "white"}
          >
            <span>{option.text}</span>
          </StyledContainer>
        );
      })}
    </div>
  );
};

export default ListPicker;
