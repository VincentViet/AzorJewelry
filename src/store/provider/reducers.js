import { GET_PRODUCER_INFOS } from "./actions";
import {List} from 'immutable'

const initialState = {
    infos: List()
};

export const providerReducer = (state = initialState, action) =>{
    switch (action.type) {
        case GET_PRODUCER_INFOS:
            return {
                ...state,
                infos: List(action.payload)
            };
        default:
            return state;
    }
};

