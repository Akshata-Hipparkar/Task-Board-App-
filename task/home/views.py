from django.shortcuts import render, redirect
from .models import Task
from rest_framework import viewsets
from .serializers import TaskSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


def index(request):
    tasks = Task.objects.all()

    completed = tasks.filter(completed=True).count()
    pending = tasks.filter(completed=False).count()

    context = {
        "tasks": tasks,
        "total": tasks.count(),
        "completed": completed,
        "pending": pending
    }

    return render(request, "index.html", context)


def add_task(request):
    if request.method == "POST":
        title = request.POST.get("title")
        priority = request.POST.get("priority")

        Task.objects.create(
            title=title,
            priority=priority,
            completed=False
        )

    return redirect("home")


def toggle_task(request, id):
    task = Task.objects.get(id=id)
    task.completed = not task.completed
    task.save()

    return redirect("home")


def delete_task(request, id):
    task = Task.objects.get(id=id)
    task.delete()

    return redirect("home")