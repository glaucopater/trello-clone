import { SetStateAction, useContext, useState } from "react";
import { BoardContext, ContextProps } from "../../contexts/BoardContext";
import "./AddSwimlaneButton.css";

const defaultContent = "Enter Title";

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
          <input type="text" value={currentContent} onChange={handleOnChange} />
          <div>
            <button className="AddSwimlaneButton" onClick={handleOnSave}>
              Save
            </button>
            <button className="AddSwimlaneButton" onClick={handleOnCancel}>
              Cancel
            </button>
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
