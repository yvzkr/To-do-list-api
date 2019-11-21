from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Todos(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    owner = models.ForeignKey(User, related_name="todos", on_delete=models.CASCADE, null=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class TodoItem(models.Model):
    name = models.CharField(max_length=100)
    content = models.TextField()
    deadline_date = models.DateField(auto_now_add=True)
    todos = models.ForeignKey(Todos, related_name="todoItem", on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['deadline_date']
