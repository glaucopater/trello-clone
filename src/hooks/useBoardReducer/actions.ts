import { CardProps } from "../../components/Card";
import { SwimlaneProps } from "../../components/Swimlane";

export enum ReducerActionType {
  CREATE_SWIMLANE,
  EDIT_SWIMLANE,
  CREATE_CARD,
  DELETE_CARD,
  EDIT_CARD,
  MOVE_CARD,
  LOAD_LOCALSTORAGE,
  UPDATE_LOCALSTORAGE,
  RESET_BOARD,
}

export type CreateSwimlaneAction = {
  type: ReducerActionType.CREATE_SWIMLANE;
  payload: SwimlaneProps["name"];
};

export type EditSwimlaneAction = {
  type: ReducerActionType.EDIT_SWIMLANE;
  payload: SwimlaneProps;
};

export type CreateCardAction = {
  type: ReducerActionType.CREATE_CARD;
  payload: SwimlaneProps;
};

export type MoveCardAction = {
  type: ReducerActionType.MOVE_CARD;
  payload: { id: string; fromSwimlaneId: string; toSwimlaneId: string };
};

export type EditCardAction = {
  type: ReducerActionType.EDIT_CARD;
  payload: { card: CardProps; swimlaneId: string };
};

export type DeleteCardAction = {
  type: ReducerActionType.DELETE_CARD;
  payload: SwimlaneProps;
};

export type LoadLocalStorage = {
  type: ReducerActionType.LOAD_LOCALSTORAGE;
};

export type UpdateLocalStorage = {
  type: ReducerActionType.UPDATE_LOCALSTORAGE;
  payload: SwimlaneProps[];
};

export type ResetBoard = {
  type: ReducerActionType.RESET_BOARD;
};

export type ReducerAction =
  | CreateSwimlaneAction
  | EditSwimlaneAction
  | CreateCardAction
  | DeleteCardAction
  | EditCardAction
  | MoveCardAction
  | LoadLocalStorage
  | UpdateLocalStorage
  | ResetBoard;
