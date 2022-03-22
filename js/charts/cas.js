// draw a chart
Reveal.addEventListener('ready', function (event) {
  var all_dates = {
    date: [1965, 1982, 1982, 1993, 1998, 2004],
    name: ["Axiom", "Maxima", "Maple", "Magma", "Mathematica", "SageMath"]
  };

  var ctx = document.getElementById('cas-timeline').getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'scatter',

    // The data for our dataset
    data: {
        datasets: [{
            pointBackgroundColor: '#42affa',
            pointRadius: 5,
            data: all_dates.date.map(x => { return {x: x, y: 0}; })
        }]
    },

    // // Configuration options go here
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
      scales: {
        yAxes: [{
          display: false,
          gridLines: {
            display: false,
          },
          ticks: {min: -1, max: 1},
        }],
        xAxes: [{
          type: 'linear',
          position: 'bottom',
          gridLines: {
            color: "black",
            drawBorder: false,
            major: {
              display: false,
              color: "black",
            },
            ticks: {min: 1960, max: 2020},
            // display: false,
          },
          ticks: {fontColor: "black"}
        }],
      }
    }
  });

});