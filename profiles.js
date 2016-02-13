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
		image: "img/img3.jpg",
		name: "Joe Shepherd",
		age: "90",
		location:"Little Rock, Arkansas",
		aboutMe: "My grandchildren only speak to me because they think I am a wizard."
	},

	four = {
		image: "img/img4.jpg",
		name: "Gladys Brownstain",
		age: "106",
		location:"Nashville, TN",
		aboutMe: "I'm wet and ready to meet... with a doctor about my incontinence problems."
	},

	// sandy's 2 profiles
	five = {
		image: "img/profiles/aalady.jpg",
		name: "Bernice Adams",
		age: "81",
		location:"Palm Springs, FL",
		aboutMe: "I like to walk on the beach and spend time with my 'special' friends."
	},

	six = {
		image: "img/profiles/beachman.jpg",
		name: "Ralph Waldo",
		age: "80",
		location:"Malibu, CA",
		aboutMe: "I like to drink pina coladas and also spend my free time at the beach (call me Bernice!!!)."
	}
];

var profileElements = document.getElementById("javascript");

// for loop
for (var i = 0; i < profiles.length; i++) {
	profileElements.innerHTML += "<article class= " + '"' + "profile" + '"' + ">" + "<img src=" + '"' + profiles[i].image + 
	'">' + "<h2>" + profiles[i].name + "</h2>" + "<h3>" + profiles[i].age + "</h3>" +
	"<h3>" + profiles[i].location + "</h3>" + "<p>" + profiles[i].aboutMe + "</p>" + 
	"</article>";
};