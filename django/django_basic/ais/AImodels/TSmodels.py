import os

# import cv2
import numpy as np
from tensorflow.keras.models import load_model

def pinterest(data):
    data = np.array(data.split(','), dtype=int)
    print('-> data: ', data)

    data = np.array([data])
    print('-> data: ', data)

    path = os.path.dirname(os.path.abspath(__file__))
    print('-> path:', path) # -> path: C:\kd\ws_python\django_basic\ais\AImodels

    model = load_model(os.path.join(path, 'Pinterest.h5')) # 모델 읽기
    p = model.predict(data) # 모델 사용
    print('-> p:', p) # [[0.54815423 0.01504818 0.01776066 0.16331927 0.25571758]]
    
    # 0: 강아지, 1: 카페, 2: 가을, 3: 한우, 4: 꽃  
    index = np.argmax(p) 
    print('-> index: ', index) # 0 ~ 4
    per = round(np.max(p) * 100, 1)
    print('-> per: ', per) 

    if index == 0:
        label = '강아지'
    elif index == 1:
        label = '카페'
    elif index == 2:
        label = '가을'
    elif index == 3:
        label = '한우'
    elif index == 4:
        label = '꽃'

    result = {}
    if per >= 20:
        result = {"index": index, "label": label, "per": per}
    else:
        result = {"index": index, "label": f'가장 인접한 추천: {label}', "per": per}
   
    return result 
