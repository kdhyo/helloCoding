const graph = {
    'you' : ['alice', 'bob', 'claire'],
    'bob' : ['anuj', 'peggy'],
    'alice' : ['peggy'],
    'claire' : ['thom', 'jonny'],
    'anuj' : [],
    'peggy': [],
    'thom' : [],
    'jonny' : [],
}

function search(name) {
    const search_queue = graph[name];
    console.log(search_queue);
    const searched = [];

    while (search_queue) {
        const person = search_queue.shift();
        if (searched.indexOf(person) === -1) {
            if(personIsSeller(person)) {
                console.log(`${person} is a mango seller!`);
                return true;
            }
            else {
                search_queue.push(...graph[person]);
                searched.push(person);
            }
        }
    }
    return false;
}

function personIsSeller(person) {
    return person.charAt(person.length-1) === 'm';
}

console.log(search('you'));