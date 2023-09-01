console.log('Hello World');
let monthlyCosts = 0;

$(onReady); // "new" way to set onReady function

function onReady() {
   console.log( 'in onReady' );
   // Wire up our click handlers
   // An add Button
   $('#addEmployee').on('click', addEmployee);
   console.log( 'listening for addEmployee!' );

   // Delete Button
   $('#deleteEmployee').on('click', deleteEmployee);
   console.log( 'listening for deleteEmployee!' );

   // Listen on #employees ul item, for clicks on children.
   // If an element (like a button) started the click event
   // that had a class of '.delete', THEN call deleteEmployee()
   // Why? Because delete buttons do NOT exist when onReady
   // first fires, they're added later via user actions
   // so we have to add our listener to something else on the
   // DOM that's available now and is an ancestor of the
   // element we DO care about (*FIX THIS LATER, UPDATE #EMPLOYEES CLASS*)
   $('#employees').on('click', '.delete', deleteEmployee);
}

// A 'Submit' button should collect the form information,
function addEmployee(event) {
   console.log( 'in addEmployee' );
}
// store the information to calculate monthly costs,

// append information to the DOM and

// clear the input fields

// Add a delete button
function deleteEmployee(event) {
   console.log( 'in deleteEmployee' );
   // Update the global count
   // Walk the DOM: Go from button (event.target) UP to the list-item (.cohort)
   // then search down for the td that has the current cohort count (.current-count)
   // then, grab the text value (number), convert it to a number, subtract
   // that value from the global count, and update the DOM
   const currentCount = $(event.target).closest('.cohort').find('.current-count').text();
   studentCount -= Number(currentCount);
   $('#totalStudents').text(studentCount);

   // $(event.target).css('background-color', 'red');
   $(event.target).parent().remove(); // removes parent only
   $(event.target).closest('.employee').remove(); // searches ancestors (preferred)

   // When there are more than 10 students, make it bold
   if (studentCount < 10) {
      $('#totalStudents').css('text-decoration', 'none');
   } 
}





// ~~~~~~~~~Extra/ Notes Below~~~~~~~~~~~


/*function addEmployee(event) {
   console.log('in add ');
   const employeeName = $('#employeeName').val();
   const salaryCount = $('#salaryCount').val();
   
   // add event.disable here to prevent page loading when button clicked

   console.log('in add', employeeName, salaryCount);
} // take out later

   // append to the ul*/
  /* $('#cohorts').append(`<li class="cohort">
      <table>
         <tbody>
            <tr>
               <td><strong>Cohort Name:</strong></td>
               <td>${cohortName}</td>
            </tr>
            <tr>
               <td><strong># Students:</strong></td>
               <td class="current-count">${cohortCount}</td>
            </tr>
         </tbody>
      </table>
      <button class="delete">Delete</button>
   </li>`);
   // Clear the fields
   $('#cohortName').val('');
   $('#cohortCount').val('');

   // Update student count
   studentCount += Number(cohortCount);
   $('#totalStudents').text(studentCount);

   // When there are more than 10 students, make it bold
   if (studentCount > 10) {
      $('#totalStudents').css('text-decoration', 'underline');
   } 
} */