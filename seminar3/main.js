// Получить от пользователя два числа и вывести в диалоговое окно сумму значений, которые ввел пользователь, вывод должен выглядеть так (пример): 
// Результат сложения чисел 5 и 2 равен 7.
 
// const a = Number.parseFloat(prompt('Введите число а'));
// const b = Number.parseFloat(prompt('Введите число b'));
// // alert(`Результат сложения чисел ${a} и ${b} равен ${a + b}`);
// const result = sum(a, b);
// alert(`Результат сложения чисел ${a} и ${b} равен ${result}`);
// function sum(x, y) {
//     return x + y;
// }
 
// Написать функцию, которая принимает имя пользователя при ее вызове и выводит сообщение с приветствием пользователя по имени в консоль. 
// Проверить работоспособность функции.
 
// const username = prompt('Введите ваше имя:');
// hello(username);
// function hello(name) {
//     console.log(`Привет, ${name}!`);
// }
 
// Задача 4: вывести на экран в диалоговом окне текст с сообщением “Вам хорошо живется?”
// и кнопками «ОК», «Отмена», для чего необходимо использовать confirm.
// - При нажатии на кнопку “ОК” вывести в диалоговом окне текст с сообщением “Тогда мы идем к вам!”.
// - При нажатии на кнопку “Отмена” вывести в диалоговом окне текст с сообщением “Ну вы держитесь там!”.
 
// const result = confirm('Вам хорошо живется?');
// if (result) {
//     alert('Тогда мы идем к вам!');
// } else {
//     alert('Ну вы держитесь там!');
// }
 
// if (result) alert('Тогда мы идем к вам!');
// else alert('Ну вы держитесь там!');
 
// confirm("Вам хорошо живется?") ? alert("Тогда мы идем к вам!") : alert("Ну вы держитесь там!");
 
// Задача 5: перепишите код, используя конструкцию switch-case, запрашивая возраст пользователя через диалоговое окно.
 
// let age = 101;
 
// if (age == 18) {
//   alert('Вы совершеннолетний, все можно!');
// } else if (age == 10) {
//   alert('Вам надо учить уроки!');
// } else if (age == 30) {
//   alert('Ложитесь спать, завтра на работу');
// } else {
//   alert('Мы не знаем что Вам делать');
// }
 
const age = Number.parseInt(prompt("Сколько вам лет?"));
switch (age) {
    case 18:
        alert('Вы совершеннолетний, все можно!');
        break;
    case 10:
        alert('Вам надо учить уроки!');
        break;
    case 30:
        alert('Ложитесь спать, завтра на работу!');
        break;
    default:
        alert('Мы не знаем что Вам делать!');
}