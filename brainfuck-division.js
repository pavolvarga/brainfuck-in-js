 
//
// brainfuck program - read two numbers, divide them, print the result - quotient and remainder
// (code heavily inspired by: https://stackoverflow.com/questions/27905818/divmod-algorithm-in-brainfuck)
//
// , > , < [ - > - [ > + > > ] > [ + [ - < + > ] > + > > ] < < < < < ] > > > . < .
//
// brainfuck's javascript equivalent
//
function brainfuck_division(arg1, arg2) {

    //initialization of array (representing the memory) and pointer
    const arr = [0, 0, 0, 0, 0, 0];
    let i = 0;

    //brainfuck program begins

    arr[i] = arg1;                          //  ,
    i += 1;                                 //  >
    arr[i] = arg2;                          //  ,
    i -= 1;                                 //  <

    while (arr[i] !== 0) {                  //  [               // main loop begins - it stops when the Divident is 0               
                                                                                                                                                        // console.log('A  ', arr, i); // uncoment for seeing progress
        arr[i] -= 1;                        //     -            // decrement the Divident 
        i += 1;                             //     >
        arr[i] -= 1;                        //     -            // decrement the Divisor 
                                                                                                                                                        // console.log('B  ', arr, i); // uncoment for seeing progress
        while (arr[i] !== 0) {              //     [            // while the Divisor is not zero increment the next cell and move to the last but one cell

            i += 1;                         //        >
            arr[i] += 1;                    //        + 
            i += 1;                         //        >
            i += 1;                         //        >
        }                                   //     ] 
                                                                                                                                                        // console.log('C  ', arr, i); // uncoment for seeing progres
        i += 1;                             //     >            // if the Divisor is not zero then i == 5 and we will move to the last cell 
                                                                // if the Divisor is zero then i == 1 (the Divisor cell) and we will move the next cell which is 'Divisor - 1'
                                                                // !!! this is the most difficult part of this program !!!

        while (arr[i] !== 0) {              //     [            // while the 'Divisor - 1' is not zero
                                                                                                                                                        // console.log('C 0', arr, i); // uncoment for seeing progress
            arr[i] += 1;                    //        +         // increment, so that the cell value is equal to the Divisor
                                                                                                                                                        // console.log('C 1', arr, i); // uncoment for seeing progress
            while (arr[i] !== 0) {          //        [         // copy back the Divisor from the 3rd position to the 2nd

                arr[i] -= 1;                //           -
                i -= 1;                     //           <
                arr[i] += 1;                //           +
                i += 1;                     //           >
            }                               //        ]         // we are at the 3rd position
                                                                                                                                                        // console.log('C 2', arr, i); // uncoment for seeing progress
            i += 1;                         //        >         // we are the the 4th position
            arr[i] += 1;                    //        +         // increment cell representing the Quotient, each time the Divisor is zeroed we increment it
            i += 1;                         //        >         // move to the last but one cell
            i += 1;                         //        >         // move to the last cell
                                                                                                                                                        // console.log('C 3', arr, i); // uncoment for seeing progress
        }                                   //     ]
                                                                                                                                                        // console.log('D  ', arr, i); // uncoment for seeing progress
        i -= 1;                             //     <            // move back to the 1st position, it now contains the Divident decreased by the Divisor
        i -= 1;                             //     <
        i -= 1;                             //     <
        i -= 1;                             //     <
        i -= 1;                             //     <
                                                                                                                                                        // console.log('E  ', arr, i); // uncoment for seeing progress
    }                                       //  ]               // the 1st position is zero, whe have the Quotent and the 4th positon and the Remainder at the 3rd position
                                                                                                                                                        // console.log('F  ', arr, i); // uncoment for seeing progress
    i += 1;                                 //  >               // move to the 4th position
    i += 1;                                 //  >
    i += 1;                                 //  >

    console.log(arr[i]);                    //  .               // print quotient

    i -= 1;                                 //  <               // move back to the 3rd position

    console.log(arr[i]);                    //  .               // print remainder
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
if (parseInt(process.argv[3], 10) === 0) {
    console.log('Divisor must not be 0 - illegal operation');
    process.exit(1);
}

//run the program
brainfuck_division(parseInt(process.argv[2]), parseInt(process.argv[3]));

