const Queue = require("./queue.js")

function drummingFlower(nameList,num) {
    const queue = new Queue()
    for (let i = 0; i < nameList.length; i++) {
        queue.enQueue(nameList[i])
    }
    while (queue.size() > 1) {
        for (let i = 0; i < num - 1; i++) {
            queue.enQueue(queue.deQueue())
        }
        queue.deQueue()
    }
    return queue.front()
}