/*
 * The follow is Wolverine Links, a Google Chrome Extension created by Will Tesler.
 * If you have questions or comments, please email me at wtesler@umich.edu.
 */

 //Holds the corresponding website ids in String format
var savedOrderSTRING = [ "0", "1", "2", "3", "4", "5", "6", "7", "8" ];

//Holds the corresponding website ids
var savedOrder = [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ];

if (localStorage["savedOrder"] != null) {
	savedOrderSTRING = JSON.parse(localStorage["savedOrder"]);
}

for (i = 0; i < savedOrderSTRING.length; i++) {
	if (localStorage.getItem(i.toString()) != null)
		savedOrderSTRING[i] = localStorage.getItem(i.toString());
	savedOrder[i] = parseInt(savedOrderSTRING[i]);
}

window.onload = function() {
	var buttonLinks = [
			"https://ctools.umich.edu/portal",
			"https://wolverineaccess.umich.edu/",
			"http://www.housing.umich.edu/",
			"http://www.lsa.umich.edu/cg/",
			"http://mail.umich.edu/",
			"http://virtualsites.umich.edu/",
			"http://goo.gl/maps/vPTxB",
			"https://my.lecturetools.com/users/login",
			"http://www.lib.umich.edu/",
			"http://www.itcs.umich.edu/storage/box/",
			"http://piazza.com/",
			"http://mfile.umich.edu/",
			"http://www.uhs.umich.edu/",
			"http://www.mgoblue.com/",
			"http://www.engin.umich.edu/courses/",
			"http://www.kines.umich.edu/course-directory",
			"http://nursing.umich.edu/academic-programs/other-u-m-schools-courses",
			"http://www.bus.umich.edu/coursemanagement/coursedescriptions.asp",
			"http://mbus.pts.umich.edu/",
			"http://www.music.umich.edu/index.php",
			"http://its.umich.edu/help/",
			"https://mprint.umich.edu/",
			"http://www.engin.umich.edu/caen/",
			"http://www.housing.umich.edu/dining/menus",
			"https://www.myplan.housing.umich.edu/index.php?skey=3c657967538a8c5799b2bfc78d8618cb&cid=72&",
			"http://www.law.umich.edu/Pages/default.aspx",
			"http://uunions.umich.edu/uclub/lunch" ];

	var buttonPics = [ "url('ctools.png')", "url('wolverineaccess.png')",
			"url('uhousing.png')", "url('lsa.png')", "url('webmail.png')",
			"url('virtualsites.png')", "url('map.png')",
			"url('lecturetools.png')", "url('library.png')", "url('mbox.png')",
			"url('piazza.png')", "url('mfile.png')", "url('uhs.png')",
			"url('mgoblue.png')", "url('engineering.png')", "url('kines.png')",
			"url('nursing.png')", "url('ross.png')", "url('magicbus.png')",
			"url('music.png')", "url('its.png')", "url('mprint.png')",
			"url('caen.png')", "url('dining.png')", "url('mealplan.png')",
			"url('mlaw.png')", "url('uclub.png')" ];
			
	var websiteNameList = ["Ctools","Wolverine Access","Housing","LSA","Email","Virtual Sites",
			"Map","Lecture Tools","Library","M+Box","Piazza","Mfile","UHS","Athletics","Engineering","Kinesiology",
			"Nursing","Ross Business","Magic Bus","Music, Theatre & Dance","ITS","MPrint","CAEN","Dining Menu and Hours",
			"Meal Plan","Law School","University Club"];
	
	//Setup Starting 3x3 Square with the preset choices (from savedOrder)
	var buttons = new Array();
	for (var i = 0; i <= 8; i++){
		buttons[i] = document.getElementById("button"+i.toString());
		buttons[i].id = i;
		buttons[i].onclick = function() {
			openPage(this.id);
		};
		buttons[i].style.backgroundImage = buttonPics[savedOrder[i]];
	}

	//Begin Google Analytics Tracker
	initiateTracker();

	//Button at bottom that triggers the small 3x3 square to appear
	var customize = document.getElementById("customize");
	customize.onclick = function() {
		showMore();
		customize.onclick = null;
	};

	//Opens Website
	function openPage(i) {
		console.log(i.toString());
		window.open(buttonLinks[i]);
	}

	//Reveals the small 3x3 square for customizing
	function showMore() {
		var chooseOneSpace = document.getElementById("chooseOne");
		var chooseOne = document.createElement("p");
		chooseOne.appendChild(document.createTextNode('Choose One:'));
		chooseOne.style.fontFamily = "Tahoma";
		chooseOne.style.fontSize = "15px";
		chooseOne.style.marginTop = "30px";
		chooseOneSpace.appendChild(chooseOne);

		var smallButtons = new Array();
		
		//FIRST ROW
		var firstRow = document.getElementById("firstRow");
		smallButtons[0] = document.createElement("BUTTON");
		smallButtons[1] = document.createElement("BUTTON");
		smallButtons[2] = document.createElement("BUTTON");
		smallButtons[0].onclick = function() {
			stayLit(0);
		};
		smallButtons[1].onclick = function() {
			stayLit(1);
		};
		smallButtons[2].onclick = function() {
			stayLit(2);
		};
		firstRow.appendChild(smallButtons[0]);
		firstRow.appendChild(smallButtons[1]);
		firstRow.appendChild(smallButtons[2]);

		//SECOND ROW
		var secondRow = document.getElementById("secondRow");
		smallButtons[3] = document.createElement("BUTTON");
		smallButtons[4] = document.createElement("BUTTON");
		smallButtons[5] = document.createElement("BUTTON");
		smallButtons[3].onclick = function() {
			stayLit(3);
		};
		smallButtons[4].onclick = function() {
			stayLit(4);
		};
		smallButtons[5].onclick = function() {
			stayLit(5);
		};
		secondRow.appendChild(smallButtons[3]);
		secondRow.appendChild(smallButtons[4]);
		secondRow.appendChild(smallButtons[5]);

		//THIRD ROW
		var thirdRow = document.getElementById("thirdRow");
		smallButtons[6] = document.createElement("BUTTON");
		smallButtons[7] = document.createElement("BUTTON");
		smallButtons[8] = document.createElement("BUTTON");
		smallButtons[6].onclick = function() {
			stayLit(6);
		};
		smallButtons[7].onclick = function() {
			stayLit(7);
		};
		smallButtons[8].onclick = function() {
			stayLit(8);
		};
		thirdRow.appendChild(smallButtons[6]);
		thirdRow.appendChild(smallButtons[7]);
		thirdRow.appendChild(smallButtons[8]);

		//Used to determine which button is blue
		var buttonChoice = -1;
		
		//Keeps a Button blue after it has been clicked
		function stayLit(i) {

			for (j = 0; j < smallButtons.length; j++) {
				if (j != i) {
					smallButtons[j].style.backgroundImage = null;
				} else {
					smallButtons[i].style.backgroundImage = "url(blue.png)";
					buttonChoice = i;
					replace(i);
				}
			}
		}

		var replaceWith = document.createElement("p");

		//Processes the replacement request by the user to change an image/link
		function replace(i) {
			var replaceSpace = document.getElementById("replaceWrapper");
			if (replaceSpace.hasChildNodes() === true) {
				replaceWith.innerHTML = '';
				replaceSpace.innerHTML = '';
			}

			replaceWith.appendChild(document.createTextNode('Replace With:'));
			replaceWith.setAttribute("id", "replaceWith");
			replaceWith.style.fontFamily = "Tahoma";
			replaceWith.style.fontSize = "15px";
			replaceWith.style.marginTop = "20px";
			replaceSpace.appendChild(replaceWith);

			var select = document.createElement("select");
			select.setAttribute("name", "selector");
			select.setAttribute("id", "selector");

			var selectValue = 0;
			select.onchange = function() {
				selectValue = select.selectedIndex;
			};

			var option;
			
			//Setup Options
			for(var i = 0; i < websiteNameList.length; i++){
				option = document.createElement("option");
				option.innerHTML = websiteNameList[i];
				select.appendChild(option);	
			}

			replaceSpace.appendChild(select);

			//Setup Replace Button
			var okay = document.createElement("BUTTON");
			okay.appendChild(document.createTextNode('Replace'));
			okay.style.fontFamily = "Tahoma";
			okay.style.fontSize = "15px";
			okay.style.marginTop = "10px";
			okay.setAttribute("class", "finalize");

			okay.onclick = function() {
				buttons[buttonChoice].style.backgroundImage = buttonPics[selectValue];
				savedOrder[buttonChoice] = selectValue;
				localStorage.setItem(buttonChoice.toString(), JSON.stringify(selectValue));
				buttons[buttonChoice].onclick = function() {
					openPage(selectValue);
				};
			};
			
			//Setup Cancel Button
			var cancel = document.createElement("BUTTON");
			cancel.appendChild(document.createTextNode('Cancel'));
			cancel.style.fontFamily = "Tahoma";
			cancel.style.fontSize = "15px";
			cancel.style.marginTop = "10px";
			cancel.setAttribute("class", "finalize");
			
			cancel.onclick = function() {
				chooseOne.innerHTML = "";
				firstRow.innerHTML = "";
				secondRow.innerHTML = "";
				thirdRow.innerHTML = "";
				replaceSpace.innerHTML = "";

				customize.onclick = function() {
					showMore();
				};
			};

			//Add them to the customize body
			replaceSpace.appendChild(okay);
			replaceSpace.appendChild(cancel);

		}

	}

	// Used for getting Google Analytics Data on extension
	function initiateTracker() {
		var _gaq = _gaq || [];
		_gaq.push([ '_setAccount', 'UA-29870367-2' ]);
		_gaq.push([ '_trackPageview' ]);

		(function() {
			var ga = document.createElement('script');
			ga.type = 'text/javascript';
			ga.async = true;
			ga.src = 'https://ssl.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(ga, s);
		})();
	}
}