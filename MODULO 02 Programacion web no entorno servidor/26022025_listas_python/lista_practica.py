#26-02-2025 Realizado por André Manuel Santamaría Regal

alumnos = ["andre", "yoli", "marina", "ricardo", "ruben", "donato", "diego", "jose"]
print(alumnos)

#eliminar elementos de una lista
# el .pop() elimina el utlimo elemento de la lista
eliminar_alumno = alumnos.pop()
print(alumnos)
print("El alumno eliminado es "+ eliminar_alumno)

# Eliminar por indice con pop(indice a eliminar)
tercer_alumno = alumnos.pop(2)
print(alumnos)
print("El alumno eliminado es " + tercer_alumno)

# Eliminar un elemento especifico
alumnos.remove("ruben")
print(alumnos)

print("Los alumnos ganadores del juego del calamar " + alumnos[0].title()+ "\n\t"+ alumnos[1].title())

#Ordenar una lista 
print(alumnos)
alumnos.sort()
print(alumnos)

alumnos.sort(reverse=True)
print(alumnos)

#sorted() para ordenar una lista temporalmente
print("Lista original")
print(alumnos)
print("Lista ordenada")
print(sorted(alumnos))

#cantidad de elementos en una lista, si en vez de + es una , es como si fueran elementos separados si es con + es como si todo fuera un mismo elemento
 
print("La lista de alumnos tiene "+ str(len(alumnos)) + " elementos.")


