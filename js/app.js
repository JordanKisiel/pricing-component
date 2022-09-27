//pricing options
//page views and their associated prices per month in dollars
const pricingOptions = {
    '10K pageviews': 8,
    '50K pageviews': 12,
    '100K pageviews': 16,
    '500k pageviews': 24,
    '1M pageviews': 36
}

//grab elements

const sliderBtn = document.getElementById('sliderBtn');
const body = document.getElementsByTagName('body');
const toggleBtn = document.getElementById('toggleBtn');
const timeFrame = document.getElementById('timeFrame');
const sliderTrack = document.getElementById('sliderTrack');

//add listeners

toggleBtn.addEventListener('click', () => {
    switchToggleAppearance();
    switchTimeFrame();
})



function switchToggleAppearance(){
    //change color
    toggleBtn.classList.toggle('bg-strongCyan');
    toggleBtn.classList.toggle('bg-mediumGrayBlue');

    //change position of toggle indicator
    toggleBtn.classList.toggle('justify-end');
    toggleBtn.classList.toggle('justify-start'); 
}

//toggle between monthly and yearly
function switchTimeFrame(){
    if(timeFrame.innerText === '/ month'){
        timeFrame.innerText = '/ year';
    }
    else{
        timeFrame.innerText = '/ month';
    }
}




/*

Drag code ======= Come back to this if I can't figure out what to do

body[0].addEventListener("touchstart", dragStart, false);
body[0].addEventListener("touchend", dragEnd, false);
body[0].addEventListener("touchmove", drag, false);
body[0].addEventListener("mousedown", dragStart, false);
body[0].addEventListener("mouseup", dragEnd, false);
body[0].addEventListener("mousemove", drag, false);


//drag variables
let active = false;
let currentX = 0;
let initialX = 0;
let xOffset = 0;
let sliderLeftConstraint = sliderTrack.getBoundingClientRect().left;
let sliderRightConstraint = sliderTrack.getBoundingClientRect().right;

//drag functions
function dragStart(e){
    if(e.type === 'touchStart'){
        initialX = e.touches[0].clientX - xOffset;
    }
    else{
        initialX = e.clientX - xOffset;
    }

    if(e.target === sliderBtn){
        active = true;
    }
}

function drag(e){
    if(active){
        e.preventDefault();

        if(e.type === "touchmove"){
            currentX = e.touches[0].clientX - initialX;
        }
        else{
            currentX = e.clientX - initialX;
        }

        xOffset = currentX;

        
        if(e.clientX <= sliderLeftConstraint + sliderBtn.offsetWidth){
            setPosition(0, sliderBtn);
            
            currentX = 0;
            initialX = 0;
            xOffset = 0;


        }
        else if(sliderRightConstraint < currentX){
            setTranslate(sliderRightConstraint, sliderBtn);
        }
        else{
            setTranslate(currentX, sliderBtn);
        }

    }
}

function dragEnd(e){
    initialX = currentX;

    active = false;
}

function setTranslate(xPos, el){
    el.style.transform = `translateX(${xPos}px)`
}

function setPosition(xPos, el){
    el.style.left = `${xPos}px`;
}




*/