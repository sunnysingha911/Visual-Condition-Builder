# Visual Condition Builder

A React application that allows users to visually create and manage nested logical conditions using groups and rules. Users can combine rules with logical operators (AND / OR), nest groups infinitely, and view the resulting condition structure as JSON in real time.

## 🚀 Features

- **Nested Groups**: Create deeply nested logical structures.
- **Dynamic Rules**: Add, update, or delete individual rules within groups.
- **Logical Operators**: Support for AND/OR operators at the group level.
- **Real-time Preview**: Instantly see the generated logic in JSON format.
- **UI**: Built with React 19.2.0, TypeScript, and Tailwind CSS 4.

## 🛠️ Setup Instructions

Ensure you have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed on your machine.

1. **Clone the Repository**

   ```bash
   git clone https://github.com/sunnysingha911/Visual-Condition-Builder
   cd visual-condition-builder
   ```

2. **Install Dependencies**

   ```bash
   yarn
   ```

3. **Start the Development Server**

   ```bash
   yarn dev
   ```

4. **Build for Production**
   ```bash
   yarn build
   ```

## 📂 Folder Structure

```text
/src
  /components      # Reusable UI components
    - ActionBar.tsx # Controls for adding rules/groups
    - Button.tsx    # Styled button component
    - Dropdown.tsx  # Custom dropdown for fields and operators
    - Group.tsx     # Container for logical groups
    - Input.tsx     # Styled input field
    - Result.tsx    # JSON preview display
    - Rules.tsx     # Individual rule component
  /context         # State management using React Context
    /NodeContext   # Specific context for managing the condition tree
  /hooks           # Custom React hooks (e.g., useNode)
  - App.tsx        # Main application layout and logic
  - App.css        # App-specific styles
  - index.css      # Global styles and Tailwind imports
  - main.tsx       # React entry point
  - types.ts       # TypeScript interfaces, types, and enums
```

## 🧩 Assumptions

- **Logic Tree**: The application creates a tree-like structure where each node is either a "rule" or a "group". A group can contain multiple rules or other groups.
- **State Management**: State is handled using React's `useReducer` and `Context API` to ensure a clean, predictable flow without external libraries like Redux.
- **Value Handling**: Input values for rules are treated as strings.

## ⚠️ Known Limitations

- **Field Validation**: Values are currently captured as strings. Strict type validation (e.g., ensuring "Price" is a number) is not enforced at the UI level.
