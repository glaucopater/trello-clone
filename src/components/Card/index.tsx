import React from "react";
import {
  DragEvent,
  SetStateAction,
  SyntheticEvent,
  useContext,
  useState,
} from "react";
import { BoardContext, ContextProps } from "../../contexts/BoardContext";
import "./Card.css";

export type CardProps = {
  id: string;
  content?: string;
  currentSwimlaneId: number;
};

export const Card = (cardProps: CardProps) => {
  const initialStore = useContext(BoardContext);
  const { deleteCard, editCard } = (initialStore as ContextProps) || {};
  const [isEditable, setIsEditable] = useState(false);

  const { id, content, currentSwimlaneId } = cardProps;
  const [currentContent, setCurrentContent] = useState(content);

  const handleDeleteCard = () => {
    deleteCard(currentSwimlaneId, id);
  };

  const handleEditCard = () => {
    setIsEditable(true);
  };

  const handleOnCancel = () => {
    setIsEditable((prev) => !prev);
    setCurrentContent(content);
    setIsEditable(false);
  };

  const handleOnDragStart = (event: DragEvent<HTMLElement>, id: string) => {
    event.dataTransfer.setData("id", id);
    event.dataTransfer.setData("swimlane", String(currentSwimlaneId));
  };

  const handleOnChangeContent = (event: {
    target: { value: SetStateAction<string | undefined> };
  }) => {
    setCurrentContent(event.target.value);
  };

  const handleOnSaveContent = (event: any) => {
    setCurrentContent(event.target.value);
    const updatedCard = { ...cardProps, content: currentContent };
    editCard(updatedCard, currentSwimlaneId);
    setIsEditable(false);
  };

  const editCardMode = (
    <>
      <textarea value={currentContent} onChange={handleOnChangeContent} />
      <div className="Card-Actions-Edit">
        <button onClick={handleOnSaveContent} title="Save Card">
          <span role="img" aria-labelledby="Save Card">
            💾
          </span>
        </button>
        <button onClick={handleOnCancel} title="Cancel">
          <span role="img" aria-labelledby="Cancel">
            ↶
          </span>
        </button>
      </div>
    </>
  );

  const viewCardMode = (
    <>
      <div className="Card-Content">{content}</div>
      <div className="Card-Actions">
        <button onClick={handleEditCard} title="Edit Card">
          <span role="img" aria-labelledby="Edit Card">
            ✏️
          </span>
        </button>
        <button onClick={handleDeleteCard} title="Delete Card">
          <span role="img" aria-labelledby="Delete Card">
            🗑️
          </span>
        </button>
      </div>
    </>
  );

  return (
    <article
      className="Card"
      id={`card-${id}`}
      draggable
      onDragStart={(e) => handleOnDragStart(e, id)}
      title="Drag me!"
    >
      {isEditable ? editCardMode : viewCardMode}
    </article>
  );
};
