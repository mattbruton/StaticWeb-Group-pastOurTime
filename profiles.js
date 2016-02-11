var profiles = [

// abbie's 2 profiles
	one = {
		image: "img/edna.jpg",
		name: "Edna Herman",
		age: "82",
		location:"Provo, UT",
		aboutMe: "LOVE fitness - work harder live longer."
	},

	two = {
		image: "img/josie.jpg",
		name: "Josie Jones",
		age: "93",
		location:"San Francisco, CA",
		aboutMe: "Flying free at 93"
	},

	// matt's 2 profiles
	three = {
		image: "http://www.google.com/a.jpg",
		name: "Joe Shepherd",
		age: "100",
		location:"Little Rock, Arkansas",
		aboutMe: "riapeunrop paiuenp apiuef caenop"
	},

	four = {
		image: "http://www.google.com/a.jpg",
		name: "Matt Bruton",
		age: "96",
		location:"Nashville, TN",
		aboutMe: "live laugh love xoxo gossip girl"
	},

	// sandy's 2 profiles
	five = {
		image: "http://www.google.com/a.jpg",
		name: "Bernie Adams",
		age: "81",
		location:"Palm Springs, FL",
		aboutMe: "a"
	},

	six = {
		image: "http://www.google.com/a.jpg",
		name: "Ralph Waldo",
		age: "80",
		location:"Malibu, CA",
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