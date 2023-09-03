function Function1(thisParamIsTrue) {
    if(thisParamIsTrue) {
        return "then return 'true'."
    }
    return "No, it's not."
}



const myStr1 = "'I' am a liberal-conservatist, who believes in and belonging from the \"Classic Liberalism\".";
console.log(myStr1);



const myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr2);



/* Escape Sequences in Strings */

/**
 * Code	  Output
    \'	  single quote
    \"	  double quote
    \\	  backslash
    \n	  newline
    \t	  tab
    \r	  carriage return
    \b	  backspace
    \f	  form feed
*/
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);
