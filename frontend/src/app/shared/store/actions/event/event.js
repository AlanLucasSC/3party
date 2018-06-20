export const changeName = event => {
    //console.log(event.target.value)
    return {
        type: '[EVENT] NAME_CHANGED',
        payload: event.target.value
    }
}

export const changeDate = event => {
    //console.log(event.target.value)
    return {
        type: '[EVENT] DATE_CHANGED',
        payload: event.target.value
    }
}

export const changeSelected = ( id, name ) => {
    //console.log(event.target.value)
    return {
        type: '[EVENT] SELECTED_EVENT_CHANGED',
        payload: {
            selectedID: id,
            selectedName: name
        }
    }
}