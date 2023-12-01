const filename = 'input.txt';

const fs = require('fs');

var input = fs.readFileSync(filename, 'utf-8').toString().split('\n');

var sacks = input;

var total = 0;

var chars = [];

var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';


for(var i = 0; i < sacks.length; i++) {
	var sack = sacks[i];
	var a = sack.substring(0, sack.length/2);
	var b = sack.substring(sack.length/2, sack.length);
	var length = sack.length/2;

	for(var j = 0; j < length; j++) {
		for(var k = 0; k < length; k++) {
			if(a[j] === b[k]) {
				chars.push(a[j]);
				j = length;
				k = length;
				break;
			}

		}
	}
	console.log('a: ' + a + ' b: ' + b);
}

for(i = 0; i < chars.length; i++) {
	total += letters.indexOf(chars[i]) + 1;
	console.log(total);
}
console.log('total: ' + total);

console.log(chars);