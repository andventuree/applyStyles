//Created this project for the testing of knowledge
//i did not memorize CSS yet
//i was not super familiar with connecting HTML CSS and JS
//typing all this code repeatedly help to memorize it
console.log('js connected');

$(document).ready(function(){
	//save the element you want to be manipulated 
	//and to show all the styles
	var displayStyle = document.getElementById('displayStyle');
	var modeBtn = document.getElementsByClassName('mode');
	var resetBtn = document.getElementById('resetBtn');
	var allBtn = document.getElementById('allBtn');

	//add this feature later
		// //create a function that can be callback that will toggle
		// //comment syntax for CSS to show style is not applied
		// var commentSyntax = getElementsByClassName('syntax');
		// function commentOut() {
		// 	document.getElementsByClassName('comment');
		// }

	//putting both selector and manipulators on the same line
	//no need for unnecessary variables
	$('.transition').on('click', function() { $('#displayStyle').toggleClass('transitionCSS') });
	$('.background').on('click', function() { $('#displayStyle').toggleClass('backgroundCSS') });
	$('.color').on('click', function(){ $('#displayStyle').toggleClass('colorCSS') });
	$('.font').on('click', function() { $('#displayStyle').toggleClass('fontCSS') });
	$('.height').on('click', function() { $('#displayStyle').toggleClass('heightCSS') });
	$('.width').on('click', function() { $('#displayStyle').toggleClass('widthCSS') });
	$('.margin').on('click', function() { $('#displayStyle').toggleClass('marginCSS') });
	$('.addBorder').on('click', function() { $('#displayStyle').toggleClass('borderCSS') });
	$('.addPadding').on('click', function() { $('#displayStyle').toggleClass('paddingCSS') });
	$('.opacity').on('click', function() { $('#displayStyle').toggleClass('opacityCSS') });
	$('.box').on('click', function(){ $('#displayStyle').toggleClass('boxCSS') });
	$('.textAlign').on('click', function() { $('#displayStyle').toggleClass('textAlignCSS') });
	$('.transform').on('click', function() { $('#displayStyle').toggleClass('transformCSS') });
	$('.letterSpace').on('click', function() { $('#displayStyle').toggleClass('letterSpaceCSS') });

	//create the loop that puts the style on a selected button
		//select all the buttons and store in a variable
		var allBtn = document.querySelectorAll('.cssBtn');
		console.log(allBtn);
		//create the loop that allows you to select any button
		for (var i = 0; i < allBtn.length; i++) {
			//add the click event listener
			allBtn[i].addEventListener('click', function(){
				//add the toggle for applying the CSS style
				this.classList.toggle('selectedBtn');
				// commentOut();
			});
		}

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
			$('#allBtn').addClass('selectedBtn');
			$('#resetBtn').removeClass('selectedBtn');

			$('#displayStyle').addClass('transitionCSS');
			$('#displayStyle').addClass('backgroundCSS');
			$('#displayStyle').addClass('colorCSS');
			$('#displayStyle').addClass('fontCSS');
			$('#displayStyle').addClass('heightCSS');
			$('#displayStyle').addClass('widthCSS');
			$('#displayStyle').addClass('marginCSS');
			$('#displayStyle').addClass('borderCSS');
			$('#displayStyle').addClass('paddingCSS');
			$('#displayStyle').addClass('opacityCSS');
			$('#displayStyle').addClass('boxCSS');
			$('#displayStyle').addClass('textAlignCSS');
			$('#displayStyle').addClass('transformCSS');
			$('#displayStyle').addClass('letterSpaceCSS');
			for (var i = 0; i < allBtn.length; i++) {
				allBtn[i].classList.add('selectedBtn');			
				console.log('inside')	
			}
	}

	function resetAll() {
		$('#allBtn').removeClass('selectedBtn');
		$('#resetBtn').addClass('selectedBtn');

		$('#displayStyle').removeClass('transitionCSS');
		$('#displayStyle').removeClass('backgroundCSS');
		$('#displayStyle').removeClass('colorCSS');
		$('#displayStyle').removeClass('fontCSS');
		$('#displayStyle').removeClass('heightCSS');
		$('#displayStyle').removeClass('widthCSS');
		$('#displayStyle').removeClass('marginCSS');
		$('#displayStyle').removeClass('borderCSS');
		$('#displayStyle').removeClass('paddingCSS');
		$('#displayStyle').removeClass('opacityCSS');
		$('#displayStyle').removeClass('boxCSS');
		$('#displayStyle').removeClass('textAlignCSS');
		$('#displayStyle').removeClass('transformCSS');
		$('#displayStyle').removeClass('letterSpaceCSS');
		for (var i = 0; i < allBtn.length; i++) {
			allBtn[i].classList.remove('selectedBtn');
		}
	}

});