# print("Hello Class!")
# Creating variables
student = "Johny"
numb1 = 101
numb2 = 9
students = ["Annie", "Jane", "Bob", "Sam"]

def test():
    print("We are simply testing Python.")

test()

def addition(a, b):
    return a + b

def division(x, y):
    return x / y

def substraction(a, b):
    return a - b

def print_results():
    print("Addition: ", addition(9, 11))
    print("Division: ", division(64, 8))
    print("Substraction", substraction(291, 83))

print_results()

def display_student_names(names):
    for name in names:
        print(name)

display_student_names(students)