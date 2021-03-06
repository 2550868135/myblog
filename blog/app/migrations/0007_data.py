# Generated by Django 2.1.2 on 2020-08-09 16:09

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('app', '0006_auto_20200809_1601'),
    ]

    operations = [
        migrations.CreateModel(
            name='Data',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data_id', models.CharField(db_index=True, max_length=50, unique=True)),
                ('describe', models.TextField(default='')),
                ('file_url', models.CharField(default='', max_length=500)),
                ('last_update', models.DateTimeField(auto_now=True)),
                ('create_time', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='datas', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
