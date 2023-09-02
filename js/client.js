console.log('Hello World');


$(onReady); // "new" way to set onReady function

let monthlyCosts = 0; // global 

function onReady() {
   console.log( 'in onReady' );
   // Wire up our click handlers
   // An add Button
   $('#addEmployee').on('click', function() {
      const firstName = $('#firstName').val();
      const lastName = $('#lastName').val();
      const id = $('#id').val();
      const title = $('#title').val();
      const annualSalary = parseFloat($('#annualSalary').val() );
      
      if ( !firstName || !lastName || !id || !title || isNaN(annualSalary) || annualSalary <= 0 ) {
         alert('Please fill all fields with proper values')
         return;
      }
   

   const monthlyCost = annualSalary / 12;
   monthlyCosts += monthlyCost;

   $('#employees').append(`<li class="employee">
        <table>
           <tbody>
              <tr>
                 <td><strong>Employee Name:</strong></td>
                 <td>${firstName} ${lastName}</td>
              </tr>
              <tr>
                 <td><strong>ID:</strong></td>
                 <td>$${id}</td>
              </tr>
              <tr>
                 <td><strong>Title:</strong></td>
                 <td>$${title}</td>
              </tr>
              <tr>
                 <td><strong>Salary:</strong></td>
                 <td>$${annualSalary.toFixed(2)}</td>
              </tr>
              <tr>
                 <td><strong>Monthly Cost:</strong></td>
                 <td>$${monthlyCost.toFixed(2)}</td>
              </tr>
           </tbody>
        </table>
        <button class="delete">Delete</button>
     </li>`);

   });
}  

   // Delete Button
   // $('#deleteEmployee').on('click', deleteEmployee);
   





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