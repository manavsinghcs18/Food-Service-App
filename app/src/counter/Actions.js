import { INCREMENT,DECREMENT } from "./ActionTypes";

export const increment = () => ({
    type: INCREMENT,
});

export const decrement = () =>  ({
    type: DECREMENT,
});