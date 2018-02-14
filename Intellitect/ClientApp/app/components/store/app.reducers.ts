import { CoreState } from './app.models';
import * as fromActions from './app.actions';

export const initial: CoreState = {
    //Common
    error: '',

    //Software Engineer
    displaySoftwareEngineer: true,
    loadingSoftwareEngineer: false,
    loadedSoftwareEngineer: false,
    textSoftwareEngineer: '',

    //Dotnet Core
    displayDotnetCore: false,
    loadingDotnetCore: false,
    loadedDotnetCore: false,
    textDotnetCore: '',

    //Web Api 2
    displayWebApi2: false,
    loadingWebApi2: false,
    loadedWebApi2: false,
    textWebApi2: '',

    //Angular 5
    displayAngular5: false,
    loadingAngular5: false,
    loadedAngular5: false,
    textAngular5: '',

    //Angular Material
    displayAngularMaterial: false,
    loadingAngularMaterial: false,
    loadedAngularMaterial: false,
    textAngularMaterial: '',

    //Ngx Charts
    displayNgxCharts: false,
    loadingNgxCharts: false,
    loadedNgxCharts: false,
    textNgxCharts: '',

    //Ngrx
    displayNgrx: false,
    loadingNgrx: false,
    loadedNgrx: false,
    textNgrx: '',
};

export function CoreReducer(state: CoreState = initial, action: fromActions.CoreActions): CoreState {

    switch (action.type) {
        //Common
        case fromActions.FAILURE: {
            return {
                ...state,
                error: action.payload
            };
        }

        //Software Engineer
        case fromActions.DISPLAY_SOFTWARE_ENGINEER: {
            return {
                ...state,
                displaySoftwareEngineer: true
            };
        }
        case fromActions.LOAD_SOFTWARE_ENGINEER: {
            return {
                ...state,
                loadingSoftwareEngineer: true
            };
        }
        case fromActions.LOAD_SOFTWARE_ENGINEER_SUCCESS: {
            return {
                ...state,
                loadingSoftwareEngineer: false,
                loadedSoftwareEngineer: true,
                textSoftwareEngineer: action.payload
            };
        }
        case fromActions.LOAD_SOFTWARE_ENGINEER_FAILURE: {
            return {
                ...state,
                loadingSoftwareEngineer: false,
                loadedSoftwareEngineer: false
            };
        }

        //Dotnet Core
        case fromActions.DISPLAY_DOTNET_CORE: {
            return {
                ...state,
                displayDotnetCore: true
            };
        }
        case fromActions.LOAD_DOTNET_CORE: {
            return {
                ...state,
                loadingDotnetCore: true
            };
        }
        case fromActions.LOAD_DOTNET_CORE_SUCCESS: {
            return {
                ...state,
                loadingDotnetCore: false,
                loadedDotnetCore: true,
                textDotnetCore: action.payload
            };
        }
        case fromActions.LOAD_DOTNET_CORE_FAILURE: {
            return {
                ...state,
                loadingDotnetCore: false,
                loadedDotnetCore: false
            };
        }

        //Web Api 2
        case fromActions.DISPLAY_WEB_API_2: {
            return {
                ...state,
                displayWebApi2: true
            };
        }
        case fromActions.LOAD_WEB_API_2: {
            return {
                ...state,
                loadingWebApi2: true
            };
        }
        case fromActions.LOAD_WEB_API_2_SUCCESS: {
            return {
                ...state,
                loadingWebApi2: false,
                loadedWebApi2: true,
                textWebApi2: action.payload
            };
        }
        case fromActions.LOAD_WEB_API_2_FAILURE: {
            return {
                ...state,
                loadingWebApi2: false,
                loadedWebApi2: false
            };
        }

        //Angular 5
        case fromActions.DISPLAY_ANGULAR_5: {
            return {
                ...state,
                displayAngular5: true
            };
        }
        case fromActions.LOAD_ANGULAR_5: {
            return {
                ...state,
                loadingAngular5: true
            };
        }
        case fromActions.LOAD_ANGULAR_5_SUCCESS: {
            return {
                ...state,
                loadingAngular5: false,
                loadedAngular5: true,
                textAngular5: action.payload
            };
        }
        case fromActions.LOAD_ANGULAR_5_FAILURE: {
            return {
                ...state,
                loadingAngular5: false,
                loadedAngular5: false
            };
        }

        //Angular Material
        case fromActions.DISPLAY_ANGULAR_MATERIAL: {
            return {
                ...state,
                displayAngularMaterial: true
            };
        }
        case fromActions.LOAD_ANGULAR_MATERIAL: {
            return {
                ...state,
                loadingAngularMaterial: true
            };
        }
        case fromActions.LOAD_ANGULAR_MATERIAL_SUCCESS: {
            return {
                ...state,
                loadingAngularMaterial: false,
                loadedAngularMaterial: true,
                textAngularMaterial: action.payload
            };
        }
        case fromActions.LOAD_ANGULAR_MATERIAL_FAILURE: {
            return {
                ...state,
                loadingAngularMaterial: false,
                loadedAngularMaterial: false
            };
        }

        //Ngx Charts
        case fromActions.DISPLAY_NGX_CHARTS: {
            return {
                ...state,
                displayNgxCharts: true
            };
        }
        case fromActions.LOAD_NGX_CHARTS: {
            return {
                ...state,
                loadingNgxCharts: true
            };
        }
        case fromActions.LOAD_NGX_CHARTS_SUCCESS: {
            return {
                ...state,
                loadingNgxCharts: false,
                loadedNgxCharts: true,
                textNgxCharts: action.payload
            };
        }
        case fromActions.LOAD_NGX_CHARTS_FAILURE: {
            return {
                ...state,
                loadingNgxCharts: false,
                loadedNgxCharts: false
            };
        }

        //Ngrx
        case fromActions.DISPLAY_NGRX: {
            return {
                ...state,
                displayNgrx: true
            };
        }
        case fromActions.LOAD_NGRX: {
            return {
                ...state,
                loadingNgrx: true
            };
        }
        case fromActions.LOAD_NGRX_SUCCESS: {
            return {
                ...state,
                loadingNgrx: false,
                loadedNgrx: true,
                textNgrx: action.payload
            };
        }
        case fromActions.LOAD_NGRX_FAILURE: {
            return {
                ...state,
                loadingNgrx: false,
                loadedNgrx: false
            };
        }
    }

    return state;
}