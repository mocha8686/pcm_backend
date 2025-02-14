from rest_framework import serializers

from .models import Athlete, SocialAccount, Sport


class AthleteSerializer(serializers.HyperlinkedModelSerializer):
    sports = serializers.PrimaryKeyRelatedField(many=True, queryset=Sport.objects.all())
    social_accounts = serializers.PrimaryKeyRelatedField(
        many=True, queryset=SocialAccount.objects.all()
    )

    class Meta:
        model = Athlete
        fields = [
            "first_name",
            "last_name",
            "school",
            "class_of",
            "weight_lbs",
            "height_inches",
            "hometown",
            "interests",
            "summary",
            "sports",
            "social_accounts",
        ]
