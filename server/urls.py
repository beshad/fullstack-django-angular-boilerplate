from django.contrib import admin
from django.urls import include, path
from server.things import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'things', views.ThingViewSet)

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

api_urlpatterns = [
    path('accounts/', include('rest_registration.api.urls')),
]

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include(api_urlpatterns)),
    path('api/auth/login', TokenObtainPairView.as_view(), name='login'),
    path('', include(router.urls))
]
