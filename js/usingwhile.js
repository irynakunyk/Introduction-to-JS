var i = 0;
while (i < 10) { // 0
 var a = 0;
 var str = '';
 while (a < 10) { // columns
  if (a % 2 === 0) {
   str += i % 2 == 0 ? '#' : ' ';
  } else {
   str += i % 2 == 0 ? ' ' : '#';
  }

  a++;
 }
 console.log(str);
 i++;
}
