$(document).ready(function () {

/*
AJAX is the process where we can call directly to a web server, from Javascript,
and load other information, e.g. an HTML file, PHP + MySQL results, etc.
*/
$('.ajax-in').on('click', function (ev) {
// AJAX paths are relative to the HTML file not the JS file
$('.fill-me').load('ajax-in.html');

});

$('.ajax-in2').on('click', function (ev) {
// AJAX paths are relative to the HTML file not the JS file
$('.fill-me').load('ajax-in2.html');

});

$('.ajax-in3').on('click', function (ev) {
// AJAX paths are relative to the HTML file not the JS file
$('.fill-me').load('ajax-in3.html');

});

});