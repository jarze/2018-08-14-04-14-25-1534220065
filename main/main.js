module.exports = function main(nunmber) {
    if (isNaN(nunmber)) {
    	return;
    }
    let lcds = [['._.','...','._.','._.','...','._.','._.','._.','._.','._.'],['|.|','..|','._|','._|','|_|','|_.','|_.','..|','|_|','|_|'],['|_|','..|','|_.','._|','..|','._|','|_|','..|','|_|','..|']];
    let lcd = [[],[],[]];
    for (let i = 0; i < nunmber.length; i++) {
    	let char = parseInt(nunmber[i]);
    	lcd[0].push(lcds[0][char]);
    	lcd[1].push(lcds[1][char]);
    	lcd[2].push(lcds[2][char]);
    }
    for (let i = lcd.length - 1; i >= 0; i--) {
    	lcd[i] = lcd[i].join(' ');
    }
    let lcdshow = lcd.join('\n') + '\n';
    return lcdshow;
};