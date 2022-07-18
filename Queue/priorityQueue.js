class QueueElement {
    constructor(element, priority) {
        this.element = element
        this.priority = priority
    }
}

class PriorityQueue {
    items = []

    enQueue(element, priority) {
        const queueElement = new QueueElement(element, priority)

        if (this.items.length === 0) {
            this.items.push(queueElement)
        } else {
            let added = false
            for (let i = 0; i < this.items.length; i++) {
                if (queueElement.priority > this.items[i].priority) {
                    this.items.splice(i, 0, queueElement)
                    added = true
                    break
                }
            }
            if (!added) {
                this.items.push(queueElement)
            }
        }
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

const priorityQueue = new PriorityQueue()
priorityQueue.enQueue('aaa', 111)
priorityQueue.enQueue('bbb', 200)
priorityQueue.enQueue('ccc', 61)
priorityQueue.enQueue('ddd', 50)
console.log(priorityQueue)