from rest_framework import routers
from .api import TodosViewSet, TodoItemViewSet
from django.urls import path

from django.contrib import admin
from django.conf.urls import url

# Rest framework url dizi
from rest_framework.urlpatterns import format_suffix_patterns
# bizim yazdığımız views
from . import views

router = routers.DefaultRouter()
router.register('api/todos', TodosViewSet, 'todos')
router.register('api/todoItem', TodoItemViewSet, 'todoItem')

urlpatterns = [
    # complete function
    url(r'^api/complete/(?P<pk>[0-9]+)$', views.completed),
    # list items of the todo
    url(r'^api/todoItemsList/(?P<todoId>[0-9]+)$', views.todoItemsList),
    # list
    path("api/todoItemList/<int:todo_pk>/<int:item_pk>/", views.getItemOfTodo),
]

urlpatterns = format_suffix_patterns(urlpatterns)

urlpatterns += router.urls

for i in urlpatterns:
    print(i, "\n")
