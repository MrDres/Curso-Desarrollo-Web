x=10
print(x)

y=20
print("Los valores de las variables son:", x, y)

#variables con su nombre no hay que declararlas

casa=20
hogar="esto es una casa"
decimal=10.5

#clases
class Empleado:
    def sueldo(self):
        print("Sueldo menor")
        
#instanciar una clase
e=Empleado()
e.sueldo()

def imprimir_nuevamente():
    x.sueldo()

class Gerente():
    def sueldo(self):
        print("Sueldo mayor")
        
class Coordinador():
    def sueldo(self):
        print("Sueldo medio")
        
sueldo_gerente=Gerente().sueldo()
sueldo_coordinador=Coordinador().sueldo
sueldo_empleado=Empleado().sueldo()

def mostrar_sueldo(x):
    x.sueldo()
    
mostrar_sueldo(Gerente())
mostrar_sueldo(Coordinador())
mostrar_sueldo(Empleado())