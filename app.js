//studentNamesLiteral
var studentNamesLiteral = [];

// studentNamesObject
var studentNamesObject = new Array();

// stringsArray
var stringsArray = ["apple", "banana", "cherry"];

// numbersArray
var numbersArray = [1, 2, 3, 4, 5];

// booleanArray
var booleanArray = [true, false, true];

// mixedArray
var mixedArray = ["apple", 1, true];

//qualificationsArray
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h2> Qualifications:</h2>");
document.write("<ol>");
document.write("<li>" + qualifications[0] + "</li>");
document.write("<li>" + qualifications[1] + "</li>");
document.write("<li>" + qualifications[2] + "</li>");
document.write("<li>" + qualifications[3] + "</li>");
document.write("<li>" + qualifications[4] + "</li>");
document.write("<li>" + qualifications[5] + "</li>");
document.write("<li>" + qualifications[6] + "</li>");
document.write("<li>" + qualifications[7] + "</li>");
document.write("</ol>");

// chart sheet of student marks
var studentNames = ["Michael", "John", "Tony"];
var scores = [320, 230, 480];
var percentage0 = (scores[0] / 500) * 100;
var percentage1 = (scores[1] / 500) * 100;
var percentage2 = (scores[2] / 500) * 100;
document.write("<h2>Chart Sheet Of Student Result:</h2>")
document.write("Score Of " + studentNames[0] + " is " + scores[0] + ". Percentage: " + percentage0.toFixed(2) + "%</br>");
document.write("Score Of " + studentNames[1] + " is " + scores[1] + ". Percentage: " + percentage1.toFixed(2) + "%</br>");
document.write("Score Of " + studentNames[2] + " is " + scores[2] + ". Percentage: " + percentage2.toFixed(2) + "%</br>");





//Initialize array with color names
 var colors = ["red", "green", "blue"];
document.write("Colors:</h2> " + colors.join(", "));

// (a)add colour in start
var newColor = prompt("Enter a color to add to the beginning:");
colors.unshift(newColor);
document.write("<h2>Updated Array:</h2> " + colors.join(", "));

// (b)add colour in end
newColor = prompt("Enter a color to add to the end:");
colors.push(newColor);
document.write("<h2>Updated Array:</h2> " + colors.join(", "));

// (c) Add two more colors in the start
colors.unshift("purple", "yellow");
document.write("<h2>Updated Array:</h2> " + colors.join(", "));

// (d) Delete the first color 
colors.shift();
document.write("<h2>Updated Array:</h2> " + colors.join(", "));

// (e) Delete the last color 
colors.pop();
document.write("<h2>Updated Array:</h2> " + colors.join(", "));

// (f) index  to add color name. 
index = prompt("Enter the index to add color:");
newColor = prompt("Enter a color to add at index " + index + ":");
colors.splice(index, 0, newColor);
document.write("<h2>Updated Array:</h2> " + colors.join(", "));

// (g)  index  to delete colors name
index = prompt("Enter the index to delete color(s) from:");
var count = prompt("Enter the number of colors to delete:");
colors.splice(index, count);
document.write("<h2>Updated Array:</h2> " + colors.join(", "));


// studentScores
var studentScores = [78, 92, 65, 84, 95]
var orderedstudentScores = [78, 92, 65, 84, 95];
orderedstudentScores.sort((a, b) => a - b);
document.write("<h2>Students Scores:</h2>")
document.write("Scores Of Students: " + studentScores + "</br>");
document.write("Ordered Scores Of Students: " + orderedstudentScores);

// list of cities
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = ["Islamabad", "Quetta"];
document.write("<h2>List Of Cities:</h2>")
document.write("<b>Cities list:</b></br> " + cities + "</br></br>")
document.write("<b>Selected Cities list:</b></br> " + selectedCities + "</br></br>");

// array joint method
var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" ");
document.write("<h2>Array:</h2> " + arr + "</br>");
document.write("<h2>String:</h2> " + singleString + "</br>");


// fifoArray
var fifoArray = ["Keyboard", "Mouse", "Monitor", "Printer"];
fifoArray[0];
fifoArray[1];
fifoArray[2];
fifoArray[3];
document.write("</br></br>"+"<h2>Devices:</h2> "+ fifoArray);
document.write("<h3>Out:</h3> "+ fifoArray[0]);
document.write("<h3>Out:</h3> "+ fifoArray[1]);
document.write("<h3>Out:</h3> "+ fifoArray[2]);
document.write("<h3>Out:</h3> "+ fifoArray[3]);

// LIFOARRAY
var lifoArray = ["Keyboard", "Mouse", "Monitor", "Printer"];
lifoArray[0];
lifoArray[1];
lifoArray[2];
lifoArray[3];
document.write("</br></br>"+"<h2>Devices:</h2> "+ fifoArray);
document.write("<h3>Out:</h3> "+ fifoArray[2]);
document.write("<h3>Out:</h3> "+ fifoArray[3]);
document.write("<h3>Out:</h3> "+ fifoArray[1]);
document.write("<h3>Out:</h3> "+ fifoArray[0]);

// phone manufacturers
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<h2>Phone Manufacturers:</h2>"+"<select>");
for(var i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");

