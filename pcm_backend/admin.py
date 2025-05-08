from django.contrib import admin

class PCMAdminSite(admin.AdminSite):
    site_header = "PCM Admin Dashboard"
    site_title = "PCM admin"
    site_url = None
