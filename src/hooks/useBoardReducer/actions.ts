import { CardProps } from "../../components/Card";
import { SwimlaneProps } from "../../components/Swimlane";

export enum ReducerActionType {
  CREATE_CARD,
  DELETE_CARD,
  EDIT_CARD,
  MOVE_CARD,
}

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

export type ReducerAction =
  | CreateCardAction
  | DeleteCardAction
  | EditCardAction
  | MoveCardAction;
