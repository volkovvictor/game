'use strict';

const isNumber = function(num) {
   return !isNaN(parseFloat(num)) && isFinite(num);
};

const startGame = function(min, max) {
   const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
   let count = 10;

   const playing = function(num) {

      const guessTheNumber = function(playerNum) {
         if (playerNum === null) {
            alert('Игра окончена');
            return;
         }
         if (!isNumber(playerNum) || playerNum === '') {
            alert('Введите число!');
            playing(randomNum);
         } else {
               if (!(playerNum > 0 && playerNum <= 100)) { 
                  alert(`Число ${playerNum} выходит из диапозона чисел от ${min} до ${max}`);
                  playing(randomNum);
               } else {
               if  (playerNum < num) {
                  alert('Загаданное число больше');
                  --count;
                  
                  playing(randomNum);
               }
               if (playerNum > num) {
                  alert('Загаданное число меньше');
                  --count;
                  playing(randomNum);
               }
               if (+playerNum === num) {
                  const continueGame = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');

                  if(continueGame) {
                     startGame(min, max);
                  } else return;
               }
            }
         }
      };

      if(count) {
         const playerNum = prompt('Угадай число от 1 до 100');
         guessTheNumber(playerNum);
      } else {
         const continueGame = confirm('Попытки закончились, хотите сыграть еще?');

            if(continueGame) {
               startGame(min, max);
            }
      }
   };
   
   playing(randomNum);
};


const game = startGame(1, 100);