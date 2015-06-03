function inName(name) {

	var nameList = name.trim().split(" ");
	var intName = nameList[0][0].toUpperCase() + nameList[0].slice(1) + ' ' + nameList[1].toUpperCase()
	return intName
}

var bio = {
	"name": "Daiva Satas",
	"role": " Front End Developer",
	"contacts": {
		"mobile": "847-987-1231",
		"email": "daiva.satas@gmail.com",
		"github": "daivaSts",
		"linkedin": "DaivaSatas",
		"location": "Schaumburg, IL"
	},
	"welcomeMessage": "Life is like riding a bicycle. To keep your balance, you must keep moving /A. Einstein/",
	"skills": ["Python","HTML","CSS","JavaScript","jQuery","MS Office"],
	"biopic": "images/me.jpg"
};

function displayBio() {
	var formattedName = HTMLheaderName.replace("%data%",inName(bio.name));
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formatedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formatedLinkedin = HTMLlinkedin.replace("%data%",bio.contacts.linkedin);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	var formattedPic = HTMLbioPic.replace("%data%",bio.biopic);
	var formattedSkills = HTMLskills.replace("%data%",bio.skills);


	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#topContacts").append(formatedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formatedLinkedin);
	$("#topContacts").append(formattedLocation);

	$("#footerContacts").append(formatedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formatedLinkedin);
	$("#footerContacts").append(formattedLocation);

	$("#header").append(formattedPic);
	$("#header").append(formattedMessage);

	if (bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);
		for (skill in bio.skills) {
			$("#skills").append(HTMLskills.replace('%data%',bio.skills[skill]));
		}
	}
}

displayBio()

var work = {
	"jobs": [
		{"employer": "Mark/Ryan Associates",
		"title": "Administrative Assistant",
		"location": "Schaumburg, IL",
		"dates": "2014-present",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget volutpat lorem, ultrices ultrices felis. In pretium velit ut mi sodales, at facilisis ante finibus. Etiam venenatis vulputate bibendum. Nulla at metus dolor."
		},
		{"employer": "AlphaGraphics",
		"title": "Inside Sales",
		"location": "Schaumburg, IL",
		"dates": "2005-2013",
		"description": "Quisque ut convallis urna. Ut cursus, orci vitae rutrum fermentum, sapien augue laoreet nunc, eget lacinia est nibh ut tortor. Phasellus congue imperdiet augue a dapibus. Donec at justo et nisl laoreet commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In sapien sapien, luctus eu elit quis, dictum dapibus leo. Fusce blandit vel est vitae consequat. Donec volutpat lorem consectetur erat laoreet laoreet."
		},
		{"employer": "ID Graphics",
		"title": "Administrative Assistant",
		"location": "Elgin, IL",
		"dates": "1998-2004",
		"description": "Phasellus accumsan, ligula eget placerat fringilla, mi mi pellentesque mi, lacinia cursus tellus neque id sem. Nullam convallis semper risus nec molestie. Proin et nibh velit. In tincidunt imperdiet congue. Donec ante odio, dapibus nec auctor in, vulputate ac urna. Nullam venenatis odio in hendrerit ultrices. Maecenas a enim sed nulla lobortis venenatis faucibus quis neque."
		}
	]
};

function displayWork() {
	$("#workExperience").append(HTMLworkStart);
	for (job in work.jobs) {
		$(".work-entry").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer)+HTMLworkTitle.replace("%data%", work.jobs[job].title));
		$(".work-entry").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
		$(".work-entry").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
		$(".work-entry").append(HTMLworkDescription.replace("%data%", work.jobs[job].description))
	}
}
displayWork();

