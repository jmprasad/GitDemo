function car ()
{
// example 
this.firstinput = element(by.model("first"));

// this.firstinput is a property so paranthesis in the main file
this.secondinput = element(by.model("second"));
this.goButton = element(by.id("gobutton"));
this.result = element(by.css("h2[class='ng-binding']"));
this.color = "red";
this.model = "Nokia";
this.getURL = function()
{
browser.get('http://julimer.github.io/protractor-demo/');	
};
	
this.getmodel = function() {

	console.log ("print the function");
	
};

};

// To access the function - create a object
// This is for  Java
/*
var a = new car()
a.getmodel();
*/
// This is in Javascript
module.exports = new car();