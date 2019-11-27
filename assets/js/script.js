/*******************  Satrt Home Script *********************/
/** Start Show the name Script **/
function printLetterByLetter(destination, message, speed) {
    var i = 0;
    var interval = setInterval(function() {
        destination.innerHTML += message.charAt(i);
        i++;
        if (i > message.length) {
            clearInterval(interval);
        }
    }, speed);
}
var spanName = document.querySelector("#Intro span.name");
printLetterByLetter(spanName, "Dina TAKLIT", 100);
/** END Show the name Script **/

/** Start Btn more Script **/
// Get the view more buttom
var viewMoreBtn = document.querySelector("#view-more");
// Once the user hover remove the arrow-right class and replace it with arrow-down one
viewMoreBtn.addEventListener('mouseover', function() {
    viewMoreBtn.lastChild.classList.remove('fa-arrow-right');
    viewMoreBtn.lastChild.classList.add('fa-arrow-down');
});
// On mouse out do the reverse
viewMoreBtn.addEventListener('mouseout', function() {
    viewMoreBtn.lastChild.classList.remove('fa-arrow-down');
    viewMoreBtn.lastChild.classList.add('fa-arrow-right');
});
/** End Btn more Script **/
/*******************  End Home Script *********************/