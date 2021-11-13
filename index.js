
d3.select('h1').style('color', 'lightcoral')
.attr('id', 'heading')
.text('Updated hello');

d3.select('body').append('p')
.text('hey');