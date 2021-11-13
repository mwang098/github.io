d3.select('h1').style('color', 'lightblue')
.attr('id', 'heading')
.text('Updated hello');

d3.select('body').append('p')
.text('hey')