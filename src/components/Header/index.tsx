import "./Header.css";
import packageJSON from "../../../package.json";

export const TitleImage = () => (
  <span role="img" aria-labelledby="title-image">
    ✨
  </span>
);

export const Header = () => {
  return (
    <header className="Header">
      <h1>
        {packageJSON.title} <TitleImage />
      </h1>
    </header>
  );
};
