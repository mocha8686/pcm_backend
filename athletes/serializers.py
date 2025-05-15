from rest_framework import serializers

from .models import Athlete, SocialAccount, Sport, SportStat, Gallery


class SportStatSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SportStat
        fields = ["id", "header", "body"]


class SportSerializer(serializers.HyperlinkedModelSerializer):
    stats = SportStatSerializer(many=True, read_only=True)

    class Meta:
        model = Sport
        fields = ["id", "name", "icon", "stats"]


class SocialAccountSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SocialAccount
        fields = ["id", "social_name", "handle"]


class GallerySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Gallery
        fields = ["image"]


class AthleteSerializer(serializers.HyperlinkedModelSerializer):
    sports = SportSerializer(many=True, read_only=True)
    social_accounts = SocialAccountSerializer(many=True, read_only=True)
    galleries = GallerySerializer(many=True, read_only=True)

    class Meta:
        model = Athlete
        fields = [
            "id",
            "first_name",
            "last_name",
            "tags",
            "position",
            "image",
            "school",
            "class_of",
            "weight_lbs",
            "height_inches",
            "hometown",
            "interests",
            "summary",
            "sports",
            "social_accounts",
            "galleries",
        ]
