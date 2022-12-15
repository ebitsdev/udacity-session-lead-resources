# Adventure game assigment for cognizant
import random
import time
# Create an intro for the game
print("Welcome to the adventure game! You find yourself in a mysterious cave.")
time.sleep(2)
# Define a list of choices for the player to choose from
choices = ["go north", "go south", "go east", "go west"]
item = ["tourch", "sword", "compass", "Daguer"]
def choose():
    return random.choice(choices)
def roll():
    return random.randint(1,5)
def item():
    return random.item(1,5)
print("Your are now exiting the cave. what do you want to do next")
Choice = input("Enter 1 to go north, 2 to go east, 3 to go south, 4 to go west")
if choices == "1":
    print("you are now heading towards the swamp, where a great treasure lies")
    time.sleep(2)
    print("but the great treasure comes with a price, a dangerous monster gurads the treasure.")
if choices == "2":
    print("you are now heading towards a village, hold you invetory close looting is very coommond.")
    time.sleep(2)
    print("avoid picking fights you are very strong, the village may think you are a demond.")
if choices == "3":
    print("You are now heading inside the cave, maybe it is a good idea to gear up!")
    time.sleep(2)
    print("The swamp monstar can't be killed but it fears fire as it is unknow to the swamp.")
if choices == "4":
    print("You are now heading to a dark forest.!")
    time.sleep(2)
    print("You have gotten lost in the forest.")
# main game loop
while True:
  print("You are in a dark cave.")
  print("You see a path leading to the north, south, eats, or west.")
  # Ask the player to choose a direction
  choice = input("Which way do you want to go? ")
  # Check if the player's choice is in the list of choices
  if choice in choices:
    if choose() == choices:
      print("You have chosen wisely and have found a treasure chest!")
    elif roll() > 5:
      print("You have stumbled upon a dangerous beast and must fight for your life!")
    else:
      print("You have gotten lost in the forest.")
  # If the player's choice is not in the list of choices,
  # then print an error message and start the game loop over again
  else:
    print("That is not a valid choice. Please try again.")