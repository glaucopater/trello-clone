import React, { createContext, useReducer } from "react";
import { SwimlaneProps } from "../../components/Swimlane";
import { useBoardReducer } from "../../hooks/useBoardReducer";
import { ReducerActionType } from "../../hooks/useBoardReducer/actions";
import { initialState } from "../../store";

export type ContextProps = {
  swimlaneList: SwimlaneProps[];
  addCard: (swimlaneId: string) => void;
  deleteCard: (cardId: string) => void;
  moveCard: (cardId: string, fromSwimlaneId: string, toSwimlaneId: string) => void;
};

export const BoardContext = createContext<ContextProps | undefined>(undefined);

export const BoardProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(useBoardReducer, initialState);

  const value = {
    swimlaneList: state,
    addCard: (swimlaneId: string) => {
      dispatch({
        type: ReducerActionType.CREATE_CARD,
        payload: { id: swimlaneId, name: "New!", cards: [] },
      });
    },
    deleteCard: (id: string) => {
      dispatch({
        type: ReducerActionType.DELETE_CARD,
        payload: { id, name: "New", cards: [] },
      });
    },
    moveCard: (id: string, fromSwimlaneId: string, toSwimlaneId: string) => {
      dispatch({
        type: ReducerActionType.MOVE_CARD,
        payload: { id, fromSwimlaneId, toSwimlaneId  },
      });
    },
  };

  return (
    <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
  );
};
