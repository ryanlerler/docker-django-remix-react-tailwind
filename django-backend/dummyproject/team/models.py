"""Models for the team app."""

from django.db import models

class Member(models.Model):
    """
    A member of the team.

    :name: String representing the name of the member.

    """
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name