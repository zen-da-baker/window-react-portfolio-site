function selectAgent(arr, agents) {


    if (arr.includes('classic') && arr.includes('classic') && arr.includes('classic')) {
        console.log('Brimstone');
        return agents[0];
    } else if (arr.includes('fun') && arr.includes('fun') && arr.includes('team')) {
        console.log('Phoenix');
        return agents[1];
    } else if (arr.includes('team') && arr.includes('team') && arr.includes('team')) {
        console.log('Sage');
        return agents[2];
    } else if (arr.includes('serious') && arr.includes('techie') && arr.includes('independent')) {
        console.log('Sova');
        return agents[3];
    } else if (arr.includes('serious') && arr.includes('serious') && arr.includes('classic')) {
        console.log('Viper');
        return agents[4];
    } else if (arr.includes('team') && arr.includes('fun') && arr.includes('techie')) {
        console.log('Cypher');
        return agents[5];
    } else if (arr.includes('serious') && arr.includes('serious') && arr.includes('serious')) {
        console.log('Reyna');
        return agents[6];
    } else if (arr.includes('techie') && arr.includes('techie') && arr.includes('techie')) {
        console.log('Killjoy');
        return agents[7];
    } else if (arr.includes('techie') && arr.includes('techie') && arr.includes('independent')) {
        console.log('Breach');
        return agents[8];
    } else if (arr.includes('independent') && arr.includes('independent') && arr.includes('independent')) {
        console.log('Omen');
        return agents[9];
    } else if (arr.includes('charming') && arr.includes('independent') && arr.includes('classic')) {
        console.log('Jett');
        return agents[10];
    } else if (arr.includes('techie') && arr.includes('classic') && arr.includes('fun')) {
        console.log('Raze');
        return agents[11];
    } else if (arr.includes('classic') && arr.includes('strict') && arr.includes('serious')) {
        console.log('Skye');
        return agents[12];
    } else if (arr.includes('independent') && arr.includes('independent') && arr.includes('strict')) {
        console.log('Yoru');
        return agents[13];
    } else if (arr.includes('classic') && arr.includes('classic') && arr.includes('charming')) {
        console.log('Astra');
        return agents[14];
    } else if (arr.includes('strict') && arr.includes('strict') && arr.includes('strict')) {
        console.log('Kay/o');
        return agents[15];
    } else if (arr.includes('strict') && arr.includes('strict') && arr.includes('serious')) {
        console.log('Chamber');
        return agents[16];
    } else if (arr.includes('fun') && arr.includes('charming') && arr.includes('team')) {
        console.log('Neon');
        return agents[17];
    } else if (arr.includes('independent') && arr.includes('team') && arr.includes('strict')) {
        console.log('Fade');
        return agents[18];
    } else if (arr.includes('charming') && arr.includes('charming') && arr.includes('charming')) {
        console.log('Harbor');
        return agents[19];
    } else if (arr.includes('charming') && arr.includes('charming') && arr.includes('fun')) {
        console.log('Gekko');
        return agents[20];
    } else if (arr.includes('team') && arr.includes('team') && arr.includes('techie')) {
        console.log('Deadlock');
        return agents[21];
    } else if (arr.includes('strict') && arr.includes('serious') && arr.includes('charming')) {
        console.log('Iso');
        return agents[22];
    } else if (arr.includes('fun') && arr.includes('fun') && arr.includes('fun')) {
        console.log('Clove');
        return agents[23];
    } else {
        console.log('Random agent selected');
        return agents[randomAgent()];
    }
}

export { selectAgent };