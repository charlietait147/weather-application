[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/MNYGKdXk)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=14332014&assignment_repo_type=AssignmentRepo)
# Challenge 4 + 5 - Travel Info Full Stack Challenge

```ascii

-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----
           . _..::__:  ,-"-"._        |7       ,     _,.__
   _.____ _<_>`!(._`.`-.    /         _._`_ ,_/  '  '-._.---.-.__
>.{     " " `-==,',._\{  \  / {)      / _ ">_,-'`                mt-2_
  \_.:--.       `._ )`^-. "'       , [_/(                       __,/-'
 '"'     \         "    _L        oD_,--'                )     /. (|
          |           ,'          _)_.\\._<> 6              _,' /  '
          `.         /           [_/_'` `"(                <'}  )
           \\    .-. )           /`-'"..' `:.#          _)  '
    `        \  (  `(           /`:\  > \  ,-^.  /' '
              `._,   ""         |           \`'   \|   ?_)  {\
                 `=.---.`._._       ,'     "`|' ,- '..
                   |    `-._         |     /          `:`<_|h--._
                   (        >        .     | ,          `=.__.`-'\
                    `.     /         |     |{|              ,-.,\     .
                     |   ,'           \   /`'            ,"     \
                     |  /              |_'                |  __  /
                     | |                                  '-'  `-'   \.
                     |/                                         "    /
                     \.                                             '

                      ,/            ______._.--._ _..---.---------._
     ,-----"-..?----_/ )      __,-'"             "                  (
-.._(                  `-----'`-
-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----
Map (C) 1998 Matthew Thomas. 
```

## Introduction

DFCorp are interested in expanding their portfolio of applications that you have been developing.  Their latest idea is a web-based travel information application.  The initial requirement is to display a 5 day weather forecast for any searchable location with the functionality to be able to save favourite locations locally.  In addition to this they have further requirements to fulfil, if you have time, with these being a map of the local area and a slide show of local hotels.  They hope that this will encourage the users of their current apps to use this service and see potential for integration into other apps that they have in design.

DFCorp have also decided to commission you to build a set of backend services that will allow the Travel Info Web Application to have individual users and for them to be able to use their favourite locations for use across any device they log in on.

## Core Features

The Business Analyst team working with DFCorp has identified the following features that should be implemented in the front-end:

- The user should see a location search box when they access the application home page that allows them to search any town or city by name (as per the wireframe supplied)
- The application should send a query to a weather API to get a 5-day forecast if the location can be found
- When the forecast data is returned, a new view should be displayed, using the wireframe(s) for the view layout
- The user should be able to save a location as a favourite (although this should only persist on the device they are using at the time)
- The application should be responsive across the main breakpoints for devices (mobile, tablet, desktop) - wireframes are provided for each of these

The layouts are pretty much agreed with the main stakeholder but they are open for you to put your creative flair into the colour scheme and any images used (that are not specific to the location content).  They are also open to suggestions for the name of the application and its logo.

The Business Analyst team working with the Product Owner at DFCorp have identified the following core features that the backend services should provide:

1. **User Authentication**:
   - The web application will send registration details to a backend service to create a new user account
   - The web application will send login details to the backend service to authenticate a user
   - The web application will send a password change request to the backend service and update the user's password
   - A user must be authenticated on every subsequent request to any other backend service
2. **Favourite Locations**:
   - The web application will send a request to a backend service to obtain the stored favourite locations of an authenticated user
   - The web application will send a request to add a new location to an authenticated user's favourite locations
   - The web application will send a request to remove a location from an authenticated user's favourite locations

You may architect the backend services in any way you see fit.  Authentication can be handled through a simple check of username/password on each request but more efficient and secure methods are encouraged.  The storage of user data and favourite locations can be done in any way you see fit but must be held in a MongoDB database.

---

## Tasks

For the front-end:

1. From the requirements listed above, devise a set of user stories that describe the functionality that the client has requested
2. From the wireframes and the user stories, devise a component hierarchy that will help in the construction of the web application and explain your reasoning for this hierarchy
   - When you have made your static application, add your "state" planning indicating why you have chosen to hold state in that specific component
   - Answering the 3 state questions here would help!
3. Create the application using the "Thinking in React" strategy and creating tests for any logic that will affect the user's experience
4. Once you have completed your application, write a document that makes suggestions for further development of the application, including any potential integration with other DFCorp applications and external APIs:
   - This should include a description of the potential benefits of these integrations or additional APIs, how they could be implemented and the potential risks of these integrations

Ensure that the application that you submit will run in the development environment (using `npm run dev` command).

---

For the back-end:


1. Explain why the customer needs the backend services and the benefits that it will bring to them.  You should include the following in your explanation:
   - The problems that the backend services will solve
   - The benefits that the backend services will bring to the user
   - The impact that the backend services will have on the customer's business
2. From the requirements listed above, devise a set of user stories that describe the functionality that the client has requested
3. Create a set of routing diagrams that show how the backend services will be accessed by the frontend application
4. Create the application using a test-driven development (TDD) approach and the NodeJS/Express/MongoDB stack
5. Create a set of tests that validate the functionality of the backend services using POSTMAN

---

## Tips

- Commit regularly to GitHub with clear commit messages - write a failing test, pass the test, commit, etc
- You should put your component hierarchies, state identification notation and test plans in the markdown file in the `docs` folder, if you decide to use some form of Scrum board to track your progress, you should include a screenshot of this in the markdown file
- Keep your frontend and backend code in the same repository, using the folders that are provided in the template and structure the folders within these in a suitable manner


---

## Grading Criteria

## Digital Futures Software Engineering Progression Management Framework

In this Challenge, you will have the opportunity to demonstrate the following competencies from the Software Engineering Progression Management framework:

---

### Writes software that meets a user’s functional and non-functional requirements

|               | Description                                                                                                                                                                                                         | Where assessed?                 |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| ***Level 3*** | The engineer can code a solution that functionally and non-functionally meets requirements for **several simple** requirements                                                                                      | Code submitted (*Core features fully implemented* ) |
| ***Level 3*** | The engineer can write code that is **functionally correct** and can use **Generative AI** to help **refactor** code | Code submitted and Markdown file in `docs` folder |
| ***Level 4*** | The engineer can code a solution that functionally and non-functionally meets requirements for a *small number* of ***complex*** requirements (e.g. requirements requiring multiple functions or breaking down to fulfil)          | Code submitted (*some/all additional features implemented*) |
| ***Level 4*** | The engineer can code a solution that functionally and non-functionally meets requirements and can participate in group reviews of code identifying opportunities to make it more efficient and/or cleaner with the help of a Generative AI tool where appropriate | Code review issues in GitHub |
| ***Level 5*** | The engineer can code a solution that functionally and non-functionally meets requirements for a **number** of **complex** requirements | Code structure - separate servers for authentication and functionality |

---

### Can interpret business requirements into coding requirements
  
|               | Description                                                                                                                                                                                                  | Where assessed?                 |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------- |
| ***Level 1*** | The engineer can create **simple user stories** from user requirements (i.e. clearly defined story using “As a”, “Able to”, “So that” or “Given/When/Then” structure that could be solved using simple code) | Markdown file in `docs` folder  |
| ***Level 3*** | The engineer can create **routing diagrams** and/or apply object-oriented principles in them for ***simple*** user stories | Markdown file in `docs` folder and code submitted (*Some of core features implemented*) |
| ***Level 4*** | The engineer can create **routing diagrams** and/or apply object-oriented principles in them for ***moderately complex*** user stories (i.e. user stories that require multiple objects/domain models to fulfil) | Markdown file in `docs` folder and code submitted (*Core features fully implemented*) |
| ***Level 5*** | The engineer can create **routing diagrams** and/or apply object-oriented principles in them for ***complex*** user stories (i.e. user stories that require multiple objects/domain models and/or breaking down further to fulfil) | Markdown file in `docs` folder and code submitted (*Additional features attempted with some success*) |

---

### Develop code through Test-Driven Development and/or Behaviour Driven Development

|               | Description                                                                                                                                                                                                 | Where assessed?                        |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| ***Level 2*** | The engineer can write **tests** and/or **working code** that demonstrates that the **TDD process** has been followed through a commit history with clear commit messages                                   | Code submitted - GitHub commit history |
| ***Level 3*** | The engineer can write **tests** and/or **working code** that pass covering the **main functionality** of the code using a standard, **third-party** testing framework | Code submitted |
| ***Level 3*** | The engineer can write **tests** and/or **working code** that demonstrates the use of a **Generative AI** tool to identify and write test cases and/or code for tests | Code submitted and Markdown file in `docs` folder |
| ***Level 4*** | The engineer can write **tests** and/or **working code** that passes tests that cover **some edge cases** of the code **that they have identified** using a standard, **third-party** testing framework | Code submitted |
| ***Level 4*** | The engineer can write **tests** and/or **working code** that demonstrates the use of a **Generative AI** tool to identify and write tests for **further edge cases** | Code submitted and Markdown file in `docs` folder |
| ***Level 5*** | The engineer can write **tests** and/or **working code** that passes tests that cover most **edge cases** of the code using a standard, **third-party** testing framework | Code submitted and Markdown file in `docs` folder |
| ***Level 5*** | The engineer can write **tests** and/or **working code** that demonstrates the use of a **Generative AI** tool to identify and write tests for **further edge or corner cases** | Code submitted and Markdown file in `docs` folder |

---

### Writes clean code

|                | Description                                                                                                                                                                                                       | Where assessed? |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| ***Level 2***  | The engineer can write code that is **functionally correct** using applying **some** principles of clean-coding (e.g. 5-line functions, no nested loops or conditional statements)                                | Code submitted  |
| ***Level 2***  | The engineer can write code that is **functionally correct** and has been made **more efficient** by a **Generative AI** tool | Code submitted and Markdown file in `docs` folder |
| ***Level 2***  | The engineer can write code that is **functionally correct** and has **demonstrated** the use of **Generative AI** to help within the **debugging** process | Code submitted and Markdown file in `docs` folder |
| ***Level 3***  | The engineer can write code that is **functionally correct** using applying **single responsibility** and other clean-coding practices (e.g. **abstraction**) to **some** of the classes/functions/methods and blocks of code | Code submitted  |
| ***Level 3*** | The engineer can write code that is **functionally correct** and can use **Generative AI** to help **refactor** code | Code submitted and Markdown file in `docs` folder |
| ***Level 4***  | The engineer can write code that is **functionally correct** using applying **single responsibility** and other clean-coding practices (e.g. **abstraction**) to **most** of the classes/functions/methods and blocks of code | Code submitted  |
| ***Level 4*** | The engineer can write code that is **functionally correct** and can use **Generative AI** to help **document their own** or the **code of others** | Code submitted and Markdown file in `docs` folder |
| ***Level 5***  | The engineer can write code that is **functionally correct** using applying **single responsibility** and other clean-coding practices (e.g. **abstraction**) to all of the classes/functions/methods and blocks of code to create **loosely-coupled**, **highly-cohesive** code | Code submitted and Markdown file in `docs` folder |

---

#### Creating User Interfaces

|                | Description                                                                                                                                                                                                       | Where assessed? |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| ***Level 1***  | The engineer can create user interfaces that show good practice in using HTML/CSS and JavaScript | Code submitted |
| ***Level 2***  | The engineer can create user interfaces that are built in ReactJS and following the *“Thinking in React”* process to create **static** User Interfaces | Code submitted - tagged commits |
| ***Level 3***  | The engineer can create user interfaces that are built *and tested* in ReactJS and following the *“Thinking in React”* process to create **interactive** User Interfaces | Code submitted - tagged commits |
| ***Level 4***  | The engineer can create user interfaces that are built *and tested* in ReactJS and following the *“Thinking in React”* process that use **external APIs** to send and receive data and are **routed** appropriately | Code submitted - tagged commit |
| ***Level 5***  | The engineer can create user interfaces that are built *and tested* in ReactJS and following the *“Thinking in React”* process that are **routed** appropriately | Code submitted - tagged commit |

---

### Creates Backend Services meeting requirements

|                | Description                                                                                                                                                                                                       | Where assessed? |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| ***Level 1***  | The engineer can create backend service that can handle **simple requests** with **simple responses** | Code submitted  |
| ***Level 2***  | The engineer can create backend service that can handle **different request types** to the same route, **send appropriate responses** and have logic that is tested | Code submitted  |
| ***Level 3***  | The engineer can create backend service that can handle **different request types** to similar routes and **interface** with a **database** | Code submitted  |
| ***Level 3***  | The engineer can create backend service that can send **appropriate responses** that are **tested** | Code submitted  |
| ***Level 4***  | The engineer can create backend service that can handle **different request types** to similar routes, carrying out *validation* and *verification* of *request data* | Code submitted  |
| ***Level 4***  | The engineer can create backend service that return **response objects** with *appropriate status codes* and *data* using a **service-controller** architecture | Code submitted  |
| ***Level 5***  | The engineer can create backend service that can handle and ***authenticate*** requests to **complex** routes | Code submitted  |

---

---

## Digital Futures Professional Skills Progression Management Framework

In this Challenge, you will have the opportunity to demonstrate the following competencies from the Professional Skills Progression Management framework:

---

### Communications

|               | Description                                                                                            | Where assessed?                |
| ------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------ |
| ***Level 1*** | Can express themselves fluently in both verbal and written English                                     | Markdown file in `docs` folder |
| ***Level 1*** | Demonstrates attentive listening                                                                       | During assignment introduction |
| ***Level 2*** | Convey technical information to technical stakeholders in both verbal and written forms                | Markdown file in `docs` folder |
| ***Level 2*** | Creates content to a professional standard that is concise, well-structured, and grammatically correct | Markdown file in `docs` folder |
| ***Level 3*** | Articulates complex technical concepts with clarity and precision across both verbal and written forms. | Markdown file in `docs` folder |

---

### Professional Development (Assessed after submission via Self-Review)

|               | Description                                                                                                    | Where assessed?                  |
| ------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| ***Level 1*** | Demonstrates ability to listen to and act on constructive feedback or new ideas from others | SMART Goal Review |
| ***Level 2*** | Constructs SMART goal based on their identified areas of improvement | SMART goal review |
| ***Level 2*** | Achieves a self-made SMART goal | Previous SMART goal review |
| ***Level 3*** | Demonstrates consistency in achieving small to medium (<2 weeks) SMART goals (x3 goals)  | SMART Goal review |
| ***Level 3*** | Provides constructive input to peers and can communicate feedback in a supportive and helpful manner | Peer review comments |
| ***Level 3*** | Demonstrates ability to experiment with new techniques or approaches that work best for them | In code - Testing; In docs - Component Hierarchies |

---

### Business Awareness

|               | Description                                                                                                                                  | Where assessed?                                    |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| ***Level 1*** | Recognises importance of customer/stakeholder-centricity                                                                                     | Markdown file in `docs` folder                     |
| ***Level 2*** | Applies basic requirement elicitation techniques and can gather and document simple requirements that align towards the business’ objectives | Markdown file in `docs` folder                     |
| ***Level 3*** | Creates clear project documentation detailing project objectives, approach and results                                                       | Markdown file in `docs` folder and in code files   |
| ***Level 3*** | Applies prioritisation techniques to ensure resource efficiency and project alignment within timescales and business objectives              | Markdown file in `docs` folder (Trello screenshot) |

---

### Adaptability

|               | Description                                                                                                             | Where assessed?                                  |
| ------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| ***Level 1*** | Individual may notice when processes, procedures, or tasks are altered but may not be entirely comfortable with changes | Markdown file in `docs` folder                   |
| ***Level 2*** | Understands fundamental Agile terms, such as User Stories, Scrum, Kanban, and the Agile Manifesto                       | Project files and Markdown file in `docs` folder |
| ***Level 3*** | Demonstrates experimentation with different approaches, tools, or methods                                               | Project files and Markdown file in `docs` folder |

---

## Submission

Your Challenge attempt should be submitted via commits to the forked project from GitHub Classroom.  Your trainer will have supplied you with the appropriate link to do access this, you need to take no further action on this platform.  To indicate that you have completed the Challenge, you should you the Assignment Submission link in the Challenge course for your Cohort on Noodle.  The Progression Management Frameworks will be assessed via a marking rubric in Noodle and you will be able to see how you performed in each competency.  Upload any ***`.env`*** files that are not included in your repository to Noodle with your submission.

You are not permitted to collaborate with anyone to complete this challenge.  You should complete the *Core Functionality* using traditional skills, knowledge and understanding of software engineering and all code submitted for this should be your own.  You may use a *Generative AI tool* to help you complete the *Additional Functionality* but this should be clearly documented.

---

## Feedback

After submission of your challenge attempt, your trainer will record and submit feedback in Noodle and/or via GitHub for comments in your code .  You will then be able to view this feedback via Noodle and your GitHub account.

Your trainer will also provide general feedback to the cohort via the Discord channel.

---
