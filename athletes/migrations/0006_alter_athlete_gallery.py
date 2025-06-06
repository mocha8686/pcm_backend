# Generated by Django 5.1.5 on 2025-04-30 03:14

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('athletes', '0005_athlete_gallery_athlete_image_gallery'),
    ]

    operations = [
        migrations.AlterField(
            model_name='athlete',
            name='gallery',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='athletes', to='athletes.gallery'),
        ),
    ]
