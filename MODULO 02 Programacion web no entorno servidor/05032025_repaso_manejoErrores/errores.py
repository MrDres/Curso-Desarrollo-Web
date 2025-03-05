# Manejo de excepciones, esto permite controlar errores sin que el programa se detenga

#try, except, else, finally

def dividir(a,b):
    try:
        #intentar realizar la division
        resultado = a/b
    except ZeroDivisionError:
        # se ejecuta si hay division por 0
        print("Error, no se puede dividir por 0.")
        return None
    except TypeError:
        # se ejecuta si los tipo de datos son incompatibles
        print("Error: tipos de datos incorrectos.")
        return None
    else:
        # se ejecuta si no hay errores
        print("Division exitosa")
        return resultado
    finally:
        # Se ejecuta siempre, haya error o no
        print("Proceso finalizado")

print(dividir(10,2))
print(dividir(30,0))
print(dividir(10,"2"))

#Listas por comprension
print("Listas por comprensión")
cuadrados = [x**2 for x in range(5)] # equivalente a  for x in range(5): cuadrado.append(x**2)
print(cuadrados)

#Lista con condicion
print("Lista con condición")
pares = [x for x in range(10) if x % 2 == 0]
print(pares)

#Transformacion condicional
print("Transformación condicional")
etiquetas = ["Par" if x % 2 == 0 else "Impar" for x in range(10)]
print(etiquetas)

#Diccionarios con métodos útiles

persona = {"nombre":"María", "edad":30, "ciudad":"Vigo"}
#Obtener valor con get ( evita errores si la clave no existe)
print(persona.get("nombre"))
print(persona.get("pais","N/A"))

#Actualizar el diccionario
persona.update({"edad":45, "pais":"España"})#cambia la edad y agrega clave pais valor españa
print(persona)

#Conjunto (valores únicos)

objetos = {"mesa", "silla", "sofa", "cama", "silla", "lampara", "mesa"}
print(objetos)#no tiene los datos repetidos

#conjuntos
otros_objetos = {"mesa", "alfombra", "lampara", "sabana", "silla", "colcha"}
print(objetos.union(otros_objetos))
print(objetos.intersection(otros_objetos))

#Programacion orientada a Objetos
class Perro:
    #constructor: inicializa objetos
    def __init__(self, nombre, edad, raza):
        self.nombre=nombre
        self.edad = edad
        self.raza = raza
    #metodo de la clase
    def ladrar(self):
        return f"{self.nombre}  dice: ¡Guau!"
    
    #metodo con parametro
    def cumplir_años(self):
        self.edad +=1
        
    def tipo_raza(self):
        self.raza = "caniche"
        return f"{self.nombre} de raza {self.raza} ahora tiene {self.edad} años"
    
#instancias
perro1 = Perro("Vera", 2, "Border Collie")
perro2 = Perro("Zari", 4, "Chihuahua")

#Usar metodos 
print(perro1.ladrar())
print(perro2.cumplir_años())
print(perro1.tipo_raza())

    