# brainfuck-in-js

Collection of brainfuck programs in javascript.<br/>
[Brainfuck](https://en.wikipedia.org/wiki/Brainfuck) is an  esoteric programming language which has only 8 commands.
Subset of javascript was used to simulate the brainfuck commands.

## Brainfuck in javascript

Brainfuck's memory is represented by an array initialized to zeros.
Brainfuck's data pointer is represented by a variable representing an index into the array.

```javascript
const arr = [0, 0, 0, 0, ...];
let i = 0;
```

| Brainfuck command   | Meaning                                                               | Javascript equivalent         |
| -----------------   | --------                                                              | ------------------------------|
|       `,`           | read data from input, store it at the data pointer                    | `arr[i] = arg;`               |
|       `.`           | print data to output, at the data pointer                             | `console.log(arr[i]);`        |
|       `>`           | increment the data pointer (to point to the next cell to the right)   | `i += 1;`                     |
|       `<`           | decrement the data pointer (to point to previous cell to the left)    | `i -= 1;`                     |
|       `+`           | increment by one data at the data pointer                             | `arr[i] += 1;`                |
|       `-`           | decrement by one data at the data pointer                             | `arr[i] -= 1;`                |
|       `[`           | if data at the data pointer is 0, then jump after ]                   | `while (arr[i] != 0) {`       |
|       `]`           | if data at the data pointer is not 0, then jump back after [          | `}`                           |

<br/>

Each program accepts command line arguments (which represents inputs to the brainfuck). These arguments are validated using javascript.
If they are valid then these arguments are passed to the brainfuck program / function. If for example a program requires numbers, then arguments are
parsed by javascript before being passed to the brainfuck program / function. No conversion from ASCII to characters is done.

## How to run

### Using node.js

Use **node.js** to run a program (no dependencies). <br/>
Run a program first without arguments, to see what arguments it requires. <br/>
Then pass appropriate arguments, like:

```shell
node brainfuck-addition.js 5 5
```
### Using browser

From each program program you can copy the brainfuck function (each starts with *'brainfuck_'*) into a web browser's console.
Then call the function with correct arguments (no validation is done in the brainfuck function).

### Using docker

Pull the latest image from the docker hub

`docker pull pavolvarga1024/brainfuck-in-js`

Run the container and connect to it

`docker container run -it pavolvarga1024/brainfuck-in-js`

Use node for running any program, for example: 

`node brainfuck-addition.js 5 6`
