module.exports = (() => {
  let module = {};

  module.part1 = (input) => {
    const [fields, tickets] = module.parseInput(input);
    let invalidFields = [];

    tickets.forEach(ticket => {
      const toAdd = module.getInvalidValues(ticket, fields);

      for (let i = 0; i < toAdd.length; i++) {
        invalidFields.push(toAdd[i]);
      }
    });

    return invalidFields.reduce((a, b) => a + b);
  };

  module.getInvalidValues = (ticket, fields) => {
    let invalid = [];

    for (let i = 0; i < ticket.length; i++) {
      if (module.isFieldInvalid(ticket[i], fields)) {
        invalid.push(ticket[i]);
      }
    }

    return invalid;
  };

  module.isFieldInvalid = (fieldValue, fields) => {
    let isInvalid = true;
    const f = Object.entries(fields);

    for (let j = 0; j < f.length; j++) {
      for (let k = 0; k < f[1].length; k++) {
        if (fieldValue >= f[j][1][k].start && fieldValue <= f[j][1][k].end) {
          isInvalid = false;
        }
      }
    }

    return isInvalid;
  };

  module.parseInput = (input) => {
    let fields = {};
    let tickets = [];

    for (const field of input.matchAll(/([a-zA-Z ]+): ([0-9or\- ]+)/g)) {
      fields[field[1]] = [];
      const definition = field[2].split(' or ');

      for (let i = 0; i < definition.length; i++) {
        const [start, end] = definition[i].split('-');
        fields[field[1]].push({
          start: parseInt(start, 10),
          end: parseInt(end, 10),
        });
      }
    }

    for (const ticket of input.matchAll(/([\d,]+)/g)) {
      if (ticket[1].indexOf(',') !== -1) {
        tickets.push(ticket[1].split(',').map(x => parseInt(x, 10)));
      }
    }

    return [fields, tickets];
  };

  return module;
})();
