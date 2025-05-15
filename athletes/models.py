from django.db import models

# Create your models here.


class Athlete(models.Model):
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    tags = models.TextField("Tags (one per line, max 3)")
    position = models.CharField(max_length=64)
    image = models.ImageField(upload_to="athletes", blank=True)
    school = models.CharField(max_length=64)
    class_of = models.IntegerField()
    weight_lbs = models.FloatField("Weight (lbs)")
    height_inches = models.IntegerField("Height (in)")
    hometown = models.CharField(max_length=64)
    interests = models.TextField("Interests (one per line)")
    summary = models.TextField()

    def __str__(self) -> str:
        return f"{self.first_name} {self.last_name}"


class Sport(models.Model):
    athlete = models.ForeignKey(
        Athlete, related_name="sports", on_delete=models.CASCADE
    )
    icon = models.CharField(max_length=64)
    name = models.CharField(max_length=64)

    def __str__(self) -> str:
        return self.name


class SportStat(models.Model):
    sport = models.ForeignKey(
        Sport, related_name="stats", on_delete=models.CASCADE
    )
    header = models.CharField(max_length=32)
    body = models.TextField()

    def __str__(self) -> str:
        return self.header


class SocialAccount(models.Model):
    athlete = models.ForeignKey(
        Athlete, related_name="social_accounts", on_delete=models.CASCADE
    )
    social_name = models.CharField(max_length=32)
    handle = models.CharField(max_length=32)

    def __str__(self) -> str:
        return f"{self.social_name} ({self.handle})"

class Gallery(models.Model):
    athlete = models.ForeignKey(
        Athlete, related_name="galleries", on_delete=models.CASCADE
    )
    image = models.ImageField(upload_to="athletes", blank=True)
    alt = models.CharField(max_length=128, null=True)

    def __str__(self) -> str:
        return self.alt or self.image
