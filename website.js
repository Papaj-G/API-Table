var apiListURL = "https://api.publicapis.org/entries";
var apiList;
var listDiv = document.getElementById("content");
var table = document.getElementById("tableOfAPIs");

loadList()
	.then(() => displayList(apiList))
	.catch((error) => {
		console.error(error);
	});

async function loadList() {
	const response = await fetch(apiListURL);
	apiList = await response.json();
}
function displayList(list) {
	const tableHeading = document.createElement("tr");
	for (const property in list.entries[0]) {
		const newNode = document.createElement("th");
		newNode.innerText = property;
		tableHeading.appendChild(newNode);
	}
	table.appendChild(tableHeading);
	list.entries.forEach((entry) => {
		const tableEntry = document.createElement("tr");
		for (const property in entry) {
			const newNode = document.createElement("td");
			if (property == "Link") {
				const newLink = document.createElement("a");
				newLink.href = entry[property];
				newLink.innerText = "Link";
				newNode.appendChild(newLink);
			} else {
				newNode.innerText = entry[property];
			}
			tableEntry.appendChild(newNode);
		}
		table.appendChild(tableEntry);
	});
}

// API: "Weatherbit";
// Auth: "apiKey";
// Category: "Weather";
// Cors: "unknown";
// Description: "Weather";
// HTTPS: true;
// Link: "https://www.weatherbit.io/api";
