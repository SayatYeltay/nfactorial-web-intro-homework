//Создать свой Ресторан / Магазин / Футбольную команду:
//1. Переменные - let, const:
let nameRstrn = 'Soho';
const city = 'Almaty';
console.log(nameRstrn + ` ` + city);
//2. Типы данных - string, number, boolean, null, undefined:
const SINCE = 2023;
const owner = 'Sayat';
let isRestaurant = true;
let isClub = false;
let account = null;
let earth;
//3. Объекты - создание, добавление и удаление свойства (через прямые скобки тоже):
const restaurant = {
    name: 'Soho',
    isRestaurant: true,
    age: 0,
    owner: 'Sayat'
}
restaurant.name = 'Globus';
restaurant.cofounder = 'Marat';
delete restaurant.owner;
console.log(restaurant); 

//Работа с объектами
//1. Создайте пустой объект `vehicle`.:
let vehicle = {
}
//2. Добавьте свойство `brandName` со значением `BMW`(либо любая ваша любимая марка):
vehicle.brandName = `BMW`;
console.log(vehicle);
//3. Добавьте свойство `model` со значением `X5`(либо любая ваша любимая модель):
vehicle.model = `X5`;
console.log(vehicle);
//4. Измените значение свойства `model` на `M1`:
vehicle.model = `M1`;
console.log(vehicle);
//5. Удалите свойство `model` из объекта:
delete vehicle.model;
console.log(vehicle);

//Работа с перебором свойств в объектах
//1. Создайте объект `salaries`, где ключом(свойстовом) является имя, a значением зарплата:
const salaries = [
    {
        name: 'Aruzhan',
        value: 100
    },
    {
        name: 'Dalida',
        value: 160
    },
    {
        name: `Samat`,
        value: 130
    }
] 
console.log(salaries);
//2. С помощью `for .. in`  просуммируйте все значения и выведите в консоли.
let sum = 0;
for (let s = 0; s<salaries.length; s++){
    sum = sum + salaries[s].value;
}
console.log(`Sum is: ${sum}`);