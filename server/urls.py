from django.contrib import admin
from django.urls import include, path
from server.things import views
from rest_framework import routers
from server.accounts.views import RegisterAPI

router = routers.DefaultRouter()
router.register(r'things', views.ThingViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api/register/', RegisterAPI.as_view(), name='register'),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
