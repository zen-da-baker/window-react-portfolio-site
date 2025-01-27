import { agents } from 'agentList.js';

let serious = [];

let fun = [];

let charming = [];

let strict = [];

let techie = [];

let classic = [];

let independent = [];

let team = [];

for (let i = 0; i < agents.length; i++) {
    if (agents[i].likes == 'serious') {
        serious.push(agents[i].name);
    } else if (agents[i].likes == 'fun') {
        fun.push(agents[i].name);
    } else if (agents[i].likes == 'charming') {
        charming.push(agents[i].name);
    } else if (agents[i].likes == 'strict') {
        strict.push(agents[i].name);
    } else if (agents[i].likes == 'techie') {
        techie.push(agents[i].name);
    } else if (agents[i].likes == 'classic') {
        classic.push(agents[i].name);
    } else if (agents[i].likes == 'independent') {
        independent.push(agents[i].name);
    } else if (agents[i].likes == 'team') {
        team.push(agents[i].name);
    }
}

let pairs = [serious, fun, charming, strict, techie, classic, independent, team];


//export  { serious, fun, charming, strict, techie, classic, independent, team };
export { pairs };