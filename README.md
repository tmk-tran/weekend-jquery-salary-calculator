# Project Name 'Salary Manager'

A 'Submit' button should collect the form information, store the information to calculate monthly costs, append information to the DOM and clear the input fields. Using the stored information, calculate monthly costs and append this to the to DOM. If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

Create a delete button that removes an employee from the DOM. For Base mode, it does not need to remove that Employee's salary from the reported total.

# Stretch

Add styling or extra functionality that fits with the theme of this assignment.
Once the employee is deleted, update the Total Monthly Cost section on the page to reflect the employee's removal. HINT: You will need to figure out which employee was removed, in order to subtract their salary from the total. Consider using .text() as a getter, or look into jQuery's .data()function. This is tricky!

## Assignment

The application should have an input form that collects _employee first name, last name, ID number, job title, annual salary_.

A 'Submit' button should collect the form information, store the information to calculate monthly costs, append information to the DOM and clear the input fields. Using the stored information, calculate monthly costs and append this to the to DOM. If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

Create a delete button that removes an employee from the DOM. For Base mode, it does **not** need to remove that Employee's salary from the reported total.

- Some of the problems I solved were getting the layout of my elements to work, learning how to target specific elements (walking the DOM). Additionally, making little changes using flexbox and styles to rearrange my page to look like a calculator
- I helped to solve this by using borders around everything to visualize, and also added an image for reference to get a model of how I wanted the elements to be arranged. The notes from lecture and study really assisted me in applying the same concept to this project! Additionally, using 'inspect elements' to make adjustments to layout helped a lot.


TODO:
- round corners of monthly costs
- change fonts of text at top
- round corners of appended table data