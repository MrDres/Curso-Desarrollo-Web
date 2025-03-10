from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')

def lista_usuarios():
    usuarios= [
        {"nombre": "Alicia", "edad":38},
        {"nombre": "Cris", "edad":48},
        {"nombre": "Lúa", "edad":4}
    ]    
    return render_template('usuarios.html', usuarios=usuarios)

if __name__=="__main__":
     app.run(debug=True)