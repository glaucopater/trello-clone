import { Reducer } from "react";
import { SwimlaneProps } from "../../components/Swimlane";
import { generateRandomId, sortArrayById } from "../../utils";
import { ReducerAction, ReducerActionType } from "./actions";

export const useBoardReducer: Reducer<SwimlaneProps[], ReducerAction> = (
  state = [],
  action
) => {
  switch (action.type) {
    case ReducerActionType.CREATE_SWIMLANE:
      const name = action.payload;
      const emptySwimlane: SwimlaneProps = {
        id: generateRandomId(),
        name: name,
        cards: [],
      };
      return [...state, emptySwimlane];
    case ReducerActionType.EDIT_SWIMLANE:
      const swimlaneToBeUpdated = action.payload;
      return sortArrayById([
        ...state.filter((swimlane) => swimlane.id !== swimlaneToBeUpdated.id),
        swimlaneToBeUpdated,
      ]);
    case ReducerActionType.CREATE_CARD:
      const selectedSwimlaneId = action.payload;
      const createdCard = { id: generateRandomId(), content: "new card" };
      const selectedSwimlane = state.filter(
        (swimlane) => swimlane.id === selectedSwimlaneId.id
      )[0];
      const updatedSwimlane = {
        ...selectedSwimlane,
        cards: [...selectedSwimlane.cards, createdCard],
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
          cards: swimlane.cards.filter(
            (card) => card.id !== cardToBeDeleted.id
          ),
        };
      });
      return updatedSwimlane;
    }
    case ReducerActionType.EDIT_CARD: {
      // edit card by content and swimlane and id
      const { card: editedCard, swimlaneId } = action.payload;
      const swimlaneToBeUpdated = state.find(
        (swimlane) => swimlane.id === swimlaneId
      );
      if (swimlaneToBeUpdated) {
        swimlaneToBeUpdated.cards = swimlaneToBeUpdated.cards.map((card) => {
          if (card.id === editedCard.id) return editedCard;
          else return card;
        });
      }
      const theOtherSwimlanes = state.filter(
        (swimlane) => swimlane.id !== swimlaneId
      );

      return sortArrayById([...theOtherSwimlanes, swimlaneToBeUpdated]);
    }
    case ReducerActionType.MOVE_CARD: {
      const { id, fromSwimlaneId, toSwimlaneId } = action.payload;
      // find this swimlane in store
      const fromSwimlane = state.find(
        (swimlane) => swimlane.id === fromSwimlaneId
      );
      const fromSwimlaneOriginalCard =
        fromSwimlane?.cards.find((card) => card.id === id) || null;
      if (fromSwimlane) {
        fromSwimlane.cards = fromSwimlane.cards.filter(
          (card) => card.id !== id
        );
      }
      const toSwimlane = state.find((swimlane) => swimlane.id === toSwimlaneId);
      if (toSwimlane && fromSwimlaneOriginalCard) {
        toSwimlane.cards = [...toSwimlane.cards, fromSwimlaneOriginalCard];
      }
      return sortArrayById([
        ...state.filter(
          (swimlane) =>
            swimlane.id !== fromSwimlaneId && swimlane.id !== toSwimlaneId
        ),
        fromSwimlane,
        toSwimlane,
      ]);
    }
    default:
      return state;
  }
};
