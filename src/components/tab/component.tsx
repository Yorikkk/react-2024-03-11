import { FC } from "react";
import { Button } from "../button/component";

type Props = {
  text: string,
  isActive: boolean,
  onClick: () => void
}

export const Tab: FC<Props> = ({ text, isActive, onClick }) => {
  return (
    <Button 
      onClick={onClick} 
      disabled={isActive} 
      viewVariant="secondary" 
      size="l"
    >
      {text}
    </Button>
  )
}