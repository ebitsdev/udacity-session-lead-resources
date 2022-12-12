# Create variables in Python
student = "John"
total = 501
students = ["Eve", "Johny", "Annie", "Talbot"] 
greeting = "Hello my name is Emmanuel, city's name is test"
# Functions

def addition(x, y):
    return x + y

sum = addition(3, 9)

# print(sum)

long_text = """
This is the first line of this long text
This is the second line of this long text
This is the third line of this long text
This is the fourth line of this long text

"""

def show_name():
    print("New York City")

# show_name()

def print_student_names(names):
    for name in names:
        print(name)

print_student_names(students)
