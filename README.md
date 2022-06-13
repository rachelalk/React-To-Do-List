[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=7999245&assignment_repo_type=AssignmentRepo)
<div align="center">
    <img alt="School of Code" src="./images/soc-logo.png" width="60" />
</div>
<h1 align="center">
  To do list - made with react
</h1>

<h2> The Task </h2>

<li>This week we have had an introduction to react. We have learnt about creating reusable components and storing them in seperate files, we have used hooks and states, the spread operator, .map() and .filter().
<li> Our task was to use what we have learnt this week to create a to do list using react.
   <li> We were provided the component tree and requirements below.
       <li>Scroll to the bottom to find out what I learnt.

         
## Requirements

### Component Tree

- App
  - Input
    - text input
    - add to list button
  - List
    - List Item
      - item text
      - delete button
    - List Item
      - item text
      - delete button
    - List Item
      - item text
      - delete button
    - List Item
      - item text
      - delete button
        ...

### App

_state_

- list of to dos

_behaviour_

- add item to list
- remove item from list
- render an Input and List

### Input

_state_

- text

_props_

- add function

_behaviour_

- render an input field and a button
- change of input text will update state of this component
- button click will call the add function from props with value of input

### List

_props_

- array of to dos
- delete function

_behaviour_

- render an array of ListItems in a `ul`

### List item

_props_

- text
- delete function

_behaviour_

- render the text and a button
- when the button is clicked call the delete function to delete item at this index
           </div>
           
<h2>What I learnt:</h2>
           <li>We got off to a flying start, we used Create React App to initialise our project and quickly sorted our files out so that they were organised and easy to navigate, something that I have realised is very important, especially if somebody else might want to look at your code later on. We organised our app into an App folder with a Components folder inside which contained seperate files for each component created.
    
