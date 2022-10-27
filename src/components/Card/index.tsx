import { SyntheticEvent, useContext } from "react";
import { BoardContext, ContextProps } from "../../contexts/BoardContext";
import { generateRandomContent } from "../../utils/index";
import "./Card.css";

const defaultCardContent = generateRandomContent(10);

export type CardProps = {
  id: string;
  content?: string;
};

export const Card = (cardProps: CardProps) => {
  const initialStore = useContext(BoardContext);
  const { deleteCard } = (initialStore as ContextProps) || {};

  const handleDeleteCard = (id: string) => (_e: SyntheticEvent) => {
    deleteCard(id);
  };

  return (
    <article className="Card">
      {cardProps.content || defaultCardContent}
      <button onClick={(e) => handleDeleteCard(cardProps.id)(e)}>Remove</button>
    </article>
  );
};
