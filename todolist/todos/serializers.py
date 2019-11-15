from rest_framework import serializers
from todos.models import Todos
from todos.models import TodoItem


#Todos serializer

class TodosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todos
        fields = '__all__'


class TodoItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = TodoItem
        fields = '__all__'