//pricing options
//page views and their associated prices per month in dollars
const pricingOptions = {
    1: {'10K pageviews': 8},
    2: {'50K pageviews': 12},
    3: {'100K pageviews': 16},
    4: {'500k pageviews': 24},
    5: {'1M pageviews': 36}
}

//start with montly pricing
let timeFrameIsMonthly = true;

//grab elements

const toggleBtn = document.getElementById('toggleBtn');
const timeFrame = document.getElementById('timeFrame');
const rangeSlider = document.getElementById('rangeSlider');
const thumbGlow = document.getElementById('thumbGlow');
const pageViewsContainer = document.getElementById('pageViewsContainer');
const priceContainer = document.getElementById('priceContainer');

//add listeners

toggleBtn.addEventListener('click', () => {
    switchToggleAppearance();
    switchTimeFrame();
    updateInfo(rangeSlider.value, timeFrameIsMonthly);
})

rangeSlider.addEventListener('input', () => {
    updateInfo(rangeSlider.value);

    moveTrack();
    moveGlow();

    updateInfo(rangeSlider.value, timeFrameIsMonthly);
})

//incase window gets resized, adjust positioning
window.addEventListener('resize', () => {
    moveTrack();
    moveGlow();
})

//functions

function switchToggleAppearance(){
    //change color
    toggleBtn.classList.toggle('bg-mediumGrayBlue');
    toggleBtn.classList.toggle('bg-strongCyan');
    

    //change position of toggle indicator
    toggleBtn.classList.toggle('justify-start'); 
    toggleBtn.classList.toggle('justify-end');
    
}

//toggle between monthly and yearly
function switchTimeFrame(){
    if(timeFrameIsMonthly){
        timeFrame.innerText = '/ year';
        timeFrameIsMonthly = false;
    }
    else{
        timeFrame.innerText = '/ month'; 
        timeFrameIsMonthly = true;
    }
}

function moveGlow(){
    let rangeValue = rangeSlider.value;
    let ratio = rangeValue / rangeSlider.max;
    let thumbPosition = ratio * rangeSlider.offsetWidth;
    thumbGlow.style.left = `${thumbPosition - (ratio * thumbGlow.offsetWidth)}px`;
}

function moveTrack(){
    let trackGradientLength = rangeSlider.value;
    let gradient = `linear-gradient(90deg, hsl(174, 77%, 80%) ${trackGradientLength}%, hsl(224, 65%, 95%) ${trackGradientLength}%)`;
    rangeSlider.style.backgroundImage = gradient;
}

//return 1 of five possible positions
function getSliderState(value){
    let state;
    
    switch(value){
        case 0:
            state = 1;
            break;
        case 25:
            state = 2;
            break;
        case 50:
            state = 3;
            break;
        case 75:
            state = 4;
            break;
        case 100:
            state = 5;
            break;
        default:
            console.log('number was not passed in');
    }
    
    return state;
}

function updateInfo(value, isMonthly){
    let state = getSliderState(parseInt(value));
    pageViewsContainer.innerText = Object.keys(pricingOptions[state])[0];
    let price = Object.values(pricingOptions[state])[0];
    if(isMonthly){
        priceContainer.innerText = `$${price}.00`;
    }
    else{
        priceContainer.innerText = `$${price * 12 * 0.75}.00`;
    }
}


//initial calls
updateInfo(rangeSlider.value, timeFrameIsMonthly);
moveTrack();
moveGlow();