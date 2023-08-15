/* Mutate an Array Declared with const - Step 2 */

const s = [5, 7, 2];
function editInPlace() {
    s[0] = 2
    s[1] = 5
    s[2] = 7
    /* .sort((a, b) => b - a) */;
}
editInPlace();




/* Prevent Object Mutation - Step 3 */

function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // Only change code below this line

    Object.freeze(MATH_CONSTANTS);

    // Only change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
