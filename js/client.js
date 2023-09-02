console.log("Hello World");

$(onReady); // "new" way to set onReady function

let monthlyCosts = 0; // global

function onReady() {
  console.log("in onReady");
  // Wire up our click handlers
  // An add Button
  $("#addEmployee").on("click", function () {
    const firstName = $("#firstName").val();
    const lastName = $("#lastName").val();
    const id = $("#id").val();
    const title = $("#title").val();
    const annualSalary = parseFloat($("#annualSalary").val());

    if (
      !firstName ||
      !lastName ||
      !id ||
      !title ||
      isNaN(annualSalary) ||
      annualSalary <= 0
    ) {
      alert("Please fill all fields with proper values");
      return;
    }

    const monthlyCost = annualSalary / 12;
    monthlyCosts += monthlyCost;

    $("#employees").append(`
            <li class="employee">
                <table>
                    <tbody>
                        <tr>
                            <td><strong>Employee Name:</strong></td>
                            <td>${firstName} ${lastName}</td>
                        </tr>
                        <tr>
                            <td><strong>ID:</strong></td>
                            <td>${id}</td>
                        </tr>
                        <tr>
                            <td><strong>Title:</strong></td>
                            <td>${title}</td>
                        </tr>
                        <tr>
                            <td><strong>Salary:</strong></td>
                            <td>${annualSalary.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td><strong>Monthly Cost:</strong></td>
                            <td>${monthlyCost.toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
                <button class="delete">Delete</button>
            </li>
        `);
    updateCosts();
    clearFields();
  });

  // Delete Button
  $('#employees').on('click', 'delete', function () { // targeting ul id 'employees'

  }

  // Update monthly cost total
  function updateCosts() {
    console.log("in updateCosts");
    $("#totalCosts").text("$" + monthlyCosts.toFixed(2)); // update text content using ID totalCosts

    if (monthlyCosts > 20000) {
      $("#totalCosts").addClass("high-cost");
    } else {
      $("#totalCosts").removeClass("high-cost");
    }
  }

  // Clear input fields
  function clearFields() {
    $("#firstName").val("");
    $("#lastName").val("");
    $("#id").val("");
    $("#title").val("");
    $("#annualSalary").val("");
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
