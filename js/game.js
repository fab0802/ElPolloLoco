'use strict';

const canvas = document.querySelector('canvas');
const keyboard = new Keyboard();
const world = new World(canvas, keyboard);

function init() {
  [canvas.width, canvas.height] = [720, 480];
  console.log(world);
}

init();

window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') keyboard.left = true;
  if (e.key === 'ArrowRight') keyboard.right = true;
  if (e.key === 'ArrowUp') keyboard.up = true;
  if (e.key === 'd') keyboard.d = true;
});

window.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowLeft') keyboard.left = false;
  if (e.key === 'ArrowRight') keyboard.right = false;
  if (e.key === 'ArrowUp') keyboard.up = false;
  if (e.key === 'd') keyboard.d = false;
});
