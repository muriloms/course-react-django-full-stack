from rest_framework import serializers
from .models import Book,BookNumber, Character

class BookNumberSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookNumber
        fields = ['id','isbn_10', 'isbn_13']

class BookCharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Character
        fields = ['id','name']

class BookSerializer(serializers.ModelSerializer):
    number = BookNumberSerializer(many=False)
    character = BookCharacterSerializer(many=True)

    class Meta:
        model = Book
        fields = ['id','title', 'description','price','pulished','is_published','number','character']