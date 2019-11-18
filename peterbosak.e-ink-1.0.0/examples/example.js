const link = require('./adventurer');

// This is an incredibly contrived example to reference The Legend of Zelda :D
const weapons = [
  'wooden sword',
  'bomb',
  'boomerang',
  'book of magic',
  'magical sword'
];

const pickupItem = item => {
  link
    .pickup(item)
    .holdItemAboveHead(true)
    .playJingle();
};

const startAdventure = function() {
  try {
    console.log(`It's dangerous to go alone. Take this.`);

    const item = weapons.unshift();
    pickupItem(item);

    return 'order to Hyrule';
  } catch (error) {
    console.log(`I am ${error}`);
  }
};

startAdventure();
