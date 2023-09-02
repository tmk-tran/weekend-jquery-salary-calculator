
# Salary Manager

A 'Submit' button should collect the form information, store the information to calculate monthly costs, append information to the DOM and clear the input fields. Using the stored information, calculate monthly costs and append this to the to DOM. If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

Create a delete button that removes an employee from the DOM. For Base mode, it does not need to remove that Employee's salary from the reported total.

# Stretch

Add styling or extra functionality that fits with the theme of this assignment.
Once the employee is deleted, update the Total Monthly Cost section on the page to reflect the employee's removal. HINT: You will need to figure out which employee was removed, in order to subtract their salary from the total. Consider using .text() as a getter, or look into jQuery's .data()function. This is tricky!

## Functionality
- [x] Takes input from the user to create a (name, size)
    - [x] employee first name, last name, ID number, job title, annual salary. 
    - [x] Wire up button
    - [x] Clear
    - [x] Alert
    - [x] Use a number field
- [x] Each employee can be displayed using a ( `<li></li>` )


## TODO

- [x] Running Total
- [x] global array 
- [x] clear
- [x] append
- [x] calculate
- [x] return
- [x] delete button


   
   - To get a form tag working:
   - wrap the inputs in a form tag
   - instead of an 'on click' handler for button, you hook into
      the 'submit' event of the form
   - in the handler, use `event.preventDefault()` to cancel 
      the page reload
   - why? `required` and other validation now work