import turtle
import time

def introduction():
    name = input("What is your name? ")
    time.sleep(2)
    city = input("Where do you live? ")
    time.sleep(3)
    hobby = input("What is your hobby? ")
    time.sleep(4)
    print(f"Hello {name}, you live in a great city, {city}. I also enjoy {hobby}.")

# introduction()

my_turtle = turtle.Turtle()
my_turtle.color("green")
my_turtle.width(5)

for side in [1, 2, 3, 4, 5, 6]:
    my_turtle.forward(100)
    my_turtle.right(60)

time.sleep(4)
