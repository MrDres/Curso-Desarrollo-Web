

# def llenarArray():
#     monedas=[]
#     while True:
#         try:
#             numero = int(input("Introduce el numero de monedas de 1 euro:"))
#             monedas[0].append(numero)
#             numero = float(input("Introduce el numero de monedas de 2 euros:"))
#             monedas[1].append(numero)
#             return print(monedas)
#         except ValueError:
#             print("Por favor, introduce un número válido.")
            
# llenarArray()

#Version 2

def sumaMonedas (a, b, c , d , e):
    return a+2*b+5*c+10*d+20*e

a= int(input("Introduce el número de monedas de 1 euro: "))
b= int(input("Introduce el número de monedas de 2 euro: "))
c= int(input("Introduce el número de monedas de 5 euro: "))
d= int(input("Introduce el número de monedas de 10 euro: "))
e= int(input("Introduce el número de monedas de 20 euro: "))

total = sumaMonedas(a,b,c,d,e)

print(f"El total de dinero es:  {total} unidades.")

#Version 3
def sumaMonedas (a, b, c , d , e):
    return a+2*b+5*c+10*d+20*e