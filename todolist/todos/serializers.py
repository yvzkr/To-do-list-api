from rest_framework import serializers
from todos.models import Todos


#Todos serializer

class TodosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todos
        fields = '__all__'