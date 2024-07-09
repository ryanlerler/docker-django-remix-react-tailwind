"""Tests for the models of the team app."""
import pytest

from dummyproject.utils import mixer

pytestmark = pytest.mark.django_db

class TestMember:
    def test_model(self):
        obj = mixer.blend('team.Member')
        assert obj.pk, (
            'Should create an instance of Member'
        )
