from django.contrib import admin
from .models import Strat


class StratAdmin(admin.ModelAdmin):
    list_display = ('title', 'map_name', 'team')
    list_filter = ('map_name', 'team')
    search_fields = ['title', 'map_name', 'team']


admin.site.register(Strat, StratAdmin)
