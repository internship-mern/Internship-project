import React, { useEffect, useState } from 'react'
import '../styles/Java.css'

const Java = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const containerStyle = {
    top:scrollPosition > 60 ? '0' : `${67-scrollPosition}px`,
    height:'100%'
  };


  return (
     <div >
      <div className="side-div-container" style={containerStyle}>
        <h1 >TOPIC</h1>
        <ul>
      <li><a href="#intro">Introduction</a></li>
      <li><a href="#key">Key features of Java</a></li>
      <li><a href="#install">Java Install</a></li>
      <li><a href="#start">Java Quickstart</a></li>
      <li><a href="#main">The main Method</a></li>
      <li><a href="#text">Print Text</a></li>
      <li><a href="#num">Print Numbers</a></li>
      <li><a href="#comm">Java Comments</a></li>
      <li><a href="#vari">Java Variables</a></li>
      <li><a href="#final">Final Variables
</a></li>
      <li><a href="#ident">Java Identifiers
</a></li>
      <li><a href="#dt">Java Data Types
</a></li>
      <li><a href="#cast">Java Type Casting
</a></li>
      <li><a href="#oper">Java Operators
</a></li>
      <li><a href="#str">Java Strings
</a></li>
      <li><a href="#method">String Methods</a></li>
      <li><a href="#if">Java Conditions and If Statements
</a></li>
      <li><a href="#switch">Java Switch Statements
</a></li>
      <li><a href="#while">Java While Loop
</a></li>
      <li><a href="#for">Java For Loop
</a></li>
      <li><a href="#arr">Java Arrays
</a></li>
      </ul>

      </div>
      <div class="color">
      <h1 id="intro">JAVA Introduction</h1>
       <div class=" content">
        <p>
           
Java is a programming language and a platform. Java is a high level, robust, object-oriented and secure programming language.<br/>
Java was developed by Sun Microsystems (which is now the subsidiary of Oracle) in the year 1995. <br/>
James Gosling is known as the father of Java. Before Java, its name was Oak. Since Oak was already a registered company, so James Gosling and his team changed the name from Oak to Java.
         
        </p>
       </div>
       <h1 id="key">Key features of Java </h1>
       <div class=" content">
        <ul>
    <li><b>Platform Independence:</b> Java programs are compiled into an intermediate bytecode that can run on any platform with a Java Virtual Machine (JVM). This allows Java applications to be executed on different operating systems without modification.</li>
    <li><b>Object-Oriented:</b> Java follows the object-oriented programming paradigm, which means everything in Java is an object. This encourages modular and organized programming.</li>
    <li><b>Garbage Collection:</b> Java has an automatic garbage collection mechanism that manages memory, freeing developers from explicitly deallocating memory, which reduces memory leaks and segmentation faults. </li>
    <li><b>Strong Standard Library:</b> Java comes with a vast standard library (Java API) that provides ready-to-use classes and methods for common tasks, making development more efficient.</li>           
    <li><b>Multi-threading Support:</b> Java supports multithreading, allowing concurrent execution of code and better utilization of modern multi-core processors.</li>
    <li><b>Exception Handling:</b> Java has robust exception handling mechanisms to deal with errors and exceptions during runtime gracefully.</li>          
    <li><b>Security: </b>Java has built-in security features like a security manager and a strong security model, making it suitable for developing secure applications.</li>
          </ul>
       </div>

         <h1 id=""> Why Use Java?</h1>

         <div class=" content">
          <ul>
            <li>Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)</li>
            <li>It is one of the most popular programming language in the world</li>
            <li>It has a large demand in the current job market</li>
            <li>It is easy to learn and simple to use</li>
            <li>It is open-source and free</li>
            <li>It is secure, fast and powerful</li>
            <li>It has a huge community support (tens of millions of developers)</li>
            <li> Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development cost </li>
            <li>As Java is close to C++ and C#, it makes it easy for programmers to switch to Java or vice versa</li>
          </ul>
         </div>
            <h1 id="install">Java Install</h1>
            <div class=" content">
               <p>Some PCs might have Java already installed. To check if you have Java installed on a Windows PC, search in the start bar for Java or type the following in Command Prompt (cmd.exe):</p>
                {<p><b>C:\Users\Your Name &#62; java -version</b></p> }
                
                <p>
                If Java is installed, you will see something like this (depending on version):<br/>
                java version "11.0.1" 2018-10-16 LTS<br/>
                Java(TM) SE Runtime Environment 18.9 (build 11.0.1+13-LTS)<br/>
                Java HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.1+13-LTS, mixed mode)<br/>
                If you do not have Java installed on your computer, you can download it for free at oracle.com.
                <p>Note: In this tutorial, we will write Java code in a text editor. However, it is possible to write Java in an Integrated Development <br/>
                Environment, such as IntelliJ IDEA, Netbeans or Eclipse, which are particularly useful when managing larger collections of Java files.</p>
                </p>
            </div>
            <h1 id="">Setup for Windows</h1>
            <div class=" content">
             <p><b>To install Java on Windows:</b></p>
            <ol>
            {<li>Go to "System Properties" (Can be found on Control Panel &#62; System and Security &#62; System &#62; Advanced System Settings)</li> }
<li>Click on the "Environment variables" button under the "Advanced" tab</li>
<li>Then, select the "Path" variable in System variables and click on the "Edit" button</li>
<li>Click on the "New" button and add the path where Java is installed, followed by \bin. By default, Java is installed in C:\Program Files\Java\jdk-11.0.1 (If nothing else was specified when you installed it). In that case, You will have to add a new path with: C:\Program Files\Java\jdk-11.0.1\bin</li>
<li>Then, click "OK", and save the settings</li>
<li>At last, open Command Prompt (cmd.exe) and type java -version to see if Java is running on your machine</li>
</ol>
</div>
<h1 id="start">Java Quickstart</h1>
<div class=" content">
<p>In Java, every application begins with a class name, and that class must match the filename.
<br/>
Let's create our first Java file, called Main.java, which can be done in any text editor (like Notepad).
<br/>
The file should contain a "Hello World" message, which is written with the following code:
<br/>
Main.java</p>


<code>
public class Main &#123; <br/>
  public static void main(String[] args)
  <br/> &#123;<br/>
    System.out.println("Hello World");<br/>
  &#125;<br/>
  &#125;
</code>
<p>
Every line of code that runs in Java must be inside a class. In our example, we named the class Main.
 <br/>
A class should always start with an uppercase first letter.
<br/>
Note: Java is case-sensitive: "MyClass" and "myclass" has different meaning.
<br/>
The name of the java file must match the class name. When saving the file, save it using the class name and add ".java" to the end of the filename. \
<br/>To run the example above on your computer, make sure that Java is properly installed: Go to the Get Started Chapter for how to install Java. The output should be:
<br/>
Hello World
</p>
</div>
<h1 id="main">The main Method</h1>
<div class=" content">
<p>The main() method is required and you will see it in every Java program:</p>
<code>public static void main(String[] args)</code>
<p>Any code inside the main() method will be executed. Don't worry about the keywords before and after main. You will get to know them bit by bit while reading this tutorial.
<br/>
For now, just remember that every Java program has a class name which must match the filename, and that every program must contain the main() method.
</p>
</div>
<h1 id="">System.out.println()
</h1>
<div class=" content">
<p>Inside the main() method, we can use the println() method to print a line of text to the screen:

</p>
  <code>public static void main(String[] args) <br/>&#123;<br/>
    System.out.println("Hello World");<br/>
    &#125;<br/>
    </code>

</div>
<h1 id="text">Print Text</h1>
<div class=" content">
  <p>You can add as many println() methods as you want. Note that it will add a new line for each method:
    <br/>
    <b>Example:</b>
  </p>
  <code>
System.out.println("Hello World!");<br/>
System.out.println("I am learning Java.");<br/>
System.out.println("It is awesome!");<br/>
</code>
</div>
<h1 id="">Double Quotes</h1>
<div class=" content">
<p>When you are working with text, it must be wrapped inside double quotations marks "".
<br/>
If you forget the double quotes, an error occurs:
<br/>
<b>Example:</b></p>
<code>System.out.println("This sentence will work!");
  
  <br/>
System.out.println(This sentence will produce an error);
</code>
</div>
<h1 id="num">
Print Numbers
</h1>
<div class=" content">
  <p>You can also use the println() method to print numbers.
<br/>
However, unlike text, we don't put numbers inside double quotes:
<br/>
<b>Example:</b></p>
<code>
System.out.println(3);<br/>
System.out.println(358);<br/>
System.out.println(50000);<br/>
</code>
</div>
<h1 id="comm">Java Comments</h1>
<div class=" content">
  <p>
  Comments can be used to explain Java code, and to make it more readable. 
  <br/>It can also be used to prevent execution when testing alternative code.
  </p>
</div>
<h1 id="">Single-line Comments</h1>
<div class=" content">
<p>
Single-line comments start with two forward slashes (//).
<br/>
Any text between // and the end of the line is ignored by Java (will not be executed).
<br/>
This example uses a single-line comment before a line of code:
<br/>
<b>Example:</b>
</p>
<code>
// This is a comment
System.out.println("Hello World");  
</code>
<p>This example uses a single-line comment at the end of a line of code:
  <br/>
  <b>Example:</b>
</p>
<code>System.out.println("Hello World"); // This is a comment</code>

</div>
<h1 id="">Java Multi-line Comments</h1>
<div class=" content">
<p>
Multi-line comments start with /* and ends with */.
<br/>
Any text between /* and */ will be ignored by Java.
<br/>
This example uses a multi-line comment (a comment block) to explain the code:
<br/>
<b>Example:</b>
</p>
<code>/* The code below will print the words Hello World
to the screen, and it is amazing */
<br/>
System.out.println("Hello World");
</code>
</div>
<h1 id="vari">
Java Variables
</h1>
<div class=" content">
  <p>
  Variables are containers for storing data values.
<br/>
In Java, there are different types of variables, for example:
  </p>
  <ol>
    <li>  String - stores text, such as "Hello". String values are surrounded by double quotes</li>
    <li>int - stores integers (whole numbers), without decimals, such as 123 or -123</li>
    <li>float - stores floating point numbers, with decimals, such as 19.99 or -19.99 </li>
    <li>char - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes</li>
    <li>boolean - stores values with two states: true or false</li>
  </ol>
</div>
<h1 id="">Declaring (Creating) Variables</h1>
<div class=" content">
<p>To create a variable, you must specify the type and assign it a value:</p>
<p>Syntax: type variableName = value;</p>
<p>
Where type is one of Java's types (such as int or String), and variableName is the name of the variable (such as x or name). 
<br/>The equal sign is used to assign values to the variable.
<br/>
To create a variable that should store text, look at the following example:
</p>
<code>
String name = "John";
System.out.println(name);</code>
<p>To create a variable that should store a number, look at the following example:</p>
<code>
int myNum = 15;
System.out.println(myNum);
</code>

</div>
<h1 id="final">Final Variables</h1>
<div class=" content">
<p>If you don't want others (or yourself) to overwrite existing values, use the final keyword 
  <br/>(this will declare the variable as "final" or "constant", which means unchangeable and read-only):
</p>
<code>
final int myNum = 15;
myNum = 20;  // will generate an error: cannot assign a value to a final variable
</code>
</div>
<h1 id="">Other Types</h1>
<div class=" content">
<p>A demonstration of how to declare variables of other types:</p>
<p>
<b>Example : 
</b><br/>
int myNum = 5;<br/>
float myFloatNum = 5.99f;<br/>
char myLetter = 'D';<br/>
boolean myBool = true;<br/>
String myText = "Hello";<br/>
</p>
</div>
<h1 id="">Display Variables</h1>
<p>The println() method is often used to display variables.
<br/>
To combine both text and a variable, use the + character:
<br/>
<b>Example:</b>
<br/>
String name = "John";<br/>
System.out.println("Hello " + name);
<br/>
</p>
<h1 id="">Declare Many Variables</h1>
<p>
To declare more than one variable of the same type, you can use a comma-separated list:
<br/>
<b>Example:</b><br/>
<b>Instead of writing:</b><br/>

int x = 5;<br/>
int y = 6;<br/>
int z = 50;<br/>
System.out.println(x + y + z);<br/>
<b>You can simply write:</b><br/>

int x = 5, y = 6, z = 50;<br/>
System.out.println(x + y + z);<br/>

</p>
<h1 id="ident">Java Identifiers</h1>
<div class=" content">
<p>
All Java variables must be identified with unique names.
<br/>
These unique names are called identifiers.
<br/>
Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).
<br/>
Note: It is recommended to use descriptive names in order to create understandable and maintainable code:
<br/>
<b>Example:</b><br/>
// Good<br/>
int minutesPerHour = 60;<br/>
// OK, but not so easy to understand what m actually is<br/>
int m = 60;<br/>
</p>
</div>
<h1 id="dt">Java Data Types</h1>
<div class=" content"><p>
As explained in the previous chapter, a variable in Java must be a specified data type:
<br/>
<b>Example:</b><br/>
int myNum = 5;               // Integer (whole number)<br/>
float myFloatNum = 5.99f;    // Floating point number<br/>
char myLetter = 'D';         // Character<br/>
boolean myBool = true;       // Boolean<br/>
String myText = "Hello";     // String<br/>
</p></div>
<h1 id="">Java Numbers</h1>
<div class=" content">
<p>
Primitive number types are divided into two groups:
<br/>
Integer types stores whole numbers, positive or negative (such as 123 or -456), without decimals. Valid types are byte, short, int and long. Which type you should use, depends on the numeric value.
<br/>
Floating point types represents numbers with a fractional part, containing one or more decimals. There are two types: float and double.
<br/></p>
</div>
<h1 id="">Non-Primitive Data Types</h1>
<div class=" content">
<p>
  Non-primitive data types are called reference types because they refer to objects.
<br/>
The main difference between primitive and non-primitive data types are:
<br/>

Primitive types are predefined (already defined) in Java. Non-primitive types are created by the programmer and is not defined by Java (except for String).
<br/>
Non-primitive types can be used to call methods to perform certain operations, while primitive types cannot.<br/>

A primitive type has always a value, while non-primitive types can be null.<br/>

A primitive type starts with a lowercase letter, while non-primitive types starts with an uppercase letter.<br/>

Examples of non-primitive types are Strings, Arrays, Classes, Interface, etc. You will learn more about these in a later chapter.<br/>
</p>
</div>
<h1 id="cast">Java Type Casting</h1>
<div class=" content">
<p>
Type casting is when you assign a value of one primitive data type to another type.
<br/>
In Java, there are two types of casting:
<br/>
Widening Casting (automatically) - converting a smaller type to a larger type size<br/>
byte -&#62; short -&#62; char -&#62; int -&#62; long -&#62; float -&#62; double<br/>

Narrowing Casting (manually) - converting a larger type to a smaller size type<br/>
double -&#62; float -&#62; long -&#62; int -&#62; char -&#62; short -&#62; byte<br/>

</p>


</div>
<h1 id="oper">Java Operators</h1>
<div class=" content">
<p>Java divides the operators into the following groups:</p>
<ul>
<li>Arithmetic operators
</li>
<li>Assignment operators
</li>
<li>Comparison operators
</li>
<li>Logical operators
</li>
<li>
Bitwise operators
<br/>
<b>   Soon Will be Explained!
</b>
</li>
</ul>
</div>
<h1 id="str">Java Strings</h1>
<div class=" content">
  <p>
  Strings are used for storing text.
  <br/>
A String variable contains a collection of characters surrounded by double quotes:
<br/>
<b>Example:</b><br/>
Create a variable of type String and assign it a value:<br/>
<br/>
String greeting = "Hello";<br/>
  </p>
</div>
<h1 id="method">All String Methods</h1>
<div class=" content">
  <p>
  Method	- Description	:<br/>

charAt()-Returns the character at the specified index (position)<br/>

codePointAt()-	Returns the Unicode of the character at the specified index	<br/>

codePointBefore()	-Returns the Unicode of the character before the specified index	<br/>

codePointCount()	-Returns the number of Unicode values found in a string.	<br/>

compareTo()-	Compares two strings lexicographically	<br/>

compareToIgnoreCase()-	Compares two strings lexicographically, ignoring case differences	<br/>

concat()	-Appends a string to the end of another string	<br/>

contains()-	Checks whether a string contains a sequence of characters	<br/>

contentEquals()	-Checks whether a string contains the exact same sequence of characters of the specified CharSequence or StringBuffer	<br/>

copyValueOf()	-Returns a String that represents the characters of the character array	<br/>

endsWith()	-Checks whether a string ends with the specified character(s)	<br/>

equals()-	Compares two strings. Returns true if the strings are equal, and false if not	<br/>

equalsIgnoreCase()	-Compares two strings, ignoring case considerations	<br/>


toCharArray()	-Converts this string to a new character array	<br/>

toLowerCase()	-Converts a string to lower case letters	<br/>

toString()-	Returns the value of a String object	<br/>

toUpperCase()	-Converts a string to upper case letters	<br/>

trim()-	Removes whitespace from both ends of a string	<br/>

valueOf()	-Returns the string representation of the specified value	<br/>

  </p>
  <p>
    ect.....,
  </p>
</div>
<h1 id="if">Java Conditions and If Statements</h1>
<div class=" content">
  <p>
  You already know that Java supports the usual logical conditions from mathematics:<br/>

Less than: a &#62; b<br/>
Less than or equal to: a  &#60;= b <br/>
Greater than: a &#62; b<br/>
Greater than or equal to: a &#62;= b <br/>
Equal to a == b<br/>
Not Equal to: a != b<br/>
You can use these conditions to perform different actions for different decisions.<br/>

Java has the following conditional statements:<br/>

Use if to specify a block of code to be executed, if a specified condition is true<br/>
Use else to specify a block of code to be executed, if the same condition is false<br/>
Use else if to specify a new condition to test, if the first condition is false<br/>
Use switch to specify many alternative blocks of code to be executed<br/>

  </p>
  <p>
  Use the else statement to specify a block of code to be executed if the condition is false.
  <br/>
Syntax:<br/>
if (condition) &#123;<br/>
  //block of code to be executed if the condition is true
  &#125;
  else &#123;<br/>
  // block of code to be executed if the condition is false
  &#125;
  <br/>
Example:<br/>
int time = 20<br/>;
if (time  &#60; 18) &#123;<br/>
  System.out.println("Good day.");<br/>
  &#125; else &#123;<br/>
  System.out.println("Good evening.");<br/>
  &#125;
  <br/>
// Outputs "Good evening."<br/>
  </p>
</div>
<h1 id="switch">
Java Switch Statements
</h1>
<div class=" content">
  <p>
  Instead of writing many if..else statements, you can use the switch statement.
  <br/>
The switch statement selects one of many code blocks to be executed:
<br/>
SyntaxGet your own Java Server<br/>
switch(expression) &#123;<br/>
  case x:<br/>
    // code block<br/>
    break;<br/>
  case y:<br/>
    // code block<br/>
    break;<br/>
  default:<br/>
    // code block<br/>
   &#125;<br/>

<b>Example:</b><br/>
int day = 4;<br/>
switch (day) &#123; <br/>
  case 1:<br/>
    System.out.println("Monday");<br/>
    break;<br/>
  case 2:<br/>
    System.out.println("Tuesday");<br/>
    break;<br/>
  case 3:<br/>
    System.out.println("Wednesday");<br/>
    break;<br/>
  case 4:<br/>
    System.out.println("Thursday");<br/>
    break;<br/>
  case 5:<br/>
    System.out.println("Friday");<br/>
    break;<br/>
  case 6:<br/>
    System.out.println("Saturday");<br/>
    break;<br/>
  case 7:<br/>
    System.out.println("Sunday");<br/>
    break;<br/>
    &#125;<br/>
// Outputs "Thursday" (day 4)<br/>

  </p>
</div>
<h1 id="while">  Java While Loop</h1>
<div class=" content">
  <p>
The while loop loops through a block of code as long as a specified condition is true:<br/>

Syntax<br/>
while (condition) &#123;<br/>
  code block to be executed
  &#125;<br/>
In the example below, the code in the loop will run, over and over again, as long as a variable (i) is less than 5:<br/>

Example<br/>
int i = 0;<br/>
while (i &#60; 5) &#123;<br/>
  System.out.println(i);<br/>
  i++;<br/>
  &#125;<br/>

  </p>
</div>
<h1 id="for">  Java For Loop</h1>
<div class=" content">
  <p>
When you know exactly how many times you want to loop through a block of code, use the for loop instead of a while loop:<br/>

Syntax<br/>
for (statement 1; statement 2; statement 3) &#123;<br/>
  // code block to be executed<br/>
  &#125;<br/>
Example<br/>
for (int i = 0; i  &#60; 5; i++) &#123;<br/>
  System.out.println(i);<br/>
  &#125;<br/>
  </p>
</div>
<h1 id="arr">Java Arrays</h1>
<div class=" content">
  <p>
Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.
<br/>
To declare an array, define the variable type with square brackets:
<br/>
String[] cars;<br/>
We have now declared a variable that holds an array of strings. To insert values to it, you can place the values in a comma-separated list, inside curly braces:
<br/>
String[] cars = &#123;"Volvo", "BMW", "Ford", "Mazda"&#125;;<br/>
To create an array of integers, you could write:<br/>

int[] myNum = &#123;10, 20, 30, 40&#125;; <br/>
</p>
</div>
<h2>Other Concepts are Coming Soon Guys ~!</h2>
    </div>       
    </div>    
  )
}
export default Java