#26-02-2025 Realizado por André Manuel Santamaría Regal
# Crear una lista
frutas = ["manzana", "pera", "uva", "sandia", "melon"]
print(frutas)

#Acceder a un elemento de la lista
print(frutas[1])

# Con numero negativo accedemos al reverso -1 seria el ultimo elemento el -2 el penultimo etc...
print(frutas[-1])

# con el metodo .title te pone la primera letra en mayuscula

print(frutas[1].title())

# metodo todas minusculas .lower() todas mayusculas .upper()

print(frutas[2].upper())
print(frutas[2].lower())

# Usar valores individuales de una lista
mensaje = " Mi fruta favorita es " + frutas[1].title() + "."
print(mensaje)

#Modificar elementos de la lista
frutas[0] = "fresa"
print(frutas)

#Agregar elementos a una lista al final
frutas.append("naranja")
print("frutas")

#
coches = []
coches.append("audi")
coches.append("tesla")
coches.append("seat")
coches.append("mercedes")
coches.append("nissan")

#Insertar elementos en la lista (posicionenelarray, "objeto a meter en el array")
frutas.insert(0,"banana")

#eliminar elementos de una lista 
alumnos = ["andre", "yoli", "marina", "ricardo", "ruben", "donato", "diego", "jose"]
print(alumnos)

# el .pop() elimina el utlimo elemento de la lista
eliminar_alumno = alumnos.pop()
print(alumnos)
print("El alumno eliminado es "+ eliminar_alumno)

