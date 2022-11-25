import { SwimlaneProps } from "../components/Swimlane";

export const initialState: SwimlaneProps[] = [
  {
    id: 1,
    name: "To Do",
    cards: [],
  },
  {
    id: 2,
    name: "In progress",
    cards: [],
  },
  {
    id: 3,
    name: "Done",
    cards: [],
  },
];
