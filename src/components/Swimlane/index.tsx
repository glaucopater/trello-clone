import { Card, CardProps } from "../Card";
import "./Swimlane.css";
import { SetStateAction, useContext, useState } from "react";
import { BoardContext, ContextProps } from "../../contexts/BoardContext";
import { AddCardButton } from "../AddCardButton";
import { CardsCounter } from "../CardsCounter";

export type SwimlaneProps = {
  id: string;
  name: string;
  cards: CardProps[];
};

// each list could have different height, but the width should be dynamic
export const Swimlane = (swimlaneProps: SwimlaneProps) => {
  const initialStore = useContext(BoardContext);
  const { editSwimlane, addCard, moveCard } =
    (initialStore as ContextProps) || {};
  const { id, name, cards } = swimlaneProps;
  const [isEditable, setIsEditable] = useState(false);
  const [currentName, setCurrentName] = useState(name);

  const handleAddCard = () => {
    addCard(id);
  };

  const handleOnDragOver = (event: {
    preventDefault: () => void;
    dataTransfer: { getData: (arg0: string) => any };
  }) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("id");
  };

  const handleOnDrop = (event: {
    dataTransfer: { getData: (arg0: string) => any };
  }) => {
    const cardId = event.dataTransfer.getData("id");
    const fromSwimlaneId = event.dataTransfer.getData("swimlane");
    moveCard(cardId, fromSwimlaneId, id);
  };

  const handleEditName = () => {
    setIsEditable(true);
  };

  const handlehandleOnChangeName = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setCurrentName(event.target.value);
  };

  const handleSaveName = () => {
    editSwimlane({ ...swimlaneProps, name: currentName });
    setIsEditable(false);
  };

  const handleOnKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      handleSaveName();
    }
  };

  return (
    <section
      className="Swimlane"
      id={`swimlane-${id}`}
      onDrop={handleOnDrop}
      onDragOver={handleOnDragOver}
    >
      <div className="Swimlane-Header">
        <span
          className="Swimlane-Name"
          onClick={handleEditName}
          onBlur={handleSaveName}
          onKeyDown={handleOnKeyDown}
        >
          {isEditable ? (
            <input
              type="text"
              value={currentName}
              onChange={handlehandleOnChangeName}
            />
          ) : (
            currentName
          )}
        </span>
        <CardsCounter count={cards.length} />
      </div>
      <ul className="Card-List">
        {cards.map((item, index) => (
          <li key={index}>
            <Card {...item} currentSwimlaneId={id} />
          </li>
        ))}
      </ul>
      <AddCardButton onClickHandler={handleAddCard} id={id} />
    </section>
  );
};
