import { Reducer } from "react";
import { SwimlaneProps } from "../../components/Swimlane";
import { generateRandomId, sortArrayById } from "../../utils";
import { ReducerAction, ReducerActionType } from "./actions";

export const useBoardReducer: Reducer<SwimlaneProps[], ReducerAction> = (
  state = [],
  action
) => {
  switch (action.type) {
    case ReducerActionType.CREATE_CARD:
      const selectedSwimlaneId = action.payload;
      const selectedSwimlane = state.filter(
        (swimlane) => swimlane.id === selectedSwimlaneId.id
      )[0];
      const updatedSwimlane = {
        ...selectedSwimlane,
        cards: [
          ...selectedSwimlane.cards,
          { id: generateRandomId(), content: "new card" },
        ],
      };

      const theOtherSwimlanes = state.filter(
        (swimlane) => swimlane.id !== selectedSwimlane.id
      );

      return sortArrayById([...theOtherSwimlanes, updatedSwimlane]);

    case ReducerActionType.DELETE_CARD: {
      // delete card by swimlane and id
      const cardToBeDeleted = action.payload;
      const updatedSwimlane = state.map((swimlane) => {
        return {
          id: swimlane.id,
          name: swimlane.name,
          cards: swimlane.cards.filter((card) => card.id !== cardToBeDeleted.id),
        };
      });

      return updatedSwimlane;
    }
    case ReducerActionType.EDIT_CARD: {
      const editedCard = action.payload;
      return state.map((todo) =>
        todo.id === editedCard.id ? editedCard : todo
      );
    }
    case ReducerActionType.MOVE_CARD: {
      return state;
    }
    default:
      return state;
  }
};