var education = {
	"schools": [
		{"name": "Kaunas University of Technology",
		"dates": 1987,
		"degree": "B.Eng.",
		"major": ["Mechanical Engineer"],
		"location": "Kaunas, LT",
		"url": "http://ktu.edu/en"
		},
		{"name": "Harper College",
		"dates": 2006,
		"degree": "Certificate",
		"major": ["Business Communication Skills"],
		"location": "Palatine, IL",
		"url": "http://goforward.harpercollege.edu/"
		}
	],
	"onlineCourses": [
		{"title": "6.00.1x: Introduction to Computer Science and Programming Using Python",
		"school": "edX/ MIT",
		"date": 2014,
		"url": "https://courses.edx.org/courses/MITx/6.00.1-x/1T2014/info"
		},
		{"title": "6.00.2x: Introduction to Computational Thinking and Data Science",
		"school": "edX/ MIT",
		"date": 2014,
		"url": "https://courses.edx.org/courses/MITx/6.00.2x/1T2014/info"
		},
		{"title": "Programming for Everybody (Python)",
		"school": "Coursera/ University of Michigan",
		"date": 2014,
		"url": "https://www.coursera.org/course/pythonlearn"
		},
		{"title": "Internet History, Technology, and Security",
		"school": "Coursera/ University of Michigan",
		"date": 2014,
		"url": "https://www.coursera.org/learn/internet-history"
		},
		{"title": "Principles of Computing",
		"school": "Coursera/ Rice University",
		"date": 2014,
		"url": "https://www.coursera.org/course/principlescomputing1"
		},
		{"title": "An Introduction to Interactive Programming in Python",
		"school": "Coursera/ Rice University",
		"date": 2014,
		"url": "https://www.coursera.org/course/interactivepython"
		},
		{"title": "Intro to Computer Science",
		"school": "Udacity",
		"date": 2013,
		"url": "https://www.udacity.com/course/cs101"
		}
	]
};

function displayEducation() {
	$("#education").append(HTMLschoolStart);
	for (school in education.schools) {
		var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var degrees = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var schoolDegree = schoolName + " " + degrees;
		$(".education-entry:last").append(schoolDegree);
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
		$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].major))
	};

	$(".education-entry").append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
		var title = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var school = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var date = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
		var titleSchool = title + " " + school;
		$(".education-entry").append(titleSchool);
		$(".education-entry").append(date);
		$(".education-entry").append(HTMLonlineURL.replace("%data%", education.onlineCourses[course].url));
	};
};

displayEducation();

var projects = {
	"project": [{
		"title": "RiceRock",
		"date": 2013,
		"description": "'RiceRock' (Asteroids): The player's spaceship goal is to destroy the asteroids before they strike the ship.'RiceRock' (Asteroids): The player's spaceship goal is to destroy the asteroids before they strike the ship.'RiceRock' (Asteroids): The player's spaceship goal is to destroy the asteroids before they strike the ship. The game is done as a project for Coursera and Rice University course 'Introduction to Interactive Programming in Python'",
		"images": "images/Asteroids1.jpg",
		"url": "https://github.com/daivaSts/Introduction-to-Interactive-Programming-in-Python"
		},
		{
		"title": "Blackjack",
		"date": 2013,
		"description": "BlackJack: The player and the dealer are each dealt two cards initially with one of the dealer's cards being dealt faced down. The player may then ask for the dealer to repeatedly 'hit' his hand by dealing him another card. If, at any point, the value of the player's hand exceeds 21, the player is 'busted' and loses immediately. At any point prior to busting, the player may stand' and the dealer will then hit his hand until the value of his hand is 17 or more.",
		"images": "images/Blackjack.jpg",
		"url": "https://github.com/daivaSts/Introduction-to-Interactive-Programming-in-Python"
		}
	]
}

projects.display = function() {

	for (item in projects.project) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.project[item].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.project[item].date));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.project[item].description));
		var githubUrl = HTMLProjectURL.replace("%#%",projects.project[item].url);
		$(".project-entry:last").append(githubUrl.replace("%data%",projects.project[item].url));
		$(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.project[item].images));
	}
}

projects.display();
$("#mapDiv").append(googleMap)
$("#mapDiv").append("<embed src='https://www.google.com/maps/d/embed?mid=zK8pEAt40ct8.kKHUDbnMhHJg&z=7' width='400' height='400'></embed>")

$("#main").append(internationalizeButton);
