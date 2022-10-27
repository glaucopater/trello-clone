import { Section } from "../../components/Section";
import "./Board.css";

export const sections = ["To Do", "In progress", "Done"];

export const Board = () => {
  return (
    <div className="Board">
      {sections.map((section, index) => (
        <Section key={index} title={section} />
      ))}
    </div>
  );
};
