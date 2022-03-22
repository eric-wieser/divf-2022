
// draw a chart
Reveal.addEventListener('ready', function (event) {
  var all_dates = {
    date: [1973, 1986, 1988, 1989, 1993, 2007],
    name: ["Mizar", "Isabelle", "HOL Family", "Coq", "Metamath", "Agda"]
  };
  var lean_dates = {
    date: [2013, 2015, 2016],
    name: ["Lean", "Lean 2", "Lean 3",],
  };
  var lean_pending_dates = {
    date: [2022],
    name: ["Lean 4"],
  }

  var ctx = document.getElementById('lean-timeline').getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'scatter',

    // The data for our dataset
    data: {
        datasets: [{
            pointBackgroundColor: '#42affa',
            pointRadius: 5,
            data: all_dates.date.map(x => { return {x: x, y: 0}; })
        }, {
            pointBackgroundColor: 'green',
            pointRadius: 5,
            data: lean_dates.date.map(x => { return {x: x, y: 0}; })
        }, {
            pointBackgroundColor: 'orange',
            pointRadius: 5,
            data: lean_pending_dates.date.map(x => { return {x: x, y: 0}; })
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
            ticks: {min: 1965, max: 2025},
            // display: false,
          },
          ticks: {fontColor: "black"}
        }],
      }
    }
  });

});