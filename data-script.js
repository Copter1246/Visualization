// Premier Leauge Team Data that consists of the team name, stadium name, trophy won, position, points, and information.
const Teams_data = [
  {
    "lng": -2.292279,
    "lat": 53.463493,
    "Teams": "Manchester United",
    "Stadium": "Old Trafford",
    "Trophy": "🏆 x 20",
    "Position": "8th place",
    "Point": [66, 74, 58, 75, 60],
    "Information": "Manchester United Football Club, known as the Red Devils, is based in Old Trafford, Greater Manchester. They have a record 20 top-flight titles and remain one of the most successful clubs in English football history."
  },
  {
    "lng": -2.200941 + 0.35,
    "lat": 53.483135,
    "Stadium": "Etihad Stadium",
    "Trophy": "🏆 x 9",
    "Position": "🥇 1st place",
    "Teams": "Manchester City",
    "Point": [98, 86, 93, 89, 91],
    "Information": "Manchester City, based in Manchester and managed by Pep Guardiola, have dominated English football in recent years, securing multiple league titles including the 2024 championship."
  },
  {
    "lng": -2.961425 + 0.3,
    "lat": 53.430759,
    "Stadium": "Anfield",
    "Trophy": "🏆 x 19",
    "Position": "4th place",
    "Teams": "Liverpool",
    "Point": [97, 99, 69, 67, 68],
    "Information": "Liverpool FC, founded in 1892, is a Merseyside club known for their passionate fans and six European Cups. They continue to be a top-four Premier League contender."
  },
  {
    "lng": -0.127625 + 0.15,
    "lat": 51.503614 + 0.4,
    "Stadium": "Emirates Stadium",
    "Trophy": "🏆 x 13",
    "Position": "🥈 2nd place",
    "Teams": "Arsenal",
    "Point": [70, 56, 61, 84, 88],
    "Information": "Arsenal FC, based in North London, have resurged under Mikel Arteta. They finished 2nd in both 2023 and 2024 Premier League seasons."
  },
  {
    "lng": -0.340623,
    "lat": 51.556021 + 0.4,
    "Stadium": "Tottenham Hotspur Stadium",
    "Trophy": "🏆 x 2",
    "Position": "5th place",
    "Teams": "Tottenham Hotspur",
    "Point": [71, 59, 62, 60, 69],
    "Information": "Tottenham Hotspur, or Spurs, play at a state-of-the-art stadium in North London and maintain their reputation as consistent European competition challengers."
  },
  {
    "lng": -1.622539,
    "lat": 54.975170,
    "Stadium": "St James' Park",
    "Trophy": "🏆 x 4",
    "Position": "6th place",
    "Teams": "Newcastle United",
    "Point": [45, 44, 45, 71, 67],
    "Information": "Newcastle United, backed by new ownership, have re-emerged as a Premier League powerhouse, competing in Europe and finishing strong in recent seasons."
  },
  {
    "lng": -0.278126 + 0.375,
    "lat": 51.481663 + 0.055,
    "Stadium": "Stamford Bridge",
    "Trophy": "🏆 x 6",
    "Position": "9th place",
    "Teams": "Chelsea",
    "Point": [72, 66, 67, 44, 61],
    "Information": "Chelsea FC, despite managerial turnover, remains a major club in English football. Their recent rebuild has started to show results."
  },
  {
    "lng": -1.884722 + 0.05,
    "lat": 52.509167 - 0.05,
    "Stadium": "Villa Park",
    "Trophy": "🏆 x 7",
    "Position": "🥉 3rd place",
    "Teams": "Aston Villa",
    "Point": [17, 35, 55, 61, 72],
    "Information": "Aston Villa have returned to prominence with a top-four finish and European football, showcasing consistency under Unai Emery."
  },
  {
    "lng": -0.305706 - 0.475,
    "lat": 51.487219 + 0.075,
    "Stadium": "Gtech Community Stadium",
    "Trophy": "🏆 x 0",
    "Position": "10th place",
    "Teams": "Brentford",
    "Point": [0, 0, 46, 59, 56],
    "Information": "Brentford FC, based in West London, continue to exceed expectations in the Premier League with efficient management and smart recruitment."
  },
  {
    "lng": -0.236786 - 0.1,
    "lat": 51.475 + 0.1,
    "Stadium": "Craven Cottage",
    "Trophy": "🏆 x 0",
    "Position": "11th place",
    "Teams": "Fulham",
    "Point": [43, 26, 28, 52, 54],
    "Information": "Fulham FC, situated by the River Thames in London, has enjoyed relative stability since returning to the top flight."
  },
  {
    "lng": -2.128139 - 0.15,
    "lat": 52.590278,
    "Stadium": "Molineux Stadium",
    "Trophy": "🏆 x 3",
    "Position": "13th place",
    "Teams": "Wolverhampton Wanderers",
    "Point": [57, 59, 45, 41, 46],
    "Information": "Wolves maintain a competitive Premier League presence with strong home form and a core of seasoned players."
  },
  {
    "lng": -1.573049,
    "lat": 53.777782,
    "Stadium": "Elland Road",
    "Trophy": "🏆 x 3",
    "Position": "Promoted",
    "Teams": "Leeds United",
    "Point": [47, 33, 59, 38, 84],
    "Information": "Leeds United return to the Premier League for 2024–25 after topping the Championship table with high-octane football."
  },
  {
    "lng": -1.133333 + 0.35,
    "lat": 52.633331,
    "Stadium": "King Power Stadium",
    "Trophy": "🏆 x 1",
    "Position": "Promoted",
    "Teams": "Leicester City",
    "Point": [52, 62, 66, 52, 87],
    "Information": "Relegated in 2023, Leicester City bounced back immediately by winning the Championship title and rejoining the top flight."
  },
  {
    "lng": 1.1482,
    "lat": 52.0567,
    "Stadium": "Portman Road",
    "Trophy": "🏆 x 1",
    "Position": "Promoted",
    "Teams": "Ipswich Town",
    "Point": [0, 0, 0, 0, 96],
    "Information": "Ipswich Town secured promotion to the Premier League for the first time in over two decades, finishing 2nd in the 2023–24 Championship season."
  },
  {
    "lng": -0.065787,
    "lat": 50.860958,
    "Stadium": "Amex Stadium",
    "Trophy": "🏆 x 0",
    "Position": "7th place",
    "Teams": "Brighton & Hove Albion",
    "Point": [41, 41, 51, 62, 65],
    "Information": "Brighton has become a model for sustainable success, regularly finishing in the top half and playing exciting, possession-based football."
  }
];

