const $ = require('jquery');
const _ = require('lodash');
import './body.css';

$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"><p>');

const updateCounter = () => {
  let times = $('#count').html() || 0;
  $('button').on('click', () => {
    $('#count').html(`${times++} clicks on the button`);
  });
};

_.debounce(updateCounter, 1000);
updateCounter();