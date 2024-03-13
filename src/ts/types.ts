import { Action, Dispatch } from 'redux';
import { InitialValuesType } from './interfaces';
import { NavigateFunction } from 'react-router-dom';

export type SignIn = (
  dispatch: Dispatch<Action>,
  userData: { data: InitialValuesType; navigate: NavigateFunction }
) => Promise<void>;

export type AuthGoogle = (
  dispatch: Dispatch<Action>,
  userData: { navigate: NavigateFunction }
) => Promise<void>;
