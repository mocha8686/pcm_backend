from django.views.generic import DetailView
from rest_framework import permissions, viewsets

from .models import Athlete

from .serializers import AthleteSerializer

# Create your views here.


class AthleteViewSet(viewsets.ModelViewSet):
    queryset = Athlete.objects.all()
    serializer_class = AthleteSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class ArticleDetailView(DetailView):
    model = Athlete
