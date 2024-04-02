import { FC, PropsWithChildren } from "react";
import classNames from "classnames";

import { Sizes, ViewVariants } from "../../types/styles";
import styles from "./styles.module.scss";

type Props = PropsWithChildren & {
  size?: Sizes
  disabled?: boolean,
  className?: string,
  viewVariant?: ViewVariants
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
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={
        classNames(
          styles.root, 
          styles[size],
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