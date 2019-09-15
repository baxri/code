


function acmTeam(topic) {

    let groups = [];

    for (let i = 0; i < topic.length; i++) {
        for (let j = i + 1; j < topic.length; j++) {
            let a = topic[i];
            let b = topic[j];
            let op = (parseInt(a, 2) | parseInt(b, 2)).toString(2);
            let topics = op.split('').filter(a => a == 1).length;
            groups.push(topics);
        }
    }

    groups.sort((a, b) => b - a);

    let max_topics = groups[0];
    let gropus_count = 0;

    groups.map(v => {
        if (max_topics == v) {
            gropus_count++;
        }
    });

    return [max_topics, gropus_count];
}


console.log(acmTeam(['10101', '11100', '11010', '00101']));
console.log(acmTeam(['10101', '11110', '00010']));