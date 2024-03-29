import { useContext } from "react";
import { AddSwimlaneButton } from "../../components/AddSwimlaneButton";
import { Swimlane as Swimlane } from "../../components/Swimlane";
import { BoardContext, ContextProps } from "../../contexts/BoardContext";
import "./Board.css";

export const Board = () => {
  const initialStore = useContext(BoardContext);
  const { swimlaneList: state } = (initialStore as ContextProps) || {};

  console.log(state);

  return (
    <div className="Board">
      {state?.map((swimlane, index) => (
        <Swimlane key={index} {...swimlane} />
      ))}
      <AddSwimlaneButton />
    </div>
  );
};
