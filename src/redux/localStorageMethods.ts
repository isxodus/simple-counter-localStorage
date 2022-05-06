export const loadState = (fieldName: string) => {
    try {
        const serializedState = localStorage.getItem(fieldName);
        if (serializedState === null) {
            return 0;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return 0;
    }
};


export const saveState = (state: any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {
        // ignore write errors
    }
};