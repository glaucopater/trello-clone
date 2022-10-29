import {
  ChangeEvent,
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
  currentSwimlaneId: string;
};

export const getTextArea = (
  content: string | number | readonly string[] | undefined
) => {
  const [currentContent, setContent] = useState(content);

  const handleOnChange = (event: any) => {
    console.log(event.target.value);
    setContent(event.target.value);
  };

  return <textarea value={currentContent} onChange={handleOnChange} />;
};

export const getCardContent = ({
  content,
  isEditable,
}: {
  content: string | undefined;
  isEditable: boolean;
}) => {
  return isEditable ? getTextArea(content) : content;
};

export const Card = (cardProps: CardProps) => {
  const initialStore = useContext(BoardContext);
  const { deleteCard, editCard } = (initialStore as ContextProps) || {};
  const [isEditable, setIsEditable] = useState(false);
  const [currentContent, setCurrentContent] = useState(cardProps.content);

  const handleDeleteCard = (id: string) => (_e: SyntheticEvent) => {
    deleteCard(id);
  };

  const handleEditCard = () => {
    setIsEditable(true);
  };

  const handleOnDragStart = (event: DragEvent<HTMLElement>, id: string) => {
    event.dataTransfer.setData("id", id);
    event.dataTransfer.setData("swimlane", cardProps.currentSwimlaneId);
  };

  const handleOnChangeContent = (event: {
    target: { value: SetStateAction<string | undefined> };
  }) => {
    console.log(event.target.value);
    setCurrentContent(event.target.value);
  };

  const handleOnSaveContent = (event: any) => {
    setCurrentContent(event.target.value);

    const updatedCard = { ...cardProps, content: currentContent };
    editCard({ ...updatedCard }, cardProps.currentSwimlaneId);
    setIsEditable(false);
  };

  return (
    <article
      className="Card"
      id={"card-" + cardProps.id}
      draggable
      onDragStart={(e) => handleOnDragStart(e, cardProps.id)}
    >
      {isEditable ? (
        <>
          <textarea value={currentContent} onChange={handleOnChangeContent} />
          <button onClick={handleOnSaveContent}>Save</button>
        </>
      ) : (
        <>
          {currentContent}
          <button onClick={handleEditCard}>Edit Card</button>
        </>
      )}
      <button onClick={(e) => handleDeleteCard(cardProps.id)(e)}>Remove</button>
    </article>
  );
};
