from django.shortcuts import render

from .models import Strat
from .serializers import StratSerializer

from rest_framework import generics


class StratList(generics.ListCreateAPIView):
    """List all strats"""
    queryset = Strat.objects.all()
    serializer_class = StratSerializer


class StratDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Strat.objects.all()
    serializer_class = StratSerializer
