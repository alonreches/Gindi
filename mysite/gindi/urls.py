from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^labels$', views.image_labels),
    url(r'^color$', views.image_color),
]
