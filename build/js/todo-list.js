"use strict";

window.onload = function(){

	let list = document.querySelector('.todo-list');
	let input = document.querySelector('.todo-input');
	let form = document.querySelector('.todo-form');
	let priority = document.querySelector('.todo-priority');
	let priorityClass;

	priority.onclick = function () {
		priority.classList.toggle('is-important');

		if (priority.classList.contains('is-important')) {
			priority.textContent = 'Важная задача';
		} else {
			priority.textContent = 'Обычная задача';
		}

		priorityClass = priority.classList;
	};

	form.onsubmit = function (evt) {
		evt.preventDefault();

		let newElement = document.createElement('li');

		if (!priority.classList.contains(priorityClass)) {
			newElement.classList.add('is-important');
		}

		newElement.textContent = input.value;
		input.value = '';

		list.append(newElement);

	};
};
