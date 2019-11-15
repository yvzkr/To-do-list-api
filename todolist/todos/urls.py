from rest_framework import routers
from .api import TodosViewSet, TodoItemViewSet

router = routers.DefaultRouter()
router.register('api/todos', TodosViewSet, 'todos')
router.register('api/todoItem', TodoItemViewSet, 'todoItem')

urlpatterns = router.urls