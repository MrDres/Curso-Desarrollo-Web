#Gestionar una biblioteca
#autor: André Manuel Santamaría Regal

#lista para almacenar los libros
biblioteca = []

#funcion para agregar los libros en la biblioteca
def agregarLibro(titulo, autor):
#Creamos un diccionaro para almacenar los datos del libro
    libro = {"titulo":titulo, "autor":autor, "disponible":True}
    biblioteca.append(libro)
    print(f"Libro agregado '{titulo}' de '{autor}' a la biblioteca")

#Funcion para prestar libro ''
def prestarLibro(titulo):
    for libro in biblioteca:
        if libro["titulo"]==titulo:
            if libro["disponible"]:
                libro["disponible"] = False
                print(f"El libro '{titulo}' prestado")
            else:
                print(f"El libro '{titulo}' no esta dispobible")
            return
    print(f"Libro '{titulo}' no encontrado en la biblioteca")
        
#Funcion para devolver libro
def devolverLibro(titulo):
    for libro in biblioteca:
        if libro["titulo"] == titulo:
            if not libro["disponible"]:
                libro["disponible"] = True
                print(f"Libro '{titulo}' devuelto")
            else:
                print(f"Libro '{titulo}' esta disponible")
            return
    print(f"Libro '{titulo}' no encontrado en al biblioteca")

#Funcion para mostrar el estado actual de la biblioteca cuantos prestados cuantos disponibles
def mostrarBiblioteca():
    if not biblioteca:
        print("La biblioteca esta vacia")
    else:
        print("Estado actual de la biblioteca:")
        for libro in biblioteca:
            estado = "Disponible" if libro["disponible"] else "prestado"
            print(f"{libro['titulo']} de {libro['autor']} - {estado}")

#Menu principal
def menu():
    while True:
        print("\n ---- Gestion de la biblioteca ----")
        print("1. Agregar Libro: ")
        print("2. Prestar Libro: ")
        print("3. Devolver Libro: ")
        print("4. Mostrar estado biblioteca: ")
        print("5. Salir: ")
        
        opcion = input("seleccione una opcion:  ")
        
        if opcion == "1":
            titulo = input("Introduce el nombre del libro ha añadir: ")
            autor = input("Introduce el nombre del autor del libro ha añadir: ")
            agregarLibro(titulo, autor)
        elif opcion == "2":
            titulo = input("Introduce el titulo del libro a prestar: ")
            prestarLibro(titulo)
        elif opcion == "3":
            titulo = input("Introduce el titulo del libro a devoler: ")
            devolverLibro(titulo)
        elif opcion == "4":
            mostrarBiblioteca()
        elif opcion == "5":
            print("Saliendo del Sistema...")
            break
        else:
            print("Opcion no valida. Introduzca una nueva opcion")
            
#Ejecutamos el menu para iniciar programa
menu()
            