import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { BaseAuxiliaryComponent } from 'app/modules/admin/accounting/ebitda/base-auxiliary/base-auxiliary.component';

export default [
    {
        path     : '',
        component: BaseAuxiliaryComponent,
    },
] as Routes;
