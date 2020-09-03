from django.contrib import admin
from django.urls import include, path
from server.things import views
from rest_framework import routers
from server.accounts.views import RegisterAPI

from knox import views as knox_views
from server.accounts.views import LoginAPI

router = routers.DefaultRouter()
router.register(r'things', views.ThingViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api/register/', RegisterAPI.as_view(), name='register'),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/login/', LoginAPI.as_view(), name='login'),
    path('api/logout/', knox_views.LogoutView.as_view(), name='logout'),
    path('api/logoutall/', knox_views.LogoutAllView.as_view(), name='logoutall'),
]
