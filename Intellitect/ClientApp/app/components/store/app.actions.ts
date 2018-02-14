import { Action } from '@ngrx/store';

export const FAILURE = "[Core] Failure";

export const DISPLAY_SOFTWARE_ENGINEER = "[Core] Display Software Engineer";
export const LOAD_SOFTWARE_ENGINEER = "[Core] Load Software Engineer";
export const LOAD_SOFTWARE_ENGINEER_SUCCESS = "[Core] Load Software Engineer Success";
export const LOAD_SOFTWARE_ENGINEER_FAILURE = "[Core] Load Software Engineer Failure";

export const DISPLAY_DOTNET_CORE = "[Core] Display Dotnet Core";
export const LOAD_DOTNET_CORE = "[Core] Load Dotnet Core";
export const LOAD_DOTNET_CORE_SUCCESS = "[Core] Load Dotnet Core Success";
export const LOAD_DOTNET_CORE_FAILURE = "[Core] Load Dotnet Core Failure";

export const DISPLAY_WEB_API_2 = "[Core] Display Web Api 2";
export const LOAD_WEB_API_2 = "[Core] Load Web Api 2";
export const LOAD_WEB_API_2_SUCCESS = "[Core] Load Web Api 2 Success";
export const LOAD_WEB_API_2_FAILURE = "[Core] Load Web Api 2 Failure";

export const DISPLAY_ANGULAR_5 = "[Core] Display Angular 5";
export const LOAD_ANGULAR_5 = "[Core] Load Angular 5";
export const LOAD_ANGULAR_5_SUCCESS = "[Core] Load Angular 5 Success";
export const LOAD_ANGULAR_5_FAILURE = "[Core] Load Angular 5 Failure";

export const DISPLAY_ANGULAR_MATERIAL = "[Core] Display Angular Material";
export const LOAD_ANGULAR_MATERIAL = "[Core] Load Angular Material";
export const LOAD_ANGULAR_MATERIAL_SUCCESS = "[Core] Load Angular Material Success";
export const LOAD_ANGULAR_MATERIAL_FAILURE = "[Core] Load Angular Material Failure";

export const DISPLAY_NGX_CHARTS = "[Core] Display Ngx Charts";
export const LOAD_NGX_CHARTS = "[Core] Load Ngx Charts";
export const LOAD_NGX_CHARTS_SUCCESS = "[Core] Load Ngx Charts Success";
export const LOAD_NGX_CHARTS_FAILURE = "[Core] Load Ngx Charts Failure";

export const DISPLAY_NGRX = "[Core] Display Ngrx";
export const LOAD_NGRX = "[Core] Load Ngrx";
export const LOAD_NGRX_SUCCESS = "[Core] Load Ngrx Success";
export const LOAD_NGRX_FAILURE = "[Core] Load Ngrx Failure";

//Common
export class Failure {
    readonly type = FAILURE;
    constructor(public payload: string) { }
}

//Software Engineer
export class DisplaySoftwareEngineer {
    readonly type = DISPLAY_SOFTWARE_ENGINEER;
}
export class LoadSoftwareEngineer {
    readonly type = LOAD_SOFTWARE_ENGINEER;
}
export class LoadSoftwareEngineerSuccess {
    readonly type = LOAD_SOFTWARE_ENGINEER_SUCCESS;
    constructor(public payload: string){}
}
export class LoadSoftwareEngineerFailure {
    readonly type = LOAD_SOFTWARE_ENGINEER_FAILURE;
}

//Dotnet Core
export class DisplayDotnetCore {
    readonly type = DISPLAY_DOTNET_CORE;
}
export class LoadDotnetCore {
    readonly type = LOAD_DOTNET_CORE;
}
export class LoadDotnetCoreSuccess {
    readonly type = LOAD_DOTNET_CORE_SUCCESS;
    constructor(public payload: string) { }
}
export class LoadDotnetCoreFailure {
    readonly type = LOAD_DOTNET_CORE_FAILURE;
}

//Web Api 2
export class DisplayWebApi2 {
    readonly type = DISPLAY_WEB_API_2;
}
export class LoadWebApi2 {
    readonly type = LOAD_WEB_API_2;
}
export class LoadWebApi2Success {
    readonly type = LOAD_WEB_API_2_SUCCESS;
    constructor(public payload: string) { }
}
export class LoadWebApi2Failure {
    readonly type = LOAD_WEB_API_2_FAILURE;
}

//Angular 5
export class DisplayAngular5 {
    readonly type = DISPLAY_ANGULAR_5;
}
export class LoadAngular5 {
    readonly type = LOAD_ANGULAR_5;
}
export class LoadAngular5Success {
    readonly type = LOAD_ANGULAR_5_SUCCESS;
    constructor(public payload: string) { }
}
export class LoadAngular5Failure {
    readonly type = LOAD_ANGULAR_5_FAILURE;
}

//Angular Material
export class DisplayAngularMaterial {
    readonly type = DISPLAY_ANGULAR_MATERIAL;
}
export class LoadAngularMaterial {
    readonly type = LOAD_ANGULAR_MATERIAL;
}
export class LoadAngularMaterialSuccess {
    readonly type = LOAD_ANGULAR_MATERIAL_SUCCESS;
    constructor(public payload: string) { }
}
export class LoadAngularMaterialFailure {
    readonly type = LOAD_ANGULAR_MATERIAL_FAILURE;
}

//Ngx Charts
export class DisplayNgxCharts {
    readonly type = DISPLAY_NGX_CHARTS;
}
export class LoadNgxCharts {
    readonly type = LOAD_NGX_CHARTS;
}
export class LoadNgxChartsSuccess {
    readonly type = LOAD_NGX_CHARTS_SUCCESS;
    constructor(public payload: string) { }
}
export class LoadNgxChartsFailure {
    readonly type = LOAD_NGX_CHARTS_FAILURE;
}

//Ngrx
export class DisplayNgrx {
    readonly type = DISPLAY_NGRX;
}
export class LoadNgrx {
    readonly type = LOAD_NGRX;
}
export class LoadNgrxSuccess {
    readonly type = LOAD_NGRX_SUCCESS;
    constructor(public payload: string) { }
}
export class LoadNgrxFailure {
    readonly type = LOAD_NGRX_FAILURE;
}

export type CoreActions =
    Failure |
    DisplaySoftwareEngineer | LoadSoftwareEngineer | LoadSoftwareEngineerSuccess | LoadSoftwareEngineerFailure |
    DisplayDotnetCore | LoadDotnetCore | LoadDotnetCoreSuccess | LoadDotnetCoreFailure |
    DisplayWebApi2 | LoadWebApi2 | LoadWebApi2Success | LoadWebApi2Failure |
    DisplayAngular5 | LoadAngular5 | LoadAngular5Success | LoadAngular5Failure |
    DisplayAngularMaterial | LoadAngularMaterial | LoadAngularMaterialSuccess | LoadAngularMaterialFailure |
    DisplayNgxCharts | LoadNgxCharts | LoadNgxChartsSuccess | LoadNgxChartsFailure |
    DisplayNgrx | LoadNgrx | LoadNgrxSuccess | LoadNgrxFailure;