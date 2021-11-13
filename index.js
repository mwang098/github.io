
d3.select('h1').style('color', 'lightcoral')
.attr('id', 'heading')
.text('Updated hello');

d3.select('body').append('p')
.text('hey').style('color', 'lightcyan');
d3.select('body').append('p')
.text('favorite food:all food xD').style('color', 'lightblue');