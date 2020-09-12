# ASSESSMENT 1: Tech Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a function? Why would you use one?

  Your answer:
    the anatomy of a function -
      const myFunction = (argument) => {
        logic
      }
    to evoke a function in console.log - 
      console.log(myFunction(parameter))

    A function is code that is created to automate a certain action. It is like a machine that takes in certain parameter, runs it through its lines of logic, and creates a resulting value. To create a function, you must declare it with "const" because once the function is created, you would not want to ever change its contents. After typing "const", you need to name the function a unique name in camelCase that succinctly describes its use. Then, you can defined it with an "=". You need to include the argument in () so the programmer knows what type of value should be inserted (unless the function takes no parameters). This argument is an arbitrarily named placeholder that will replaced by the real parameter when the function is evoked. After that, you use the big arrow and enase the logic of the code in {}. The logic of the code can be as simple as a single line, or it can be nested with several iterations or if statements. You must tell the function to return the resulting vaue, or else the function will not hold or spit the value out. When a function is evoked or called upon, only one value is returned. If you want to return a set of values, you need to write a function that returns an array of data. Creating the function alone will not make it run; you must evoke it with the parameter (again,unless the function takes no parameters) in order for the function to perform work on the parameter and return a new value. You want to create functions to reduce redundancy in code, saving space, time, and readability. If you have an action that you want to repeat several times in your code, a function will save that logic for you so that you can evoke the function when necessary, rather than write the logic again and again.

  Researched answer:
    A function can call itself recursively in the function body. A function is an object, and these functions as objects can have methods. A function within a function can access all of the variables within its parenet function and also any variable the parent function can access. You need a return statement right before the closing curly brackets.


2. What is the difference between .map() and .filter()?

  Your answer:
    Similarities:
      .map() and .filter() are both higher order functions that serve a purpose within other functions. This means that they are like methods that can be added into the logic of your main function so that a certain secondary process can be automated to your values.
    Differences:
      .map() works as a for-loop would. It iterates through each value of an array, and you would add some functionality to this loop to change the given values. The length of the resulting array of .map() should be as long as the given array, as nothing is taken out of the array, only builded and iterated upon.
      
      .filter() also iterates through a given array, but as the name suggests, its purpose is to sort the array's values based on a given parameter. The resulting array should be shorter than the given array since .filter() removes values that do not fit the filter criteria.

      The difference between .map() and .filter() are that .filter()'s resulting array will be shorter than the given array, while .map()'s resulting array should be the same length of the given array.

  Researched answer:
    .map() wil return the same amount of elements as was given, but the new values will all have been transformed in some way. .filter() will return either the same or smaller amount of elemnts as was given, but the values will not have been changed.



3. What is the difference between console.log() and return?

  Your answer:
    A function will run as long as it is evoked, but the result is not necessarily saved or shown to the user/coder unless it is programmed to do so. Return makes the resulting value of a function available to later pieces of code so that the value can be reused within its scope. A return does not inherently print itself to be shown to the user/coder. If that is the desired effect, the coder can console.log(myFunction(certainParameter)) so that the console can visibly print the results of the function with a certain parameter. Some consoles we have used in class include the terminal and the one found in Chrome. The difference between console.log and return is that the return is only visible to the machine, while a console.log makes the result available to the coder/user.

  Researched answer:
    Console.log is used for debugging purposes, while the return is used when you would like to keep the value as you would a variable.



4. In regards to functions, what is an argument?

  Your answer:
    An argument is an arbitrary placeholder used in the body of a function. It can be named anything, but it should be named in a way that makes clear what type of value should be used for the function. Not only is the argument writen in in () in the first line of definition, it is often used within the logic of the code. The logic of the code can refer to the argument with methods, loops, if statements, etc. in order to manipulate it and return the result upon the function call. When the function is evoked, the given parameter will replace the argument wherever it appears in the function body.
  Researched answer:
    I was wrong. While argument and parameter can be used interchangibly, the most accurate definition is that a parameter is the placeholder in a function declaration and boyd, while an argument is the real value passed into the function when it is evoked.


