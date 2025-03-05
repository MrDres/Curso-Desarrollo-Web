'''Ejercicio 1: Filtrar números primos
Escribe una función que tome una lista de números y devuelva una nueva lista con solo los números primos.'''
n= 23
def filtrar_primos(n):    
        if n <= 1:
            return False
        for i in range(2, n):
            if n % i == 0:
                return False
        return print(n," es un numero primo.")
filtrar_primos(n)

'''Ejercicio 2: Contar palabras en un texto
Escribe una función que tome un texto y devuelva un diccionario con la frecuencia de cada palabra.'''
texto = "Cuando el grajo vuela bajo hace un frío del carajo"
frecuencia_palabras
def contar_palabras(texto):
    num_palabras= len(texto.split())   
    for palabra in texto:
        if palabra in texto:
            frecuencia_palabras[palabra] += 1
        else:
            frecuencia_palabras[palabra] = 1
    
    return print(frecuencia_palabras)
       


contar_palabras(texto)

'''Ejercicio 3: Clase para manejar fracciones
Crea una clase Fraccion que permita sumar, restar, multiplicar y dividir fracciones. Además, debe simplificar automáticamente el resultado.'''

'''Ejercicio 4: Encontrar la sublista con la suma máxima
Dada una lista de números, encuentra la sublista contigua cuya suma sea la máxima.'''

'''Ejercicio 5: Generar un diccionario anidado
Escribe una función que tome una lista de tuplas y genere un diccionario anidado. Cada tupla contiene una clave y un valor, y las claves pueden estar anidadas usando puntos (.).'''