//U35346496
//script.js

// Configure linear scale for bar widths
const xScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([50, 500]);

// Render bars and group elements based on scaled data
const barGroups = svg.selectAll("g")
    .data(dataset)
    .enter()
    .append("g")
    .attr("transform", (d, i) => `translate(0, ${i * (barHeight + barMargin)})`);

barGroups.append("rect")
    .attr("class", "bar")
    .attr("height", barHeight)
    .attr("width", 0)  // Initially set width to 0 for transition
    .transition()
    .duration(1000)
    .attr("width", d => xScale(d));

// Add text labels to bars
barGroups.append("text")
    .attr("class", "label")
    .attr("x", d => xScale(d) - 5)
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(d => d);
// Add hover effects
barGroups.selectAll("rect")
    .on("mouseover", function() {
        d3.select(this)
            .transition()
            .duration(200)
            .attr("fill", "orange");
    })
    .on("mouseout", function() {
        d3.select(this)
            .transition()
            .duration(200)
            .attr("fill", "steelblue");
    });


