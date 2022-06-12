/*Write a JavaScript function that accepts two arguments, a string and a 
letter and the function will count the number of occurrences of the specified 
letter within the string.*/ 

//Explanation

//Write a JavaScript function that accepts two arguments
function countCharacters(str, letter) {
	
//Declare a variable for the number of occurrences and set it equal to 0
	let numOfOccurrences = 0;	

//Create a FOR loop to iterate through the string
	for (let index = 0; index < str.length; index++){

//Write an conditional statment to execute when condition is meant
	if (str.toLowerCase().charAt(index) === letter) {
		numOfOccurrences += 1;
	}		
	}
	return numOfOccurrences;
}

console.log(countCharacters("One can choose to go back toward safety or forward toward growth.", "o"));

//Solution 

function countCharacters(str, letter) {
	let numOfOccurrences = 0;
	for (let index = 0; index < str.length; index++){
		if (str.toLowerCase().charAt(index) === letter){
			numOfOccurrences += 1; 
		}
	}
	return numOfOccurrences;
}

console.log(countCharacters("One can choose to go back toward safety or forward toward growth.", "o"));