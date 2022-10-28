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
  const { addCard } = (initialStore as ContextProps) || {};

  const handleAddCard = () => {
    addCard(props.id);
  };

  return (
    <section className="Swimlane">
      <span className="Swimlane-Title">{props.name}</span>
      <ul className="List">
        {props.cards.map((item, index) => (
          <li key={index}>
            <Card {...item} />
          </li>
        ))}
      </ul>
      <AddButton onClickHandler={handleAddCard} id={props.id} />
    </section>
  );
};
