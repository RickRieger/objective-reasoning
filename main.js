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
    let email = ''
    email += object.firstName.toLowerCase()
    email +='.'
    email += object.lastName.toLowerCase()
    email += '@codeimmersives.com'
    return email
}

function getPlaylistLength(playList){
    let playListLength = 0
    
    playListLength += playList.songs.length
    
    return playListLength
}

function getHardestHomework(arrayOfHomeworkAssignments){
        if (arrayOfHomeworkAssignments[0] === undefined){
            return ''
        }
        let nameOfAssignment = ''
        let minScore = arrayOfHomeworkAssignments[0].averageScore
        for (const assignment of arrayOfHomeworkAssignments){
      
          if(assignment.averageScore <= minScore){
            nameOfAssignment = assignment.name
            minScore = assignment.averageScore
          }
        }
        return nameOfAssignment
      }



  
  const createPhonebook = (keys, values) => {   
    let phoneBook = {};

    for (let i = 0; i < keys.length; i++){       
        phoneBook[keys[i]] = values[i];
    }
    return phoneBook
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