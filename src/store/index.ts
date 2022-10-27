import { SectionProps } from "../components/Section";

export const initialState: SectionProps[] = [
  {
    id: "1",
    name: "To Do",
    cards: [
      {
        id: "1.1",
        content: "lorem ipsum",
      },
      {
        id: "1.2",
        content: "lorem ipsum",
      },
      {
        id: "1.3",
        content: "lorem ipsum",
      },
    ],
  },
  {
    id: "2",
    name: "In progress",
    cards: [
      {
        id: "1",
        content: "lorem ipsum",
      },
    ],
  },
  {
    id: "3",
    name: "Done",
    cards: [
      {
        id: "1",
        content: "lorem ipsum",
      },
    ],
  },
];
