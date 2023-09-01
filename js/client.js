// or
// $( function () {});

console.log('Hello World');
let studentCount = 0;

$(onReady); // "new" way to set onReady function

function onReady() {
    // Wire up our click handlers
   // Add Cohort Button
   $('#addCohort').on('click', addCohort);

   // Delete Cohort Button
   $('.delete').on('click', deleteCohort);

   // Listen on #cohorts ul item, for clicks on children.
   // If an element (like a button) started the click event
   // that had a class of '.delete', THEN call deleteCohort()
   // Why? Because delete buttons do NOT exist when onReady
   // first fires, they're added later via user actions
   // so we have to add our listener to something else on the
   // DOM that's available now and is an ancestor of the
   // element we DO care about
   $('#cohorts').on('click', '.delete', deleteCohort);
}
