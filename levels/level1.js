'use strict';

const level1 = new Level(
  [
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Chicken(),
    new Endboss(),
  ],
  [new Cloud()],
  [
    new Coin(150, 200),
    new Coin(200, 170),
    new Coin(250, 200),
    new Coin(850, 200),
    new Coin(900, 170),
    new Coin(950, 200),
  ],
  [
    new Bottle(450, 350, 0),
    new Bottle(500, 350, 1),
    new Bottle(1050, 350, 0),
    new Bottle(1100, 350, 1),
  ],
  [
    new BackgroundObjects('img/5_background/layers/air.png', -719),
    new BackgroundObjects('img/5_background/layers/3_third_layer/2.png', -719),
    new BackgroundObjects('img/5_background/layers/2_second_layer/2.png', -719),
    new BackgroundObjects('img/5_background/layers/1_first_layer/2.png', -719),

    new BackgroundObjects('img/5_background/layers/air.png', 0),
    new BackgroundObjects('img/5_background/layers/3_third_layer/1.png', 0),
    new BackgroundObjects('img/5_background/layers/2_second_layer/1.png', 0),
    new BackgroundObjects('img/5_background/layers/1_first_layer/1.png', 0),
    new BackgroundObjects('img/5_background/layers/air.png', 719),
    new BackgroundObjects('img/5_background/layers/3_third_layer/2.png', 719),
    new BackgroundObjects('img/5_background/layers/2_second_layer/2.png', 719),
    new BackgroundObjects('img/5_background/layers/1_first_layer/2.png', 719),

    new BackgroundObjects('img/5_background/layers/air.png', 719 * 2),
    new BackgroundObjects(
      'img/5_background/layers/3_third_layer/1.png',
      719 * 2
    ),
    new BackgroundObjects(
      'img/5_background/layers/2_second_layer/1.png',
      719 * 2
    ),
    new BackgroundObjects(
      'img/5_background/layers/1_first_layer/1.png',
      719 * 2
    ),
    new BackgroundObjects('img/5_background/layers/air.png', 719 * 3),
    new BackgroundObjects(
      'img/5_background/layers/3_third_layer/2.png',
      719 * 3
    ),
    new BackgroundObjects(
      'img/5_background/layers/2_second_layer/2.png',
      719 * 3
    ),
    new BackgroundObjects(
      'img/5_background/layers/1_first_layer/2.png',
      719 * 3
    ),
  ]
);
