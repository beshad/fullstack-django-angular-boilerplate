from django.shortcuts import render
from .models import Things
from rest_framework import viewsets
from .serializers import ThingsSerializer, ThingsFilteredSerializer
from rest_framework.response import Response 

class ThingViewSet(viewsets.ModelViewSet):

    queryset = Things.objects.all()
    serializer_class = ThingsSerializer

    def list(self, request,*args, **kwargs):
        things = Things.objects.all()
        serializer = ThingsFilteredSerializer(things, many=True)
        return Response (serializer.data)