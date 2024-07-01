import React from 'react';

export const mockRadioGroup = [
    {
        value: '15min',
        label: '15min',
        id: '15min',
        name: 'parameters',
        isDisabled: true,
    },
    {
        value: '30min',
        label: '30min',
        id: '30min',
        name: 'parameters',
    },
    {
        value: 'horas',
        label: 'h',
        id: 'horas',
        name: 'parameters',
    },
    {
        value: 'dias',
        label: 'd',
        id: 'dias',
        name: 'parameters',
    },
    {
        value: 'semanas',
        label: 's',
        id: 'semanas',
        name: 'parameters',
    },
    {
        value: 'meses',
        label: 'm',
        id: 'meses',
        name: 'parameters',
    },
];
export const mockRadioCustomGroup = [
    {
        value: '15min',
        id: '15min',
        icon: 'widget_single_kpi',
        name: 'parameters',
        tooltip: 'parameters',
        isDisabled: true,
    },
    {
        value: 'gauge',
        id: 'gauge',
        icon: 'widget_gauge',
        name: 'gauge',
        tooltip: 'gauge',
    },
    {
        value: 'percentage',
        id: 'percentage',
        icon: 'widget_percentage',
        name: 'percentage',
        tooltip: 'percentage',
    },
];
export const mockSelectedRadioItem = 'horas';
export const mockCheckboxGroup = [
    {
        value: 'hdd',
        label: 'hdd',
        id: 'hdd',
        name: 'hdd',
        tooltip: 'HDD',
        icon: 'ratios_hdd',
        isDisabled: true,
    },
    {
        value: 'production',
        label: 'production',
        id: 'production',
        name: 'production',
        tooltip: 'Production',
        icon: 'ratios_production',
    },
    {
        value: 'cdd',
        label: 'cdd',
        id: 'cdd',
        name: 'cdd',
        tooltip: 'CDD',
        icon: 'ratios_cdd',
    },
    {
        value: 'surface',
        label: 'surface',
        id: 'surface',
        name: 'surface',
        tooltip: 'Surface',
        icon: 'ratios_surface',
    },
];
export const mockCheckboxGroupHtml = [
    {
        value: 'hdd',
        label: (
            <div>
                <span>Previous year</span>
                <span>22/05/19 - 22/05/18</span>
            </div>
        ),
        id: 'hdd',
        name: 'hdd',
    },
    {
        value: 'occupancy',
        label: (
            <div>
                <span>Previous year</span>
                <span>22/05/19 - 22/05/18</span>
            </div>
        ),
        id: 'occupancy',
        name: 'occupancy',
    },
];
export const mockSelectedCheckboxItem = ['production', 'cdd'];
