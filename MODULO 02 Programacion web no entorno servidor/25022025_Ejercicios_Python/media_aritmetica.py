#Descripcion: Ejercicios de media aritmetica
#Ejercicio 1. Definir la funcion
#media3: (float, float, float) -> float
#tal que (media3 x y z) es la media atimetica de los numeros x, y y z.
#por ejemplo
#media3 (1,3,8) == 4.0
#media3 (-1,0,7) == 2.0
#media3 (-3,0,3) == 0.0

# ESTO FUNCIONA 
# num1 = float(input("Introduce tu primer numero: "))
# num2 = float(input("Introduce tu segundo numero: "))
# num3 = float(input("Introduce tu tercer numero: "))

# def calcularMedia (num1, num2, num3):    
#     media = (num1 + num2 + num3) / 3
#     return print(media)

# __name__ = "__main__"
# calcularMedia(num1, num2, num3)

# FIN DEL EJERCICIO BÁSICO

# LO MISMO DEL ANTERIOR CON INPUTS Y VALIDACIONES   
# numeros = []


# def introducirNumeros():
    
#     numAux= input("Introduce un numero: ")
    
#     validarNumero(numAux)
    
# def validarNumero(numero):    
    
#     if numero.isnumeric():
#         return numeros.append(float(numero))
#     else: print("No introduzcas letras porfavor")

# def calcularMedia (numeros):  
            
#     media = sum(numeros) / numeros.len()
#     return print(media)
# introducirNumeros()

numeros = obtener_numero("Introduce un número: ")

def obtener_numero(mensaje):
    while True:
        try:
            numero = float(input(mensaje))
            return numero
        except ValueError:
            print("Por favor, introduce un número válido.")
