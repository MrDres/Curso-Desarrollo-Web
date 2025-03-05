'''Crea una clase Coche con los atributos como marca, modelo y kilometraje.
Luego crea un metodo para mostrar la informacion del coche. POO'''

class Coches:
    def __init__(self, marca, modelo, kilometraje):
        self.marca = marca
        self.modelo = modelo
        self.kilometraje = kilometraje
        
    def mostrar_info(self):
        print(f"Coche: {self.marca} modelo: {self.modelo} kilometraje: {self.kilometraje} km")
    
mi_coche01 = Coches("Toyota", "Corolla", 15000)
mi_coche02 = Coches("Tesla", "Model A", 45)

mi_coche01.mostrar_info()
mi_coche02.mostrar_info()
