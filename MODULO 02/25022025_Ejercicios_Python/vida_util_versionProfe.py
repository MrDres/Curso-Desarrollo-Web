# Definir la función principal del programa
def vida_util_software():
    # Mensaje al usuario de bienvenida.
    print("Bienvenido al asistente de vida útil de Software")
    # Explicamos el propósito del programa
    print("Este programa te ayudará a estimar la vida útil de un software basado en varios factores")

    # Función para validar la entrada del usuario
    def validar_respuesta(pregunta):
        while True:
            respuesta = input(pregunta).lower()
            if respuesta in ["sí", "si", "no"]:
                return respuesta
            else:
                print("Por favor, responde con 'sí' o 'no'.")

    # Preguntas al usuario para evaluar los factores que influyen en la vida útil del software
    # Soporte técnico
    soporte_tecnico = validar_respuesta("¿El software sigue recibiendo soporte técnico? (sí/no): ")

    # Actualizaciones
    actualizaciones = validar_respuesta("¿El software sigue recibiendo actualizaciones? (sí/no): ")

    # Compatibilidad
    compatibilidad = validar_respuesta("¿El software es compatible con los sistemas operativos actuales? (sí/no): ")

    # Demanda
    demanda = validar_respuesta("¿El software sigue siendo demandado por los usuarios? (sí/no): ")

    # Evaluar las respuestas del usuario
    # Iniciamos la variable que almacena el puntaje de vida útil
    vida_util = 0

    # Si el software recibe soporte técnico, se suma 2 al puntaje; de lo contrario se resta 1
    if soporte_tecnico in ["sí", "si"]:
        vida_util += 2
    else:
        vida_util -= 1

    # Si el software recibe actualizaciones, se suma 2 al puntaje; de lo contrario se resta 1
    if actualizaciones in ["sí", "si"]:
        vida_util += 2
    else:
        vida_util -= 1

    # Si el software es compatible con los sistemas operativos actuales, se suma 2 al puntaje; de lo contrario se resta 1
    if compatibilidad in ["sí", "si"]:
        vida_util += 2
    else:
        vida_util -= 1

    # Si el software sigue siendo demandado por los usuarios, se suma 2 al puntaje; de lo contrario se resta 1
    if demanda in ["sí", "si"]:
        vida_util += 1
    else:
        vida_util -= 1

    # Resultado de la evaluación de la vida útil del software
    # Si el puntaje es 5 o mayor, se considera que el software tiene una vida útil larga
    if vida_util >= 5:
        print("El software tiene una vida útil larga. Es probable que siga siendo útil por varios años más.")
    # Si el puntaje es 3 o 4, se considera que el software tiene una vida útil moderada
    elif vida_util >= 3:
        print("El software tiene una vida útil moderada. Es posible que siga siendo útil por algún tiempo más.")
    # Si el puntaje es menor de 3
    else:
        print("El software tiene una vida útil corta. Es probable que deje de ser útil en un futuro cercano.")

if __name__ == "__main__":
    vida_util_software()