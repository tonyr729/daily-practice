class Stack {
  constructor(){
    this.currCount = 0;
    this.stack = [];
  }

  length(){
    this.currCount = 0;
    this.stack.forEach(() => this.currCount = (this.currCount + 1))
  }
  
  push(element) {
    this.length()
    this.stack[this.currCount] = element;
    console.log(this.stack)
  }

  pop() {
    let endOfArray = 0;

    if (this.currCount !== 0) {
      endOfArray = this.currCount
      this.currCount = this.currCount - 1
    }

    const element = this.stack.splice((endOfArray), 1)
    console.log(element)
  }
  
  count() {
    console.log(this.currCount + 1)
  }
}

const stack = new Stack();

stack.push('tony')
stack.count()
stack.push('is')
stack.count()
stack.push('cool')
stack.count()
stack.pop()
stack.count()
stack.pop()
stack.count()
stack.pop()
stack.count()
