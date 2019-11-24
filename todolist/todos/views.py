from django.shortcuts import render

# Create your views here.
# Htpp Status kodları için gerekli modül
from rest_framework import status
# Api_views decaretörü, GET-POST vb. istekleri kontrol eder.
from rest_framework.decorators import api_view
# Response : İstekleri istemciye geri gönderir.
from rest_framework.response import Response
# Sinnpet Modeli
from .models import Todos, TodoItem
# Serializer.py'deki class'ımız bir önceki makalede anlattım.
from .serializers import TodosSerializer, TodoItemSerializer


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
        todo = Todos.objects.all()
        serializer = TodosSerializer(todo, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def todoItemsList(request, todoId):
    """
    This is the todoItem all list
    """
    try:
        # Eğer gelen id veri tabanında var ise, değişkene depola
        todo = Todos.objects.get(pk=todoId)
        items = TodoItem.objects.filter(todos=todo)
    except Todos.DoesNotExist or TodoItem.DoesNotExist:
        # Bu ide sahip veri yok ise 404 http kodunu göster
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = TodoItemSerializer(items, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getItemOfTodo(request, **kwargs):
    """
    get item list
    :param request:
    :param kwargs:
    :return:
    """
    todo_pk = kwargs["todo_pk"]
    item_pk = kwargs["item_pk"]
    try:
        todo = Todos.objects.get(pk=todo_pk)
        item = TodoItem.objects.get(pk=item_pk, todos=todo)
    except Todos.DoesNotExist or TodoItem.DoesNotExist:
        # Bu ide sahip veri yok ise 404 http kodunu göster
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = TodoItemSerializer(item)
    return Response(serializer.data)

@api_view(['GET'])
def completedTodoItem(request, pk):
    """
    This is the completed process.
    """
    try:
        # Eğer gelen id veri tabanında var ise, değişkene depola
        todoItem = TodoItem.objects.get(pk=pk)
    except todoItem.DoesNotExist:
        # Bu ide sahip veri yok ise 404 http kodunu göster
        return Response(status=status.HTTP_404_NOT_FOUND)
    # Get isteği gelirse
    if request.method == 'GET':
        # Aranan id'deki veriyi depola
        serializer = TodosSerializer(todoItem)
        todoItem.completed = True
        todoItem.save(update_fields=['completed'])
        # json olarak yolla
        # return Response(status=status.HTTP_200_OK)
        todoItems = TodoItem.objects.filter(todos=todoItem.todos)
        serializer = TodoItemSerializer(todoItems, many=True)
        return Response(serializer.data)

