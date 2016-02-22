

	var app = {
		listOne: {
			words:["Fingerstache", " Cold-pressed", " kitsch", " marfa", " cardigan", " beard", " lumbersexual", " affogato", " Authentic", " retro", " artisan", " shabby", " YOLO", " organic", " chill wave", " bespoke", " man-braid ", " man-bun", " cray", " fanny", " hammock", " quis", " dolore", " chic", " umami", " Plaid", " aesthetic", " dreamcatcher", " dogs", " cats", " tomato", " yellow", " red", " black", " blue", " monocle ", " Epic", " stellar", " fugly", " bangin’", " legit", " wild", " dude", " bruh", " meh", " bowtie", " bear", " beaver", " unicorn", " antlers"],
			index: 0
		},

		listTwo: {
			words:["Fingerstache", " Cold-pressed", " kitsch", " marfa", " cardigan", " beard", " lumbersexual", " affogato", " Authentic", " retro", " artisan", " shabby", " YOLO", " organic", " chill wave", " bespoke", " man-braid ", " man-bun", " cray", " fanny", " hammock", " quis", " dolore", " chic", " umami", " Plaid", " aesthetic", " dreamcatcher", " dogs", " cats", " tomato", " yellow", " red", " black", " blue", " monocle ", " Epic", " stellar", " fugly", " bangin’", " legit", " wild", " dude", " bruh", " meh", " bowtie", " bear", " beaver", " unicorn", " antlers"],
			index: 0
		},

		listThree: {
			words: [ "cupcakes", "tattoos", "cafe", "bar", "bistro", "bike shop", "brewery", "barber", "juicery"],
			index: 0
		}



	}


// write click listener on arrows
// arrows have data attributes 
// is the arrow going previous or next?
// what word list are we dealing with?

$(function(){

	$('a.arrows').on('click', function(e){
		e.preventDefault();
		// This will grab the value stored in teh data- attribute
		var selectedDirection = $(this).data('direction');
		// This does the same
		var selectedList = $(this).data('list');
		// Using bracket notation and the value returned from the above line. EX listOne. We can store the listOne object in our new variable.

		var selectedTarget = $(this).data('target')
	
		var listInAction = app[selectedList];

		// console.log(selectedDirection);
		// console.log(listInAction);
		// Then you check the direction of the arrow clicked
		if(selectedDirection === 'next') {
			//If it is next
			// Increment the current lists index
			// To track which word is being shown.
			listInAction.index = listInAction.index + 1;
		} else {
			listInAction.index = listInAction.index - 1;
		}

		// Store that in a new varaible, to make it easy to access
		var index = listInAction.index;
		// Put the new word on the page
		// listInAction === the list the user clicked on
		//  .words === the array of words
		// index === a number that represents the next word to show
		var selected = listInAction.words[index];

		 $('h2.'+ selectedTarget).html(selected);

	// 	// check where you are in the index
	// 	// if previous, add one to index value
	// 	//update the page with the new value

	}); // end of click arrow event
	

	$('a.button').on('click', function(e) {
		e.preventDefault();

		// app.combinedWords = $('.words1').text() + $('.words2').text() + " " + $('.words3').text();
		// $('h2.resultText').text(app.combinedWords);

		app.words12 = $('.words1').text() + $('.words2').text();
		app.shopWords = $('.words3').text();

		$('h2.resultText').html(app.words12 + "<br>" + app.shopWords);

		$('body').animate( { 
            scrollTop: $('#finalResult').offset().top}, 500);
	}); // end of click button event

jQuery("h1").fitText(0.9, { minFontSize: '20px', maxFontSize: '100px'});
jQuery("h2").fitText(0.9, { minFontSize: '20px', maxFontSize: '80px'});
jQuery("h3").fitText(1.5, { minFontSize: '10px', maxFontSize: '16px'});

}); 




