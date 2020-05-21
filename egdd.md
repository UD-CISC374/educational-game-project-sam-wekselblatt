---
waltz:
  title: Educational Game Design Document Template
meta:
  version: 0.0.2
  gdd authors:
    - Your name goes here
  template authors:
    - Austin Cory Bart <acbart@udel.edu>
    - Mark Sheriff
    - Alec Markarian
    - Benjamin Stanley
---

# The Sorting Hat

## Elevator Pitch

There was a confusion at the hat factory and a group of people ended up getting the wrong colored hat! You will be given a sotring algorithm to follow, and, by dragging around the hats, you will have to put the hats in the correct order so that everyone gets the hat they wanted.

## Influences (Brief)

- Harry Potter:
  - Medium: Movies and Literature
  - Explanation: The phrase "Sorting Hat" is well known due to the popularity of the Harry Potter films and novels.
- Dragon Slayer:
  - Medium: Game
  - Explanation: This Newgrounds flash game has a similar character design to that of what I intend the customers to look like.

## Core Gameplay Mechanics (Brief)

- Swap hats by dragging one hat to the head of another person.
- If you swap hats too many times without getting the order right the people will
get mad and you will have to start the sort over.
- If you correctly sort the hats within the given movement count the people will 
be happy and you can move onto the next round.

# Learning Aspects

## Learning Domains

Introduction to basic sorting algorithms

## Target Audiences

Elementary to middle schoolers

## Target Contexts

This will be suplemental learning after students have been given a basic introduction to sorting algorithms.
This can be used as a classroom activity as a way to reinforce information.

## Learning Objectives

- Students will be able to distinguish between various sorting algorithms.

## Prerequisite Knowledge

- Students will need to know generally what a sorting algorithm is.

## Assessment Measures

- Given an array of numbers, sort the array into ascending order. Show each step using a Bubble Sort.
- Given an array of numbers, sort the array into ascending order. Show each step using a Selection Sort.

# What sets this project apart?

- This game gives the player the experience of performing these sorts by hand, which makes learning the sorts more engaging
than watching visual representations of the sort or theorizing how it would look after reading about it.
- This game focuses more on understanding the basics of each of its sorting algorithms and what sets them apart rather than on
how to write the code for them.

# Player Interaction Patterns and Modes

## Player Interaction Pattern

- The game is single player.
- The player uses the mouse to drag hats around.

## Player Modes

- Single-player: The player completes several levels before finishing the game.

# Gameplay Objectives

- Make the customers happy:
    - The customers will be happy once every person has the correct hat.
- Complete the sort within the movement limit:
    - Perform the correct sort without exceeding the limited amount of moves to progress to the next level.
- Complete all the levels
    - Finish all the levels to beat the game.

# Procedures/Actions

- The player drags hats from one person's head to another.

# Rules

- Each level will give the player a movement limiter. 
    - If the player exceeds this number of move it counts as a loss and the player has the option to try the level agian.
- Each level will give the player a sorting algorithm they must use.
    - The algorithms the game will use will be Bubble Sort and Selection Sort.
- When given a Bubble Sort, the player will only be allowed to drag and swap hats with the person immediatly next to them.
    - If the player chooses any other hat to swap with the hat will return to its original head.
- When given a Selection Sort, the player can choose any head to swap hats with.
    - Only the hat the player drags and the hat it will be replacing will swap. All other hats will remain in place.
- The game will alternate between the two sorting algorithms, with each appearance of the individual sorting algorithms 
giving the player a smaller movement limit.

# Objects/Entities

- There will be nine people standing in line.
- There will be nine moveable uniquely colored hats, one on each head of a person in line.
- There will be a move limit on the screen.
- There will be a move counter on the screen.
- There will be a display stating which sorting algorithm to use.

## Core Gameplay Mechanics (Detailed)

