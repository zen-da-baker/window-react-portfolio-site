// Imports needed for the app functionality
import { test } from './modules/test.js';
import { agents } from './modules/agentList.js';
import { Question, questions } from './modules/quiz.js';
import { randomAgent } from './modules/randomAgent.js';
import { selectAgent } from './modules/selectAgent.js';
import { notEqual } from './modules/notEqual.js';
import { playerChoices, pushFun, pushCharming, pushSerious, pushStrict, pushTechie, pushClassic, pushIndependent, pushTeam } from './modules/playerChoices.js';
// import { questionSequence } from './modules/questionSequence.js';
// import { pairs } from './modules/pairs.js';
// import { serious, fun, charming, strict, techie, classic, independent, team } from './modules/pairs.js';

// Question display variable
const questionDisplay = document.getElementById('question-display');

const beginBtn = document.getElementById('begin');
const reset = document.getElementById('reset');

const questionText = document.getElementById('question-text');

const choice1 = document.getElementById('choice1');
const choice2 = document.getElementById('choice2');
const choice3 = document.getElementById('choice3');
const choice4 = document.getElementById('choice4');
const choice5 = document.getElementById('choice5');
const choice6 = document.getElementById('choice6');
const choice7 = document.getElementById('choice7');
const choice8 = document.getElementById('choice8');

const card = document.getElementById('card');

const displayResults = document.getElementById('display-results');

const agentName = document.getElementById('agent-name');
const agentDescription = document.getElementById('agent-description');

const agentPfp = document.getElementById('agent-pfp');

const agentLike1 = document.getElementById('agent-like1');
const agentLike2 = document.getElementById('agent-like2');
const agentLike3 = document.getElementById('agent-like3');

const agentDislike1 = document.getElementById('agent-dislike1');
const agentDislike2 = document.getElementById('agent-dislike2');
const agentDislike3 = document.getElementById('agent-dislike3');

const pairHeading = document.getElementById('pair-heading');

const agentPair1 = document.getElementById('agent-pair1');
const agentPair2 = document.getElementById('agent-pair2');
const agentPair3 = document.getElementById('agent-pair3');

const opHeading = document.getElementById('op-heading');

const agentOp1 = document.getElementById('agent-op1');
const agentOp2 = document.getElementById('agent-op2');
const agentOp3 = document.getElementById('agent-op3');


// agent display variable
/*
let agentDisplay = document.getElementById('agent-display');
*/

// Test for if the DOM can be manipulated by data from a module
/*
test.innerHTML = "hello";
*/

// Question text viewable on page
/*
document.getElementById('objectTest').innerHTML = `
    ${questions[0].msg} <br/>
    <button onclick="questions[0].choice1" class="btn">${questions[0].text1}</button>   <br/>
    <button onclick="questions[0].choice2" class="btn">${questions[0].text2}</button>   <br/>
    <button onclick="questions[0].choice3" class="btn">${questions[0].text3}</button>   <br/>
    <button onclick="questions[0].choice4" class="btn">${questions[0].text4}</button>   <br/>
    <button onclick="questions[0].choice5" class="btn">${questions[0].text5}</button>   <br/>
    <button onclick="questions[0].choice6" class="btn">${questions[0].text6}</button>   <br/>
    <button onclick="questions[0].choice7" class="btn">${questions[0].text7}</button>   <br/>
    <button onclick="questions[0].choice8" class="btn">${questions[0].text8}</button>   <br/>

    ${questions[1].msg} <br/>
    <button onclick="questions[0].choice1" class="btn">${questions[1].text1}</button>   <br/>
    <button onclick="questions[0].choice2" class="btn">${questions[1].text2}</button>   <br/>
    <button onclick="questions[0].choice3" class="btn">${questions[1].text3}</button>   <br/>
    <button onclick="questions[0].choice4" class="btn">${questions[1].text4}</button>   <br/>
    <button onclick="questions[0].choice5" class="btn">${questions[1].text5}</button>   <br/>
    <button onclick="questions[0].choice6" class="btn">${questions[1].text6}</button>   <br/>
    <button onclick="questions[0].choice7" class="btn">${questions[1].text7}</button>   <br/>
    <button onclick="questions[0].choice8" class="btn">${questions[1].text8}</button>   <br/>

    ${questions[2].msg} <br/>
    <button onclick="questions[0].choice1" class="btn">${questions[2].text1}</button>   <br/>
    <button onclick="questions[0].choice2" class="btn">${questions[2].text2}</button>   <br/>
    <button onclick="questions[0].choice3" class="btn">${questions[2].text3}</button>   <br/>
    <button onclick="questions[0].choice4" class="btn">${questions[2].text4}</button>   <br/>
    <button onclick="questions[0].choice5" class="btn">${questions[2].text5}</button>   <br/>
    <button onclick="questions[0].choice6" class="btn">${questions[2].text6}</button>   <br/>
    <button onclick="questions[0].choice7" class="btn">${questions[2].text7}</button>   <br/>
    <button onclick="questions[0].choice8" class="btn">${questions[2].text8}</button>   <br/>
    `;
*/

