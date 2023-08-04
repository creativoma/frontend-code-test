Welcome to this code test! :)

The main objective of this technical excercise is for you to get a good grasp of what kind of problems we encounter on Genially. We wouldn't want you to find some nasty surprises if you decide to join us. Also, it's a good starting point to have a technical conversation during an interview. 

# Technology included

As you can see, the code test is a simple create-react-app, with some included libraries and some code bundled with it. Let's go through some of the lesser-known technologies.

## mobx-state-tree (MST for short)

This is the app state manager we use at our React apps. It's meant to be used with mobx, and unlike it, is very opinionated as how you should define your stores, models etc.

[MobX State Tree](https://github.com/mobxjs/mobx-state-tree)

## interact.js

Genially is a very interactivity-heavy application. Almost everything you use on the app can be moved around with your mouse, selected, scaled, rotated, etc. This library does most of the heavy lifting for us.

[Interact js](https://interactjs.io/)

# Test requirements

The test is an extremely simplified version of the Genially editor. We provide you a working area, named `Canvas`, and elements that are displayed inside of it, named `Box`.

We've also added a rudimentary toolbar for some of the required functionality.

When finished, the app should let the user:

- [X] Add and remove boxes.
- [X] Select a box, which should visually indicate that is selected
- [X] Drag the boxes around using interact.js and using React refs.
  - Keep** in mind you should be able to drag a box even if it's not selected when the dragging starts.
- [X] Changing a box's color.
- [X] Display a counter indicating how many boxes are selected.
- [ ] Support selection, dragging and color changing for multiple boxes.
- [ ] Save the state of the app locally and restore it when it loads.
- [ ] Undo / Redo capabilities
  - **hint**: mobx-state-tree provides a middleware for this.

If you are unable to do some of the above, don't worry! But we would ask to at least explain what went wrong, how you would tackle the problem, or if you have no idea whatsoever 😃 

Even if you manage to do everything, we also greatly appreciate comments on decisions you took, issues you faced or limitations you've left behind on purpose.

A good place to include those [comments](#comments-on-the-solution) is the README.md of the repo. 

# Delivery method

Send it to us however it suits you, but our preferred method is to get access to a **private fork of the repo**. This way, we can see historical changes, and a complete diff against the original repo on a PR. It's also a great way to write down feedback and discussion points for the interview afterwards.

If you opt for a fork with limited access, see the contact list below for people you can give access to. Please always include Chema & Román, and then someone else (or all of them!).

# Contact

If you have any questions about the test, you can contact any of us:

- Chema (<em>Github User [@chemitaxis](https://github.com/chemitaxis)</em> / chema@genially.com)
- Román (<em>Github User [@rjimenezda](https://github.com/rjimenezda)</em> / roman@genially.com)
- Rafa (<em>Github User [@rteran](https://github.com/rteran)</em> / rafa@genially.com)
- Emanuel (emanuel@genially.com)
- Jesé (jese@genially.com)
- Perico (perico@genially.com)
- Julio (juboba@genially.com)

Good Luck!

# Comments on the solution

1) I started the process by forking the project and then cloning the repository to my local environment. Although these improvements were not set as requirements for the technical test, I decided to focus on improving the styles and improving the interface of the application before moving on to the functionalities.

2) I then proceeded to tackle the documentation. It is important to note that I had no previous experience with these libraries, so I dedicated myself to studying the guidelines of each one. Although I had some difficulties at first, I must admit that after going through the documentation again and running tests on it, I managed to get through without any major issues.

3) Second day of the project and I was able to apply more functionalities since they share a relationship with each other in their syntax. I had some strange behavior in the boxes that I solved by changing the data it took from the positioning.

4) 

## Screenshots of the solution

Here I included a screenshot of the desktop version of the interface that was modified and improved from the base that was delivered in the technical test. The base of the styles was inspired by the design system of the components that Genially uses on its website.

![Interface Screenshot](/public/screenshot.png)


## Additional library used

I understand that it was not within the requirements, but I wanted to add the following library that allows me to use icons in svg format quickly and easily.

- React Icons (https://react-icons.github.io/react-icons/)
- Prettier (https://prettier.io/) I used it to format the code for the whole project.

## Possible future features

- Possibility to add other shapes.
- Possibility to add text.
- Possibility to save a screenshot of the canvas in png or jpg format.
- Magnets to align the boxes.