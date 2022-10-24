# Answers for Part 2
## Q1:
The Code will print `3`, because that is the last value assigned to `i`, and since we declared it using `var`, the variable is available throughout the function.
## Q2:
The code will print `150`, that is the last value the variable holds after execution of the loop finishes. Declared with `var`, thus available throughout the function.
## Q3: 
Code prints `150`, because the variable is defined in the same scope as the print function and is assignable (thus not throwing an error beforehand.)
## Q4:
The function returns `[ 50, 100, 150 ]` because javascript always executes something, in order to not crash, according to the type conversion tables. For an array, it prints out the entire array object like seen.
## Q5:
Code returns an error, because the variable `i` is only declared within the scope of the for loop, and thus not outside of it where the console function tries to print it.
## Q6:
See Q5, only this time with variable `discountedPrice` not existing outside the for loop.
## Q7:
Code prints `150`, because the variable is defined in the same scope as the print function and is assignable, thus not throwing an error beforehand.
## Q8:
See Q4. With the `return` statement, the value of the variable `discounted` becomes available outside the function.
## Q9
See Q5.
## Q10:
Code prints `3`, since the variable is available in the current scope and has been asigned the value `3` at the top of the function.
## Q11:
See Q4. Pushing objects into an array doesn't count towards the variable beeing unchangable according to the `const` keyword, so the code executes and returns the expected value.
## Q12:
```js
    //A
    student.name;
    
    //B
    student.['Grad Year'];

    //C
    student.greeting();

    //D
    student['Favorite Teacher'].name;

    //E
    student.courseLoad[0];
```
## Q13
### A
Returns `32`, as `'3'` is a string and the `+`-operator works on strings, thus concatenating the two values in another string.
### B
Returns `1`, as `-` does not work on strings, thus converting the `'3'` value to an integer before application of the operator.
### C
Returns `0`, as null is converted to a `0`-value for the arithmetic operation which is assumed because `3` is an integer value.
### D
Returns `3null` for the same reason as in A.
### E
Returns `4`, as true is converted to its integer value of `1` prior to operation.
### F
Returns `0`, as both operators are converted to their arithmetic values prior to operation, which for both results in the value of `0`.
### G
Returns `3undefined` for the same reason as in A.
### H
Returns `NaN`, as the declared arithmetic operation cannot be performed with the given second value `undefined`.

## Q14
### A
Returns `true`, as `'2'` is converted to its integer value prior to comparison.
### B
Returns `false`, as the comparison is performed for two strings, an because the value at position 0 is greader for `'2'` than it is for `'12'`, the statement is false.
### C
Returns `true`, all values converted to integer before comparison.
### D
Because of the strict equality operator `===`, no type conversion is performed, and thus the two objects of `int` and `string` to not equal one another.
### E
Returns `false`, because the integer value for `true` is 1, which doesn't equal `2`.
### F
The `Boolean()` constructor returns `true` when given *any* object as a initial value, thus this expression evaluates to `true`.
## Q15
The `==` performs an comparison operation, after it does its best to find conversions for its parameters that allow it to compare them in equal types. `===` just performs an equality test without converting first, thus resulting in `false` when given objects of different types.
## Q16
See part2-questions16.js.
## Q17
The function `modifyArray()` executes the callback function on every member of the input array, and stores the returned value in a new array, which is returned after execution. \
Since the doSomething function just doubles the given input value and returns the result, we obtain an array containing the doubled values of the input array.
## Q18
See part2-question18.js.
## Q19
The Code outputs
```js
    1
    4
    3
    2
```
because `1` and `4` are written immeadiatly, `3` arrives with a small delay and `2` is printed with one second delay.