// Console test for if all agent objects are readable
/*
for (let i = 0; i < agents.length; i++) { 
    console.log(agents[i]);
}
*/

console.log(agents.length);

let serious = [];

let fun = [];

let charming = [];

let strict = [];

let techie = [];

let classic = [];

let independent = [];

let team = [];

for (let i = 0; i < agents.length; i++) {
    if (agents[i].pair == 'serious') {
        serious.push(agents[i]);
    } else if (agents[i].pair == 'fun') {
        fun.push(agents[i]);
    } else if (agents[i].pair == 'charming') {
        charming.push(agents[i]);
    } else if (agents[i].pair == 'strict') {
        strict.push(agents[i]);
    } else if (agents[i].pair == 'techie') {
        techie.push(agents[i]);
    } else if (agents[i].pair == 'classic') {
        classic.push(agents[i]);
    } else if (agents[i].pair == 'independent') {
        independent.push(agents[i]);
    } else if (agents[i].pair == 'team') {
        team.push(agents[i]);
    }
}

let pairs = [serious, fun, charming, strict, techie, classic, independent, team];
// console.log(pairs[0][1]);





/*
const question1 = `
            ${questions[0].msg} <br/>
            <button id="choice1" onclick="questions[0].choice1()" class="btn">${questions[0].text1}</button>   <br/>
            <button id="choice2" onclick="questions[0].choice2()" class="btn">${questions[0].text2}</button>   <br/>
            <button id="choice3" onclick="questions[0].choice3()" class="btn">${questions[0].text3}</button>   <br/>
            <button id="choice4" onclick="questions[0].choice4()" class="btn">${questions[0].text4}</button>   <br/>
            <button id="choice5" onclick="questions[0].choice5()" class="btn">${questions[0].text5}</button>   <br/>
            <button id="choice6" onclick="questions[0].choice6()" class="btn">${questions[0].text6}</button>   <br/>
            <button id="choice7" onclick="questions[0].choice7()" class="btn">${questions[0].text7}</button>   <br/>
            <button id="choice8" onclick="questions[0].choice8()" class="btn">${questions[0].text8}</button>   <br/>
        `

const question2 = `
            ${questions[1].msg} <br/>
            <button onclick="questions[1].choice1()" class="btn">${questions[1].text1}</button>   <br/>
            <button onclick="questions[1].choice2()" class="btn">${questions[1].text2}</button>   <br/>
            <button onclick="questions[1].choice3()" class="btn">${questions[1].text3}</button>   <br/>
            <button onclick="questions[1].choice4()" class="btn">${questions[1].text4}</button>   <br/>
            <button onclick="questions[1].choice5()" class="btn">${questions[1].text5}</button>   <br/>
            <button onclick="questions[1].choice6()" class="btn">${questions[1].text6}</button>   <br/>
            <button onclick="questions[1].choice7()" class="btn">${questions[1].text7}</button>   <br/>
            <button onclick="questions[1].choice8()" class="btn">${questions[1].text8}</button>   <br/>
        `

const question3 = `
            ${questions[2].msg} <br/>
            <button onclick="questions[2].choice1()" class="btn">${questions[2].text1}</button>   <br/>
            <button onclick="questions[2].choice2()" class="btn">${questions[2].text2}</button>   <br/>
            <button onclick="questions[2].choice3()" class="btn">${questions[2].text3}</button>   <br/>
            <button onclick="questions[2].choice4()" class="btn">${questions[2].text4}</button>   <br/>
            <button onclick="questions[2].choice5()" class="btn">${questions[2].text5}</button>   <br/>
            <button onclick="questions[2].choice6()" class="btn">${questions[2].text6}</button>   <br/>
            <button onclick="questions[2].choice7()" class="btn">${questions[2].text7}</button>   <br/>
            <button onclick="questions[2].choice8()" class="btn">${questions[2].text8}</button>   <br/>
    `
*/ 

