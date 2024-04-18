import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { PlMastersComponent } from 'app/modules/admin/accounting/ebitda/pl-masters/pl-masters.component';

export default [
    {
        path     : '',
        component: PlMastersComponent,
    },
] as Routes;