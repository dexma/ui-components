export const mockDialGauge = {
  chart: {
    type: 'solidgauge',
    margin: [0, 0, 0, 0],
    marginTop: 50,
  },
  tooltip: {
    enabled: true,
  },
  yAxis: {
    min: 0,
    max: 100,
    lineWidth: 0,
    allowDecimals: true,
    labels: {
      distance: 18,
      enabled: true,
      x: 0,
      y: 0,
      style: {
        fontSize: '16',
      },
    },
    minorTickInterval: null,
    tickWidth: 0,
  },
  pane: {
    startAngle: -140,
    endAngle: 140,
    background: [
      {
        outerRadius: '100%',
        innerRadius: '0%',
        backgroundColor: 'transparent',
        borderWidth: 0,
      },
    ],
  },
  plotOptions: {
    solidgauge: {
      stickyTracking: false,
      dataLabels: {
        y: 0,
        borderWidth: 0,
        useHTML: true,
      },
    },
    gauge: {
      dial: {
        baseLength: '100%',
        radius: '100%',
        rearLength: '-90%',
        borderWidth: 12,
        baseWidth: 14,
        topWidth: 15,
      },
    },
  },
};

export const mockSingleRangeSerie = [
  {
    color: '#00CC88',
    from: 0,
    to: 100,
  },
];

export const mockExpectedValueSerie = {
  name: 'Value',
  data: [
    {
      color: '#7cb5ec',
      radius: '105%',
      innerRadius: '95%',
      y: 59,
    },
  ],
  dataLabels: {
    format: `<div style="text-align:center;"><div class="highcharts-main-data-label" ><div><span data-testid="highchart-data-label-value" style="font-size:100px;color:#7cb5ec;">59</span></div><span data-testid="highchart-data-label-units" style="font-size:30px; font-weight: 400;color:#7E8084;"> kWh</span></div>
      </div>`,
  },
  threshold: 0,
  tooltip: {
    valueSuffix: ' kWh',
  },
  zIndex: 4,
  useHTML: true,
};

export const expectedBackgroundSerie = {
  data: [
    {
      color: '#FFFFFF',
      radius: '105%',
      innerRadius: '95%',
      y: 100,
    },
  ],
  dataLabels: {
    format: ``,
  },
  enableMouseTracking: false,
  zIndex: 0,
};

export const mockRangeSeries = [
  {
    color: '#FD5754',
    from: 76,
    to: 100,
    tooltip: 'Bad',
  },
  {
    color: '#00CC88',
    from: 0,
    to: 50,
    tooltip: 'Good',
  },
  {
    color: '#FE9753',
    from: 51,
    to: 75,
    tooltip: 'So-so',
  },
];
export const mockExpectedRangeSeries = [
  {
    data: [
      {
        color: '#FD5754',
        innerRadius: '85%',
        radius: '90%',
        y: 100,
      },
    ],
    dataLabels: {
      format: '',
    },
    threshold: 76,
    tooltip: {
      pointFormat:
        '<span style="fill:#FD5754; stroke:#FD5754; border-color:#FD5754;"><span style="color:#FD5754;">●</span> <b>Bad</b></span><br/>',
    },
    zIndex: 0,
  },
  {
    data: [
      {
        color: '#FE9753',
        innerRadius: '85%',
        radius: '90%',
        y: 75,
      },
    ],
    dataLabels: {
      format: '',
    },
    threshold: 51,
    tooltip: {
      pointFormat:
        '<span style="fill:#FE9753; stroke:#FE9753; border-color:#FE9753;"><span style="color:#FE9753;">●</span> <b>So-so</b></span><br/>',
    },
    zIndex: 1,
  },
  {
    data: [
      {
        color: '#00CC88',
        innerRadius: '85%',
        radius: '90%',
        y: 50,
      },
    ],
    dataLabels: {
      format: '',
    },
    threshold: 0,
    tooltip: {
      pointFormat:
        '<span style="fill:#00CC88; stroke:#00CC88; border-color:#00CC88;"><span style="color:#00CC88;">●</span> <b>Good</b></span><br/>',
    },
    zIndex: 2,
  },
];

export const mockPropsGauge = {
  color: '#7cb5ec',
  units: ' kWh',
  value: 59,
  min: 0,
  max: 100,
};

export const mockAxisY = {
  min: 0,
  max: 100,
  lineWidth: 0,
  allowDecimals: true,
  labels: {
    distance: 18,
    enabled: true,
    x: 0,
    y: 0,
    style: {
      fontSize: '18',
      color: '#7E8084',
    },
  },
  minorTickInterval: null,
  tickWidth: 0,
};
export const mockExpectedAxisY = {
  min: 0,
  max: 100,
  lineWidth: 0,
  allowDecimals: true,
  labels: {
    distance: 30,
    enabled: true,
    x: 0,
    y: 0,
    style: {
      fontSize: '18',
      color: '#7E8084',
    },
  },
  minorTickInterval: null,
  tickWidth: 0,
};
export const mockExpectedIncreasePercentage = `<span style="position:relative; color: #00CC88;"><svg width="16" height="16" viewBox="0 0 24 24" stroke-width="0" fill="currentColor" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" data-testid="icon" style="position:inherit;left:0px;top:4px" class="StyledIcon-gkgbl duckRk"><path d="M4 12L5.41 13.41L11 7.83V20H13V7.83L18.58 13.42L20 12L12 4L4 12Z" opacity="[object Object]" clip-rule="[object Object]" fill-rule="[object Object]"></path></svg>100%</span>`;

export const mockSingleCheckpointSeries = [
  { color: '#000000', tooltip: 'Basic tooltip', value: 55 },
];
export const mockExpectedSingleCheckpointSeries = {
  data: [55],
  tooltip: {
    valueSuffix: ' kWh',
    borderColor: '#000000',
    pointFormat:
      '<span style="fill:#000000; stroke:#000000; border-color:#000000;"><span style="color:#000000;">●</span> {series.name}: <b>{point.y}</b></span><br/>',
  },
  dataLabels: {
    format: ``,
  },
  name: 'Basic tooltip',
  type: 'gauge',
  dial: {
    backgroundColor: '#000000',
  },
  zIndex: 4,
};

export const mockCheckpointSeries = [
  { color: '#000000', tooltip: 'Basic tooltip', value: 55 },
  { color: '#000000', tooltip: 'Basic tooltip 2', value: 76 },
];
