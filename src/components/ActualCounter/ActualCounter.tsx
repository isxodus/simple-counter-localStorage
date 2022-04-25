import React, {MouseEvent} from 'react';

type CounterSettingsPropsType = {
    currentValue: number
    currentValueErrorState: boolean
    increaseValue: () => void
    startValue: number
    resetValue: (defaultValue: number) => void
    changeMode: () => void
}

export function ActualCounter(props: CounterSettingsPropsType) {
    const localCurrentValueHandler = (e: MouseEvent<HTMLButtonElement>) => {
        props.increaseValue()
    }
    const resetCurrentValueHandler = (e: MouseEvent<HTMLButtonElement>) => {
        props.resetValue(props.startValue)
    }
    // const [localStartValue, setLocalStartValue] = useState(props.startValue)
    // const localStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => setLocalStartValue(Number(e.currentTarget.value))
    // const setSetBtnHandler = () => {
    //     props.setSettings(localMaxValue, localStartValue)
    // }

    return <div>
        <span>{props.currentValue}</span>

        <button onClick={localCurrentValueHandler} disabled={props.currentValueErrorState}>INCREASE</button>
        <button onClick={resetCurrentValueHandler}>RESET</button>
        <button onClick={props.changeMode}>MODE</button>
    </div>
}