import { combineReducers } from "redux";
import { getListReducer,addListReducer,deleteListReducer,editListReducer } from "./curdReducer";
const rootReducer = combineReducers({
    getList:getListReducer,
    addList:addListReducer,
    deleteList:deleteListReducer,
    editList:editListReducer

  });
  export default rootReducer;