from django.contrib import admin
from django.urls import path, include
from rest_framework import routers, serializers, viewsets
from home.models import Task
from home import views

# Serializer
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'

# API ViewSet
class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

# Router
router = routers.DefaultRouter()
router.register(r'tasks', TaskViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),

    # UI routes
    path('', views.index, name='home'),
    path('add/', views.add_task),
    path('toggle/<int:id>/', views.toggle_task),
    path('delete/<int:id>/', views.delete_task),

    # API routes
    path('api/', include(router.urls)),
]