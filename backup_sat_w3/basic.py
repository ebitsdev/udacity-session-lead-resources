import time


def printName(name):
    print(name)

# printName("Washington, D.C")

names = ['Annie', "Jane", "John"]
students = ["S", "R", "A"]
num1 = 132
txt = "Hello World!"

# print(names, students, num1)
# for ch in txt:
#     print(ch)

def addition(a, b):
    return a + b
def divide(x, y):
    return x / y

# print(addition("DC", "VA"))

# print(addition(115, 741))
# print(divide(500,3))

def introduction(name, city, state):
   
    comment = """
    This is the first line in this multi-line text
    A second line in the multi-line ...
    A third line ...
    """
    print(name, city, state)

# introduction("John", "Rockville", "Maryland")

def whats_your_name():
    name = input("What is your is name?: ")
    time.sleep(1)
    print("Hello", name)


# whats_your_name()


def introduce_yourself():
    name = input("What is your name? ")
    time.sleep(1)
    city = input("Where do you live? ")
    time.sleep(1)
    hobby = input("What is your hobby? ")
    time.sleep(1)
    print(f"Hello {name}, nice to meet you. You live in a great city {city}. I love {hobby} too!")

introduce_yourself()