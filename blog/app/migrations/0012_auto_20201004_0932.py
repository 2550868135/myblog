# Generated by Django 2.1.2 on 2020-10-04 09:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0011_auto_20201004_0927'),
    ]

    operations = [
        migrations.AlterField(
            model_name='setting',
            name='age',
            field=models.IntegerField(default=0),
        ),
    ]
