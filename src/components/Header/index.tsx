import "./Header.css";
import packageJSON from "../../../package.json";
import { useContext } from "react";
import { BoardContext, ContextProps } from "../../contexts/BoardContext";

export const TitleImage = () => (
  <span role="img" aria-labelledby="title-image">
    ✨
  </span>
);

export const Header = () => {
  const initialStore = useContext(BoardContext);
  const { sectionsList } = (initialStore as ContextProps) || {};
  return (
    <header className="Header">
      <h1>
        {packageJSON.title} <TitleImage />
      </h1>
      <span>Total Sections: {sectionsList.length}</span>
      <span>
        Total Cards:
        {sectionsList.reduce((prev, curr) => prev + curr.cards.length, 0)}
      </span>
    </header>
  );
};
