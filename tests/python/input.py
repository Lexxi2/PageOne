from random import randint

zahl= randint(1,10)

guess= int( input("Rate die Zahl? ") )
versuche= 1


while guess != zahl:
    guess = int( input("Die Zahl war leider falsch, rate nochmals: ") )

    if guess > zahl: 
        print("Die Zahl ist kleiner als dein Tipp.")

    elif guess < zahl:
        print("Die Zahl ist grösser als dein Tipp.")
    versuche = versuche + 1

print("Richtig du hast die Zahl erraten! Die Zahl war: " + str(zahl))
print("Du hast " + str(versuche) + " Versuche gebraucht.")