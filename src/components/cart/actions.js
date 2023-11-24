export const action = { type: "", payLoad: {} };

export const incrementCount = ({ title, category }) => ({
    type: "INCREMENT_COUNT",
    payLoad: { title, category },
});

export const decrementCount = ({ title, category }) => ({
    type: "DECREMENT_COUNT",
    payLoad: { title, category },
});