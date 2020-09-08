from django.contrib import admin
from django.urls import include, path
from server.things import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'things', views.ThingViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('server.authentication.urls')),
    path('', include(router.urls))
]
