import React from 'react';

export const mockRadioGroup = [
  {
    value: "segundos",
    label: "s",
    id: "segundos",
    name: "parameters",
  },
  {
    value: "minutos",
    label: "m",
    id: "minutos",
    name: "parameters",
  },
  {
    value: "horas",
    label: "h",
    id: "horas",
    name: "parameters",
  },
  {
    value: "dias",
    label: "d",
    id: "dias",
    name: "parameters",
  },
  {
    value: "semanas",
    label: "sem",
    id: "semanas",
    name: "parameters",
  },
  {
    value: "meses",
    label: "mes",
    id: "meses",
    name: "parameters",
  },
];
export const mockSelectedRadioItem = "horas";
export const mockCheckboxGroup = [
  {
    value: "hdd",
    label: "hdd",
    id: "hdd",
    name: "hdd",
    tooltip: "HDD",
    icon: "ratios_hdd",
  },
  {
    value: "occupancy",
    label: "occupancy",
    id: "occupancy",
    name: "occupancy",
    tooltip: "Occupancy",
    icon: "ratios_occupancy",
  },
  {
    value: "temperature_avg",
    label: "temperature_avg",
    id: "temperature_avg",
    name: "temperature_avg",
    tooltip: "Temperature AVG",
    icon: "ratios_temperature_avg",
  },
  {
    value: "production",
    label: "production",
    id: "production",
    name: "production",
    tooltip: "Production",
    icon: "ratios_production",
  },
  {
    value: "cdd",
    label: "cdd",
    id: "cdd",
    name: "cdd",
    tooltip: "CDD",
    icon: "ratios_cdd",
  },
  {
    value: "surface",
    label: "surface",
    id: "surface",
    name: "surface",
    tooltip: "Surface",
    icon: "ratios_surface",
  },
  {
    value: "star",
    label: "star",
    id: "star",
    name: "star",
    tooltip: "Star",
    icon: "ratios_star",
  },
];
export const mockCheckboxGroupHtml = [
  {
    value: "hdd",
    label: <div><span>Previous year</span><span>22/05/19 - 22/05/18</span></div>,
    id: "hdd",
    name: "hdd"
  },
  {
    value: "occupancy",
    label: <div><span>Previous year</span><span>22/05/19 - 22/05/18</span></div>,
    id: "occupancy",
    name: "occupancy"
  }
];
export const mockSelectedCheckboxItem = ["star", "surface", "occupancy"];