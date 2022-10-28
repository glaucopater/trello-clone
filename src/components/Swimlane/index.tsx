import { Card, CardProps } from "../Card";
import "./Swimlane.css";
import { useContext } from "react";
import { BoardContext, ContextProps } from "../../contexts/BoardContext";
import { AddButton } from "../AddButton";

export type SwimlaneProps = {
  id: string;
  name: string;
  cards: CardProps[];
};

// each list could have different height, but the width should be dynamic
export const Swimlane = (props: SwimlaneProps) => {
  const initialStore = useContext(BoardContext);
  const { addCard, moveCard } = (initialStore as ContextProps) || {};

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
    const fromSwimlaneId = event.dataTransfer.getData("category");
    moveCard(id, fromSwimlaneId, props.id);
  };

  return (
    <section
      className="Swimlane"
      id={"swimlane-" + props.id}
      onDrop={handleOnDrop}
      onDragOver={handleOnDragOver}
    >
      <span className="Swimlane-Title">{props.name}</span>
      <ul className="List">
        {props.cards.map((item, index) => (
          <li key={index}>
            <Card {...item} currentCategory={props.id} />
          </li>
        ))}
      </ul>
      <AddButton onClickHandler={handleAddCard} id={props.id} />
    </section>
  );
};