let questionPosition = 1;

function questionSequence() {
    if (questionPosition == 1) {
        questionText.innerHTML = questions[0].msg;
        
        choice1.innerHTML = questions[0].text1;
        choice1.addEventListener("click", pushFun);
        choice1.addEventListener("click", main);

        choice2.innerHTML = questions[0].text2;
        choice2.addEventListener("click", pushCharming);
        choice2.addEventListener("click", main);

        choice3.innerHTML = questions[0].text3;
        choice3.addEventListener("click", pushSerious);
        choice3.addEventListener("click", main);

        choice4.innerHTML = questions[0].text4;
        choice4.addEventListener("click", pushStrict);
        choice4.addEventListener("click", main);

        choice5.innerHTML = questions[0].text5;
        choice5.addEventListener("click", pushTechie);
        choice5.addEventListener("click", main);

        choice6.innerHTML = questions[0].text6;
        choice6.addEventListener("click", pushClassic);
        choice6.addEventListener("click", main);

        choice7.innerHTML = questions[0].text7;
        choice7.addEventListener("click", pushIndependent);
        choice7.addEventListener("click", main);

        choice8.innerHTML = questions[0].text8;
        choice8.addEventListener("click", pushTeam);
        choice8.addEventListener("click", main);

    } else if (questionPosition == 2) {
        questionText.innerHTML = questions[1].msg;

        choice1.removeEventListener("click", pushFun);
        choice1.removeEventListener("click", main);

        choice2.removeEventListener("click", pushCharming);
        choice2.removeEventListener("click", main);

        choice3.removeEventListener("click", pushSerious);
        choice3.removeEventListener("click", main);

        choice4.removeEventListener("click", pushStrict);
        choice4.removeEventListener("click", main);

        choice5.removeEventListener("click", pushTechie);
        choice5.removeEventListener("click", main);

        choice6.removeEventListener("click", pushClassic);
        choice6.removeEventListener("click", main);

        choice7.removeEventListener("click", pushIndependent);
        choice7.removeEventListener("click", main);

        choice8.removeEventListener("click", pushTeam);
        choice8.removeEventListener("click", main);

        choice1.innerHTML = questions[1].text1;
        choice1.addEventListener("click", pushFun);
        choice1.addEventListener("click", main);

        choice2.innerHTML = questions[1].text2;
        choice2.addEventListener("click", pushCharming);
        choice2.addEventListener("click", main);

        choice3.innerHTML = questions[1].text3;
        choice3.addEventListener("click", pushSerious);
        choice3.addEventListener("click", main);

        choice4.innerHTML = questions[1].text4;
        choice4.addEventListener("click", pushStrict);
        choice4.addEventListener("click", main);

        choice5.innerHTML = questions[1].text5;
        choice5.addEventListener("click", pushTechie);
        choice5.addEventListener("click", main);

        choice6.innerHTML = questions[1].text6;
        choice6.addEventListener("click", pushClassic);
        choice6.addEventListener("click", main);

        choice7.innerHTML = questions[1].text7;
        choice7.addEventListener("click", pushIndependent);
        choice7.addEventListener("click", main);

        choice8.innerHTML = questions[1].text8;
        choice8.addEventListener("click", pushTeam);
        choice8.addEventListener("click", main);

    } else if (questionPosition == 3) {
        questionText.innerHTML = questions[2].msg;

        choice1.removeEventListener("click", pushFun);
        choice1.removeEventListener("click", main);

        choice2.removeEventListener("click", pushCharming);
        choice2.removeEventListener("click", main);

        choice3.removeEventListener("click", pushSerious);
        choice3.removeEventListener("click", main);

        choice4.removeEventListener("click", pushStrict);
        choice4.removeEventListener("click", main);

        choice5.removeEventListener("click", pushTechie);
        choice5.removeEventListener("click", main);

        choice6.removeEventListener("click", pushClassic);
        choice6.removeEventListener("click", main);

        choice7.removeEventListener("click", pushIndependent);
        choice7.removeEventListener("click", main);

        choice8.removeEventListener("click", pushTeam);
        choice8.removeEventListener("click", main);

        choice1.innerHTML = questions[2].text1;
        choice1.addEventListener("click", pushFun);
        choice1.addEventListener("click", main);

        choice2.innerHTML = questions[2].text2;
        choice2.addEventListener("click", pushCharming);
        choice2.addEventListener("click", main);

        choice3.innerHTML = questions[2].text3;
        choice3.addEventListener("click", pushSerious);
        choice3.addEventListener("click", main);

        choice4.innerHTML = questions[2].text4;
        choice4.addEventListener("click", pushStrict);
        choice4.addEventListener("click", main);

        choice5.innerHTML = questions[2].text5;
        choice5.addEventListener("click", pushTechie);
        choice5.addEventListener("click", main);

        choice6.innerHTML = questions[2].text6;
        choice6.addEventListener("click", pushClassic);
        choice6.addEventListener("click", main);

        choice7.innerHTML = questions[2].text7;
        choice7.addEventListener("click", pushIndependent);
        choice7.addEventListener("click", main);

        choice8.innerHTML = questions[2].text8;
        choice8.addEventListener("click", pushTeam);
        choice8.addEventListener("click", main);

    } else {
        console.log("Squence can not run");
    }
}



