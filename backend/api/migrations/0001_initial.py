# Generated by Django 3.2.7 on 2021-09-09 02:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Strat',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, unique=True)),
                ('content', models.TextField()),
                ('team', models.CharField(choices=[('A', 'Attackers'), ('D', 'Defenders'), ('B', 'Both Teams')], default='B', max_length=1)),
                ('map_name', models.CharField(choices=[('BI', 'Bind'), ('HA', 'Haven'), ('SP', 'Split'), ('AS', 'Ascent'), ('IC', 'Icebox'), ('BR', 'Breeze'), ('AL', 'All Maps')], default='AL', max_length=2)),
            ],
        ),
    ]
