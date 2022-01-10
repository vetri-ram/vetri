var createNote = (title,body) => {
    console.log("Note Created ",title,body);
}

var getNote = () => {
    console.log("Get All Notes");
}

var readNote = (title) => {
    console.log("Reading Note ",title);
}

var removeNote = (title) => {
    console.log("Remove Note ",title);
}
module.exports = {
    createNote,
    getNote,
    readNote,
    removeNote
}