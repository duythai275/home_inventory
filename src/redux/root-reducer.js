import { combineReducers } from 'redux';

import categoryReducer from './category/category.reducer';
import usersReducer from './user/user.reducer';
import itemsReducer from './item/item.reducer';

export default combineReducers({
    categoryStore: categoryReducer,
    userStore: usersReducer,
    itemStore: itemsReducer
});