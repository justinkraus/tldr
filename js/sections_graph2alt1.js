var oldWidth = 0
function render(){
  if (oldWidth == innerWidth) return
  oldWidth = innerWidth

  // var width = height = d3.select('#graph').node().offsetWidth
  var height = d3.select('#graph').node().offsetWidth
  var width = height + (height/16)
  var r = width/16


  if (innerWidth <= 925){
    width = innerWidth
    height = innerHeight*.7
  }

  // --------------------------------------------
  // graph #1 - Readability

  //Create Static Variables

  //setting margins and inner area for graph #1
  const MARGIN       = { top: 0, right: 0, bottom: 50, left: 0 };
  const INNER_WIDTH  = width - MARGIN.left - MARGIN.right;
  const INNER_HEIGHT = height - MARGIN.top - MARGIN.bottom;
  //create svg 1
  var svg1 = d3.select('.container-1 #graph').html('')
    .append('svg')
      .attrs({width: width, height: height})
      .append('g')
        .attr('transform', 'translate(' + MARGIN.left + ',' + MARGIN.top + ')');

//readability defined text blocks

  var readableText = [{"group": "moreReadable" , "x": 32, "y": 4, "dy": 1.25, "fill": "SteelBlue", "fontsize": "1em", "text": "Shorter Words"},
                       {"group": "moreReadable" , "x": 32, "y": 4, "dy": 2.25, "fill": "SteelBlue", "fontsize": "1em", "text": "Shorter Sentences"},
                       {"group": "lessReadable" , "x": 10, "y": 2, "dy": 1.25, "fill": "Crimson", "fontsize": "1em", "text": "Longer Words"},
                       {"group": "lessReadable" , "x": 10, "y": 2,"dy": 2.25, "fill": "Crimson", "fontsize": "1em", "text": "Longer Sentences"}]

  svg1.selectAll('g')
  .select('g')
  .data(readableText)
  .enter()
  .append('text')
  // .attr("id", function(d){return d.group})
  .attr("class", "readableText")
  .attr("x", function(d){return INNER_WIDTH/6 * d.y})
  .attr("y", function(d){return (INNER_HEIGHT/3)})
  .attr("dy",function(d){return d.dy + "em"})
  // .attr("dy", "1.2em")
  .text(function(d){return d.text})
  .style('opacity', 0)
  // .style('font-size', '1.5em')
  .style('fill', function(d){return d.fill})
  .style("text-anchor", "middle")


// svg1.append('text')
// .attr("class", "readableText")
// .attr("x", INNER_WIDTH/3.75)
// .attr("y", INNER_HEIGHT/3)
// .attr("dy", "0em")
// .attr("dx", "-1em")
// // .style('font-size', "1.5em")
// .style('opacity', 0)
// .attr("text-anchor", "start")
// .html(function (d){ 
//   return "<tspan dy ='1.5em' style='font-size: 1em; fill: crimson;'>" + "Longer Words" + "</tspan>"
//        + "<tspan dx= '-14%' dy ='1.25em' style='font-size: 1em; fill: crimson;'>" + "Longer Sentences" + "</tspan>";
// });

// svg1.append('text')
// .attr("class", "readableText")
// .attr("x", INNER_WIDTH/4 * 2.35)
// .attr("y", INNER_HEIGHT/3)
// // .attr("dy", "0em")
// .attr("dx", "-1em")
// .attr("text-anchor", "start")
// // .style('font-size', "1.5em")
// .style('opacity', 0)
// .html(function (d){ 
//   return "<tspan dy ='1.5em' style='font-size: 1em; fill: SteelBlue;'>" + "Shorter Words" + "</tspan>"
//        + "<tspan dx= '-15%' dy ='1.25em' style='font-size: 1em; fill: SteelBlue;'>" + "Shorter Sentences" + "</tspan>";
// });

  // gridlabels dataset
  var readableTitle = [{"group": "moreReadable" , "x": 32, "y": 2, "fill": "SteelBlue", "fontsize": "1em", "text": "More Readable"},
                       {"group": "lessReadable" , "x": 10, "y": 2, "fill": "Crimson", "fontsize": "1em", "text": "Less Readable"}]

  svg1.selectAll('g')
  .select('g')
  .data(readableTitle)
  .enter()
  .append('text')
  .attr("id", function(d){return d.group})
  .attr("class", "readableTitle")
  .attr("x", function(d){return INNER_WIDTH/d.x})
  // .attr("y", function(d){return (INNER_HEIGHT/3)})
  // .attr("dy",function(d){return "1" * d.y + "em"})
  .text(function(d){return d.text})
  .style('opacity', 0)
  // .style('font-size', '1.5em')
  .style('fill', function(d){return d.fill})
  .style("text-anchor", "middle")




  // Load readability images
  // Readability image dataset
  var readImgs = [{"group":1, "name": "NP", "img": './images/newspaper.svg', "x": 0, "y": 0},
                {"group":1, "name": "AP", "img": './images/AP.png', "x": 0, "y": 1},
                 {"group":1, "name": "WSJ", "img": './images/WSJ.svg', "x": 0, "y": 2},
                 {"group":1, "name": "NYT", "img": './images/nyt.svg', "x": 0, "y": 3},
                 {"group":2, "name": "NYTBS", "img": './images/nytbs.png', "x": 0, "y": 4},
                 {"group":2, "name": "HSENG", "img": './images/hseng.svg', "x": 0, "y": 5},
                 {"group":2, "name": "IP", "img": './images/inspolicy.svg', "x": 0, "y": 6},
                 {"group":3, "name": "Twitter", "img": './images/twitter.svg', "x": 26, "y": 7},
                 {"group":3, "name": "FB", "img": './images/facebook1.svg', "x": 26, "y": 8},
                 {"group":3, "name": "ACA", "img": './images/aca.svg', "x": 11, "y": 6},
                 {"group":3, "name": "SEC", "img": './images/sec10k.svg', "x": 6, "y": 5},
                 {"group":3, "name": "HLR", "img": './images/hlr.svg', "x": 6, "y": 3},
                 {"group":3, "name": "SCIJ", "img": './images/scij.svg', "x": 1, "y": 4}
                 ]

  // Load readability image dataset
  svg1.selectAll('image')
  .select('image')
  .data(readImgs)
  .enter()
  .append('image')
  .attr("id", function(d){return d.name})
  .attr("class", function(d){return "group"+ d.group})
  // .attr("x", function(d){return (width/30 * 26) * d.x})
  .attr("x", function(d){return width/30 * d.x})
  .attr("y", function(d){return d.y * INNER_HEIGHT/10})
  .attr("width", INNER_WIDTH/10)
  .attr("height", INNER_HEIGHT/10)
  .style('opacity', 0)
  .attr("xlink:href", function(d){return d.img})

  // Create gridlines
  // gridlines dataset
  var gridLineData = [{"lineNum": 0, "x1": 0, "y1": 0, "x2": 0, "y2": .5, "stroke": "darkgrey", "strokewidth": 1, "dasharray": "1,0"},
                    {"lineNum": 1, "x1": 1, "y1": 0, "x2": 1, "y2": .5, "stroke": "darkgrey", "strokewidth": 1, "dasharray": "1,0"},
                    {"lineNum": 2, "x1": 2, "y1": 0, "x2": 2, "y2": .5, "stroke": "darkgrey", "strokewidth": 1, "dasharray": "1,0"},
                    {"lineNum": 3, "x1": 3, "y1": 0, "x2": 3, "y2": .75, "stroke": "lightcoral", "strokewidth": 3, "dasharray": "10,2.5"},
                    {"lineNum": 4, "x1": 4, "y1": 0, "x2": 4, "y2": .5, "stroke": "darkgrey", "strokewidth": 1, "dasharray": "1,0"},
                    {"lineNum": 5, "x1": 5, "y1": 0, "x2": 5, "y2": .5, "stroke": "darkgrey", "strokewidth": 1, "dasharray": "1,0"},
                    {"lineNum": 6, "x1": 6, "y1": 0, "x2": 6, "y2": .5, "stroke": "darkgrey", "strokewidth": 1, "dasharray": "1,0"}]

  // Draw gridlines
  svg1.selectAll('g')
  .select('g')
  .data(gridLineData)
  .enter()
  .append('line')
  .attr("id", function(d){return d.lineNum})
  .attr("class", "grid")
  .attr("x1", function(d){return (INNER_WIDTH/6) * d.x1})
  .attr("y1", function(d){return d.y1})
  .attr("x2", function(d){return (INNER_WIDTH/6) * d.x2})
  .attr("y2", function(d){return (INNER_HEIGHT/10 * 9) + (d.y2* INNER_HEIGHT/10)})
  .style('opacity', 0)
  .style("stroke", function(d){return d.stroke})
  .style("stroke-width", function(d){return d.strokewidth})
  .style("stroke-dasharray", function(d){return (d.dasharray)})

  // gridlabels dataset
  var gridLabelData = [{"group": "level" ,"labelNum": 1, "x": 0, "y": .5, "fill": "darkgrey", "fontsize": ".66em", "text": "Post-graduate"},
                       {"group": "level" ,"labelNum": 2, "x": 1, "y": .5, "fill": "darkgrey", "fontsize": ".66em", "text": "Graduate"},
                       {"group": "level" ,"labelNum": 3, "x": 2, "y": .5, "fill": "darkgrey", "fontsize": ".66em", "text": "College"},
                       {"group": "level" ,"labelNum": 4, "x": 3, "y": .5, "fill": "darkgrey", "fontsize": ".66em", "text": "H.S. Senior"},
                       {"group": "level" ,"labelNum": 5, "x": 4, "y": .5, "fill": "darkgrey", "fontsize": ".66em", "text": "H.S. Freshman"},
                       {"group": "level" ,"labelNum": 6, "x": 5, "y": .5, "fill": "darkgrey", "fontsize": ".66em", "text": "Middle School"},
                       {"group": "danger" ,"labelNum": 7, "x": 2.5, "y": 1.2, "fill": "Coral", "fontsize": "1.25em", "text": "Readable"},
                       {"group": "danger" ,"labelNum": 7, "x": 2.5, "y": 1.4, "fill": "Coral", "fontsize": ".66em", "text": "Threshold for General Population"},]

  svg1.selectAll('g')
  .select('g')
  .data(gridLabelData)
  .enter()
  .append('text')
  .attr("id", function(d){return d.labelNum})
  .attr("class", "grid")
  .attr("x", function(d){return (((INNER_WIDTH/6 * d.x) + (INNER_WIDTH/6 * (d.x+1)))/2)})
  .attr("y", function(d){return (INNER_HEIGHT/10 * 9) + (INNER_HEIGHT/10 * d.y)})
  // .attr("dy",function(d){return "1" * d.y + "em"})
  .text(function(d){return d.text})
  .style('opacity', 0)
  .style('font-size', function(d){return d.fontsize})
  .style('fill', function(d){return d.fill})
  .style("text-anchor", "middle")


   var gridSelect = svg1.selectAll(".grid")

    // grid opacity
    var gridOP = [0, 1, 1, 1, 1]
    // Opacity array
    var readableOP = [1, 0, 0, 0, 0]


  // scrolling functionality

  var gs = d3.graphScroll()
      .container(d3.select('.container-1'))
      .graph(d3.selectAll('container-1 #graph'))
      .eventId('uniqueId2')  // namespace for scroll and resize events
      .sections(d3.selectAll('.container-1 #sections > div'))
      // .offset(innerWidth < 900 ? innerHeight - 30 : 200)
      .on('active', function(i){

        
        // Readable Text Transitions
        var readableTextAll = svg1.selectAll('.readableText')

        readableTextAll.transition().duration(100)
            .style('opacity', readableOP[i])
          .transition();

        // Readable Title Transitions

          var readabletitleOP = [1, 1, 1, 1, 1]
          var readabletitleSize = ['1.5em', '1em', '1em', '1em', '1em']

          var moreReadableX = [[INNER_WIDTH/6 * 4],
                               [INNER_WIDTH/6 * 5],
                               [INNER_WIDTH/6 * 5],
                               [INNER_WIDTH/6 * 5]]

          var moreReadableY = [INNER_HEIGHT/3,
                              (INNER_HEIGHT/10 * 9) + (INNER_HEIGHT/10 * 1.5),
                              (INNER_HEIGHT/10 * 9) + (INNER_HEIGHT/10 * 1.5),
                              (INNER_HEIGHT/10 * 9) + (INNER_HEIGHT/10 * 1.5)]

          var lessReadableX = [[INNER_WIDTH/6 * 2],
                               [INNER_WIDTH/6 * 1],
                               [INNER_WIDTH/6 * 1],
                               [INNER_WIDTH/6 * 1]]

          var lessReadableY = [INNER_HEIGHT/3,
                              (INNER_HEIGHT/10 * 9) + (INNER_HEIGHT/10 * 1.5),
                              (INNER_HEIGHT/10 * 9) + (INNER_HEIGHT/10 * 1.5),
                              (INNER_HEIGHT/10 * 9) + (INNER_HEIGHT/10 * 1.5)]


         var moreReadable = svg1.selectAll('#moreReadable')
         var lessReadable = svg1.selectAll('#lessReadable')

         moreReadable.transition().duration(500)
            .style('opacity', readabletitleOP[i])
            .attr('font-size', readabletitleSize[i])
            .attr("x", moreReadableX[i])
            .attr("y", moreReadableY[i])
            .transition();

         lessReadable.transition().duration(500)
            .attr("x", lessReadableX[i])
            .attr("y", lessReadableY[i])
            .style('opacity', readabletitleOP[i])
            .attr('font-size', readabletitleSize[i])
          .transition();


        //gridlines opacity transition
        gridSelect.transition().duration(750)
            .style('opacity', gridOP[i])
          .transition();

        // transitions for readable sources

        // Set opacity values 

        // Opacity of news Sources
        var newsOpacity = [0, 1, 1, 1]
        // Opacity of secondary sources
        var secondaryOpacity = [0, 0, 1, 1]
        // Opacity of Social Media
        var socialOP = [0, 0, 0, 1]

        // Group 1 - newspapers
        // --------------------------

        //General Newspapers
        var newsPos = [width/30 * 16,
                          width/30 * 21,
                          width/30 * 21,
                          width/30 * 21,
                          width/30 * 21][i]

        var npimg = svg1.select('#NP')

        npimg.transition().duration(500)
            .style('opacity', newsOpacity[i])
            .transition().duration(1000)
            .attr("x", newsPos);

        //AP
        var wirePos = [width/30 * 6,
                          width/30 * 16,
                          width/30 * 16,
                          width/30 * 16,
                          width/30 * 16][i]

        var apImg = svg1.select('#AP')

        apImg.transition().duration(500)
            .style('opacity', newsOpacity[i])
            .transition().duration(1000)
            .attr("x", wirePos);

        // WSJ
        var wsjPos = [width/30 * 16,
                          width/30 * 21,
                          width/30 * 21,
                          width/30 * 21,
                          width/30 * 21][i]

        var wsjImg = svg1.select('#WSJ')

        wsjImg.transition().duration(500)
            .style('opacity', newsOpacity[i])
            .transition().duration(1000)
            .attr("x", wsjPos);

        //NYT
        var nytPos = [width/30 * 16,
                          width/30 * 21,
                          width/30 * 21,
                          width/30 * 21,
                          width/30 * 21][i]

        var nytImg = svg1.select('#NYT')

        nytImg.transition().duration(500)
            .style('opacity', newsOpacity[i])
            .transition().duration(1000)
            .attr("x", nytPos);

        // Group 2 - Secondary Sources
        // --------------------------

        // NYTBS
        var nytbsPos = [width/30 * 21,
                          width/30 * 21,
                          width/30 * 26,
                          width/30 * 26,
                          width/30 * 26][i]

        var nytbsImg = svg1.select('#NYTBS')

        nytbsImg.transition().duration(500)
            .style('opacity', secondaryOpacity[i])
            .transition().duration(1000)
            .attr("x", nytbsPos);

        // HS English
        var hsengPos = [width/30 * 21,
                          width/30 * 21,
                          width/30 * 26,
                          width/30 * 26,
                          width/30 * 26][i]

        var hsImg = svg1.select('#HSENG')

        hsImg.transition().duration(500)
            .style('opacity', secondaryOpacity[i])
            .transition().duration(1000)
            .attr("x", hsengPos);

        // Insurance Policies
        var insPos = [width/30 * 6,
                          width/30 * 6,
                          width/30 * 21,
                          width/30 * 21,
                          width/30 * 21][i]

        var insImg = svg1.select('#IP')

        insImg.transition().duration(500)
            .style('opacity', secondaryOpacity[i])
            .transition().duration(1000)
            .attr("x", insPos);

        // Social Media 
        // var socialPos = [width/30 * 26,
        //                   width/30 * 26,
        //                   width/30 * 26,
        //                   width/30 * 26,
        //                   width/30 * 26][i]

        var socialImg = svg1.selectAll('.group3')

        socialImg.transition().duration(1000)
            // .attr("x", socialPos)
            .style('opacity', socialOP[i])
          .transition();


      })





// --------------------------------------------
// GRAPH 2

var margin2 = {top: 50, right: 100, bottom: 50, left: 70};
var INNER_WIDTH2  = width - margin2.left - margin2.right;
var INNER_HEIGHT2 = height - margin2.top - margin2.bottom;

// define colors
var color3 = d3.scaleOrdinal(d3.schemeCategory10);

// set the ranges
var x = d3.scaleLinear().range([0, INNER_WIDTH2]);
var y = d3.scaleLinear().range([INNER_HEIGHT2, 0]);

// define the line
var line = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.score); });

// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg2 = d3.select('.container-2 #graph').html('').append("svg")
    .attrs({width: width, height: height})
  .append("g")
    .attr("transform",
          "translate(" + margin2.left + "," + margin2.top + ")");

// draw comprehension rects

var compreRects = [{"rectNumber": 1, "y": 0, "height": height/10, "fill": "#238443", "label": "advanced"},
                   {"rectNumber": 2, "y": height/10, "height": height/3.6, "fill": "#78c679", "label": "proficient"},
                   {"rectNumber": 3, "y": height/10 + height/3.6, "height": height/4.5, "fill": "#c2e699", "label": "basic"},
                   {"rectNumber": 4, "y": height/10 + height/3.6 + height/4.5, "height": height/5, "fill": "white", "label": "below basic" }]

var background = svg2.append("g")

background.selectAll('rect')
.data(compreRects)
.enter()
.append('rect')
.attr("id", function(d){return "rectNum" + d.rectNumber})
.attr("class", "background")
.attr("x", 0)
.attr("y", function(d){return d.y})
.attr("width", INNER_WIDTH2)
.attr("height", function(d){return d.height})
.attr("fill", function(d){return d.fill})
.attr("opacity", 0)

// comprehension labels

svg2.selectAll('text')
.select('text')
.data(compreRects)
.enter()
.append('text')
.attr("id", function(d){return "labelNum"+ d.rectNumber})
.attr("class", "background")
.attr("x", INNER_WIDTH2/2)
.attr("y", function(d){return d.y + (d.height/2)})
.attr("dy", ".5em")
.style('font-size', "2em")
.style("fill", "grey")
.attr("text-anchor", "middle")
.style('opacity', 0)
.text(function(d){return d.label})

