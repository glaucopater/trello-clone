import { SyntheticEvent } from "react";
import "./AddCardButton.css";

export type AddCardButtonProps = {
  id: string;
  content?: string;
  onClickHandler: (id: string) => void;
};

export const AddCardButton = (cardProps: AddCardButtonProps) => {
  const handleOnClick = (id: string) => (_e: SyntheticEvent) => {
    cardProps.onClickHandler(id);
  };

  return (
    <button
      className="AddButton"
      onClick={(e) => handleOnClick(cardProps.id)(e)}
    >
      Add Card
    </button>
  );
};
