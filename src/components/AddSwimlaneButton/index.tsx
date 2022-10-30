import { SetStateAction, useContext, useState } from "react";
import { BoardContext, ContextProps } from "../../contexts/BoardContext";
import { ButtonBasic } from "../ButtonBasic";
import "./AddSwimlaneButton.css";

const defaultContent = "Add Title";

export const AddSwimlaneButton = () => {
  const initialStore = useContext(BoardContext);
  const { addSwimlane } = (initialStore as ContextProps) || {};
  const [isEditable, setIsEditable] = useState(false);
  const [currentContent, setCurrentContent] = useState(defaultContent);

  const handleOnAddSwimlane = () => {
    setIsEditable(true);
  };

  const handleOnChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setCurrentContent(event.target.value);
  };

  const handleOnSave = () => {
    setIsEditable(false);
    addSwimlane(currentContent);
  };

  const handleOnCancel = () => {
    setIsEditable(false);
    setCurrentContent(defaultContent);
    setIsEditable(false);
  };

  return (
    <section className="Swimlane">
      {isEditable ? (
        <>
          <input
            className="AddSwimlaneButton-Input"
            type="text"
            value={currentContent}
            onChange={handleOnChange}
          />
          <div className="AddSwimlaneButton-Actions">
            <ButtonBasic onClickHandler={handleOnSave}>Save </ButtonBasic>
            <ButtonBasic onClickHandler={handleOnCancel}>Cancel </ButtonBasic>
          </div>
        </>
      ) : (
        <button className="AddSwimlaneButton" onClick={handleOnAddSwimlane}>
          Add Swimlane
        </button>
      )}
    </section>
  );
};
