# 값 입력
flag = input('마음에 드는 옷을 찾았나요? (예/아니오) : ')

# 조건 분기
if flag == '예':                                     # 입력 받은 값이 '예'인 경우
    print(':) 축하합니다!!')                         # 축하 메세지 출력
elif flag == '아니오':                               # 입력 받은 값이 '예'가 아닌 경우
    print(':( 아쉽군요.')                            # 아쉬운 메세지 출력
else:                                                # '예'혹은'아니오'로 입력하지 않은 경우
    print("'예' 또는 '아니오'로만 입력하세요.")      # 오류 메세지 출력

# 7행 : elif는 else if의 줄임말로 5행 if문 조건식이 False인 경우 수행하는 다음 단계의 조건문이라는 뜻
# 9행 : if문과 elif문 덕분에 '예' 또는 '아니오' 이외에 입력한 모든 경우에 실행됩니다.
# 10행 : 오류 메세지가 출력됩니다.
