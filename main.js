// 8 hours crash course


// var a = 'apple';

// console.log(a.split(','));
// console.log(a.indexOf('e'));
// console.log(a.slice(2, 5))
// console.log(a.replace('ap', 'mo'));
// console.log(a.toUpperCase());
// console.log(a.charAt(0));
// console.log(a.split(''))


// let array = ['apple', 'banana', 'grape', 'pear'];
// let vegs = ['greens', 'broccoli', 'asparaganus', 'cabbage']
// let allGroceries; 
// console.log(array.join(' * ')); //joins array with *
// console.log(array.concat(vegs)); // adds two arrays into one
// allGroceries = array.concat(vegs);


// console.log(allGroceries.reverse()); // reverses arrays
// console.log(allGroceries.sort()); // makes arrays be in alphabethical order

// let numbers = [1,2,5,9,14,6,45,100,98,74,65,4,3,56,7]

// console.log(numbers.sort(function(a, b){return a - b})) // this makes numbers be in order


// Challenge 1. Age in days

function ageInDays() {
    var currentYear = document.getElementById("currentYear").value;
    var birthYear = document.getElementById("birthYear").value;
    
    var ageDays = (currentYear - birthYear) * 365;
    var resultShower = document.createElement('h3');
    var textAnswer = document.createTextNode('You are ' + ageDays + ' days old');
    resultShower.setAttribute('id', 'result__text');
    resultShower.appendChild(textAnswer);
    document.getElementById('result').appendChild(resultShower)
}

function reset(){
    document.getElementById('result').remove();
}



// Challenge 2: Cat Generator



function catGenerator() {
    var img = document.createElement('img');
    var wrapper = document.getElementById('resultCat');
    img.src = 'https://picsum.photos/200/300';
    img.classList.add("result__img");
    img.setAttribute('id', 'removeCat');
    wrapper.appendChild(img);
}
function reset(){
   document.getElementById('removeCat').remove();

}


// Challenge 3: rock, scissors, paper game

function rspGame (yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRspInt());
    console.log('computer choice:', botChoice);
    var results = decideWinner(humanChoice, botChoice);
    console.log(results);
    var message = finalMessage(results);
    console.log(message);
    
    rspFrontEnd(yourChoice.id, botChoice, message);
}
function randToRspInt (){
    return Math.floor(Math.random() * 3);
}
function numberToChoice (number) {
    return ['rock', 'scissors', 'paper'] [number];
}
function decideWinner (yourChoice, computerChoice) {
    var rspDataBase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };
    var yourScore = rspDataBase[yourChoice] [computerChoice];
    var computerScore = rspDataBase [computerChoice] [yourChoice];
    return [yourScore, computerScore]
}
function finalMessage ([yourScore, computerScore]) {
    
    if (yourScore === 0) {
        return {'message': 'You lost!', 'color': 'red'};
    }
    else if (yourScore === 0.5) {
        return {'message': 'You tied!', 'color': 'yellow'};
    }
    else {
        return {'message': 'You won!', 'color': 'green'}
    }
}
function rspFrontEnd (humanImageChoice, botImageChoice, finalMessage){
    var imagesData = {
        'rock': document.getElementById('rock').src,
        'scissors': document.getElementById('scissors').src,
        'paper': document.getElementById('paper').src,

    }
    //  remove all the images 
    document.getElementById('rock').remove();
    document.getElementById('scissors').remove();
    document.getElementById('paper').remove();

    //create div of items

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div')



    humanDiv.innerHTML = "<img src = '" + imagesData[humanImageChoice] +"'height=150 width=150 style='box-shadow: 0 10px 50px rgba(37, 50, 233, 1);'>"
    botDiv.innerHTML = "<img src = '" + imagesData[botImageChoice] +"'height=150 width=150 style='box-shadow: 0 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] +"</h1>"
    document.getElementById('wrapper').appendChild(humanDiv);
    document.getElementById('wrapper').appendChild(messageDiv);
    document.getElementById('wrapper').appendChild(botDiv);
}
   