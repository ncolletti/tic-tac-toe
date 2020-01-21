#!/usr/bin/env node
import program from 'commander';
import pkg from '../../package.json';

import Game from '../game/Game';
import SelectRestart from '../selections/SelectRestart';

program
    .version(pkg.version)
    .description('Play Tic Tac Toe');


program
    .option('-l, --large', '4x4 grid size')
    .action(async () => {
        try {
            console.log('Let\'s play a riveting game of TIC TAC TOE!');

            // TODO: build functionality for 4x4 grid.
            // const options = command.opts();
            // const size = options.large ? 4 : 3;

            // start game
            await initGame();
        } catch (e) {
            console.error(`Error: ${e}`);
        }
    });

program.parse(process.argv);

const initGame = async () => {
  console.log('Starting new game!');
  const game = new Game();

  await game.run();

  // game over -- ask if you want to start a new game
  const restart = await SelectRestart();

  if (!restart) {
      console.log('Thanks for playing! Goodbye!');
      process.exit(1);
  } else {
      initGame();
  }
};
