from django.shortcuts import render
from .models import Things
from rest_framework import viewsets
from .serializers import ThingsSerializer

class ThingViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows things to be viewed or edited.
    """
    queryset = Things.objects.all()
    serializer_class = ThingsSerializer