# from django.contrib.auth.models import Things
from rest_framework import serializers
from .models import Things

class ThingsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Things
        fields = ('id', 'username', 'email')