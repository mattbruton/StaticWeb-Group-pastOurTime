var profiles = [

// abbie's 2 profiles
	one = {
		image: "img/edna.jpg",
		name: "Edna Herman",
		age: "82",
		location:"Provo, UT",
		aboutMe: "LOVE fitness - work harder live longer. Come get physical with me."
	},

	two = {
		image: "img/josie.jpg",
		name: "Josie Jones",
		age: "93",
		location:"San Francisco, CA",
		aboutMe: "Flying free at 93. Can't wait to meet a wild mate. xoxoxoxoxoxoxoxo ;)"
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
	'">' + "<h3>" + profiles[i].name + "</h3>" + "<h4>" + profiles[i].age + "</h4>" +
	"<h4>" + profiles[i].location + "</h4>" + "<p>" + profiles[i].aboutMe + "</p>" + 
	"</article>";
};