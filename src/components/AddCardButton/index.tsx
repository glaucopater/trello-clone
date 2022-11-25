import { SyntheticEvent } from "react";
import "./AddCardButton.css";

export type AddCardButtonProps = {
  swimlaneId: number;
  content?: string;
  onClickHandler: (id: number) => void;
};

export const AddCardButton = (cardProps: AddCardButtonProps) => {
  const handleOnClick = (id: number) => (_e: SyntheticEvent) => {
    cardProps.onClickHandler(id);
  };

  return (
    <button
      className="AddButton"
      onClick={(e) => handleOnClick(cardProps.swimlaneId)(e)}
    >
      Add Card
    </button>
  );
};
