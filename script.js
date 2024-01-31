const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = [
	'Apple',
	'Apricot',
	'Avocado 🥑',
	'Banana',
	'Bilberry',
	'Blackberry',
	'Blackcurrant',
	'Blueberry',
	'Boysenberry',
	'Currant',
	'Cherry',
	'Coconut',
	'Cranberry',
	'Cucumber',
	'Custard apple',
	'Damson',
	'Date',
	'Dragonfruit',
	'Durian',
	'Elderberry',
	'Feijoa',
	'Fig',
	'Gooseberry',
	'Grape',
	'Raisin',
	'Grapefruit',
	'Guava',
	'Honeyberry',
	'Huckleberry',
	'Jabuticaba',
	'Jackfruit',
	'Jambul',
	'Juniper berry',
	'Kiwifruit',
	'Kumquat',
	'Lemon',
	'Lime',
	'Loquat',
	'Longan',
	'Lychee',
	'Mango',
	'Mangosteen',
	'Marionberry',
	'Melon',
	'Cantaloupe',
	'Honeydew',
	'Watermelon',
	'Miracle fruit',
	'Mulberry',
	'Nectarine',
	'Nance',
	'Olive',
	'Orange',
	'Clementine',
	'Mandarine',
	'Tangerine',
	'Papaya',
	'Passionfruit',
	'Peach',
	'Pear',
	'Persimmon',
	'Plantain',
	'Plum',
	'Pineapple',
	'Pomegranate',
	'Pomelo',
	'Quince',
	'Raspberry',
	'Salmonberry',
	'Rambutan',
	'Redcurrant',
	'Salak',
	'Satsuma',
	'Soursop',
	'Star fruit',
	'Strawberry',
	'Tamarillo',
	'Tamarind',
	'Yuzu',
];

// Creates array of fruits containing string input by user
function search(str) {
	let results = [];
	str = str.toLowerCase();
	if (str === '') return;

	for (let food of fruit) {
		lowerCasedFood = food.toLowerCase();
		if (lowerCasedFood.includes(str)) {
			results.push(food);
		}
	}
	return results;
}

// Passes input value from user into search() and showSuggestions()
function searchHandler() {
	results = search(input.value);
	showSuggestions(results, input.value);
}

// Adds fruit containing input string to dropdown list, uses regular expression matching to bold the text within fruit that matches the input
function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';
	for (let suggestion of results) {
		const match = suggestion.match(new RegExp(inputVal, 'i'))
		suggestion = suggestion.replace(match[0], `<b>${match[0]}</b>`)
		suggestions.innerHTML += `<li>${suggestion}</li>`
	}
}

// Populates input.value with text from li that was clicked on by user
function useSuggestion(e) {
	if (e.target.tagName === 'LI') {
		input.value = e.target.innerText;
		suggestions.innerHTML = '';
	}
}

// Event listeners for typing character and for clicking on suggestion
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
