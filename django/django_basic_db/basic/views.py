from django.shortcuts import render

# Create your views here.

def title(request):
    # 실제 파일 위치: /django_basic/basic/templates/title.html
    # http://127.0.0.1:8000/basic/title/
    return render(request, 'title.html') # /basic/templates 폴더 기준

def list(request):
    # 실제 파일 위치: /django_basic/basic/templates/list.html
    # http://127.0.0.1:8000/basic/list/
    return render(request, 'list.html') # /basic/templates 폴더 기준

def gallery(request):
    # 실제 파일 위치: /django_basic/basic/templates/gallery.html
    # http://127.0.0.1:8000/basic/gallery/
    return render(request, 'gallery.html') # /basic/templates 폴더 기준

def js01(request):
    # 실제 파일 위치: /django_basic/basic/templates/js01.html
    # http://127.0.0.1:8000/basic/js01/
    return render(request, 'js01.html')

def jsinclude(request):
    # 실제 파일 위치: /django_basic/basic/templates/jsinclude.html
    # http://127.0.0.1:8000/basic/jsinclude/
    return render(request, 'jsinclude.html')

def csstest(request):
    # 실제 파일 위치: /django_basic/basic/templates/csstest.html
    # http://127.0.0.1:8000/basic/csstest/
    return render(request, 'csstest.html')
