
let first_input = parseInt(prompt("What is your first number?"));
    let second_input = parseInt(prompt("What is your second number?"));
    let operator = prompt("What is your operator?")

    if (operator === "+") {
        let addition = first_input+second_input;
        alert(`Your answer ${name} is ${addition}`)
    } else if (operator === "-") {
        let subtraction = first_input-second_input;
        alert(`Your answer ${name} is ${subtraction}`)
    } else if (operator === "/") {
        let division = first_input/second_input;
        alert(`Your answer ${name} is ${division}`)
    } else if (operator === "%") {
        let remainder = first_input%second_input;
        alert(`Your answer ${name} is ${remainder}`)
    } else if (operator === "*") {
        let multiplication = first_input*second_input;
        alert(`Your answer ${name} is ${multiplication}`)
    } else {
        alert(msg);
    }

Calculator()