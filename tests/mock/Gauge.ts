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
        tooltip: 'Good',
    },
];

export const mockExpectedValueSerie = {
    name: 'Value',
    data: [
        {
            color: '#7cb5ec',
            radius: '90%',
            innerRadius: '80%',
            y: 59,
        },
    ],
    dataLabels: {
        format: '',
        borderWidth: 0,
        verticalAlign: 'bottom',
    },
    threshold: 0,
    tooltip: {
        pointFormat: '<span style="fill:#7cb5ec; stroke:#7cb5ec; border-color:#7cb5ec;"><span style="color:#7cb5ec;">●</span> <b>Test Tooltip</b></span><br/>',
    },
    zIndex: 1,
    useHTML: true,
};

export const mockParsedMaxValueSerie = {
    name: 'Value',
    data: [
        {
            color: '#7cb5ec',
            radius: '90%',
            innerRadius: '80%',
            y: 100,
        },
    ],
    dataLabels: {
        format: '',
        borderWidth: 0,
        verticalAlign: 'bottom',
    },
    threshold: 0,
    tooltip: {
        pointFormat: '<span style="fill:#7cb5ec; stroke:#7cb5ec; border-color:#7cb5ec;"><span style="color:#7cb5ec;">●</span> <b>Test Tooltip</b></span><br/>',
    },
    zIndex: 1,
    useHTML: true,
};

export const mockParsedMinValueSerie = {
    name: 'Value',
    data: [
        {
            color: '#7cb5ec',
            radius: '90%',
            innerRadius: '80%',
            y: -100,
        },
    ],
    dataLabels: {
        format: '',
        borderWidth: 0,
        verticalAlign: 'bottom',
    },
    threshold: 0,
    tooltip: {
        pointFormat: '<span style="fill:#7cb5ec; stroke:#7cb5ec; border-color:#7cb5ec;"><span style="color:#7cb5ec;">●</span> <b>Test Tooltip</b></span><br/>',
    },
    zIndex: 1,
    useHTML: true,
};

export const expectedBackgroundSerie = {
    data: [
        {
            color: '#FFFFFF',
            radius: '90%',
            innerRadius: '80%',
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
                innerRadius: '70%',
                radius: '75%',
                y: 100,
            },
        ],
        dataLabels: {
            format: '',
        },
        threshold: 76,
        tooltip: {
            pointFormat: '<span style="fill:#FD5754; stroke:#FD5754; border-color:#FD5754;"><span style="color:#FD5754;">●</span> <b>Bad</b></span><br/>',
        },
        zIndex: 1,
    },
    {
        data: [
            {
                color: '#FE9753',
                innerRadius: '70%',
                radius: '75%',
                y: 75,
            },
        ],
        dataLabels: {
            format: '',
        },
        threshold: 51,
        tooltip: {
            pointFormat: '<span style="fill:#FE9753; stroke:#FE9753; border-color:#FE9753;"><span style="color:#FE9753;">●</span> <b>So-so</b></span><br/>',
        },
        zIndex: 1,
    },
    {
        data: [
            {
                color: '#00CC88',
                innerRadius: '70%',
                radius: '75%',
                y: 50,
            },
        ],
        dataLabels: {
            format: '',
        },
        threshold: 0,
        tooltip: {
            pointFormat: '<span style="fill:#00CC88; stroke:#00CC88; border-color:#00CC88;"><span style="color:#00CC88;">●</span> <b>Good</b></span><br/>',
        },
        zIndex: 1,
    },
];

export const mockPropsGauge = {
    indicator: {
        value: 59,
        color: '#7cb5ec',
        tooltip: 'Test Tooltip',
    },
    units: ' kWh',
    min: 0,
    max: 100,
    thousandSeparator: ' ',
    decimalSeparator: ',',
};

export const mockValueBiggerThanMaxPropsGauge = {
    indicator: {
        value: 150,
        color: '#7cb5ec',
        tooltip: 'Test Tooltip',
    },
    units: ' kWh',
    min: 0,
    max: 100,
    thousandSeparator: ' ',
    decimalSeparator: ',',
};

export const mockInvertedValueLessThanMinPropsGauge = {
    indicator: {
        value: -100,
        color: '#7cb5ec',
        tooltip: 'Test Tooltip',
    },
    units: ' kWh',
    min: 40,
    max: 100,
    thousandSeparator: ' ',
    decimalSeparator: ',',
};

export const mockValueLessThanMinPropsGauge = {
    indicator: {
        value: -150,
        color: '#7cb5ec',
        tooltip: 'Test Tooltip',
    },
    units: ' kWh',
    min: -100,
    max: 0,
    thousandSeparator: ' ',
    decimalSeparator: ',',
};

export const mockInvertedValueMoreThanMaxPropsGauge = {
    indicator: {
        value: 100,
        color: '#7cb5ec',
        tooltip: 'Test Tooltip',
    },
    units: ' kWh',
    min: -100,
    max: -40,
    thousandSeparator: ' ',
    decimalSeparator: ',',
};

export const mockExpectedChart = (events: any) => ({
    events,
    type: 'solidgauge',
});
export const mockExpectedAxisY = {
    min: 0,
    max: 100,
    lineWidth: 0,
    allowDecimals: true,
    labels: {
        distance: '105%',
        enabled: true,
        style: {
            fontSize: '12px',
            color: '#7e8084',
        },
    },
    minorTickInterval: null,
    tickWidth: 0,
};
export const mockExpectedIncreasePercentage = `<span style="font-size: 1.2em; font-weight: bold; color: #00CC88;">↑</span><span style="color: #00CC88;"> 100%</span>`;
export const mockExpectedIncreaseValue = `<span style="font-size: 1.2em; font-weight: bold; color: #00CC88;">↑</span><span style="color: #00CC88;"> 40 kWh</span>`;

export const mockSingleCheckpointSeries = [{ color: '#000000', tooltip: 'Basic tooltip: 55kWh', value: 55 }];
export const mockExpectedSingleCheckpointSeries = {
    data: [55],
    tooltip: {
        borderColor: '#000000',
        pointFormat: '<span style="fill:#000000; stroke:#000000; border-color:#000000;"><span style="color:#000000;">●</span> <b>Basic tooltip: 55kWh</b></span><br/>',
    },
    dataLabels: {
        format: ``,
    },
    name: 'Basic tooltip: 55kWh',
    type: 'gauge',
    dial: {
        backgroundColor: '#000000',
        borderColor: '#000000',
        baseWidth: 1,
        borderWidth: 1,
        topWidth: 1,
        baseLength: '90%',
        rearLength: '-90%',
    },
    zIndex: 2,
};

export const mockCheckpointSeries = [
    { color: '#00FFFF', tooltip: 'Basic tooltip: 55kWh', value: 55 },
    { color: '#000FFF', tooltip: 'Basic tooltip 2: 76kWh', value: 76 },
];
