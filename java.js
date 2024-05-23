$(document).ready(function() {
    $("#new-student").click(function() {
        $("#new-student-form").show();
        $("#existing-student-form").hide();
    });

    $("#existing-student").click(function() {
        $("#existing-student-form").show();
        $("#new-student-form").hide();
    });
});