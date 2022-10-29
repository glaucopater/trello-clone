import { Card, CardProps } from "../Card";
import "./Swimlane.css";
import { SetStateAction, useContext, useState } from "react";
import { BoardContext, ContextProps } from "../../contexts/BoardContext";
import { AddCardButton } from "../AddCardButton";

export type SwimlaneProps = {
  id: string;
  name: string;
  cards: CardProps[];
};

// each list could have different height, but the width should be dynamic
export const Swimlane = (props: SwimlaneProps) => {
  const initialStore = useContext(BoardContext);
  const { editSwimlane, addCard, moveCard } =
    (initialStore as ContextProps) || {};
  const [isEditable, setIsEditable] = useState(false);
  const [currentName, setCurrentName] = useState(props.name);

  const handleAddCard = () => {
    addCard(props.id);
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
    const id = event.dataTransfer.getData("id");
    const fromSwimlaneId = event.dataTransfer.getData("swimlane");
    moveCard(id, fromSwimlaneId, props.id);
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
    editSwimlane({ ...props, name: currentName });
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
      id={"swimlane-" + props.id}
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
        <span>({props.cards.length})</span>
      </div>
      <ul className="Card-List">
        {props.cards.map((item, index) => (
          <li key={index}>
            <Card {...item} currentSwimlaneId={props.id} />
          </li>
        ))}
      </ul>
      <AddCardButton onClickHandler={handleAddCard} id={props.id} />
    </section>
  );
};
