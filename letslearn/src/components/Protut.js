import React from 'react'
import '../styles/Protut.css'
import { Link } from 'react-router-dom'

const Protut = () => {
  return (
 
    <div>
<div class="head">
  <h1>Programming languages</h1>
</div>
<div>
  <section class="container">
<div class="card">
  <h2>C++ Tutorial</h2>
  <p>C++ is one of the world's most popular programming languages. C++ can be found in today's operating systems, Graphical User Interfaces, and embedded systems.C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development costs.</p>
  <div>
    <div class="btn">
     <a>Explore &#x2192;</a>
    </div>
  </div>
</div>

<div class="card">
  <h2>Python Tutorial</h2>
  <p>Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis. Python is a general-purpose language, meaning it can be used to create a variety of different programs and isn't specialized for any specific problems. Its emphasizes code readability</p>
  <div>
    <div class="btn">
     <a>Explore &#x2192;</a>
    </div>
  </div>
</div>

<div class="card">
  <h2>Java Tutorial</h2>
  <p>Java is a widely-used programming language for coding web applications. It has been a popular choice among developers for over two decades, with millions of Java applications in use today. Java is a multi-platform, object-oriented, and network-centric language that can be used as a platform in itself.</p>
  <div>
    <div class="btn">
     <a>Explore &#x2192;</a>
    </div>
  </div>
</div>

  </section>
</div>
    
    </div>
  )
}

export default Protut