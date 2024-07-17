"""Tests for the models of the team app."""
import pytest
from dummyproject.utils import mixer
from datetime import datetime
from dateutil.relativedelta import relativedelta

pytestmark = pytest.mark.django_db

class TestMember:
    def test_model(self):
        obj = mixer.blend('team.Member')
        assert obj.pk, (
            'Should create an instance of Member'
        )

    def test_get_member_since_str(self):
        today = datetime.today()
        
        # Case 1: Member joined 1 year, 2 months, 3 days ago
        date_joined = today - relativedelta(years=1, months=2, days=3)
        member = mixer.blend('team.Member', date_joined=date_joined)
        result = member.get_member_since_str()
        expected = '1 year, 2 months, 3 days'
        assert result == expected, f'Expected "{expected}", but got "{result}"'

        # Case 2: Member joined 0 years, 1 month, 1 day ago
        date_joined = today - relativedelta(months=1, days=1)
        member = mixer.blend('team.Member', date_joined=date_joined)
        result = member.get_member_since_str()
        expected = '0 years, 1 month, 1 day'
        assert result == expected, f'Expected "{expected}", but got "{result}"'

        # Case 3: Member joined 2 years, 0 months, 0 days ago
        date_joined = today - relativedelta(years=2)
        member = mixer.blend('team.Member', date_joined=date_joined)
        result = member.get_member_since_str()
        expected = '2 years, 0 months, 0 days'
        assert result == expected, f'Expected "{expected}", but got "{result}"'

        # Case 4: Member joined today (0 years, 0 months, 0 days ago)
        date_joined = today
        member = mixer.blend('team.Member', date_joined=date_joined)
        result = member.get_member_since_str()
        expected = '0 years, 0 months, 0 days'
        assert result == expected, f'Expected "{expected}", but got "{result}"'
