// Add your Circle class here

class Circle {
    constructor(radius) {
      this._radius = radius;
    }
  
    // Getter for radius
    get radius() {
      return this._radius;
    }
  
    // Getter for diameter (pseudo-property)
    get diameter() {
      return this._radius * 2;
    }
  
    // Getter for circumference (pseudo-property)
    get circumference() {
      return 2 * Math.PI * this._radius;
    }
  
    // Getter for area (pseudo-property)
    get area() {
      return Math.PI * Math.pow(this._radius, 2);
    }
  
    // Setter for diameter (pseudo-property)
    set diameter(value) {
      if (value >= 0) {
        this._radius = value / 2;
      }
    }
  
    // Setter for circumference (pseudo-property)
    set circumference(value) {
      if (value >= 0) {
        this._radius = value / (2 * Math.PI);
      }
    }
  
    // Setter for area (pseudo-property)
    set area(value) {
      if (value >= 0) {
        this._radius = Math.sqrt(value / Math.PI);
      }
    }
  }
  
  module.exports = Circle;
  