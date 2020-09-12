from django.urls import path
from rest_framework import routers
from django.conf.urls import include
from .views import MoviewViewSet,RatingViewSet

router = routers.DefaultRouter()
router.register('movies', MoviewViewSet)
router.register('ratings', RatingViewSet)
urlpatterns = [
    path('', include(router.urls)),
]
