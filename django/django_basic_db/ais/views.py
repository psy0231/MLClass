from django.shortcuts import render
# ais.AImodels 패키지의 Models.py 모듈의 pinterest 함수 사용
from ais.AImodels.TSmodels import pinterest

def recommend_form(request):
    # 실제 파일 위치: /django_basic/basic/templates/recommend_form.html
    # http://localhost:8000/ais/recommend_form?memberno=1

    # Spring Boot -> <a href="http://localhost:8000/ais/recommend_form?memberno=1">추천받기</a> -> Django
    memberno = request.GET['memberno'] 

    filenames = [i+1 for i in range(25)] # 1 ~ 25

    # template으로 데이터 전달은 dictionary 형태로해야함.
    return render(request, 'recommend_form.html', context={"memberno": memberno, "filenames": filenames})

def recommend_proc(request):
    # 실제 파일 위치: /django_basic/basic/templates/recommend_proc.html
    # http://127.0.0.1:8000/ais/recommend_proc/

    recommend_data = request.POST['recommend_data']
    memberno = request.POST['memberno']

    recommend_result = pinterest(memberno, recommend_data) # 딥러닝 모델 사용

    # template으로 데이터 전달은 dictionary 형태로해야함.
    # return render(request, 'recommend_proc.html', context={"msg": "추천 처리됨"})
    return render(request, 'recommend_proc.html', context={"memberno": memberno, "recommend_result": recommend_result})