// axis labels
  // Add X axis label:
svg2.append("text")
    .attr("text-anchor", "middle")
    .attr("x", INNER_WIDTH2/2)
    .attr("y", INNER_HEIGHT2+INNER_HEIGHT2/16 )
    .text("Year")
    .style('font-size', "1.25em")
    .attr("class", "chartlabel");

  // Add Y axis label:
svg2.append("text")
    .attr("text-anchor", "end")
    .attr("x", 0-INNER_WIDTH2/40)
    .attr("y", INNER_HEIGHT2/2 )
    .text("Score")
    .style('font-size', "1.25em")
    .attr("class", "chartlabel");

svg2.append("text")
    // .attr("text-anchor", "end")
    .attr("x", 0)
    .attr("y", 0-margin2.top/4)
    .text("12th Grade Reading Comprehension")
    .style('font-size', "1.5em")
    .attr("class", "chartlabel");




var gs3 = d3.graphScroll()
  .container(d3.select('.container-2'))
  .graph(d3.selectAll('.container-2 #graph'))
  .eventId('uniqueId3')  // namespace for scroll and resize events
  .sections(d3.selectAll('.container-2 #sections > div'))
  .on('active', function(i){


d3.csv("NAEP_scores3.csv", function(data) {

  color3.domain(d3.keys(data[0]).filter(function(key) { return key !== "date"; }))

   var brackets = color3.domain().map(function(name) {
    return {
      name: name,
      values: data.map(function(d) {
        return {date: +d.year, score: +d[name]};
      })
    };
  });

  // Scale the range of the data
  x.domain([1992, 2019]);
  y.domain([200, 360]);

  var bracket = svg2.selectAll(".bracket")
      .data(brackets)
    .enter().append("g")
      .attr("class", "bracket");

  // console.log(line(d.values))
  // animation from here
  // http://bl.ocks.org/larskotthoff/4aeb6299c61a42093562


  // national average
  // natlOP = [0,1,1]
// draw national average line
if (document.getElementById('container-2-0').className == "graph-scroll-active") {
  d3.selectAll(".line")
  .remove()

  d3.selectAll(".line1")
  .remove()

  d3.selectAll(".axisticks")
  .remove()

  d3.selectAll(".stateDot")
  .remove()
  
  }

// original active idea from here https://stackoverflow.com/questions/37447343/d3-js-starting-animations-when-a-section-is-in-view

if (document.getElementById('container-2-1').className == "graph-scroll-active") {

  d3.selectAll(".line1")
  .remove()

    // Add the x Axis
  svg2.append("g")
      .attr("transform", "translate(0," + INNER_HEIGHT2 + ")")
      .call(d3.axisBottom(x)
      .ticks(5)
      .tickFormat(d3.format("d")))
      .attr("class", "axisticks")
      .style("font-size", ".9em");

  // Add the y Axis
  svg2.append("g")
      .call(d3.axisLeft(y)
      .ticks(5)
      .tickFormat(d3.format("d")))
      .attr("class", "axisticks")
      .style("font-size", ".9em");;



  var path = svg2.selectAll(".bracket").append("path")
      .attr("class", "line")
      .attr("d", function(d) { return line(d.values); })
      .style("stroke-width", function(d) { if (d.name == "National Avg") 
                                        {return "6"}
                                      else {return "0";}
                                         })
      .style("stroke", function(d) { if (d.name == "National Avg") 
                                        {return "Coral"}
                                      else {return "steelblue";}
                                         })
      .attr("stroke-dasharray", function() { return "0," + this.getTotalLength(); })
      .style("fill", "none")
      .transition()
      .delay(function(d, i) { return i * 0; })
      .duration(2500)
      .ease(d3.easeSin)
      .attrTween("stroke-dasharray", animateLine)
      .style('opacity', 1);
      
  svg2.selectAll(".bracket").append("text")
      .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
      .attr("transform", function(d) { return "translate(" + x(d.value.date) + "," + y(d.value.score) + ")"; })
      .attr("x", 3)
      .attr("dy", ".2em")
      .style("font-size", function(d) { if (d.name == "National Avg") 
                                        {return "1em"}
                                      else {return "0";}
                                         })
      .text(function(d) { return d.name; })
      .transition()
      .duration(2500)
      .ease(d3.easeSin);

  }

  // percentiles

  percentOP = [0,0,1]

  if (document.getElementById('container-2-2').className == "graph-scroll-active") {

        // Add the x Axis
  svg2.append("g")
      .attr("transform", "translate(0," + INNER_HEIGHT2 + ")")
      .call(d3.axisBottom(x)
      .ticks(5)
      .tickFormat(d3.format("d")))
      .attr("class", "axisticks")
      .style("font-size", ".9em");

  // Add the y Axis
  svg2.append("g")
      .call(d3.axisLeft(y)
      .ticks(5)
      .tickFormat(d3.format("d")))
      .attr("class", "axisticks")
      .style("font-size", ".9em");

    var path1 = svg2.selectAll(".bracket").append("path")
      .attr("class", "line1")
      .attr("d", function(d) { return line(d.values); })
      .style("stroke-width", function(d) { if (d.name == "National Avg" || d.name == "10th%" || d.name == "25th%" || d.name == "75th%" || d.name == "90th%") 
                                        {return "5"}
                                      else {return "0";}
                                         })
      .style("stroke", function(d) { if (d.name == "10th%" || d.name == "25th%" ) 
                                        {return "Crimson"}
                                      else if (d.name == "National Avg") 
                                        {return "Coral"}
                                      else {return "SteelBlue";}
                                         })
      .attr("stroke-dasharray", function() { return "0," + this.getTotalLength(); })
      .style("fill", "none")
      .attr("opacity", percentOP[i])
      .transition()
      .delay(function(d, i) { return i * 0; })
      .duration(2500)
      .ease(d3.easeSin)
      .attrTween("stroke-dasharray", animateLine);

  

  svg2.selectAll(".bracket").append("text")
      .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
      .attr("transform", function(d) { return "translate(" + x(d.value.date) + "," + y(d.value.score) + ")"; })
      .attr("x", 3)
      .attr("dy", ".2em")
      .style("font-size", "1em")
      .text(function(d) { return d.name; })
      .transition()
      .duration(1950)
      .ease(d3.easeSin);



  state_dot_data = [{ "year": 2013, "state":  "Arkansas", "score": 284.5562147},
                {  "year": 2013, "state":  "Connecticut", "score": 298.7901622},
                {  "year": 2013, "state":  "Massachusetts", "score": 292.8363498},
                {  "year": 2013, "state":  "West Virginia", "score": 280.2149731}
              ]

  // add in scatter plot dots

  var stateDots = svg2.append('g')
                  .selectAll('g')
                  .data(state_dot_data)
                  .enter()
                  .append('g')

  stateDots.append("circle")
      .attr("cx", function (d) { return x(d.year); } )
      .attr("cy", function (d) { return y(d.score); } )
      .attr("r", 3)
      .attr("class", "stateDot")
      .style("fill", "Coral")
      .attr("opacity", 0)

  stateDots.append("text")
    .attr("x", function (d) { return x(d.year); })
    .attr("y", function (d) { return y(d.score); } )
    .attr("dy", ".5em")
    .attr("dx", ".5em")
    .style("font-size", ".9em")
    .attr("class", "stateDot")
    .attr("opacity", 0)
    .text(function(d) { return d.state; })


    }

  // lollipop graphic
  if (document.getElementById('container-2-4').className == "graph-scroll-active") {

    reading_time = [{"year": 1984, "score":  31},
                    {"year": 1988, "score":  28},
                    {"year": 1990, "score":  31},
                    {"year": 1992, "score":  27},
                    {"year": 1994, "score":  30},
                    {"year": 1996, "score":  23},
                    {"year": 1999, "score":  25},
                    {"year": 2004, "score":  22},
                    {"year": 2008, "score":  20},
                    {"year": 2012, "score":  19},
                  ]
    // x axis
    var x2 = d3.scaleBand()
      .range([ 0, INNER_WIDTH2 ])
      .domain(reading_time.map(function(d) { return d.year; }))
      .padding(1);
    svg2.append("g")
      .attr("transform", "translate(0," + INNER_HEIGHT2 + ")")
      .call(d3.axisBottom(x2))
      .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

    // Add Y axis
    var y2 = d3.scaleLinear()
      .domain([0, 40])
      .range([ INNER_HEIGHT2, 0]);
    svg2.append("g")
      .call(d3.axisLeft(y2));

    // Lines
    svg2.selectAll("myline")
      .data(reading_time)
      .enter()
      .append("line")
        .attr("x1", function(d) { return x2(d.year); })
        .attr("x2", function(d) { return x2(d.year); })
        .attr("y1", function(d) { return y2(d.score); })
        .attr("y2", y2(0))
        .attr("stroke", "grey")

    svg2.selectAll("mycircle")
      .data(reading_time)
      .enter()
      .append("circle")
        .attr("cx", function(d) { return x2(d.year); })
        .attr("cy", function(d) { return y2(d.score); })
        .attr("r", "4")
        .style("fill", "#69b3a2")
        .attr("stroke", "black")

  }

  // grid opacity and transition
  var lineOP = [0, 1, 1, 1, 1]

  var linesSelect = svg2.selectAll(".bracket")
  // var linesSelect2 = svg2.selectAll(".gridLabel")


  linesSelect.transition().duration(100)
      .style('opacity', lineOP[i])
    .transition();

  // background rectangles and label opacity
  var backgroundOP = [.75, .60, .60 , .60, .60]

  var backgroundselect = svg2.selectAll(".background")
  
  backgroundselect.transition().duration(500)
      .style('opacity', backgroundOP[i])
    .transition();
  
  // background rectangles and label opacity
  var labelOP = [0, 1, 1, 1, 1]

  var labelselect = svg2.selectAll(".chartlabel")
  
  labelselect.transition().duration(500)
      .style('opacity', labelOP[i])
    .transition();

  // state dot OP
  var stateOP = [0, 0, 0, 1, 1]

  var stateSelect = svg2.selectAll(".stateDot")
  
  stateSelect.transition().duration(500)
      .style('opacity', stateOP[i])
    .transition();

    function animateLine() {
      var l = this.getTotalLength();
      i = d3.interpolateString("0," + l, l + "," + l);
      return function(t) { return i(t); };
    }
  
  
  var axisSelect = svg2.selectAll(".axisticks")

  axisSelect.transition().duration(500)
      .style('opacity', lineOP[i])
    .transition();

    });
  })



