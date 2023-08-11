import React from 'react'
import '../styles/Python.css'

const Python = () => {
  return (
    <div>
      <div className="side-div-container">
        <h1>TOPIC</h1>
        <ul>
        <li><a href="#intro">Python Introduction</a></li>
        <li><a href="#start">Python Getting Started</a></li>
        <li><a href="#quic">Python Quickstart</a>
</li>
        <li><a href="#cmm">The Python Command Line</a>
</li>
        <li><a href="#syn">Python Syntax</a>
</li>
        <li><a href="#idn">Python Indentation</a>
</li>
        <li><a href="#var">Python Variables</a>
</li>
        <li><a href="#cas">Comments</a></li>
        <li><a href="#cas">Casting</a></li>
        <li><a href="#varname">Python - Variable Names</a></li>
        <li><a href="#gn">Python - Global Variables</a></li>
        <li><a href="#dt">Python Data Type</a>s</li>
        <li><a href="#op">Python Operators</a></li>
        <li><a href="#li">Python Lists</a></li>
        <li><a href="#tu">Python Tuples</a></li>
        <li><a href="#se">Python Sets</a></li>
        <li><a href="#di">Python Dictionaries</a></li>
        <li><a href="#if">Python If ... Else</a></li>
        <li><a href="#wl">Python While Loops</a></li>
        <li><a href="#loop">Python For Loops</a></li>
        <li><a href="#ra">The range() Function</a></li>
        <li><a href="#ne">Nested Loops</a></li>
        <li><a href="#fu">Python Functions</a></li>
        <li><a href="#ag">Arguments</a></li>
        <li><a href="#rcs">Recursion</a></li>
        <li><a href="#arr">Python Arrays</a></li>
        <li><a href="#class">Python Classes and Objects</a></li>
        <li><a href="#file">Python File Handling</a></li>
        
        </ul>
      </div>
        <div class="color">
             <h1 id="intro">Python Introduction</h1>
             <h2>What is Python?</h2>
             <div class=" content">
             <p>Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.</p>
             </div>
             <h3>It is used for:</h3>
             <div class=" content">
             <ul>
              <li>web development (server-side),</li>
              <li>software development,</li>
              <li>mathematics,</li>
               <li>system scripting.</li>
             </ul>
             </div>
             <h2>What can Python do?</h2>
             <div class=" content">
             <ul>
              <li>Python can be used on a server to create web applications.</li>
              <li>Python can be used alongside software to create workflows.</li>
              <li>Python can connect to database systems. It can also read and modify files.</li>
              <li>Python can be used to handle big data and perform complex mathematics.</li>
              <li>Python can be used for rapid prototyping, or for production-ready software development.</li>
             </ul>
             </div>
             <h2>Why Python?</h2>
             <div class=" content">
             <ul>
              <li>Python works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc).</li>
              <li>Python has a simple syntax similar to the English language.</li>
              <li>Python has syntax that allows developers to write programs with fewer lines than some other programming languages.</li>
              <li>Python runs on an interpreter system, meaning that code can be executed as soon as it is written. This means that prototyping can be very quick.</li>
              <li>Python can be treated in a procedural way, an object-oriented way or a functional way.</li>
             </ul>
             </div>
             <h2 id="syn">Python Syntax compared to other programming languages</h2>
             <div class=" content">
             <ul>
             <li>Python was designed for readability, and has some similarities to the English language with influence from mathematics.</li>
             <li>Python uses new lines to complete a command, as opposed to other programming languages which often use semicolons or parentheses.</li>
             <li>Python relies on indentation, using whitespace, to define scope; such as the scope of loops, functions and classes. Other programming languages often use curly-brackets for this purpose.</li>
             </ul>
             </div>
            <h2>Example</h2>
            <div class=" content">
              <h3>print("Hello, World!")</h3>
            </div>
            <h1 id="start">Python Getting Started</h1>
            <h2>Python Install</h2>
            <div class=" content">
            <p>Many PCs and Macs will have python already installed.</p>
            <p>To check if you have python installed on a Windows PC, search in the start bar for Python or run the following on the Command Line (cmd.exe):</p>
            </div>
             <div class=" content">
              <h3>C:\Users\Your Name&gt;python --version</h3>
             </div>
             <div class=" content">
             <p>If you find that you do not have Python installed on your computer, then you can download it for free from the following website: https://www.python.org/</p>
             </div>
             <h1 id="quic">Python Quickstart</h1>
             <div class=" content">
             <p>Python is an interpreted programming language, this means that as a developer you write Python (.py) files in a text editor and then put those files into the python interpreter to be executed.</p>
             <p>The way to run a python file is like this on the command line:</p>
             </div>
             <div class=" content">
              <h3>C:\Users\Your Name python&gt;helloworld.py</h3>
              <p>Where "helloworld.py" is the name of your python file.</p>
              <p>Let's write our first Python file, called helloworld.py, which can be done in any text editor.</p>
              <div class=" content">
                <p>helloworld.py</p>
                <h3>print("Hello, World!")</h3>
              </div>
             </div>
             <div class=" content">
              <p>Simple as that. Save your file. Open your command line, navigate to the directory where you saved your file, and run:</p>
              </div>
             <div class=" content">
              <h3>C:\Users\Your Name&gt;python helloworld.py</h3>
              </div>
              <div class=" content">
                <p>The output should read:</p>
                </div> 
                <div class=" content">
                  <h3>Hello, World!</h3>
                </div>
                <h1 id="cmm">The Python Command Line</h1>
                <div class=" content">
                  <p>To test a short amount of code in python sometimes it is quickest and easiest not to write the code in a file. This is made possible because Python can be run as a command line itself.</p>
                  <p>Type the following on the Windows, Mac or Linux command line:</p>
                </div>
                <div class=" content">
                  <h3>C:\Users\Your Name&gt;python</h3>
                </div>
                <div class=" content">
                  <p>Or, if the "python" command did not work, you can try "py":</p>
                </div>
                <div class=" content">
                  <h3>C:\Users\Your Name&gt;py</h3>
                </div>
                <div class=" content">
                  <p>From there you can write any python, including our hello world example from earlier in the tutorial:</p>

                </div>
                <div class=" content">
                  <h3>print("Hello, World!")</h3>
                 
                </div>
                <div class=" content">
                  <p>Which will write "Hello, World!" in the command line:</p>
                </div>
                <div class=" content">
                  <h3>Hello, World!</h3>
                </div>
                <div class=" content">
                  <p>Whenever you are done in the python command line, you can simply type the following to quit the python command line interface:</p>
                </div>
                <div class=" content">
                  <h3>exit()</h3>
                </div>
                <h1>Python Syntax</h1>
                <h2>Execute Python Syntax</h2>
                <div class=" content">
                  <p>As we learned in the previous page, Python syntax can be executed by writing directly in the Command Line:</p>
                </div>
                <div class=" content">
                  <h3>print("Hello, World!") <br/>Hello, World!</h3>
                  
                </div>
                <div class=" content">
                  <p>Or by creating a python file on the server, using the .py file extension, and running it in the Command Line:</p>
                </div>
                <div class=" content">
                  <h3>C:\Users\Your Name&gt;python myfile.py</h3>
                </div>
                <h1 id="idn">Python Indentation</h1>
                <div class=" content">
                  <p>Indentation refers to the spaces at the beginning of a code line.</p>
                  <p>Where in other programming languages the indentation in code is for readability only, the indentation in Python is very important.</p>
                  <p>Python uses indentation to indicate a block of code.</p>
                </div>
                <div class=" content">
                  <h2>Example</h2>
                  <h3>if 5&gt;2: <br/><div class=" content"></div>print("Five is greater than two!")</h3>
                </div>
                <div class=" content">
                  <p>Python will give you an error if you skip the indentation:</p>
                </div>
                <div class=" content">
                  <h2>Example</h2>
                  <p>Syntax Error:</p>
                </div>
                <div class=" content">
                  <h3>if 5 &gt; 2: <br/><div class=" content"></div>print("Five is greater than two!")</h3>
                </div>
                <div class=" content">
                  <p>The number of spaces is up to you as a programmer, the most common use is four, but it has to be at least one.</p>
                </div>
                <div class=" content">
                  <h2>Example</h2>
                  <h3>if 5 &gt; 2: <br/><div class=" content"></div> print("Five is greater than two!") <br/><div class=" content"></div>if 5 &gt 2:<br/><div class=" content"></div>print("Five is greater than two!") </h3>

                </div>
                <div class=" content">
                  <p>You have to use the same number of spaces in the same block of code, otherwise Python will give you an error:</p>
                </div>
                <div class=" content">
                  <h2>Example</h2>
                  <h4>Syntax Error:</h4>
                  <h3>if 5 &gt; 2:<br/><div class=" content"></div>print("Five is greater than two!")<br/><div class=" content"></div> print("Five is greater than two!")</h3>

                </div>
                <h1 id="var">Python Variables</h1>
                <div class=" content">
                <p>In Python, variables are created when you assign a value to it:</p>
                </div>
                <div class=" content">
                  <h3>Example</h3>
                  <h4>Variables in Python:</h4>
                  <h3>x = 5 <br/>y = "Hello, World!"</h3>
                </div>
                <h1 id="cas">Comments</h1>
                <div class=" content">
                  <p>Python has commenting capability for the purpose of in-code documentation.</p>
                  <p>Comments start with a #, and Python will render the rest of the line as a comment:</p>
                  <div class=" content">
                    <h3>Example</h3>
                    <h4>Comments in Python:</h4>
                    <h3>#This is a comment.<br/> print("Hello, World!")</h3>
                  
                  </div>
                </div>
                <h1>Python Comments</h1>
                <div class=" content">
                  <p>Comments can be used to explain Python code.</p>
                  <p>Comments can be used to make the code more readable.</p>
                  <p>Comments can be used to prevent execution when testing code.</p>

                </div>
                
                  <h1>Creating a Comment</h1>
                  <div class=" content">Comments starts with a #, and Python will ignore them:</div>
                  <div class=" content">
                    <h3>Example</h3>
                    <h3>#This is a comment  <br/>print("Hello, World!")</h3>
                    
                  </div>
                  <div class=" content">
                    <p>Comments can be placed at the end of a line, and Python will ignore the rest of the line:</p>
                  </div>
                  <div class=" content">
                    <h3>Example</h3>
                    <h3>print("Hello, World!") #This is a comment</h3>
                  </div>
                  <div class=" content">
                    <p>A comment does not have to be text that explains the code, it can also be used to prevent Python from executing code:</p>
                  </div>
                  <div class=" content">
                    <h3>#print("Hello, World!")<br/>print("Cheers, Mate!")</h3>
                  </div>
                  <h1>Multiline Comments</h1>
                  <div class=" content">
                    <p>Python does not really have a syntax for multiline comments.</p>
                    <p>To add a multiline comment you could insert a # for each line:</p>
                  </div>
                 <div class=" content">
                  <h3>Example</h3>
                  <h3>#This is a comment<br/>#written in<br/>#more than just one line<br/>print("Hello, World!")</h3>
                 </div>
                 <div class=" content">
                  <p>Or, not quite as intended, you can use a multiline string.</p>
                  <p>Since Python will ignore string literals that are not assigned to a variable, you can add a multiline string (triple quotes) in your code, and place your comment inside it:</p>
                 </div>
                 <div class=" content">
                  <h3>Example</h3>
                  <h3>"""<br/>This is a comment<br/>written in<br/>more than just one line<br/>"""<br/>print("Hello, World!")</h3>
                 </div>
                 <div class=" content">
                  <p>As long as the string is not assigned to a variable, Python will read the code, but then ignore it, and you have made a multiline comment.</p>
                 </div>
                <h1>Python Variables</h1>
                <div class=" content">
                  <h3>Variables</h3>
                  <p>Variables are containers for storing data values.</p>
                </div>
                <div class=" content">
                  <h3>Creating Variables</h3>
                  <p>Python has no command for declaring a variable.</p>
                  <p>A variable is created the moment you first assign a value to it.</p>
                </div>
                <div class=" content">
                  <h3>Example</h3>
                  <h3>x = 5<br/>y = "John"<br/>print(x)<br/>print(y)</h3>
                </div>
                <div class=" content">
                  <p>Variables do not need to be declared with any particular type, and can even change type after they have been set.</p>
                </div>
                <div class=" content">
                  <h3>Example</h3>
                  <h3>x = 4    #x is of type int<br/>x = "Sally" # x is now of type str<br/>print(x)</h3>
                </div>
               <h1 id="cas">Casting</h1>
               <div class=" content">
                <p>
                If you want to specify the data type of a variable, this can be done with casting.
                </p>
                </div> 
                <div class=" content">
                  <h3>Example</h3>
                  <h3>x = str(3)    # x will be '3'<br/>y = int(3)    # y will be 3<br/>z = float(3)  # z will be 3.0</h3>
                </div>
                <h3>Get the Type</h3>
                <div class=" content">
                  <p>You can get the data type of a variable with the type() function.</p>
                </div>
                <div class=" content">
                  <h3>Example</h3>
                  <h3>x = 5<br/>y = "John"<br/>print(type(x))<br/>print(type(y))</h3>
                </div>
                <h1>Single or Double Quotes?</h1>
                <div class=" content">
                  <p>String variables can be declared either by using single or double quotes:</p>

                </div>
                <div class=" content">
                  <h3>Example</h3>
                  <h3>x = "John"<br/># is the same as<br/>x = 'John'</h3>
                </div>
                <h1>Case-Sensitive</h1>
                <div class=" content">
                  <p>Variable names are case-sensitive.</p>
                  
                </div>
                <div class=" content">
                  <h3>Example</h3>
                  <h4>This will create two variables:</h4>
                  <h3>a = 4<br/>A = "Sally"<br/>#A will not overwrite a</h3>
                </div>
                <h1 id="varname">Python - Variable Names</h1>
                <div class=" content">
                  <h3>Variable Names</h3>
                  <p>A variable can have a short name (like x and y) or a more descriptive name (age, carname, total_volume). Rules for Python variables:</p>
                  <ul>
                    <li>A variable name must start with a letter or the underscore character</li>
                    <li>A variable name cannot start with a number</li>
                    <li>A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )</li>
                    <li>Variable names are case-sensitive (age, Age and AGE are three different variables)</li>
                    <li>A variable name cannot be any of the Python keywords.</li>
                  </ul>
                </div>
                <div class=" content">
                  <h3>Example</h3>
                  <h3>Legal variable name</h3>
                  <h3>myvar = "John"<br/>my_var = "John"<br/>_my_var = "John"<br/>myVar = "John"<br/>MYVAR = "John"<br/>myvar2 = "John"</h3>
                </div>
                <h1>Multi Words Variable Names</h1>
                <div class=" content">
                  <p>Variable names with more than one word can be difficult to read.</p>
                  <p>There are several techniques you can use to make them more readable:</p>
                </div>
                <h1>Camel Case</h1>
                <div class=" content">
                  <p>Each word, except the first, starts with a capital letter:</p>
                </div>
                <div class=" content">
                  <h3>myVariableName = "John"</h3>
                </div>
                <h1>Pascal Case</h1>
                <div class=" content">
                  <p>Each word starts with a capital letter:</p>
                </div>
                <div class=" content">
                  <h3>MyVariableName = "John"</h3>
                </div>
                <h1>Snake Case</h1>
                <div class=" content">
                  <p>Each word is separated by an underscore character:</p>
                </div>
                <div class=" content">
                  <h3>my_variable_name = "John"</h3>
                </div>
                <h1>Python Variables - Assign Multiple Values</h1>
                <div class=" content">
                  <h3>Many Values to Multiple Variables</h3>
                  <p>Python allows you to assign values to multiple variables in one line:</p>
                </div>
                <div class=" content">
                  <h3>Example</h3>
                  <h3>x, y, z = "Orange", "Banana", "Cherry"<br/>print(x)<br/>print(y)<br/>print(z)</h3>
                </div>
                <div class=" content">
                  <h3>One Value to Multiple Variables</h3>
                  <p>And you can assign the same value to multiple variables in one line:</p>
                </div>
                <div class=" content">
                  <h3>Example</h3>
                  <h3>x = y = z = "Orange"<br/>print(x)<br/>print(y)<br/>print(z)</h3>
                </div>
                <h1>Python - Output Variables</h1>
                <div class=" content">
                  <h3>Output Variables</h3>
                  <p>The Python print() function is often used to output variables.</p>
                </div>
                <div class=" content">
                  <h3>Example</h3>
                  <h3>x = "Python"<br/>y = "is"<br/>z = "awesome"<br/>print(x, y, z)</h3>
                </div>
                <h1 id="gn">Python - Global Variables</h1>
                <div class=" content">
                  <h3>Global Variables</h3>
                  <p>Variables that are created outside of a function (as in all of the examples above) are known as global variables.</p>
                  <p>Global variables can be used by everyone, both inside of functions and outside.</p>
                </div>
                <div class=" content">
                  <h3>Example</h3>
                  <h3>x = "awesome"<br/>def myfunc():<br/>print("Python is " + x)<br/>myfunc()</h3>
                </div>
                <div class=" content">
                  <p>If you create a variable with the same name inside a function, this variable will be local, and can only be used inside the function. The global variable with the same name will remain as it was, global and with the original value.</p>
                </div>
                <div class=" content">
                  <h3>Example</h3>
                  <p>Create a variable inside a function, with the same name as the global variable</p>
                  <h3>x = "awesome"<br/>def myfunc():<br/>x = "fantastic"<br/> print("Python is " + x)<br/>myfunc()<br/><br/>print("Python is " + x)</h3>
                </div>
                <h1>The global Keyword</h1>
                <div class=" content">
                  <p>Normally, when you create a variable inside a function, that variable is local, and can only be used inside that function.</p>
                  <p>To create a global variable inside a function, you can use the global keyword.</p>
                </div>
                <div class=" content">
                  <h3>Example</h3>
                  <p>If you use the global keyword, the variable belongs to the global scope:</p>
                  <h3>def myfunc():<br/>global x<br/>x = "fantastic"<br/>myfunc()<br/>print("Python is " + x)</h3>
                </div>
                <h1 id="dt">Python Data Types</h1>
                <div class=" content">
                  <h3>Built-in Data Types</h3>
                  <p>In programming, data type is an important concept.</p>
                  <p>Variables can store data of different types, and different types can do different things.</p>
                  <p>Python has the following data types built-in by default, in these categories:</p>
                  <div class=" content">
                    <ul>
                      <li>Text Type:	str</li>
                      <li>Numeric Types:	int, float, complex</li>
                      <li>Sequence Types:	list, tuple, range</li>
                      <li>Mapping Type:	dict</li>
                      <li>Set Types:	set, frozenset</li>
                      <li>Boolean Type:	bool</li>
                      <li>Boolean Type:	bool</li>
                      <li>None Type:	NoneType</li>
                    </ul>
                  </div>
                </div>
                <h1>Getting the Data Type</h1>
                <div class=" content">
                  <p>You can get the data type of any object by using the type() function:</p>

                </div>
                <div class=" content">
                  <h3>Example</h3>
                  <p>Print the data type of the variable x:</p>
                  <h3>x = 5<br/>print(type(x))</h3>
                </div>
                <h1>Setting the Specific Data Type</h1>
                <div class=" content">
                  <p>If you want to specify the data type, you can use the following constructor functions:</p>
                  <div class=" content">
                    <ul>
                      <li>x = str("Hello World")	str</li>
                      <li>x = int(20)	int	</li>
                      <li>x = float(20.5)	float</li>
                      <li>x = complex(1j)	complex</li>
                      <li>x = list(("apple", "banana", "cherry"))	list</li>
                      <li>x = set(("apple", "banana", "cherry"))	set</li>
                      <li>x = dict(name="John", age=36)	dict</li>
                      <li>x = frozenset(("apple", "banana", "cherry"))	frozenset</li>
                      <li>x = memoryview(bytes(5))	memoryview</li>
                    </ul>
                  </div>
                </div>
                <h1 id="op">Python Operators</h1>
                <div class=" content">
                  <p>Operators are used to perform operations on variables and values.</p>
                  <p>In the example below, we use the + operator to add together two values:</p>
                </div>
                <div class=" content">
                  <h3>Example</h3>
                  <h3>print(10 + 5) </h3>
                </div>
                <div class=" content">
                  <p>Python divides the operators in the following groups:</p>
                  <ul>
                    <li>Arithmetic operators</li>
                    <div class=" content">
                      <p>Examples</p>
                      <ul>
                        <li>Operator: +<br/>Name:Addition<br/>Example:x+y<br/></li>
                        <li>Operator: -<br/>Name:Subtraction<br/>Example:x-y<br/></li>
                        <li>Operator: *<br/>Name:Multiplication<br/>Example:x*y<br/></li>
                        <li>Operator: /<br/>Name:Division<br/>Example:x/y<br/></li>
                        <li>Operator: %<br/>Name:Modulus<br/>Example:x%y<br/></li>
                      </ul>
                    </div>
                    <li>Assignment operators</li>
                    <div class=" content">
                      <p>Examples</p>
                      <ul>
                        <li>Operator: ==<br/>Example:x = 5<br/>Same as:x = 5</li>
                        <li>Operator: +=<br/>Example:x += 3<br/>Same as:x = x + 3</li>
                        <li>Operator: -=<br/>Example:x -= 3<br/>Same as:x = x - 3</li>
                        <li>Operator: *=<br/>Example:x *= 3<br/>Same as:x = x * 3</li>
                        <li>Operator: /=<br/>Example:x /= 3<br/>Same as:x = x / 3</li>
                      </ul>
                    </div>
                    
                    <li>Comparison operators</li>
                    <div class=" content">
                      <p>Examples</p>
                      <ul>
                        <li>Operator: ==<br/>Name:Equal<br/>Example: x == y<br/></li>
                        <li>Operator: !=<br/>Name:Not equal<br/>Example: x != y<br/></li>
                        <li>Operator: <br/>Name:Greater than<br/>Example: x &gt; 3y <br/></li>
                       
                      </ul>
                    </div>
                    <li>Logical operators</li>
                    <div class=" content">
                      <p>Examples</p>
                      <ul>
                        <li>Operator: and<br/>Description:Returns True if both statements are true<br/>Example: x &lt; 5 and  x &lt; 3
                        </li>
                        <li>Operator: or<br/>Description:Returns True if one of the statements is true<br/>Example: x &lt; 5 orx &lt; 4</li>
                        <li>Operator: not <br/>Description:Reverse the result, returns False if the result is true<br/>Example: not(x &lt; 5 and x &lt; 3) </li>
                       
                      </ul>
                    </div>
                    <li>Identity operators</li>
                    <div class=" content">
                      <p>Examples</p>
                      <ul>
                        <li>Operator: is<br/>Description:Returns True if both variables are the same object<br/>Example:x is y<br/>
                        </li>
                        <li>Operator: is not<br/>Description:Returns True if both variables are not the same object<br/>Example: x is not y</li>
                        
                       
                      </ul>
                    </div>
                    
                    <li>Bitwise operators</li>
                    <div class=" content">
                      <p>Examples</p>
                      <ul>
                        <li>Operator:& <br/>Name:AND<br/>Description:Sets each bit to 1 if both bits are 1<br/>Example:x & y
                        </li>
                        <li>Operator:|<br/>Name:OR<br/>Description:Sets each bit to 1 if both bits are 1<br/>Example:x|y
                        </li>
                        <li>Operator:^<br/>Name:XOR<br/>Description:Sets each bit to 1 if only one of two bits is 1<br/>Example:x|y
                        </li>
                       
                      </ul>
                    </div>
                  </ul>
                </div>
                <h1 id="li">Python Lists</h1>
                <div class=" content">
                  <h3>List</h3>
                  <p>Lists are used to store multiple items in a single variable.</p>
                  <p>Lists are one of 4 built-in data types in Python used to store collections of data, the other 3 are Tuple, Set, and Dictionary, all with different qualities and usage.</p>

                </div>
                <div class=" content">
                  <h3>Example</h3>
                  <h4>Create a List:</h4>
                  <div class=" content">
                    <h3>thislist = ["apple", "banana", "cherry"]<br/>print(thislist)</h3>
                  </div>
                </div>
                <h1>List Items</h1>
                <div class=" content">
                  <p>List items are ordered, changeable, and allow duplicate values.</p>
                  <p>List items are indexed, the first item has index [0], the second item has index [1] etc.</p>
                </div>
                <h1>Ordered</h1>
                <div class=" content">
                  <p>When we say that lists are ordered, it means that the items have a defined order, and that order will not change.</p>
                  <p>If you add new items to a list, the new items will be placed at the end of the list.</p>
                </div>
                <h1>Changeable</h1>
                <div class=" content">
                  <p>The list is changeable, meaning that we can change, add, and remove items in a list after it has been created.</p>
                </div>
                <h1>Allow Duplicates</h1>
                <div class=" content">
                  <p>Since lists are indexed, lists can have items with the same value:</p>
                  
                </div>
                <h3>Example</h3>
                <p>Lists allow duplicate values:</p>
                <div class=" content">
                  <h3>thislist = ["apple", "banana", "cherry", "apple", "cherry"]</h3>
                  <h3>print(thislist)</h3>
                </div>
                <h3>List Length</h3>
                <p>To determine how many items a list has, use the len() function:</p>
                <h3>Example</h3>
                <p>Print the number of items in the list:</p>
                <div class=" content">
                  <h3>thislist = ["apple", "banana", "cherry"]<br/>print(len(thislist))</h3>
                </div>
                <h1>List Items - Data Types</h1>
                <p>List items can be of any data type:</p>
                <h3>Example</h3>
                <h4>String, int and boolean data types:</h4>
                <div class=" content">
                  <h3>list1 = ["apple", "banana", "cherry"]<br/>list2 = [1, 5, 7, 9, 3]<br/>list3 = [True, False, False]</h3>
                </div>
                <p>A list can contain different data types:</p>
                <h3>Example</h3>
                <p>A list with strings, integers and boolean values:</p>
                <div class=" content">
                  <h3>list1 = ["abc", 34, True, 40, "male"]</h3>
                </div>
                <h1>type()</h1>
                <p>From Python's perspective, lists are defined as objects with the data type 'list':</p>
                
                <h3>Example</h3>
                <p>What is the data type of a list?</p>
                <div class=" content">
                  <h3>mylist = ["apple", "banana", "cherry"]<br/> print(type(mylist))</h3>
                 
                </div>
                <h1>The list() Constructor</h1>
                <p>It is also possible to use the list() constructor when creating a new list.</p>
                <div class=" content">
                  <h3>Example</h3>
                  <p>Using the list() constructor to make a List:</p>
                  <div class=" content">
                    <h3>thislist = list(("apple", "banana", "cherry")) # note the double<br/>round-brackets<br/>print(thislist)</h3>
                  </div>

                </div>
                <h1 id="tu">Python Tuples</h1>
                <h3>Tuple</h3>
                <div class=" content">
                  <p>Tuples are used to store multiple items in a single variable.</p>
                  <p>Tuple is one of 4 built-in data types in Python used to store collections of data, the other 3 are List, Set, and Dictionary, all with different qualities and usage.</p>
                  <p>A tuple is a collection which is ordered and unchangeable.</p>
                  <p>Tuples are written with round brackets.</p>
                </div>
                <h3>Example</h3>
                <p>Create a Tuple:</p>
                <div class=" content">
                  <h3>thistuple = ("apple", "banana", "cherry")<br/>print(thistuple)</h3>
                </div>
                <h1>Tuple Items</h1>
                <div class=" content">
                  <p>Tuple items are ordered, unchangeable, and allow duplicate values.</p>
                  <p>Tuple items are indexed, the first item has index [0], the second item has index [1] etc.</p>
                </div>
                <h1>Ordered</h1>
                <div class=" content">
                  <p>When we say that tuples are ordered, it means that the items have a defined order, and that order will not change.</p>
                </div>
                <h1>Unchangeable</h1>
                <div class=" content">
                  <p>Tuples are unchangeable, meaning that we cannot change, add or remove items after the tuple has been created.</p>
                </div>
                <h1>Allow Duplicates</h1>
                <p>Since tuples are indexed, they can have items with the same value:</p>
                <h3>Example</h3>
                <p>Tuples allow duplicate values:</p>
                <div class=" content">
                  <h3>thistuple = ("apple", "banana", "cherry", "apple", "cherry")<br/>print(thistuple)</h3>
                </div>
                <h3>Tuple Length</h3>
                <p>To determine how many items a tuple has, use the len() function:</p>
                <h3>Example</h3>
                <p>Print the number of items in the tuple:</p>
                <div class=" content">
                  <h3>thistuple = ("apple", "banana", "cherry")<br/>print(len(thistuple))</h3>
                </div>
                <h3>Create Tuple With One Item</h3>
                <h3>Example</h3>
                <p>To create a tuple with only one item, you have to add a comma after the item, otherwise Python will not recognize it as a tuple.</p>
                <div class=" content">
                  <h3>thistuple = ("apple",)<br/>print(type(thistuple))</h3>
                  <h3>#NOT A TUPLE<br/>thistuple = ("apple")<br/>print(type(thistuple))</h3>
                </div>
                <h1>Tuple Items - Data Types</h1>
                <p>Tuple items can be of any data type:</p>
                <h3>Example</h3>
                <p>String, int and boolean data types:</p>
                <div class=" content">
                  <h3>tuple1 = ("apple", "banana", "cherry")<br/>tuple2 = (1, 5, 7, 9, 3)<br/>tuple3 = (True, False, False)</h3>
                </div>
                <h4>A tuple can contain different data types:</h4>
                <h3>Example</h3>
                <p>A tuple with strings, integers and boolean values:</p>
                <div class=" content">
                  <h3>tuple1 = ("abc", 34, True, 40, "male")</h3>
                </div>
                <h1>type()</h1>
                <div class=" content">
                  <p>From Python's perspective, tuples are defined as objects with the data type 'tuple':</p>
                  
                </div>
                <h3>Example</h3>
                <p>What is the data type of a tuple?</p>
                <div class=" content">
                  <h3>mytuple = ("apple", "banana", "cherry")<br/>print(type(mytuple))</h3>
                </div>
                <h1>The tuple() Constructor</h1>
                <p>It is also possible to use the tuple() constructor to make a tuple.</p>
                <h3>Example</h3>
                <p>Using the tuple() method to make a tuple:</p>
                <div class=" content">
                  <h3>thistuple = tuple(("apple", "banana", "cherry")) # note the double<br/>round-brackets<br/>print(thistuple)</h3>
                </div>
                <h1 id="se">Python Sets</h1>
                <h2>Set</h2>
                <div class=" content">
                  <p>Sets are used to store multiple items in a single variable.</p>
                  <p>Set is one of 4 built-in data types in Python used to store collections of data, the other 3 are List, Tuple, and Dictionary, all with different qualities and usage.</p>
                  <p>A set is a collection which is unordered, unchangeable*, and unindexed.</p>
                  <p>* Note: Set items are unchangeable, but you can remove items and add new items.</p>
                </div>
                <p>Sets are written with curly brackets.</p>
                <h3>Example</h3>
                <h2>Create a Set:</h2>
                <div class=" content">
                  <h3>thisset = &#123;"apple","banana","cherry" &#125;<br/>print(thisset)</h3>
                </div>
                <h1>Set Items - Data Types</h1>
                <p>Set items can be of any data type:</p>
                <h3>Example</h3>
                <p>Set items can be of any data type:</p>
                <div class=" content">
                  <h3>set1 = &#123;"apple", "banana", "cherry"&#125;<br/>set2 = &#123;1, 5, 7, 9, 3&#125;<br/>set3 = &#123;True, False, False&#125;</h3>
                </div>
                <p>A set can contain different data types:</p>
                <h3>Examples</h3>
                <p>A set with strings, integers and boolean values:</p>
                <div class=" content">
                set1 =  &#123;"abc", 34, True, 40, "male" &#125;
                </div>
                <h1>type()</h1>
                <p>From Python's perspective, sets are defined as objects with the data type 'set':</p>
                <h3>Example</h3>
                <p>What is the data type of a set?</p>
                <div class=" content">
                  <h3>myset = &#123;"apple", "banana", "cherry"&#125;<br/>print(type(myset))</h3>
                </div>
                <h1 id="di">Python Dictionaries</h1>
                <h3>Dictionary</h3>
                <div class=" content">
                  <p>Dictionaries are used to store data values in key:value pairs.</p>
                  <p>A dictionary is a collection which is ordered*, changeable and do not allow duplicates.</p>
                </div>
                <h3>Example</h3>
                <p>Create and print a dictionary:</p>
                <div class=" content">
                  <h3>thisdict = &#123;<br/>"brand": "Ford",<br/>"model": "Mustang",<br/> "year": 1964<br/>&#125;<br/>print(thisdict)</h3>
                </div>
                <h1>Dictionary Items</h1>
                <div class=" content">
                  <p>Dictionary items are ordered, changeable, and does not allow duplicates.</p>
                  <p>Dictionary items are presented in key:value pairs, and can be referred to by using the key name.</p>
                </div>
                <h3>Example</h3>
                <p>Print the "brand" value of the dictionary:</p>
                <div class=" content">
                <h3>thisdict = &#123;<br/>"brand": "Ford",<br/>"model": "Mustang",<br/> "year": 1964<br/>&#125;<br/>print(thisdict["brand"])</h3>
                </div>
                <h1 if="if">Python If ... Else</h1>
                <h3>Python Conditions and If statements</h3>
                <p>Python supports the usual logical conditions from mathematics:</p>
                <div class=" content">
                  <ul>
                    <li>Equals: a == b</li>
                    <li>Not Equals: a != b</li>
                    <li>Less than: a &lt; b</li>
                    <li>Less than or equal to: a &lt;= b</li>
                    <li>Greater than: a &gt; b</li>
                    <li>Greater than or equal to: a &gt;= b</li>
                  </ul>
                  <p>These conditions can be used in several ways, most commonly in "if statements" and loops.</p>
                  <p>An "if statement" is written by using the if keyword.</p>
                </div>

                <h3>Example</h3>
                <p>If statement:</p>
                <div class=" content">
                  <h3>a = 33</h3>
                  <h3>b = 200</h3>
                  <h3>if b &gt; a:</h3>
                  <h3> print("b is greater than a")</h3>

                </div>
                <div class=" content">
                <p>In this example we use two variables, a and b, which are used as part of the if statement to test whether b is greater than a. As a is 33, and b is 200, we know that 200 is greater than 33, and so we print to screen that "b is greater than a".</p>
                </div>
                <h1>Indentation</h1>
                <div class=" content">
                  <p>Python relies on indentation (whitespace at the beginning of a line) to define scope in the code. Other programming languages often use curly-brackets for this purpose.</p>
                </div>
                <h1>Elif</h1>
                <div class=" content">
                  <p>The elif keyword is Python's way of saying "if the previous conditions were not true, then try this condition".</p>
                </div>
                <h3>Example</h3>
                <div class=" content">
                  <h3>a = 33<br/>b = 33<br/>if b &gt; a:<br/> print("b is greater than a")<br/>elif a == b:<br/> print("a and b are equal")</h3>

                  
                </div>
                <p>In this example a is equal to b, so the first condition is not true, but the elif condition is true, so we print to screen that "a and b are equal".</p>
                <h1>Else</h1>
                <div class=" content">
                  <p>The else keyword catches anything which isn't caught by the preceding conditions.</p>
                </div>
                <h3>Example</h3>
                <div class=" content">
                  <h3>a = 200<br/>b = 33<br/>if b &gt; a:<br/>print("b is greater than a")<br/>elif a == b:<br/>print("a and b are equal")<br/>else:<br/> print("a is greater than b")</h3>
                </div>
                <p>In this example a is greater than b, so the first condition is not true, also the elif condition is not true, so we go to the else condition and print to screen that "a is greater than b".</p>
                <p>You can also have an else without the elif:</p>
                <div class=" content">
                  <h3>a = 200<br/>b = 33<br/>if b &gt; a:<br/>print("b is greater than a")<br/>else:<br/>print("b is not greater than a")</h3>
                </div>
                <h1>Short Hand If</h1>
                <div class=" content">
                  <p>If you have only one statement to execute, you can put it on the same line as the if statement.</p>
                </div>
                <h3>Example</h3>
                <p>One line if statement:</p>
                <div class=" content">
                  <h3>if a &gt; b: print("a is greater than b")</h3>
                </div>
                <h1>Short Hand If ... Else</h1>
                <div class=" content">
                  <p>If you have only one statement to execute, one for if, and one for else, you can put it all on the same line:</p>
                </div>
                <h3>Example</h3>
                <p>One line if else statement:</p>
                <div class=" content">
                  <h3>a = 2<br/>b = 330<br/>print("A") if a &gt; b else print("B")</h3>
                </div>
                <h1>And</h1>
                <div class=" content">
                  <p>The and keyword is a logical operator, and is used to combine conditional statements:</p>
                </div>
                <h3>Example</h3>
                <p>Test if a is greater than b, AND if c is greater than a:</p>
                <div class=" content">
                  <h3>a = 200<br/>b = 33<br/>c = 500<br/>if a &gt; b and c &gt; a:<br/>print("Both conditions are True")</h3>

                </div>
                <h3>Or</h3>
                <div class=" content">
                  <p>The or keyword is a logical operator, and is used to combine conditional statements:</p>
                </div>
                <h3>Example</h3>
                <p>Test if a is greater than b, OR if a is greater than c:</p>
                <div class=" content">
                <h3>a = 200<br/>b = 33<br/>c = 500<br/>if a &gt; b or a &gt; c:<br/>print("At least one of the conditions is True")</h3>
                </div>
                <h1>Not</h1>
                <div class=" content">
                  <p>The not keyword is a logical operator, and is used to reverse the result of the conditional statement:</p>
                </div>
                <h3>Example</h3>
                <p>Test if a is NOT greater than b:</p>
                <div class=" content">
                  <h3>a = 33<br/>b = 200<br/>if not a &gt; b:<br/>print("a is NOT greater than b")</h3>
                </div>
                <h1>The pass Statement</h1>
                <div class=" content">
                  <p>if statements cannot be empty, but if you for some reason have an if statement with no content, put in the pass statement to avoid getting an error.</p>
                </div>
                <h3>Example</h3>
                <h3>a = 33<br/>b = 200<br/>if b &gt; a:<br/>pass</h3>
                <h1 id="wl">Python While Loops</h1>
                <h3>Python Loops</h3>
                <div class=" content">
                  <p>Python has two primitive loop commands:</p>
                </div>
                <div class=" content">
                  <ul>
                    <li>while loops</li>
                    <li>for loops</li>
                  </ul>
                </div>
                <h1>The while Loop</h1>
                <div class=" content">
                  <p>With the while loop we can execute a set of statements as long as a condition is true.</p>
                </div>
                <h3>Example</h3>
                <p>Print i as long as i is less than 6:</p>
                <div class=" content">
                  <h3>i = 1<br/>while i &gt; 6:<br/>print(i)<br/> i += 1</h3>
                </div>
                <h3>Note: remember to increment i, or else the loop will continue forever.</h3>
                <div class=" content">
                The while loop requires relevant variables to be ready, in this example we need to define an indexing variable, i, which we set to 1.


                </div>
              <h1>The break Statement</h1>
              <div class=" content">
                <p>With the break statement we can stop the loop even if the while condition is true:</p>
              </div>
            <h3>Example</h3>
            <p>Exit the loop when i is 3:</p>
            <div class=" content">
              <h3>i = 1<br/>while i &lt; 6:<br/>print(i)<br/>if i == 3:<br/>break<b/> i += 1</h3>
            </div>
            <h3>The continue Statement</h3>
            <div class=" content">
              <p>With the continue statement we can stop the current iteration, and continue with the next:</p>
            </div>
            <h3>Example</h3>
            <p>Continue to the next iteration if i is 3:</p>
            <div class=" content">
            <h3>i = 0<br/>while i &lt; 6:<br/>i += 1<br/>if i == 3:<br/>continue<br/>print(i)</h3> 
            </div>
            <h1>The else Statement</h1>
            <div class=" content">
              <p>With the else statement we can run a block of code once when the condition no longer is true:</p>
            </div>
            <h3>Example</h3>
            <p>Print a message once the condition is false:</p>
            <div class=" content">
            <h3>i = 0<br/>while i &lt; 6:<br/>print(i)<br/>i += 1<br/>else:<br/> print("i is no longer less than 6")</h3> 
            </div>
            <h1 id="loop">Python For Loops</h1>
            <h3>Python For Loops</h3>
            <div class=" content">
              <p>A for loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).</p>
              <p>This is less like the for keyword in other programming languages, and works more like an iterator method as found in other object-orientated programming languages.</p>
              <p>With the for loop we can execute a set of statements, once for each item in a list, tuple, set etc.</p>
            </div>
            <h3>Example</h3>
            <p>Print each fruit in a fruit list:</p>
            <div class=" content">
              <h3>fruits = ["apple", "banana", "cherry"]<br/>for x in fruits:<br/>print(x)</h3>
            </div>
            <p>The for loop does not require an indexing variable to set beforehand.</p>
            <h3>Looping Through a String</h3>
            <p>Even strings are iterable objects, they contain a sequence of characters:</p>
            <h3>Example</h3>
            <p>Loop through the letters in the word "banana":</p>
            <div class=" content">
            <h3>for x in "banana":<br/> print(x)</h3>
             </div>
            <h1>The break Statement</h1>
            <div class=" content">
              <p>With the break statement we can stop the loop before it has looped through all the items:</p>
              <h3>Example</h3>
              <p>Exit the loop when x is "banana":</p>
              <div class=" content">
                <h3>fruits = ["apple", "banana", "cherry"]<br/>for x in fruits:<br/>print(x)<br/>if x == "banana":<br/>break</h3>
              </div>
            </div>
            <h3>Example</h3>
            <p>Exit the loop when x is "banana", but this time the break comes before the print:</p>
            <div class=" content">
              <h3>fruits = ["apple", "banana", "cherry"]<br/>for x in fruits:<br/>if x == "banana":<br/> break<br/>print(x)</h3>
            </div>
            <h1>The continue Statement</h1>
            <p>With the continue statement we can stop the current iteration of the loop, and continue with the next:</p>
            <h3>Example</h3>
            <p>Do not print banana:</p>
            <div class=" content">
              <h3>fruits = ["apple", "banana", "cherry"]<br/>for x in fruits:<br/>if x == "banana":<br/>continue<br/>print(x)</h3>
            </div>
            <h1 id="ra">The range() Function</h1>
            <div class=" content">
              <p>To loop through a set of code a specified number of times, we can use the range() function,</p>
              <p>The range() function returns a sequence of numbers, starting from 0 by default, and increments by 1 (by default), and ends at a specified number.</p>
            </div>
            <h3>Example</h3>
            <p>Using the range() function:</p>
            <div class=" content">
              <h3>for x in range(6):<br/>for x in range(6):</h3>
            </div>
            <p>Note that range(6) is not the values of 0 to 6, but the values 0 to 5.</p>
            <p>The range() function defaults to 0 as a starting value, however it is possible to specify the starting value by adding a parameter: range(2, 6), which means values from 2 to 6 (but not including 6):</p>
            <h3>Example</h3>
            <p>Using the start parameter:</p>
            <div class=" content">
              <h3>for x in range(2, 6):<br/>print(x)</h3>
            </div>
            <p>The range() function defaults to increment the sequence by 1, however it is possible to specify the increment value by adding a third parameter: range(2, 30, 3):</p>
            <h3>Example</h3>
            <p>Increment the sequence with 3 (default is 1):</p>
            <div class=" content">
              <h3>for x in range(2, 30, 3):<br/>print(x)</h3>
            </div>
            <h3>Else in For Loop</h3>
            <p>The else keyword in a for loop specifies a block of code to be executed when the loop is finished:</p>
            <h3>Example</h3>
            <p>Print all numbers from 0 to 5, and print a message when the loop has ended:</p>
            <div class=" content">
              <h3>for x in range(6):<br/>print(x)<br/>else:<br/>print("Finally finished!")</h3>
            </div>
            <p>Note: The else block will NOT be executed if the loop is stopped by a break statement.</p>
            <h3>Example</h3>
            <p>Break the loop when x is 3, and see what happens with the else block:</p>
            <div class=" content">
              <h3>for x in range(6):<br/> if x == 3: break<br/>print(x)<br/>else:<br/>print("Finally finished!")</h3>
            </div>
            <h1 id="ne">Nested Loops</h1>
            <div class=" content">
              <p>A nested loop is a loop inside a loop.</p>
              <p>The "inner loop" will be executed one time for each iteration of the "outer loop":</p>
            </div>
            <h3>Example</h3>
            <p>Print each adjective for every fruit:</p>
            <div class=" content">
              <h3>adj = ["red", "big", "tasty"]<br/>fruits = ["apple", "banana", "cherry"]<br/>for x in adj:<br/>for y in fruits:<br/> print(x, y)</h3>
            </div>
            <h1>The pass Statement</h1>
            <div class=" content">
            <p>for loops cannot be empty, but if you for some reason have a for loop with no content, put in the pass statement to avoid getting an error.</p>
            </div>
            <h3>Example:</h3>
            <div class=" content">
              <h3>for x in [0, 1, 2]:<br/>pass</h3>
            </div>
            <h1 if="fu">Python Functions</h1>
            <div class=" content">
              <p>A function is a block of code which only runs when it is called.</p>
              <p>You can pass data, known as parameters, into a function.</p>
              <p>A function can return data as a result.</p>
            </div>
            <h1>Creating a Function</h1>
            <p>In Python a function is defined using the def keyword:</p>
            <h3>Example</h3>
            <div class=" content">
              <h3>def my_function():<br/> print("Hello from a function")</h3>
            </div>
            <h1>Calling a Function</h1>
            <p>To call a function, use the function name followed by parenthesis:</p>
            <h3>Example</h3>
            <div class=" content">
              <h3>def my_function():<br/>print("Hello from a function")<br/>my_function()</h3>
            </div>
            <h1 id="ag">Arguments</h1>
            <div class=" content">
              <p>Information can be passed into functions as arguments.</p>
              <p>Arguments are specified after the function name, inside the parentheses. You can add as many arguments as you want, just separate them with a comma.</p>
              <p>The following example has a function with one argument (fname). When the function is called, we pass along a first name, which is used inside the function to print the full name:</p>
            </div>
            <h3>Example</h3>
            <div class=" content">
              <h3>def my_function(fname):<br/>print(fname + " Refsnes")<br/>my_function("Emil")<br/>my_function("Tobias")<br/>my_function("Linus")</h3>
            </div>
            <h1>Arbitrary Arguments, *args</h1>
            <div class=" content">
              <p>If you do not know how many arguments that will be passed into your function, add a * before the parameter name in the function definition.</p>
              <p>This way the function will receive a tuple of arguments, and can access the items accordingly:</p>
            </div>
            <h3>Example</h3>
            <p>If the number of arguments is unknown, add a * before the parameter name:</p>
            <div class=" content">
              <h3>def my_function(*kids):<br/>print("The youngest child is " + kids[2])<br/>my_function("Emil", "Tobias", "Linus")</h3>

            </div>
            <p>Arbitrary Arguments are often shortened to *args in Python documentations.</p>
            <h1>Keyword Arguments</h1>
            <div class=" content">
              <p>You can also send arguments with the key = value syntax.</p>
              <p>This way the order of the arguments does not matter.</p>
            </div>
            <h3>Example</h3>
            <div class=" content">
              <h3>def my_function(child3, child2, child1):<br/> print("The youngest child is " + child3)<br/>my_function(child1 = "Emil", child2 = "Tobias", child3 = "Linus")</h3>
            </div>
            <p>The phrase Keyword Arguments are often shortened to kwargs in Python documentations.</p>
            <h1>Passing a List as an Argument</h1>
            <div class=" content">
              <p>You can send any data types of argument to a function (string, number, list, dictionary etc.), and it will be treated as the same data type inside the function.</p>
              <p>E.g. if you send a List as an argument, it will still be a List when it reaches the function:</p>

            </div>
            <h3>Example</h3>
            <div class=" content">
              <h3>def my_function(food):<br/> for x in food:<br/> print(x)<br/>fruits = ["apple", "banana", "cherry"]<br/>my_function(fruits)</h3>
            </div>
            <h1>Return Values</h1>
            <p>To let a function return a value, use the return statement:</p>
            <h3>Example</h3>
            <div class=" content">
              <h3>def my_function(x):<br/>return 5 * x<br/>print(my_function(3))<br/>print(my_function(5))<br/>print(my_function(9))</h3>
            </div>
            <h1>The pass Statement</h1>
            <div class=" content">
              <p>function definitions cannot be empty, but if you for some reason have a function definition with no content, put in the pass statement to avoid getting an error.</p>

            </div>
            <h3>Example</h3>
            <div class=" content">
              <h3>def myfunction():<br/>pass</h3>
            </div>
            <h1 id="rcs">Recursion</h1>
            <div class=" content">
              <p>Python also accepts function recursion, which means a defined function can call itself.</p>
              <p>Recursion is a common mathematical and programming concept. It means that a function calls itself. This has the benefit of meaning that you can loop through data to reach a result.</p>
              <p>The developer should be very careful with recursion as it can be quite easy to slip into writing a function which never terminates, or one that uses excess amounts of memory or processor power. However, when written correctly recursion can be a very efficient and mathematically-elegant approach to programming.</p>
              <p>In this example, tri_recursion() is a function that we have defined to call itself ("recurse"). We use the k variable as the data, which decrements (-1) every time we recurse. The recursion ends when the condition is not greater than 0 (i.e. when it is 0).</p>
              <p>To a new developer it can take some time to work out how exactly this works, best way to find out is by testing and modifying it.</p>
            </div>
           <h3>Example</h3>
           <p>Recursion Example</p>
           <div class=" content">
            <h3>def tri_recursion(k):<br/> if(k &gt; 0):<br/> result = k + tri_recursion(k - 1)<br/>print(result)<br/> else:<br/>result = 0<br/>  return result<br/>print("\n\nRecursion Example Results")<br/>tri_recursion(6)</h3>
           </div>
           <h1 id="arr">Python Arrays</h1>
           <p>Note: Python does not have built-in support for Arrays, but Python Lists can be used instead.</p>
           <h3>Arrays</h3>
           <p>Note: This page shows you how to use LISTS as ARRAYS, however, to work with arrays in Python you will have to import a library, like the NumPy library.</p>
           <p>Arrays are used to store multiple values in one single variable:</p>
           <h3>Example</h3>
           <p>Create an array containing car names:</p>
           <div class=" content">
            <h3>cars = ["Ford", "Volvo", "BMW"]</h3>
            <h3>What is an Array?</h3>
            <div class=" content">
              <p>An array is a special variable, which can hold more than one value at a time.</p>
              <p>If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:</p>
            </div>
           </div>
           <h4>car1 = "Ford"</h4>
           <h4>car2 = "Volvo"</h4>
           <h4>car3 = "BMW"</h4>
           <p>However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?</p>
           <p>The solution is an array!</p>
           <p>An array can hold many values under a single name, and you can access the values by referring to an index number.</p>
           <h1>Access the Elements of an Array</h1>
           <p>You refer to an array element by referring to the index number.</p>
           <h3>Example</h3>
           <p>Get the value of the first array item:</p>
           <h1>x = cars[0]</h1>
           <h1>Example</h1>
           <p>Modify the value of the first array item:</p>
           <h3>cars[0] = "Toyota"</h3>
           <h1>Looping Array Elements</h1>
           <p>You can use the for in loop to loop through all the elements of an array.</p>
           <h3>Example</h3>
           <p>Print each item in the cars array:</p>
           <div class=" content">
            <h3>for x in cars:<br/>print(x)</h3>
           </div>
           <h1>Adding Array Elements</h1>
           <p>You can use the append() method to add an element to an array.</p>
           <h3>Example</h3>
           <p>Add one more element to the cars array:</p>
           <div class=" content">
            <h3>cars.append("Honda")</h3>
           </div>
           <h1>Removing Array Elements</h1>
           <p>You can use the pop() method to remove an element from the array.</p>
           <h3>Example</h3>
           <p>Delete the second element of the cars array:</p>
           <h3>cars.pop(1)</h3>
           <p>You can also use the remove() method to remove an element from the array.</p>
           <h3>Example</h3>
           <p>Delete the element that has the value "Volvo":</p>
           <h3>cars.remove("Volvo")</h3>
           <h4>Note: The list's remove() method only removes the first occurrence of the specified value.</h4>
          <h1>Array Methods</h1>
          <p>Python has a set of built-in methods that you can use on lists/arrays.</p>
          <div class=" content">
            <ul>
              <li>append():  Adds an element at the end of the list</li>
              <li>clear():Removes all the elements from the list</li>
              <li>count():Returns the number of elements with the specified value</li>
              <li>extend():Add the elements of a list (or any iterable), to the end of the current list</li>
              <li>index():Returns the index of the first element with the specified value</li>
              <li>insert():Adds an element at the specified position</li>
              <li>pop():Removes the element at the specified position</li>
              <li>remove():Removes the first item with the specified value</li>
              <li>reverse():Reverses the order of the list</li>
              <li>sort():Sorts the list</li>
            </ul>
          </div>
          <h4>Note: Python does not have built-in support for Arrays, but Python Lists can be used instead.</h4>
          <h1 id="class">Python Classes and Objects</h1>
          <h3>Python Classes/Objects</h3>
          <div class=" content">
            <p>Python is an object oriented programming language.</p>
            <p>Almost everything in Python is an object, with its properties and methods.</p>
            <p>A Class is like an object constructor, or a "blueprint" for creating objects.</p>
          </div>
          <h1>Create a Class</h1>
          <p>To create a class, use the keyword class:</p>
          <h3>Example</h3>
          <p>Create a class named MyClass, with a property named x:</p>
          <div class=" content">
            <h3>class MyClass:<br/>x = 5</h3>
          </div>
          <h1>Create Object</h1>
          <p>Now we can use the class named MyClass to create objects:</p>
          <h3>Example</h3>
          <p>Create an object named p1, and print the value of x:</p>
          <div class=" content">
            <h3>p1 = MyClass()<br/>print(p1.x)</h3>
          </div>
          <h1>The __init__() Function</h1>
          <div class=" content">
            <p>The examples above are classes and objects in their simplest form, and are not really useful in real life applications.</p>
            <p>To understand the meaning of classes we have to understand the built-in __init__() function.</p>
            <p>All classes have a function called __init__(), which is always executed when the class is being initiated.</p>
            <p>Use the __init__() function to assign values to object properties, or other operations that are necessary to do when the object is being created:</p>
            
          </div>
          <h3>Example</h3>
          <p>Create a class named Person, use the __init__() function to assign values for name and age:</p>
          <div class=" content">
            <h3>class Person:<br/> def __init__(self, name, age):<br/>self.name = name<br/>self.age = age<br/>p1 = Person("John", 36)<br/>print(p1.name)<br/>print(p1.age)</h3>
          </div>
          <h4>Note: The __init__() function is called automatically every time the class is being used to create a new object.</h4>
          <h1>The __str__() Function</h1>
          <div class=" content">
            <p>The __str__() function controls what should be returned when the class object is represented as a string.</p>
            <p>If the __str__() function is not set, the string representation of the object is returned:</p>
            <h3>Example</h3>
            <p>The string representation of an object WITH the __str__() function:</p>
            <div class=" content">
              <p>class Person:<br/>  def __init__(self, name, age):<br/>self.name = name<br/>self.age = age<br/>def __str__(self):<br/> return f"(self.name,self.age)"<br/>p1 = Person("John", 36)<br/></p>
            </div>
          </div>
          <h1>Object Methods</h1>
          <div class=" content">
            <p>Objects can also contain methods. Methods in objects are functions that belong to the object.</p>
            <p>Let us create a method in the Person class:</p>
          </div>
          <h3>Example</h3>
          <p>Insert a function that prints a greeting, and execute it on the p1 object:</p>
          <div class=" content">
            <h3>class Person:<br/> def __init__(self, name, age):<br/>self.name = name<br/>self.age = age<br/> def myfunc(self):<br/>print("Hello my name is " + self.name)<br/>p1 = Person("John", 36)<br/>p1.myfunc()</h3>
          </div>
          <h4>Note: The self parameter is a reference to the current instance of the class, and is used to access variables that belong to the class.</h4>
          <h1>The self Parameter</h1>
          <div class=" content">
            <p>The self parameter is a reference to the current instance of the class, and is used to access variables that belongs to the class.</p>
            <p>It does not have to be named self , you can call it whatever you like, but it has to be the first parameter of any function in the class:</p>
          </div>
          <h3>Example</h3>
          <p>Use the words mysillyobject and abc instead of self:</p>
          <div class=" content">
            <h3>class Person:<br/> def __init__(mysillyobject, name, age):<br/>mysillyobject.name = name<br/>mysillyobject.age = age<br/> def myfunc(abc):<br/>print("Hello my name is " + abc.name)<br/>p1 = Person("John", 36)<br/>p1.myfunc()</h3>
          </div>
          <h1>Modify Object Properties</h1>
          <p>You can modify properties on objects like this:</p>
          <h3>Example</h3>
          <p>Set the age of p1 to 40:</p>
          <div class=" content">
            <h3>p1.age = 40</h3>
          </div>
          <h1>Delete Object Properties</h1>
          <p>You can delete properties on objects by using the del keyword:</p>
          <h3>Example</h3>
          <p>Delete the age property from the p1 object:</p>
          <div class=" content">
            <h3>del p1.age</h3>
          </div>
          <h1>Delete Objects</h1>
          <p>You can delete objects by using the del keyword:</p>
          <h3>Example</h3>
          <p>Delete the p1 object:</p>
          <div class=" content">
            <h3>del p1</h3>
          </div>
          <h1>The pass Statement</h1>
          <div class=" content">
            <p>class definitions cannot be empty, but if you for some reason have a class definition with no content, put in the pass statement to avoid getting an error.</p>
          </div>
          <h3>Example</h3>
          <div class=" content">
            <h3>class Person:<br/>pass</h3>
          </div>
           <h1 id="file">Python File Handling</h1>
           <div class=" content">
            <p>File handling is an important part of any web application.</p>
            <p>Python has several functions for creating, reading, updating, and deleting files.</p>
           </div>
           <h1>File Handling</h1>
           <div class=" content">
            <p>The key function for working with files in Python is the open() function.</p>
            <p>The open() function takes two parameters; filename, and mode.</p>
            <p></p>
           </div>
           <div class=" content">
            <p>The open() function takes two parameters; filename, and mode.</p>
            <ul>
              <li>"r" - Read - Default value. Opens a file for reading, error if the file does not exist</li>
              <li>"a" - Append - Opens a file for appending, creates the file if it does not exist</li>
              <li>"w" - Write - Opens a file for writing, creates the file if it does not exist</li>
              <li>"x" - Create - Creates the specified file, returns an error if the file exists</li>
            </ul>
           </div>
           <p>In addition you can specify if the file should be handled as binary or text mode</p>
           <div class=" content">
            <ul>
              <li>"t" - Text - Default value. Text mode</li>
              <li>"b" - Binary - Binary mode (e.g. images)</li>
            </ul>
           </div>
           <h1>Syntax</h1>
           <p>To open a file for reading it is enough to specify the name of the file:</p>
           <div class=" content">
           <h3>f = open("demofile.txt")</h3>
           </div>
           <p>The code above is the same as:</p>
           <div class=" content">
               <h3>f = open("demofile.txt", "rt")</h3>
           </div>
           <p>Because "r" for read, and "t" for text are the default values, you do not need to specify them.</p>
           <h4>Note: Make sure the file exists, or else you will get an error.</h4>
           <h1>Python File Open</h1>
           <h3>Open a File on the Server</h3>
           <p>Assume we have the following file, located in the same folder as Python:</p>
           <div class=" content">
            <h3>demofile.txt</h3>
            <div class=" content">
              <h4>Hello! Welcome to demofile.txt<br/>This file is for testing purposes.<br/>Good Luck!</h4>
            </div>
           </div>
           <p>To open the file, use the built-in open() function.</p>
           <p>The open() function returns a file object, which has a read() method for reading the content of the file:</p>
           <h3>Example</h3>
           <p>Open a file on a different location:</p>
           <div class=" content">
            <h3>f = open("D:\\myfiles\welcome.txt", "r")<br/>print(f.read())</h3>
           </div>
           <h3>Read Lines</h3>
           <p>You can return one line by using the readline() method:</p>
           <h3>Example</h3>
           <p>Read one line of the file:</p>
           <div class=" content">
            <h3>f = open("demofile.txt", "r")<br/>print(f.readline())</h3>
           </div>
           <p>By calling readline() two times, you can read the two first lines:</p>
           <h3>Example</h3>
           <p>Read two lines of the file:</p>
           <div class=" content">
            <h3>f = open("demofile.txt", "r")<br/>print(f.readline())<br/>print(f.readline())</h3>
           </div>
           <p>By looping through the lines of the file, you can read the whole file, line by line:</p>
           <h3>Example</h3>
           <p>Loop through the file line by line:</p>
           <div class=" content">
            <h3>f = open("demofile.txt", "r")<br/>for x in f:<br/>print(x)</h3>
          </div>
          <h1>Close Files</h1>
          <p>It is a good practice to always close the file when you are done with it.</p>
          <h3>Example</h3>
          <p>Close the file when you are finish with it:</p>
          <div class=" content">
            <h3>f = open("demofile.txt", "r")<br/>print(f.readline())<br/>f.close()</h3>
          </div>
          <h4>Note: You should always close your files, in some cases, due to buffering, changes made to a file may not show until you close the file.</h4>      
          <h1>Python File Write</h1>  
          <h3>Write to an Existing File</h3>
          <div class=" content">
            <p>To write to an existing file, you must add a parameter to the open() function:</p>
            <p>"a" - Append - will append to the end of the file</p>
            <p>"w" - Write - will overwrite any existing content</p>
            </div> 
            <h3>Create a New File</h3> 
            <p>To create a new file in Python, use the open() method, with one of the following parameters:</p>
            <ul>
              <li>"x" - Create - will create a file, returns an error if the file exist</li>
              <li>"a" - Append - will create a file if the specified file does not exist</li>
              <li>"w" - Write - will create a file if the specified file does not exist</li>
            </ul>
            <h3>Example</h3>
            <p>Create a file called "myfile.txt":</p>
            <div class=" content">
              <h3>f = open("myfile.txt", "x")</h3>
            </div>
            <p>Result: a new empty file is created!</p>
            <h3>Example</h3>
            <p>Create a new file if it does not exist:</p>
            <h3>f = open("myfile.txt", "w")</h3>
            <h1>Python Delete File</h1>
            <h3>Delete a File</h3>
            <div class=" content">
              <p>To delete a file, you must import the OS module, and run its os.remove() function:</p>
            </div>
            <h3>Example</h3>
             <p>Remove the file "demofile.txt":</p>
             <div class=" content">
              <h3>import os<br/>os.remove("demofile.txt")</h3>
             </div>
             <h3>Check if File exist:</h3>
             <p>To avoid getting an error, you might want to check if the file exists before you try to delete it:</p>
             <h3>Example</h3>
             <p>Check if file exists, then delete it:</p>
             <div class=" content">
              <h3>import os<br/>if os.path.exists("demofile.txt"):<br/> os.remove("demofile.txt")<br/>else:<br/> print("The file does not exist")</h3>
             </div>
             <h3>Delete Folder</h3>
             <p>To delete an entire folder, use the os.rmdir() method:</p>
             <h3>Example</h3>
             <p>Remove the folder "myfolder":</p>
             <div class=" content">
              <h3>import os<br/>os.rmdir("myfolder")</h3>
             </div>
             <h3>Note: You can only remove empty folders.</h3>
             <h2>Other Concepts are Coming Soon Guys ~!</h2>
          </div>
    </div>
  )
}

export default Python