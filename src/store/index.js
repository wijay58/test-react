import {createStore} from 'redux';
import reducer from '../reducers';

const initialState = {name:"Wijay", colorCodes: ['#00DBFF','#FF4200','#FBFF00','#00FF13','#0049FF','#000000'],color:'#000000'};
const store = createStore(reducer,initialState);

export default store;