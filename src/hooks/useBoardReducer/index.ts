import { Reducer } from "react";
import { SectionProps } from "../../components/Section";
import { generateRandomId, sortArrayById } from "../../utils";
import { ReducerAction, ReducerActionType } from "./actions";

export const useBoardReducer: Reducer<SectionProps[], ReducerAction> = (
  state = [],
  action
) => {
  switch (action.type) {
    case ReducerActionType.CREATE_CARD:
      const selectedSectionId = action.payload;
      const selectedSection = state.filter(
        (section) => section.id === selectedSectionId.id
      )[0];
      const updatedSection = {
        ...selectedSection,
        cards: [
          ...selectedSection.cards,
          { id: generateRandomId(), content: "new card" },
        ],
      };

      const theOtherSections = state.filter(
        (section) => section.id !== selectedSection.id
      );

      return sortArrayById([...theOtherSections, updatedSection]);

    case ReducerActionType.DELETE_CARD: {
      // delete card by section and id
      const cardToBeDeleted = action.payload;
      const updatedSection = state.map((section) => {
        return {
          id: section.id,
          name: section.name,
          cards: section.cards.filter((card) => card.id !== cardToBeDeleted.id),
        };
      });

      return updatedSection;
    }
    case ReducerActionType.EDIT_CARD: {
      const editedCard = action.payload;
      return state.map((todo) =>
        todo.id === editedCard.id ? editedCard : todo
      );
    }

    case ReducerActionType.MOVE_CARD: {
      //const movedCard = action.payload;
      return state;
    }
    default:
      return state;
  }
};
