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

const stack = new Stack()
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

//进制转换
function decToBinary(decNumber) {
    const stack = new Stack()

    while (decNumber > 0) {
        stack.push(decNumber % 2)
        decNumber = Math.floor(decNumber / 2)
    }

    let binaryString = ''

    while (stack.size() > 0) {
        binaryString += stack.pop()
    }
    return binaryString
}

console.log(decToBinary(100))
console.log(decToBinary(10))
console.log(decToBinary(1000))
