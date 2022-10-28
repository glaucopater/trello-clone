import { SyntheticEvent } from "react";
import "./AddButton.css";

export type AddButtonProps = {
  id: string;
  content?: string;
  onClickHandler: (props: any) => void;
};

export const AddButton = (cardProps: AddButtonProps) => {
  const handleOnClick = (id: string) => (_e: SyntheticEvent) => {
    cardProps.onClickHandler(id);
  };

  return (
    <button className="AddButton" onClick={(e) => handleOnClick(cardProps.id)(e)}>Add Card</button>
  );
};
