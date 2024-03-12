function validateForm() {
    let error = false;

    //show error msg for each required element

    let rating_value = document.forms["question_form"]["rating"].value;
    var rating_error_element = document.getElementById("rating-error");
    var rating_element = document.getElementById("rating");
    if (rating_value == "") {
        rating_element.classList.add("error")
        rating_error_element.classList.remove("hidden");
        error = true;
    } else {
        rating_element.classList.remove("error")
        rating_error_element.classList.add("hidden");
        error = false;
    }

    let question = document.forms["question_form"]["question"].value;
    var question_error_element = document.getElementById("question-error");
    var question_element = document.getElementById("question");
    if (question == "") {
        question_element.classList.add("error")
        question_error_element.classList.remove("hidden");
        error = true;
    } else {
        var question_error_element = document.getElementById("question-error");
        var question_element = document.getElementById("question");
        question_element.classList.remove("error")
        question_error_element.classList.add("hidden");
        error = false;
    }

    return !error;
}