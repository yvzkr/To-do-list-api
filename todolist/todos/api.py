from .models import Todos, TodoItem
from rest_framework import viewsets, permissions
from .serializers import TodosSerializer
from .serializers import TodoItemSerializer


# Todos Viewset

class TodosViewSet(viewsets.ModelViewSet):
    serializer_class = TodosSerializer

    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = TodosSerializer

    def get_queryset(self):
        return self.request.user.todos.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)




class TodoItemViewSet(viewsets.ModelViewSet):
    # queryset = TodoItem.objects.all()
    serializer_class = TodoItemSerializer

    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = TodoItemSerializer

    def get_queryset(self):
        return TodoItem.objects.all()
