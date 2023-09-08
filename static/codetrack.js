
const circularProgress = document.querySelectorAll(".circular-progress");
Array.from(circularProgress).forEach((progressBar) => {

    //percentile bar
  const progressValue = progressBar.querySelector(".percentage");
  const innerCircle = progressBar.querySelector(".inner-circle");
  let startValue = 0,
    endValue = Number(progressBar.getAttribute("data-percentage")),
    speed = 50,
    progressColor = progressBar.getAttribute("data-progress-color");

  const progress = setInterval(() => {
    startValue++;
    progressValue.textContent = `${startValue}%ile`;
    progressValue.style.color = `${progressColor}`;

    innerCircle.style.backgroundColor = `${progressBar.getAttribute(
      "data-inner-circle-color"
    )}`;

    progressBar.style.background = `conic-gradient(${progressColor} ${
      startValue * 3.6
    }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
    if (startValue === endValue) {
      clearInterval(progress);
    }
  }, speed);
});


    google.charts.load('current', {'packages':['line']});
      google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Day');
      data.addColumn('number', 'Leetcode');
      data.addColumn('number', 'Codeforces');
      data.addColumn('number', 'CodeChef');

      data.addRows([
        [1,  1500, 300, 1000],
        [2,  1483, 546, 1003],
        [3,  1483, 1300, 1400],
        [4,  1483, 1300, 1400],
        [5,  1483, 1300, 1400],
        [6,  1483, 1300, 1400],
        [7,   1483, 1300, 1400],
        [8,  1483, 1300, 1400],
        [9,  1483, 1300, 1400],
        [10, 1483, 1300, 1400],
        [11,  1483, 1300, 1400],
        [12,  1483, 1300, 1400],
        [13, 1483, 1300, 1400],
        [14,  1483, 1300, 1400]
      ]);

      var options = {
        chart: {
          title: 'Box Office Earnings in First Two Weeks of Opening',
          subtitle: 'Rating'
        },
        width: 450,
        height: 250,
      };

      var chart = new google.charts.Line(document.getElementById('linechart_material'));

      chart.draw(data, google.charts.Line.convertOptions(options));
    }