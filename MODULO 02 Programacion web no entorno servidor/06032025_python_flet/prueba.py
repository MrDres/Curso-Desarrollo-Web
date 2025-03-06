import flet as ft

def main(page:ft.Page):
    page.title = "Mi primer flet !"
    page.add(ft.Text("Buenos días people"))
    page.add(ft.Button("Botoncito", color="red"))
ft.app(target=main)