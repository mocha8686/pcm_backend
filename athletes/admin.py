from django.contrib import admin
from django.http.request import HttpRequest

from athletes.models import Athlete, Gallery, SocialAccount, Sport, SportStat

# Register your models here.


class SportInline(admin.TabularInline):
    model = Sport
    extra = 1
    show_change_link = True


class SportStatInline(admin.StackedInline):
    model = SportStat
    extra = 1


class SocialAccountInline(admin.TabularInline):
    model = SocialAccount
    extra = 1

class GalleryInline(admin.StackedInline):
    model = Gallery
    verbose_name = "Gallery Image"
    extra = 1


class AthleteAdmin(admin.ModelAdmin):
    fieldsets = [
        (
            "Bio",
            {
                "fields": [
                    "first_name",
                    "last_name",
                    "tags",
                    "position",
                    "weight_lbs",
                    "height_inches",
                    "image",
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
    inlines = [SportInline, SocialAccountInline, GalleryInline]


class SportAdmin(admin.ModelAdmin):
    model = SportStat
    fields = ["athlete", "name"]
    inlines = [SportStatInline]

    def has_module_permission(self, request: HttpRequest) -> bool:
        _ = request
        return False


admin.site.register(Athlete, AthleteAdmin)
admin.site.register(Sport, SportAdmin)
