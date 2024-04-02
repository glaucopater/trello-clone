import { useBoardReducer } from "./";
import { ReducerAction, ReducerActionType } from "./actions";

describe("useBoardReducer", () => {
  it("should handle the CREATE_SWIMLANE action", () => {
    const initialState = [
      { id: 1, name: "Swimlane 1", cards: [] },
      { id: 2, name: "Swimlane 2", cards: [] },
    ];
    const action: ReducerAction = {
      type: ReducerActionType.CREATE_SWIMLANE,
      payload: "Swimlane 3",
    };
    const expectedState = [
      { id: 1, name: "Swimlane 1", cards: [] },
      { id: 2, name: "Swimlane 2", cards: [] },
      { id: 3, name: "Swimlane 3", cards: [] },
    ];
    expect(useBoardReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle the EDIT_SWIMLANE action", () => {
    const initialState = [
      { id: 1, name: "Swimlane 1", cards: [] },
      { id: 2, name: "Swimlane 2", cards: [] },
    ];

    const action: ReducerAction = {
      type: ReducerActionType.EDIT_SWIMLANE,
      payload: { id: 2, name: "Swimlane 2 (Edited)", cards: [] },
    };
    const expectedState = [
      { id: 1, name: "Swimlane 1", cards: [] },
      { id: 2, name: "Swimlane 2 (Edited)", cards: [] },
    ];
    expect(useBoardReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle the CREATE_CARD action", () => {
    const initialState = [
      { id: 1, name: "Swimlane 1", cards: [] },
      { id: 2, name: "Swimlane 2", cards: [] },
    ];
    const action: ReducerAction = {
      type: ReducerActionType.CREATE_CARD,
      payload: { id: 2, name: "Swimlane 2 (Edited)", cards: [] },
    };
    const expectedState = [
      { id: 1, name: "Swimlane 1", cards: [] },
      {
        id: 2,
        name: "Swimlane 2",
        cards: [{ id: expect.any(String), content: expect.any(String) }],
      },
    ];
    expect(useBoardReducer(initialState, action)).toEqual(expectedState);
  });
});
