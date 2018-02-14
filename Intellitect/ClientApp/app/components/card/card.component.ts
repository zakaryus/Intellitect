import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from "@angular/animations";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
    animations: [
        trigger('cardState', [
            state('in', style({
                opacity: 1,
                transform: 'translateX(0px)'
            })),
            transition(':enter', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100px)'
                }),
                animate(500)
            ]),
            // for some reason leave doesn't want to work
            transition(':leave', [
                style({
                    opacity: 1,
                    transform: 'translateX(0px)'
                }),
                animate(500, style({
                    transform: 'translateX(-100px)',
                    opacity: 0
                }))
            ])
        ])
    ]
})
export class CardComponent {
    @Input('cardTitle') cardTitle: string;
    @Input('cardBody') cardBody: string;
    @Input('loading') loading: boolean = false;
    @Input('useBack') useBack: boolean = false;
    @Input('useNext') useNext: boolean = false;
    @Input('hasContent') hasContent: boolean = false;
    @Output('onBack') onBack: EventEmitter<void> = new EventEmitter<void>();
    @Output('onNext') onNext: EventEmitter<void> = new EventEmitter<void>();

    constructor() {}

    onClickBack() {
        this.onBack.emit();
    }

    onClickNext() {
        this.onNext.emit();
    }
}