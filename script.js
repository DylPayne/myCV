$(document).ready(function() {
    $('#header-contact-me-btn').mouseenter(function() {
        $('#header-contact-me-btn').animate({
            borderRadius: '5px',
        },150);
    });
    $('#header-contact-me-btn').click(function() {
        $('#contact-me-div').slideDown();
    });
    $('#header-contact-me-btn').mouseout(function() {
        $('#header-contact-me-btn').animate({
            borderRadius: '30px'
        },150);
    });
});