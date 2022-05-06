//STATE
import {CounterSettingsActionType, CounterSettingsType} from "./reduxStore";

let initialReducerState: CounterSettingsType = {
    maxValue: 1,
    startValue: 0,
    errorOnMaxValue: false,
    errorOnStartValue: false
}

//REDUCER
export const counterSettingsReducer = (reducerState: CounterSettingsType = initialReducerState, action: CounterSettingsActionType): CounterSettingsType => {

    switch (action.type) {
        case 'SET-SETTINGS':
            // localStorage.setItem('maxValue', JSON.stringify(action.newMaxValue))
            // localStorage.setItem('startValue', JSON.stringify(action.newStartValue))
            return {
                ...reducerState
                , maxValue: action.newMaxValue ? action.newMaxValue : reducerState.maxValue
                , startValue: action.newStartValue ? action.newStartValue : reducerState.startValue
            }
        case 'GET-SETTINGS':
            // const localMaxValue = localStorage.getItem('maxValue')
            // const localStartValue = localStorage.getItem('startValue')
            // console.log('reducer get settings', localMaxValue, localStartValue)

            return {
                ...reducerState
                // , maxValue: localMaxValue ? JSON.parse(localMaxValue) : reducerState.maxValue
                // , startValue: localStartValue ? JSON.parse(localStartValue) : reducerState.startValue
            }
        default:
            return reducerState
    }
}

//ACTION CREATORS
export const setSettings = (maxValue: number, startValue: number): CounterSettingsActionType => ({
    type: 'SET-SETTINGS',
    newMaxValue: maxValue,
    newStartValue: startValue
})
export const getSettingsFromLocalStorage = (): CounterSettingsActionType => ({
    type: 'GET-SETTINGS',
})