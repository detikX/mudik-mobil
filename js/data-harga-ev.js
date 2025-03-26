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



    title: {
        text: 'Kisaran Harga Mobil Listrik',
        style: {
            color: "#4a4a4a",
            font: 'bold 2rem "Jost", sans-serif',
            // lineHeight: '2rem'
        }
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
        ],
        labels: {
            // text: null,
            // formatter: function () {
            //     // var a = this.y.toString().replace('.', ',');
            //     // return a + '%';
            // },
            style: {
                // color: "#fafafa",
                font: '14px "Jost", sans-serif',
                // lineHeight: '2rem'
                textOutline: false
            }
        },
    },

    yAxis: {
        title: {
            text: 'Harga'
        },
        labels: {
            // text: null,
            // formatter: function () {
            //     // var a = this.y.toString().replace('.', ',');
            //     // return a + '%';
            // },
            style: {
                // color: "#fafafa",
                font: '14px "Jost", sans-serif',
                // lineHeight: '2rem'
                textOutline: false
            }
        },
    },

    tooltip: {
        valueSuffix: '',
        style: {
            // fontWeight: 'bold',
            fontFamily: 'Jost',
            fontSize: '14px'
        }
        // pointFormat: '{series.name}: <b>{point.y}</b>',
    },

    plotOptions: {
        columnrange: {
            borderRadius: '50%',
            dataLabels: {
                enabled: true,
                // format: '{y}'
                style: {
                    // color: "#fafafa",
                    font: 'normal 16px "Jost", sans-serif',
                    // lineHeight: '2rem'
                    fontWeight: 'normal',
                    textOutline: false
                },
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
