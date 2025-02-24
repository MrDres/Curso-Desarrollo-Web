#24-02-2025 André M. Santamaría Regal
#declarar variables

'''
Crear un programa que almacene informacion sobre un producto , nombre, precio , cantidad en stock y muestre un mensaje indicando si el producto esta disponible o no (si la cantidad en stock es mayor a 0)
'''
nombre_producto = "Laptop"
precio=1200.60
cantidad_stock=10
producto = { "nombre" : "Laptop", "precio" : 1200.60, "cantidad_stock" : 10}

if cantidad_stock > 0:
    print(f"El producto", nombre_producto, "esta disponible")
else:
    print(f"El producto", nombre_producto, "no esta disponible")
    
#fin del programa

#Condicionales (if, else, elif)
'''
tomar decisiones segun las condiciones 
'''
#Ejemplo crear un programa que simule un sistema de acceso. Pide al usuario que ingrese su nombre y contraseña. SI el nombre es admin y la contraseña es 1234 permite el acceso, de lo contrario muestra mensaje de error

usuario=input ("Ingrese el nombre de usuario:")
password=input ("Ingrese la contraseña:")
if usuario == "admin" and password == "1234":
    print("Acceso permitido")
else:
    print("Acceso denegado")