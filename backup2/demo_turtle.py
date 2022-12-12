import turtle
import time

demo_t = turtle.Turtle()
demo_t.color("blue")
demo_t.width(4)

# draw a square
for side in [1, 2, 3, 4, 5, 6]:
    demo_t.forward(70)
    demo_t.right(60)

time.sleep(4)