import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { FaWeight } from 'react-icons/fa'
import '../styles/Ctut.css'
import '../scroll'

const Ctut = () => {
  return (
    <>
    <div className="side-div-container" id='  '>
    <ul id='scroll'>
      <h1>TOPIC</h1>
      <li><a href="#intro">Introduction</a></li>
      <li><a href="#start">C++ Get Started</a></li>
      <li><a href="#quick">C++ Quickstart</a></li>
      <li><a href="#comm">C++ Comments</a></li>
      <li><a href="#multi">C++ Multi-line Comments</a>
</li>
      <li><a href="#var">C++ Variables</a>
</li>
      <li><a href="#vt">Add Variables Together</a>
</li>
      <li><a href="#ident">C++ Identifiers</a>
</li>
      <li><a href="#cons">Constants</a>
</li>
      <li><a href="#user">C++ User Input</a>
</li>
<li><a href="#simp">Creating a Simple Calculator</a>
</li>
<li><a href="#data">C++ Data Types</a>
</li>
<li><a href="#num">Numeric Types</a>
</li>
<li><a href="#bool">Boolean Types</a>
</li>
<li><a href="#char">Character Types</a>
</li>
<li><a href="#str">String Concatenation</a>
</li>
<li><a href='#app'>Append</a>
</li>
      <li><a href="#add">Adding Numbers and Strings</a>
</li>
<li><a href="#string">String Length</a></li>
<li><a href="#inp">User Input Strings</a>
</li>
<li><a href="#cond">C++ Conditions and If Statements</a>
</li>
<li><a href="#ifs">The if Statement</a>
</li>
<li><a href="#else">The else Statement</a>
</li>
<li><a href="#swi">C++ Switch Statements</a>
</li>
<li><a href="#bre">The break Keyword</a>
</li>
<li><a href="#loop">C++ Loops</a>
</li>
    </ul>
  </div>
    <div class="color">
      <h1 id='intro'>C++ Introduction</h1>
      <h2 >What is C++?</h2>
      <div class=" content">
        <ul><li>C++ is a cross-platform language that can be used to create high-performance applications.<br></br></li>
       <li>C++ was developed by Bjarne Stroustrup, as an extension to the C language.<br></br></li> 
        <li>C++ gives programmers a high level of control over system resources and memory.<br></br></li>
        <li>The language was updated 4 major times in 2011, 2014, 2017, and 2020 to C++11, C++14, C++17, C++20.</li>
        </ul></div>

      <h2 id="use">Why Use C++</h2>
      <div class=" content">C++ is one of the world's most popular programming languages.<br></br>
<ul>
      <li>C++ can be found in today's operating systems, Graphical User Interfaces, and embedded systems.<br></br></li>  
      <li> C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development costs.<br></br></li> 
      <li>C++ is portable and can be used to develop applications that can be adapted to multiple platforms.<br></br></li>   
      <li>C++ is fun and easy to learn!<br></br></li>  
      <li>As C++ is close to C, C# and Java, it makes it easy for programmers to switch to C++ or vice versa.</li>  
      </ul></div>
      <h2 id="">Difference between C and C++
      </h2>
      <div class=" content">C++ was developed as an extension of C, and both languages have almost the same syntax.<br></br>

        The main difference between C and C++ is that C++ support classes and objects, while C does not.
        <h2 id="start">C++ Get Started</h2>
        <div class=" content">To start using C++, you need two things:
          <ul>
            <li>A text editor, like Notepad, to write C++ code</li>
            <li>A compiler, like GCC, to translate the C++ code into a language that the computer will understand</li>
          </ul>
          There are many text editors and compilers to choose from. In this tutorial, we will use an IDE (see below).</div>
        <h2 id="">C++ Install IDE</h2>
        <div class=" content">
          An IDE (Integrated Development Environment) is used to edit AND compile the code.<br></br>

          Popular IDE's include Code::Blocks, Eclipse, and Visual Studio. These are all free, and they can be used to both edit and debug C++ code.<br></br>

          Note: Web-based IDE's can work as well, but functionality is limited.<br></br>

          We will use Code::Blocks in our tutorial, which we believe is a good place to start.<br></br>

          You can find the latest version of Codeblocks at http://www.codeblocks.org/. Download the mingw-setup.exe file, which will install the text editor with a compiler.<br></br>
          <h2 id="quick">C++ Quickstart</h2>
          <div class=" content">Let's create our first C++ file.<br></br>

            Open Codeblocks and go to <span><b>File &gt; New &gt; Empty File.</b></span><br></br>

            Write the following C++ code and save the file as myfirstprogram.cpp <b>(File&gt;Save File as):</b></div>

          <img src='https://www.w3schools.com/cpp/codeblocks2020.png'></img>
          <div class=" content">Then, go to <b>Build &gt; Build and Run </b>to run (execute) the program. The result will look something to this:</div>

          <div class=" content"><b>Hello World!</b><br></br>
            Process returned 0 (0x0) execution time : 0.011 s<br></br>
            Press any key to continue.</div>
         
          <div class=" content">
          
          </div>
          <h2 id="">C++ Output (Print Text)</h2>
          <h3>Example
          </h3>
          <div class=" content">
          #include &lt;iostream&gt;<br/>
using namespace std;<br/>

int main() <br/>
  cout &lt;&lt; "Hello World!";<br></br>
  return 0;<br/>
          </div>
          <h2 id="comm">C++ Comments</h2>
          <div class=" content">
            Comments can be used to explain C++ code, and to make it more readable. It can also be used to prevent execution when testing alternative code. Comments can be singled-lined or multi-lined.
          </div>
          <h2 id="">Single-line Comments
          </h2>
          <div class=" content">
            Single-line comments start with two forward slashes (//).<br></br>

            Any text between // and the end of the line is ignored by the compiler (will not be executed).<br></br>

            This example uses a single-line comment before a line of code:<br></br>
          </div>
          <h3>Example</h3>
          <div class=" content-eg">cout "Hello World!"; // This is a comment</div>
          <h2 id="multi">C++ Multi-line Comments</h2>
          <div class=" content">/* The code below will print the words Hello World!
            to the screen, and it is amazing */<br></br>
            cout  "Hello World!";</div>
          <h2 id="">Single or multi-line comments?</h2>
          <div class=" content">
            It is up to you which you want to use. Normally, we use // for short comments, and /* */ for longer.
          </div>
          <h2 id="var">C++ Variables</h2>
          <div class=" content">
            Variables are containers for storing data values.

            In C++, there are different types of variables (defined with different keywords), for example:
            <ul>
              <li><b>int </b>- stores integers (whole numbers), without decimals, such as 123 or -123</li>
              <li><b>double </b>- stores floating point numbers, with decimals, such as 19.99 or -19.99</li>
              <li><b>char </b>- stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes</li>
              <li><b>string </b>- stores text, such as "Hello World". String values are surrounded by double quotes</li>
              <li><b>bool</b> - stores values with two states: true or false</li>
            </ul>
          </div>
          <h2 id="">Declaring (Creating) Variables</h2>
          <div class=" content">To create a variable, specify the type and assign it a value:</div>
          <h3>Syntax</h3>
          <div class=" content">type variableName = value;</div><br>
          </br>
        </div>
        <div class=" content">
          Where type is one of C++ types (such as int), and variableName is the name of the variable (such as <b>X</b>or <b>myName</b>). The equal sign is used to assign values to the variable.<br></br>

          To create a variable that should store a number, look at the following example:
        </div>
        <h3>Example</h3>
        <div class=" content">Create a variable called myNum of type int and assign it the value 15:</div><br></br>
        <div class=" content">
          int myNum = 15;<br />
          cout &lt;&lt; num;
        </div><br></br>
        <div class=" content">You can also declare a variable without assigning the value, and assign the value later:</div><br></br>
        <div class=" content">
          int myNum = 15;<br />
          myNum = 15;<br />
          cout &lt;&lt; num;
        </div>
        <h2 id="">Other Types</h2>
        <div class=" content">A demonstration of other data types:</div><br></br>
        <h3>Example</h3><br></br>
        <div class=" content">
          int myNum = 5; <span>// Integer (whole number without decimals)</span> <br></br>
          double myFloatNum = 5.99;    <span>// Floating point number (with decimals)</span><br></br>
          char myLetter = 'D';        <span>// Character</span> <br></br>
          string myText = "Hello";     <span>// String (text)</span><br></br>
          bool myBoolean = true;       <span>// Boolean (true or false)</span>
          <h2 id="vt">Add Variables Together
          </h2>
          <div class=" content">To add a variable to another variable, you can use the + operator:</div>
          <h3>Example</h3>
          <div class=" content">
            int x = 5;<br />
            int y = 6;<br />
            int sum = x + y;<br />
            cout &lt;&lt; sum;
          </div>
          <h2 id="">Declare Many Variables</h2>
          <div class=" content">To declare more than one variable of the same type, use a comma-separated list:</div>
          <h3>Example</h3>
          <div class=" content">
            int x = 5, y = 6, z = 50;<br />
            int sum = x + y + z;<br />
            cout &lt;&lt; sum;
          </div>
          <h2 id="ident">C++ Identifiers</h2>
          <div class=" content">
            All C++ <b>variables</b> must be <b>identified</b> with <b>unique names</b>.<br />

            These unique names are called <b>identifiers</b>.<br />

            Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).<br />

            <b>  Note:</b> It is recommended to use descriptive names in order to create understandable and maintainable code:<br />
            <h3>Example</h3>
            <div class=" content">
          // Good<br />
              int minutesPerHour = 60;<br />

              // OK, but not so easy to understand what m actually is<br />
              int m = 60;<br />
            </div><br />
            <div class=" content">
              The general rules for naming variables are:
              <ul>
                <li>Names can contain letters, digits and underscores</li>
                <li>Names must begin with a letter or an underscore (_)</li>
                <li>Names are case sensitive (myVar and myvar are different variables)</li>
                <li>Names cannot contain whitespaces or special characters like !, #, %, etc.</li>
                <li>Reserved words (like C++ keywords, such as int) cannot be used as names</li>
              </ul>
            </div>
            <h2 id="cons">Constants</h2>
            <div class=" content">When you do not want others (or yourself) to change existing variable values, use the const keyword (this will declare the variable as "constant", which means <b>unchangeable and read-only</b>):</div>
          </div>
          <h3>Example</h3>
          <div class=" content">const int minutesPerHour = 60;<br />
            const float PI = 3.14;</div>
          <h2 id="user">C++ User Input</h2>
          <div class=" content">You have already learned that cout is used to output (print) values. Now we will use cin to get user input.<br/>

cin is a predefined variable that reads data from the keyboard with the extraction operator (&lt;&lt;).<br/>

            In the following example, the user can input a number, which is stored in the variable x. Then we print the value of x:</div>
            <h3>Example</h3>
            <div class=" content">
              int x; <br/>
cout&lt;&lt; "Type a number: "; // Type a number and press enter<br/>
cin  &gt;&gt; x; // Get user input from the keyboard<br/>
cout &lt;&lt;"Your number is: " &lt;&lt; x; // Display the input value
            </div>
            <h2 id="simp">Creating a Simple Calculator</h2>
            <div class=" content">In this example, the user must input two numbers. Then we print the sum by calculating (adding) the two numbers:</div>
            <h3>Example
</h3>
<div class=" content">
int x, y;<br/>
int sum;<br/>
cout  &lt;&lt; "Type a number: ";<br/>
cin  &gt;&gt; x;<br/>
cout  &lt;&lt; "Type another number: ";<br/>
cin  &gt;&gt; y;<br/>
sum = x + y;<br/>
cout  &lt;&lt; "Sum is: "  &lt;&lt; sum;
</div>
<h3>Output </h3>
<div class=" content">Type a number: 
53<br/>

Type another number: 
96<br/>

Sum is: 149</div>
<h2 id="data">C++ Data Types</h2>
<div class=" content">
int myNum = 5;               // Integer (whole number)<br/>
float myFloatNum = 5.99;     // Floating point number<br/>
double myDoubleNum = 9.98;   // Floating point number<br/>
char myLetter = 'D';         // Character<br/>
bool myBoolean = true;       // Boolean<br/>
string myText = "Hello";     // String
</div>
<h2 id="num">Numeric Types
</h2>
<h3>int</h3>
<div class=" content">
int myNum = 1000;<br/>
cout &lt;&lt; myNum;
</div>
<h3>float</h3>
<div class=" content">
float myNum = 5.97;<br/>
cout &lt;&lt; myNum;
</div>
<h2 id="bool">Boolean Types</h2>
<div class=" content">A boolean data type is declared with the bool keyword and can only take the values true or false.<br/>

When the value is returned, true = 1 and false = 0.</div>
        </div>
        <h3>Example</h3>
        <div class=" content">
        bool isCodingFun = true;<br/>
bool isFishTasty = false;<br/>
cout &lt;&lt; isCodingFun;  // Outputs 1 (true)<br/>
cout &lt;&lt; isFishTasty;  // Outputs 0 (false)<br/>
        </div>
        <h2 id="char">Character Types</h2>
        <div class=" content">
        The char data type is used to store a single character. The character must be surrounded by single quotes, like 'A' or 'c':
        </div>
        <h3>Example</h3>
        <div class=" content">char myGrade = 'B';<br/>
cout &lt;&lt; myGrade;</div>
<h2 id="">String Types</h2>
<div class=" content">The string type is used to store a sequence of characters (text). This is not a built-in type, but it behaves like one in its most basic usage. String values must be surrounded by double quotes:</div>
<h3>Example</h3>
<div class=" content">string greeting = "Hello";<br/>
cout  &lt;&lt; greeting;</div>
<h2 id="str">String Concatenation
</h2>
<div class=" content">The + operator can be used between strings to add them together to make a new string. This is called <b>concatenation</b>:</div>
<h3>Example</h3>
<div class=" content">
string firstName = "John ";<br/>
string lastName = "Doe";<br/>
string fullName = firstName + lastName;<br/>
cout &lt;&lt; fullName;
</div><br/>
<div class=" content">In the example above, we added a space after firstName to create a space between John and Doe on output. However, you could also add a space with quotes (" " or ' '):</div>
<h3>Example</h3>
<div class=" content">string firstName = "John";<br/>
string lastName = "Doe";<br/>
string fullName = firstName + " " + lastName;<br/>
cout &lt;&lt; fullName;<br/>
</div>
<h2 id="app">Append</h2>
<div class=" content">A string in C++ is actually an object, which contain functions that can perform certain operations on strings. For example, you can also concatenate strings with the append() function:</div>
<h3>Example
</h3>
<div class=" content">
string firstName = "John ";<br/>
string lastName = "Doe";<br/>
string fullName = firstName.append(lastName);<br/>
cout  &lt;&lt; fullName;<br/>
<h3>Output</h3>
<div class=" content">John Doe</div>
</div>
<h2 id="add">Adding Numbers and Strings</h2>
<div class=" content">
WARNING!<br/>
C++ uses the + operator for both <b>addition </b>and<b> concatenation</b> .<br/>
Numbers are added. Strings are concatenated.<br/>
<div class=" content">If you add two numbers, the result will be a number</div>
<h3>Example</h3>
<div class=" content">int x = 10;<br/>
int y = 20;<br/>
int z = x + y;      // z will be 30 (an integer)</div>
<div class=" content">If you try to add a number to a string, an error occurs:</div>
<h3>Example</h3>
<div class=" content">
string x = "10";<br/>
int y = 20;<br/>
string z = x + y;
</div>
<h2 id="string">String Length</h2>
<div class=" content">To get the length of a string, use the length() function:</div>
<h3>Example</h3>
<div class=" content">string txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";<br/>
cout  &lt;&lt; "The length of the txt string is: "  &lt;&lt; txt.length();</div>
<h3>Output</h3>
<div class=" content">
The length of the txt string is: 26
</div>
</div>
<h2 id="inp">User Input Strings</h2>
<div class=" content">It is possible to use the extraction operator &gt;&gt; on cin to store a string entered by a user:</div>
<h3>Example</h3>
<div class=" content">
string firstName;<br/>
cout &lt;&lt; "Type your first name: ";<br/>
cin &gt;&gt; firstName; // get user input from the keyboard<br/>
cout &lt;&lt; "Your name is: " &lt;&lt; firstName;<br/>
<b>// Type your first name: John</b><br/>
<b>// Your name is: John</b>
</div>
<div class=" content">However, cin considers a space (whitespace, tabs, etc) as a terminating character, which means that it can only store a single word (even if you type many words):</div>
<h2 id="cond">C++ Conditions and If Statements</h2>
<div class=" content">
You already know that C++ supports the usual logical conditions from mathematics:<br/>
<ul>
  <li>Less than: a &lt; b </li>
  <li>
Less than or equal to ':' a = b</li>
  <li>Greater 'than:' a &gt; b</li>
  <li>Greater than or equal to: a = b</li>
<li>Equal to a == b
</li>
<li>Not Equal to: a != b<br/></li>
</ul>
<div class=" content">
You can use these conditions to perform different actions for different decisions.<br/>
C++ has the following conditional statements:<br/>
<ul>
  <li>Use if to specify a block of code to be executed, if a specified condition is true</li>
  <li>
Use else to specify a block of code to be executed, if the same condition is false</li>
  <li>Use else if to specify a new condition to test, if the first condition is false</li>
  <li>Use switch to specify many alternative blocks of code to be executed
</li>
</ul>
</div>
</div>
<h2 id="ifs">The if Statement</h2>
<div class=" content">Use the if statement to specify a block of C++ code to be executed if a condition is true</div>
<h3>Syntax</h3>
<div class=" content">
int x = 20;<br/>
int y = 18;<br/>
if (x &gt; y) {<br/>
  // cout << "x is greater than y";<br/>
}<br/>
</div>
<h2 id="else">
The else Statement</h2>
<div class=" content">Use the else statement to specify a block of code to be executed if the condition is false.</div>
<h3>Syntax</h3>
<div class=" content">
if (condition) {<br/>
  // block of code to be executed if the condition is true
} else {<br/>
  // block of code to be executed if the condition is false
}
</div>
<h2 id="swi">C++ Switch Statements</h2>
<div class=" content">Use the switch statement to select one of many code blocks to be executed.
</div>
<h3>Syntax</h3>
<div class=" content">
switch(expression) 
</div>
<div class=" content">
  <br></br>
This is how it works:
<ul>
<li>The switch expression is evaluated once</li>
<li>The value of the expression is compared with the values of each case</li>
<li>If there is a match, the associated block of code is executed</li>
<li>The break and default keywords are optional, and will be described later in this chapter</li>
<br>
</br>
The example below uses the weekday number to calculate the weekday name:
</ul>
</div>
<h2 id="bre">The break Keyword
</h2>
<div class=" content">
When C++ reaches a break keyword, it breaks out of the switch block.
<br/>
This will stop the execution of more code and case testing inside the block.<br/>

When a match is found, and the job is done, it's time for a break. There is no need for more testing.<br/>
</div>
<h2 id="">The default Keyword</h2>
<div class=" content">The <b>default</b> keyword specifies some code to run if there is no case match:</div>
<div class=" content">

</div>
<h2 id="">C++ While Loop
</h2>
<h2 id="loop">C++ Loops
</h2>
<div class=" content">
  <ul>
    <li>Loops can execute a block of code as long as a specified condition is reached.</li>
<li>Loops are handy because they save time, reduce errors, and they make code more readable.</li>
</ul>
</div>
<h2 id="">C++ While Loop</h2>
<div class=" content">
The <b>while</b> loop loops through a block of code as long as a specified condition is <b>true</b>:
<h3>Syntax</h3>
<div class=" content">
while (condition) <br/>
In the example below, the code in the loop will run, over and over again, as long as a variable (i) is less than 5:
</div>
<h3>Example</h3>
<div class=" content">
int i = 0;<br/>
while (i &lt; 5)<br/>
<b>Note:</b> Do not forget to increase the variable used in the condition, otherwise the loop will never end!
</div>
</div>
<h2 id="">The Do/While Loop</h2>
<div class=" content">The do/while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.</div>
<h3></h3>
  <div class=" content">
  do<br/>
while (condition);
  </div>
  <h2 id="">C++ For Loop</h2>
  <div class=" content">When you know exactly how many times you want to loop through a block of code, use the for loop instead of a while loop:</div>
  <h3>Syntax</h3>
  <div class=" content">for (statement 1; statement 2; statement 3)<br/>
  <b>Statement 1</b> is executed (one time) before the execution of the code block.<br/>
<b>Statement 2 </b>defines the condition for executing the code block.<br/>
<b>Statement 3</b> is executed (every time) after the code block has been executed.<br/>
The example below will print the numbers 0 to 4:
 </div>
 <h3>Example</h3>
 <div class=" content">for (int i = 0; i &lt; 5; i++) <br/>
 cout &lt;&lt; i &lt;&lt; '\n';</div>
 <div class=" content">Example explained<br/>
Statement 1 sets a variable before the loop starts (int i = 0).<br/>

Statement 2 defines the condition for the loop to run (i must be less than 5). If the condition is true, the loop will start over again, if it is false, the loop will end.<br/>

Statement 3 increases a value (i++) each time the code block in the loop has been executed.<br/></div>
<h2 id="">Nested Loops</h2>
<div class=" content">It is also possible to place a loop inside another loop. This is called a nested loop.<br></br>

The "inner loop" will be executed one time for each iteration of the "outer loop":
<h3>Example</h3>
<div class=" content">
  
</div>
</div>
<div class=" content"></div>
<h3>Other Concepts are Coming Soon Guys ~!</h3>
      </div>
    </div>
    </>

  )
}

export default Ctut