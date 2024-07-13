// const {readFileSync}=require('fs');
// const fs=require('fs');
// fs.read
// const { readFileSync, writeFileSync } = require('fs');
// const first = readFileSync('./content/sub_folder/first.txt', 'utf8');
// const second = readFileSync('./content/sub_folder/text.txt', 'utf8');
// console.log(first, second);

// writeFileSync{
//     './content/sub_folder/result.txt',
//     `here is the result ${first},${second}`
// }
const { readFileSync, writeFileSync } = require('fs');
co
// Read the contents of the first file
const first = readFileSync('./content/sub_folder/first.txt', 'utf8');
// Read the contents of the second file
const second = readFileSync('./content/sub_folder/text.txt', 'utf8');

// Log the contents to the console
console.log(first, second);

// Write the combined contents to a new file
writeFileSync(
    './content/sub_folder/result.txt',
    `Here is the result: ${first}, ${second}`,
    {falg:'a'}
);
