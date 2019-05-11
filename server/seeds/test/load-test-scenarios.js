/* eslint-disable func-names */
/* eslint no-unused-vars: ["error", { "args": "none" }] */
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Scenario')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('Scenario').insert([
        {
          title: 'Beach',
          author: 'Tenzin',
          edited: '2019-04-24',
          sandbox:
            '[[{"element":"Water","row":0,"col":0,"x":0,"y":0},{"element":"Water","row":0,"col":1,"x":59.3,"y":0},{"element":"Water","row":0,"col":2,"x":118.6,"y":0},{"element":"Water","row":0,"col":3,"x":177.89999999999998,"y":0},{"element":"Water","row":0,"col":4,"x":237.2,"y":0},{"element":"Water","row":0,"col":5,"x":296.5,"y":0},{"element":"Water","row":0,"col":6,"x":355.79999999999995,"y":0},{"element":"Water","row":0,"col":7,"x":415.09999999999997,"y":0},{"element":"Water","row":0,"col":8,"x":474.4,"y":0},{"element":"Water","row":0,"col":9,"x":533.6999999999999,"y":0},{"element":"Water","row":0,"col":10,"x":593,"y":0},{"element":"Water","row":0,"col":11,"x":652.3,"y":0},{"element":"Water","row":0,"col":12,"x":711.5999999999999,"y":0},{"element":"Water","row":0,"col":13,"x":770.9,"y":0},{"element":"Water","row":0,"col":14,"x":830.1999999999999,"y":0},{"element":"Water","row":0,"col":15,"x":889.5,"y":0},{"element":"Water","row":0,"col":16,"x":948.8,"y":0},{"element":"Water","row":0,"col":17,"x":1008.0999999999999,"y":0},{"element":"Water","row":0,"col":18,"x":1067.3999999999999,"y":0},{"element":"Water","row":0,"col":19,"x":1126.7,"y":0}],[{"element":"Water","row":1,"col":0,"x":0,"y":31.9},{"element":"Water","row":1,"col":1,"x":59.3,"y":31.9},{"element":"Water","row":1,"col":2,"x":118.6,"y":31.9},{"element":"Water","row":1,"col":3,"x":177.89999999999998,"y":31.9},{"element":"Water","row":1,"col":4,"x":237.2,"y":31.9},{"element":"Water","row":1,"col":5,"x":296.5,"y":31.9},{"element":"Water","row":1,"col":6,"x":355.79999999999995,"y":31.9},{"element":"Water","row":1,"col":7,"x":415.09999999999997,"y":31.9},{"element":"Water","row":1,"col":8,"x":474.4,"y":31.9},{"element":"Water","row":1,"col":9,"x":533.6999999999999,"y":31.9},{"element":"Water","row":1,"col":10,"x":593,"y":31.9},{"element":"Water","row":1,"col":11,"x":652.3,"y":31.9},{"element":"Water","row":1,"col":12,"x":711.5999999999999,"y":31.9},{"element":"Water","row":1,"col":13,"x":770.9,"y":31.9},{"element":"Water","row":1,"col":14,"x":830.1999999999999,"y":31.9},{"element":"Water","row":1,"col":15,"x":889.5,"y":31.9},{"element":"Water","row":1,"col":16,"x":948.8,"y":31.9},{"element":"Water","row":1,"col":17,"x":1008.0999999999999,"y":31.9},{"element":"Water","row":1,"col":18,"x":1067.3999999999999,"y":31.9},{"element":"Water","row":1,"col":19,"x":1126.7,"y":31.9}],[{"element":"Water","row":2,"col":0,"x":0,"y":63.8},{"element":"Water","row":2,"col":1,"x":59.3,"y":63.8},{"element":"Water","row":2,"col":2,"x":118.6,"y":63.8},{"element":"Water","row":2,"col":3,"x":177.89999999999998,"y":63.8},{"element":"Water","row":2,"col":4,"x":237.2,"y":63.8},{"element":"Water","row":2,"col":5,"x":296.5,"y":63.8},{"element":"Water","row":2,"col":6,"x":355.79999999999995,"y":63.8},{"element":"Water","row":2,"col":7,"x":415.09999999999997,"y":63.8},{"element":"Water","row":2,"col":8,"x":474.4,"y":63.8},{"element":"Water","row":2,"col":9,"x":533.6999999999999,"y":63.8},{"element":"Water","row":2,"col":10,"x":593,"y":63.8},{"element":"Water","row":2,"col":11,"x":652.3,"y":63.8},{"element":"Water","row":2,"col":12,"x":711.5999999999999,"y":63.8},{"element":"Water","row":2,"col":13,"x":770.9,"y":63.8},{"element":"Water","row":2,"col":14,"x":830.1999999999999,"y":63.8},{"element":"Water","row":2,"col":15,"x":889.5,"y":63.8},{"element":"Water","row":2,"col":16,"x":948.8,"y":63.8},{"element":"Water","row":2,"col":17,"x":1008.0999999999999,"y":63.8},{"element":"Water","row":2,"col":18,"x":1067.3999999999999,"y":63.8},{"element":"Water","row":2,"col":19,"x":1126.7,"y":63.8}],[{"element":"Water","row":3,"col":0,"x":0,"y":95.69999999999999},{"element":"Water","row":3,"col":1,"x":59.3,"y":95.69999999999999},{"element":"Water","row":3,"col":2,"x":118.6,"y":95.69999999999999},{"element":"Water","row":3,"col":3,"x":177.89999999999998,"y":95.69999999999999},{"element":"Water","row":3,"col":4,"x":237.2,"y":95.69999999999999},{"element":"Water","row":3,"col":5,"x":296.5,"y":95.69999999999999},{"element":"Water","row":3,"col":6,"x":355.79999999999995,"y":95.69999999999999},{"element":"Water","row":3,"col":7,"x":415.09999999999997,"y":95.69999999999999},{"element":"Water","row":3,"col":8,"x":474.4,"y":95.69999999999999},{"element":"Water","row":3,"col":9,"x":533.6999999999999,"y":95.69999999999999},{"element":"Water","row":3,"col":10,"x":593,"y":95.69999999999999},{"element":"Water","row":3,"col":11,"x":652.3,"y":95.69999999999999},{"element":"Water","row":3,"col":12,"x":711.5999999999999,"y":95.69999999999999},{"element":"Water","row":3,"col":13,"x":770.9,"y":95.69999999999999},{"element":"Water","row":3,"col":14,"x":830.1999999999999,"y":95.69999999999999},{"element":"Water","row":3,"col":15,"x":889.5,"y":95.69999999999999},{"element":"Water","row":3,"col":16,"x":948.8,"y":95.69999999999999},{"element":"Water","row":3,"col":17,"x":1008.0999999999999,"y":95.69999999999999},{"element":"Water","row":3,"col":18,"x":1067.3999999999999,"y":95.69999999999999},{"element":"Water","row":3,"col":19,"x":1126.7,"y":95.69999999999999}],[{"element":"Water","row":4,"col":0,"x":0,"y":127.6},{"element":"Water","row":4,"col":1,"x":59.3,"y":127.6},{"element":"Water","row":4,"col":2,"x":118.6,"y":127.6},{"element":"Water","row":4,"col":3,"x":177.89999999999998,"y":127.6},{"element":"Water","row":4,"col":4,"x":237.2,"y":127.6},{"element":"Water","row":4,"col":5,"x":296.5,"y":127.6},{"element":"Water","row":4,"col":6,"x":355.79999999999995,"y":127.6},{"element":"Water","row":4,"col":7,"x":415.09999999999997,"y":127.6},{"element":"Water","row":4,"col":8,"x":474.4,"y":127.6},{"element":"Water","row":4,"col":9,"x":533.6999999999999,"y":127.6},{"element":"Water","row":4,"col":10,"x":593,"y":127.6},{"element":"Water","row":4,"col":11,"x":652.3,"y":127.6},{"element":"Water","row":4,"col":12,"x":711.5999999999999,"y":127.6},{"element":"Water","row":4,"col":13,"x":770.9,"y":127.6},{"element":"Water","row":4,"col":14,"x":830.1999999999999,"y":127.6},{"element":"Water","row":4,"col":15,"x":889.5,"y":127.6},{"element":"Water","row":4,"col":16,"x":948.8,"y":127.6},{"element":"Water","row":4,"col":17,"x":1008.0999999999999,"y":127.6},{"element":"Water","row":4,"col":18,"x":1067.3999999999999,"y":127.6},{"element":"Water","row":4,"col":19,"x":1126.7,"y":127.6}],[{"element":"Water","row":5,"col":0,"x":0,"y":159.5},{"element":"Water","row":5,"col":1,"x":59.3,"y":159.5},{"element":"Water","row":5,"col":2,"x":118.6,"y":159.5},{"element":"Water","row":5,"col":3,"x":177.89999999999998,"y":159.5},{"element":"Water","row":5,"col":4,"x":237.2,"y":159.5},{"element":"Water","row":5,"col":5,"x":296.5,"y":159.5},{"element":"Water","row":5,"col":6,"x":355.79999999999995,"y":159.5},{"element":"Water","row":5,"col":7,"x":415.09999999999997,"y":159.5},{"element":"Water","row":5,"col":8,"x":474.4,"y":159.5},{"element":"Water","row":5,"col":9,"x":533.6999999999999,"y":159.5},{"element":"Water","row":5,"col":10,"x":593,"y":159.5},{"element":"Water","row":5,"col":11,"x":652.3,"y":159.5},{"element":"Water","row":5,"col":12,"x":711.5999999999999,"y":159.5},{"element":"Water","row":5,"col":13,"x":770.9,"y":159.5},{"element":"Water","row":5,"col":14,"x":830.1999999999999,"y":159.5},{"element":"Water","row":5,"col":15,"x":889.5,"y":159.5},{"element":"Water","row":5,"col":16,"x":948.8,"y":159.5},{"element":"Water","row":5,"col":17,"x":1008.0999999999999,"y":159.5},{"element":"Water","row":5,"col":18,"x":1067.3999999999999,"y":159.5},{"element":"Water","row":5,"col":19,"x":1126.7,"y":159.5}],[{"element":"Water","row":6,"col":0,"x":0,"y":191.39999999999998},{"element":"Water","row":6,"col":1,"x":59.3,"y":191.39999999999998},{"element":"Water","row":6,"col":2,"x":118.6,"y":191.39999999999998},{"element":"Water","row":6,"col":3,"x":177.89999999999998,"y":191.39999999999998},{"element":"Water","row":6,"col":4,"x":237.2,"y":191.39999999999998},{"element":"Water","row":6,"col":5,"x":296.5,"y":191.39999999999998},{"element":"Water","row":6,"col":6,"x":355.79999999999995,"y":191.39999999999998},{"element":"Water","row":6,"col":7,"x":415.09999999999997,"y":191.39999999999998},{"element":"Water","row":6,"col":8,"x":474.4,"y":191.39999999999998},{"element":"Water","row":6,"col":9,"x":533.6999999999999,"y":191.39999999999998},{"element":"Water","row":6,"col":10,"x":593,"y":191.39999999999998},{"element":"Water","row":6,"col":11,"x":652.3,"y":191.39999999999998},{"element":"Water","row":6,"col":12,"x":711.5999999999999,"y":191.39999999999998},{"element":"Water","row":6,"col":13,"x":770.9,"y":191.39999999999998},{"element":"Water","row":6,"col":14,"x":830.1999999999999,"y":191.39999999999998},{"element":"Water","row":6,"col":15,"x":889.5,"y":191.39999999999998},{"element":"Water","row":6,"col":16,"x":948.8,"y":191.39999999999998},{"element":"Water","row":6,"col":17,"x":1008.0999999999999,"y":191.39999999999998},{"element":"Water","row":6,"col":18,"x":1067.3999999999999,"y":191.39999999999998},{"element":"Water","row":6,"col":19,"x":1126.7,"y":191.39999999999998}],[{"element":"Water","row":7,"col":0,"x":0,"y":223.29999999999998},{"element":"Water","row":7,"col":1,"x":59.3,"y":223.29999999999998},{"element":"Water","row":7,"col":2,"x":118.6,"y":223.29999999999998},{"element":"Water","row":7,"col":3,"x":177.89999999999998,"y":223.29999999999998},{"element":"Water","row":7,"col":4,"x":237.2,"y":223.29999999999998},{"element":"Water","row":7,"col":5,"x":296.5,"y":223.29999999999998},{"element":"Water","row":7,"col":6,"x":355.79999999999995,"y":223.29999999999998},{"element":"Water","row":7,"col":7,"x":415.09999999999997,"y":223.29999999999998},{"element":"Water","row":7,"col":8,"x":474.4,"y":223.29999999999998},{"element":"Water","row":7,"col":9,"x":533.6999999999999,"y":223.29999999999998},{"element":"Water","row":7,"col":10,"x":593,"y":223.29999999999998},{"element":"Water","row":7,"col":11,"x":652.3,"y":223.29999999999998},{"element":"Water","row":7,"col":12,"x":711.5999999999999,"y":223.29999999999998},{"element":"Water","row":7,"col":13,"x":770.9,"y":223.29999999999998},{"element":"Water","row":7,"col":14,"x":830.1999999999999,"y":223.29999999999998},{"element":"Water","row":7,"col":15,"x":889.5,"y":223.29999999999998},{"element":"Water","row":7,"col":16,"x":948.8,"y":223.29999999999998},{"element":"Water","row":7,"col":17,"x":1008.0999999999999,"y":223.29999999999998},{"element":"Water","row":7,"col":18,"x":1067.3999999999999,"y":223.29999999999998},{"element":"Water","row":7,"col":19,"x":1126.7,"y":223.29999999999998}],[{"element":"Water","row":8,"col":0,"x":0,"y":255.2},{"element":"Water","row":8,"col":1,"x":59.3,"y":255.2},{"element":"Water","row":8,"col":2,"x":118.6,"y":255.2},{"element":"Water","row":8,"col":3,"x":177.89999999999998,"y":255.2},{"element":"Water","row":8,"col":4,"x":237.2,"y":255.2},{"element":"Water","row":8,"col":5,"x":296.5,"y":255.2},{"element":"Water","row":8,"col":6,"x":355.79999999999995,"y":255.2},{"element":"Water","row":8,"col":7,"x":415.09999999999997,"y":255.2},{"element":"Water","row":8,"col":8,"x":474.4,"y":255.2},{"element":"Water","row":8,"col":9,"x":533.6999999999999,"y":255.2},{"element":"Water","row":8,"col":10,"x":593,"y":255.2},{"element":"Water","row":8,"col":11,"x":652.3,"y":255.2},{"element":"Water","row":8,"col":12,"x":711.5999999999999,"y":255.2},{"element":"Water","row":8,"col":13,"x":770.9,"y":255.2},{"element":"Water","row":8,"col":14,"x":830.1999999999999,"y":255.2},{"element":"Water","row":8,"col":15,"x":889.5,"y":255.2},{"element":"Water","row":8,"col":16,"x":948.8,"y":255.2},{"element":"Water","row":8,"col":17,"x":1008.0999999999999,"y":255.2},{"element":"Sand","row":8,"col":18,"x":1067.3999999999999,"y":255.2},{"element":"Sand","row":8,"col":19,"x":1126.7,"y":255.2}],[{"element":"Sand","row":9,"col":0,"x":0,"y":287.09999999999997},{"element":"Sand","row":9,"col":1,"x":59.3,"y":287.09999999999997},{"element":"Water","row":9,"col":2,"x":118.6,"y":287.09999999999997},{"element":"Water","row":9,"col":3,"x":177.89999999999998,"y":287.09999999999997},{"element":"Water","row":9,"col":4,"x":237.2,"y":287.09999999999997},{"element":"Water","row":9,"col":5,"x":296.5,"y":287.09999999999997},{"element":"Water","row":9,"col":6,"x":355.79999999999995,"y":287.09999999999997},{"element":"Water","row":9,"col":7,"x":415.09999999999997,"y":287.09999999999997},{"element":"Water","row":9,"col":8,"x":474.4,"y":287.09999999999997},{"element":"Sand","row":9,"col":9,"x":533.6999999999999,"y":287.09999999999997},{"element":"Sand","row":9,"col":10,"x":593,"y":287.09999999999997},{"element":"Water","row":9,"col":11,"x":652.3,"y":287.09999999999997},{"element":"Water","row":9,"col":12,"x":711.5999999999999,"y":287.09999999999997},{"element":"Water","row":9,"col":13,"x":770.9,"y":287.09999999999997},{"element":"Water","row":9,"col":14,"x":830.1999999999999,"y":287.09999999999997},{"element":"Water","row":9,"col":15,"x":889.5,"y":287.09999999999997},{"element":"Water","row":9,"col":16,"x":948.8,"y":287.09999999999997},{"element":"Water","row":9,"col":17,"x":1008.0999999999999,"y":287.09999999999997},{"element":"Sand","row":9,"col":18,"x":1067.3999999999999,"y":287.09999999999997},{"element":"Sand","row":9,"col":19,"x":1126.7,"y":287.09999999999997}],[{"element":"Sand","row":10,"col":0,"x":0,"y":319},{"element":"Sand","row":10,"col":1,"x":59.3,"y":319},{"element":"Sand","row":10,"col":2,"x":118.6,"y":319},{"element":"Water","row":10,"col":3,"x":177.89999999999998,"y":319},{"element":"Water","row":10,"col":4,"x":237.2,"y":319},{"element":"Water","row":10,"col":5,"x":296.5,"y":319},{"element":"Water","row":10,"col":6,"x":355.79999999999995,"y":319},{"element":"Water","row":10,"col":7,"x":415.09999999999997,"y":319},{"element":"Sand","row":10,"col":8,"x":474.4,"y":319},{"element":"Sand","row":10,"col":9,"x":533.6999999999999,"y":319},{"element":"Sand","row":10,"col":10,"x":593,"y":319},{"element":"Sand","row":10,"col":11,"x":652.3,"y":319},{"element":"Water","row":10,"col":12,"x":711.5999999999999,"y":319},{"element":"Water","row":10,"col":13,"x":770.9,"y":319},{"element":"Water","row":10,"col":14,"x":830.1999999999999,"y":319},{"element":"Water","row":10,"col":15,"x":889.5,"y":319},{"element":"Water","row":10,"col":16,"x":948.8,"y":319},{"element":"Sand","row":10,"col":17,"x":1008.0999999999999,"y":319},{"element":"Sand","row":10,"col":18,"x":1067.3999999999999,"y":319},{"element":"Sand","row":10,"col":19,"x":1126.7,"y":319}],[{"element":"Sand","row":11,"col":0,"x":0,"y":350.9},{"element":"Sand","row":11,"col":1,"x":59.3,"y":350.9},{"element":"Sand","row":11,"col":2,"x":118.6,"y":350.9},{"element":"Sand","row":11,"col":3,"x":177.89999999999998,"y":350.9},{"element":"Sand","row":11,"col":4,"x":237.2,"y":350.9},{"element":"Sand","row":11,"col":5,"x":296.5,"y":350.9},{"element":"Sand","row":11,"col":6,"x":355.79999999999995,"y":350.9},{"element":"Sand","row":11,"col":7,"x":415.09999999999997,"y":350.9},{"element":"Sand","row":11,"col":8,"x":474.4,"y":350.9},{"element":"Sand","row":11,"col":9,"x":533.6999999999999,"y":350.9},{"element":"Sand","row":11,"col":10,"x":593,"y":350.9},{"element":"Sand","row":11,"col":11,"x":652.3,"y":350.9},{"element":"Sand","row":11,"col":12,"x":711.5999999999999,"y":350.9},{"element":"Sand","row":11,"col":13,"x":770.9,"y":350.9},{"element":"Sand","row":11,"col":14,"x":830.1999999999999,"y":350.9},{"element":"Sand","row":11,"col":15,"x":889.5,"y":350.9},{"element":"Sand","row":11,"col":16,"x":948.8,"y":350.9},{"element":"Sand","row":11,"col":17,"x":1008.0999999999999,"y":350.9},{"element":"Sand","row":11,"col":18,"x":1067.3999999999999,"y":350.9},{"element":"Sand","row":11,"col":19,"x":1126.7,"y":350.9}],[{"element":"Sand","row":12,"col":0,"x":0,"y":382.79999999999995},{"element":"Sand","row":12,"col":1,"x":59.3,"y":382.79999999999995},{"element":"Sand","row":12,"col":2,"x":118.6,"y":382.79999999999995},{"element":"Sand","row":12,"col":3,"x":177.89999999999998,"y":382.79999999999995},{"element":"Sand","row":12,"col":4,"x":237.2,"y":382.79999999999995},{"element":"Sand","row":12,"col":5,"x":296.5,"y":382.79999999999995},{"element":"Sand","row":12,"col":6,"x":355.79999999999995,"y":382.79999999999995},{"element":"Sand","row":12,"col":7,"x":415.09999999999997,"y":382.79999999999995},{"element":"Sand","row":12,"col":8,"x":474.4,"y":382.79999999999995},{"element":"Sand","row":12,"col":9,"x":533.6999999999999,"y":382.79999999999995},{"element":"Sand","row":12,"col":10,"x":593,"y":382.79999999999995},{"element":"Sand","row":12,"col":11,"x":652.3,"y":382.79999999999995},{"element":"Sand","row":12,"col":12,"x":711.5999999999999,"y":382.79999999999995},{"element":"Sand","row":12,"col":13,"x":770.9,"y":382.79999999999995},{"element":"Sand","row":12,"col":14,"x":830.1999999999999,"y":382.79999999999995},{"element":"Sand","row":12,"col":15,"x":889.5,"y":382.79999999999995},{"element":"Sand","row":12,"col":16,"x":948.8,"y":382.79999999999995},{"element":"Sand","row":12,"col":17,"x":1008.0999999999999,"y":382.79999999999995},{"element":"Sand","row":12,"col":18,"x":1067.3999999999999,"y":382.79999999999995},{"element":"Sand","row":12,"col":19,"x":1126.7,"y":382.79999999999995}],[{"element":"Sand","row":13,"col":0,"x":0,"y":414.7},{"element":"Sand","row":13,"col":1,"x":59.3,"y":414.7},{"element":"Sand","row":13,"col":2,"x":118.6,"y":414.7},{"element":"Sand","row":13,"col":3,"x":177.89999999999998,"y":414.7},{"element":"Sand","row":13,"col":4,"x":237.2,"y":414.7},{"element":"Sand","row":13,"col":5,"x":296.5,"y":414.7},{"element":"Sand","row":13,"col":6,"x":355.79999999999995,"y":414.7},{"element":"Sand","row":13,"col":7,"x":415.09999999999997,"y":414.7},{"element":"Sand","row":13,"col":8,"x":474.4,"y":414.7},{"element":"Sand","row":13,"col":9,"x":533.6999999999999,"y":414.7},{"element":"Sand","row":13,"col":10,"x":593,"y":414.7},{"element":"Sand","row":13,"col":11,"x":652.3,"y":414.7},{"element":"Sand","row":13,"col":12,"x":711.5999999999999,"y":414.7},{"element":"Sand","row":13,"col":13,"x":770.9,"y":414.7},{"element":"Sand","row":13,"col":14,"x":830.1999999999999,"y":414.7},{"element":"Sand","row":13,"col":15,"x":889.5,"y":414.7},{"element":"Sand","row":13,"col":16,"x":948.8,"y":414.7},{"element":"Sand","row":13,"col":17,"x":1008.0999999999999,"y":414.7},{"element":"Sand","row":13,"col":18,"x":1067.3999999999999,"y":414.7},{"element":"Sand","row":13,"col":19,"x":1126.7,"y":414.7}],[{"element":"Sand","row":14,"col":0,"x":0,"y":446.59999999999997},{"element":"Sand","row":14,"col":1,"x":59.3,"y":446.59999999999997},{"element":"Sand","row":14,"col":2,"x":118.6,"y":446.59999999999997},{"element":"Sand","row":14,"col":3,"x":177.89999999999998,"y":446.59999999999997},{"element":"Sand","row":14,"col":4,"x":237.2,"y":446.59999999999997},{"element":"Sand","row":14,"col":5,"x":296.5,"y":446.59999999999997},{"element":"Sand","row":14,"col":6,"x":355.79999999999995,"y":446.59999999999997},{"element":"Sand","row":14,"col":7,"x":415.09999999999997,"y":446.59999999999997},{"element":"Sand","row":14,"col":8,"x":474.4,"y":446.59999999999997},{"element":"Sand","row":14,"col":9,"x":533.6999999999999,"y":446.59999999999997},{"element":"Sand","row":14,"col":10,"x":593,"y":446.59999999999997},{"element":"Sand","row":14,"col":11,"x":652.3,"y":446.59999999999997},{"element":"Sand","row":14,"col":12,"x":711.5999999999999,"y":446.59999999999997},{"element":"Sand","row":14,"col":13,"x":770.9,"y":446.59999999999997},{"element":"Sand","row":14,"col":14,"x":830.1999999999999,"y":446.59999999999997},{"element":"Sand","row":14,"col":15,"x":889.5,"y":446.59999999999997},{"element":"Sand","row":14,"col":16,"x":948.8,"y":446.59999999999997},{"element":"Sand","row":14,"col":17,"x":1008.0999999999999,"y":446.59999999999997},{"element":"Sand","row":14,"col":18,"x":1067.3999999999999,"y":446.59999999999997},{"element":"Sand","row":14,"col":19,"x":1126.7,"y":446.59999999999997}],[{"element":"Sand","row":15,"col":0,"x":0,"y":478.5},{"element":"Sand","row":15,"col":1,"x":59.3,"y":478.5},{"element":"Sand","row":15,"col":2,"x":118.6,"y":478.5},{"element":"Sand","row":15,"col":3,"x":177.89999999999998,"y":478.5},{"element":"Sand","row":15,"col":4,"x":237.2,"y":478.5},{"element":"Sand","row":15,"col":5,"x":296.5,"y":478.5},{"element":"Sand","row":15,"col":6,"x":355.79999999999995,"y":478.5},{"element":"Sand","row":15,"col":7,"x":415.09999999999997,"y":478.5},{"element":"Sand","row":15,"col":8,"x":474.4,"y":478.5},{"element":"Sand","row":15,"col":9,"x":533.6999999999999,"y":478.5},{"element":"Sand","row":15,"col":10,"x":593,"y":478.5},{"element":"Sand","row":15,"col":11,"x":652.3,"y":478.5},{"element":"Sand","row":15,"col":12,"x":711.5999999999999,"y":478.5},{"element":"Sand","row":15,"col":13,"x":770.9,"y":478.5},{"element":"Sand","row":15,"col":14,"x":830.1999999999999,"y":478.5},{"element":"Sand","row":15,"col":15,"x":889.5,"y":478.5},{"element":"Sand","row":15,"col":16,"x":948.8,"y":478.5},{"element":"Sand","row":15,"col":17,"x":1008.0999999999999,"y":478.5},{"element":"Sand","row":15,"col":18,"x":1067.3999999999999,"y":478.5},{"element":"Sand","row":15,"col":19,"x":1126.7,"y":478.5}],[{"element":"Sand","row":16,"col":0,"x":0,"y":510.4},{"element":"Sand","row":16,"col":1,"x":59.3,"y":510.4},{"element":"Sand","row":16,"col":2,"x":118.6,"y":510.4},{"element":"Sand","row":16,"col":3,"x":177.89999999999998,"y":510.4},{"element":"Sand","row":16,"col":4,"x":237.2,"y":510.4},{"element":"Sand","row":16,"col":5,"x":296.5,"y":510.4},{"element":"Sand","row":16,"col":6,"x":355.79999999999995,"y":510.4},{"element":"Sand","row":16,"col":7,"x":415.09999999999997,"y":510.4},{"element":"Sand","row":16,"col":8,"x":474.4,"y":510.4},{"element":"Sand","row":16,"col":9,"x":533.6999999999999,"y":510.4},{"element":"Sand","row":16,"col":10,"x":593,"y":510.4},{"element":"Sand","row":16,"col":11,"x":652.3,"y":510.4},{"element":"Sand","row":16,"col":12,"x":711.5999999999999,"y":510.4},{"element":"Sand","row":16,"col":13,"x":770.9,"y":510.4},{"element":"Sand","row":16,"col":14,"x":830.1999999999999,"y":510.4},{"element":"Sand","row":16,"col":15,"x":889.5,"y":510.4},{"element":"Sand","row":16,"col":16,"x":948.8,"y":510.4},{"element":"Sand","row":16,"col":17,"x":1008.0999999999999,"y":510.4},{"element":"Sand","row":16,"col":18,"x":1067.3999999999999,"y":510.4},{"element":"Sand","row":16,"col":19,"x":1126.7,"y":510.4}],[{"element":"Sand","row":17,"col":0,"x":0,"y":542.3},{"element":"Sand","row":17,"col":1,"x":59.3,"y":542.3},{"element":"Sand","row":17,"col":2,"x":118.6,"y":542.3},{"element":"Sand","row":17,"col":3,"x":177.89999999999998,"y":542.3},{"element":"Sand","row":17,"col":4,"x":237.2,"y":542.3},{"element":"Sand","row":17,"col":5,"x":296.5,"y":542.3},{"element":"Sand","row":17,"col":6,"x":355.79999999999995,"y":542.3},{"element":"Sand","row":17,"col":7,"x":415.09999999999997,"y":542.3},{"element":"Sand","row":17,"col":8,"x":474.4,"y":542.3},{"element":"Sand","row":17,"col":9,"x":533.6999999999999,"y":542.3},{"element":"Sand","row":17,"col":10,"x":593,"y":542.3},{"element":"Sand","row":17,"col":11,"x":652.3,"y":542.3},{"element":"Sand","row":17,"col":12,"x":711.5999999999999,"y":542.3},{"element":"Sand","row":17,"col":13,"x":770.9,"y":542.3},{"element":"Sand","row":17,"col":14,"x":830.1999999999999,"y":542.3},{"element":"Sand","row":17,"col":15,"x":889.5,"y":542.3},{"element":"Sand","row":17,"col":16,"x":948.8,"y":542.3},{"element":"Sand","row":17,"col":17,"x":1008.0999999999999,"y":542.3},{"element":"Sand","row":17,"col":18,"x":1067.3999999999999,"y":542.3},{"element":"Sand","row":17,"col":19,"x":1126.7,"y":542.3}],[{"element":"Sand","row":18,"col":0,"x":0,"y":574.1999999999999},{"element":"Sand","row":18,"col":1,"x":59.3,"y":574.1999999999999},{"element":"Sand","row":18,"col":2,"x":118.6,"y":574.1999999999999},{"element":"Sand","row":18,"col":3,"x":177.89999999999998,"y":574.1999999999999},{"element":"Sand","row":18,"col":4,"x":237.2,"y":574.1999999999999},{"element":"Sand","row":18,"col":5,"x":296.5,"y":574.1999999999999},{"element":"Sand","row":18,"col":6,"x":355.79999999999995,"y":574.1999999999999},{"element":"Sand","row":18,"col":7,"x":415.09999999999997,"y":574.1999999999999},{"element":"Sand","row":18,"col":8,"x":474.4,"y":574.1999999999999},{"element":"Sand","row":18,"col":9,"x":533.6999999999999,"y":574.1999999999999},{"element":"Sand","row":18,"col":10,"x":593,"y":574.1999999999999},{"element":"Sand","row":18,"col":11,"x":652.3,"y":574.1999999999999},{"element":"Sand","row":18,"col":12,"x":711.5999999999999,"y":574.1999999999999},{"element":"Sand","row":18,"col":13,"x":770.9,"y":574.1999999999999},{"element":"Sand","row":18,"col":14,"x":830.1999999999999,"y":574.1999999999999},{"element":"Sand","row":18,"col":15,"x":889.5,"y":574.1999999999999},{"element":"Sand","row":18,"col":16,"x":948.8,"y":574.1999999999999},{"element":"Sand","row":18,"col":17,"x":1008.0999999999999,"y":574.1999999999999},{"element":"Sand","row":18,"col":18,"x":1067.3999999999999,"y":574.1999999999999},{"element":"Sand","row":18,"col":19,"x":1126.7,"y":574.1999999999999}],[{"element":"Sand","row":19,"col":0,"x":0,"y":606.1},{"element":"Sand","row":19,"col":1,"x":59.3,"y":606.1},{"element":"Sand","row":19,"col":2,"x":118.6,"y":606.1},{"element":"Sand","row":19,"col":3,"x":177.89999999999998,"y":606.1},{"element":"Sand","row":19,"col":4,"x":237.2,"y":606.1},{"element":"Sand","row":19,"col":5,"x":296.5,"y":606.1},{"element":"Sand","row":19,"col":6,"x":355.79999999999995,"y":606.1},{"element":"Sand","row":19,"col":7,"x":415.09999999999997,"y":606.1},{"element":"Sand","row":19,"col":8,"x":474.4,"y":606.1},{"element":"Sand","row":19,"col":9,"x":533.6999999999999,"y":606.1},{"element":"Sand","row":19,"col":10,"x":593,"y":606.1},{"element":"Sand","row":19,"col":11,"x":652.3,"y":606.1},{"element":"Sand","row":19,"col":12,"x":711.5999999999999,"y":606.1},{"element":"Sand","row":19,"col":13,"x":770.9,"y":606.1},{"element":"Sand","row":19,"col":14,"x":830.1999999999999,"y":606.1},{"element":"Sand","row":19,"col":15,"x":889.5,"y":606.1},{"element":"Sand","row":19,"col":16,"x":948.8,"y":606.1},{"element":"Sand","row":19,"col":17,"x":1008.0999999999999,"y":606.1},{"element":"Sand","row":19,"col":18,"x":1067.3999999999999,"y":606.1},{"element":"Sand","row":19,"col":19,"x":1126.7,"y":606.1}]]',
          share: true,
          link: 'beach'
        }
      ])
    );
};
