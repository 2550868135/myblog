# Generated by Django 2.1.2 on 2020-08-03 16:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_picture'),
    ]

    operations = [
        migrations.AddField(
            model_name='picture',
            name='index',
            field=models.IntegerField(db_index=True, default=0),
            preserve_default=False,
        ),
    ]