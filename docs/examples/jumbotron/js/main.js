const CHART = document.getElementById('femaleChart');
const CHART2 = document.getElementById('lgbtChart');
const CHART3 = document.getElementById('pocChart');
const CHART4 = document.getElementById('allChart');
const CHART5 = document.getElementById('wadeChart');

var wadeData = {
  labels: ["America Chavez", "Angela", "Annabelle Riggs", "Billy Kaplan", "Black Cat", "Bobby Drake", "Daken", "Elektra", "Heidi Sladkin", "Hercules", "Jennifer Kale", "Jonathan Clay", "Julie Power", "Karolina Dean", "Loki", "Raven Darkholme", "Theodore Altman", "Victor Borkowski", "Wade Wilson", "Xian Coy Manh"],
  datasets: [  {
        label: "LGBT Title Characters by Series Count",
        fill: true,
        lineTension: .1,
        capBezierPoints:true,
        backgroundColor: "rgba(255, 149, 5, 0.7)",
        borderColor: "rgba(255, 149, 5, 1)",
        borderCapStyle: 'round',
        borderJoinStyle: 'miter',
        pointBorderColor: "rgba(255, 170, 10, 1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: "rgba(255, 170, 10, 1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [2, 1, 1, 1, 5, 3, 3, 1, 1, 7, 2, 2, 2, 1, 8, 2, 1, 2, 55, 2],
        spanGaps: false,
    },
  ],
};

var allChartData = {
  labels: [1939, 1940, 1941, 1943, 1944, 1945, 1947, 1948, 1949, 1950, 1953, 1954, 1955, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2013, 2014, 2015, 2016],
  datasets: [
    {
        label: "Diversity Score Over Time",
        fill: true,
        lineTension: .1,
        capBezierPoints:true,
        backgroundColor: "rgba(255, 149, 5, 0.7)",
        borderColor: "rgba(255, 149, 5, 1)",
        borderCapStyle: 'round',
        borderJoinStyle: 'miter',
        pointBorderColor: "rgba(255, 170, 10, 1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: "rgba(255, 170, 10, 1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0, 0, 0, 0.006366078, 0, 0.006366078, 0.016294264, 0, 0.021803151, 0, 0.006366078, 0.006366078, 0, 0.021803151, 0.012732156, 0.012732156, 0.053633541, 0.019098234, 0.047267463, 0.022660342, 0, 0.019098234, 0.019856373, 0, 0.016294264, 0.106078443, 0.048882793, 0.068739166, 0.032588529, 0.012732156, 0.032588529, 0.044463493, 0.044463493, 0.057195649, 0.050829571, 0.065177058, 0.032588529, 0.047267463, 0.041758577, 0.022660342, 0, 0.009928186, 0.016294264, 0.009928186, 0.041659523, 0.05881098, 0.021803151, 0.060757758, 0.038097415, 0.006366078, 0.021803151, 0.138899366, 0.035392499, 0.006366078, 0.035392499, 0.077052022, 0.185077243, 0.214960855, 0.31186925, 0.167693392, 0.160470122, 0.299137094, 0.414187477, 1, 0.381499895, 0.213147418, 0.543916795, 0.608533821, 0.585675372],
        spanGaps: false,
    },



  ],
};

var lgbtChartData = {
  labels: [1939, 1940, 1941, 1943, 1944, 1945, 1947, 1948, 1949, 1950, 1953, 1954, 1955, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  datasets: [
    {
        label: "Featured LGBT Characters",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(0, 204, 153,.7)",
        borderColor: "rgba(0, 204, 153,1)",
        borderCapStyle: 'round',
        borderJoinStyle: 'miter',
        pointBorderColor: "rgba(25, 220, 170,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: "rgba(25, 220, 170, 1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 4, 0, 0, 0, 1, 3, 2, 3, 1, 2, 3, 6, 23, 7, 1, 5, 10, 8, 10],
        spanGaps: false,
    },
    {
      label: "New Series",
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(0, 168, 232, 0.4)",
      borderColor:"rgba(0, 168, 232, 1)",
      borderCapStyle: 'round',
      borderJoinStyle: 'miter',
      pointBorderColor:"rgba(0, 174, 238, 1)",
      pointBackgroundColor:"#fff",
      pointBorderWidth:1,
      pointHoverRadius: 4,
      pointHoverBackgroundColor: "rgba(0, 174, 238,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [3, 4, 6, 1, 1, 1, 1, 2, 2, 2, 3, 2, 1, 2, 6, 11, 20, 11, 12, 8, 4, 15, 4, 4, 7, 16, 10, 11, 11, 11, 6, 6, 5, 7, 7, 10, 6, 7, 10, 8, 4, 13, 3, 4, 8, 12, 9, 10, 19, 7, 7, 24, 21, 20, 21, 26, 49, 67, 63, 59, 69, 138, 136, 216, 93, 36, 54, 90, 105, 90],
      spanGaps: false,
    },


  ],
};

var femaleChartData = {
  labels: [1939, 1940, 1941, 1943, 1944, 1945, 1947, 1948, 1949, 1950, 1953, 1954, 1955, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  datasets: [
    {
        label: "Featured Female Characters",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(255, 230, 109, 0.7)",
        borderColor: "rgba(255, 230, 109, 1)",
        borderCapStyle: 'round',
        borderJoinStyle: 'miter',
        pointBorderColor: "rgba(240, 240, 125, 1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: "rgba(240, 240, 125, 1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 2, 2, 5, 3, 4, 2, 0, 3, 0, 0, 1, 7, 3, 3, 2, 2, 2, 2, 2, 4, 3, 4, 2, 4, 5, 2, 0, 0, 1, 0, 0, 3, 0, 3, 1, 1, 0, 5, 4, 1, 4, 4, 11, 16, 20, 12, 9, 18, 18, 44, 11, 3, 7, 20, 37, 25],
        spanGaps: false,
    },
    {
      label: "New Series",
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(0, 168, 232, 0.4)",
      borderColor:"rgba(0, 168, 232, 1)",
      borderCapStyle: 'round',
      borderJoinStyle: 'miter',
      pointBorderColor:"rgba(0, 174, 238, 1)",
      pointBackgroundColor:"#fff",
      pointBorderWidth:1,
      pointHoverRadius: 4,
      pointHoverBackgroundColor: "rgba(0, 174, 238,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [3, 4, 6, 1, 1, 1, 1, 2, 2, 2, 3, 2, 1, 2, 6, 11, 20, 11, 12, 8, 4, 15, 4, 4, 7, 16, 10, 11, 11, 11, 6, 6, 5, 7, 7, 10, 6, 7, 10, 8, 4, 13, 3, 4, 8, 12, 9, 10, 19, 7, 7, 24, 21, 20, 21, 26, 49, 67, 63, 59, 69, 138, 136, 216, 93, 36, 54, 90, 105, 90],
      spanGaps: false,
    },


  ],
};

var lgbtChartData = {
  labels: [1939, 1940, 1941, 1943, 1944, 1945, 1947, 1948, 1949, 1950, 1953, 1954, 1955, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  datasets: [
    {
        label: "Featured LGBT Characters",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(0, 204, 153,.7)",
        borderColor: "rgba(0, 204, 153,1)",
        borderCapStyle: 'round',
        borderJoinStyle: 'miter',
        pointBorderColor: "rgba(25, 220, 170,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: "rgba(25, 220, 170, 1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 4, 0, 0, 0, 1, 3, 2, 3, 1, 2, 3, 6, 23, 7, 1, 5, 10, 8, 10],
        spanGaps: false,
    },
    {
      label: "New Series",
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(0, 168, 232, 0.4)",
      borderColor:"rgba(0, 168, 232, 1)",
      borderCapStyle: 'round',
      borderJoinStyle: 'miter',
      pointBorderColor:"rgba(0, 174, 238, 1)",
      pointBackgroundColor:"#fff",
      pointBorderWidth:1,
      pointHoverRadius: 4,
      pointHoverBackgroundColor: "rgba(0, 174, 238,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [3, 4, 6, 1, 1, 1, 1, 2, 2, 2, 3, 2, 1, 2, 6, 11, 20, 11, 12, 8, 4, 15, 4, 4, 7, 16, 10, 11, 11, 11, 6, 6, 5, 7, 7, 10, 6, 7, 10, 8, 4, 13, 3, 4, 8, 12, 9, 10, 19, 7, 7, 24, 21, 20, 21, 26, 49, 67, 63, 59, 69, 138, 136, 216, 93, 36, 54, 90, 105, 90],
      spanGaps: false,
    },


  ],
};

var pocChartData = {
  labels: [1939, 1940, 1941, 1943, 1944, 1945, 1947, 1948, 1949, 1950, 1953, 1954, 1955, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  datasets: [
    {
        label: "Featured PoC Characters",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(255, 104, 107, 0.7)",
        borderColor: "rgba(255, 104, 107, .8)",
        borderCapStyle: 'round',
        borderJoinStyle: 'miter',
        pointBorderColor: "rgba(255, 110, 110, .8)",
        pointBackgroundColor: "rgba(255, 166, 158,1)",
        pointBorderWidth: 1,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: "rgba(255, 115, 115, 1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 1, 4, 3, 5, 2, 0, 2, 1, 1, 1, 1, 4, 2, 0, 1, 1, 0, 1, 1, 1, 2, 4, 0, 2, 1, 0, 0, 2, 1, 0, 1, 3, 5, 7, 12, 7, 6, 12, 17, 22, 16, 2, 6, 20, 20, 21],
        spanGaps: false,
    },
    {
      label: "New Series",
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(0, 168, 232, 0.4)",
      borderColor:"rgba(0, 168, 232, 1)",
      borderCapStyle: 'round',
      borderJoinStyle: 'miter',
      pointBorderColor:"rgba(0, 174, 238, 1)",
      pointBackgroundColor:"#fff",
      pointBorderWidth:1,
      pointHoverRadius: 4,
      pointHoverBackgroundColor: "rgba(0, 174, 238,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [3, 4, 6, 1, 1, 1, 1, 2, 2, 2, 3, 2, 1, 2, 6, 11, 20, 11, 12, 8, 4, 15, 4, 4, 7, 16, 10, 11, 11, 11, 6, 6, 5, 7, 7, 10, 6, 7, 10, 8, 4, 13, 3, 4, 8, 12, 9, 10, 19, 7, 7, 24, 21, 20, 21, 26, 49, 67, 63, 59, 69, 138, 136, 216, 93, 36, 54, 90, 105, 90],
      spanGaps: false,
    },


  ],
};

window.onload = function() {

let lineChart = new Chart(CHART, {
    type: 'line',

    data: femaleChartData,

    options: {
        //legends
        legend:{
          fullWidth: false,
          labels: {
            boxWidth: 20,
          },
        },

        //title
        title: {
          display:true,
          fullWidth: false,
          text: "Featured Female Characters in Marvel Comics Over Time",
          fontSize:16,
        },

        //scales
        scales: {
          xAxes: [{

            ticks: {
              maxTicksLimit:12
            },
            scaleLabel: {
              display: true,
              labelString:'Year of Series Release',
              fontSize:14
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString:'Number of Series',
              fontSize:14
            }
          }],
        },
        //configuring tooltips
        tooltips : {
          enabled: true,
          mode: 'index',
          bodySpacing: 10,
          titleMarginBottom: 10,
          callbacks: {

          }

        }

    },
    multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>"

  });

let lineChart2 = new Chart(CHART2, {
      type: 'line',

      data: lgbtChartData,

      options: {
          //legends
          legend:{
            fullWidth: false,
            labels: {
              boxWidth: 20,
            },
          },

          //title
          title: {
            fontSize:16,
            display:true,
            fullWidth: false,
            text: "Featured LGBT Characters in Marvel Comics Over Time"
          },

          //scales
          scales: {
            xAxes: [{

              ticks: {
                maxTicksLimit:12
              },
              scaleLabel: {
                display: true,
                labelString:'Year of Series Release',
                fontSize:14
              }
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString:'Number of Series',
                fontSize:14
              }
            }],
          },
          //configuring tooltips
          tooltips : {
            enabled: true,
            mode: 'index',
            bodySpacing: 10,
            titleMarginBottom: 10,
            callbacks: {

            }

          }

      },
      multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>"

    });

let lineChart3 = new Chart(CHART3, {
          type: 'line',

          data: pocChartData,

          options: {
              //legends
              legend:{
                fullWidth: false,
                labels: {
                  boxWidth: 20,
                },
              },

              //title
              title: {
                fontSize:16,
                display:true,
                fullWidth: false,
                text: "Featured PoC Characters in Marvel Comics Over Time"
              },

              //scales
              scales: {
                xAxes: [{

                  ticks: {
                    maxTicksLimit:12
                  },
                  scaleLabel: {
                    display: true,
                    labelString:'Year of Series Release',
                    fontSize:14
                  }
                }],
                yAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString:'Number of Series',
                    fontSize:14
                  }
                }],
              },
              //configuring tooltips
              tooltips : {
                enabled: true,
                mode: 'index',
                bodySpacing: 10,
                titleMarginBottom: 10,
                callbacks: {

                }

              }

          },
          multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>"

        });

  let lineChart4 = new Chart(CHART4, {
            type: 'line',

            data: allChartData,

            options: {
                //legends
                legend:{
                  fullWidth: false,
                  labels: {
                    boxWidth: 20,
                  },
                },

                //title
                title: {
                  fontSize:16,
                  display:true,
                  fullWidth: false,
                  text: "Representation in Marvel Comics Over Time"
                },

                //scales
                scales: {
                  xAxes: [{

                    ticks: {
                      maxTicksLimit:12
                    },
                    scaleLabel: {
                      display: true,
                      labelString:'Year of Series Release',
                      fontSize:14
                    }
                  }],
                  yAxes: [{
                    scaleLabel: {
                      display: true,
                      labelString:'Standardized Diversity Score',
                      fontSize:14
                    }
                  }],
                },
                //configuring tooltips
                tooltips : {
                  enabled: true,
                  mode: 'index',
                  bodySpacing: 10,
                  titleMarginBottom: 10,
                  callbacks: {

                  }

                }

            },
            multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>"

          });

var stackedLine = new Chart(CHART5, {
    type: 'bar',
    data: wadeData,
    options: {
        scales: {
            xAxes: [{
                stacked: true,
                scaleLabel:{
                  display:false
                }
            }],
            yAxes: [{
                stacked: true
            }],
        }
    }
});
};
