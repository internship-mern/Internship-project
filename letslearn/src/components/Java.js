import React from 'react'
import '../styles/Java.css'

const Java = () => {
  return (
     <div>
      
      <h1>JAVA</h1>
       <div>
        <p>
           
Java is a programming language and a platform. Java is a high level, robust, object-oriented and secure programming language.<br></br>
Java was developed by Sun Microsystems (which is now the subsidiary of Oracle) in the year 1995. <br></br>
James Gosling is known as the father of Java. Before Java, its name was Oak. Since Oak was already a registered company, so James Gosling and his team changed the name from Oak to Java.
         
        </p>
       </div>
       <h1>Key features of Java </h1>
       <div>
        <ul>
    <li>,<b>Platform Independence:</b> Java programs are compiled into an intermediate bytecode that can run on any platform with a Java Virtual Machine (JVM). This allows Java applications to be executed on different operating systems without modification.</li>
    <li><b>Object-Oriented:</b> Java follows the object-oriented programming paradigm, which means everything in Java is an object. This encourages modular and organized programming.</li>
    <li><b>Garbage Collection:</b> Java has an automatic garbage collection mechanism that manages memory, freeing developers from explicitly deallocating memory, which reduces memory leaks and segmentation faults. </li>
    <li><b>Strong Standard Library:</b> Java comes with a vast standard library (Java API) that provides ready-to-use classes and methods for common tasks, making development more efficient.</li>           
    <li><b>Multi-threading Support:</b> Java supports multithreading, allowing concurrent execution of code and better utilization of modern multi-core processors.</li>
    <li><b>Exception Handling:</b> Java has robust exception handling mechanisms to deal with errors and exceptions during runtime gracefully.</li>          
    <li><b>Security: </b>Java has built-in security features like a security manager and a strong security model, making it suitable for developing secure applications.</li>
          </ul>
       </div>

         <h1> Why Use Java?</h1>

         <div>
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
            <h1>Java Install</h1>
            <div>
               <p>Some PCs might have Java already installed. To check if you have Java installed on a Windows PC, search in the start bar for Java or type the following in Command Prompt (cmd.exe):</p>
                <p><b>C:\Users\Your Name>java -version</b></p>
                
                <p>
                If Java is installed, you will see something like this (depending on version):<br></br>
                java version "11.0.1" 2018-10-16 LTS<br></br>
                Java(TM) SE Runtime Environment 18.9 (build 11.0.1+13-LTS)<br></br>
                Java HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.1+13-LTS, mixed mode)<br></br>
                If you do not have Java installed on your computer, you can download it for free at oracle.com.
                <p>Note: In this tutorial, we will write Java code in a text editor. However, it is possible to write Java in an Integrated Development <br></br>
                Environment, such as IntelliJ IDEA, Netbeans or Eclipse, which are particularly useful when managing larger collections of Java files.</p>
                </p>
            </div>
            <h1>Setup for Windows</h1>
            <div>
             <p><b>To install Java on Windows:</b></p>
            <ol>
            <li>Go to "System Properties" (Can be found on Control Panel > System and Security > System > Advanced System Settings)</li>
<li>Click on the "Environment variables" button under the "Advanced" tab</li>
<li>Then, select the "Path" variable in System variables and click on the "Edit" button</li>
<li>Click on the "New" button and add the path where Java is installed, followed by \bin. By default, Java is installed in C:\Program Files\Java\jdk-11.0.1 (If nothing else was specified when you installed it). In that case, You will have to add a new path with: C:\Program Files\Java\jdk-11.0.1\bin</li>
<li>Then, click "OK", and save the settings</li>
<li>At last, open Command Prompt (cmd.exe) and type java -version to see if Java is running on your machine</li>
</ol>
</div>
<h1>Java Quickstart</h1>
<p>In Java, every application begins with a class name, and that class must match the filename.
<br></br>
Let's create our first Java file, called Main.java, which can be done in any text editor (like Notepad).
<br></br>
The file should contain a "Hello World" message, which is written with the following code:</p>
<div>Main.java

public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
</div>

</p>


     </div>           
     
  )
}

export default Java