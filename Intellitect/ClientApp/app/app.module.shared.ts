import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { handleUndo } from 'ngrx-undo';

import * as Mat from '@angular/material';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import * as CoreNgrx from './components/store';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CardComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,

        Mat.MatToolbarModule,
        Mat.MatMenuModule,
        Mat.MatButtonModule,
        Mat.MatIconModule,
        Mat.MatCardModule,
        Mat.MatProgressSpinnerModule,
        Mat.MatSnackBarModule,

        NgxChartsModule,

        StoreModule.forRoot(CoreNgrx.Reducers, { metaReducers: [handleUndo] }),
        EffectsModule.forRoot([CoreNgrx.Effects.CoreEffects]),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
        }),

        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
