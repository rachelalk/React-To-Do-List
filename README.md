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
    <li>We were pleased with how everything was going, we had an input field and button to submit your new to do list item.
        <li>We were able to use the handleChange() function to track the input in the box but ran into issues capturing the data and assigning it to the state variable.
            <li>We spent a lot of time brainstorming and googling but were well and truly stuck so didn't get much further on hackathon day.
                <li>We had asked for help but so many people were needing assistance, it never came. We didn't give up though, we ended the day with an array that captured the input but nothing to show on screen.
                    <li>I came back to this task the next day, what I realised from seeing other people's presentations is that I had totally misunderstood states and so had my partner. I thought that you could only have one state per project which was really hindering us, it turns out that you can have multiple states and with this new found knowledge I was able to complete the task alone the following day.
                        <li> I added the functionality to input new tasks which would display on the screen. Amended the array input to include a unique ID for each task and added a delete button to each task. - In the end I used 4 separate states to complete the task.
                            <li>I even added a little bit of CSS.
                                
                               <li>I'm really pleased with how the to do list turned out and feel much more confident with react after completing this and the weekend task of creating a blog page with a box to add a name and comment.
                                   <li><a href="https://twitter.com/rachelalk/status/1535586120490156035">Click here</a> to view a short demo video of the working project.
    
