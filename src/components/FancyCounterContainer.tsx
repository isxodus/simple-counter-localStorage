import {connect} from "react-redux";
import React from "react";
import {getSettingsFromLocalStorage, setSettings} from "../redux/counterSettingsReducer";
import {ActualCounterActionType, CounterSettingsActionType, StateType} from "../redux/reduxStore";
import {FancyCounter} from "./FancyCounter";
import {increaseValue, resetValue, setCurrentMaxValue} from "../redux/actualCounterReducer";

// CLASS COMPONENT TYPE
type FancyCounterContainerProps = {
    maxValue: number
    startValue: number
    errorOnMaxValue: boolean
    errorOnStartValue: boolean
    setSettings: (maxValue: number, startValue: number) => void
    getSettingsFromLocalStorage: () => void

    currentValue: number
    currentValueErrorState: boolean
    increaseValue: () => void
    resetValue: (defaultValue: number) => void
    setCurrentMaxValue: (defaultValue: number) => void
}

// CLASS COMPONENT
export class FancyCounterAPIContainer extends React.Component<FancyCounterContainerProps> {
    componentDidMount() {
        // this.props.getSettingsFromLocalStorage()
        // console.log('did mount ', this.props.maxValue)
        // const localMaxValue = localStorage.getItem('maxValue')
        // const localStartValue = localStorage.getItem('startValue')
        // debugger
        // if (localMaxValue && localStartValue) {
        //     this.props.setSettings(JSON.parse(localMaxValue), JSON.parse(localStartValue))
        // }
    }

    render() {
        return <FancyCounter maxValue={this.props.maxValue} startValue={this.props.startValue} setSettings={this.props.setSettings}
                             errorOnStartValue={this.props.errorOnStartValue} errorOnMaxValue={this.props.errorOnMaxValue}
                             currentValue={this.props.currentValue} increaseValue={this.props.increaseValue}
                             resetValue={this.props.resetValue} setCurrentMaxValue={this.props.setCurrentMaxValue}
                             currentValueErrorState={this.props.currentValueErrorState}
                             getSettingsFromLocalStorage={this.props.getSettingsFromLocalStorage}/>
    }
}


// STATE CONNECT
let mapStateToProps = (state: StateType) => {
    return {
        maxValue: state.counterSettingsReducer.maxValue,
        startValue: state.counterSettingsReducer.startValue,
        errorOnMaxValue: state.counterSettingsReducer.errorOnMaxValue,
        errorOnStartValue: state.counterSettingsReducer.errorOnStartValue,
        currentValue: state.actualCounterReducer.currentValue,
        currentValueErrorState: state.actualCounterReducer.currentValueErrorState
    }
}
// DISPATCH CONNECT
let mapDispatchToProps = (dispatch: (action: CounterSettingsActionType | ActualCounterActionType) => void) => {
    return {
        setSettings: (maxValue: number, startValue: number) => {
            dispatch(setSettings(maxValue, startValue))
        },
        increaseValue: () => {
            dispatch(increaseValue())
        },
        resetValue: (defaultValue: number) => dispatch(resetValue(defaultValue)),
        setCurrentMaxValue: (defaultValue: number) => dispatch(setCurrentMaxValue(defaultValue)),
        getSettingsFromLocalStorage: () => dispatch(getSettingsFromLocalStorage())
    }
}
//let mapDispatchToProps = {setSettings, increaseValue, resetValue}

export const FancyCounterContainer = connect(mapStateToProps, mapDispatchToProps)(FancyCounterAPIContainer)