5. Give a brief description of proper pair programming techniques. What are the roles of each person?

  Your answer:
    Pair program involves cooperation between two coders. They divy roles between the two coders in order to devote as much attention into their given duties as possible. Two sets of eyes and brains reduced the amount of errors and increases productivity. One person assumes the role of a "driver". They are the ones who will have their hands on the code, having full access to the shared keyboard and mouse. They can offer some conceptual feedback, but it's important that the driver is a good listener before anything else. The "navigator" is the person who does not type any code, but directs the driver on what to type. They are the brains of the operation, but must be willing to listen to the driver's ideas as well. Each person must perceive the other with positive intent in order to maximize communication and efficiency. They must switch roles often in order to ensure that each person contributes a fair amount of work and to give each person a well-rounded understanding of the project. By splitting and rotating roles, each person can offer new perspectives to the code and contribute a variety of solutions.

  Researched answer:
    You should make preparations before you pair program. You should check in with your partner to see how they feel, make a plan to discuss what you would like to achieve, and make time for each other. The navigator looks out for mistakes. If you're pairing with a more junior programmer, make it an opportunity to help develop their skills, but also remember that they can offer fresh perspectives as well. If you are the junior programmer, be patient with yourself. Pay attention to how your partner works and take note of new tricks and solutions. Celebrate each small success. Use gentle language to communicate.


6. What is TDD? Describe the work flow associated with TDD.

  Your answer:
    (I had to Google "TDD" to remind myself of the acronym. I didn't research any further than that). If my recollection is correct, I believe that test-driven development is consistently testing with programs such as Jest to make sure your code is running smoothly. It is good practice to test each functionality of your code before moving onto the next so that you can eliminate bugs before your code becomes too difficult to manage. You can test JavaScript code with Jest. You would create a separate JavaScript file with your test written immediately before you code. You have to use keywords "describe", "expect", and "test" to initialize the test. "Describe" declares the body of the test. "Expect" is the expected result of the function with a given parameter. I don't rememebr what "test" does exactly, so I'll have to research TDD after this. After definining the test, you should run the test and it should fail because your function has yet to be defined in this same file. You're looking for the error message that the function isn't defined. Any other error message means that your test isn't written correctly. After you only receive the error that your test isn't defined, you can then beign to write the code you'd like to test. After writing this code directly underneath your test, you can run jest in the terminal, which runs the file and sees if your tested code gives the expected output from the test. If the test fails, then your tested code is not running as you would expect it to. At this point, you can see if you wrote your test correctly or edit the logic in your code. TDD is an important skill because a coder who can test their own errors is self-sufficient, saving the company time and money. Not only is this important in the realm of QA testing, it's important to show that the coder understands why their code works.

  Researched answer:
    In TDD, tests are written before the actual code that is being tested. You want to write the code as minimally as you can, and once it passes, you want to refactor it to make it as clean and concise as possible. If you don't use TDD, you are unable to discover your errors in code before the full functionality has been develped. TDD allows you to code incrementally so you don't miss anything before the code is fully finished.


7. What is something we did in class this week you found helpful?  

  Your answer:
    I like how active other instructors are in the chat box during lecture. It's helpful to see additional knowledge and perspective. It's also makes it easy to ask simple questions in the chat box. The chat box is a great tool that allows a greater form of communication without stopping the flow of the class.

    I like how instructors randomly drop into our breakout rooms. I'm not shy to ask for help, but it feels nice to know that the instructors care about our learning. Sometimes they help with things I didn't know I needed help with, like when Andee taught us how to string multiple methods onto each other to save memory.

    I like the pseudocode that is written before the actual code, so we can understand the logic behind the problem before we assign code to it.

    I like knowing who I'm going to be paired up with the next day. I've enjoyed working with everybody so far, but it's helpful for me to see who I'm working with so I can anticipate what my breakout time will be like. 

    I like that Sarah gives us our return time from breaks. Sometimes I forget what time to return haha.

    I love that the instructors pair program during lecture. I think it shows a great example for us. It also seems to allow the navigator instructor to give their undivided attention to the lecture notes and class. 

  Some things I would like more of:
    I wish that before moving onto the next practice problem in lecture, we would be given a few seconds to soak in the content. Often times, I'm still rushing to complete the notes by the time we move onto the next problem, and I don't have a chance to look at the code as a whole.

    I like being able to see the most recent lines of the terminal while coding, so it's helpful to me when the terminal is placed on the lower corner of the screen while we're on Atom. That way, even if we're focused on the Atom window, I can still see the last lines of the terminal in the bottom right hand corner.

    It would be nice to be pulled out of the breakroom or notified when lunch comes around. I've heard from several people that we sometimes cut into our lunch time because we don't realize what time it is.

    Sarah is a great instructor, but I think she can go through some slides a little too quickly :P






## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React:
    React is an open-source JavaScript library for building user interfaces. Everything in React is a component, which means that its used to build very small parts and then joined to form entire applications. It's used to build webpages, mobile web pages, and native mobile applications. 
- Yarn:
    Yarn is a technology made by Facebook. It's a package manager. You need to run "yarn jest" to run a test script.
- React State:
    React components have a built-in state object that stores property values that belong to the component.
- CRUD:
    These stand for the standard database commands "create, read, update, delete". These are used for persistent storage. This helps in data management.
- this:
    "this" is a keyword used to reference values within the object in question.
