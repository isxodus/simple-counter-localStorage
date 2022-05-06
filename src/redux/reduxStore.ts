import {combineReducers, createStore} from "redux";
import {counterSettingsReducer} from "./counterSettingsReducer";
import {actualCounterReducer} from "./actualCounterReducer";
import {loadState, saveState} from "./localStorageMethods";

let reducers = combineReducers({
    counterSettingsReducer: counterSettingsReducer,
    actualCounterReducer: actualCounterReducer
})
const persistedState = loadState('state');
export let store = createStore(reducers, persistedState) //STORE TYPE
store.subscribe(() => saveState(store.getState()));

//STATE
export type StateType = {
    counterSettingsReducer: CounterSettingsType
    actualCounterReducer: ActualCounterType
}

//COUNTER SETTINGS
export type CounterSettingsType = {
    maxValue: number
    startValue: number
    errorOnMaxValue: boolean
    errorOnStartValue: boolean
}
export type CounterSettingsActionTypeType = 'SET-SETTINGS' | 'GET-SETTINGS'
export type CounterSettingsActionType = {
    type: CounterSettingsActionTypeType
    newMaxValue?: number
    newStartValue?: number
}

//ACTUAL COUNTER
export type ActualCounterType = {
    currentValue: number
    currentMaxValue: number
    currentValueErrorState: boolean
}
export type ActualCounterActionTypeType = 'INCREASE' | 'RESET' | "SET-CURRENT-MAX-VALUE"
export type ActualCounterActionType = {
    type: ActualCounterActionTypeType
    defaultValue?: number
    maxValue?: number
}