// City data for the map
const City_data = [{"lng": -1.254449, "City": "Oxford", "lat": 51.754845},
 {"lng": -1.600000-0.25, "City": "Newcastle", "lat": 54.966667},
 {"lng": -1.778197, "City": "Birmingham", "lat": 52.412811+0.15},
 {"lng": -1.133333+0.35, "City": "Leicester", "lat": 52.633331},
 {"lng": -1.150000+0.1, "City": "Nottingham", "lat": 	52.950001+0.11},
 {"lng": -1.466667-0.15, "City": "Derby", "lat": 52.916668-0.1},
 {"lng": -1.466667+0.05, "City": "Sheffield", "lat": 53.383331},
 {"lng": -2.244644, "City": "Manchester", "lat": 53.483959+0.075},
 {"lng": -2.983333+0.2, "City": "Liverpool", "lat": 53.400002-0.35},
 {"lng": -2.692337, "City": "Preston", "lat": 53.765762},
 {"lng": -2.944000, "City": "Carlisle", "lat": 54.890999},
 {"lng": -2.360000, "City": "Bath", "lat": 51.380001-0.1},
 {"lng": -2.587910, "City": "Bristol", "lat": 51.454514},
 {"lng": -3.943646, "City": "Swansea", "lat": 51.621441},
 {"lng": -3.179090-0.15, "City": "Cardiff", "lat": 	51.481583},
 {"lng": -1.404351, "City": "Southampton", "lat": 50.909698+0.1},
 {"lng": -0.152778+0.3, "City": "Brighton", "lat": 50.827778+0.1},
 {"lng": -0.335827, "City": "Hull", "lat": 53.767750+0.005},
 {"lng": -1.548567+0.05, "City": "Leeds", "lat": 53.801277+0.075},
 {"lng": 	0.119167, "City": "Cambridge", "lat": 52.205276},
 {"lng": 1.297355, "City": "Norwich", "lat": 52.630886},
 {"lng": 1.1482, "City": "Ipswich", "lat": 52.0567},
 {"lng": -1.883377-0.55, "City": "Bournemouth", "lat": 50.718395+0.1},];

