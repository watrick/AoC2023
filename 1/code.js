const filename = 'input.txt';

const fs = require('fs');

var input = fs.readFileSync(filename, 'utf-8').toString().split('\n');

var total = 0;

var first = 0;

var last = 0;



for(var i = 0; i < input.length; i++) {
	var line1 = input[i];
	var line2 = line1;
	var fword = '';
	var lword = '';

	//Combinations found
	//twone
	//oneight
	//eightwo
	//

	//None of these
	//fiveight
	//nineight
	//sevenine

	for(var j = 0; j < line1.length; j++) {

		fword = fword.concat(line1[j]);

		var replaced = false;
		replaced = fword.search('one') >= 0;
		if(replaced){
		    first = '1';
		}
		replaced = fword.search('two') >= 0;
		if(replaced){
		    first = '2';
		}
		replaced = fword.search('three') >= 0;
		if(replaced){
		    first = '3';
		}
		replaced = fword.search('four') >= 0;
		if(replaced){
		    first = '4';
		}
		replaced = fword.search('five') >= 0;
		if(replaced){
		    first = '5';
		}
		replaced = fword.search('six') >= 0;
		if(replaced){
		    first = '6';
		}
		replaced = fword.search('seven') >= 0;
		if(replaced){
		    first = '7';
		}
		replaced = fword.search('eight') >= 0;
		if(replaced){
		    first = '8';
		}
		replaced = fword.search('nine') >= 0;
		if(replaced){
		    first = '9';
		}
		
        
		if(!isNaN(fword.charAt(j))) {
			first = fword.charAt(j);
			break;
		} else if(first != '') {
			break;
		}
		
	}

	for(var k = line2.length - 1; k >= 0; k--) {
		
		lword = line2[k].concat(lword);
		var replaced = false;
		replaced = lword.search('one') >= 0;
		if(replaced){
		    last = '1';
		}
		replaced = lword.search('two') >= 0;
		if(replaced){
		    last = '2';
		}
		replaced = lword.search('three') >= 0;
		if(replaced){
		    last = '3';
		}
		replaced = lword.search('four') >= 0;
		if(replaced){
		    last = '4';
		}
		replaced = lword.search('five') >= 0;
		if(replaced){
		    last = '5';
		}
		replaced = lword.search('six') >= 0;
		if(replaced){
		    last = '6';
		}
		replaced = lword.search('seven') >= 0;
		if(replaced){
		    last = '7';
		}
		replaced = lword.search('eight') >= 0;
		if(replaced){
		    last = '8';
		}
		replaced = lword.search('nine') >= 0;
		if(replaced){
		    last = '9';
		}

		if(!isNaN(lword.charAt(0))) {
			last = lword.charAt(0);
			break;
		} else if(last != '') {
			break;
		}
	}

	total += Number(first + last);
	first = '';
	last = '';
}

console.log('total: ' + total);
