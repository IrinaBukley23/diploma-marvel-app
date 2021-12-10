export const FETCHING_CHARS = `FETCHING_CHARS`;
export const FETCHED_CHARS = `FETCHED_CHARS`;

const defaultState = {
    chars: [],
    loading: true
}

export const charReducer = (state = defaultState, {type, payload}) => {
    switch (type) {
        case FETCHING_CHARS:
            return {
                ...state,
                chars: [],
                loading: true
            };
        case FETCHED_CHARS:
            return {
                ...state,
                chars: [...payload],
                loading: false
            }
        default:
            return state;
    }
}