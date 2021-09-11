from django.db import models


class Strat(models.Model):
    ATTACKERS = 'A'
    DEFENDERS = 'D'
    BOTH_TEAMS = 'B'

    BIND = 'BI'
    HAVEN = 'HA'
    SPLIT = 'SP'
    ASCENT = 'AS'
    ICEBOX = 'IC'
    BREEZE = 'BR'
    ALL_MAPS = 'AL'

    TEAMS = [
        (ATTACKERS, 'Attackers'),
        (DEFENDERS, 'Defenders'),
        (BOTH_TEAMS, 'Both Teams')
    ]

    MAPS = [
        (BIND, 'Bind'),
        (HAVEN, 'Haven'),
        (SPLIT, 'Split'),
        (ASCENT, 'Ascent'),
        (ICEBOX, 'Icebox'),
        (BREEZE, 'Breeze'),
        (ALL_MAPS, 'All Maps')
    ]

    title = models.CharField(max_length=255, unique=True)
    description = models.TextField()
    team = models.CharField(max_length=1, choices=TEAMS, default=BOTH_TEAMS)
    map_name = models.CharField(max_length=2, choices=MAPS, default=ALL_MAPS)

    def __str__(self):
        return self.title
