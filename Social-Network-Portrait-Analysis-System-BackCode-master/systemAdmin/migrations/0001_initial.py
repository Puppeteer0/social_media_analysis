# Generated by Django 2.2 on 2021-04-14 07:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('user_id', models.CharField(max_length=64, unique=True)),
                ('user_name', models.CharField(max_length=64)),
                ('password', models.CharField(max_length=256)),
                ('is_admin', models.BooleanField(default=False)),
            ],
            options={
                'db_table': 'User',
            },
        ),
    ]
