# List and overview of list methods
cities = ["Rockville", "Charlotte", "New York", "Miami", "Seattle"]


def print_list(ls):
    # Lists are mutable
    # ls[0] = "Washington, D.C"
    # We can sort lists
    # ls.sort()
    # Reverse
    # ls.reverse()
    # Add an item to a list using append method
    # ls.append("Boston")
    # Pop an item (remove an item at the end of the list)
    # ls.pop()
    # List index error
    # if ls[5]:
    #     print(f"This is the third item in the provided list {ls[5]}")
    # List slicing
    print(ls[1:2])
    # for item in ls:
    #     print(item)

# print_list(cities)

# String


def string_overview(txt):
    # Accessing string character by index
    second_letter = txt[1]
    # String concatenation
    new_txt = txt[:1] + "c" + txt[2:]
    l_to_string = ["A", "B", "C"]
    joined = ",".join(l_to_string)
    # Strings are immutable
    # txt[3] = "z"
    print(f"This is the second letter of the provided string {joined}")
    for c in txt:
        print(c)


my_text = "Abracadabra"

multiline_txt = """
This is the first line of the multiline text And this is the second line
of the text
etc.
"""

print(multiline_txt)

string_overview(my_text)
