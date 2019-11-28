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
printLetterByLetter(spanName, "Dina TAKLIT", 200);
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
/** Start Nav Script **/
// When the user scrolls the page, execute stckNav function
window.onscroll = function() { stickNav() };
// Get the nav
var headerNav = document.querySelector("header nav");
// Get the offset position of the navbar
var sticky = headerNav.offsetTop;

// Add the sticky class to the header when you reach its scroll position.Remove "sticky"
// when you leave the scroll position

function stickNav() {
    if (window.pageYOffset > sticky) {
        headerNav.classList.add("sticky");
    } else {
        headerNav.classList.remove("sticky");
    }
}

/** Start Change the active nav link according to the section **/
// Get all the sections, the header and it is hight
var sections = $('.section'),
    nav = $('header nav'),
    nav_height = nav.outerHeight();

// This function change the active link according to position of the scroll     
$(window).on('scroll', function() {
    // Get the current position
    var cur_pos = $(this).scrollTop();
    // change the active link according to section
    sections.each(function() {
        // get the start and the end position of each section
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();
        // Check if the current position is withing one of the section in the sections array 
        if (cur_pos >= top && cur_pos <= bottom) {
            // If the current position is withing the area of this section then update the link :).
            // Remove the class nav from all items
            nav.find('.nav-item a').removeClass('active');
            // sections.removeClass('active');
            // Ad the active class only to the link which is active :D.
            $(this).addClass('active');
            nav.find('.nav-item a[href="#' + $(this).attr('id') + '"]').addClass('active');
        }
    });
});
// Add some animation once we clik on the link: scroll up slowly :) .
nav.find('.nav-item a').on('click', function() {
    var $el = $(this),
        id = $el.attr('href');

    $('html, body').animate({
        scrollTop: $(id).offset().top - nav_height
    }, 500);

    return false;
});




/** End Change the active nav link according to the section **/


/** End Nav Script **/


/*******************  End Home Script *********************/

/*******************  Start About Script *********************/
// Check more about dictionaries: https://pietschsoft.com/post/2015/09/05/javascript-basics-how-to-create-a-dictionary-with-keyvalue-pairs

// Create a dictionary that will hold my skills with their percentage
var skills = {
        "HTML": "70",
        "CSS": "60",
        "JavaScript": "50",
        "Sass": "40",
        "Jquery": "50",
        "Python": "40",
        "Git": "60"
    }
    // Get the skills Element div to add all the skills that we create dynamically
skillsElement = document.querySelector('#skills');
// Crete all the skills elements loopin skills dictionary 
for (var key in skills) {
    createSkill(key, skills[key]);
}

// This function create progress skill 
function createSkill(skillName, percent) {
    var skillElement = document.createElement("div");
    var skillString =
        '<div class="progress-wrapper">' +
        '<div class="skillName">' + skillName + '</div>' +
        '<div class="progress-bar">' +
        '<div data-size="' + percent + '" class="progress w3-blue"></div>' +
        '</div>' +
        '<div class="SkillPercent">' + percent + '%</div>' +
        '</div>'
    skillElement.innerHTML = skillString;
    // We append the created element to the skillsElement
    skillsElement.appendChild(skillElement.firstChild);
}
// Color the percentage Item According to the giving percentage
const progress_bars = document.querySelectorAll('.progress');
var i = 0;
progress_bars.forEach(bar => {
    setTimeout(() => {
        // This line is asame as const size = bar.dataset.size. We used Object Destructuring.
        const { size } = bar.dataset;
        bar.style.width = `${size}%`;
    }, 1000);
    //i++;
});
/*******************  End About Script *********************/