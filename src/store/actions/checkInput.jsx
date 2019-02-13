import { CHECK_INPUT } from "./types";

const checkInput = () => {
    return {
        type: CHECK_INPUT,
        payload: inputedValue,
    }
};

export default checkInput;
