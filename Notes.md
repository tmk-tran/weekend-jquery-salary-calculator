

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