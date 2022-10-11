
var num=123;
var reverse=0;
while(num != 0){
  reverse = (reverse*10)+(num%10);
  num = parseInt(num/10);
}
while(reverse != 0){
  switch(reverse%10){
    case 0:
      document.write("zero");
      break;
      case 1:
      document.write("one");
      break;
      case 2:
      document.write("two");
      break;
      case 3:
      document.write("three");
      break;
  }
  reverse= parseInt(reverse/10);
};