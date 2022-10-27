import React, { createContext, useReducer } from "react";
import { SectionProps } from "../../components/Section";
import { useBoardReducer } from "../../hooks/useBoardReducer";
import { ReducerActionType } from "../../hooks/useBoardReducer/types";
import { initialState } from "../../store";

export type ContextProps = {
  sectionsList: SectionProps[];
  addCard: (sectionId: string) => void;
  deleteCard: (cardId: string) => void;
};

export const BoardContext = createContext<ContextProps | undefined>(undefined);

export const BoardProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(useBoardReducer, initialState);

  const value = {
    sectionsList: state,
    addCard: (sectionId: string) => {
      dispatch({
        type: ReducerActionType.CREATE_CARD,
        payload: { id: sectionId, name: "TS", cards: [] },
      });
    },
    deleteCard: (id: string) => {
      dispatch({
        type: ReducerActionType.DELETE_CARD,
        payload: { id, name: "TS", cards: [] },
      });
    },
  };

  return (
    <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
  );
};
