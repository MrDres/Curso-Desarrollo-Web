import flet as ft

def main(page:ft.Page):
    page.title ="Formulario Básico"
    page.window.width =500
    page.window.height =400
    page.window.max_width=1000
    page.window.max_height=800
    page.bgcolor = ft.Colors.BLUE_100
    nombre = ft.TextField(label="Nombre")
    email = ft.TextField(label="Correo Electrónico", keyboard_type=ft.KeyboardType.EMAIL)
    mensaje = ft.Text("")
    mensaje.size= 30
    
    def enviar_formulario(e):
        if nombre.value and email.value:
            mensaje.value = f"Datos enviados:\n Nombre: {nombre.value}\n Email: {email.value}"
            mensaje.color="green"
            
            page.update()
        else:
            mensaje.value = "Por favor completa los campos"
            mensaje.color = "red"            
            page.update()

    btn_enviar = ft.ElevatedButton("Enviar", on_click=enviar_formulario)
    
    btn_abrir = ft.ElevatedButton("Awesome", on_click=abrirImagen)
    
    def abrirImagen():
        k
        
    page.add(nombre,email,btn_enviar,mensaje, btn_abrir)

    
    # def abrir_modal(e):
    #     modal.open = True
    #     page.update()
    
    # modal=ft.Dialog(
    #     title=ft.Text("Imagen Modal"),
    #     content=ft.Image(src="perroBailon.gif", width=150, height=150),
    #     actions=[
    #         ft.TextButton("Cerrar", on_click=lambda e: cerrar_modal())
    #     ],
    #     open=False    
    # )
    
    # def cerrar_modal():
    #     modal.open = False
    #     page.update()

    # btn_abrir_modal = ft.ElevatedButton("Abrir Modal", on_click=abrir_modal)
ft.app(target=main, view=ft.WEB_BROWSER)
