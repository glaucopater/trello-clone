import { Card, CardProps } from "../Card/";
import "./Section.css";
import { useContext } from "react";
import { BoardContext, ContextProps } from "../../contexts/BoardContext";

export type SectionProps = {
  id: string;
  name: string;
  cards: CardProps[];
};

// each list could have different height, but the width should be dynamic
export const Section = (props: SectionProps) => {
  const initialStore = useContext(BoardContext);
  const { addCard } = (initialStore as ContextProps) || {};

  const handleAddCard = () => {
    addCard(props.id);
  };

  return (
    <section className="Section">
      <span className="Section-Title">{props.name}</span>
      <button onClick={handleAddCard}>Add</button>
      <ul className="List">
        {props.cards.map((item, index) => (
          <li key={index}>
            <Card {...item} />
          </li>
        ))}
      </ul>
    </section>
  );
};
