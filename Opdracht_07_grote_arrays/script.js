let output_list = document.getElementById('output__list');

function getSortedLand(array) {
    let new_array = [];
    array.forEach(person => new_array.push(person.region));
    let sorted = new_array.sort();
    let sorted_set = new Set(sorted);
    return sorted_set;

};

function createLandList(array) {
    if (output_list.innerHTML != "") {
        output_list.innerHTML = ""
    } else {
        let set = getSortedLand(array);
        set.forEach(land => {
            output_list.innerHTML += `<li>${land}</li>`
        });
    }
}

function createLandButtons(array) {
    if (output_list.innerHTML != "") {
        output_list.innerHTML = ""
    } else {
        let set = getSortedLand(array);
        set.forEach(land => {
            output_list.innerHTML += `<li><button id="${land}_button" onclick="calculateAverage(randomPersonData, '${land}')">${land}</button></li>`
        });
    }
}

function calculateAverage(array, land) {
    if (output__average.innerHTML != "") {
        output__average.innerHTML = ""
    } else {
        let filtered_land = array.filter(person => person.region == land);
        let ages = 0
        filtered_land.forEach(person => ages += person.age)
        output__average.innerHTML = "De gemiddelde leeftijd in " + land + " is " + Math.round(ages / filtered_land.length) + " oud.";
    }
}



