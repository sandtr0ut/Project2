$(document).ready(function () {

    //globals
    var signupForm = $("#signup");
    var firstNameInput = $("#inputFirst").val().trim();
    var lastNameInput = $("#inputLast").val().trim();
    var emailInput = $("#inputEmail").val().trim();
    var passwordInput = $("#inputPW").val().trim();
    var nfl = $("#nflCheck").prop("checked");
    var nba = $("#nbaCheck").prop("checked");
    var mlb = $("#mlbCheck").prop("checked");
    var nhl = $("#nhlCheck").prop("checked");
    var ncaaf = $("#ncaafCheck").prop("checked");
    var ncaab = $("#ncaabCheck").prop("checked");

    //event-listener for form-submission
    $(document).on("submit", "#signup", handleSignupFormSubmit);
    $(document).on("click", "#cancel", handleCancel);


    function handleSignupFormSubmit(event) {
        event.preventDefault();
        if (!firstNameInput || !lastNameInput || !emailInput || !passwordInput) {
            return;
        }

        createUser({
            first: firstNameInput,
            last: lastNameInput,
            email: emailInput,
            password: passwordInput,
            nfl: nfl,
            nba: nba,
            mlb: mlb,
            nhl: nhl,
            ncaaf: ncaaf,
            ncaab: ncaab
        })
    }

    function createUser(userData) {
        $.post("/api/users", userData)
            .then(loadDashboard);
    }

    function loadDashboard() {
        window.location.href = "/dashboard.html"
    }

    function handleCancel() {
        window.location.href = "/home.html"
    }

});