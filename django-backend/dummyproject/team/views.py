"""Views for the team app."""
from django.http import JsonResponse

from . import models


def team_list_view(request):
    qs = models.Member.objects.all()
    data = list(qs.values())
    return JsonResponse({'data': data})