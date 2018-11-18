
//
// brainfuck program - read two numbers, substract the second number from the first one, print the result
//
// ,>, [-<->] <.
//
// brainfuck's javascript equivalent
//
function brainfuck_substraction(arg1, arg2) {

    //initialization of array (representing the memory) and pointer
    const arr = [0, 0];
    let i = 0;

    //brainfuck program begins

    arr[i] = arg1;           //  ,       // read the first number
    i += 1;                  //  >
    arr[i] = arg2;           //  ,       // read the second number

    while (arr[i] != 0) {    //  [       // dec the second number, move to the first position, dec the first number
        arr[i] -= 1;         //    -
        i -= 1;              //    <
        arr[i] -= 1;         //    -
        i +=1;               //    >
    }                        //  ]

    i -= 1;                  //  <       // move the first position, print the result
    console.log(arr[i]);     //  .
}

//validate inputs - program must be passed 2 integer numbers - otherwise exit
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

//run the program
brainfuck_substraction(parseInt(process.argv[2]), parseInt(process.argv[3]));
