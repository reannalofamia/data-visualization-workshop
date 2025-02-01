// console.log("Hello World! ");

// Selects an element from the document with id="date"
const dateElement = document.getElementById('date'); // <span id="date">1/1/2025</span>
console.log(dateElement);

// Gets the current date
let currentDate = new Date();
console.log(currentDate);


// dateElement.innerHTML = currentDate;
		// date.Options <- modification

dateElement.innerHTML = currentDate;

let dateOptions = { year: "numeric", month: "long", day: "numeric"};
// Updates the selected element's content to current date with the help
// toLocaleDateString() method to format it using "en-US" format and dateOptions
// for the value format.
dateElement.innerHTML = currentDate.toLocaleDateString("en-US", dateOptions);

const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const options = {
	method: 'POST',
	headers: {
		// secret key for each user
		'x-rapidapi-key': '5d75f65c81mshe58d6092c97843ap16cc50jsn6875436ecdd5',
		'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com',
		// the request body should be in a format of url parameter 
				// variable="Value"
				// NOT: {variable: vakue}
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	body: new URLSearchParams({woeid: '23424934'}) 
};

let graphData = [];

// fetch code sends a request to a specific url
fetch(url, options) // <- request
.then(res => res.json()) // <- request
.then(data => {
	console.log(data); // data - response of the server after our request


	// for loop - used for repeatable task
				// index < 25 (from indexx 0 to index 24)
	// this 'for loop' adds per item in the graphData collection
	for(let i=0; i<25; i++){
		graphData.push(
			{
				"name": data.trends[i].name,
				"volume": data.trends[i].volume,
			})
	}

	// collects all the name of the topics and stores it to a variable 'topics'
	let topics = graphData.map(post => {
		return post.name
	})

	// collects all the volume of the topics and stores it to a variable 'volumes'
	let volumes = graphData.map(post => {
		return post.volume 
	})

	console.log(graphData)
	console.log(graphData.length)

			// myChart <- <canvas id="myChart"></canvas>
	const myChart = document.getElementById("myChart");	// <canvas id= "myChart"></canvas>

	let barChart = new Chart(myChart, {

		type: 'bar',
		data: {
			labels: topics,
			datasets: [{
				label: '# of tweets /xeets',
				data: volumes,
				borderWidth: 2,
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(255, 159, 64, 0.2)',
					'rgba(255, 205, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(201, 203, 207, 0.2)'
				],
				borderColor: [
					'rgb255, 99, 132)',
					'rgb(255, 159, 64)',
					'rgb(255, 205, 86)',
					'rgb(75, 192, 192)',
					'rgb(54, 162, 235)',
					'rgb(153, 102, 255)',
					'rgb(201, 203, 207)'
				],

				hoverBackgroundColor: [
					'rgb255, 99, 132)',
					'rgb(255, 159, 64)',
					'rgb(255, 205, 86)',
					'rgb(75, 192, 192)',
					'rgb(54, 162, 235)',
					'rgb(153, 102, 255)',
					'rgb(201, 203, 207)'
				],

			}]
		},
		options: {
			indexAxis: 'y', 
			scales:{
				y: {
					beginAtZero: true
				}
			}
		}
	})

});

// // Object - key and value pair
// let myPost = {
// 	name: "Lee Sung Kyung",
// 	queryUrl: "search?q=%22Lee+Sung+Kyung%22",
// 	volume: 31799,
// 	followers: 3895734
// }

// console.log(myPost);

// //			object.propertyName
// console.log(myPost.name);
// console.log(myPost.queryUrl);
// console.log(myPost.volume);
// console.log(myPost.followers);

// // Array of objects (collection of objects)
// let graphData = [
// 	{name: "#PorDeeReunion", queryUrl: "search?q=%23PorDeeReunion", volume: 67000}, // 1
// 	{name: "#BGYO3rdAnniversary", queryUrl: "search?q=%23BGYO3rdAnniversary", volume: 27400} //2
// ];

// console.log(graphData);

// graphData.push(myPost);
// console.log(graphData);

// console.log(graphData[2]);
// console.log(graphData[1]);