from django.contrib.admin.apps import AdminConfig


class PCMAdminConfig(AdminConfig):
    default_site = "pcm_backend.admin.PCMAdminSite"
