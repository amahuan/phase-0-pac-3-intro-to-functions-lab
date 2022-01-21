function shout(string){
    return string.toUpperCase();
}
function whisper(string2){
    return string2.toLowerCase();
}

function logShout(string3){
    console.log(string3.toUpperCase());
}
function logWhisper(string4){
    console.log(string4.toLowerCase());
}
function sayHiToHeadphonedRoommate(string5) {
    if(string5===string5.toUpperCase()){return "YES INDEED!"}
    if(string5===string5.toLowerCase()){return "I can\'t hear you!"}
    if(string5==="Let\'s have dinner together!"){return "I would love to!";}
}
console.log(shout("hello"));
console.log(whisper("hello"));
logShout("hello");
logWhisper("hello");
console.log(sayHiToHeadphonedRoommate("HELLO"));