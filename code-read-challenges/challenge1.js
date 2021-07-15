// What does this do?

let x = [1, 2, 3];

const things = {
    "1": (a, b) => {x[a] += b},

    "2": (a, b) => {x[a] -= b},

    "3": (a, b) => {x[a] = b}
};

things[1](0, 2);

console.log(x);

// What would be logged?