#Variables

nombre_variable = "laptop" #string
precio = 1200.05 #float
cantidad_stock = 5 #int

if cantidad_stock > 0:
    print(f"El producto {nombre_variable} esta disponible")
else:
    print(f"El producto {nombre_variable} no esta disponible")

#CONDICIONALES (if, elif, else)

usuario = input("Ingresa nombre de usuario: ")
contraseña = input("Ingresa la contraseña: ")

if usuario == "admin" and contraseña == "1234":
    print ("Acceso permitido")
else:
    print("Acceso denegado")
    
#Bucle (for, while)

lista_compra = []

while True:
    producto = input("Ingrese nombre producto o escriba terminar para finalizar el programa: ")
    
    if producto.lower() == "terminar":        
        break
    lista_compra.append(producto)
    
    print("Tu lista de la compra es: ")
    for item in lista_compra:
        print(f" - {item}")
        
