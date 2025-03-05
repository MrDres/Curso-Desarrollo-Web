'''Ejercicio 1: Filtrar números primos
Escribe una función que tome una lista de números y devuelva una nueva lista con solo los números primos.'''

def es_primo(n):
    #si el numero es menor 2, no es primo
    if n<2:
        return False
    #recorre (itera) desde el 2 hasta la raiz cuadrada de n (para optimizarlo)
    for i in range(2, int(n**0.5)+1):
        #si n es divisible por i, no es primo
        if n % i ==0:
            return False
    #si no encuentra un divisor, es primo
    return True

def filtrar_primos(lista):
    #usar comprension de lista para filtrar solo los numeros primos
    return [num for num in lista if es_primo(num)]

numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,23,78,142]
print(filtrar_primos(numeros))

'''Ejercicio 2: Contar palabras en un texto
Escribe una función que tome un texto y devuelva un diccionario con la frecuencia de cada palabra.'''
texto="Cuando el grajo vuela bajo hace un frío del carajo"
'''def contar_palabras(texto):
    #convertir el texto a minusculas y lo divide en palabras
    palabras=texto.lower().split()

    #Diccionario para almacenar las frecuencias de cada palabra
    frecuencia = {}

    #itera sobre cada palabra en la lista
    for palabra in palabras:
        #si la palabra ya esta en el diccionario, incrementamos el valor
        if palabra in frecuencia:
            frecuencia[palabra] +=1
        #si no esta la añade al diccionario con valor 1
        else:
            frecuencia[palabra]=1
        return frecuencia
    
print(contar_palabras(texto))'''
#Version de ignacio        
entrada = input("Introduzca texto").lower()
diccionario = set(entrada.split())
for palabra in diccionario:
    print(f"A {palabra}{len(entrada.split(palabra))-1}")

'''Ejercicio 3: Clase para manejar fracciones
Crea una clase Fraccion que permita sumar, restar, multiplicar y dividir fracciones. Además, debe simplificar automáticamente el resultado.'''

from math import gcd  # Importa la función gcd (máximo común divisor) de la biblioteca math

class Fraccion:
    def __init__(self, numerador, denominador):
        # Calcula el máximo común divisor para simplificar la fracción
        comun = gcd(numerador, denominador)
        # Simplifica el numerador y el denominador
        self.numerador = numerador // comun
        self.denominador = denominador // comun

    def __add__(self, otra):
        # Suma dos fracciones: (a/b) + (c/d) = (ad + bc)/(bd)
        nuevo_numerador = self.numerador * otra.denominador + otra.numerador * self.denominador
        nuevo_denominador = self.denominador * otra.denominador
        # Devuelve una nueva fracción simplificada
        return Fraccion(nuevo_numerador, nuevo_denominador)

    def __str__(self):
        # Representación en cadena de la fracción
        return f"{self.numerador}/{self.denominador}"

# Ejemplo de uso
f1 = Fraccion(1, 2)  # Crea la fracción 1/2
f2 = Fraccion(3, 4)  # Crea la fracción 3/4
print(f1 + f2)  # Salida: 5/4 (resultado de 1/2 + 3/4)


'''Ejercicio 4: Encontrar la sublista con la suma máxima
Dada una lista de números, encuentra la sublista contigua cuya suma sea la máxima.'''

def sublista_suma_maxima(lista):
    # Inicializa la suma máxima con un valor muy pequeño
    suma_maxima = float('-inf')
    # Inicializa la suma actual en 0
    suma_actual = 0
    # Inicializa índices para rastrear la sublista
    inicio = fin = temp_inicio = 0

    # Itera sobre la lista con su índice y valor
    for i, valor in enumerate(lista):
        # Acumula la suma actual
        suma_actual += valor
        # Si la suma actual es mayor que la suma máxima, actualiza la suma máxima y los índices
        if suma_actual > suma_maxima:
            suma_maxima = suma_actual
            inicio = temp_inicio
            fin = i
        # Si la suma actual es negativa, reinicia la suma actual y el índice temporal
        if suma_actual < 0:
            suma_actual = 0
            temp_inicio = i + 1

    # Devuelve la sublista con la suma máxima
    return lista[inicio:fin + 1]

# Ejemplo de uso
numeros = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
print(sublista_suma_maxima(numeros))  # Salida: [4, -1, 2, 1]

'''Ejercicio 5: Generar un diccionario anidado
Escribe una función que tome una lista de tuplas y genere un diccionario anidado. Cada tupla contiene una clave y un valor, y las claves pueden estar anidadas usando puntos (.).'''

def crear_diccionario_anidado(tuplas):
    # Inicializa un diccionario vacío
    diccionario = {}
    # Itera sobre cada tupla (clave, valor)
    for clave, valor in tuplas:
        # Divide la clave en partes usando el punto como separador
        partes = clave.split('.')
        # Inicializa un puntero al diccionario actual
        actual = diccionario
        # Itera sobre las partes de la clave (excepto la última)
        for parte in partes[:-1]:
            # Si la parte no existe en el diccionario actual, la crea como un diccionario vacío
            if parte not in actual:
                actual[parte] = {}
            # Mueve el puntero al siguiente nivel del diccionario
            actual = actual[parte]
        # Asigna el valor a la última parte de la clave
        actual[partes[-1]] = valor
    # Devuelve el diccionario anidado
    return diccionario

# Ejemplo de uso
tuplas = [("a.b.c", 1), ("a.b.d", 2), ("a.e", 3), ("f", 4)]
print(crear_diccionario_anidado(tuplas))
# Salida: {'a': {'b': {'c': 1, 'd': 2}, 'e': 3}, 'f': 4}

