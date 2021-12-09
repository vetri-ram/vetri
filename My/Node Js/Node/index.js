console.log('Hello Node');

const os = require('os');
const notes = require('./notes');
const _ = require('lodash');
const yargs = require('yargs');

console.log("Process: ",process.argv);

console.log("Yargs : ",yargs.argv);

var argv = yargs.argv;

var cmd = argv._[0];

if(cmd === 'list')
{
   notes.getNote();
}
else if(cmd === 'read')
{
    notes.readNote(argv.title);
}
else if(cmd === 'create')
{
    notes.createNote(argv.title,argv.body);
}
else if(cmd === 'remove')
{
    notes.removeNote(argv.title);
}else{
    console.log('command not found');
}



