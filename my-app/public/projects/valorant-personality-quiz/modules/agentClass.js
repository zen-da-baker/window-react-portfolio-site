// Agent class used for agent objects of the quiz, default stats of 1
class Agent {
    constructor(name, description, likes, dislikes, pair) {
        this.name = name;
        this.pfp = `./images/${this.name}.jpg`;
        this.description = description;
        this.likes = likes;
        this.dislikes = dislikes;
        this.pair = pair;
    }
}

export { Agent };

