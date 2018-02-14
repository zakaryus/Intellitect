import { ActionReducerMap } from '@ngrx/store';
import * as fromReducer from './app.reducers';

import * as Actions from './app.actions';
import * as Effects from './app.effects';
import * as Models from './app.models';
import * as Selectors from './app.selectors';

export {
    Actions,
    Effects,
    Models,
    Selectors
};

export interface AppState {
    core: Models.CoreState;
};

export const Reducers: ActionReducerMap<AppState> = {
    core: fromReducer.CoreReducer
};