# Getting Started with Trello Clone

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## [Live Demo](https://taupe-lamington-c1e102.netlify.app/) ⚡

![Demo](/demo/demo.png)

# State manager 🏬

For the state management my choice went on implementing a simple state manager based on React Context (in order to share a store in different parts of the application) and a custom hook using useReducer.
All the logic about dispatching actions (adding, editing, moving, removing cards) are delegated to it.
The state is persisted in the browser Localstorage.

# UI 🎨

- No external UI library is used, emojis are used in place of icons.
- Drag and drop between swimlane is possible, this is implemented through the drag API of JavaScript.
- The header of each swimlane/column shows the number of existing cards.
- I opted for deleting a card instead of Trello's approach where the card are archived.
- It is possible to reset the board (the default initial state is reloaded).

# Models 📐

The application considers three main models: Board, Swimlane, Card.

- A Board is a container of Swimlanes
- A Swimlane is a container of Cards
- A Card contains textual content

# Tests 🧪

I focused only on the business logic of the application and not on the rendering logic.

# Ship to prod 🚢

Thanks to husky each commit /push perform unit tests, eslint, prettify the code.
Then deploy it on netlify (demo).

# Performance ⚡

Reduce rerendering

# Possible Features and Extensions 💅

- Drag and drop of Swimlanes
- Extending the models with other property (to simplify the implementation the current logic considers only the id, but could make
  sense to have also a priority/sorting index for card and swimlane)
- Showing the new cards added (checkinghe the difference between original state and current one) in the header like
- Minimal Modal component for editing a card, considering also the possibility to use rich text content.
- Multi Board support

## Available Scripts

In the project directory, you can run:

### `yarn`

Install all dependencies and husky hooks

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`
