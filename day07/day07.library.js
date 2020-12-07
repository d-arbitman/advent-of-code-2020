module.exports = function() {
  let module = {};

  module.canEventuallyContainShinyGold = (parsedBags, bag) => {
    let canBagEventuallyContainShinyGold = false;

    if (parsedBags[bag] === undefined) {
      canBagEventuallyContainShinyGold = false;
    } else if (parsedBags[bag].includes('shiny gold')) {
      canBagEventuallyContainShinyGold = true;
    } else if (parsedBags[bag][0] === 'no other') {
      canBagEventuallyContainShinyGold = false;
    } else {
      for (let i = 0; i < parsedBags[bag].length; i++) {
        if (module.canEventuallyContainShinyGold(parsedBags, parsedBags[bag][i])) {
          canBagEventuallyContainShinyGold = true;
        }
      }
    }

    return canBagEventuallyContainShinyGold;
  };

  module.parseBagsPart1 = (input) => {
    let parsedBags = {};

    for (let i = 0; i < input.length; i++) {
      const matches = input[i].match(/^(.+) bags.*contain.(.*)/i);

      if (matches) {
        const bagTypes = [...matches[2].matchAll(/ ([a-z ]+) bag./g)];

        for (let j = 0; j < bagTypes.length; j++) {
          if (!parsedBags[matches[1]]) {
            parsedBags[matches[1]] = [bagTypes[j][1]];
          } else {
            parsedBags[matches[1]].push(bagTypes[j][1]);
          }
        }
      }
    }

    return parsedBags;
  };

  module.shinyGoldBagCount = (input) => {
    let parsedBags = module.parseBagsPart1(input);
    let canContainShinyGoldBag = 0;

    for (bag in parsedBags) {
      if (module.canEventuallyContainShinyGold(parsedBags, bag)) {
        canContainShinyGoldBag++;
      }
    }

    return canContainShinyGoldBag;
  };

  module.parseBagsPart2 = (input) => {
    let parsedBags = {};

    for (let i = 0; i < input.length; i++) {
      const matches = input[i].match(/^(.+) bags.*contain.(.*)/i);

      if (matches) {
        const bagTypes = [...matches[2].matchAll(/(\d*) ([a-z ]+) bag./gi)];
        for (let j = 0; j < bagTypes.length; j++) {
          let b = {color: bagTypes[j][2], count: bagTypes[j][1] ? parseInt(bagTypes[j][1]) : 0};

          if (!parsedBags[matches[1]]) {
            parsedBags[matches[1]] = [b];
          } else {
            parsedBags[matches[1]].push(b);
          }
        }
      }
    }

    return parsedBags;
  }

  module.countContents = (parsedBags, bag) => {
    let count = 0;

    for (let i = 0; i < parsedBags[bag].length; i++) {
      if (parsedBags[bag][i].color === 'other') {
        count = 0;
      } else {
        const thisCount = module.countContents(parsedBags, parsedBags[bag][i].color);
        count += parsedBags[bag][i].count + parsedBags[bag][i].count * thisCount;
      }
    }

    return count;
  };

  return module;
}();
