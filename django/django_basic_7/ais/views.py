from django.shortcuts import render
# ais.AImodels 패키지의 Models.py 모듈의 pinterest 함수 사용
from ais.AImodels.TSmodels import pinterest

def recommend_form(request):
    # 실제 파일 위치: /django_basic/basic/templates/recommend_form.html
    # http://127.0.0.1:8000/ais/recommend_form/

    filenames = [i+1 for i in range(49)] # 1 ~ 49

    # template으로 데이터 전달은 dictionary 형태로해야함.
    return render(request, 'recommend_form.html', context={"filenames": filenames})

def recommend_proc(request):
    # 실제 파일 위치: /django_basic/basic/templates/recommend_proc.html
    # http://127.0.0.1:8000/ais/recommend_proc/

    recommend_data = request.POST['recommend_data']

    recommend_result = pinterest(recommend_data) # 딥러닝 모델 사용

    # template으로 데이터 전달은 dictionary 형태로해야함.
    # return render(request, 'recommend_proc.html', context={"msg": "추천 처리됨"})
    return render(request, 'recommend_proc.html', context={"recommend_result": recommend_result})

