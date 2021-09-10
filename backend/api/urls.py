from django.urls import path

from rest_framework.urlpatterns import format_suffix_patterns

from . import views

urlpatterns = [
    path('strats/', views.StratList.as_view(), name='strat-list'),
    path('strats/<int:pk>/', views.StratDetail.as_view(), name='strat-detail')
]

urlpatterns = format_suffix_patterns(urlpatterns)
