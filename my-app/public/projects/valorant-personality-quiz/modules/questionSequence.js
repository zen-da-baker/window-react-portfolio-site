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

export { questionSequence };