// Capital city data for the map
const capital_city = [ {"lng": -0.118092-0.5, "City": "London⭐", "lat": 51.509865+0.05},];

// Hide the details panel initially
document.getElementById("details-panel").style.display = "none";

var margin = {top: 0, left:0,right:0,bottom:0},
 height = 1350,
 width = 1750;

// Get SVG dimensions from the map div
const mapDiv = document.getElementById("map");
const mapWidth = window.innerWidth; // Use window width instead
const mapHeight = window.innerHeight; // Use window height instead

// Create SVG element for the map
const svg = d3.select("#map")
  .append("svg")
  .attr("width", mapWidth)
  .attr("height", mapHeight);

// Create a group for all map elements that will be transformed when zoomed/panned
const mapGroup = svg.append("g");

// Add zoom behavior
const zoom = d3.zoom()
  .scaleExtent([0.5, 8])
  .on("zoom", zoomed);

// Apply zoom behavior to the SVG and center the initial view
svg.call(zoom);

// Define the zoom function
function zoomed() {
  mapGroup.attr("transform", d3.event.transform);
}

// Create an SVG element to contain the map and append it to the #map div
var svgMap = mapGroup.append("g")
  .attr("id", "svg_id");

// Define a function to update the details panel with information about the selected image
function showDetails(d) {
  console.log("Clicked on image:", d.Teams);
  console.log("Stadium data:", d.Stadium); // Add this line to debug stadium data
  
  // Display the details panel
  document.getElementById("details-panel").style.display = "block";

  // Clear the current contents of the details panel
  var panel = d3.select("#details-panel");
  panel.selectAll("*").remove();
   
  // Add the image to the panel
  var img = panel.append("img")
    .attr("src", `images/${d.Teams.toLowerCase()}.stadium.jpeg`)
    .classed("detail-image", true);
    
  // Add the name of the team to the panel
  panel.append("h3")
    .text("Stadium - " + d.Stadium);
  panel.append("h1")
    .text(d.Teams);
  panel.append("h2")
    .text("Current Position - " + d.Position);
  panel.append("h2")
    .text(" English Champion " + d.Trophy);
  panel.append("h3")
    .text(d.Information);
  panel.append("h2")
    .text("Points last 5 seasons in premier league");

  // Define the width of the chart
  var panelWidth = 450; // Slightly smaller to fit in the panel better
  // Define the margins and dimensions for the chart
  var margin = { top: 20, right: 20, bottom: 30, left: 40 };
  var chartWidth = panelWidth - margin.left - margin.right;
  var chartHeight = 300; // Fixed height that fits well

  // Define the SVG element and its properties
  var svg = panel.append("svg")
    .attr("width", panelWidth)
    .attr("height", chartHeight)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Define the x and y scales
  var x = d3.scaleBand()
    .range([0, panelWidth - margin.left - margin.right])
    .padding(0.1)
    .domain(["2019-20", "2020-21", "2021-22", "2022-23", "2023-24"]);

  var y = d3.scaleLinear()
    .range([chartHeight - margin.top - margin.bottom, 0])
    .domain([0, d3.max(d.Point)]);

  // Define the x and y axes
  var xAxis = d3.axisBottom(x);
  var yAxis = d3.axisLeft(y).ticks(5);

  // Append the x axis to the SVG element
  svg.append("g")
    .attr("transform", "translate(0," + (chartHeight - margin.top - margin.bottom) + ")")
    .call(xAxis);

  // Append the y axis to the SVG element
  svg.append("g")
    .call(yAxis)
    .append("text")
    .attr("fill", "#000")
    .attr("transform", "rotate(-90)")
    .attr("y", -37.5)
    .attr("x", -(chartHeight) / 2)
    .attr("dy", "0.71em")
    .attr("text-anchor", "middle")
    .attr("font-size", "1.25em")
    .text("Points");

  // Append the bars to the SVG element
  svg.selectAll(".bar")
    .data(d.Point)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d, i) { return x(["2019-20", "2020-21", "2021-22", "2022-23", "2023-24"][i]); })
    .attr("y", function(d) { return y(d); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return chartHeight - margin.top - margin.bottom - y(d); });
}

