import { useContext } from "react";
import { AddSwimlaneButton } from "../../components/AddSwimlaneButton";
import { Swimlane } from "../../components/Swimlane";
import { BoardContext, ContextProps } from "../../contexts/BoardContext";
import "./Board.css";

export const Board = () => {
  const initialStore = useContext(BoardContext);
  const { swimlaneList: state } = (initialStore as ContextProps) || {};

  return (
    <div className="Board">
      {state.map((swimlane, index) => (
        <Swimlane key={index} {...swimlane} />
      ))}
      <AddSwimlaneButton />
    </div>
  );
};
