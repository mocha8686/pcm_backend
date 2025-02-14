from django.contrib import admin

from athletes.models import Athlete, SocialAccount, Sport

# Register your models here.


class SportInline(admin.TabularInline):  # TODO: nested inlines
    model = Sport
    extra = 1


class SocialAccountInline(admin.TabularInline):
    model = SocialAccount
    extra = 1


class AthleteAdmin(admin.ModelAdmin):
    fieldsets = [
        (
            "Bio",
            {
                "fields": [
                    "first_name",
                    "last_name",
                    "weight_lbs",
                    "height_inches",
                ]
            },
        ),
        (
            "Personal info",
            {
                "fields": [
                    "school",
                    "class_of",
                    "hometown",
                    "interests",
                ]
            },
        ),
        (None, {"fields": ["summary"]}),
    ]
    inlines = [SportInline, SocialAccountInline]


admin.site.register(Athlete, AthleteAdmin)
