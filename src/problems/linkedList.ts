function LinkedList() {
    let length = 0;
    let head = null;

    const Node = function (element) {
        this.element = element;
        this.next = null
    }
    this.size = function () {
        return length
    }

    this.head = function () {
        return head
    }

    this.add = function (element) {
        const node = new Node(element)
        if (head === null) {
            head = node
        } else {
            let currentNode = head
            while (currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = node
        }
        length++
    }

    this.remove = function (element) {
        let currentNode = head
        let previousNode = null
        while (currentNode.element !== element) {
            previousNode = currentNode
            currentNode = currentNode.next
        }
        previousNode.next = currentNode.next
        length--
    }

    this.isEmpty = function () {
        return length === 0
    }

    this.indexOf = function (element) {
        let currentNode = head
        let index = -1
        while (currentNode) {
            index++
            if (currentNode.element === element) {
                return index
            }
            currentNode = currentNode.next
        }
        return -1
    }

    this.elementAt = function (index) {
        let currentNode = head;
        let count = 0;
        while (count < index) {
            currentNode = currentNode.next
            count++
        }
        return currentNode.element
    }

    this.addAt = function (index, element) {
        const node = new Node(element)
        let currentNode = head;
        let previousNode = null
        let count = 0;

        if (index > length) {
            return false
        }

        if (index === 0) {
            node.next = currentNode
            head = node
        }

        while (count < index) {
            previousNode = currentNode
            currentNode = currentNode.next
            count++
        }
        previousNode.next = node
        node.next = currentNode
        length++
    }

    this.removeAt = function (index) {
        let currentNode = head;
        let previousNode = null
        let count = 0;

        if (index < 0 || index >= length) {
            return false
        }

        if (index === 0) {
            head = currentNode.next
        } else {
            while (count < index) {
                previousNode = currentNode
                currentNode = currentNode.next
                count++
            }
            previousNode.next = currentNode.next
            length--
        }
    }

    this.logListElements = function () {
        let currentNode = head;
        let count = 0;
        while (count < length) {
            console.log(currentNode.element)
            currentNode = currentNode.next
            count++

        }
    }
}

let list = new LinkedList()

list.add('first')
list.add('second')
list.add('third')
list.add('fourth')
list.add('fifth')

list.addAt(3, 'whats this??')
list.remove('whats this??')
list.logListElements()