// ----------------------------------------------------------
// graph #3 - comprehension


// set variables

var margin3 = {top: 0, right: 0, bottom: 0, left: 0}
var INNER_WIDTH3 = margin3.left - margin3.right;
var INNER_HEIGHT3 = margin3.top - margin3.bottom;

// append the svg object to the body of the page
var svg3 = d3.select('.container-3 #graph').html('').append("svg")
    .attrs({width: width, height: height})
    // .attr("width", width4 + margin4.left + margin4.right)
    // .attr("height", height4 + margin4.top + margin4.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin3.left + "," + margin3.top + ")");

//poloygon sizes
//these two set all
var topLeftX = width/5
var topY = height/1.4
// top right polygon
var topRightX = topLeftX + (width/6 * 1.75)
// bottom vars
var botRightX = topLeftX + (width/6 * 1)
var botLeftX = topLeftX - (width/6 * 1)
var botY = topY + topY/4

//spaces between polygons
var squareSpace = (height/1.4)/4.5
// additional offset of first polygon
var poly1Yoffset = squareSpace/2.5

var poly1 = [[{x: topLeftX, y:topY + poly1Yoffset}, {x: topRightX, y:topY + poly1Yoffset}, {x: botRightX, y:botY + poly1Yoffset}, {x: botLeftX, y:botY + poly1Yoffset}]]
var poly2 = [[{x: topLeftX, y:topY - (squareSpace)}, {x: topRightX, y:topY - (squareSpace)}, {x: botRightX, y:botY - (squareSpace)}, {x: botLeftX, y:botY - (squareSpace)}]]
var poly3 = [[{x: topLeftX, y:topY - (squareSpace * 2)}, {x: topRightX, y:topY - (squareSpace * 2)}, {x: botRightX, y:botY - (squareSpace * 2)}, {x: botLeftX, y:botY - (squareSpace * 2)}]]
var poly4 = [[{x: topLeftX, y:topY - (squareSpace * 3)}, {x: topRightX, y:topY - (squareSpace * 3)}, {x: botRightX, y:botY - (squareSpace * 3)}, {x: botLeftX, y:botY - (squareSpace * 3)}]]
var poly5 = [[{x: topLeftX, y:topY - (squareSpace * 4) - poly1Yoffset}, {x: topRightX, y:topY - (squareSpace * 4) - poly1Yoffset}, {x: botRightX, y:botY - (squareSpace * 4) - poly1Yoffset}, {x: botLeftX, y:botY - (squareSpace * 4) - poly1Yoffset}]]

