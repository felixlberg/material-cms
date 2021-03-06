$(function() {
    'use strict';
    // Card content color checker
    // Thx to: https://codepen.io/andreaswik/pen/YjJqpK
    var cardContents = document.querySelectorAll('.card-stacked');
    for (var i = 0; i < cardContents.length; i++) {
      var cardColor, brightness, r, g, b, hsp;
      cardColor = getComputedStyle(cardContents[i], null).getPropertyValue('background-color');
      brightness = lightOrDark(cardColor);
      if(brightness == 'dark') {
        cardContents[i].classList.add('dark-background');
      }
      else {
        cardContents[i].classList.add('light-background');
      }
      function lightOrDark(color) {
        if (color.match(/^rgb/)) {
          color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
          r = color[1];
          g = color[2];
          b = color[3];
        }
        else {
          color = +("0x" + color.slice(1).replace(
            color.length < 5 && /./g, '$&$&'
          ));
          r = color >> 16;
          g = color >> 8 & 255;
          b = color & 255;
        }
        hsp = Math.sqrt(
          0.299 * (r * r) +
          0.587 * (g * g) +
          0.114 * (b * b)
        );
        if (hsp>127.5) {
          return 'light';
        }
        else {
          return 'dark';
        }
      };
    }

    // Button Color Cecker
    var buttons = document.querySelectorAll('.btn-color');
    for (var i = 0; i < buttons.length; i++) {
      var btnColor, brightness, r, g, b, hsp;
      btnColor = getComputedStyle(buttons[i], null).getPropertyValue('background-color');
      brightness = lightOrDark(btnColor);
      if(brightness == 'dark') {
        buttons[i].classList.add('dark-background');
      }
      else {
        buttons[i].classList.add('light-background');
      }
      function lightOrDark(color) {
        if (color.match(/^rgb/)) {
          color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
          r = color[1];
          g = color[2];
          b = color[3];
        }
        else {
          color = +("0x" + color.slice(1).replace(
            color.length < 5 && /./g, '$&$&'
          ));
          r = color >> 16;
          g = color >> 8 & 255;
          b = color & 255;
        }
        hsp = Math.sqrt(
          0.299 * (r * r) +
          0.587 * (g * g) +
          0.114 * (b * b)
        );
        if (hsp>127.5) {
          return 'light';
        }
        else {
          return 'dark';
        }
      };
    }

});
