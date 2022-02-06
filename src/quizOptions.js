import { validateInput } from "./validateInput";

const avaliableQuiz = ['Example'];

export const logQuizOptions = () => {
    console.log('Options avaliable are...');
    for (const quiz in avaliableQuiz) {
        console.log(avaliableQuiz[quiz]);
    }

    return avaliableQuiz;
};

export const handleOptions = (input) => {
    return validateInput(input, avaliableQuiz);
};