// Define the projection and path for the map
var prjctn = d3.geoNaturalEarth1()
.translate([width/2, height/2])
 .scale(13500)
 .center([-1, 52.05])
var path = d3.geoPath().projection(prjctn);

//UK MAP
 d3.json('https://yamu.pro/gb.json', function(error, data) 
 {
  // Log any error
  console.log(data);
  // Draw the map
  svgMap.selectAll(".country")
  .data(data.features)
  .enter().append("path")
  .attr("class","country")
  .attr("d",path)
  .lower()
 }
);
 
// Create a projection function to convert lat/long to screen coordinates
 svgMap.selectAll('.teams')
   .data(Teams_data)
   .enter().append('svg:image')
   .attr("class","teams")
   .attr("transform", function (d) {
    // Use the projection function to convert lat/long to screen coordinates
     return "translate(" + -20 / 2 + "," + -20 / 2 + ")";
   })
   // Add the image
   .attr("xlink:href", function (d) {
     return `images/${d.Teams.toLowerCase()}.png`;
   })
   .attr("x",function(d){
     var coords = prjctn([d.lng, d.lat])
     return coords[0];
   })
   .attr("y",function(d){
     var coords = prjctn([d.lng, d.lat])
     return coords[1]
   })
   // Set the function to be called when the image is clicked
   .on("click", function(d) {
    // Show the details of the selected image in the details panel
    showDetails(d);
  })
  // Set tooltip function to be called when the image is hovered
   .attr("title", function(d) { return d.Teams; 
  }) 
  // Add title attribute with team name
   .style("pointer-events", "all") // Enable mouse events on the image

   .style("cursor", "pointer") // Change cursor to indicate the image is clickable

   // Show tooltip on mouseover
   .on("mouseover", function() { 
    tooltip.style("visibility", "visible"); 
  }) 
  
  // Move tooltip with mouse and update its content
   .on("mousemove", function(d) { 
     tooltip.style("top", (d3.event.pageY-10) + "px")
     .style("left", (d3.event.pageX+10) + "px")
            .html(d.Teams); }) 

    // Hide tooltip on mouseout
    .on("mouseout", function() { tooltip.style("visibility", "hidden"); 
  });
   
// Create tooltip element
var tooltip = d3
.select("body")
.append("div")
.style("position", "absolute")
.style("z-index", "10")
.style("visibility", "hidden")
.style("background-color", "white")
.style("opacity", "0.9")
.style("border", "0px solid black")
.style("border-radius", "10px")
.style("padding", "5px")
.style("color", "rgb(109, 101, 101)")
.style("font-size", "18px")
.style("font-weight", "bold");

//city names
svgMap.selectAll('.City')
  .data(City_data)
  .enter()
  .append('text')
  .attr('class','City')
  .lower()
  .attr("x",function(d){
    console.log(d);
    var coords = prjctn([d.lng, d.lat])
    return coords[0];
  })
  .attr("y",function(d){
    var coords = prjctn([d.lng, d.lat])
    return coords[1]
  })
  .text(function(d){
    var coords = prjctn([d.lng, d.lat])
    console.log(d.City);
    return d.City;
  })
   .attr('dx', '0')
   .attr('dy', '5');
  
   //capital city names
   svgMap.selectAll('.Capital')
  .data(capital_city)
  .enter()
  .append('text')
  .attr('class','Capital')
  .lower()
  .attr("x",function(d){
    console.log(d);
    var coords = prjctn([d.lng, d.lat])
    return coords[0];
  })
  .attr("y",function(d){
    var coords = prjctn([d.lng, d.lat])
    return coords[1]
  })
  .text(function(d){
    var coords = prjctn([d.lng, d.lat])
    console.log(d.Capital);
    return d.City;
  })

