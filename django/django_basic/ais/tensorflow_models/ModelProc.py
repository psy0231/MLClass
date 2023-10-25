import os
from django.shortcuts import render

import numpy as np
from keras.models import load_model

class Recommend_pinterest: # 관심 분야 추천
    # 추천 폼
    def form(self, request):
        # 실제 파일 위치: /django_basic/ais/templates/recommend_form.html
        # http://127.0.0.1:8000/ais/recommend/
        return render(request, 'recommend_form.html')  # /ais/templates 폴더 기준


