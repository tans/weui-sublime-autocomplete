let fs = require('fs');

let cssfile = fs.readFileSync('./weui.css').toString().split('\n');

let classes = [];
for(line of cssfile){
	line.replace(/(\.weui.*?)[,\s]/, function($1,$2){
		$2 = $2.replace('.', '')
		if($2){
			if(!classes.includes($2)){
				classes.push($2);
			}
		}
	})
}
fs.writeFileSync('classes.txt', JSON.stringify(classes));

