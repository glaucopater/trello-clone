import "./CardsCounter.css";

export const CardsCounter = ({ count }: { count: number }) => (
  <span className="CardsCounter" title="Total Cards">{count}</span>
);
