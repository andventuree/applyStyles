//created this project for the testing of knowledge
//i did not memorize CSS yet
//i was not super familiar with connecting HTML CSS and JS
//typing all this code repeatedly help to memorize it

console.log('js connected');

//save the element you want to be manipulated 
//and to show all the styles
var displayStyle = document.getElementById('displayStyle');
var modeBtn = document.getElementsByClassName('mode');
// var resetBtn = document.getElementById('reset');
// var allStyles = document.getElementById('allStyles');

//add this feature later
	// //create a function that can be callback that will toggle
	// //comment syntax for CSS to show style is not applied
	// var commentSyntax = getElementsByClassName('syntax');
	// function commentOut() {
	// 	document.getElementsByClassName('comment');
	// }

//create the loop that puts the style on a selected button
	//select all the buttons and store in a variable
	var allBtn = document.querySelectorAll('button');
	//create the loop that allows you to select any button
	for (var i = 0; i < allBtn.length; i++) {
		//add the click event listener
		allBtn[i].addEventListener('click', function(){
			//add the toggle for applying the CSS style
			this.classList.toggle('selectedBtn');
			// commentOut();
		});
	}

//putting both selector and manipulators on the same line
//no need for unnecessary variables
document.querySelector('.transition').addEventListener('click', function() {
	displayStyle.classList.toggle('transitionCSS');
});
document.querySelector('.background').addEventListener('click', function() {
	displayStyle.classList.toggle('backgroundCSS');
});
document.querySelector('.color').addEventListener('click', function(){
	displayStyle.classList.toggle('colorCSS');
});
document.querySelector('.font').addEventListener('click', function() {
	displayStyle.classList.toggle('fontCSS');
});
document.querySelector('.height').addEventListener('click', function() {
	displayStyle.classList.toggle('heightCSS');
});
document.querySelector('.width').addEventListener('click', function() {
	displayStyle.classList.toggle('widthCSS');
});
document.querySelector('.margin').addEventListener('click', function() {
	displayStyle.classList.toggle('marginCSS');
});
document.querySelector('.border').addEventListener('click', function() {
	displayStyle.classList.toggle('borderCSS');
});
document.querySelector('.padding').addEventListener('click', function() {
	displayStyle.classList.toggle('paddingCSS');
});
document.querySelector('.opacity').addEventListener('click', function() {
	displayStyle.classList.toggle('opacityCSS');
});
document.querySelector('.box').addEventListener('click', function(){
	displayStyle.classList.toggle('boxCSS');
});
document.querySelector('.textAlign').addEventListener('click', function() {
	displayStyle.classList.toggle('textAlignCSS');
});
document.querySelector('.transform').addEventListener('click', function() {
	displayStyle.classList.toggle('transformCSS');
});
document.querySelector('.letterSpace').addEventListener('click', function() {
	displayStyle.classList.toggle('letterSpaceCSS');
});

//need a reset button to take off all the styles instead of having to refresh
effectAll();

function effectAll() {
	for(var i = 0; i < modeBtn.length; i++) {
		modeBtn[i].addEventListener('click', function(){
			//loop to remove highlighted button from both
			modeBtn[0].classList.remove('selectedBtn');
			modeBtn[1].classList.remove('selectedBtn');
			//only add highlighted effect to clicked button
			this.classList.add('selectedBtn');
			//turnary operator - shorter way to write an if stat
			this.textContent === 'Reset' ? resetAll(): applyAll();
		});
	}
}


function applyAll() {
		displayStyle.classList.add('transitionCSS');
		displayStyle.classList.add('backgroundCSS');
		displayStyle.classList.add('colorCSS');
		displayStyle.classList.add('fontCSS');
		displayStyle.classList.add('heightCSS');
		displayStyle.classList.add('widthCSS');
		displayStyle.classList.add('marginCSS');
		displayStyle.classList.add('borderCSS');
		displayStyle.classList.add('paddingCSS');
		displayStyle.classList.add('opacityCSS');
		displayStyle.classList.add('boxCSS');
		displayStyle.classList.add('textAlignCSS');
		displayStyle.classList.add('transformCSS');
		displayStyle.classList.add('letterSpaceCSS');
		for (var i = 0; i < allBtn.length; i++) {
		allBtn[i].classList.add('selectedBtn');
		}
}

function resetAll() {
	displayStyle.classList.remove('transitionCSS');
	displayStyle.classList.remove('backgroundCSS');
	displayStyle.classList.remove('colorCSS');
	displayStyle.classList.remove('fontCSS');
	displayStyle.classList.remove('heightCSS');
	displayStyle.classList.remove('widthCSS');
	displayStyle.classList.remove('marginCSS');
	displayStyle.classList.remove('borderCSS');
	displayStyle.classList.remove('paddingCSS');
	displayStyle.classList.remove('opacityCSS');
	displayStyle.classList.remove('boxCSS');
	displayStyle.classList.remove('textAlignCSS');
	displayStyle.classList.remove('transformCSS');
	displayStyle.classList.remove('letterSpaceCSS');
	for (var i = 0; i < allBtn.length; i++) {
	allBtn[i].classList.remove('selectedBtn');
	}
}




















































