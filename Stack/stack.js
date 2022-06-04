class Stack {
    items = []

    push(item) {
        this.items.push(item)
    }

    pop() {
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }
}

let stack = new Stack()
stack.push(20)
stack.push(10)
stack.push(100)
stack.push(7)
console.log(stack)
stack.pop()
stack.pop()
console.log(stack)
console.log(stack.peek())
console.log(stack.isEmpty())
console.log(stack.size())
