function currentLine(arr) {
  var empty = [];
  if (arr.length < 1) {
    return 'There is nobody in line.';
  } else {
    for (var i = 0; i < arr.length; i++) {
      empty.push(arr.indexOf(arr[i]) + 1, '.', arr[i], ', ');
    }
    return 'The line is currently: ' + empty.join(' ');
  }
}
currentLine(katzDeliLine); // "The line is currently: 1. Ada, 2. Grace, 3. Kent"

function nowServing(arr) {
  var firstPerson = [];
  if (arr.length < 1) {
    return 'There is nobody waiting to be served!';
  } else {
    firstPerson.push(arr[0]);
    arr.shift();
    return 'Currently serving ' + firstPerson[0] + '.';
  }
}
nowServing(katzDeliLine); // "Currently serving Ada."

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent"

takeANumber(katzDeliLine, 'Matz'); // "3"

currentLine(katzDeliLine); // "The line is currently: 1. Grace, 2. Kent, 3. Matz"

nowServing(katzDeliLine); // "Currently serving Grace."

currentLine(katzDeliLine); // "The line is currently: 1. Kent, 2. Matz"
