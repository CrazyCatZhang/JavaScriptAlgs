class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null
    }
}

class DoublyLinkedList {
    head = null
    tail = null
    length = 0

    append(item) {
        const newNode = new Node(item)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }

        this.length += 1
        return true
    }

    insert(position, item) {
        const newNode = new Node(item)
        if (position < 0 || position > this.length) return false
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            if (position === 0) {
                this.head.prev = newNode
                newNode.next = this.head
                this.head = newNode
            } else if (position === this.length) {
                newNode.prev = this.tail
                this.tail.next = newNode
                this.tail = newNode
            } else {
                let current = this.head
                let index = 0
                while (index++ < position) {
                    current = current.next
                }
                newNode.prev = current.prev
                newNode.next = current
                current.prev.next = newNode
                current.prev = newNode
            }
        }
        this.length += 1
        return true
    }

    get(position) {
        if (position < 0 || position >= this.length) return null
        let current = null
        let index = 0
        if (this.length / 2 > position) {
            current = this.head
            while (index++ < position) {
                current = current.next
            }
        } else {
            current = this.tail
            index = this.length - 1
            while (index-- > position) {
                current = current.prev
            }
        }
        return current.data
    }

    indexOf(item) {
        let current = this.head
        let index = 0

        while (current) {
            if (current.data === item) {
                return index
            }
            current = current.next
            index += 1
        }
        return -1
    }

    update(position, newData) {
        if (position < 0 || position >= this.length) return false
        let current = null
        let index = 0
        if (this.length / 2 > position) {
            current = this.head
            while (index++ < position) {
                current = current.next
            }
        } else {
            current = this.tail
            index = this.length - 1
            while (index-- > position) {
                current = current.prev
            }
        }
        current.data = newData
        return true
    }

    removeAt(position) {
        if (position < 0 || position >= this.length) return null
        let current = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            let index = 0
            if (position === 0) {
                this.head.next.prev = null
                this.head = this.head.next
            } else if (position === this.length - 1) {
                current = this.tail
                this.tail.prev.next = null
                this.tail = this.tail.prev
            } else {
                while (index++ < position) {
                    current = current.next
                }
                current.next.prev = current.prev
                current.prev.next = current.next
            }
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

    getHead() {
        return this.head?.data
    }

    getTail() {
        return this.tail?.data
    }

    forwardString() {
        let current = this.tail
        let listString = ''
        while (current) {
            listString += current.data + ' '
            current = current.prev
        }
        return listString
    }

    backwardString() {
        let current = this.head
        let listString = ''
        while (current) {
            listString += current.data + ' '
            current = current.next
        }
        return listString
    }

    toString() {
        return this.backwardString()
    }
}