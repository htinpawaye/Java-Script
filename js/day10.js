$(document).ready(function () {
    //select element
    let lis = $('li');//tagname
    console.log(lis);
    let hotitems = $('li.hot,.promotion');//multiple classes
    console.log(hotitems);
    let username = $('#username');
    console.log(username);
    let pass = $('#pass');
    console.log(pass);

    //html , text 
    console.log(lis.text());
    console.log(lis.html());

    console.log($('li:even'));
    console.log($('li:odd'));

    //css
    //$('li:even').css('background-color', 'green');
    //$('li:even,.hot').css('text-transform', 'uppercase');

    //class
    $('li:first').addClass('first discount');//addclass

    $('li.promotion').removeClass('promotion');//removeclass

    //events
    $('.btnToggle').click(function () {
        $('li:first').toggleClass('first');
    })

    console.log($('li:first').hasClass('first'));

    //manage elements
    $('ul').append('<li><h3>Append Element</h3></li>')
    $('ul').prepend('<li>Prepend</li>');
    $('ul').before('<h3>To Buy List</h3>');
    $('ul').after('<h3>To Do List</h3>');
    let new_element = $('<p>Paragraph</p>');
    new_element.appendTo('ul');

    //attribute attr()
    let gender = $('<input>')
    gender.attr('type', 'radio')
    gender.attr('name', 'gender')

    $('ul').append(gender);
    $('ul').append('<label>Male</label>')
})