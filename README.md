# Getting Started with Trello Clone

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
After some consideration on the UI I implemented the skeleton of the application, starting from the ui components, then the state manager and then refining all the other UX aspects.

# State manager 
For the state management my choice went on implementing a simple state manager based on React Context (in order to share a store in different part of the application) and a custom hook using useReducer.
All the logic about dispatching action and a copy of the new state are delegated to it.

# UI
The header shows the number of existing cards.
Each lanes can contain different cards.
I opted for a different flow in removing a card, as Trello has a different approach storing the deleted card inside an archive.
Models

Each item: lanes, card and board has common prop: unique id, name, title, content.

Board:
- swimlane:
    [{ Id, name, cards:[
        id, content
    ]}

# Tests
I focused only on the business logic of the application and not on the rendering logic.

# Ship to prod
Thanks to husky each commit and push perform unit tests, eslint, prettify the code. 
Then deploy it on netlify (demo).

# Performance
Reduce rerendering

# Features
- Showing the new cards added (check diff between original state and current one) in the header (similarly to the notification in Trello)
- Counter on columns, if there are more then 7 items is difficult to count them.
- Minimal Modal component for editing
- Delete or archive? For the moment I opted for deleting a card

# Todo

- Store the state inside localStorage, in case of update apply the changes, load it as initialState
- Menu for the lanes (to add card, rename lane)
- Demo on vercel

## Available Scripts

In the project directory, you can run:

### `yarn`
Install all dependencies and husky hooks

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

---
