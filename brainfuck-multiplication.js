
//
// program must be passed 2 integer numbers - otherwise exit
//
if (process.argv.length != 4) {
    console.log('Pass 2 arguments, both must be integers');
    process.exit(1);
}
if (!Number.isInteger(parseInt(process.argv[2], 10))) {
    console.log('Pass 2 arguments, both must be integers, the first was not an integer');
    process.exit(1);
}
if (!Number.isInteger(parseInt(process.argv[3], 10))) {
    console.log('Pass 2 arguments, both must be integers, the second was not an integer');
    process.exit(1);
}

//
//initialization of array (representing the memory) and pointer
//
const arr = [0, 0, 0, 0];
let i = 0;

//
//branfuck program - read two numbers, multiply them, print the result
//
// ,>,< [-> [->+>+<<] > [-<+>] << ] >>>.
//

//
//brainfuck's javascript equivalent
//
function brainfuck_multiplication(arg1, arg2) {

    arr[i] = arg1;            //     ,       // read the first number
    i += 1;                   //     >
    arr[i] = arg2;            //     ,       // read the second number 
    i -= 1;                   //     <

    while (arr[i] != 0) {     //     [       // dec the 1st number and move to the 2nd position
        arr[i] -= 1;          //       -
        i += 1;               //       >

        while (arr[i] != 0) { //       [     // dec the 2nd number, copy its value to 3rd position, add its value to the 4th position
            arr[i] -= 1;      //         - 
            i += 1;           //         >
            arr[i] += 1;      //         +
            i += 1;           //         >
            arr[i] += 1;      //         +
            i -= 1;           //         <   
            i -= 1;           //         <
        }                     //       ] 

        i += 1;               //       >     // move the the 3rd position

        while (arr[i] != 0) { //       [     // copy number from the 3rd positon back to the 2nd position (it was decremented to 0 in the previous loop)
            arr[i] -= 1;      //         -
            i -= 1;           //         <
            arr[i] += 1;      //         +
            i += 1;           //         >
        }                     //       ]  

        i -= 1;               //       <     // move back to the 1st position 
        i -= 1;               //       <
    }                         //     ]

    i += 1;                   //     >       // move to the 4th position and print result
    i += 1;                   //     >
    i += 1;                   //     >
    console.log(arr[i]);      //     .
}

//
//run the program
//
brainfuck_multiplication(parseInt(process.argv[2]), parseInt(process.argv[3]));
