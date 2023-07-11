from django.db import models


class Users(models.Model):
    Firstname = models.CharField(max_length=25,default=1)
    Lastname=models.CharField(max_length=25,default=1)
    gender=models.CharField(max_length=10,default=1,)
    email = models.EmailField()
    mobilenumber=models.BigIntegerField(default=1)
    password = models.CharField(max_length=25,default=1)


n=models.CharField
# Create your models here.
