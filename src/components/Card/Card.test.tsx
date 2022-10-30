import { render, fireEvent } from "@testing-library/react";
import { BoardContext, ContextProps } from "../../contexts/BoardContext";
import { Card } from "./";
import { getInitialState } from "../../utils";
import { sampleState } from "../../store/fixtures";

const addCard = jest.fn();
const editCard = jest.fn();
const moveCard = jest.fn();
const deleteCard = jest.fn();
const addSwimlane = jest.fn();
const editSwimlane = jest.fn();
const loadLocalStorage = jest.fn();
const updateLocalStorage = jest.fn();
const resetBoard = jest.fn();

const mockContextProps: ContextProps = {
  addCard,
  editCard,
  moveCard,
  deleteCard,
  addSwimlane,
  editSwimlane,
  loadLocalStorage,
  updateLocalStorage,
  resetBoard,
  swimlaneList: getInitialState(),
};

describe("card", () => {
  it("should test edit and cancel buttons", () => {
    const mockCardProps = sampleState[0].cards[0];

    const { getAllByRole } = render(
      <BoardContext.Provider value={mockContextProps}>
        <Card {...mockCardProps} />
      </BoardContext.Provider>
    );

    const buttons = getAllByRole("button");
    const editButton = buttons[0];
    fireEvent.click(editButton);
    // note that now the buttons are different but we don't have to redacler buttons
    const saveButton = buttons[0];
    fireEvent.click(saveButton);
    expect(editCard).toHaveBeenCalledTimes(1);
  });

  it("should test edit and save buttons", () => {
    const mockCardProps = sampleState[0].cards[0];

    const { getAllByRole } = render(
      <BoardContext.Provider value={mockContextProps}>
        <Card {...mockCardProps} />
      </BoardContext.Provider>
    );

    const buttons = getAllByRole("button");
    const editButton = buttons[0];
    fireEvent.click(editButton);
    // note that now the buttons are different but we don't have to redacler buttons
    const cancelButton = buttons[1];
    fireEvent.click(cancelButton);
    expect(editCard).toHaveBeenCalledTimes(0);
  });
});
