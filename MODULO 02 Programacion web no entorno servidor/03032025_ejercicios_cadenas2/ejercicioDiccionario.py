#Crear un programa que almacene la informacion contacto (nombre, telefono) en un diccionario. Permite al usuario buscar un contacto por nombre

agenda = {
    "juan":"123456781",
    "luis":"987456341",
    "maria":"678546372"
}

nombre = input("Introduce el nombre del contacto: ")
if nombre in agenda:
    print(f"El telefono de {nombre} es {agenda[nombre]}")
else:
    print(f"No existe {nombre} en la agenda")
    