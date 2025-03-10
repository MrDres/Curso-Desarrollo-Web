#Usaremos:
# SQlite para almacenar las canciones
# Flask para servir los datos al frontend (flet).
# Flet con dimensiones optimizadas para movil
# El codigo en backend (flask + SQlite) y frontend (flet).

from flask import Flask, jsonify
#Ejecuta este codigo una vez para crear la base de datos y agregar canciones

import sqlite3

conn = sqlite3.connect("musica.db")
cursor = conn.cursor()

cursor.execute("""
               CREATE TABLE IF NOT EXISTS canciones (
                   id INTEGER PRIMARY KEY AUTOINCREMENT,
                   titulo TEXT,
                   archivo TEXT,
                   caratula TEXT
               )
               """)

cursor.executemany("INSERT INTO canciones (titulo, archivo, caratula) VALUES (?,?,?)",
                   [
                       ("cancion1", "cancion1.mp3", "cover1.jpg"),
                       ("cancion2", "cancion2.mp3", "cover2.jpg"),
                       ("cancion3", "cancion3.mp3", "cover3.jpg")
                   ])

conn.commit()
conn.cloes()