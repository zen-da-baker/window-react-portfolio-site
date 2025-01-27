function results(agent) {
    const agentName = document.getElementById('agent-name');
    const agentDescription = document.getElementById('agent-description');

    const agentLike1 = document.getElementById('agent-like1');
    const agentLike2 = document.getElementById('agent-like2');
    const agentLike3 = document.getElementById('agent-like3');

    const agentDislike1 = document.getElementById('agent-dislike1');
    const agentDislike2 = document.getElementById('agent-dislike2');
    const agentDislike3 = document.getElementById('agent-dislike3');

    const agentPair1 = document.getElementById('agent-pair1');
    const agentPair2 = document.getElementById('agent-pair2');
    const agentPair3 = document.getElementById('agent-pair3');
    
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

    agentPair1.innerHTML = agent.pair;
    
}

export { results };