function weigthredGraph() {
    const graph = {}; // 그래프 데이터
    graph['start'] = {};
    graph['start']['a'] = 2;
    graph['start']['b'] = 2;


    graph['a'] = {};
    graph['a']['b'] = 2;

    graph['b'] = {};
    graph['b']['c'] = 2;
    graph['b']['fin'] = 2;

    graph['c'] = {};
    graph['c']['a'] = -1;
    graph['c']['fin'] = 2;

    graph['fin'] = {};

    const costs = {}; // 정점 가격
    costs['a'] = 2;
    costs['b'] = 2;
    costs['c'] = Infinity;
    costs['fin'] = Infinity;

    const parents = {}; // 정점 위치
    parents['a'] = 'start';
    parents['b'] = 'start';
    parents['fin'] = null;

    const processed = []; // 정점처리 기록

    let node = findLowestCostNode(costs);
    while (node !== null) {
        let cost = costs[node];
        const neighbors = graph[node];
        for(const n in neighbors) {
            const newCost = cost + neighbors[n];
            if(costs[n] > newCost) {
                costs[n] = newCost;
                parents[n] = node;
            }
        }
        processed.push(node);
        node = findLowestCostNode(costs);
    }

    function findLowestCostNode(costs) {
        let lowestCost = Infinity;
        let lowestCostNode = null;

        for (const node in costs) {
            cost = costs[node];
            if(cost < lowestCost && !processed.includes(node)) {
                lowestCost = cost;
                lowestCostNode = node;
            }
        }
        return lowestCostNode;
    }

    return { parents, costs };
}

console.log(weigthredGraph());