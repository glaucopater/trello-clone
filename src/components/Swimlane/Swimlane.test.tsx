import {
  render,
  fireEvent,
} from "@testing-library/react";
import { BoardContext, ContextProps } from "../../contexts/BoardContext";
import { Swimlane } from "./";
import { getInitialState } from "../../utils";
import { Board } from "../../containers/Board";

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

it("should add a new swimlane", () => {
  const container = render(
    <BoardContext.Provider value={mockContextProps}>
      <Board />
    </BoardContext.Provider>
  );

  const { getByText } = container;

  fireEvent.click(getByText("Add Swimlane"));
  fireEvent.click(getByText("Save"));
  expect(addSwimlane).toHaveBeenCalledTimes(1);
});

it("should add a new card to the board", () => {
  const { getByText } = render(
    <BoardContext.Provider value={mockContextProps}>
      <Swimlane {...mockContextProps.swimlaneList[0]} />
    </BoardContext.Provider>
  );

  fireEvent.click(getByText("Add Card"));
  expect(addCard).toHaveBeenCalledTimes(1);
});
