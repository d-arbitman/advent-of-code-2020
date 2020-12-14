module.exports = class Computer {
  constructor(code) {
    this.initialCode = this.parseCode(code.split("\n"));
    this.debug = false;
    this.reset();
  }

  parseCode(code) {
    let parsedCode = [];

    for (let i = 0; i < code.length; i++) {
      const line = code[i].trim();

      parsedCode.push({
        operation: line.substr(0, 3),
        argument: parseInt(line.trim().substr(4)),
        executed: false,
      });
    }

    return parsedCode;
  }

  reset() {
    if (this.debug) {
      console.log('resetting...');
    }

    this.instructionPointer = 0;
    this.accumulator = 0;
    this.exitingNormally = false;
    this.code = JSON.parse(JSON.stringify(this.initialCode));
  }

  fixInstruction() {
    for (let i = 0; i < this.code.length; i++) {
      this.reset();

      if (this.code[i].operation === 'jmp' || this.code[i].operation === 'nop') {
          const newOp = this.code[i].operation === 'jmp' ? 'nop' : 'jmp';

          if (this.debug) {
            console.log('changing ' + i + ' to ' + newOp);
          }

          this.code[i].operation = newOp;
      }

      this.run();

      if (this.exitingNormally) {
        return;
      }
    }
  }

  run() {
    let nextInstructionOffset = 0;

    for (this.instructionPointer = 0; this.instructionPointer < this.code.length; this.instructionPointer += nextInstructionOffset) {
      nextInstructionOffset = 1;
      const instruction = this.code[this.instructionPointer];

      if (this.debug) {
        console.log(`line ${ this.instructionPointer }/${ this.code.length }`);
      }

      if (instruction.executed) {
        return;
      } else {
        this.code[this.instructionPointer].executed = true;
      }

      switch (instruction.operation) {
        case 'acc':
          if (this.debug) {
            console.log(`  acc (${ instruction.argument }): from ${ this.accumulator } to ${ this.accumulator + instruction.argument }`);
          }

          this.accumulator += instruction.argument;
          break;
        case 'jmp':
          if (this.debug) {
            console.log(`  jump (${ instruction.argument }): from ${ this.instructionPointer } to ${ this.instructionPointer + instruction.argument }`);
          }

          nextInstructionOffset = instruction.argument;
          break;
        case 'nop':
          if (this.debug) {
            console.log(`  nop`);
          }
          break;

        default:
          if (this.debug) {
            console.log(`  Unknown operation: ${ instruction.operation }`);
          }
      }
    }

    this.exitingNormally = (this.instructionPointer === this.code.length);
  }
};
