var numbers = [];
var wholeStr = "";
var uniqueWords = [];

function updatenumFields() {

    document.getElementById("count").innerHTML = "Count:" + numbers.length;
    var tempSum = 0;

    for (var i = 0; i < numbers.length ; i++) {
        tempSum = tempSum + numbers[i];
    }
    document.getElementById("sum").innerHTML = "Sum:" + tempSum;

    var tempAverage = 0;
    var totalelements = numbers.length;
    tempAverage = (tempSum / totalelements);
    document.getElementById("average").innerHTML = "Average:" + tempAverage;
    event.preventDefault();

}

function resetDisplay() {
    console.log("in reset");
    document.getElementById("count").innerHTML = "Count:" + "0";
    document.getElementById("sum").innerHTML = "Sum:" + "0";
    document.getElementById("average").innerHTML = "Average:" + "0";
    document.numberform.quantity.value = "";
    numbers = [];
    document.getElementById("concatenatedstr").innerHTML = "Concatenated:" + ""
    document.getElementById("wordfrequency").innerHTML = "";
    event.preventDefault();
}

function onSubmit() {
    var newnum = Number(document.numberform.quantity.value);
    if (!isNaN(newnum)) {
        numbers.push(newnum);
        updatenumFields();
        document.numberform.quantity.value = "";
    }
    else {
        concatStr(document.numberform.quantity.value);
    }
    event.preventDefault();
}



function concatStr(newstr) {
    wholeStr = wholeStr.concat(newstr.trim()).concat(" ");
    updatestrFields(wholeStr);
    event.preventDefault();
}

function updatestrFields(compStr) {

    document.getElementById("concatenatedstr").innerHTML = "Concateneated:" + compStr;
    compStr = compStr.replace(/[\.,-\/#?!$%\^&\*;:{}=\-_`~()]/g, " ");
    compStr = compStr.trim();
    var words = compStr.split(/[^\w]+/);
    var count = 0;
    words.forEach(checkingWordinuniqueWordlist);
    updateWordcount(uniqueWords);
    event.preventDefault();
}



function checkingWordinuniqueWordlist(item) {

    if (!(uniqueWords.length === 0)) {
        for (var i = 0; i < uniqueWords.length; i++) {
            if (uniqueWords[i].repword === item) {
                uniqueWords[i].frequency++;
                var found = true;
            }

        }
        if (!found) {   //console.log("getting pushed for first time"+ item);
            uniqueWords.push({ repword: item, frequency: 1 });
            found = false;
        }
    }
    else {
        uniqueWords.push({ repword: item, frequency: 1 });
    }
    event.preventDefault();
}

function updateWordcount(uniqueWords) {
    document.getElementById("wordfrequency").innerHTML = '';
    var text = "<ul>";
    for (i = 0; i < uniqueWords.length; i++) {
        text += "<li>" + uniqueWords[i].repword + ":" + uniqueWords[i].frequency + "</li>";
    }
    text += "</ul>";
    document.getElementById("wordfrequency").innerHTML = text;
    uniqueWords.splice(0, uniqueWords.length);
    event.preventDefault();
}
