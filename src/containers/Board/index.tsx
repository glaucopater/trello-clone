import { useContext } from "react";
import { Section } from "../../components/Section";
import { BoardContext, ContextProps } from "../../contexts/BoardContext";
import "./Board.css";

export const Board = () => {
  const initialStore = useContext(BoardContext);
  const { sectionsList: state } = (initialStore as ContextProps) || {};

  return (
    <div className="Board">
      {state.map((section, index) => (
        <Section key={index} {...section} />
      ))}
    </div>
  );
};
