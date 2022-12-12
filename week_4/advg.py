import time
import random
components =[]
enemies= random.choice(["demon", "beasts", "picachu", "alien", "cybergs"])
weapons= random.choice(["blade", "dagger", "sword", "knief", "cutlass"])
def print_pause(message_to_print):
    print(message_to_print)
    time.pause(1)

def print_sleep(txt, t):
    pass

def intro():
            print_pause("You find yourself standing in an open field, filled with grass and", "yellow wildflowers.")
            print_pause("Rumor has it that a wicked fairie is somewhere around here, and has", "been terrifying the nearby village.")
            print_pause("In front of you is a house.")
            print_pause("To your right is a dark cave.")
            print_pause("In your hand you hold your trusty (but not very effective) dagger.")
def choice():
    while True:
        choice = input("Enter 1 to knock on the door of the house.\n"
                       "Enter 2 to peer into the cave.\n"
                       "What would you like to do?\n"
                       "Please enter 1 or 2.\n")
        if choice == '1':
            house()
        elif choice == '2':
            cave()
        else:
            print("Please enter 1 or 2.\n")
def accept_playing():
    # Please create the valid_input function (valid_input)
    response = valid_input("Do you accept this challenge?", "yes", "no")
    if response == "yes":
        print_pause("Here we go in 3, 2, 1....")
        components(weapons)
    elif response == "no":
        print_pause("Please, I can't do this without you!")
        new_game()
def where_to():
    print_sleep("", 1)
    print_sleep("Enter 1 to knock on the door of the house.", 2)
    print_sleep("Enter 2 to peer into the cave.", 2)
    print_sleep("What would you like to do?", 0)
    choice = ''
    while choice not in ['1', '2']:
        choice = input("(Please enter 1 or 2.)\n")
    if choice == '1':
        house()
    elif choice == '2':
        cave()
def components(weapons):
    print_pause("Player is using knief as a weapon")
    print_pause("to make a choice Dagger or a knief")
    response = valid_input("Which would you like?", "Dagger", "Knief")
   # If the player knocks on the door of the house, what happens?
    #If the player enters the cave, what happens?
def field(weapons):
    print_sleep(f"The {enemy} coming closer you attack!", 2)
    for weapon in weapons:

    if weapon == "dagger":
            print_sleep(f"You have no guts {weapon}.", 2)
    option = input("Would you like to (1) attack or (2) escape?")
    if option == '1':
        if weapons == "dagger":
            print_sleep(f"Come on fight...", 1)
            print_sleep(f"but your {weapons} mismatch {enemy}.", 2)
            print_sleep(f"You have been defeated!""", 2)
        elif weapons == "knief":
            print_sleep(f"You {enemy} are not moving forward, your weapon is not effective.", 2)
            print_sleep(f"The Sword will bright move forward.", 3)
            print_sleep(f"Rival {enemy} is alert and he frightened by you!", 3)
            print_sleep(f"User is genious{enemy}. you defeted your rival Win over!", 3)
        elif option == '2':
            print_sleep("You have no openent now you go back to battle field.", 2)
            where_to()
    if response == "knief":
        print_pause("We have to fight with enemies " + dragon + " monster!")
        print_pause("Get ready in 3, 2, 1.....")
        knief(weapons)
    else:
        print_pause("We have to fight back " + enemies + " demon!")
        print_pause("Get ready in 3, 2, 1.....")
        sword(weapons)
def fight():
    pass
    # Things that happen when the player fights
def cave(enemies):
# Things that happen to the player goes in the cave
    if "demon" in enemies:
        print_pause("\nYou peer cautiously into the cave.")
        print_pause("\nYou've been here before, and gotten all"
                " the good stuff. It's just an empty cave"
                " now.")
        print_pause("\nYou walk back to the field.\n")
    else:
        print_pause("\nYou peer cautiously into the cave.")
        print_pause("\nIt turns out to be only a very small cave.")
        print_pause("\nYour eye catches a glint of metal behind a "
                    "rock.")
        print_pause("\nYou have found the magical Sword of Ogoroth!")
        print_pause("\nYou discard your silly old dagger and take "
                    "the sword with you.")
        print_pause("\nYou walk back out to the field.\n")
        components.append("sward")
        field()
# Things that happen when the player runs back to the field
# Things that happen to the player in the house
def house():
    print_sleep("You approach the door of the house.", 2)
    print_sleep(f"You are about to knock when the door opens and out steps a {enemy}.", 2)
    print_sleep(f"Eep! This is the {enemy}'s house!", 2)
    combat(weapon)
def new_game():
    response = valid_input("Do you want to play again?", "yes", "no")
    if response == "yes":
        print_pause("Okay! Let's go!")
        play_food_game()
    elif response == "no":
        print_pause("Thank you for your time. Goodbye!")
        exit(0)
def play_game():
    field()
    components(weapons)
    dagger(weapons)
    knief(weapons)
    new_game()
play_game() (edited) 