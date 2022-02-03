'use strict';

const randomNum = Math.floor(Math.random() * (100 - 1)) + 1;

const isNumber = function(num) {
   return !isNaN(parseFloat(num)) && isFinite(num);
};

const startGame = function(num, min, max) {
   const playerNum = prompt(`Угадайте число от ${min} до ${max}`);

   const guessTheNumber = function() {
      
      if (playerNum === null) {
         alert('Игра окончена');
         return;
      }
      if (!isNumber(playerNum) || playerNum === '') {
         alert('Введите число!');
         startGame(num, min, max);
      } else {
            if (!(playerNum > 0 && playerNum <= 100)) { 
               alert(`Число ${playerNum} выходит из диапозона чисел от ${min} до ${max}`);
               startGame(num, min, max);
            } else {
            if  (playerNum < num) {
               alert('Загаданное число больше');
               startGame(num, min, max);
            }
            if (playerNum > num) {
               alert('Загаданное число меньше');
               startGame(num, min, max);
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

const game = startGame(randomNum, 1, 100);