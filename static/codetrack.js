function start() {
  const circularProgress = document.querySelectorAll(".circular-progress");
  Array.from(circularProgress).forEach((progressBar) => {
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
      progressBar.style.background = `conic-gradient(${progressColor} ${startValue * 3.6
        }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
      if (startValue === endValue) {
        clearInterval(progress);
      }
    }, speed);
  });

  google.charts.load('current', { 'packages': ['line'] });
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Day');
    data.addColumn('number', 'Leetcode');
    data.addColumn('number', 'Codeforces');
    data.addColumn('number', 'CodeChef');
    data.addRows([
      [1, 37.8, 80.8, 41.8],
      [2, 30.9, 69.5, 32.4],
      [3, 25.4, 57, 25.7],
      [4, 11.7, 18.8, 10.5],
      [5, 11.9, 17.6, 10.4],
      [6, 8.8, 13.6, 7.7],
      [7, 7.6, 12.3, 9.6],
      [8, 12.3, 29.2, 10.6],
      [9, 16.9, 42.9, 14.8],
      [10, 12.8, 30.9, 11.6],
      [11, 5.3, 7.9, 4.7],
      [12, 6.6, 8.4, 5.2],
      [13, 4.8, 6.3, 3.6],
      [14, 4.2, 6.2, 3.4]
    ]);
    var options = {
      chart: {
        title: 'Rating',
        subtitle: 'Refresh for latest data'
      },
      width: 540,
      height: 300
    };
    var chart = new google.charts.Line(document.getElementById('linechart_material'));
    chart.draw(data, google.charts.Line.convertOptions(options));
  }
}