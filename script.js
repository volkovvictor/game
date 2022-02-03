'use strict';

const isNumber = function(num) {
   return !isNaN(parseFloat(num)) && isFinite(num);
};

const startGame = function(min, max) {
   const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

   const playing = function(num) {
      const playerNum = prompt(`Угадайте число от ${min} до ${max}`);

      const guessTheNumber = function() {
      
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
                  playing(randomNum);
               }
               if (playerNum > num) {
                  alert('Загаданное число меньше');
                  playing(randomNum);
               }
               if (+playerNum === num) {
                  alert('Поздравляю, Вы угадали!!!');
                  return;
               }
            }
         }
      };
      
      guessTheNumber();
   };

   playing(randomNum);
};


const game = startGame(1, 100);