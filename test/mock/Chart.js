import Highcharts from 'highcharts';

export const mockBasicArea = {
  chart: {
    type: 'area',
  },
  accessibility: {
    description:
      'An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.',
  },
  title: {
    text: 'US and USSR nuclear stockpiles',
  },
  subtitle: {
    text:
      'Sources: <a href="https://thebulletin.org/2006/july/global-nuclear-stockpiles-1945-2006">' +
      'thebulletin.org</a> &amp; <a href="https://www.armscontrol.org/factsheets/Nuclearweaponswhohaswhat">' +
      'armscontrol.org</a>',
  },
  xAxis: {
    allowDecimals: false,
    labels: {
      formatter: function() {
        return this.value; // clean, unformatted number for year
      },
    },
  },
  yAxis: {
    title: {
      text: 'Nuclear weapon states',
    },
    labels: {
      formatter: function() {
        return `${this.value / 1000}k`;
      },
    },
  },
  tooltip: {
    pointFormat:
      '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}',
  },
  plotOptions: {
    area: {
      pointStart: 1940,
      marker: {
        enabled: false,
        symbol: 'circle',
        radius: 2,
        states: {
          hover: {
            enabled: true,
          },
        },
      },
    },
  },
  series: [
    {
      name: 'USA',
      data: [
        null,
        null,
        null,
        null,
        null,
        6,
        11,
        32,
        110,
        235,
        369,
        640,
        1005,
        1436,
        2063,
        3057,
        4618,
        6444,
        9822,
        15468,
        20434,
        24126,
        27387,
        29459,
        31056,
        31982,
        32040,
        31233,
        29224,
        27342,
        26662,
        26956,
        27912,
        28999,
        28965,
        27826,
        25579,
        25722,
        24826,
        24605,
        24304,
        23464,
        23708,
        24099,
        24357,
        24237,
        24401,
        24344,
        23586,
        22380,
        21004,
        17287,
        14747,
        13076,
        12555,
        12144,
        11009,
        10950,
        10871,
        10824,
        10577,
        10527,
        10475,
        10421,
        10358,
        10295,
        10104,
        9914,
        9620,
        9326,
        5113,
        5113,
        4954,
        4804,
        4761,
        4717,
        4368,
        4018,
      ],
    },
    {
      name: 'USSR/Russia',
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        5,
        25,
        50,
        120,
        150,
        200,
        426,
        660,
        869,
        1060,
        1605,
        2471,
        3322,
        4238,
        5221,
        6129,
        7089,
        8339,
        9399,
        10538,
        11643,
        13092,
        14478,
        15915,
        17385,
        19055,
        21205,
        23044,
        25393,
        27935,
        30062,
        32049,
        33952,
        35804,
        37431,
        39197,
        45000,
        43000,
        41000,
        39000,
        37000,
        35000,
        33000,
        31000,
        29000,
        27000,
        25000,
        24000,
        23000,
        22000,
        21000,
        20000,
        19000,
        18000,
        18000,
        17000,
        16000,
        15537,
        14162,
        12787,
        12600,
        11400,
        5500,
        4512,
        4502,
        4502,
        4500,
        4500,
      ],
    },
  ],
};
export const mockStackedBar = {
  chart: {
    type: 'bar',
  },
  title: {
    text: 'Stacked bar chart',
  },
  xAxis: {
    categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Total fruit consumption',
    },
  },
  legend: {
    reversed: true,
  },
  plotOptions: {
    series: {
      stacking: 'normal',
    },
  },
  series: [
    {
      name: 'John',
      data: [5, 3, 4, 7, 2],
    },
    {
      name: 'Jane',
      data: [2, 2, 3, 2, 1],
    },
    {
      name: 'Joe',
      data: [3, 4, 4, 2, 5],
    },
  ],
};
const categories = [
  '0-4',
  '5-9',
  '10-14',
  '15-19',
  '20-24',
  '25-29',
  '30-34',
  '35-39',
  '40-44',
  '45-49',
  '50-54',
  '55-59',
  '60-64',
  '65-69',
  '70-74',
  '75-79',
  '80-84',
  '85-89',
  '90-94',
  '95-99',
  '100 + ',
];
export const mockStackedBarNegative = {
  chart: {
    type: 'bar',
  },
  title: {
    text: 'Population pyramid for Germany, 2018',
  },
  subtitle: {
    text:
      'Source: <a href="http://populationpyramid.net/germany/2018/">Population Pyramids of the World from 1950 to 2100</a>',
  },
  xAxis: [
    {
      categories: categories,
      reversed: false,
      labels: {
        step: 1,
      },
    },
    {
      // mirror axis on right side
      opposite: true,
      reversed: false,
      categories: categories,
      linkedTo: 0,
      labels: {
        step: 1,
      },
    },
  ],
  yAxis: {
    title: {
      text: null,
    },
    labels: {
      formatter: function() {
        return `${Math.abs(this.value)}%`;
      },
    },
  },

  plotOptions: {
    series: {
      stacking: 'normal',
    },
  },

  tooltip: {
    formatter: function() {
      return (
        `<b>${this.series.name}, age ${this.point.category}</b><br/>` +
        `Population: ${Highcharts.numberFormat(Math.abs(this.point.y), 0)}`
      );
    },
  },

  series: [
    {
      name: 'Male',
      data: [
        -2.2,
        -2.1,
        -2.2,
        -2.4,
        -2.7,
        -3.0,
        -3.3,
        -3.2,
        -2.9,
        -3.5,
        -4.4,
        -4.1,
        -3.4,
        -2.7,
        -2.3,
        -2.2,
        -1.6,
        -0.6,
        -0.3,
        -0.0,
        -0.0,
      ],
    },
    {
      name: 'Female',
      data: [
        2.1,
        2.0,
        2.1,
        2.3,
        2.6,
        2.9,
        3.2,
        3.1,
        2.9,
        3.4,
        4.3,
        4.0,
        3.5,
        2.9,
        2.5,
        2.7,
        2.2,
        1.1,
        0.6,
        0.2,
        0.0,
      ],
    },
  ],
};

