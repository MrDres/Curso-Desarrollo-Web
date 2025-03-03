#Creamos una funcion que reciba una lista de nombres y devuelva la lista de nombres de mas de cinco letras

nombres = ["ana", "carlos", "fernanda", "luis", "roberto", "carlos alfredo"]


def filtrar_nombres_largos(nombres):
    return [nombre for nombre in nombres if len(nombre) > 5]

resultado = filtrar_nombres_largos(nombres)
print(f"Nombres largos: ", resultado)