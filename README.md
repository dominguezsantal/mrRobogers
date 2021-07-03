//TDD

Describe:robogersSound() ;

Test: "Numbers that contain a 1: all digits are replaced (all digits) with "Beep!”"
Code: outputArray.push("Beep");
Expected Output: The number 11 should be replaced with "Beep"

Test: "Numbers that contain a 2: all digits are replaced (all digits) with "Boop!”"
Code:outputArray.push("Boop"); 
Expected Output: The number 21 should be replaced with "Boop"

Test: "Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?”
Code: outputArray.push("Won't you be my neighbor?");
Expected Output: 
The number 13 should be replaced with "Won't you be my neighbor?”
The number 32 should be replaced with "Won't you be my neighbor?"
