
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_USER_COUNT = "SET-USER-COUNT"


let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 3,
    currentPage: 3,

}


function findUsersReducer(state = initialState, action) {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user

                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user
                })
            }
        case SET_USERS:
            return { ...state, users: action.users }

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }

        case SET_USER_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount }

        default:
            return state;
    }

}


export function followAC(userId) {

    return {
        type: FOLLOW,
        userId,
    }
}

export function unfollowAC(userId) {
    return {
        type: UNFOLLOW,
        userId,

    }
}

export function setUsersAC(users) {

    return {
        type: SET_USERS,
        users,

    }
}

export function setCurrentPageAC(currentPage) {
   
    return {
        type: SET_CURRENT_PAGE,
        currentPage,
    }
}

export function setTotalUsersCountAC(totalUsersCount) {
    return {
        type: SET_USER_COUNT,
        totalUsersCount,
    }
}


export default findUsersReducer;