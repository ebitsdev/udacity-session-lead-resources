# Lists
# Strings
# Pycodestyle
# Code commenting and indentation

fruits = ["Orange", "Mango", "Pear", "Blueberry", "Cherry"]


def print_list(ls):
    ls[1] = "Pineapple"
    ls.append("Mango")
    ls.extend(["Watermelon", "Grapes"])

    for item in ls:
        print(item)
        # if item == "Pear":
        #     print(f"It is a {item}")
        # else:
        #     print("It is not a pear")


# size_of_list = len(fruits)

# print(size_of_list)

# print_list(fruits)

students = ["Student 1", "Student 2", "Student three", "Student four"]
pupils = ["Pupil 1", "Pupil 2"]

# List slicing
partial_list = students[3:]

# Strings

txt = "Abracadabra"


def print_txt(t):
    ch1 = t[0]
    # List slicing
    ch_remain = t[2:]
    # String concatenation
    n_t = ch1 + "c" + ch_remain
    for ch in n_t:
        print(ch)


def starts_with(ch, txt):
    if txt[0] == ch:
        print(f"Yes, the string starts with {ch}.")
    else:
        print(f"No, the string does not start with {ch}")


# print_txt(txt)
# starts_with("A", txt)

joined_str = ' '.join(txt)

long_txt = """
This is a very long string, which is starting right from this line. sjhsjgjhgd
jfhgdjfhgsdjfhgsdhg
The second of the very long string. fddskfdsfjhdskfhdsjkfhgsdfjhdsfjds
The third and last line of this very long string.
"""

print(long_txt)
