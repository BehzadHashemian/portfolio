from django.db import models

# Create your models here.
from django.db import models

class Skill(models.Model):
    CATEGORY_CHOICES = [
        ("frontend", "Front-End Development"),
        ("databases", "Database Management"),
        ("cloud", "Cloud & Container Technologies"),
        ("mobile", "Mobile Development"),
        ("python_ml", "Machine Learning"),
        ("backend" ,  "Back-End Development")
    ]
    
    name = models.CharField(max_length=100)
    level = models.IntegerField()
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)

    def __str__(self):
        return self.name

class Project(models.Model):
    name = models.CharField(max_length=255)
    img = models.ImageField(upload_to='projects_images/')
    desc = models.TextField() 
    loc = models.CharField(max_length=255)
    
    def __str__(self):
        return self.name