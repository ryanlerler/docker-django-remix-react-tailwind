"""Models for the team app."""

from django.db import models
from datetime import datetime
from dateutil.relativedelta import relativedelta

class Member(models.Model):
    """
    A member of the team.

    :name: String representing the name of the member.
    :image: Filename of the image of the member.
    :date_joined: The date when the member joined the team.
    :bio: String representing a mini-bio of the member.

    """
    name = models.CharField(max_length=255)
    image = models.ImageField(null=True, blank=True)
    date_joined = models.DateField(null=True, blank=True)
    bio = models.TextField(null=True, blank=True)

    def __str__(self):  # pragma: nocover
        # too trivial to test
        return self.name

    def get_member_since_str(self):

        # Get the difference in years, months, and days between today's date and each member's join date
        delta = relativedelta(datetime.today(), self.date_joined)

        # Helper function for pluralization if the number of years/ months/ days is a plural
        def pluralize(value, singular, plural):
            return f"{value} {singular if value == 1 else plural}"

        # Format the output as a string
        years_str = pluralize(delta.years, 'year', 'years')
        months_str = pluralize(delta.months, 'month', 'months')
        days_str = pluralize(delta.days, 'day', 'days')

        return f"{years_str}, {months_str}, {days_str}"