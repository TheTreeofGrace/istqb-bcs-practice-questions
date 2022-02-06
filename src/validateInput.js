export const validateInput = (input, expected) => {
    if(expected.contains(input.toString().toLowerCase())) {
        console.log(`You have selected ${input}`);
        return 1;
    } else {
        console.log(`The input ${input} is not a valid option. Please try again.`);
        return 0;
    }
};
