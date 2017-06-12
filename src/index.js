var $ = require('jquery');
require('./less/index');

var App = function() {
	// console.log(str);
    $('body').html('<div class="b-test"><h3 class="b-test__heding">Heading <div> </div></h3></div>');
};

var app = new App();
app.get = function() {};
