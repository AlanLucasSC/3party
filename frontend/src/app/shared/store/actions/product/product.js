export const changeName = event => {
    //console.log(event.target.value)
    return {
        type: '[PRODUCT] NAME_CHANGED',
        payload: event.target.value
    }
}

export const changeType = event => {
    //console.log(event.target.value)
    return {
        type: '[PRODUCT] TYPE_CHANGED',
        payload: event.target.value
    }
}

export const changePrice = event => {
    //console.log(event.target.value)
    return {
        type: '[PRODUCT] PRICE_CHANGED',
        payload: event.target.value
    }
}

export const changeAmount = event => {
    //console.log(event.target.value)
    return {
        type: '[PRODUCT] AMOUNT_CHANGED',
        payload: event.target.value
    }
}

export const changePeople = event => {
    //console.log(event.target.value)
    return {
        type: '[PRODUCT] PEOPLE_CHANGED',
        payload: event.target.value
    }
}

export const changeDesc = event => {
    console.log(event.target.value)
    return {
        type: '[PRODUCT] DESC_CHANGED',
        payload: event.target.value
    }
}

export const changeImage = image => {
    return {
        type: '[PRODUCT] IMAGE_CHANGED',
        payload: image
    }
}