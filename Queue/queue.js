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

module.exports = Queue