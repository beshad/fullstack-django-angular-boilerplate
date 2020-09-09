from django.contrib import admin
from django.urls import include, path
from server.things import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'things', views.ThingViewSet)

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/login', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('', include(router.urls))
]
