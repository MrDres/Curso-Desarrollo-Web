#25-02-2025 Andre Manuel Santamaría Regal

#definir la funcion principal del programa
def vida_util_software():
    #mensaje de bienvenida al usuario
    print("Bienvenido al asistente de vida útil del software")
    #explicamos al usuario el proposito del programa
    print("Este programa te ayudara a estimar la vida util de un software base en varios factores")
    #preguntar al usuario para evaluar los factores que influyen en la vida util del software y convierte la respuesta a minúsculas
    #soporte tecnico
    vida_util = 0
    
    while True:
        soporte_tecnico = input("¿el software sigue recibiendo soporte técnico? (si/no): ").lower()
        
        if soporte_tecnico == "si":
            vida_util += 2
            break
        elif soporte_tecnico == "no":
            vida_util -= 1
            break
        else: print("Respuesta incorrecta, por favor utilice solo un si o un no")
    
    
    #actualizaciones
    #pregunta si el software recibe actualizaciones
    actualizaciones = input("¿el software recibe actualizaciones? (si/no): ").lower()
    
    #compatibilidad
    compatibilidad = input("¿el software es compatible con otros sistemas operativos? (si/no): ").lower()
    
    #demanda
    demanda = input("¿el software sigue siendo demandado por los usuarios? (si/no): ").lower()
    
    #evaluar las respuestas del usuario
    
    
    #si el software recibe soporte tecnico, se suma 2 al puntaje, de lo contrario se resta 1
   
    #si el software recibe actualizaciones, se suma 2 al puntaje, de lo contrario se resta 1
    if actualizaciones == "si":
        vida_util += 2
    else:
        vida_util -= 1
    #si el software recibe compatibilidad, se suma 2 al puntaje, de lo contrario se resta 1
    if compatibilidad == "si":
        vida_util += 2
    else:
        vida_util -= 1
    #si el software recibe demanda, se suma 2 al puntaje, de lo contrario se resta 1
    if demanda == "si":
        vida_util += 2
    else:
        vida_util -= 1
        
    #Resultado de la evaluacion
    #Si el puntaje es 5 o mayor, se considera que el software tiene vida util larga
    
    if vida_util >= 5:
        print("El software tiene una vida util larga. Es probable que siga siendo util por varios años más.")
    #Si el puntaje es 3 o mayor, se considera que el software tiene una vida utl moderada
    elif vida_util >= 3:
        print("El software tiene una vida util moderada. Es posible que siga siendo util por algun tiempo más.")
    #Si el puntaje es menor de 3, se considera que el software tiene una vida util corta
    else:
        print("El software tiene una vida util corta. Es probable que deje de ser util en un futuro cercano.")
        
if __name__ == "__main__":
    vida_util_software()