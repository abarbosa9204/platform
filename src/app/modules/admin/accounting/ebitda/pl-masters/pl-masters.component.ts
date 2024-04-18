import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-pl-masters',
    standalone: true,
    imports: [CommonModule, MatTabsModule, MatIconModule],
    templateUrl: './pl-masters.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class PlMastersComponent {}
