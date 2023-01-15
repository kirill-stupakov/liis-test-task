import { useDispatch } from 'react-redux';
import store from 'redux/store';

type DispatchFunc = () => typeof store.dispatch;

const useAppDispatch: DispatchFunc = useDispatch;

export default useAppDispatch;
