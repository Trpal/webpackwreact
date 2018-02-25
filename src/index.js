import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.jsx';

require('./assets/stylesheets/styles.scss');


ReactDOM.render(<App />, document.getElementById('root'));

// class Car {
// 	constructor(car) {
// 		this.car = car;
// 	}
// 	manufacturer() {
// 		document.write(`I have a ${this.car}`);
// 	}
// }

// const car = new Car('PAskea car');

// console.log('testaanpitkäasia');
// car.manufacturer();
