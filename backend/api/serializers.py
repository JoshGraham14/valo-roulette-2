from rest_framework import serializers

from .models import Strat


class StratSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Strat
        fields = '__all__'
