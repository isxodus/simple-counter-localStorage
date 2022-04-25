import React, {ChangeEvent, useEffect, useState} from 'react';

type CounterSettingsPropsType = {
    maxValue: number
    startValue: number
    errorOnMaxValue: boolean
    errorOnStartValue: boolean
    setSettings: (maxValue: number, startValue: number) => void
    resetValue: (defaultValue: number) => void
    setCurrentMaxValue: (defaultValue: number) => void
    getSettingsFromLocalStorage: () => void
}

export function CounterSettings(props: CounterSettingsPropsType) {
    useEffect(() => {
        const localMaxValue = localStorage.getItem('maxValue')
        const localStartValue = localStorage.getItem('startValue')

        if (localMaxValue && localStartValue) {
            setLocalMaxValue(JSON.parse(localMaxValue))
            setLocalStartValue(JSON.parse(localStartValue))
            props.setSettings(JSON.parse(localMaxValue), JSON.parse(localStartValue))
            props.resetValue(JSON.parse(localStartValue))
            props.setCurrentMaxValue(JSON.parse(localMaxValue))
        }
        console.log('new values after useEffect:', localMaxValue, localStartValue)

    }, [])
    console.log('value in final component"', props.maxValue)

    const [localMaxValue, setLocalMaxValue] = useState(props.maxValue)
    console.log('in usestate', localMaxValue)
    const [localErrorOnMaxValue, setLocalErrorOnMaxValue] = useState(props.errorOnMaxValue)
    const localMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        //к сожалению, сделал в перезентационной компоненте =(

        setLocalMaxValue(Number(e.currentTarget.value))
        errorChecker(Number(e.currentTarget.value), localStartValue)
    }
    const [localStartValue, setLocalStartValue] = useState(props.startValue)
    const [localErrorOnStartValue, setLocalErrorOnStartValue] = useState(props.errorOnMaxValue)
    const localStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        //TODO ПОЧЕМУ???!!! возвращается старое значение
        //console.log('СНАЧАЛА я сетаю из хендлера', Number(e.currentTarget.value))
        setLocalStartValue(Number(e.currentTarget.value))
        //console.log("теперь я показываю локал стейт", localStartValue)
        //

        errorChecker(localMaxValue, Number(e.currentTarget.value))
    }
    const setSetBtnHandler = () => {

        props.setSettings(localMaxValue, localStartValue)
        console.log("сетаю из кнопки", localStartValue, localMaxValue)

        props.resetValue(localStartValue)
        console.log('сетаю макс значение ', localMaxValue)
        props.setCurrentMaxValue(localMaxValue)
    }

    function errorChecker(maxVal: number, startVal: number) {

        maxVal < 1 || maxVal <= startVal ? setLocalErrorOnMaxValue(true) : setLocalErrorOnMaxValue(false)
        startVal < 0 ? setLocalErrorOnStartValue(true) : setLocalErrorOnStartValue(false)

    }

    return <div>
        max:<input type="number" value={localMaxValue} onChange={localMaxValueHandler}/>
        start:<input type="number" value={localStartValue} onChange={localStartValueHandler}/>
        <button onClick={setSetBtnHandler} disabled={localErrorOnMaxValue || localErrorOnStartValue}>SET SETTINGS</button>
    </div>
}