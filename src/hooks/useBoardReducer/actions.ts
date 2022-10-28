import { SectionProps } from "../../components/Section";

export enum ReducerActionType {
  CREATE_CARD,
  DELETE_CARD,
  EDIT_CARD,
  MOVE_CARD,
}

export type CreateCardAction = {
  type: ReducerActionType.CREATE_CARD;
  payload: SectionProps;
};

export type MoveCardAction = {
  type: ReducerActionType.MOVE_CARD;
  payload: { id: string; fromSectionId: string; toSectionId: string };
};

export type DeleteOrEditCardAction = {
  type: ReducerActionType.DELETE_CARD | ReducerActionType.EDIT_CARD;
  payload: SectionProps;
};

export type ReducerAction =
  | CreateCardAction
  | DeleteOrEditCardAction
  | MoveCardAction;
