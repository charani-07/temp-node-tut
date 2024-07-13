const path=require('path');
console.log(path.sep)//returns platform with specific seperators
//join method joins a sequence of path segments using platform specific seperators as the limiters and returns a normalised path
const filepath=path.join(`/content`,`subfolder`,`text.txt`)
console.log(filepath)

const base =path.basename(filepath)
console.log(base)
//path.resolve:it accepts a sequence of paths or path segments and resolves it into a absolute path
const absolute=path.resolve(__dirname,'content','subfolder','text.txt')
    console.log(absolute)

//     //chat gpt example
//     const path = require('path');

// // Define some path segments
// const folderPath = 'users';
// const fileName = 'data.json';

// // Join segments to form a single path
// const filePath = path.join(folderPath, 'documents', fileName);
// console.log('Joined Path:', filePath); // Output: 'users/documents/data.json'

// // Normalize the path
// const normalizedPath = path.normalize('/users//documents/data/../data.json');
// console.log('Normalized Path:', normalizedPath); // Output: '/users/documents/data.json'

// // Get absolute path
// const absolutePath = path.resolve('users', 'documents', 'data.json');
// console.log('Absolute Path:', absolutePath); // Output will depend on your current directory

// // Parse the path
// const parsedPath = path.parse('/users/documents/data.json');
// console.log('Parsed Path:', parsedPath);
// /* Output:
// {
//   root: '/',
//   dir: '/users/documents',
//   base: 'data.json',
//   ext: '.json',
//   name: 'data'
// }
// */

// // Get directory name
// const dirName = path.dirname('/users/documents/data.json');
// console.log('Directory Name:', dirName); // Output: '/users/documents'

// // Get base name
// const baseName = path.basename('/users/documents/data.json');
// console.log('Base Name:', baseName); // Output: 'data.json'

// // Get file extension
// const extName = path.extname('/users/documents/data.json');
// console.log('Extension Name:', extName); // Output: '.json'
