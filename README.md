# jsexercises-sandbox

1. start in index.html, put your instructional info in the #sideBar section to outline what this lesson will teach
1. still in index.html, put your code requirement in the #problem section
1. go to main.js, insert any code the student will start with into the section labelled "prep code"
1. in test.js, write your test code in.
  - attention(#) will highlight the section of either #sideBar or #problem that you want to bring attention to.
    - this is done by surrounding that section with ```<span data-index="#">  </span>``` where # is the corresponding number from the attention function call
  - test if the variable required exists
  - test if any prep variables required exist
  - test if any prep variables required are still their original values
  - test if the required variables are not what they should be
  - test for fringe cases with regex.  For example, did they manually code the number into the variable rather than using math.
    - you will have access to a variable called "code", this has the student's original code.  You can test it against patterns using the javascript "test" function, which returns true/false
  - all failed tests return a string.  This string is the string that is shown to the student / marked as their error.
  - surround all code / values / variable names with ```<code></code>``` segments
  - if a code segment is multiple lines, surround it with ```<pre><code></code></pre>```
