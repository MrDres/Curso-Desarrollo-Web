import flet as ft

def main(page:ft.Page):
    page.title = "Ejercicio 4 Reproductor de Música"
    imagenes= ["https://picsum.photos/100/100","https://picsum.photos/100/100","https://picsum.photos/100/100","https://picsum.photos/100/100"]
    
    canciones= ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"]
    
    contador=0
    img = ft.Image(src=f"{imagenes[contador]}",width=100, height=100,fit=ft.ImageFit.CONTAIN) 
    print(img)   
    audio = ft.Audio(src=f"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",autoplay=False,)
    
    
    
    
    page.overlay.append(audio)

    def play_music(e):
        audio.play()
        page.update()

    def pause_music(e):
        audio.pause()
        page.update()

    def stop_music(e):
        audio.pause()
        audio.seek(0)
        page.update
        
    def next_song(e):        
        nonlocal contador
        contador=contador +1 
        print(contador) 
        audio.pause() 
        audio.src=canciones[contador]
        # audio = ft.Audio(src=f"{canciones[contador]}",autoplay=False,)            
        page.update()
        audio.play()
        
    
    def previous_song(e):
        nonlocal contador
        contador= contador -1
        print(contador)
        audio.play
        page.update()
        
    btn_play = ft.ElevatedButton("Reproducir", on_click=play_music)
    btn_pause = ft.ElevatedButton("Pausar", on_click=pause_music)
    btn_stop = ft.ElevatedButton("Stop", on_click=stop_music)
    btn_next = ft.ElevatedButton("Siguiente Temazo", on_click=next_song)
    btn_previous = ft.ElevatedButton("Anterior Temazo", on_click=previous_song)
    botones = ft.Row(btn_previous, btn_pause, btn_play, btn_stop, btn_next) 
    page.add(img,botones)

ft.app(target=main)