//STATE
import {ActualCounterActionType, ActualCounterType} from "./reduxStore";

let initialReducerState: ActualCounterType = {
    currentValue: 0,
    currentMaxValue: 1,
    currentValueErrorState: false
}

//REDUCER
export const actualCounterReducer = (reducerState: ActualCounterType = initialReducerState, action: ActualCounterActionType): ActualCounterType => {
    switch (action.type) {
        case 'INCREASE':
            let currentValueErrorState = (reducerState.currentValue + 1) === reducerState.currentMaxValue
            return {
                ...reducerState, currentValue: reducerState.currentValue + 1, currentValueErrorState: currentValueErrorState
            }
        case 'RESET':
            return {
                ...reducerState
                , currentValue: action.defaultValue ? action.defaultValue : 0
                , currentValueErrorState: false
            }
        case "SET-CURRENT-MAX-VALUE":
            return {
                ...reducerState, currentMaxValue: action.maxValue ? action.maxValue : 0
            }
        default:
            return reducerState
    }
}

//ACTION CREATORS
export const increaseValue = (): ActualCounterActionType => ({type: 'INCREASE'})
export const resetValue = (defaultValue: number): ActualCounterActionType => ({type: 'RESET', defaultValue: defaultValue})
export const setCurrentMaxValue = (maxValue: number): ActualCounterActionType => ({type: "SET-CURRENT-MAX-VALUE", maxValue: maxValue})