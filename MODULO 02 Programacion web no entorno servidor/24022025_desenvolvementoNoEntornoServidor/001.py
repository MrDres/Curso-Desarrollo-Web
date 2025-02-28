#Esto es un comentario de una linea
'''
Comentario multilineas
'''
print('probando probando')

''' 
Reglas básicas de Python
1. no se usan llaves {}
2. no se usan punto y coma ;
3. la indentacion es obligatoria
4. los comentarios se con # linea simple o con triple comilla simple 
'''

# Definir una variable con una cadena
x = "el valor de la (a+b)+c es  "
# Multiples asignaciones
a,b,c = 4, 3, 2

#realizar operaciones
d = (a+b)*c

#definir variable booleana
f = True

#Si, imprimir, print()

if f:
    print(x,d)
    print('el valor de la suma es', a+b)
    print(f)

#funcion que suma dos valores
def sumar(a,b):
    return a+b

print(sumar(5,5))

# variable nombrada de forma correcta
_variable =10
vari_able = 20


# No son validas 
# 2variable = 10
# var iable = 20
# var-iable =30

#Palabras reservadas
import keyword
print(keyword.kwlist)
# ['False', 'None', 'True', 'and', 'as', 'assert', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']

#Si la variable esta en mayuscula es una constante
PI = 3.1416