- Moving the hat to a viable head: If the player drags a hat to a position that is allowed by the sorting algorithm,
then the hats will move asshould be expected given the algorithm. The hats will swap if it is a Selection or Bubble sort.
- Moving the hat to a non-viable head: If the player is given a Bubble Sort and tries to swap hats with a head that is not
immediatly next to their current one, the hat will return back to its original head.
- Completing the Sort: If the player is able to complete the sort correctly within the move limit, the game will progress to the next
level and change the sorting algorithm as well as the location of the hats.
Hitting the movement limit: If the player exceeds the maximum move limit, then the game is over. From here the player will have the
option to start the level over or quit the game.
- Completing all the Sorts: If the player completes all the levels of the game, the owner of the hat factory will greet the player and
thank them for a job well done.
    
## Feedback

- When you complete the level the customers smile and show signs of happiness.
- The movement counter and limiter show how close or far the player was from losing.
- Completing a level brings out a new batch of customers who have the wrong hats.
- Winning the game brings out the owner of the hat factor who thanks the player.

# Story and Gameplay

## Presentation of Rules

- A display will appear on the screen stating which sorting algorith to use.
- A counter will appear on the screen stating how many moves the player is allowed to make.

## Presentation of Content

- The hats will move in accordance to the sorting algorithm, showing the player how each algorithm handles its components.

## Story (Brief)

A hat factory incorrectly gives customers the wrong hats. As a store employee it is your job to go and sort out what the issue is. 
As is company regulation, you are required to use certain sorting algorithms with the customers. If you take too long to sort
the hats the customers will get upset and leave, permanently losing their business.


# Assets Needed

## Aethestics

The game will have a colorful and happy aesthetic with its characters, enticing the player to interact with them and their hats.

## Graphical

- Characters List
  - The customers: There will be nine customers, each with a different colored shirt. They will need three faces: happy, sad, and upset.
  - The manager: The manager will need two faces, happy (for if you beat the game) and upset (for if you lose the game).
- Environment Art/Textures:
  - Background: The factory will be colorful and bright while also being industrial.
  - Hats: The hats will each be a different color, coresponding to the color of the shirt the customers are wearing.

## Audio

- Music List (Ambient sound)
  - Gameplay: Soft elevator music (Similar to Mass Effect Elevator Music 2).
  - Game over: Short jingle to show defeat (Similar to Earthbound Game Over theme).
  - Winning the game: Short jingle to show victory (Similar to Final Fantasy III victory theme).
  
*Game Interactions are things that trigger SFX, like character movement, hitting a spiky enemy, collecting a coin.*

- Sound List (SFX)
  - Swapping hats: A kind of (ffffffp) sound, like that of two pieces of felt rubbing together shortly.
## Proof of Issue

-Sorting is Boring: Computer Science Education Needs to Join the Real World
  - https://www.huffpost.com/entry/sorting-is-boring-compute_b_6675650
  - The focus of this article is on the negative reaction had by a group of female students when learning about sorting algorithms.
  - One of the conclusions drawn by the article is that the students viewed sorting for the sake of sorting as pointless and uninteresting.
  - My game aims to create an interactive showcase for sorting algorithms, providing a context to using sorting algorithms that is lacking in other introductor teaching methods.
  - While this article is not a conclusive scientific study, it does show a present difficulty in getting students interesting in learning sorting algorithms.
-Draft New York State Computer Science and Digital Fluence Learning Standards
  - http://www.nysed.gov/common/nysed/files/programs/curriculum-instruction/draft-nys-k-12-computer-science-digital-fluency-standards.pdf
  - This document is a draft showcase for a computer science curriculum that would be implemented in New York State schools for grades K-12.
  - Of note, the current structure of these classes is to begin instroducing the abstract concept of sorting in grades 6-8, and then introduce specific sorting algorithms in grades 9-12.
  - My game aims to both introduce and educate younger students to both the concept of sorting and to specific sorting algorithms.
  - This document shows a lack of proper sorting education before grade 9, and my game is made to get students comfortable and accustomed to sorting algorithms before high school.
# Metadata

* Template created by Austin Cory Bart <acbart@udel.edu>, Mark Sheriff, Alec Markarian, and Benjamin Stanley.
* Version 0.0.3
