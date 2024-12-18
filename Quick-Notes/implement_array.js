// // How to implement an Array and how to use it.
// class MyArray {
//   constructor() {
//     this.length = 0; //initial length of the array
//     this.data = {}; //this represents the data of the array. we initialised it as an empty object
//   }

//   // accessing elements
//   get(index) {
//     return this.data[index];
//   }
//   // add item to the end of the array
//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     return this.length;
//   }

//   // remove last item from the array
//   pop() {
//     const lastItem = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     return lastItem;
//   }

//   // delete a selected item
//   delete(index) {
//     const item = this.data[index];
//     this.shiftItems(index);
//   }

//   shiftItems(index) {
//     for (let i = index; i < this.length - 1; i++) {
//       this.data[i] = this.data[i + 1];
//     }
//     delete this.data[this.length - 1];
//     this.length--;
//   }
// }

// const newArray = new MyArray();
// newArray.push("hello");
// newArray.push("this");
// newArray.push("DSA");
// newArray.push("Good");
// console.log(newArray);

// newArray.delete(0);
// console.log(newArray);
