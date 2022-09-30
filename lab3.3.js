“" + 1 + 0 -> "string"
"" - 1 + 0 -> "number"
true + false -> "number"
6 / "3" -> "number"
"2" * "3" -> "number"
4 + 5 + "px" -> "string"
"$" + 4 + 5 -> "string"

"4" - 2 -> "number"

"4px" - 2 -> "number"

7 / 0 -> "number"

"  -9\n" + 5 -> "string"
"  -9\n" - 5 -> "number"
5 && 2 -> "number"

2 && 5 -> "number"

50 -> "number"

05 -> "number"
null + 1 -> "number"
undefined + 1 -> "number"
null == "\n0\n" -> "boolean"
+null == +"\n0\n” -> "boolean"