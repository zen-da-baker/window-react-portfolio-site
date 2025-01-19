let playerChoices = [];

class Question {
    constructor(msg, text1, trait1, text2, trait2, text3, trait3, text4, trait4, text5, trait5, text6, trait6, text7, trait7, text8, trait8) {
        this.msg = msg;

        this.text1 = text1;
        this.trait1 = trait1;

        this.text2 = text2;
        this.trait2 = trait2;

        this.text3 = text3;
        this.trait3 = trait3;

        this.text4 = text4;
        this.trait4 = trait4;

        this.text5 = text5; 
        this.trait5 = trait5;

        this.text6 = text6; 
        this.trait6 = trait6;

        this.text7 = text7;
        this.trait7 = trait7;

        this.text8 = text8;
        this.trait8 = trait8;
    }

    choice1() {
        playerChoices.push(`${this.trait1}`);
        console.log(this.trait1);
    }

    choice2() {
        playerChoices.push(this.trait2);
        console.log(this.trait2);
    }

    choice3() {
        playerChoices.push(this.trait3);
        console.log(this.trait3);
    }

    choice4() {
        playerChoices.push(this.trait4);
        console.log(this.trait4);
    }

    choice5() {
        playerChoices.push(this.trait5);
        console.log(this.trait5);
    }

    choice6() {
        playerChoices.push(this.trait6);
        console.log(this.trait6);
    }

    choice7() {
        playerChoices.push(this.trait7);
        console.log(this.trait7);
    }

    choice8() {
        playerChoices.push(this.trait8);
        console.log(this.trait8);
    }
}

const question1 = new Question(
    "What do you like to do in your spare time?",

    "Visit amusment parks",
    'fun', 

    "Experiment with fashion",
    'charming', 

    "Reading books",
    'serious', 

    "Solving puzzles",
    'strict', 

    "Programming apps",
    'techie', 

    "Driving classic cars",
    'classic', 

    "Shopping at the mall",
    'independent', 

    "Volunteering for a non-profit",
    'team'
)

const question2 = new Question(
    "What is your greatest strength?",

    "Breaking the rules",
    'fun', 

    "Talking yourself out of any situation",
    'charming', 

    "Planning ahead",
    'serious', 

    "Following directions exactly",
    'strict', 

    "Using new technology to your advantage",
    'techie', 

    "Trusting established rules",
    'classic', 

    "Being an independent thinker",
    'independent', 

    "Working well in a team",
    'team'
)

const question3 = new Question(
    "What is a tool you can't live without?",

    "Lighter",
    'fun', 

    "Stunning clothes",
    'charming', 

    "Flashlight",
    'serious', 

    "Rule book",
    'strict', 

    "Calculator",
    'techie', 

    "Hammer",
    'classic', 

    "Notebook",
    'independent', 

    "Walkie talkie",
    'team'
)

const questions = [question1, question2, question3];

export { Question, questions };