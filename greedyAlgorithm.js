function greedyAlgorithm() {
    let statesNeeded = ['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az'];
    const stations = {
        'kone' : ['id', 'nv', 'ut']
        , 'ktwo' : ['wa', 'id', 'mt']
        , 'kthree' : ['or', 'nv', 'ca']
        , 'kfour' : ['nv', 'ut']
        , 'kfive' : ['ca', 'az']
    }
    const finalStations = new Set();

    while (isStatesNeeded(statesNeeded)) {
        let bestStation = null;
        let statesCovered = new Set();
        for (const [key, value] of Object.entries(stations)) {
            const covered = statesNeeded.filter(need => value.includes(need));
            if(covered.length > statesCovered.size) {
                bestStation = key;
                statesCovered = covered;
            }
        }
        statesNeeded = statesNeeded.filter(data => !statesCovered.includes(data));
        finalStations.add(bestStation);
    }

    function isStatesNeeded(statesNeeded) {
        return statesNeeded.length > 0 ? true : false;
    }

    return finalStations;
}

console.log(greedyAlgorithm());