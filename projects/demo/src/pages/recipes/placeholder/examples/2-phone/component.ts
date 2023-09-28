import {ChangeDetectionStrategy, Component, ElementRef, ViewChild} from '@angular/core';

import mask, {PLACEHOLDER, removePlaceholder} from './mask';

@Component({
    selector: 'placeholder-doc-example-2',
    template: `
        <tui-input
            [style.max-width.rem]="20"
            [tuiTextfieldCustomContent]="usFlag"
            [(ngModel)]="value"
        >
            Enter US phone number
            <input
                #inputRef
                inputmode="tel"
                tuiTextfield
                [maskito]="maskitoOptions"
                (blur)="onBlur()"
                (focus)="onFocus()"
            />

            <ng-template #usFlag>
                <img
                    alt="Flag of the United States"
                    width="28"
                    [src]="'US' | tuiFlag"
                />
            </ng-template>
        </tui-input>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaceholderDocExample2 {
    @ViewChild('inputRef', {read: ElementRef})
    inputRef!: ElementRef<HTMLInputElement>;

    readonly maskitoOptions = mask;
    value = '';

    onBlur(): void {
        const cleanValue = removePlaceholder(this.value);

        this.value = cleanValue === '+1' ? '' : cleanValue;
    }

    onFocus(): void {
        const initialValue = this.value || '+1 (';

        this.value = initialValue + PLACEHOLDER.slice(initialValue.length);
    }
}