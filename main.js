// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
function isAdmin(object){
    
       if (object.userRole === 'ADMIN'){
            return true
        }
        else{
            return false
    } 
}

function getEmail(object){
    let email = `${object.firstName.toLowerCase()}
    .${object.lastName.toLowerCase()}@codeimmersives.com`
    return email
}





// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};