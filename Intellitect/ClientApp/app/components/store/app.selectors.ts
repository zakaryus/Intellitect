import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoreState } from "./app.models";

export const getCoreState = createFeatureSelector<CoreState>('core');

export const getTechnologiesUsedDisplayed = createSelector(getCoreState, (state: CoreState) =>
    state.displayDotnetCore ||
    state.displayWebApi2 ||
    state.displayAngular5 ||
    state.displayAngularMaterial ||
    state.displayNgxCharts ||
    state.displayNgrx);