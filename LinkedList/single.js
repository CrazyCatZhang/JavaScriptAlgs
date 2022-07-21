class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    head = null
    length = 0

    append(item) {
        const newNode = new Node(item)
        if (this.length === 0) {
            this.head = newNode
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
        this.length += 1
    }

    insert(position, item) {
        const newNode = new Node(item)
        if (position < 0 || position >= this.length) return false
        if (position === 0) {
            newNode.next = this.head
            this.head = newNode
        } else {
            let index = 0
            let current = this.head
            let previous = null
            while (index++ < position) {
                previous = current
                current = current.next
            }
            newNode.next = current
            previous.next = newNode
        }
        this.length += 1
        return true
    }

    get(position) {
        if (position < 0 || position >= this.length) return false
        let index = 0
        let current = this.head
        while (index++ < position) {
            current = current.next
        }
        return current.data
    }

    indexOf(element) {
        let current = this.head
        let index = 0
        while (current) {
            if (current.data === element) {
                return index
            }
            current = current.next
            index += 1
        }
    }

    update(position, newData) {
        if (position < 0 || position >= this.length) return false
        let current = this.head
        let index = 0
        while (index++ < position) {
            current = current.next
        }
        current.data = newData
        return true
    }

    removeAt(position) {
        if (position < 0 || position >= this.length) return false
        let current = this.head
        let index = 0
        let previous = null
        if (position === 0) {
            this.head = this.head.next
        } else {
            while (index++ < position) {
                previous = current
                current = current.next
            }
            previous.next = current.next
        }
        this.length -= 1
        return current.data
    }

    remove(item) {
        const position = this.indexOf(item)
        return this.removeAt(position)
    }

    isEmpty() {
        return this.length === 0
    }

    size() {
        return this.length
    }

    toString() {
        let current = this.head
        let listString = ''
        while (current) {
            listString += current.data + ' '
            current = current.next
        }
        return listString
    }
}