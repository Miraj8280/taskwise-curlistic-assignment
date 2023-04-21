# TaskWise

TaskWise is a web application built using React.js and advanced React Hooks such as useEffect, useMemo, useContext, and useRef. It also utilizes a drag and drop library for sorting the todos. This application allows users to manage their todos, including adding, deleting, checking/unchecking, and sorting tasks using drag and drop feature. It also includes an option to switch between grid and list view for displaying the todos.

## Features

- Add Todo: Users can add new todos by entering a task in the input field and clicking the "Add" button. The new task will be added to the list of todos.

- Delete Todo: Users can delete a todo by double-clicking on the task. The task will be removed from the list of todos.

- Check/Uncheck Todo: Users can check/uncheck a todo by double-clicking on the check icon. The status of the task will be toggled between checked and unchecked, and the task will be visually updated with a strike-through effect when checked.

- Sort Todos: Users can sort the todos using the drag and drop feature. They can drag and drop a todo item to reorder the list of todos according to their preference.

- Grid/List View: Users can switch between grid and list view to display the todos. Grid view displays todos as cards in a grid layout, while list view displays todos as a vertical list.

## Usage

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
```
git clone https://github.com/Miraj8280/taskwise-curlistic-assignment.git

```

2. Change to the project directory:
`cd todo-app-curlistic-assignment`

3. Install dependencies:
`npm install`

### Runnign the Application 

1. Start the development server:
`npm start`

2. Open your web browser and go to http://localhost:3000 to access the application.


### Features & Usage Instructions

- Add Todo: Enter a task in the input field and click the "Add" button. The task will be added to the list of todos.

- Delete Todo: Double-click on a task to delete it. The task will be removed from the list of todos.

- Check/Uncheck Todo: Double-click on the check icon of a task to toggle its status between checked and unchecked. The task will be visually updated with a strike-through effect when checked.

- Sort Todos: Drag and drop a todo item to reorder the list of todos according to your preference.

- Grid/List View: Click on the grid or list view icon to switch between grid and list view for displaying the todos.


## Technologies Used

- React.js: A popular JavaScript library for building user interfaces.

- React Hooks: Advanced features in React that allow for state management and side effects in functional components.

- useEffect: A Hook in React that allows for side effects, such as fetching data or subscribing to data updates, to be performed in a functional component.

- useMemo: A Hook in React that allows for memoization of computed values, helping to optimize performance.

- useContext: A Hook in React that allows for accessing the context of a parent component in a child component without prop drilling.

- useRef: A Hook in React that allows for creating a mutable reference to a value or DOM element that persists across renders.

- Drag and Drop Library: A library used for implementing the drag and drop feature for sorting todos.