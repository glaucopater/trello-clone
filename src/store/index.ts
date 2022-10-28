import { SwimlaneProps } from "../components/Swimlane";

export const initialState: SwimlaneProps[] = [
  {
    id: "1",
    name: "To Do",
    cards: [
      {
        id: "1.1",
        content: "lorem ipsum 1.1",
      },
      {
        id: "1.2",
        content: "lorem ipsum 2.1",
      },
      {
        id: "1.3",
        content: "lorem ipsum 3.1",
      },
    ],
  },
  {
    id: "2",
    name: "In progress",
    cards: [
      {
        id: "1",
        content: "lorem ipsum 2.1",
      },
    ],
  },
  {
    id: "3",
    name: "Done",
    cards: [
      {
        id: "1",
        content: "lorem ipsum 2.2",
      },
    ],
  },
];
