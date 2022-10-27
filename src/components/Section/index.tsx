import { Card } from "../Card/";
import { generateRandomArray } from "../../utils/";
import "./Section.css";

export type SectionProps = {
  title: string;
};

// each list could have different height, but the width should be dynamic
export const Section = (props: SectionProps) => {
  return (
    <section className="Section">
      <span className="Section-Title">{props.title}</span>
      <ul className="List">
        {generateRandomArray().map((_item, index) => (
          <li key={index}>
            <Card />
          </li>
        ))}
      </ul>
    </section>
  );
};
