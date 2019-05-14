import { openDB } from '/node_modules/idb/build/esm/index.js';
import checkConnectivity from '/js/connection.js';
import MyTodo from "/js/components/MyTodo/my-todo.js";
import TodoInput from "/js/components/TodoInput/todo-input.js";
import TodoItem from "/js/components/TodoItem/todo-item.js";

(async function(document) {

	//let todoList = [];
	const app = document.querySelector("#main");
	const listPage = app.querySelector("#list-container");

	checkConnectivity();
	document.addEventListener('connexion-changed', ({detail}) => {
		console.log(detail);
	});

	try{

		/*const data = await fetch('http://localhost:3000/todo');
		const json = await data.json();

		const database = await openDB('app-store', 1, {
			upgrade(db) {
				db.createObjectStore('articles');
			}
		});

		if (navigator.onLine) {
			await database.put('articles', json, 'articles');
		}

		//document.addEventListener('todo-input', ({detail}) => {


		let input = this.shadowRoot.querySelector("#add");
		console.log(input);
		input.addEventListener("submit", function(event){
			json.push({text:document.querySelector("#add").value, checked:false});
			database.put('articles', json, 'articles');
			fetch('http://localhost:3000/todo', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({text:document.querySelector("#add").value, checked:false})
			})
		});
		console.log(detail);
	//});

		const acticles = await database.get('articles', 'articles');

		const todo = acticles.map(item => {
			const todoElement = new MyTodo();

			todoElement.initCard(item.text,
				item.checked);

			listPage.appendChild(todoElement);
			return todoElement;
		});*/

	}catch(error) {
		console.error(error);
	}

})(document);