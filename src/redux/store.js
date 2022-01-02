
import {createStore} from 'redux';
import {Reducer} from '../redux/reducers/Reducer';

const devtool=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(Reducer,devtool)
export default store 