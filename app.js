// ? Task:  Display the current day and time in a specific format
// Last update on February 26 2020 08:09:06 (UTC/GMT +8 hours)


// Solution 1

 const today = new Date();//Создаёт экземпляр объекта Date, представляющего собой момент времени.
  
  let day = today.getDay();//получаем день
  let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  
  let hour = today.getHours();//получаем часы
  let minute = today.getMinutes();//получаем мин
  let second = today.getSeconds();//получаем сек
  let prepand = (hour >= 12)? " PM ":" AM ";//получаем PM или AM
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Noon';//вычисляем полдень
  } 
  else
  { 
  hour=12;
  prepand=' PM';//вечер часы
  } 
  } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';//вычисляем полночь
  } 
  else
  { 
  hour=12;
  prepand=' AM';//утрен часы
  } 
}
  console.log(`Today is : ${daylist[day]}.`);
console.log(`Current Time : ${hour}${prepand}: ${minute} : ${second}`);

// ! Explanation:Используем экземпляр объекта Date. Вытягиваем составляющие, проверяем на полдень, полночь, вставляем префикс, интерполяция при выводе.
