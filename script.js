//U35346496
//script.js

// Configure linear scale for bar widths
const xScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([50, svgWidth]);
