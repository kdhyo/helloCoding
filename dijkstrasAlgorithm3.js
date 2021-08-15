function weigthredGraph() {
    const graph = {}; // 그래프 데이터
    graph['start'] = {};
    graph['start']['a'] = 10;

    graph['a'] = {};
    graph['a']['b'] = 20;

    graph['b'] = {};
    graph['b']['c'] = 1;
    graph['b']['fin'] = 30;

    graph['c'] = {};
    graph['c']['a'] = 1;

    graph['fin'] = {};

    const costs = {}; // 정점 가격
    costs['a'] = 10;
    costs['b'] = Infinity;
    costs['c'] = Infinity;
    costs['fin'] = Infinity;

    const parents = {}; // 정점 위치
    parents['a'] = 'start';
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