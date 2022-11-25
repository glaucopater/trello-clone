import { render, renderHook } from "@testing-library/react";
import { useContext, useEffect, useReducer } from "react";
import { act } from "react-dom/test-utils";
import { ContextProps, BoardContext } from ".";
import { useBoardReducer } from "../../hooks/useBoardReducer";
import { ReducerActionType } from "../../hooks/useBoardReducer/actions";
import { initialState } from "../../store";
import { sampleState } from "../../store/fixtures";
import { getInitialState } from "../../utils";

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

function TestComponent(mockContextProps: ContextProps) {
  const initialStore = useContext(BoardContext);
  const { swimlaneList, addCard, deleteCard, editCard, moveCard } =
    (initialStore as ContextProps) || {};

  useEffect(() => {
    addCard(1);
  }, [mockContextProps, addCard]);

  useEffect(() => {
    deleteCard(1, "1");
  }, [mockContextProps, addCard]);

  useEffect(() => {
    editCard(sampleState[0].cards[0], 1);
  }, [mockContextProps, addCard]);

  useEffect(() => {
    moveCard(sampleState[0].cards[0].id, 1, 2);
  }, [mockContextProps, moveCard]);

  return <div id="result">{JSON.stringify(swimlaneList)}</div>;
}

describe("test card actions", () => {
  it("test card actions", () => {
    render(
      <BoardContext.Provider value={mockContextProps}>
        <TestComponent {...mockContextProps} />)
      </BoardContext.Provider>
    );

    const { result } = renderHook(() =>
      useReducer(useBoardReducer, initialState)
    );

    const [, dispatch] = result.current;

    act(() => {
      dispatch({
        type: ReducerActionType.CREATE_CARD,
        payload: sampleState[0],
      });
      dispatch({
        type: ReducerActionType.DELETE_CARD,
        payload: { swimlaneId: sampleState[0].id, cardId: "1" },
      });
      dispatch({
        type: ReducerActionType.EDIT_CARD,
        payload: {
          swimlaneId: sampleState[0].id,
          card: sampleState[0].cards[0],
        },
      });
      dispatch({
        type: ReducerActionType.MOVE_CARD,
        payload: {
          id: sampleState[0].cards[0].id,
          fromSwimlaneId: 1,
          toSwimlaneId: 2,
        },
      });
    });

    expect(mockContextProps.addCard).toHaveBeenCalledWith(1);
    expect(mockContextProps.deleteCard).toHaveBeenCalledWith(1, "1");
    expect(mockContextProps.editCard).toHaveBeenCalledWith(
      {
        content: "lorem ipsum 1.1",
        currentSwimlaneId: 1,
        id: "1.1",
      },
      1
    );
    expect(mockContextProps.moveCard).toHaveBeenCalledWith("1.1", 1, 2);
  });
});
