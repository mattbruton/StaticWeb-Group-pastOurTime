var profiles = [

// abbie's 2 profiles
	one = {
		image: "http://www.honesthealthnews.org/wp-content/uploads/2015/06/g_exercise-160x160.jpg",
		name: "Edna Herman",
		age: "82",
		location:"Provo, UT",
		aboutMe: "LOVE fitness - work harder live longer."
	},

	two = {
		image: "http://womanonline.co.za/wp-content/uploads/2012/02/old-people-160x160.jpg",
		name: "Josie Jones",
		age: "93",
		location:"San Francisco, CA",
		aboutMe: "Flying free at 93"
	},

	// matt's 2 profiles
	three = {
		image: "http://www.google.com/a.jpg",
		name: "a",
		age: "a",
		location:"a",
		aboutMe: "a"
	},

	four = {
		image: "http://www.google.com/a.jpg",
		name: "a",
		age: "a",
		location:"a",
		aboutMe: "a"
	},

	// sandy's 2 profiles
	five = {
		image: "http://www.google.com/a.jpg",
		name: "a",
		age: "a",
		location:"a",
		aboutMe: "a"
	},

	six = {
		image: "http://www.google.com/a.jpg",
		name: "a",
		age: "a",
		location:"a",
		aboutMe: "a"
	}
];

var profileElements = document.getElementById("javascript");

// for loop
for (var i = 0; i < profiles.length; i++) {
	profileElements.innerHTML += "<article>" + "<img src=" + '"' + profiles[i].image + 
	'">' + "<h2>" + profiles[i].name + "</h2>" + "<h3>" + profiles[i].age + "</h3>" +
	"<h3>" + profiles[i].location + "</h3>" + "<p>" + profiles[i].aboutMe + "</p>" + 
	"</article>";
};