var lineFunc = d3.line()
  .x(function(d) {return d.x })
  .y(function(d) {return d.y})

var poly1var = svg3.append('path')
.data(poly1)
.attr("class", "poly1")
.attr('d', lineFunc)
.attr('stroke', 'black')
.attr('fill', 'WhiteSmoke')
.style('opacity', .66);

var poly2var = svg3.append('path')
.data(poly2)
// .attr("class", "poly2")
.attr("class", "polygon")
.attr('d', lineFunc)
.attr('stroke', 'black')
.attr('fill', 'SteelBlue')
.style('opacity', .33);

var poly3var = svg3.append('path')
.data(poly3)
// .attr("class", "poly3")
.attr("class", "polygon")
.attr('d', lineFunc)
.attr('stroke', 'black')
.attr('fill', 'SteelBlue')
.style('opacity', .66);

var poly4var = svg3.append('path')
.data(poly4)
// .attr("class", "poly34")
.attr("class", "polygon")
.attr('d', lineFunc)
.attr('stroke', 'black')
.attr('fill', 'SteelBlue')
.style('opacity', .90);

var poly5var = svg3.append('path')
.data(poly5)
.attr("class", "poly5")
// .attr("class", "polygon")
.attr('d', lineFunc)
.attr('stroke', 'black')
.attr('fill', 'WhiteSmoke')
.style('opacity', .90);


