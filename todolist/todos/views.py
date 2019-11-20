from django.shortcuts import render

# Create your views here.

3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
# Htpp Status kodları için gerekli modül
from rest_framework import status
# Api_views decaretörü, GET-POST vb. istekleri kontrol eder.
from rest_framework.decorators import api_view
# Response : İstekleri istemciye geri gönderir.
from rest_framework.response import Response
# Sinnpet Modeli
from .models import Todos
# Serializer.py'deki class'ımız bir önceki makalede anlattım.
from .serializers import TodosSerializer


@api_view(['GET'])
def completed(request, pk):
    """
    This is the completed process.
    """
    try:
        # Eğer gelen id veri tabanında var ise, değişkene depola
        todo = Todos.objects.get(pk=pk)
    except Todos.DoesNotExist:
        # Bu ide sahip veri yok ise 404 http kodunu göster
        return Response(status=status.HTTP_404_NOT_FOUND)
    # Get isteği gelirse
    if request.method == 'GET':
        # Aranan id'deki veriyi depola
        serializer = TodosSerializer(todo)
        todo.completed = True
        todo.save(update_fields=['completed'])
        # json olarak yolla
        # return Response(status=status.HTTP_200_OK)
        return Response(serializer.data)