function results(agent) {
    console.log(agent.name);

    card.style.display = 'none';
    displayResults.style.display = 'block';

    agentName.innerHTML = agent.name;
    agentDescription.innerHTML = agent.description;

    agentLike1.innerHTML = agent.likes[0];
    agentLike2.innerHTML = agent.likes[1];
    agentLike3.innerHTML = agent.likes[2];

    agentDislike1.innerHTML = agent.dislikes[0];
    agentDislike2.innerHTML = agent.dislikes[1];
    agentDislike3.innerHTML = agent.dislikes[2];

    agentPfp.src = agent.pfp;

    if (agent.pair == 'fun') {
        pairHeading.innerHTML = 'The fun youngersters are';

        agentPair1.innerHTML = fun[0].name;
        agentPair2.innerHTML = fun[1].name;
        agentPair3.innerHTML = fun[2].name;

        opHeading.innerHTML = 'The agents that snuff the fun';

        agentOp1.innerHTML = strict[0].name;
        agentOp2.innerHTML = strict[1].name;
        agentOp3.innerHTML = strict[2].name;
    }

    if (agent.pair == 'charming') {
        pairHeading.innerHTML = 'The stylish ones are';

        agentPair1.innerHTML = charming[0].name;
        agentPair2.innerHTML = charming[1].name;
        agentPair3.innerHTML = charming[2].name;

        opHeading.innerHTML = 'The stuffy agents are';

        agentOp1.innerHTML = serious[0].name;
        agentOp2.innerHTML = serious[1].name;
        agentOp3.innerHTML = serious[2].name;
    }

    if (agent.pair == 'serious') {
        pairHeading.innerHTML = 'The mature agents are';

        agentPair1.innerHTML = serious[0].name;
        agentPair2.innerHTML = serious[1].name;
        agentPair3.innerHTML = serious[2].name;

        opHeading.innerHTML = 'The agents that put looks over their jobs';

        agentOp1.innerHTML = charming[0].name;
        agentOp2.innerHTML = charming[1].name;
        agentOp3.innerHTML = charming[2].name;
    }

    if (agent.pair == 'strict') {
        pairHeading.innerHTML = 'The rule followers are';

        agentPair1.innerHTML = strict[0].name;
        agentPair2.innerHTML = strict[1].name;
        agentPair3.innerHTML = strict[2].name;

        opHeading.innerHTML = 'The agents that break the rules';

        agentOp1.innerHTML = fun[0].name;
        agentOp2.innerHTML = fun[1].name;
        agentOp3.innerHTML = fun[2].name;
    }

    if (agent.pair == 'techie') {
        pairHeading.innerHTML = 'The innovators are';

        agentPair1.innerHTML = techie[0].name;
        agentPair2.innerHTML = techie[1].name;
        agentPair3.innerHTML = techie[2].name;

        opHeading.innerHTML = 'The old dinos are';

        agentOp1.innerHTML = classic[0].name;
        agentOp2.innerHTML = classic[1].name;
        agentOp3.innerHTML = classic[2].name;
    }

    if (agent.pair == 'classic') {
        // notEqual(agent, classic)

        pairHeading.innerHTML = 'The old souls are';

        agentPair1.innerHTML = classic[0].name;
        agentPair2.innerHTML = classic[1].name;
        agentPair3.innerHTML = classic[2].name;

        opHeading.innerHTML = 'The agents who think they know everything';

        agentOp1.innerHTML = techie[0].name;
        agentOp2.innerHTML = techie[1].name;
        agentOp3.innerHTML = techie[2].name;
    }

    if (agent.pair == 'independent') {
        pairHeading.innerHTML = 'The free thinkers are';

        agentPair1.innerHTML = independent[0].name;
        agentPair2.innerHTML = independent[1].name;
        agentPair3.innerHTML = independent[2].name;

        opHeading.innerHTML = 'The hive mind agents are';

        agentOp1.innerHTML = team[0].name;
        agentOp2.innerHTML = team[1].name;
        agentOp3.innerHTML = team[2].name;
    }

    if (agent.pair == 'team') {
        pairHeading.innerHTML = 'The team players are';

        agentPair1.innerHTML = team[0].name;
        agentPair2.innerHTML = team[1].name;
        agentPair3.innerHTML = team[2].name;

        opHeading.innerHTML = 'The self absorbed agents are';

        agentOp1.innerHTML = independent[0].name;
        agentOp2.innerHTML = independent[1].name;
        agentOp3.innerHTML = independent[2].name;
    }
    
}



card.style.display = 'none';
displayResults.style.display = 'none';

function main() {
    beginBtn.removeEventListener("click", main);

    beginBtn.style.display = 'none';
    card.style.display = 'block';

    console.log("Player choices length: " + playerChoices.length);
    questionSequence();
    console.log("Player choices length after sequence fn: " + playerChoices.length);

    console.log("Player choices: " + playerChoices);

    if (questionPosition == 4) {
        console.log(playerChoices);
        results(selectAgent(playerChoices, agents));
    }

    questionPosition++;
}

beginBtn.addEventListener("click", main);
reset.addEventListener("click", () => {

    card.style.display = 'none';
    displayResults.style.display = 'none';

    questionPosition = 1;

    playerChoices.pop();
    playerChoices.pop();
    playerChoices.pop();

    main();
});