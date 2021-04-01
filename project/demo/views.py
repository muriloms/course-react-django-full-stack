from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
from rest_framework import viewsets

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from .serializers import BookSerializer
from .models import Book


class Another(View):

    books = Book.objects.all()
    output = ''

    for book in books:
        output += f"We have {book.title} books in DB<br>"

    def get(self, request):
        return HttpResponse(self.output)

def first(request):

    books = Book.objects.all()

    return render(request, 'first_temp.html', {'books': books})


class BookViewSet(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()
    authentication_classes = (TokenAuthentication)
    permission_classes = (IsAuthenticated)

