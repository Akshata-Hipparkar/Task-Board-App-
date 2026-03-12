from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from home import views

# Router - Only point to the ViewSet now located in views.py
router = routers.DefaultRouter()
router.register(r'tasks', views.TaskViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),

    # UI routes (Your working frontend logic)
    path('', views.index, name='home'),
    path('add/', views.add_task),
    path('toggle/<int:id>/', views.toggle_task),
    path('delete/<int:id>/', views.delete_task),

    # API routes (Professional REST structure)
    path('api/', include(router.urls)),
]