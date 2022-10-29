import { Children, ReactNode } from "react";
import "./ButtonBasic.css";

export type ButtonBasicProps = {
  onClickHandler?: () => void;
  children?: ReactNode;
};

export const ButtonBasic = (buttonBasicProps: ButtonBasicProps) => {
  const handleOnClick = () => {
    if (buttonBasicProps && buttonBasicProps.onClickHandler)
      buttonBasicProps.onClickHandler();
  };

  return (
    <button className="ButtonBasic" onClick={handleOnClick}>
      {buttonBasicProps.children}
    </button>
  );
};
