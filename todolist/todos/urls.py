from rest_framework import routers
from .api import TodosViewSet, TodoItemViewSet


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
]

urlpatterns = format_suffix_patterns(urlpatterns)



urlpatterns += router.urls


for i in urlpatterns:
    print(i, "\n")