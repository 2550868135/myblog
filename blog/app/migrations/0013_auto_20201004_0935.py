# Generated by Django 2.1.2 on 2020-10-04 09:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0012_auto_20201004_0932'),
    ]

    operations = [
        migrations.AlterField(
            model_name='setting',
            name='email',
            field=models.CharField(blank=True, default='', max_length=255, null=True),
        ),
    ]
