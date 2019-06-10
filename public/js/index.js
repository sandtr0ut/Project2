/* eslint-disable prettier/prettier */

var $firstName = $("#first");
var $lastName = $("#last");
var $email = $("#email");
var $password = $("#password");
var $preferences = {};
var $submitBtn = $("#submit");


var API = {
    // Create
    saveUser: function(user) {
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "/user",
            data: JSON.stringify(user)
        });
    },
    // Read
    getUserInfo: function(id) {
        return $.ajax({
            url: "/user/:" + id,
            type: "GET"
        });
    },
    
    // Update
    updateInfo: function(id) {
        return $.ajax({
            url: "/user/:" + id,
            type: "GET"
        });
    },
    
    //Delete
    deleteUser: function(id) {
        return $.ajax({
            url: "/user/:" + id,
            type: "DELETE"
        });
    }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
    API.getExamples().then(function(data) {
        var $examples = data.map(function(example) {
            var $a = $("<a>")
                .text(example.text)
                .attr("href", "/example/" + example.id);

            var $li = $("<li>")
                .attr({
                    class: "list-group-item",
                    "data-id": sport.id
                })
                .append($a);

            var $button = $("<button>")
                .addClass("btn btn-danger float-right delete")
                .text("ｘ");

            $li.append($button);

            return $li;
        });

        $exampleList.empty();
        $exampleList.append($examples);
    });
};


// Save the new user to the db
var handleFormSubmit = function(event) {
    event.preventDefault();

    var newUser = {
        firstName: $firstName.val().trim(),
        lastName: $lastName.val().trim(),
        email: $email.val().trim(),
        password: $password.val().trim(),
        preferences: $preferences
    };

    if (!(newUser.email && newUser.password)) {
        alert("You must enter your email and password!");
        return;
    }

    API.saveUser(newUser).then(function() {
        alert("User Added");
        
    });

    $firstName.val("");
    $lastName.val("");
    $email.val("");
    $password.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
    var idToDelete = $(this)
        .parent()
        .attr("data-id");

    API.deleteExample(idToDelete).then(function() {
        refreshExamples();
    });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
