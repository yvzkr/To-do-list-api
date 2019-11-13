from todos.models import Todos
from rest_framework import viewsets, permissions
from .serializers import TodosSerializer

#Todos Viewset

class TodosViewSet(viewsets.ModelViewSet):
    queryset = Todos.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = TodosSerializer