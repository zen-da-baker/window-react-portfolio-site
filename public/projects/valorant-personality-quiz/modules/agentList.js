// Import agent class
import { Agent } from './agentClass.js';

// Agent objects constructed
const brimstone = new Agent('Brimstone', 
    'A trustworthy agent who uses his years of experience to guide his decisions.', 
    ['Saturday BBQs', 'Classic cars', 'Plain coffee'], 
    ['His bad back', 'Ipad kids', 'Whinners'],
    'classic'
);

const phoenix = new Agent('Phoenix', 
    'A fun loving jokester with a flaming passion for protecting his team.', 
    ['Fresh sneakers', 'Glorious memes', 'Sports'], 
    ['Offices', 'Snow', 'Bugs'],
    'fun'
);

const sage = new Agent('Sage', 
    'Team mother and expert healer that will do anything for her team.', 
    ['Calligraphy', 'Beach trips', 'Chonky jewelry'], 
    ['Selfishness', 'Lotteries', 'Big cities'],
    'team'
);

const sova = new Agent('Sova', 
    'A self-reliant archer from the frigid tundra.', 
    ['Snow', 'Hats', 'Chocolate Babka'], 
    ['Bears', 'Barbers', 'Gambling'],
    'serious'
);

const viper = new Agent('Viper', 
    'A self described monster that hides her soft side behind a cloud of poison.', 
    ['Traps', 'Bagels', 'Plushies'], 
    ['Smell of hear', 'Rodents', 'Ice cream'],
    'serious'
);

const cypher = new Agent('Cypher', 
    'The ultimate computer geek. Period.', 
    ['Chess', 'Passwords', 'CRT TVs'], 
    ['Sharing', 'Secrets', 'Sailing'],
    'team'
);

const reyna = new Agent('Reyna', 
    'A nightmare for her enemies with a blinding eye for revenge.', 
    ['Tattoos', 'Revenge', 'Hair dye'], 
    ['Technology', 'Optimism', 'Dirty tricks'],
    'serious'
);

const killjoy = new Agent('Killjoy', 
    'A young scientist who uses programming to solve any problem.', 
    ['Robots', 'Lentil soup', 'Legos'], 
    ['Pools', 'Parties', 'Google Maps haters'],
    'techie'
);

const breach = new Agent('Breach', 
    'A former convict who specializes in making earthquakes.', 
    ['Bionics', 'Parties', 'Beer'], 
    ['Fancy foods', 'Libraries', 'Police'],
    'techie'
);

const omen = new Agent('Omen', 
    'A living ghost in search of his fragmented memories.', 
    ['Family', 'Cities', 'Nicknames'], 
    ['Time', 'Liars', 'Hotdogs'],
    'independent'
);

const jett = new Agent('Jett', 
    'A jokester with a chaotic energy and strong sense of fashion.', 
    ['Hurricane chaos', 'Sarcastic jokes', 'Shopping'], 
    ['Hoodies', 'Calamari', 'Countryside car rides'],
    'charming'
);

const raze = new Agent('Raze', 
    'Boom bot robot engineer that brings the party.', 
    ['Robots', 'Disco lights', 'Graphitti'], 
    ['Books', 'Plans', 'Clean streets'],
    'techie'
);

const skye = new Agent('Skye', 
    'A farmer and adventurer who lives off the grid.', 
    ['Animals', 'Spirits', 'Old tales'], 
    ['Spiders', 'Loud music', 'Flashing lights'],
    'classic'
);

const yoru = new Agent('Yoru', 
    'A fashionable gambler who gets rich off arrogant opponents.', 
    ['Gambling', 'Traveling', 'Leather jackets'], 
    ['Directions', 'Cheaters', 'Heros'],
    'independent'
);

const astra = new Agent('Astra', 
    'A traveler that shines bright like the stars.', 
    ['Glitter', 'Loud music', 'Astronomy'], 
    ['Cities', 'Offices', 'Bats'],
    'classic'
);

const kayo = new Agent('Kayo', 
    'A war veteran robot from the future.', 
    ['Rules', 'Digital food', 'RC cars'], 
    ['Toasters', 'Meat bags', 'Sleep mode'],
    'strict'
);

const chamber = new Agent('Chamber', 
    'The Tony Stark of the Valorant world who buys his way to victory.', 
    ['Freshly ironed pants', 'Secrets', 'Paninis'], 
    ['Debt', 'Surprise parties', 'Trains'],
    'strict'
);

const neon = new Agent('Neon', 
    'A fun loving track star who saves the day with her electric rythm.', 
    ['Adobo', 'Singing', 'Light shows'], 
    ['Errie quiet rooms', 'Dead batteries', 'Farm lands'],
    'fun'
);

const fade = new Agent('Fade', 
    'A manipulator of nighmares in search of someone.', 
    ['Nightmares', 'Hair dye', 'Dark alleys'], 
    ['Dreams', 'Plums', 'Bossy bosses'],
    'independent'
);

const harbor = new Agent('Harbor', 
    'An action movie star but for real.', 
    ['Sleeveless shirts', 'Tattoos', 'Fans'], 
    ['Noodle arms', 'Uncoordinated colors', 'Spiders'],
    'charming'
);

const gekko = new Agent('Gekko', 
    'A laid back city dweller with many pets he nurtures in the concrete jungle.', 
    ['Graphitti', 'Dank memes', 'Parties'], 
    ['Quiet spaces', 'Sweat pants', 'Yelling'],
    'charming'
);

const deadlock = new Agent('Deadlock', 
    'An assassin who places loyalty above all else.', 
    ['Cake', 'Potlucks', 'Sports'], 
    ['Bears', 'Tricks', 'Disloyalty'],
    'team'
);

const iso = new Agent('Iso', 
    'A city dwelling agent with a theme song for every situation.', 
    ['Hoodies', 'Sneakers', 'Airpods'], 
    ['Graphitti', 'Libraries', 'The countryside'],
    'strict'
);

const clove = new Agent('Clove', 
    'A trouble maker with an eye for art.', 
    ['Dank memes', 'Butterflies', 'Toilet papering houses'], 
    ['Offices', 'Medicine', 'Categories'],
    'fun'
);

const agents = [
    brimstone, 
    phoenix, 
    sage, 
    sova, 
    viper, 
    cypher, 
    reyna, 
    killjoy, 
    breach, 
    omen, 
    jett, 
    raze, 
    skye, 
    yoru, 
    astra, 
    kayo, 
    chamber, 
    neon, 
    fade, 
    harbor, 
    gekko, 
    deadlock, 
    iso, 
    clove
];

/* For loop for finding likes for all agents

for (let i = 0; i < agents.length; i++) {
    for (let j = 0; j < agents.length; j++) {
        for (let a = 0; a < agents[i].likes.length; a++) {
            for (let b = 0; b < agents[j].likes.length; b++) {
                if (agents[i].likes[a] == agents[j].likes[b]) {
                    agents[i].pair.push(agents[j].name);
                }
            }
        }
    }
}
*/

export { agents };