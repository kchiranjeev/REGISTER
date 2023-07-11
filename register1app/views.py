from django.shortcuts import redirect, render
from django.http import JsonResponse
from .models import Users

# def register(request):
#     if request.method == 'POST':
#         username = request.POST.get('username')
#         email = request.POST.get('email')
#         password = request.POST.get('password')

#         user = User(username=username, email=email, password=password)
#         user.save()

#         return JsonResponse({'message': 'Registration successful'})

#     return JsonResponse({'message': 'MAHi'})
 

#  # views.py

# from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.shortcuts import render
def register(request):
    if request.method == 'POST':
        # Extract form data from the POST request
        Firstname = request.POST.get('Firstname')
        Lastname = request.POST.get('Lasttname')
        Gender=request.POST.get('Gender')
        Email = request.POST.get('email')
        MobileNumber=request.POST.get('MobailNumber')
        password = request.POST.get('password')

        # Process the form data (e.g., save it to the database)
        # You can implement the registration logic here

        # Redirect to a success page or perform any other desired action
        return HttpResponse('registration_success')

    else:
        return render(request,'register.html')

