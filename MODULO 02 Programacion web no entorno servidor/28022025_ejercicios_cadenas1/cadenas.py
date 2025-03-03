#Crea un programa que tome un nombre y un apellido, los una con concatenación y muestre el nombre completo
nombre = "Juan"
apellido = "Pérez"
nombre_completo = nombre +" "+ apellido

print(nombre_completo)

#longitud de una cadena: escribe un programa que calcule la longitud de la cadena de texto

texto= "buenos días people"
longitud = len(texto)
print("La longitud del texto es:",longitud)

#convertir en mayusculas 
texto = "People este lunes carnaval"
texto_mayusculas = texto.upper()
texto_minusculas = texto.lower()
texto_capitalizar = texto.capitalize()

print(texto_mayusculas, texto_minusculas,texto_capitalizar)

#Reemplazar texto de un array
texto = "People cambio de texto"
print(texto)
nuevo_texto = texto.replace("texto", "palabra")
print(nuevo_texto)

#Contar ocurrencias de un caracter

parrafo = "El día en que lo iban a matar, Santiago Nasar se levantó a las 5.30 de la mañana para esperar el buque en que llegaba el obispo. Había soñado que atravesaba un bosque de higuerones donde caía una llovizna tierna, y por un instante fue feliz en el sueño, pero al despertar se sintió por completo salpicado de cagada de pájaros"
contar= parrafo.count("a")

print("El numero de 'a' aparece",contar,"veces")

#Dividir una cadena en una lista:

tipos="manzana, naranja, mandarina, uva"
lista=tipos.split(",")
print(lista)
print(type(lista))
p=tipos.startswith("l")
print(p)
cadena= ",".join(lista)
print(cadena)
print(type(cadena))

#verifica que una cadena empieza con prefijo

palabras = "Buenos dias people"
if palabras.startswith("Buenos"):
    print(" El texto comienza con la palabra 'Buenos'")






