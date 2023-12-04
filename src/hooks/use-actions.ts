import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

// we combined all the dispatch actions into one so we can easily call them without the long useDispatch
export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    return bindActionCreators(actionCreators, dispatch);
  }, [dispatch]);
};
