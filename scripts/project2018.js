// global variable for the project
var terrain = document.getElementById('terrain');
var remaining = document.getElementById('remaining')
var chrono = document.getElementById('chrono')
var nbtargets = Number(document.getElementById('nbtargets').value)
var minutesDOM = document.getElementById('minutes')
var secondsDOM = document.getElementById('seconds')
var tenthDOM = document.getElementById('tenth')


// default initial width and heigth for the target
var TARGET_WIDTH = 40;
var TARGET_HEIGHT = 40;

// chrono management
// value of time in tenth of seconds
var time = 0;
var minutes=0;
var seconds=0;

// timer variable 
var chronoTimer = null;


// YOUR NAME HERE

// YOUR CODE BELOW

// Function that handle the Start game 
function start(){
    terrain.innerHTML ='';
    manageTime();
    remaining.innerHTML = terrain.childElementCount;
    addCible()
}




// Function that manage the timer
var timer;
function manageTime(){
    chronoTimer = 0;
     timer = setInterval(counter,10);
    function counter(){
         chronoTimer++;
         time = chronoTimer
          
        if(time>99){
            seconds++;
            chronoTimer = 0;
            time = 0;
        }
        if (seconds>59){
            seconds = 0;
             minutes++; 
        }

         minutesDOM.innerHTML = minutes;
         secondsDOM.innerHTML = seconds;
         tenthDOM.innerHTML = time ;

    }
}

// Function that changes the input value of number of targets wanted 
function change(){
    var x = document.getElementById('nbtargets').value
    nbtargets = x ;
    return nbtargets

}

// function that insert the wanted targets on the page
function addCible(){
    var targetNum = change();
    for(i=0; i<targetNum;i++){
    var cible = document.createElement("div");                 // Create a <div> node
    cible.setAttribute('class','target on')                       // Set the attribute
                              
    cible.style.top = Math.random()* 375 + 'px';               // Set the target top position randomly 
    cible.style.left = Math.random()* 375 + 'px';              // Set the target left position randomly 
    document.getElementById("terrain").appendChild(cible);     // Append <div> to the element with id="Terrain"
    remaining.innerHTML = terrain.childElementCount;
}
}

// function that insert one target on the page
function singleCible(){
    terrain.innerHTML ='';
    var cible = document.createElement("div");                 
    cible.setAttribute('class','target on')                                                   
    cible.style.top = Math.random()* 375 + 'px';               
    cible.style.left = Math.random()* 375 + 'px';              
    document.getElementById("terrain").appendChild(cible);
    remaining.innerHTML = terrain.childElementCount;
    manageTime()
}   



// Remove the target after clicking 

document.addEventListener('click', function(e){
    var targetElement = e.target ;
    if (targetElement.classList.contains('target')){
        targetElement.setAttribute('class','hit')
        targetElement.remove();
        remaining.innerHTML = terrain.childElementCount;
        if(remaining.innerHTML==0){
            gameover()
        }
    }
})

// function that appears when the game is over 
function gameover(){
    window.alert('vous avez écoulé '+minutes+' minutes et '+seconds+' seconds et '+time+' milliseconds')
    time = 0;
    minutes=0;
    seconds=0;
    minutesDOM.innerHTML = 0;
    secondsDOM.innerHTML = 0;
    tenthDOM.innerHTML = 0 ;
    clearInterval(timer);

}

function level(){
    var levelValue = document.getElementById('selectLevel').value;
    if(levelValue == 'Difficile'){
        terrain.style.width='500px';
        terrain.style.height='450px';
    }else{
        terrain.style.width='400px';
        terrain.style.height='400px';
    }
}