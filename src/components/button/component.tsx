import { FC, PropsWithChildren, useContext } from "react";
import classNames from "classnames";

import { Sizes, ViewVariants } from "../../types/types";
import styles from "./styles.module.scss";
import { ThemeContext } from "../../context/theme";

type Props = PropsWithChildren & {
  size?: Sizes,
  disabled?: boolean,
  className?: string,
  viewVariant?: ViewVariants,
  onClick?: () => void,
}

export const Button: FC<Props> = ({ 
  size = 'm',
  disabled = false, 
  children, 
  className,
  viewVariant = 'primary',
  onClick, 
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={
        classNames(
          styles.root, 
          styles[size],
          styles[theme],
          styles[viewVariant],
          className, 
          {
            [styles.disabled]: disabled === true
          }
        )
      }
    >
      {children}
    </button>
  );
};