"""config URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

import basic.views
import ais.views

urlpatterns = [
    # 실제 파일 위치: /django_basic/basic/templates/title.html
    # http://127.0.0.1:8000/basic/title/
    path("basic/title/", basic.views.title),  # URL 이름, basic package의 views.py안의 실행할 함수명, "/basic/title/: X"
    # 실제 파일 위치: /django_basic/basic/templates/list.html
    # http://127.0.0.1:8000/basic/list/
    path("basic/list/", basic.views.list),
    # 실제 파일 위치: /django_basic/basic/templates/gallery.html
    # http://127.0.0.1:8000/basic/gallery/

    path("basic/gallery/", basic.views.gallery),
    # 실제 파일 위치: /django_basic/basic/templates/js01.html
    # http://127.0.0.1:8000/basic/js01/
    path("basic/js01/", basic.views.js01), # basic 패키지의 views 모듈의 js01 함수 호출

    # 실제 파일 위치: /django_basic/basic/templates/jsinclude.html
    # http://127.0.0.1:8000/basic/jsinclude/
    path("basic/jsinclude/", basic.views.jsinclude),

    # 실제 파일 위치: /django_basic/basic/templates/csstest.html
    # http://127.0.0.1:8000/basic/csstest/
    path("basic/csstest/", basic.views.csstest),

    # 실제 파일 위치: /django_basic/ais/templates/recommend_form.html
    # http://127.0.0.1:8000/ais/recommend_form/
    path("ais/recommend_form/", ais.views.recommend_form),

    # 실제 파일 위치: /django_basic/ais/templates/recommend_proc.html
    # http://127.0.0.1:8000/ais/recommend_proc/
    path("ais/recommend_proc/", ais.views.recommend_proc),

]

