class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }

  // Agregar Frente
  addFront(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    console.log(newNode);
    return newNode;
  }

  // Eliminar Frente
  removeFront() {
    if (!this.head) {
      return null; // La lista está vacía, no hay nada que eliminar
    }

    const oldHead = this.head;
    this.head = oldHead.next;
    oldHead.next = null; // Eliminamos la referencia al siguiente nodo
    console.log(oldHead);
    console.log(this.head);
    return this.head;
  }

  //   Front
  front() {
    if (!this.head) {
      return null; // La lista está vacía, no hay nada que eliminar
    }
    console.log(this.head.value);
    return this.head.value;
  }

  //   display
  display() {
    let currentNode = this.head;
    let output = "";
    while (currentNode) {
      output += currentNode.value + " ";
      currentNode = currentNode.next;
    }
    console.log(output.trim());
    return output.trim();
  }
}

const myList = new SLL();
myList.addFront(1);
myList.addFront(2);
myList.addFront(3);
myList.addFront(4);
myList.removeFront();
myList.front();
myList.display();
