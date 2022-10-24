# Answers for devtools part 2
## Q1
Both values provided to the `calculateSum()` method were strings, leading to it doing a string concatenate operation.
## Q2
Convert both values to integers before applying computation.
```js
// part1.js
    function printSum() {
    debugger
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    document.getElementById("sum").innerHTML = "Sum: " + calculateSum(num1, num2);
    }

    function calculateSum(num1, num2) {
    let result = parseInt(num1) + parseInt(num2)
    return result
    }

    function init() {
    document.getElementById('printSum').addEventListener('click', printSum);
    }

    window.addEventListener('DOMContentLoaded', init);
```