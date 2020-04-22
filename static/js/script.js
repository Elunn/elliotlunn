
// About me section

var button = document.querySelector('#aboutButton');

button.addEventListener('click', function (event) {

    var about = document.querySelector('#about');
    var main = document.querySelector('main');
    var next = document.querySelector('#aboutCon');
    var scroll = document.querySelector('#projectScroll');
	

    if (about.classList == "hide") {
        about.className = "show";
        button.innerHTML = 'Close';
        main.className = "animated fadeOut";
		button.classList.add("red");
        setTimeout(function(){
            main.className = "hide";
        }, 200);
		
		if (main.hasAttribute('id')){
			scroll.className = "animated fadeOut";
		}
		
        
    } else {
        next.className = "animated fadeOutUp";
        
        setTimeout(function(){
            about.className = "hide";
        }, 200);
		
		setTimeout(function(){
            next.className = "animated fadeInDown";
        }, 200);

        button.classList.add("red");
        button.innerHTML = 'About';
        main.className = "animated fadeIn";
		
		if (main.hasAttribute('id')){
			scroll.className = "animated fadeIn";
		}
        

    }
});

// More project info section


function toggleDocs(event) {

    if (event.target && event.target.classList.contains('clickable')) {
		
		var pre = event.target.parentElement.parentElement;
		var img = event.target.parentElement;
		
		if (pre.classList.contains('row') && img.classList.contains('size')) {
            pre.classList.remove("row");
			pre.classList.add("column");
			
			setTimeout(function() {
				img.classList.remove("size");
				img.classList.add("zoom");
			}, 100);		

        } else {
			
			img.classList.add("size");
			img.classList.remove("zoom");
			
			setTimeout(function() {
				pre.classList.add("row");
				pre.classList.remove("column");
			}, 500);
        }
    } 
}

document.addEventListener('click', toggleDocs, true);