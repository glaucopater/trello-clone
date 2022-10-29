import "./Header.css";
import packageJSON from "../../../package.json";
import { useContext } from "react";
import { BoardContext, ContextProps } from "../../contexts/BoardContext";
import { ButtonBasic } from "../ButtonBasic";

export const TitleImage = () => (
  <span role="img" aria-labelledby="title-image">
    ✨
  </span>
);

export const Header = () => {
  const initialStore = useContext(BoardContext);
  const { swimlaneList, resetBoard } = (initialStore as ContextProps) || {};

  const handleOnResetBoard = () => {
    resetBoard();
  };

  return (
    <header className="Header">
      <h1>
        {packageJSON.title} <TitleImage />
      </h1>
      <ButtonBasic onClickHandler={handleOnResetBoard}>Reset Board</ButtonBasic>
    </header>
  );
};