export const mockMixed = {
  chart: {
    zoomType: 'xy',
  },
  title: {
    text: 'Average Monthly Temperature and Rainfall in Tokyo',
  },
  subtitle: {
    text: 'Source: WorldClimate.com',
  },
  xAxis: [
    {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      crosshair: true,
    },
  ],
  yAxis: [
    {
      // Primary yAxis
      labels: {
        format: '{value}°C',
      },
      title: {
        text: 'Temperature',
      },
    },
    {
      // Secondary yAxis
      title: {
        text: 'Rainfall',
      },
      labels: {
        format: '{value} mm',
      },
    },
  ],
  tooltip: {
    shared: true,
  },
  plotOptions: {
    column: {
      borderRadius: 4,
    },
  },
  series: [
    {
      name: 'Rainfall',
      type: 'column',
      yAxis: 1,
      data: [
        49.9,
        71.5,
        106.4,
        129.2,
        144.0,
        176.0,
        135.6,
        148.5,
        216.4,
        194.1,
        95.6,
        54.4,
      ],
      tooltip: {
        valueSuffix: ' mm',
      },
    },
    {
      name: 'Temperature',
      type: 'spline',
      data: [
        7.0,
        6.9,
        9.5,
        14.5,
        18.2,
        21.5,
        25.2,
        26.5,
        23.3,
        18.3,
        13.9,
        9.6,
      ],
      tooltip: {
        valueSuffix: '°C',
      },
    },
  ],
};

export const mockHeatmap = {
  chart: {
    type: 'heatmap',
    marginTop: 40,
    marginBottom: 80,
    plotBorderWidth: 1,
  },

  title: {
    text: 'Sales per employee per weekday',
  },

  xAxis: {
    categories: [
      'Alexander',
      'Marie',
      'Maximilian',
      'Sophia',
      'Lukas',
      'Maria',
      'Leon',
      'Anna',
      'Tim',
      'Laura',
    ],
  },

  yAxis: {
    categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    title: null,
    reversed: true,
  },

  colorAxis: {
    min: 0,
    minColor: '#FFFFFF',
    maxColor: Highcharts.getOptions().colors[0],
  },

  legend: {
    align: 'right',
    layout: 'vertical',
    margin: 0,
    verticalAlign: 'top',
    y: 25,
    symbolHeight: 280,
  },

  series: [
    {
      name: 'Sales per employee',
      borderWidth: 1,
      data: [
        [0, 0, 10],
        [0, 1, 19],
        [0, 2, 8],
        [0, 3, 24],
        [0, 4, 67],
        [1, 0, 92],
        [1, 1, 58],
        [1, 2, 78],
        [1, 3, 117],
        [1, 4, 48],
        [2, 0, 35],
        [2, 1, 15],
        [2, 2, 123],
        [2, 3, 64],
        [2, 4, 52],
        [3, 0, 72],
        [3, 1, 132],
        [3, 2, 114],
        [3, 3, 19],
        [3, 4, 16],
        [4, 0, 38],
        [4, 1, 5],
        [4, 2, 8],
        [4, 3, 117],
        [4, 4, 115],
        [5, 0, 88],
        [5, 1, 32],
        [5, 2, 12],
        [5, 3, 6],
        [5, 4, 120],
        [6, 0, 13],
        [6, 1, 44],
        [6, 2, 88],
        [6, 3, 98],
        [6, 4, 96],
        [7, 0, 31],
        [7, 1, 1],
        [7, 2, 82],
        [7, 3, 32],
        [7, 4, 30],
        [8, 0, 85],
        [8, 1, 97],
        [8, 2, 123],
        [8, 3, 64],
        [8, 4, 84],
        [9, 0, 47],
        [9, 1, 114],
        [9, 2, 31],
        [9, 3, 48],
        [9, 4, 91],
      ],
      dataLabels: {
        enabled: true,
        color: '#000000',
      },
    },
  ],
};
