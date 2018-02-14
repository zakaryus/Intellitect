import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    onClickEmail() {
        location.href = 'mailto:zakaryus.steele@gmail.com';
    }

    onClickPhone() {
        location.href = 'tel:12087550771';
    }
}
