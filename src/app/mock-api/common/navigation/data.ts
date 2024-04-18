/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Dashboard',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example',
    },
    {
        id: 'pages',
        title: 'Contabilidad',
        subtitle: 'Gestión contable y reportes',
        type: 'group',
        icon: 'heroicons_outline:document',
        children: [
            {
                id: 'pages.authentication',
                title: 'Ebitda',
                type: 'collapsable',
                icon: 'heroicons_outline:lock-closed',
                children: [
                    {
                        id: 'pages.authentication.sign-in.classic',
                        title: 'Maestros P&L',
                        type: 'basic',
                        link: '/accounting/ebitda/pl-masters',
                    },
                    {
                        id: 'pages.authentication.sign-in.classic',
                        title: 'Base Auxiliar',
                        type: 'basic',
                        link: '/accounting/ebitda/base-auxiliary',
                    },
                ],
            },
        ],
    },
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example',
    },
    {
        id: 'pages',
        title: 'Ebitda',
        tooltip: 'Ebitda',
        type: 'aside',
        icon: 'heroicons_outline:document-duplicate',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example',
    },
    {
        id: 'pages',
        title: 'Ebitda',
        type: 'aside',
        icon: 'heroicons_outline:document-duplicate',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example',
    },
    {
        id: 'pages',
        title: 'Ebitda',
        type: 'group',
        icon: 'heroicons_outline:document-duplicate',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
];
