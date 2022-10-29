import React, { createContext, useReducer } from "react";
import { CardProps } from "../../components/Card";
import { SwimlaneProps } from "../../components/Swimlane";
import { useBoardReducer } from "../../hooks/useBoardReducer";
import { ReducerActionType } from "../../hooks/useBoardReducer/actions"; 
import { getInitialState } from "../../utils";

export type ContextProps = {
  swimlaneList: SwimlaneProps[];
  addSwimlane: (name: string) => void;
  editSwimlane: (swimlane: SwimlaneProps) => void;
  addCard: (swimlaneId: string) => void;
  deleteCard: (cardId: string) => void;
  editCard: (card: CardProps, swimlaneId: string) => void;
  moveCard: (
    cardId: string,
    fromSwimlaneId: string,
    toSwimlaneId: string
  ) => void;
  loadLocalStorage: () => void;
  updateLocalStorage: (swimlaneList: SwimlaneProps[]) => void;
  resetBoard: () => void;
};

export const BoardContext = createContext<ContextProps | undefined>(undefined);

export const BoardProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(useBoardReducer, getInitialState());

  const value = {
    swimlaneList: state,
    addSwimlane: (name: string) => {
      dispatch({
        type: ReducerActionType.CREATE_SWIMLANE,
        payload: name,
      });
      dispatch({ type: ReducerActionType.UPDATE_LOCALSTORAGE, payload: state });
    },
    editSwimlane: (swimlane: SwimlaneProps) => {
      dispatch({
        type: ReducerActionType.EDIT_SWIMLANE,
        payload: swimlane,
      });
      dispatch({ type: ReducerActionType.UPDATE_LOCALSTORAGE, payload: state });
    },
    addCard: (swimlaneId: string) => {
      dispatch({
        type: ReducerActionType.CREATE_CARD,
        payload: { id: swimlaneId, name: "New!", cards: [] },
      });
      dispatch({ type: ReducerActionType.UPDATE_LOCALSTORAGE, payload: state });
    },
    deleteCard: (id: string) => {
      dispatch({
        type: ReducerActionType.DELETE_CARD,
        payload: { id, name: "New", cards: [] },
      });
      dispatch({ type: ReducerActionType.UPDATE_LOCALSTORAGE, payload: state });
    },
    editCard: (card: CardProps, swimlaneId: string) => {
      dispatch({
        type: ReducerActionType.EDIT_CARD,
        payload: { card, swimlaneId },
      });
      dispatch({ type: ReducerActionType.UPDATE_LOCALSTORAGE, payload: state });
    },
    moveCard: (id: string, fromSwimlaneId: string, toSwimlaneId: string) => {
      dispatch({
        type: ReducerActionType.MOVE_CARD,
        payload: { id, fromSwimlaneId, toSwimlaneId },
      });
      dispatch({ type: ReducerActionType.UPDATE_LOCALSTORAGE, payload: state });
    },
    loadLocalStorage: () => {
      dispatch({
        type: ReducerActionType.LOAD_LOCALSTORAGE,
      });
    },
    updateLocalStorage: (swimlaneList: SwimlaneProps[]) => {
      dispatch({
        type: ReducerActionType.UPDATE_LOCALSTORAGE,
        payload: swimlaneList,
      });
    },
    resetBoard: () => {
      dispatch({
        type: ReducerActionType.RESET_BOARD,
      });
      dispatch({
        type: ReducerActionType.LOAD_LOCALSTORAGE,
      });
    },
  };

  return (
    <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
  );
};
