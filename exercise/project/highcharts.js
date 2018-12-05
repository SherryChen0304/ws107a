var showChart = function() {  
    var chart = {
       type: 'bar'
    };
    var title = {
       text: '技能'   
    };
    var subtitle = {
       text: '程式語言'  
    };
    var xAxis = {
       categories: ['C、C++、C#', 'HTML、CSS', 'JavaScript'],
       title: {
          text: null
       }
    };
    var yAxis = {
       min: 0,
       title: {
          text: '語言能力',
          align: 'high'
       },
       labels: {
          overflow: 'justify'
       }
    };
    var tooltip = {
       valueSuffix: null
    };
    var plotOptions = {
       bar: {
          dataLabels: {
             enabled: true
          }
       }
    };
    var legend = {
       layout: 'vertical',
       align: 'right',
 
       verticalAlign: 'top',
     //   調整「程度」框框的位置
       x: -10,
       y: 20,
       floating: true,
       borderWidth: 1,
       backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
       shadow: true
    };
    var credits = {
       enabled: false
    };
    
    var series= [{
          name: '程度',
             data: [70, 60, 50]
         }
    ];     
       
    var json = {};   
    json.chart = chart; 
    json.title = title;   
    json.subtitle = subtitle; 
    json.tooltip = tooltip;
    json.xAxis = xAxis;
    json.yAxis = yAxis;  
    json.series = series;
    json.plotOptions = plotOptions;
    json.legend = legend;
    json.credits = credits;
    $('#container').highcharts(json);
   
 }