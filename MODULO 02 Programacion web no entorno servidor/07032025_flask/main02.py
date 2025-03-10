from flask import Flask

app = Flask(__name__) #Creamos la instancia principal de Flask

@app.route('/') #Definimos la ruta principal
def home():
    return "¡Hola, Flask!"#Devolvemos un mensaje en el navegador

if __name__ == '__main__': #Verificamos si el script se ejecuta correctamente
    app.run(debug=True)#iniciamos el servidor en modo depuracion