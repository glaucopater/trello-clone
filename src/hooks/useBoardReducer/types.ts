import { SectionProps } from "../../components/Section";

export enum ReducerActionType {
  CREATE_CARD,
  DELETE_CARD,
  EDIT_CARD,
}

export type CreateCardAction = {
  type: ReducerActionType.CREATE_CARD;
  payload: SectionProps;
};

export type DeleteOrEditCardAction = {
  type: ReducerActionType.DELETE_CARD | ReducerActionType.EDIT_CARD;
  payload: SectionProps;
};

export type ReducerAction = CreateCardAction | DeleteOrEditCardAction;
