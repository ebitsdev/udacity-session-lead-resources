def introduction(a,b,c):
    print(f"Hello, my name is {a}. I'm from {b} and I love to spend my spare time {c}. It's very nice to meet you!")

def translate(a,b,c):
    print(f"Hola, mi llamo es {a}. Soy de {b} y me encanta {c}. Mucho Gusto.")

def greetings():
    a=input("Name: ")
    b=input("Hometown (city, state): ")
    c=input("Favorite hobby (present tense verb): ")
    introduction(a,b,c)

def saludos():
    a=input("Su nombre: ")
    b=input("Su cuidad natal: ")
    c=input("Su actividad favorita: ")
    translate(a,b,c)
    
#greetings()
x=0
while x==0:
    select=input("English (1) or Espanol (2): ")
    if select=="1":
        greetings()
        x+=1
    elif select=="2":
        saludos()
        x+=1
    else:
        print("Enter a number/Ingrese un numero")

