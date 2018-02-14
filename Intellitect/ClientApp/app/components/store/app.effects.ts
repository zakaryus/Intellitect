import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Effect, Actions } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';
import { from } from 'rxjs/observable/from';

import * as fromActions from './app.actions';

@Injectable()
export class CoreEffects {
    constructor(private actions$: Actions,
                private http: HttpClient) { }

    @Effect()
    loadSoftwareEngineer$ = this.actions$.ofType(fromActions.LOAD_SOFTWARE_ENGINEER).pipe(
        switchMap(() => {
            return this.http.get('api/data/softwareengineer').pipe(
                map((text: string) => new fromActions.LoadSoftwareEngineerSuccess(text)),
                catchError((error: HttpErrorResponse) => from([
                    new fromActions.Failure(error.message),
                    new fromActions.LoadSoftwareEngineerFailure()
                ]))
            );
        })
    );

    @Effect()
    loadDotnetCore$ = this.actions$.ofType(fromActions.LOAD_DOTNET_CORE).pipe(
        switchMap(() => {
            return this.http.get('api/data/dotnetcore').pipe(
                map((text: string) => new fromActions.LoadDotnetCoreSuccess(text)),
                catchError((error: HttpErrorResponse) => from([
                    new fromActions.Failure(error.message),
                    new fromActions.LoadDotnetCoreFailure()
                ]))
            );
        })
    );

    @Effect()
    loadWebApi2$ = this.actions$.ofType(fromActions.LOAD_WEB_API_2).pipe(
        switchMap(() => {
            return this.http.get('api/data/webapi2').pipe(
                map((text: string) => new fromActions.LoadWebApi2Success(text)),
                catchError((error: HttpErrorResponse) => from([
                    new fromActions.Failure(error.message),
                    new fromActions.LoadWebApi2Failure()
                ]))
            );
        })
    );

    @Effect()
    loadAngular5$ = this.actions$.ofType(fromActions.LOAD_ANGULAR_5).pipe(
        switchMap(() => {
            return this.http.get('api/data/angular5').pipe(
                map((text: string) => new fromActions.LoadAngular5Success(text)),
                catchError((error: HttpErrorResponse) => from([
                    new fromActions.Failure(error.message),
                    new fromActions.LoadAngular5Failure()
                ]))
            );
        })
    );

    @Effect()
    loadAngularMaterial$ = this.actions$.ofType(fromActions.LOAD_ANGULAR_MATERIAL).pipe(
        switchMap(() => {
            return this.http.get('api/data/angularmaterial').pipe(
                map((text: string) => new fromActions.LoadAngularMaterialSuccess(text)),
                catchError((error: HttpErrorResponse) => from([
                    new fromActions.Failure(error.message),
                    new fromActions.LoadAngularMaterialFailure()
                ]))
            );
        })
    );

    @Effect()
    loadNgxCharts$ = this.actions$.ofType(fromActions.LOAD_NGX_CHARTS).pipe(
        switchMap(() => {
            return this.http.get('api/data/ngxcharts').pipe(
                map((text: string) => new fromActions.LoadNgxChartsSuccess(text)),
                catchError((error: HttpErrorResponse) => from([
                    new fromActions.Failure(error.message),
                    new fromActions.LoadNgxChartsFailure()
                ]))
            );
        })
    );

    @Effect()
    loadNgrx$ = this.actions$.ofType(fromActions.LOAD_NGRX).pipe(
        switchMap(() => {
            return this.http.get('api/data/ngrx').pipe(
                map((text: string) => new fromActions.LoadNgrxSuccess(text)),
                catchError((error: HttpErrorResponse) => from([
                    new fromActions.Failure(error.message),
                    new fromActions.LoadNgrxFailure()
                ]))
            );
        })
    );
}