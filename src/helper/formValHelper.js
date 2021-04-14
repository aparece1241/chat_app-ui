export default {
    // check the length
    checkLength(minLenght, input) {
        return {
            valid: input.length >= minLenght,
            message: (input.length >= minLenght)?'':` should have aleast ${minLenght} characters`
        }        
    },

    // check empty
    checkEmpty(input) {
        return input.length > 0;
    }
}
