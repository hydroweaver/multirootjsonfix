const fs = require('fs');

var jsonPath = 'C://Users//karaverm//Downloads/shakespeare_6.0.json';
c = [];
temp = 0;
hold = '';
current_char = '';
another = '';
final = [];
stream = fs.createReadStream(jsonPath);

stream.on('data', (data)=>{
    c.push(data.toString());
}).on('error', (err)=>{
    console.log(err);
}).on('end', ()=>{
    for(var j = 0; j < c.length; j++){
        for(var i = 0; i < c[j].length; i++){
            hold += c[j][i];
            current_char = current_char + c[j][i];
            if(current_char.length > 2){
                current_char = current_char.substr(1, 2, 1);
                if(current_char == '}}' || current_char == '"}'){
                    final.push(JSON.parse(hold));
                    hold = '';
                    if(final.length == 2){
                        var x = Object.assign(final[0], final[1]);
                        console.log(x);
                        final = [];
                    }
                }
    
            }
        }
    }
    
});



