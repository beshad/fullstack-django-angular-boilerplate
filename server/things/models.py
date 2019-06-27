from django.db import models
from datetime import datetime


class Things(models.Model):
    username = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    interests = models.TextField(default="N/A")
    created_at = models.DateTimeField(
        default=datetime.now,
        blank=True
    )

    def __str__(self):
        return self.username

    class Meta:
        verbose_name_plural = "Things"
