import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { undo } from "ngrx-undo";
import * as fromStore from '../store';
import { Observable } from 'rxjs/Observable';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    coreState$: Observable<fromStore.Models.CoreState>;
    techUsedState$: Observable<boolean>;

    //Software Engineer
    displaySoftwareEngineer = new fromStore.Actions.DisplaySoftwareEngineer();
    loadSoftwareEngineer = new fromStore.Actions.LoadSoftwareEngineer();

    //Dotnet Core
    displayDotnetCore = new fromStore.Actions.DisplayDotnetCore();
    loadDotnetCore = new fromStore.Actions.LoadDotnetCore();

    //Web Api 2
    displayWebApi2 = new fromStore.Actions.DisplayWebApi2();
    loadWebApi2 = new fromStore.Actions.LoadWebApi2();

    //Angular 5
    displayAngular5 = new fromStore.Actions.DisplayAngular5();
    loadAngular5 = new fromStore.Actions.LoadAngular5();

    //Angular Material
    displayAngularMaterial = new fromStore.Actions.DisplayAngularMaterial();
    loadAngularMaterial = new fromStore.Actions.LoadAngularMaterial();

    //Ngx Charts
    displayNgxCharts = new fromStore.Actions.DisplayNgxCharts();
    loadNgxCharts = new fromStore.Actions.LoadNgxCharts();

    //Ngrx
    displayNgrx = new fromStore.Actions.DisplayNgrx();
    loadNgrx = new fromStore.Actions.LoadNgrx();

    //Graph
    view = [660, 200];
    colorScheme = {
        domain: ['#FFD740', '#673AB7']
    };
    experience = [
        {
            "name": "Professional",
            "value": 5
        },
        {
            "name": "Intern",
            "value": 1.5
        }
    ];

    constructor(private store: Store<fromStore.Models.CoreState>,
                public snackbar: MatSnackBar) { }

    ngOnInit() {
        this.coreState$ = this.store.select(fromStore.Selectors.getCoreState);
        this.techUsedState$ = this.store.select(fromStore.Selectors.getTechnologiesUsedDisplayed);

        this.coreState$.subscribe((state: fromStore.Models.CoreState) => {
            if (state.error && state.error.length > 0)
                this.snackbar.open(state.error, 'dismiss');
            else
                this.snackbar.dismiss();
        });

        this.Do(this.displaySoftwareEngineer, this.loadSoftwareEngineer);
    }

    onSoftwareEngineerNext() {
        this.Do(this.displayDotnetCore, this.loadDotnetCore);
    }

    onDotnetCoreBack() {
        this.Undo(this.displayDotnetCore, this.loadDotnetCore);
    }

    onDotnetCoreNext() {
        this.Do(this.displayWebApi2, this.loadWebApi2);
    }

    onWebApi2Back() {
        this.Undo(this.displayWebApi2, this.loadWebApi2);
    }

    onWebApi2Next() {
        this.Do(this.displayAngular5, this.loadAngular5);
    }

    onAngular5Back() {
        this.Undo(this.displayAngular5, this.loadAngular5);
    }

    onAngular5Next() {
        this.Do(this.displayAngularMaterial, this.loadAngularMaterial);
    }

    onAngularMaterialBack() {
        this.Undo(this.displayAngularMaterial, this.loadAngularMaterial);
    }

    onAngularMaterialNext() {
        this.Do(this.displayNgxCharts, this.loadNgxCharts);
    }

    onNgxChartsBack() {
        this.Undo(this.displayNgxCharts, this.loadNgxCharts);
    }

    onNgxChartsNext() {
        this.Do(this.displayNgrx, this.loadNgrx);
    }

    onNgrxBack() {
        this.Undo(this.displayNgrx, this.loadNgrx);
    }

    private Do(display: any, load: any) {
        this.store.dispatch(display);
        this.store.dispatch(load);
    }

    private Undo(display: any, load: any) {
        this.store.dispatch(undo(load));
        this.store.dispatch(undo(display));
    }
}
