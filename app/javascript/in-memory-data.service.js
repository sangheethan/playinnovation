"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var players = [
            { id: 1, name: "Richie Mooney", age: 17, score: 98 },
            { id: 2, name: "Harry Boase", age: 16, score: 37 },
            { id: 3, name: "Dean Richards", age: 12, score: 22 },
            { id: 4, name: "Gary Munnley", age: 12, score: 85 },
            { id: 5, name: "Elliot Belsham", age: 35, score: 81 },
            { id: 6, name: "Daniel Gregory", age: 23, score: 43 },
            { id: 7, name: "Ben Angelo", age: 15, score: 41 },
            { id: 8, name: "Johnny Phillips", age: 13, score: 73 },
            { id: 9, name: "Matt Cashford", age: 11, score: 43 },
            { id: 10, name: "Paul Long", age: 11, score: 26 }
        ];
        return { players: players };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map