//polygon titles 
// poly top - understanding
var poly5title = svg3.append('text')
.attr("class", "polytitle")
.attr("x", (topRightX))
.attr("y", ((topY - (squareSpace * 4) - poly1Yoffset) + (botY - (squareSpace * 4) - poly1Yoffset))/3)
.attr("dy", '1em')
.style('font-size', "1.5em")
.style('fill', "grey")
.text("Reader Understanding")

// poly bottom - text 
var poly1title = svg3.append('text')
.attr("class", "polytitle")
.attr("x", (topRightX))
.attr("y", (topY + botY)/2 + poly1Yoffset/1.75)
.attr("dy", "1em")
.style('font-size', "1.5em")
.style('fill', "grey")
.style('opacity', 0)
.text("Text");

// poly mid - comprehension
svg3.append('text')
.attr("class", "cititle")
.attr("x", (topRightX))
.attr("y", (topY - (squareSpace * 2)))
.attr("dy", '1em')
.style('font-size', "1.5em")
.style('fill', "grey")
.text("Construction-Integration")


// comprehension level titles

var leveltitles = [{"levelNumber":1, "text": "Linguistic Representation"},
                 {"levelNumber":2, "text": "Propostional Abstraction"},
                 {"levelNumber":3, "text": "Situation Model"}]

svg3.selectAll('text')
.select('text')
.data(leveltitles)
.enter()
.append('text')
.attr("id", function(d){return "leveltitle"+d.levelNumber})
.attr("class", "leveltitle")
.attr("x", topRightX)
.attr("y", function(d){return topY - (squareSpace * d.levelNumber) })
.attr("dy", ".9em")
.style('font-size', "1.25em")
.style('opacity', 0)
.text(function(d){return d.text})



// comprehension level definitions

var defs = [{"levelNumber":1, "text": "Words and sentence structure"},
                 {"levelNumber":2, "text": "How words relate to one another"},
                 {"levelNumber":3, "text": "Integrate with prior knowledge"}]

svg3.selectAll('text')
.select('text')
.data(defs)
.enter()
.append('text')
.attr("id", function(d){return "leveldef"+d.levelNumber})
.attr("class", "leveldef")
.attr("x", topRightX)
.attr("y", function(d){return topY - (squareSpace * d.levelNumber) })
.attr("dy", "3em")
.style('font-size', "1em")
.style('opacity', 0)
.text(function(d){return d.text})


// previous svg turtle frog  examples

// var examples = [ {"levelNumber":1,"innerLevel":2, "img": './images/tfl_def.svg', "text": 'log', "width": 200, "height": 80},
//                  {"levelNumber":2,"innerLevel":.5, "img": './images/turtle_fish.svg', "text": 'log', "width": 200, "height": 80},
//                  {"levelNumber":3,"innerLevel":1, "img": './images/log_scene.svg', "text": 'log', "width": 200, "height": 90}
//                  ]

// svg3.selectAll('image')
// .select('image')
// .data(examples)
// .enter()
// .append('image')
// .attr("id", function(d){return "exampleimgs"+d.levelNumber+d.innerLevel})
// .attr("class", "exampleimgs")
// .attr("x", topRightX)
// .attr("y", function(d){return topY - (squareSpace * d.levelNumber) + (d.innerLevel * 22) })
// // .attr("dy", function(d){return 2 * d.levelNumber + "em" })
// .attr("width", function(d){return d.width})
// .attr("height", function(d){return d.height})
// .style('opacity', 0)
// .attr("xlink:href", function(d){return d.img})
// // .text(function(d){return d.text})

// reading lines on white polygon
var lines = [[0,1,2,3,4,5,6,7,8,9,10]]


svg3.selectAll('g')
    .data(lines)
  .enter().append('g')
    .each(function(d,i){
        d3.select(this).selectAll('g')
        .data(d)
      .enter().append('line')
        .attr("class", "readinglines")
        .attr('x1', function(d,j) { return topLeftX + width/10; })
        .attr('y1', function(d,j) { return topY - (squareSpace * 4) + (height/20 * 2) + (j*height/15); })
        .attr('x2', function(d,j) { return (topRightX + topRightX/1.5) - width/10; })
        .attr('y2', function(d,j) { return topY - (squareSpace * 4) + (height/20 * 2) + (j*height/15); })
        .style('stroke', 'black')
        .style("stroke-width", 1.5)
        .style("opacity", 0)
    });

// [[topLeftX, topY - (squareSpace * 4)], [topRightX + topRightX/1.5, topY - (squareSpace * 4)], [topRightX + topRightX/1.5, botY], [topLeftX, botY]],

// circles by line
//original idea to redo nested variable:
//https://stackoverflow.com/questions/32974794/update-display-in-loop-when-drawing-many-d3-svg-objects
//implementation
//https://bl.ocks.org/cagrimmett/07f8c8daea00946b9e704e3efcbd5739

function gridData() {
    var data = new Array();
    var xpos = topLeftX + width/10; //starting xpos and ypos at 1 so the stroke will show when we make the grid below
    var ypos = topY - (squareSpace * 4) + (height/20 * 2);
    var radius = Math.random() * (6 - 15) + 15
    var rowheight = 10
    var circleNum = 1;

    // iterate for rows 
    for (var row = 0; row < 11; row++) {
        data.push( new Array() );

        // iterate for cells/columns inside rows
        for (var column = 0; column < 10; column++) {
            data[row].push({
                x: xpos,
                y: ypos,
                r: radius,
                c: circleNum
            })
            // increment the x position. I.e. move it over
            xpos += Math.random() * (20 - 25) + width/20;
            radius = Math.random() * (6 - 15) + 15
            circleNum += (row + column)

        }
        // reset the x position after a row is complete
        xpos = topLeftX + width/10;
        radius = Math.random() * (6 - 15) + 15;
        // increment the y position for the next row. Move it down 
        ypos += (height/30 * 2); 
    }
    return data;
}

//run the gridData function
var gridData = gridData();    

var row = svg3.selectAll(".row")
    .data(gridData)
    .enter().append("g")
    .attr("class", "row");

var column = row.selectAll(".circle")
    .data(function(d) { return d; })
    .enter().append("circle")
    .attr("class","linearcircle")
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", function(d) { return d.r; })
    // .attr("id", function(d,i) {return "circle" + d[i]})
    .attr("id", function(d) {return "circle"+d.c})
    .style("fill", "#fff")
    .style("stroke", "#222")
    .style("opacity", 0);

