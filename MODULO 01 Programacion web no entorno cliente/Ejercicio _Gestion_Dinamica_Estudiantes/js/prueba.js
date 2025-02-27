let string=["paco","pepe","luis"];
console.log(string);
string.push("juan");
console.log(string);
string.push("manolo");
console.log(string);
añadir("pepe");

function añadir(str){
    string.push(str);
    console.log(string);
}