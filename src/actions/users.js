export const RECEIVE_USERS = 'RECEIVE_USERS'

export function receieveUsers(users){
    return {
        type: RECEIVE_USERS,
        users,
    }
}
