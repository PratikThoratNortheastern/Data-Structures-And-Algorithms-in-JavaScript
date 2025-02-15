"use strict";
// Brute Force
class MyHashSet {
  constructor() {
    this.data = [];
  }

  /**
   * @param {number} key
   * @return {void}
   */
  add(key) {
    if (!this.data.includes(key)) {
      this.data.push(key);
    }
  }

  /**
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    const index = this.data.indexOf(key);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }

  /**
   * @param {number} key
   * @return {boolean}
   */
  contains(key) {
    return this.data.includes(key);
  }
}
