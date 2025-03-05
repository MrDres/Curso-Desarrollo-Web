#Funciones avanzadas, una funcion es un codigo reutilizable (vamos a trabajar con argumentos por defecto, argumentos variables y funciones lambda)

#Funcion con argumentos por defecto

def saludar(nombre, saludo="Hola"):
    #Si no se proporciona 'saludo', usa "Hola" por defecto
    return f"{saludo}, {nombre} !"
print(saludar("Luisa"))
print(saludar("Juan", "Adios" ))

#Funcion con argumentos variables

def suma_todo(*numeros): #El asterisco significa que admite cualquier numero de parametros o argumentos como tupla 
    return sum(numeros)
print(suma_todo(1,2,3,4,5,6,7,8,9,10))
print(suma_todo(20,15.5))

def info_persona(**datos):
    # El doble asterico ** datos recibe argumentos clave-valor como diccionario
    for clave,valor in datos.items():
        print(f"{clave}: {valor}")
info_persona(nombre="Luis", apellido="Perez", edad=25, ciudad="Madrid")

#Variables multiples
color="rojo"
forma="cuadrado"
cifra=30

print(color)
print(forma)
print(cifra)

items = "rojo", "cuadrado", 20
print(items)
print(type(items))

#Funcion Lambda (anonimas)

multiplicar = lambda x, y : x*y #funcion corta sin nombre definido
print(multiplicar(5,3))
 