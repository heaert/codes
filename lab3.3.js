"" + 1 + 0; //10 string
"" - 1 + 0 //-1 number
true + false //1 number
6 / "3" //2 number
"2" * "3" //6 number
4 + 5 + "px" //9px string
"$" + 4 + 5 //$45 string
"4" - 2 //2 number
"4px" - 2 //NaN number
7 / 0 //Infinity number
"  -9\n" + 5 //-9 string
//            5     
"  -9\n" - 5 //-14 number
5 && 2 //2 number
2 && 5 //5 number
'5  0' //5 number
'0  5' //5 number
null + 1 //1 number
undefined + 1 //NaN number
null == "\n0\n" //false boolean
+null == +"\n0\n" //true boolean