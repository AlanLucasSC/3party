export const redirect = (page, userType) => ({
    type: '[APP] REDIRECT',
    payload: {
        page: page,
        userType: userType
    }
})