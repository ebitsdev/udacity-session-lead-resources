
rooms = {
    "Starting Room": {
        "description": "This is the starting room. There is a door to the north and a door to the east.",
        "items": ["key"],
        "exits": ["north", "east"]
    },
    "North Room": {
        "description": "This is the north room. There is a door to the south.",
        "items": ["treasure"],
        "exits": ["south"]
    },
    "East Room": {
        "description": "This is the east room. There is a door to the west.",
        "items": ["sword"],
        "exits": ["west"]
    }
}

def choose():
    choice = input(f"Enter a number between 1 and 3 to select a room ")
    if choice == "1":
        print(rooms["Starting Room"])
    elif choice == "2":
        print(rooms["North Room"])
    elif choice == "3":
        print(rooms["East Room"])

choose()
