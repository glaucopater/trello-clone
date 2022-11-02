import { render, fireEvent } from "@testing-library/react";
import { BoardContext, ContextProps } from "../../contexts/BoardContext";
import { Swimlane } from "./";
import { getInitialState } from "../../utils";
import { Board } from "../../containers/Board";

const mockContextProps: ContextProps = {
  addCard: jest.fn(),
  editCard: jest.fn(),
  moveCard: jest.fn(),
  deleteCard: jest.fn(),
  addSwimlane: jest.fn(),
  editSwimlane: jest.fn(),
  loadLocalStorage: jest.fn(),
  updateLocalStorage: jest.fn(),
  resetBoard: jest.fn(),
  swimlaneList: getInitialState(),
};

it("should add a new swimlane", () => {
  const container = render(
    <BoardContext.Provider value={mockContextProps}>
      <Board />
    </BoardContext.Provider>
  );
  const { getByText } = container;
  fireEvent.click(getByText("Add Swimlane"));
  fireEvent.click(getByText("Save"));
  expect(mockContextProps.addSwimlane).toHaveBeenCalledTimes(1);
});

it("should add a new card to the board", () => {
  const { getByText } = render(
    <BoardContext.Provider value={mockContextProps}>
      <Swimlane {...mockContextProps.swimlaneList[0]} />
    </BoardContext.Provider>
  );

  fireEvent.click(getByText("Add Card"));
  expect(mockContextProps.addCard).toHaveBeenCalledTimes(1);
});
