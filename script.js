// *******************************
// START HERE IF YOU WANT AN EASIER STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Intructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name expect names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye Lisa
Good Bye James
Good Bye Jonh
Good Bye Jack
Hello Jennie
Hello Rose
Hello Jisoo
Hello Kyo
WARNING!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this assignment
WARNING!! WARNING!!
*/

(function () {

    var names = ["Yaakov", "Lisa", "James", "Jonh", "Jack", "Jennie", "Rose", "Jisoo", "Kyo"];
    for (var i =0; i < names.length; i++){
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j'){
            byeSpeaker(names[i]);
        }
        else {
            helloSpeaker(names[i]);
        }
    }
})
