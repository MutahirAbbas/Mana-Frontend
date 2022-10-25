import { ADD_ITEM, REMOVE_ITEM } from "./constant";

const initialState = {
  enqData: [],
};

export default function enqItems(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      console.log(" REDUCER DATA", action);
      return [
        ...state,
        {enqData: action.data}
      ]
      case REMOVE_ITEM:
        
        state.pop()
        return [
          ...state
        ];
    default:
      return state;
  }
}
