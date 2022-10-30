# Getting Started with Trello Clone

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

After some consideration on the UI I implemented the skeleton of the application, starting from the ui 
components, then the state manager, then adding all the required actions for managing the board.
At the end I focused on improving performance and UI/UX aspects.

## [Live Demo](https://taupe-lamington-c1e102.netlify.app/) ⚡

![Demo](/demo/demo.png)

# State manager 🏬

For the state management my choice went on implementing a simple state manager based on React Context (in order to share a store in different part of the application) and a custom hook using useReducer.
All the logic about dispatching actions (adding, editing, moving, removing cards) are delegated to it.
The state is persisted in the browser Localstorage.

# UI 🎨

- No external UI library is used, emojis are used in place of icons.
- Drag and drop between swimlane is possible, this is implemented through the drag API of JavaScript.
- The header of each swimlane/column shows the  number of existing cards.
- I opted for deleting a card instead of Trello's approach where the card are archived.
- It is possible to reset the board (the default initial state is reloaded).

# Models

Each component model: swimlane, card and board have common like unique id, name, content.

- A Board is a container of swimlanes
- A Swimlane is a container of cards
- A Card contains textual content

# Tests 🧪

I focused only on the business logic of the application and not on the rendering logic.

# Ship to prod 🚢

Thanks to husky each commit and push perform unit tests, eslint, prettify the code.
Then deploy it on netlify (demo).

# Performance ⚡

Reduce rerendering

# Features 💅

- Showing the new cards added (check diff between original state and current one) in the header (similarly to the notification in Trello)
- Counter on columns, if there are more then 7 items is difficult to count them.
- Minimal Modal component for editing
- Delete or archive? For the moment I opted for deleting a card

# Todo

- Improve tests
- Bug fixing


## Available Scripts

In the project directory, you can run:

### `yarn`

Install all dependencies and husky hooks

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`
