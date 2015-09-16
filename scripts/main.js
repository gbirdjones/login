'use strict';
var username = $('username');
var password = $('password');
var sign = $('sign');
var bottom = $('bottom')
var login = [];

sign.on('click', check);
var pass1 = ['aaron@theironyard.com' , 'password123'];
var pass2 = ['admin@google.com' , 'pandas'];


function check(e) {
	e.preventDefault();
	login.push(username.val());
	login.push(password.val());
}


