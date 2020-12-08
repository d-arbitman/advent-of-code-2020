module.exports = class Computer {
  constructor(code) {
    this.initialCode = code;
    this.debug = false;
    this.reset();
  }

  parseCode(code) {
    let parsedCode = [];
    for (let i = 0; i < code.length; i++) {
      const [operation, argument] = code[i].split(' ');
      parsedCode.push({
        operation: operation,
        argument: parseInt(argument),
        executed: false
      });
    }

    return parsedCode;
  }

  reset() {
    if (this.debug) {
      console.log('resetting...');
    }

    this.instructionPointer = 0;
    this.previousInstructionPointer = 0;
    this.accumulator = 0;
    this.exitingNormally = false;
    this.code = JSON.parse(JSON.stringify(this.parseCode(this.initialCode.split("\n"))));
  }

  fixInstruction() {
    for (let i = 0; i < this.code.length || this.exitingNormally; i++) {
      this.reset();

      switch(this.code[i].operation) {
        case 'jmp':
          if (this.debug) {
            console.log('changing ' + i + ' to nop');
          }

          this.code[i].operation = 'nop';
          break;

        case 'nop':
          if (this.debug) {
            console.log('changing ' + i + ' to jmp');
          }

          this.code[i].operation = 'jmp';
          break;

        default:
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
        console.log(`line ${this.instructionPointer}/${this.code.length}`);
      }

      if (instruction.executed) {
        return;
      } else {
        this.code[this.instructionPointer].executed = true;
      }

      switch (instruction.operation) {
        case 'acc':
          if (this.debug) {
            console.log(`  acc (${instruction.argument}): from ${this.accumulator} to ${this.accumulator + instruction.argument}`);
          }

          this.accumulator += instruction.argument;
          break;
        case 'jmp':
          if (this.debug) {
            console.log(`  jump (${instruction.argument}): from ${this.instructionPointer} to ${this.instructionPointer + instruction.argument}`);
          }

          nextInstructionOffset = instruction.argument;
          break;
        case 'nop':
          if (this.debug) {
            console.log(`  nop`);
          }

          default:
            break;
      }

      this.previousInstructionPointer = this.instructionPointer;
    }

    this.exitingNormally = (this.instructionPointer === this.code.length);
  }
}
