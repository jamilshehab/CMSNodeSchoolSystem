// when the page lunch 
$("#teachers, #classesSchedule, #examGrades, #examSchedule, #paymentOnlineForm").hide();

// on click the teacher button on -(( THE LEFT NAV ))- the teacher section will appear and every thing will hide
$("#teachersButton").click(function () {
    $("#pageTitleSection h1").text("Teachers");
    $("#pageTitleSection ol li").text("Dashboard / Parent / Teachers");
    $("#studentHeader, #attendanceView, #payment,#paymentOnlineForm, #classesSchedule, #examGrades, #examSchedule").hide();
    $("#teachers").show();
});

// Classes Button
$("#classesButton").click(function () {
    $("#pageTitleSection h1").text("Classes");
    $("#pageTitleSection ol li").text("Dashboard / Parent / Classes");
    $("#studentHeader, #attendanceView, #payment,#paymentOnlineForm, #teachers, #examGrades, #examSchedule").hide();
    $("#classesSchedule").show();
})

// Exam Grades Button
$("#examGradesButton").click(function () {
    $("#pageTitleSection h1").text("Exam Grade");
    $("#pageTitleSection ol li").text("Dashboard / Parent / Exam Grade");
    $("#studentHeader, #attendanceView, #payment,#paymentOnlineForm , #teachers, #examSchedule, #classesSchedule").hide();
    $("#examGrades").show();
});
// Exam schedule Button
$("#examScheduleButton").click(function () {
    $("#pageTitleSection h1").text("Exam Schedule");
    $("#pageTitleSection ol li").text("Dashboard / Parent / Exam Schedule");
    $("#studentHeader, #attendanceView, #payment,#paymentOnlineForm, #teachers, #examGrades, #classesSchedule").hide();
    $("#examSchedule").show();
});

// payment Button
$("#paymentButton").click(function () {
    $("#pageTitleSection h1").text("Payment");
    $("#pageTitleSection ol li").text("Dashboard / Parent / Payment");
    $("#studentHeader, #attendanceView, #examGrades, #teachers, #examSchedule, #classesSchedule").hide();
    $("#payment, #paymentOnlineForm").show();
});

// for the checkbox button ( pay online )
$(document).ready(function () {
    $("#paymentOnlineForm .card").addClass("bg-custom-light-gray");
    $("#paymentOnlineFormWrap input, select").prop("disabled", true);
    $("#onlinePayCheckbox").change(function () {
        if ($(this).prop("checked")) {
            $("#paymentOnlineForm .card").removeClass("bg-custom-light-gray");
            $("#paymentOnlineFormWrap input, select").prop("disabled", false);
        } else {
            $("#paymentOnlineForm .card").addClass("bg-custom-light-gray");
            $("#paymentOnlineFormWrap input, select").prop("disabled", true);
        }
    });
});