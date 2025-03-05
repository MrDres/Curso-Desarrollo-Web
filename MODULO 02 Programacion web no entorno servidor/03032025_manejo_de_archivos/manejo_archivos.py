#Crea un programa que permita al usuario guardar notas en un archivo de texto. Cada vez que el usuario ingrese una nota, esta se agregará al archivo.

with open ("notas.doc", "a") as archivo:
    while True:
        nota = input("Escribe una nota  ( o 'salir' para terminar): ")
        if nota.lower() == "salir":
            break
        archivo.write(nota + "\n")
    print(f"Notas guardadas correctamente. ")