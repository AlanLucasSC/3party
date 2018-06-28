export const redirect = (page, userType) => ({
    type: '[APP] REDIRECT',
    payload: {
        page: page,
        userType: userType
    }
})

export const reload = () => {
    location.reload()
    return {
        type: '[APP] RELOAD'
    }
}