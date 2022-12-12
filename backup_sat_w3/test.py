import turtle
import time
demo_turtle = turtle.Turtle()
demo_turtle.color("orange")
for side in [1, 2, 3, 4]:
    demo_turtle.forward(75)
    demo_turtle.right(90)
time.sleep(2)