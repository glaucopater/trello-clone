import { generateRandomInt } from "../../utils/index";
import "./Card.css";

const defaultCardContent = "This is the card content.".repeat(
  generateRandomInt(10)
);

export type CardProps = {
  content?: string;
};

export const Card = (cardProps: CardProps) => {
  return (
    <article className="Card">
      {cardProps.content || defaultCardContent}
    </article>
  );
};
