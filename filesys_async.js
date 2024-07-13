const { readFile, writeFile, read } = require('fs');

readFile('./content/sub_folder/first.txt', 'utf8', (err, result) => {//utf 8 pettakapothe buffer data occhiddhi
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
});
writeFile('./content/sub_folder/result_async.txt',
    `here is the result:${first.txt}`,
    (err,result)=>{
        if(err){
            console.log(err)
        }
        console.log(result)
    })