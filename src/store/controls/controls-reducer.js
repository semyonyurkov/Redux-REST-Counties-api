import { SET_SEARCH } from './controls-actions';
import { SET_REGION } from './controls-actions';
import { CLEAR_CONTROLS } from './controls-actions';

const initialState = {
    search: '',
    region: '',
};

export const controlsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_REGION:
            return {
                ...state,
                region: payload,
            };
        case SET_SEARCH:
            return {
                ...state,
                search: payload,
            };
        case CLEAR_CONTROLS:
            return initialState;
        default:
            return state;
    }
};
