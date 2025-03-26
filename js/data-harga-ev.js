Highcharts.setOptions({
    lang: {
        thousandsSep: '.'
    }
})

Highcharts.chart('container', {

    chart: {
        type: 'columnrange',
        inverted: true,
        backgroundColor: 'rgba(255,255,255,.6)',
        borderRadius: 16
    },

    accessibility: {
        description: 'Image description: A column range chart compares the ' +
            'monthly temperature variations throughout 2023 in Vik i Sogn, ' +
            'Norway. The chart is interactive and displays the temperature ' +
            'range for each month when hovering over the data. The ' +
            'temperature is measured in degrees Celsius on the X-axis and ' +
            'the months are plotted on the Y-axis. The lowest temperature is ' +
            'recorded in March at minus 13.1 Celsius. The lowest range of ' +
            'temperatures is found in September ranging from a low of 9.6 ' +
            'to a high of 23.0 Celsius. The highest temperature is found in ' +
            'June at 28.4 Celsius, and has the highest range of temperatures ' +
            'from 3.1 up to 28.4'
    },

    title: {
        text: 'Kisaran Harga Mobil Listrik'
    },

    credits: {
        enabled: false //buat highcharts com
    },
    subtitle: {
        text: null
    },

    xAxis: {
        categories: [
            'Wuling', 'Cherry', 'VinFast', 'Citroen', 'DFSK',
            'BYD', 'MG', 'Hyundai', 'Nissan', 'Volvo', 'Toyota', 'Mercedes-Benz',
        ]
    },

    yAxis: {
        title: {
            text: 'Harga'
        }
    },

    tooltip: {
        valueSuffix: ''
        // pointFormat: '{series.name}: <b>{point.y}</b>',
    },

    plotOptions: {
        columnrange: {
            borderRadius: '50%',
            dataLabels: {
                enabled: true,
                // format: '{y}'
            }
        }
    },

    legend: {
        enabled: false
    },

    series: [{
        name: 'Harga (Rp)',
        data: [
            [179000000, 398000000], //'Wuling'
            [419000000, 608000000], //'Cherry'
            [218000000, 273000000], //'VinFast'
            [377000000, 377000000], //'Citroen', 
            [350000000, 399000000],//'DFSK', 
            [379000000, 719000000],//'BYD',
            [395000000, 1688000000],//'MG', 
            [499000000, 1300000000], //'Hyundai',  
            [738000000, 740000000],//'Nissan', 
            [890000000, 1360000000],//'Volvo', 
            [1190000000, 1198000000], //'Toyota'
            [1540000000, 3950000000] // mercy
        ]
    }]

});
