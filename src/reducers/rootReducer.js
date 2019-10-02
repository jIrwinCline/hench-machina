import React from 'react'

const initState = {
    currentStep: 1,
    checkedItems: new Map(),
    handsOn: false,
    cost: "med",
    addInfo: "",
}

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case "_NEXT":
            return {
                // currentStep: state.currentStep >= 2? 3: state.currentStep + 1
                currentStep: state.currentStep + 1
            };
        case "_PREV":
            return {
                currentStep: state.currentStep >= 2? 3: state.currentStep - 1
            }
        default:
            return state;
    }
}

export default rootReducer