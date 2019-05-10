import { openDB } from '/node_modules/idb/build/esm/index.js';
import CheckConnection from '/js/components/connection/connection.js';

(async function(document) {


	CheckConnection();
	document.addEventListener('connexion-changed', ({detail}) => {
		console.log(detail);
	});

})(document);