$(document).ready(function() {
    // Initialize total monthly cost
    var totalMonthlyCost = 0;

    // Function to calculate and update total monthly cost
    function updateTotalMonthlyCost() {
        $("#totalStudents").text("$" + totalMonthlyCost.toFixed(2));
        if (totalMonthlyCost > 20000) {
            $("#totalStudents").addClass("high-cost");
        } else {
            $("#totalStudents").removeClass("high-cost");
        }
    }

    // Event handler for submitting the form
    $("#addEmployee").click(function(event) {
        event.preventDefault();

        // Get input values
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var id = $("#id").val();
        var title = $("#title").val();
        var annualSalary = parseFloat($("#annualSalary").val());

        // Calculate monthly cost
        var monthlyCost = annualSalary / 12;

        // Add employee to the list
        var employeeInfo = firstName + " " + lastName + " (ID: " + id + ", Title: " + title + ")";
        $("#employees").append("<li>" + employeeInfo + ": $" + monthlyCost.toFixed(2) + " per month</li>");

        // Update total monthly cost
        totalMonthlyCost += monthlyCost;
        updateTotalMonthlyCost();

        // Clear input fields
        $("#firstName").val("");
        $("#lastName").val("");
        $("#id").val("");
        $("#title").val("");
        $("#annualSalary").val("");
    });
});