// circles for skimming lines
function skimData() {
    var data = new Array();
    var xpos = topLeftX + width/10; //starting xpos and ypos at 1 so the stroke will show when we make the grid below
    var ypos = topY - (squareSpace * 4) + (height/20 * 2);
    var radius = Math.random() * (6 - 15) + 15
    var rowheight = 10
    var circleNum = 1;
    var columnNum = 8

    // iterate for rows 
    for (var row = 0; row < 11; row++) {
        data.push( new Array() );

        // iterate for cells/columns inside rows
        for (var column = 0; column < columnNum; column++) {
            data[row].push({
                x: xpos,
                y: ypos,
                r: radius,
                c: circleNum
            })
            // increment the x position. I.e. move it over
            xpos += Math.random() * (20 - 25) + width/16;
            radius = Math.random() * (6 - 15) + 15
            circleNum += (row + column)

        }
        // reset the x position after a row is complete
        xpos = topLeftX + width/10;
        radius = Math.random() * (6 - 15) + 15;
        // increment the y position for the next row. Move it down 
        ypos += (height/30 * 2); 
        columnNum -= 1
        columnNum = (columnNum>0)? columnNum:1;

    }
    return data;
}

//run the gridData function
var skimData = skimData();    

var skimrow = svg3.selectAll(".rowskim")
    .data(skimData)
    .enter().append("g")
    .attr("class", "row");

var skimcolumn = skimrow.selectAll(".circle")
    .data(function(d) { return d; })
    .enter().append("circle")
    .attr("class","skimcircle")
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", function(d) { return d.r; })
    // .attr("id", function(d,i) {return "circle" + d[i]})
    .attr("id", function(d) {return "circle"+d.c})
    .style("fill", "#fff")
    .style("stroke", "#222")
    .style("opacity", 0);



// trigger graph scroll

