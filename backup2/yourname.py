import time

def introduction():
    name = input("What is your name? ")
    time.sleep(2)
    city = input("What is your city? ")
    time.sleep(2)
    hobby = input("What is your hobby? ")
    print(f"Hello {name}, nice to meet you. {city} is great one!. I love {hobby} too.")
    time.sleep(2)


introduction()

# * Create a simple function to introduce yourself with the following details
# - Name, city, and hobby
# - Use the built-in Python input function
# - Print the result to the console