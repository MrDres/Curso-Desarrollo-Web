#Crear una api basica que devuelva una lista de usuarios en formato Json
from flask import Flask, jsonify

app= Flask(__name__)

usuarios= [
    {"id": 1 , "nombre":"Paco", "edad": 40},
    {"id": 2 , "nombre":"Pepe", "edad": 20},
    {"id": 3 , "nombre":"Lucas", "edad": 97},
    {"id": 4 , "nombre":"Marta", "edad": 23},
    {"id": 5 , "nombre":"Leonardo", "edad": 10}
    ]#lista de usuarios diccionario

@app.route('/usuarios',methods=['GET'])#definimos una ruta para obtener los usuarios
def obtener_usuario():    
    return jsonify(usuarios)#convertimos la lista en formato json y la devolvemos

if __name__=='__main__':
    app.run(debug=True)