var gs4 = d3.graphScroll()
  .container(d3.select('.container-3'))
  .graph(d3.selectAll('.container-3 #graph'))
  .eventId('uniqueId4')  // namespace for scroll and resize events
  .sections(d3.selectAll('.container-3 #sections > div'))
  .on('active', function(i){



//polygon opacity transitions

poly1OP = [1,1,1,1,1,1,1,1]
poly23OP = [1,.66,.66,0,0,0,0]
ploy4OP = [1,.66,.33,0,0,0,0]

// polygon size transition
poly1size = [
             [[topLeftX, topY - (squareSpace * 1.65)], [topRightX, topY - (squareSpace * 1.65)], [botRightX, botY - (squareSpace * 1.65)], [botLeftX, botY - (squareSpace * 1.65)]],
             [[topLeftX, topY + poly1Yoffset], [topRightX, topY + poly1Yoffset], [botRightX, botY + poly1Yoffset], [botLeftX, botY + poly1Yoffset]],
             [[topLeftX, topY + poly1Yoffset], [topRightX, topY + poly1Yoffset], [botRightX, botY + poly1Yoffset], [botLeftX, botY + poly1Yoffset]],
             [[topLeftX, topY - (squareSpace * 4)], [topRightX + topRightX/1.5, topY - (squareSpace * 4)], [topRightX + topRightX/1.5, botY], [topLeftX, botY]],
             [[topLeftX, topY - (squareSpace * 4)], [topRightX + topRightX/1.5, topY - (squareSpace * 4)], [topRightX + topRightX/1.5, botY], [topLeftX, botY]],
             [[topLeftX, topY - (squareSpace * 4)], [topRightX + topRightX/1.5, topY - (squareSpace * 4)], [topRightX + topRightX/1.5, botY], [topLeftX, botY]],
             [[topLeftX, topY - (squareSpace * 4)], [topRightX + topRightX/1.5, topY - (squareSpace * 4)], [topRightX + topRightX/1.5, botY], [topLeftX, botY]]
            ].map(function(d){ return 'M' + d.join(' L ') })


poly5size = [
              [[topLeftX, topY - (squareSpace * 2.35)], [topRightX, topY - (squareSpace * 2.35)], [botRightX, botY - (squareSpace * 2.35)], [botLeftX, botY - (squareSpace * 2.35)]],
              [[topLeftX, topY - (squareSpace * 4) - poly1Yoffset], [topRightX, topY - (squareSpace * 4) - poly1Yoffset], [botRightX, botY - (squareSpace * 4) - poly1Yoffset], [botLeftX, botY - (squareSpace * 4) - poly1Yoffset]],
              [[topLeftX, topY - (squareSpace * 4) - poly1Yoffset], [topRightX, topY - (squareSpace * 4) - poly1Yoffset], [botRightX, botY - (squareSpace * 4) - poly1Yoffset], [botLeftX, botY - (squareSpace * 4) - poly1Yoffset]],
              [[topLeftX, topY - (squareSpace * 4) - poly1Yoffset], [topRightX, topY - (squareSpace * 4) - poly1Yoffset], [botRightX, botY - (squareSpace * 4) - poly1Yoffset], [botLeftX, botY - (squareSpace * 4) - poly1Yoffset]],
              [[topLeftX, topY - (squareSpace * 4) - poly1Yoffset], [topRightX, topY - (squareSpace * 4) - poly1Yoffset], [botRightX, botY - (squareSpace * 4) - poly1Yoffset], [botLeftX, botY - (squareSpace * 4) - poly1Yoffset]],
              [[topLeftX, topY - (squareSpace * 4) - poly1Yoffset], [topRightX, topY - (squareSpace * 4) - poly1Yoffset], [botRightX, botY - (squareSpace * 4) - poly1Yoffset], [botLeftX, botY - (squareSpace * 4) - poly1Yoffset]]
            ].map(function(d){ return 'M' + d.join(' L ') })

poly2size = [
             [[topLeftX, topY - (squareSpace * 2)], [topRightX, topY - (squareSpace * 2)], [botRightX, botY - (squareSpace * 2)], [botLeftX, botY - (squareSpace * 2)]],
             [[topLeftX, topY - (squareSpace)], [topRightX, topY - (squareSpace)], [botRightX, botY - (squareSpace)], [botLeftX, botY - (squareSpace)]],
             [[topLeftX, topY - (squareSpace)], [topRightX, topY - (squareSpace)], [botRightX, botY - (squareSpace)], [botLeftX, botY - (squareSpace)]],
             [[topLeftX, topY - (squareSpace)], [topRightX, topY - (squareSpace)], [botRightX, botY - (squareSpace)], [botLeftX, botY - (squareSpace)]],
             [[topLeftX, topY - (squareSpace)], [topRightX, topY - (squareSpace)], [botRightX, botY - (squareSpace)], [botLeftX, botY - (squareSpace)]],
             [[topLeftX, topY - (squareSpace)], [topRightX, topY - (squareSpace)], [botRightX, botY - (squareSpace)], [botLeftX, botY - (squareSpace)]]
            ].map(function(d){ return 'M' + d.join(' L ') })

poly4size = [
             [[topLeftX, topY - (squareSpace * 2)], [topRightX, topY - (squareSpace * 2)], [botRightX, botY - (squareSpace * 2)], [botLeftX, botY - (squareSpace * 2)]],
             [[topLeftX, topY - (squareSpace * 3)], [topRightX, topY - (squareSpace * 3)], [botRightX, botY - (squareSpace * 3)], [botLeftX, botY - (squareSpace * 3)]],
             [[topLeftX, topY - (squareSpace * 3)], [topRightX, topY - (squareSpace * 3)], [botRightX, botY - (squareSpace * 3)], [botLeftX, botY - (squareSpace * 3)]],
             [[topLeftX, topY - (squareSpace * 3)], [topRightX, topY - (squareSpace * 3)], [botRightX, botY - (squareSpace * 3)], [botLeftX, botY - (squareSpace * 3)]],
             [[topLeftX, topY - (squareSpace * 3)], [topRightX, topY - (squareSpace * 3)], [botRightX, botY - (squareSpace * 3)], [botLeftX, botY - (squareSpace * 3)]],
             [[topLeftX, topY - (squareSpace * 3)], [topRightX, topY - (squareSpace * 3)], [botRightX, botY - (squareSpace * 3)], [botLeftX, botY - (squareSpace * 3)]],
             [[topLeftX, topY - (squareSpace * 3)], [topRightX, topY - (squareSpace * 3)], [botRightX, botY - (squareSpace * 3)], [botLeftX, botY - (squareSpace * 3)]]
            ].map(function(d){ return 'M' + d.join(' L ') })

poly1var.transition().duration(1000)
            .style('opacity', poly1OP[i])
            .transition().duration(1000)
            .attr('d', poly1size[i])

poly2var.transition().duration(1000)
            .style('opacity', poly23OP[i])
            .transition().duration(1000)
            .attr('d', poly2size[i]);

poly3var.transition().duration(1000)
            .style('opacity', poly23OP[i])
          .transition();

poly4var.transition().duration(1000)
            .style('opacity', ploy4OP[i])
            .transition().duration(1000)
            .attr('d', poly4size[i]);

poly5var.transition().duration(1000)
            .style('opacity', ploy4OP[i])
          .transition().duration(1000)
            .attr('d', poly5size[i]);

// polygon title text transitions

poly5titlesize = [
                [[topY - (squareSpace * 2.35)]],
                [[(topY - (squareSpace * 4) - poly1Yoffset) + (botY - (squareSpace * 4) - poly1Yoffset)/3]],
                [[(topY - (squareSpace * 4) - poly1Yoffset) + (botY - (squareSpace * 4) - poly1Yoffset)/3]],
                [[(topY - (squareSpace * 4) - poly1Yoffset) + (botY - (squareSpace * 4) - poly1Yoffset)/3]],
                [[(topY - (squareSpace * 4) - poly1Yoffset) + (botY - (squareSpace * 4) - poly1Yoffset)/3]]
]

poly1titlesize = [
                [[topY - (squareSpace * 1.65)]],
                [[(topY + botY)/2 + (poly1Yoffset/1.75)]],
                [[(topY + botY)/2 + (poly1Yoffset/1.75)]],
                [[(topY + botY)/2 + (poly1Yoffset/1.75)]],
                [[(topY + botY)/2 + (poly1Yoffset/1.75)]]
]


// polys 1 and 5 text transition
fixedtextOP = [0,1,1,0,0,0,0]

var polyText = svg3.selectAll(".polytitle")

poly5title.transition().duration(500)
            .style('opacity', fixedtextOP[i])
          .transition().duration(1000)
            .attr('y', poly5titlesize[i]);

poly1title.transition().duration(500)
            .style('opacity', fixedtextOP[i])
          .transition().duration(1000)
            .attr('y', poly1titlesize[i]);


//poly 3 title text transition

cititleOP = [1,0,0,0,0,0,0]

var ciText = svg3.selectAll(".cititle")

ciText.transition().duration(500)
            .style('opacity', cititleOP[i])
          .transition();


//transition for the level titles
leveltitlesOP = [0,1,1,0,0,0,0]

var leveltitles = svg3.selectAll(".leveltitle")

leveltitles.transition().duration(1500)
            .style('opacity', leveltitlesOP[i])
          .transition();


//transition for the level definitions

leveldefsOP = [0,1,1,0,0,0,0]

var leveldefs = svg3.selectAll(".leveldef")

leveldefs.transition().duration(1500)
            .style('opacity', leveldefsOP[i])
          .transition();

// transition for the level examples
levelexsOP = [0,0,1,0,0,0,0]

var levelexs = svg3.selectAll(".exampleimgs")

levelexs.transition().duration(1000)
            .style('opacity', levelexsOP[i])
          .transition();


//animation of the "floating" text

// if (document.getElementById('container-3-2').className == "graph-scroll-active") {

//   var polygons = svg3.selectAll(".polygon")

//   // polygons.transition().duration(100).delay(1000)


// // Floating text array

// // Floating text function loop 
// // create arrays
//   repeat();
//   //chained transition of floating text
//   // a take on chained transition to loop https://bl.ocks.org/mbostock/1125997
//     function repeat(){

    

//     polygons.transition().duration(800)
//     .delay(function(d,i) { return (i * 800)})
//     .style('opacity', 0.66)
//     .transition().duration(100)
//     .style('opacity', 0.33)
//     .transition().duration(100)
//     .style('opacity', 0.66)
//     .delay(800)
//     .on("start", repeat);

//   };

// // examples 

// }
// else {
//   d3.selectAll(".letters")
//   .remove()
// }



//lines transitions
linesOP = [0,0,0,1,1,1]

var levelexs = svg3.selectAll(".readinglines")

levelexs.transition().duration(1500)
            .style('opacity', linesOP[i])
          .transition();


//linear circles transition
if (document.getElementById('container-3-5').className == "graph-scroll-active") {

// linearcirclesOP = [0,0,0,0,1,0,0]
linearcirclesOP = [1,1,1,1,1,1,1]

var linearcircles = svg3.selectAll(".linearcircle")

linearcircles.transition().duration(1500)
          .style('opacity', linearcirclesOP[i])
          .transition()
           .delay(function(d, i) { return (i * 100) + (d.r); })
           .style("fill", "blue");
}
else {
var linearcircles = svg3.selectAll(".linearcircle")

linearcircles.transition().duration(100)
          .style('opacity', 0)
          .style("fill", "white");
}


// skim circles transition
if (document.getElementById('container-3-6').className == "graph-scroll-active") {
skimcirclesOP = [1,1,1,1,1,1,1]

// skimcirclesOP = [0,0,0,0,0,1,0]

var skimcircles = svg3.selectAll(".skimcircle")

skimcircles.transition().duration(1500)
          .style('opacity', skimcirclesOP[i])
          .transition()
           .delay(function(d, i) { return (i * 100) + (d.r); })
           .style("fill", "blue");
}
else {
var linearcircles = svg3.selectAll(".skimcircle")

linearcircles.transition().duration(100)
          .style('opacity', 0)
          .style("fill", "white");
}

})


  d3.select('#source')
      .styles({'margin-bottom': window.innerHeight - 450 + 'px', padding: '100px'})
}


render()
d3.select(window).on('resize', render)
