import { Reducer } from "react";
import { SectionProps } from "../../components/Section";
import { generateRandomId } from "../../utils";
import { ReducerAction, ReducerActionType } from "./types";

export const useBoardReducer: Reducer<SectionProps[], ReducerAction> = (
  state = [],
  action
) => {
  switch (action.type) {
    case ReducerActionType.CREATE_CARD:
      const selectedSectionId = action.payload as SectionProps;

      const selectedSection = state.filter(
        (section) => section.id === selectedSectionId.id
      )[0];

      const updatedSection = {
        ...selectedSection,
        cards: [
          ...selectedSection.cards,
          { id: generateRandomId(), content: "new" },
        ],
      };

      const theOthers = state.filter(
        (section) => section.id !== selectedSection.id
      );

      return [...theOthers, updatedSection].sort(
        (a, b) => a.id.charCodeAt(0) - b.id.charCodeAt(0)
      );

    // return [...theOthers, selectedSection];
    case ReducerActionType.DELETE_CARD: {
      // delete card by section and id
      const cardToBeDeleted = action.payload as SectionProps;
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
      const editedTodo = action.payload as SectionProps;
      return state.map((todo) =>
        todo.id === editedTodo.id ? editedTodo : todo
      );
    }
    default:
      return state;
  }
};
