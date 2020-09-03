from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from knox import views as knox_views

from .views import RegisterAPI
from .views import LoginAPI
from .views import ChangePasswordView


urlpatterns = [
    path('register/', RegisterAPI.as_view(), name='register'),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('login/', LoginAPI.as_view(), name='login'),
    path('logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
    path('change-password/', ChangePasswordView.as_view(), name='change-password'),
    path('password_reset/', include('django_rest_passwordreset.urls', namespace='password_reset')),
]
