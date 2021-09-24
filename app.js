// Build an application that uses jQuery to do the following:

// Contains a form with two inputs for a title and rating along with a button to submit the form.


$('body').append('<form></form>');
$('form').append('<div><label for="title">Movie Title: </label><input type="text" name="title" id="title"></input></div>');
$('form').append('<div><label for="rating">Rating: </label><input type="number" min="1" max="5"name="rating" id="rating"></input></div>');
$('form').append('<div><input type="submit" name="submit" id="submit" value="Submit"></input></div>');

$('body').append('<div id="ratings"></div>');
$('#ratings').append('<ul style="list-style-type:none"></ul>')

// When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.
$('#submit').click(function () {
    event.preventDefault();
    $('ul').append(`<li><button type='button'>X</button>  ${$("input").eq(0).val()} - ${$("input").eq(1).val()}/5</li>`);
    $("input").eq(0).val('');
    $("input").eq(1).val('');
})

// When the button to remove is clicked, remove each title and rating from the DOM.
$('#ratings').on('click', 'button', function () {
    $(this).parent().remove();
})