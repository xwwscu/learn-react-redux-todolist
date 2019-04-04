import { createStore } from 'redux';
import MyReducer from './../reducers/MyReducer';

const myReducer = new MyReducer();
const myStore = createStore(myReducer.reduceAction);
export default myStore;