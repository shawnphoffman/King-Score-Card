currentIndex = 0;
pages = [$('#page1'), $('#page2'), $('#page3'), $('#page4')];

function scrollRight() {

    if (currentIndex === 0) return;
    pages[currentIndex].removeClass('stage-center');
    pages[currentIndex].addClass('stage-right');

    pages[currentIndex - 1].removeClass('stage-left');
    pages[currentIndex - 1].addClass('stage-center');

    currentIndex = currentIndex - 1;

}

function scrollLeft() {

    if (currentIndex === pages.length - 1) return;

    pages[currentIndex].removeClass('stage-center');
    pages[currentIndex].addClass('stage-left');

    pages[currentIndex + 1].removeClass('stage-right');
    pages[currentIndex + 1].addClass('stage-center');

    currentIndex = currentIndex + 1;

}

Zepto('#container').tap(function(){
    console.log('tapped');
});

Zepto('#health-container').swipeLeft(scrollLeft);
Zepto('#health-container').swipeRight(scrollRight);