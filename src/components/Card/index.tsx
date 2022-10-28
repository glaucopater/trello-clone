import { DragEvent, SyntheticEvent, useContext } from "react";
import { BoardContext, ContextProps } from "../../contexts/BoardContext";
import { generateRandomContent } from "../../utils/index";
import "./Card.css";

const defaultCardContent = generateRandomContent(10);

export type CardProps = {
  id: string;
  content?: string;
  currentSwimlane: string;
};

export const Card = (cardProps: CardProps) => {
  const initialStore = useContext(BoardContext);
  const { deleteCard } = (initialStore as ContextProps) || {};

  const handleDeleteCard = (id: string) => (_e: SyntheticEvent) => {
    deleteCard(id);
  };

  const handleOnDragStart = (event: DragEvent<HTMLElement>, id: string) => {
    event.dataTransfer.setData("id", id);
    event.dataTransfer.setData("swimlane", cardProps.currentSwimlane);
  };

  return (
    <article
      className="Card"
      id={"card-" + cardProps.id}
      draggable
      onDragStart={(e) => handleOnDragStart(e, cardProps.id)}
    >
      {cardProps.content || defaultCardContent}
      <button onClick={(e) => handleDeleteCard(cardProps.id)(e)}>
        Remove Card
      </button>
    </article>
  );
};
