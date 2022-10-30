import "./CardsCounter.css";

export const CardsCounter = ({ count }: { count: number }) => (
  <span className="CardsCounter" title="Total Cards" data-testid="cards-counter">{count}</span>
);
