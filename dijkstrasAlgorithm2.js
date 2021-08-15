function weigthredGraph() {
    const graph = {}; // 그래프 데이터
    graph['start'] = {};
    graph['start']['a'] = 5;
    graph['start']['b'] = 2;

    graph['a'] = {};
    graph['a']['c'] = 4;
    graph['a']['d'] = 2;

    graph['b'] = {};
    graph['b']['a'] = 8;
    graph['b']['d'] = 7;

    graph['c'] = {};
    graph['c']['d'] = 6;
    graph['c']['fin'] = 3;

    graph['d'] = {};
    graph['d']['fin'] = 1;

    graph['fin'] = {};

    const costs = {}; // 정점 가격
    costs['a'] = 5;
    costs['b'] = 2;
    costs['c'] = Infinity;
    costs['d'] = Infinity;
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