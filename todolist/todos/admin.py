from django.contrib import admin

# Register your models here.


from .models import Todos, TodoItem
admin.site.register(Todos)
admin.site.register(TodoItem)
