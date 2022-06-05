class Queue {
    items = []

    enQueue(item) {
        this.items.push(item)
    }

    deQueue() {
        return this.items.shift()
    }

    front() {
        return this.items[0]
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }
}

const queue = new Queue()
queue.enQueue(1)
queue.enQueue(2)
queue.enQueue(3)
queue.enQueue(4)
console.log(queue)
queue.deQueue()
queue.deQueue()
console.log(queue)
console.log(queue.isEmpty())
console.log(queue.size())
console.log(queue.front())