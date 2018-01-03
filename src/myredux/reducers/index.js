import { combineReducers } from 'redux';
import ProgressReducer from './ProgressReducer';
import SleepReducer from './SleepReducer';
import HoureSleepReducer from './HoureSleepReducer';
import StateFloraReducer from "./StateFloraReducer";
import EatingReducer from "./EatingReducer";
import IllReducer from './IllReducer'
import HangryReducer from './HangryReducer';
import DidEatReducer from './DidEatReducer';
import DirtyTeethReducer from "./DirtyTeethReducer";
export default combineReducers({
  progress: ProgressReducer,
    asleep: SleepReducer,
    hoursSleep:HoureSleepReducer,
    stateFlora:StateFloraReducer,
    foodate:EatingReducer,
    ill:IllReducer,
    hangry:HangryReducer,
    dideat:DidEatReducer,
    dirty:DirtyTeethReducer
});