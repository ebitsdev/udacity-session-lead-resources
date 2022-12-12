import turtle
import time
# demo = turtle.Turtle()

# demo.color("orange")
# demo.width(5)
# Draw a square
# Use a list of 4 elements (item), length = 4
# for n in ["side1", "side2", "side3", "side4"]:
#     demo.forward(150)
#     demo.right(90)
# time.sleep(2)
# Join, 

students = ["Student 1", "Student 2", "Student 3", "Student x", "Student y"]


def print_s_names(ls):
    ls[8] = "Johny"
    for s in ls:
        print(s)
    print(f"There are {len(ls)} students")
    print(ls[2])


# print_s_names(students)

# Strings

txt = "An example of string"


def display_chars(t):
    for ch in range(len(t)):
        if ch % 2 == 0:
            print("Even")
        else:
            print("Odd")


# display_chars(txt)


my_slice = txt[10:]
txt2 = "Abradacabra"

# print(txt2[len(txt2)-5:])


def word_c(w):
    pw = w[1] + w[0] + 'test'
    print(pw)

# word_c("Aero")

# students.reverse()
# print(students)


def starts_s(txt):
    if txt[0] == 'S':
        print("Yes, it does start with the letter s.")
    else:
        print("No, it does not.")


starts_s("Football game")
fruits = ["Apple", "Blueberry", "Orange", "Pineapple"]

fruits.append("Mango")
fruits.extend(["Guava", "Cherry"])
fruits.sort()


# print(fruits)


def enter_p():
    password = ''
    while password != "fizzbuzz":
        password = input("Please enter the password!: ")

# enter_p()


def infinitel():
    n = 1
    while n < 3:
        print(n)
        n += 1


infinitel()
