import flet as ft

def main(page: ft.Page):
    page.title = "Reproductor de Música"
    #diccionario
    canciones = [
        {"titulo": "Canción 1", "archivo": "https://suno.com/explore", "caratula": "perroBailon.jpg"},
        {"titulo": "Canción 2", "archivo": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", "caratula": "cover2.jpg"},
        {"titulo": "Canción 3", "archivo": "cancion3.mp3", "caratula": "cover3.jpg"},
    ]
    
    indice_actual = 0
    audio = ft.Audio(src=canciones[indice_actual]["archivo"], autoplay=False)
    
    # Elementos gráficos
    lista_canciones = ft.Column(
        [ft.Radio(value=i, label=song["titulo"]) for i, song in enumerate(canciones)],
        alignment=ft.MainAxisAlignment.START,
    )
    
    caratula = ft.Image(src=canciones[indice_actual]["caratula"], width=200, height=200)
    
    volumen_slider = ft.Slider(min=0, max=1, value=0.5, on_change=lambda e: setattr(audio, "volume", e.control.value))
    
    progreso_slider = ft.Slider(min=0, max=100, value=0)
    
    autoplay_checkbox = ft.Checkbox(label="Reproducción automática", value=False)
    
    # Funciones de control
    def play_song(e=None):
        audio.src = canciones[indice_actual]["archivo"]
        caratula.src = canciones[indice_actual]["caratula"]
        progreso_slider.value = 0
        audio.play()
        page.update()
    
    def next_song(e):
        nonlocal indice_actual
        indice_actual = (indice_actual + 1) % len(canciones)
        play_song()
    
    def prev_song(e):
        nonlocal indice_actual
        indice_actual = (indice_actual - 1) % len(canciones)
        play_song()
    
    # Botones de control
    botones = ft.Row([
        ft.IconButton(ft.icons.SKIP_PREVIOUS, on_click=prev_song),
        ft.IconButton(ft.icons.PLAY_ARROW, on_click=play_song),
        ft.IconButton(ft.icons.PAUSE, on_click=lambda e: audio.pause()),
        ft.IconButton(ft.icons.STOP, on_click=lambda e: audio.stop()),
        ft.IconButton(ft.icons.SKIP_NEXT, on_click=next_song),
    ])
    
    # Agregar elementos a la página
    page.add(
        caratula,
        lista_canciones,
        botones,
        volumen_slider,
        progreso_slider,
        autoplay_checkbox,
        audio
    )

ft.app(target=main, view=ft.WEB_BROWSER)