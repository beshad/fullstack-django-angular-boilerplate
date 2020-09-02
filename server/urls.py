from django.contrib import admin
from django.urls import include, path
from server.things import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'things', views.ThingViewSet)

api_urlpatterns = [
    path('accounts/', include('rest_registration.api.urls'))
]



urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api/v1/', include(api_urlpatterns)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
