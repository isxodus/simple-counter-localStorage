import React, {useState} from 'react';
import {CounterSettings} from "./CounterSettings/CounterSettings";
import {ActualCounter} from "./ActualCounter/ActualCounter";

type FancyCounterPropsType = {
    maxValue: number
    startValue: number
    errorOnMaxValue: boolean
    errorOnStartValue: boolean
    setSettings: (maxValue: number, startValue: number) => void
    setCurrentMaxValue: (defaultValue: number) => void
    getSettingsFromLocalStorage: () => void

    currentValue: number
    currentValueErrorState: boolean
    increaseValue: () => void
    resetValue: (defaultValue: number) => void
}

export function FancyCounter(props: FancyCounterPropsType) {
    type modeType = 'both' | 'separate'
    const [mode, setMode] = useState<modeType>('both')
    const changeMode = () => {
        setMode(mode === 'both' ? 'separate' : 'both')

    }


    return <div>
        {mode !== 'separate' ? <CounterSettings maxValue={props.maxValue} startValue={props.startValue} setSettings={props.setSettings}
                                                resetValue={props.resetValue}
                                                errorOnMaxValue={props.errorOnMaxValue} errorOnStartValue={props.errorOnStartValue}
                                                setCurrentMaxValue={props.setCurrentMaxValue}
                                                getSettingsFromLocalStorage={props.getSettingsFromLocalStorage}/> : <></>}


        <ActualCounter currentValue={props.currentValue} increaseValue={props.increaseValue} resetValue={props.resetValue}
                       startValue={props.startValue} currentValueErrorState={props.currentValueErrorState}
                       changeMode={changeMode}/>

    </div>
}