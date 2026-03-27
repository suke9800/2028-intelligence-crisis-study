"use strict";

const termEntries = [
  {
    label: "left-tail risk",
    summary: "아주 드물지만 한 번 터지면 피해가 매우 큰 위험",
    easy: "평소에는 별일 아닐 것 같지만, 실제로 터지면 게임 규칙을 바꿔 버리는 종류의 충격입니다.",
    why: "이 글은 '가장 가능성 높은 미래'보다도 시장이 준비하지 못한 큰 하방 충격을 먼저 점검하려는 시나리오입니다.",
  },
  {
    label: "Ghost GDP",
    summary: "GDP에는 잡히지만 가계 소득과 소비로는 잘 이어지지 않는 생산",
    easy: "회사 실적과 서버 투자만 늘고, 사람 지갑과 생활은 덜 좋아지는 상태라고 보면 됩니다.",
    why: "원문은 생산성 숫자가 좋아도 체감 경기는 나빠질 수 있다는 모순을 설명하려고 이 표현을 씁니다.",
  },
  {
    label: "velocity of money",
    summary: "돈이 경제 안에서 얼마나 빠르게 돌고 있는지 보여 주는 개념",
    easy: "같은 1만 원이 식당, 택시, 편의점을 연달아 돌면 빠른 것이고 한곳에 오래 멈추면 느린 것입니다.",
    why: "AI 이익이 사람 월급 대신 데이터센터와 자본 쪽에만 머물면 돈의 회전이 약해질 수 있다는 논리와 연결됩니다.",
  },
  {
    label: "white-collar",
    summary: "사무, 기획, 분석, 관리처럼 책상 앞에서 하는 직무",
    easy: "공장 현장보다 노트북, 문서, 회의와 더 가까운 일자리라고 생각하면 됩니다.",
    why: "원문은 AI 충격이 바로 이 계층을 치면 미국 소비 구조 전체가 흔들린다고 봅니다.",
  },
  {
    label: "prime mortgage",
    summary: "신용이 좋은 차주에게 나간 우량 주택담보대출",
    easy: "원래는 비교적 안전하다고 여겨지던 집담보 대출입니다.",
    why: "원문은 이제 이런 대출도 '미래 소득이 계속 안전한가?'라는 질문을 피하기 어렵다고 말합니다.",
  },
  {
    label: "agentic coding",
    summary: "AI가 계획, 구현, 수정까지 이어서 수행하는 코딩 방식",
    easy: "단순 보조가 아니라 기능을 쪼개고 만들고 고치는 흐름을 여러 단계로 이어 가는 코딩 AI입니다.",
    why: "원문은 이 변화가 SaaS 가격표를 흔드는 시작점 중 하나라고 봅니다.",
  },
  {
    label: "CIO",
    summary: "기업의 최고정보책임자",
    easy: "회사에서 어떤 소프트웨어와 시스템을 쓸지 크게 결정하는 사람입니다.",
    why: "원문은 CIO가 '직접 만들 수 있는데 굳이 비싼 SaaS를 계속 사야 하나?'라고 묻기 시작했다고 설명합니다.",
  },
  {
    label: "procurement",
    summary: "구매와 조달을 맡는 조직",
    easy: "회사 돈으로 무엇을 얼마에 살지 따지고 깎는 부서입니다.",
    why: "AI 대안이 생기면 이 부서는 더 공격적으로 가격을 깎으려 들 수 있습니다.",
  },
  {
    label: "systems of record",
    summary: "회사 공식 데이터가 저장되고 기준이 되는 핵심 시스템",
    easy: "고객 정보, 인사, 회계처럼 '여기가 진짜 원본'인 시스템입니다.",
    why: "원문은 이런 시스템도 좌석 수와 사용량이 줄면 안전지대가 아니라고 봅니다.",
  },
  {
    label: "ACV",
    summary: "Annual Contract Value, 연간 계약 금액",
    easy: "고객 한 곳이 1년에 얼마를 내는지 보는 숫자입니다.",
    why: "원문은 새로운 계약 금액이 둔화되면 AI 충격이 실제 매출에도 번지고 있다고 해석합니다.",
  },
  {
    label: "reflexivity",
    summary: "한 변화가 또 다른 변화를 낳고, 그 결과가 다시 처음 변화를 더 키우는 순환",
    easy: "한 번 밀리기 시작하면 그 밀림이 다음 밀림을 더 크게 만드는 구조입니다.",
    why: "원문 전체는 고객의 인력 감축이 SaaS 매출을 줄이고, 그게 다시 더 많은 감축을 부르는 고리라고 설명합니다.",
  },
  {
    label: "friction",
    summary: "거래나 선택 과정에 들어가는 귀찮음, 시간, 비용",
    easy: "복잡해서 그냥 예전 방식을 계속 쓰게 만드는 불편함입니다.",
    why: "원문은 많은 중개 수익이 사실 이런 마찰 위에 서 있었다고 봅니다.",
  },
  {
    label: "intermediation",
    summary: "거래 중간에 끼어 연결해 주고 수수료를 받는 구조",
    easy: "사는 사람과 파는 사람 사이에 들어가 길을 안내하고 돈을 받는 방식입니다.",
    why: "AI 에이전트가 직접 비교하고 실행하면 이런 중개층이 약해질 수 있습니다.",
  },
  {
    label: "customer lifetime value",
    summary: "한 고객이 전체 관계 기간 동안 남기는 총 가치",
    easy: "한 번 데려온 고객이 앞으로 얼마나 오래, 얼마나 많이 돈을 써 줄지 보는 숫자입니다.",
    why: "AI가 해마다 더 똑똑해지면 고객이 계속 남아 있을 것이라는 가정이 약해질 수 있습니다.",
  },
  {
    label: "moat",
    summary: "경쟁자가 쉽게 따라오지 못하게 막는 방어벽",
    easy: "회사 주변에 파 놓은 성벽 같은 것입니다.",
    why: "원문은 일부 플랫폼의 방어벽이 실제 제품력보다 귀찮음과 기본 설정에 기대고 있었다고 봅니다.",
  },
  {
    label: "habitual intermediation",
    summary: "사람의 습관과 귀찮음을 먹고 사는 중개 구조",
    easy: "원래 그냥 쓰던 길이니까 계속 수수료를 내는 상황입니다.",
    why: "AI는 이런 습관성 중개를 끊고 더 싼 경로를 계속 찾을 수 있습니다.",
  },
  {
    label: "interchange",
    summary: "카드 결제망을 지날 때 붙는 수수료",
    easy: "카드로 결제할 때 뒤에서 조금씩 떼 가는 돈입니다.",
    why: "결제 경로가 바뀌면 카드망의 고정 수익도 압박받을 수 있습니다.",
  },
  {
    label: "stablecoin",
    summary: "가치 변동을 줄이도록 설계한 디지털 토큰",
    easy: "가격이 심하게 흔들리지 않도록 맞춰 둔 디지털 돈 비슷한 것입니다.",
    why: "원문은 에이전트 결제 시대에 카드보다 싸고 빠른 정산 수단으로 이런 도구가 부상할 수 있다고 봅니다.",
  },
  {
    label: "plumbing story",
    summary: "겉 서비스보다 결제와 정산 같은 배관 구조가 핵심인 이야기",
    easy: "화려한 앱보다 뒤에서 돈이 흐르는 관이 바뀌는 이야기라고 보면 됩니다.",
    why: "원문은 일부 결제 기업 문제가 소비가 아니라 결제 인프라 문제라고 말합니다.",
  },
  {
    label: "JOLTS",
    summary: "미국 구인과 이직 흐름을 보여 주는 노동시장 통계",
    easy: "채용 공고와 빈자리가 얼마나 남아 있는지 보여 주는 체온계입니다.",
    why: "원문은 사무직 채용 붕괴를 설명하는 대표 지표로 이 통계를 언급합니다.",
  },
  {
    label: "OpEx substitution",
    summary: "사람 운영비가 AI 사용비로 대체되는 현상",
    easy: "월급과 외주비가 줄고 그 대신 모델 사용료와 서버비가 늘어나는 그림입니다.",
    why: "그래서 경기 둔화에도 AI 인프라 지출은 버티는 이상한 조합이 나온다고 설명합니다.",
  },
  {
    label: "hyperscaler",
    summary: "초대형 클라우드와 데이터센터를 운영하는 사업자",
    easy: "AI를 돌리는 거대한 서버 공장을 가진 회사입니다.",
    why: "원문은 실물경제가 약해져도 이 층만은 수요가 강할 수 있다고 봅니다.",
  },
  {
    label: "current account surplus",
    summary: "한 나라가 대외 거래에서 벌어들이는 돈이 더 많은 상태",
    easy: "나라 차원에서 밖에서 들어오는 돈이 나가는 돈보다 많은 경우입니다.",
    why: "AI 충격으로 서비스 수출이 약해지면 이런 흑자 구조도 흔들릴 수 있습니다.",
  },
  {
    label: "IMF",
    summary: "국제통화기금",
    easy: "국가 경제가 흔들릴 때 구제금융이나 정책 지원 논의가 나오는 국제기구입니다.",
    why: "원문은 AI 충격이 신흥국 통화와 대외수지 문제로 번지면 이런 단계까지 갈 수 있다고 봅니다.",
  },
  {
    label: "discretionary spending",
    summary: "꼭 하지 않아도 되는 선택 소비",
    easy: "여행, 외식, 구독 업그레이드처럼 불안하면 먼저 줄이는 지출입니다.",
    why: "고소득층의 소비가 줄면 경기 둔화가 빠르게 넓어질 수 있습니다.",
  },
  {
    label: "private credit",
    summary: "은행 밖에서 이뤄지는 대출 시장",
    easy: "대형 펀드와 보험 자금이 회사에 직접 돈을 빌려주는 시장입니다.",
    why: "원문은 소프트웨어 기업 현금흐름에 건 베팅이 여기서 많이 쌓였다고 봅니다.",
  },
  {
    label: "leveraged buyout",
    summary: "빚을 많이 써서 회사를 인수하는 거래",
    easy: "내 돈보다 빌린 돈을 더 크게 얹어서 회사를 사는 방식입니다.",
    why: "성장 가정이 흔들리면 이런 거래는 특히 약해집니다.",
  },
  {
    label: "ARR",
    summary: "Annual Recurring Revenue, 연간 반복 매출",
    easy: "구독 고객이 계속 남아 있다고 가정할 때 1년 동안 반복될 매출입니다.",
    why: "원문은 AI가 도입되면 이런 반복 매출도 생각보다 덜 반복적일 수 있다고 말합니다.",
  },
  {
    label: "EBITDA",
    summary: "이자, 세금, 감가상각을 빼기 전 영업 체력에 가까운 이익",
    easy: "사업 자체가 지금 얼마나 버는지 거칠게 보여 주는 숫자입니다.",
    why: "사모대출과 인수금융은 이런 지표를 기준으로 위험을 판단하는 경우가 많습니다.",
  },
  {
    label: "debt covenant",
    summary: "대출 계약에서 반드시 지켜야 하는 재무 약속",
    easy: "회사 실적이 어느 선 아래로 떨어지면 문제가 생기도록 걸어 둔 조건입니다.",
    why: "AI 충격으로 매출과 이익이 약해지면 이런 조건을 못 맞출 가능성이 커집니다.",
  },
  {
    label: "closed-end vehicle",
    summary: "중간에 돈을 바로 빼기 어려운 투자 구조",
    easy: "한 번 넣으면 일정 기간 묶이는 투자 상자입니다.",
    why: "원문은 상자가 닫혀 있다고 해서 손실이 사라지는 것은 아니라고 지적합니다.",
  },
  {
    label: "permanent capital",
    summary: "단기간에 빠져나가지 않는 장기 자본",
    easy: "오래 묶여 있어서 급한 환매가 적을 것처럼 보이는 돈입니다.",
    why: "원문은 이런 자본도 결국 손실을 숨기지는 못한다고 말합니다.",
  },
  {
    label: "annuity",
    summary: "오래 돈을 맡기고 나중에 나눠 받는 보험성 자금",
    easy: "보험사가 받아서 길게 굴리는 생활자금 성격의 돈입니다.",
    why: "원문은 이런 돈이 사모대출 시장 깊숙이 들어가 있음을 강조합니다.",
  },
  {
    label: "regulatory arbitrage",
    summary: "규제가 느슨한 틈을 이용해 위험을 다른 곳으로 옮기는 것",
    easy: "같은 위험인데 규제가 약한 주머니로 옮겨 담아 덜 엄격하게 취급받는 방식입니다.",
    why: "원문은 그림자 금융의 위험이 보이지 않게 커지는 이유 중 하나로 이것을 봅니다.",
  },
  {
    label: "SPV",
    summary: "특정 목적만을 위해 만든 별도 법인",
    easy: "위험과 자산을 따로 담아 두는 작은 상자 회사입니다.",
    why: "원문은 이런 구조가 많아질수록 누가 실제로 위험을 들고 있는지 보기 어려워진다고 말합니다.",
  },
  {
    label: "risk-based capital",
    summary: "보유 자산의 위험도에 따라 더 쌓아야 하는 자본 규칙",
    easy: "위험한 자산을 많이 들고 있으면 자기 돈도 더 많이 깔아 두라는 뜻입니다.",
    why: "손실 인식이 커지면 보험사와 금융기관의 대응 압력도 함께 커집니다.",
  },
  {
    label: "HELOC",
    summary: "주택담보 신용한도대출",
    easy: "집을 담보로 한도를 열어 두고 필요할 때 꺼내 쓰는 대출입니다.",
    why: "원문은 가계가 보이지 않는 압박을 견디기 위해 이런 통로를 더 쓸 수 있다고 봅니다.",
  },
  {
    label: "debt-to-income ratio",
    summary: "소득 대비 부채 부담 비율",
    easy: "버는 돈에 비해 빚이 얼마나 무거운지 보여 주는 숫자입니다.",
    why: "소득 전망이 나빠지면 이미 안전해 보이던 차주도 이 비율이 급격히 악화될 수 있습니다.",
  },
  {
    label: "QE",
    summary: "중앙은행이 큰 규모로 자산을 사들이는 양적완화",
    easy: "시중에 돈을 더 풀어 시장을 살리는 강한 정책 카드입니다.",
    why: "원문은 이런 정책이 자산 가격은 살릴 수 있어도 인간 노동 가격의 재조정까지 막지는 못한다고 봅니다.",
  },
  {
    label: "automatic stabilizers",
    summary: "경기가 식으면 자동으로 작동하는 경기 완충 장치",
    easy: "실업급여나 세수 감소처럼 별도 입법 없이 자동으로 움직이는 안전장치입니다.",
    why: "원문은 구조적 AI 대체는 이런 장치만으로 버티기 어렵다고 주장합니다.",
  },
  {
    label: "labor share of GDP",
    summary: "경제 전체 소득 중 노동이 가져가는 몫",
    easy: "나라가 번 돈 중 월급과 급여로 돌아가는 조각입니다.",
    why: "이 비중이 줄면 소비와 세수, 정치 안정이 동시에 흔들릴 수 있습니다.",
  },
  {
    label: "inference compute tax",
    summary: "AI 추론 연산 사용량에 세금을 붙이자는 아이디어",
    easy: "사람 대신 기계 계산이 돈을 벌수록 그 계산 쪽에 세금을 매기자는 발상입니다.",
    why: "원문은 줄어드는 노동세 기반을 메우는 한 가지 제안으로 이런 아이디어를 언급합니다.",
  },
  {
    label: "sovereign wealth fund",
    summary: "국가가 장기적으로 운용하는 공적 투자기금",
    easy: "국가가 직접 자산을 가지고 굴려 국민에게 배당하거나 미래 재원을 만드는 방식입니다.",
    why: "AI 인프라 수익을 사회 전체와 나누는 장치로 연결될 수 있다는 논의가 나옵니다.",
  },
  {
    label: "intelligence premium",
    summary: "희소한 인간 지능에 붙어 있던 높은 가격표",
    easy: "생각하고 판단하고 설계하는 능력이 귀해서 높은 연봉을 받던 프리미엄입니다.",
    why: "원문 마지막 결론은 이 프리미엄이 재가격되고 있다는 데 있습니다.",
  },
  {
    label: "productivity",
    summary: "같은 시간과 자원으로 얼마나 많은 산출을 내는지 보여 주는 생산성",
    easy: "사람이나 회사가 같은 노력으로 더 많은 결과를 내면 생산성이 오른 것입니다.",
    why: "원문은 AI 시대에 [[productivity]] 수치가 좋아 보여도 소득과 소비가 같이 좋아지는 것은 아니라는 점을 강조합니다.",
    aliases: ["생산성"],
  },
  {
    label: "nominal GDP",
    summary: "물가 변화를 따로 빼지 않고 현재 가격 기준으로 계산한 명목 GDP",
    easy: "나라 경제 규모를 지금의 가격표 그대로 합산한 숫자입니다.",
    why: "원문은 [[nominal GDP]]가 좋아 보여도 체감 경기와 괴리될 수 있다는 점을 짚습니다.",
    aliases: ["명목 GDP"],
  },
  {
    label: "annualized growth",
    summary: "현재 증가 속도를 1년 기준으로 환산해 보는 연율 성장",
    easy: "이번 분기의 흐름이 1년 내내 이어진다고 가정해 성장률을 환산한 수치입니다.",
    why: "원문은 겉으로 보이는 성장 속도가 좋아도 그 안의 분배 구조는 나빠질 수 있다고 설명합니다.",
    aliases: ["연율 성장"],
  },
  {
    label: "real wage growth",
    summary: "물가를 반영한 뒤 실제 구매력 기준으로 본 임금 성장",
    easy: "월급 숫자만이 아니라, 그 돈으로 실제 얼마나 살 수 있는지를 본 임금 변화입니다.",
    why: "원문은 AI 생산성 호황 속에서도 [[real wage growth]]는 약해질 수 있다고 봅니다.",
    aliases: ["실질 임금 성장"],
  },
  {
    label: "consumer economy",
    summary: "가계 소비가 경제 움직임의 중심이 되는 소비 경제",
    easy: "사람들이 쓰는 돈이 경제를 크게 움직이는 구조입니다.",
    why: "원문은 미국의 [[consumer economy]]가 약해지면 생산성 숫자만으로는 전체 경제를 지탱하기 어렵다고 말합니다.",
    aliases: ["소비 경제", "소비경제"],
  },
  {
    label: "margin",
    summary: "매출에서 비용을 뺀 뒤 남는 이익 폭, 즉 마진",
    easy: "돈을 벌고 나서 실제로 얼마나 남는지를 보여 주는 여유분입니다.",
    why: "원문에서는 해고와 자동화가 처음엔 [[margin]] 개선으로 보이지만, 나중에는 소비와 매출을 훼손해 다시 압박이 된다고 설명합니다.",
    aliases: ["마진", "마진 압박"],
  },
  {
    label: "corporate profits",
    summary: "기업 전체가 벌어들이는 이익",
    easy: "회사들이 사업해서 남기는 돈의 합입니다.",
    why: "원문은 초반 AI 도입 국면에서 [[corporate profits]]가 좋아 보여 시장이 더 낙관적으로 반응할 수 있다고 봅니다.",
    aliases: ["기업 이익"],
  },
  {
    label: "underwriting",
    summary: "대출이나 금융 계약의 위험을 심사하고 가격을 매기는 인수 심사",
    easy: "돈을 빌려줘도 되는지, 어느 조건으로 빌려줄지를 따져 보는 과정입니다.",
    why: "원문은 사무직 소득 기반이 흔들리면 기존의 [[underwriting]] 가정도 다시 계산해야 한다고 봅니다.",
    aliases: ["언더라이팅", "인수 심사"],
  },
  {
    label: "recurring revenue",
    summary: "한 번이 아니라 반복적으로 들어오는 매출",
    easy: "구독이나 장기 계약처럼 계속해서 다시 들어오는 매출입니다.",
    why: "원문은 AI가 고객의 선택을 바꾸면 [[recurring revenue]]도 생각보다 덜 반복적일 수 있다고 지적합니다.",
    aliases: ["반복 매출"],
  },
  {
    label: "default cycle",
    summary: "채무불이행이 연쇄적으로 늘어나는 디폴트 사이클",
    easy: "빚을 못 갚는 사례가 한두 건이 아니라 줄줄이 늘어나는 구간입니다.",
    why: "원문은 오랫동안 진짜 [[default cycle]]이 없었던 탓에 시장이 위험에 둔감해졌다고 봅니다.",
    aliases: ["디폴트 사이클", "채무불이행 사이클"],
  },
  {
    label: "sector risk",
    summary: "특정 업종 안에 머무는 섹터 리스크",
    easy: "문제가 한 산업이나 한 분야 안에서만 끝나는 위험입니다.",
    why: "원문은 AI 충격이 처음엔 [[sector risk]]처럼 보이지만 곧 더 넓은 문제로 번진다고 설명합니다.",
    aliases: ["섹터 리스크"],
  },
  {
    label: "systemic risk",
    summary: "경제 시스템 전체를 흔들 수 있는 시스템 리스크",
    easy: "한 군데 문제가 아니라 여러 고리를 타고 전체 구조까지 흔드는 위험입니다.",
    why: "원문은 사무직 소득과 소비, 금융이 연결돼 있어 AI 충격이 [[systemic risk]]로 커질 수 있다고 봅니다.",
    aliases: ["시스템 리스크"],
  },
  {
    label: "yield",
    summary: "채권이나 자산에서 기대하는 수익률, 특히 금리 수익률",
    easy: "돈을 맡겼을 때 얼마를 돌려받을지 보여 주는 비율입니다.",
    why: "원문은 장기 [[yield]] 하락을 통해 경기 둔화 신호와 AI 투자 열기를 함께 읽습니다.",
    aliases: ["수익률", "장기금리", "금리 수익률"],
  },
  {
    label: "capex",
    summary: "공장, 장비, 데이터센터 같은 장기 자산에 쓰는 설비투자",
    easy: "당장 쓰고 끝나는 비용이 아니라, 오래 쓰려고 크게 투자하는 돈입니다.",
    why: "원문은 사무직 비용이 줄어도 AI [[capex]]는 강하게 유지될 수 있다는 비대칭을 보여 줍니다.",
    aliases: ["설비투자"],
  },
  {
    label: "information asymmetry",
    summary: "한쪽만 더 많은 정보를 가진 상태인 정보 비대칭",
    easy: "거래하는 둘 중 한쪽이 훨씬 더 많이 알고 있는 상황입니다.",
    why: "원문은 에이전트가 늘어나면 [[information asymmetry]]가 줄어 수수료와 중개 마진이 압박받을 수 있다고 봅니다.",
    aliases: ["정보 비대칭"],
  },
  {
    label: "direct lending",
    summary: "은행 대신 투자자금이 직접 빌려주는 직접 대출",
    easy: "중간 은행보다 펀드나 투자자가 기업에 바로 돈을 빌려주는 구조입니다.",
    why: "원문은 AI 충격이 [[direct lending]] 장부와 사모 신용 구조에도 번질 수 있다고 설명합니다.",
    aliases: ["직접 대출"],
  },
  {
    label: "municipal bond",
    summary: "지방정부나 공공기관이 발행하는 지방채",
    easy: "도시나 지방정부가 돈을 조달하려고 발행하는 채권입니다.",
    why: "원문은 지역별 세수 구조가 달라 [[municipal bond]] 위험도 차별화될 수 있다고 암시합니다.",
    aliases: ["지방채"],
  },
  {
    label: "deflationary spiral",
    summary: "수요 약화와 가격 하락, 소득 악화가 서로를 강화하는 디플레이션 나선",
    easy: "사람들이 덜 쓰고 가격이 약해지고 소득도 줄어 다시 더 안 쓰게 되는 악순환입니다.",
    why: "원문은 정책이 늦으면 [[deflationary spiral]]이 더 깊어질 수 있다고 경고합니다.",
    aliases: ["디플레이션 나선", "디플레 나선"],
  },
  {
    label: "enterprise value",
    summary: "주식 가치와 순부채를 함께 본 기업가치",
    easy: "회사를 통째로 산다고 생각할 때 붙는 전체 가격표입니다.",
    why: "원문은 중개와 소프트웨어 모델이 흔들리면 [[enterprise value]] 가정도 다시 써야 한다고 봅니다.",
    aliases: ["기업가치"],
  },
  {
    label: "tax receipts",
    summary: "정부가 실제로 걷는 세수",
    easy: "세금 제도가 아니라, 정부 금고로 실제 들어오는 세금 흐름입니다.",
    why: "원문은 AI로 노동소득과 소비가 약해지면 [[tax receipts]]가 예상보다 덜 들어올 수 있다고 설명합니다.",
    aliases: ["세수"],
  },
  {
    label: "unemployment rate",
    summary: "일하고 싶은 사람 중 실제로 일자리를 못 구한 비율인 실업률",
    easy: "노동시장 전체에서 일자리가 없는 사람이 얼마나 되는지 보여 주는 대표 지표입니다.",
    why: "원문은 [[unemployment rate]]가 위기 결과를 보여 주는 헤드라인 숫자지만, 그 전에 더 많은 균열이 먼저 생긴다고 봅니다.",
    aliases: ["실업률"],
  },
  {
    label: "drawdown",
    summary: "고점 대비 얼마나 내려왔는지 보여 주는 낙폭",
    easy: "주가나 자산가격이 가장 높았던 지점에서 얼마나 빠졌는지 보는 방식입니다.",
    why: "원문은 시장이 AI 낙관에서 위기 인식으로 바뀌는 과정을 [[drawdown]] 숫자로 보여 줍니다.",
    aliases: ["낙폭"],
  },
  {
    label: "mortgage market",
    summary: "주택담보대출이 거래되고 유지되는 모기지 시장",
    easy: "집을 담보로 한 대출이 쌓여 있는 아주 큰 금융시장입니다.",
    why: "원문은 사무직 소득 충격이 결국 [[mortgage market]] 안정성까지 건드릴 수 있다고 봅니다.",
    aliases: ["모기지 시장", "주택담보대출 시장"],
  },
  {
    label: "tax base",
    summary: "정부가 세금을 걷을 수 있는 소득과 소비의 기반인 세원",
    easy: "나라가 어디에서 세금을 걷는지 받쳐 주는 바닥입니다.",
    why: "원문은 노동소득이 줄면 기존 [[tax base]]도 같이 약해질 수 있다고 설명합니다.",
    aliases: ["세원"],
  },
];

const translatedTermLabels = {
  "left-tail risk": "좌측 꼬리 위험(left-tail risk)",
  "Ghost GDP": "유령 GDP(Ghost GDP)",
  "velocity of money": "화폐 유통 속도(velocity of money)",
  "white-collar": "사무직(white-collar)",
  "prime mortgage": "우량 모기지(prime mortgage)",
  "agentic coding": "에이전트형 코딩(agentic coding)",
  CIO: "최고정보책임자(CIO)",
  procurement: "조달(procurement)",
  "systems of record": "기준 시스템(systems of record)",
  ACV: "연간 계약 금액(ACV)",
  reflexivity: "재귀적 순환(reflexivity)",
  friction: "마찰(friction)",
  intermediation: "중개(intermediation)",
  "customer lifetime value": "고객 생애가치(customer lifetime value)",
  moat: "방어벽(moat)",
  "habitual intermediation": "습관성 중개(habitual intermediation)",
  interchange: "카드 수수료(interchange)",
  stablecoin: "스테이블코인(stablecoin)",
  "plumbing story": "배관 구조 이야기(plumbing story)",
  JOLTS: "구인·이직 통계(JOLTS)",
  "OpEx substitution": "운영비 대체(OpEx substitution)",
  hyperscaler: "초대형 클라우드 사업자(hyperscaler)",
  "current account surplus": "경상수지 흑자(current account surplus)",
  IMF: "국제통화기금(IMF)",
  "discretionary spending": "선택 소비(discretionary spending)",
  "private credit": "사모대출(private credit)",
  "leveraged buyout": "차입 인수(leveraged buyout)",
  ARR: "연간 반복 매출(ARR)",
  EBITDA: "상각 전 영업이익(EBITDA)",
  "debt covenant": "재무 약정(debt covenant)",
  "closed-end vehicle": "폐쇄형 투자 구조(closed-end vehicle)",
  "permanent capital": "영구 자본(permanent capital)",
  annuity: "연금성 자금(annuity)",
  "regulatory arbitrage": "규제 차익(regulatory arbitrage)",
  SPV: "특수목적법인(SPV)",
  "risk-based capital": "위험기준자본(risk-based capital)",
  HELOC: "주택담보 신용한도대출(HELOC)",
  "debt-to-income ratio": "소득 대비 부채비율(debt-to-income ratio)",
  QE: "양적완화(QE)",
  "automatic stabilizers": "자동 안정 장치(automatic stabilizers)",
  "labor share of GDP": "노동소득분배율(labor share of GDP)",
  "inference compute tax": "추론 연산세(inference compute tax)",
  "sovereign wealth fund": "국부펀드(sovereign wealth fund)",
  "intelligence premium": "지능 프리미엄(intelligence premium)",
  productivity: "생산성(productivity)",
  "nominal GDP": "명목 GDP(nominal GDP)",
  "annualized growth": "연율 성장(annualized growth)",
  "real wage growth": "실질 임금 성장(real wage growth)",
  "consumer economy": "소비 경제(consumer economy)",
  margin: "마진(margin)",
  "corporate profits": "기업 이익(corporate profits)",
  underwriting: "인수 심사(underwriting)",
  "recurring revenue": "반복 매출(recurring revenue)",
  "default cycle": "디폴트 사이클(default cycle)",
  "sector risk": "섹터 리스크(sector risk)",
  "systemic risk": "시스템 리스크(systemic risk)",
  yield: "수익률(yield)",
  capex: "설비투자(capex)",
  "information asymmetry": "정보 비대칭(information asymmetry)",
  "direct lending": "직접 대출(direct lending)",
  "municipal bond": "지방채(municipal bond)",
  "deflationary spiral": "디플레이션 나선(deflationary spiral)",
  "enterprise value": "기업가치(enterprise value)",
  "tax receipts": "세수(tax receipts)",
  "unemployment rate": "실업률(unemployment rate)",
  drawdown: "낙폭(drawdown)",
  "mortgage market": "모기지 시장(mortgage market)",
  "tax base": "세원(tax base)",
};

function getTermDisplay(label) {
  return translatedTermLabels[label] || label;
}

function getFlatSections() {
  let chapterNumber = 0;

  return articleGroups.flatMap((group) =>
    group.sections.map((section) => {
      chapterNumber += 1;

      return {
        ...section,
        groupId: group.id,
        groupLabel: group.label,
        groupTitle: group.title,
        groupIntro: group.intro,
        quizCategory: group.quizCategory,
        chapterNumber,
        chapterLabel: `${chapterNumber}부`,
      };
    }),
  );
}

function getGroupRangeLabel(groupId) {
  const sections = getFlatSections().filter((section) => section.groupId === groupId);

  if (!sections.length) {
    return "";
  }

  const start = sections[0].chapterNumber;
  const end = sections[sections.length - 1].chapterNumber;
  return start === end ? `${start}부` : `${start}-${end}부`;
}

const refs = {
  overviewContent: document.querySelector("#overview-content"),
  articleOutline: document.querySelector("#article-outline"),
  articleGroups: document.querySelector("#article-groups"),
  contextGroups: document.querySelector("#context-groups"),
  questionBankCount: document.querySelector("#question-bank-count"),
  categoryFilters: document.querySelector("#category-filters"),
  studyQuestions: document.querySelector("#study-questions"),
  studyPrev: document.querySelector("#study-prev"),
  studyNext: document.querySelector("#study-next"),
  studyPageInfo: document.querySelector("#study-page-info"),
  studyPanel: document.querySelector("#study-panel"),
  examPanel: document.querySelector("#exam-panel"),
  modeStudy: document.querySelector("#mode-study"),
  modeExam: document.querySelector("#mode-exam"),
  examIntro: document.querySelector("#exam-intro"),
  examShell: document.querySelector("#exam-shell"),
  examProgress: document.querySelector("#exam-progress"),
  examAnswered: document.querySelector("#exam-answered"),
  examQuestionCard: document.querySelector("#exam-question-card"),
  examPrev: document.querySelector("#exam-prev"),
  examNext: document.querySelector("#exam-next"),
  examSubmit: document.querySelector("#exam-submit"),
  examResult: document.querySelector("#exam-result"),
  startExam: document.querySelector("#start-exam"),
  termModal: document.querySelector("#term-modal"),
  termTitle: document.querySelector("#term-title"),
  termSummary: document.querySelector("#term-summary"),
  termEasy: document.querySelector("#term-easy"),
  termWhy: document.querySelector("#term-why"),
  termClose: document.querySelector("#term-close"),
  mobileModeToggle: document.querySelector("#mobile-mode-toggle"),
  settingsToggle: document.querySelector("#settings-toggle"),
  settingsPanel: document.querySelector("#settings-panel"),
  settingsClose: document.querySelector("#settings-close"),
  fontSizeRange: document.querySelector("#font-size-range"),
  fontSizeValue: document.querySelector("#font-size-value"),
  fontSizeReset: document.querySelector("#font-size-reset"),
  mobileOutlineToggle: document.querySelector("#mobile-outline-toggle"),
  mobileFontToggle: document.querySelector("#mobile-font-toggle"),
  mobileSheet: document.querySelector("#mobile-sheet"),
  mobileSheetClose: document.querySelector("#mobile-sheet-close"),
  mobileSheetKicker: document.querySelector("#mobile-sheet-kicker"),
  mobileSheetTitle: document.querySelector("#mobile-sheet-title"),
  mobileSheetOutlinePanel: document.querySelector("#mobile-sheet-outline-panel"),
  mobileSheetFontPanel: document.querySelector("#mobile-sheet-font-panel"),
  mobileOutlineList: document.querySelector("#mobile-outline-list"),
  mobileFontSizeRange: document.querySelector("#mobile-font-size-range"),
  mobileFontSizeValue: document.querySelector("#mobile-font-size-value"),
  mobileFontDecrease: document.querySelector("#mobile-font-decrease"),
  mobileFontIncrease: document.querySelector("#mobile-font-increase"),
  mobileFontReset: document.querySelector("#mobile-font-reset"),
  scrollBar: document.querySelector("#scroll-progress-bar"),
};

const state = {
  mode: "study",
  studyPage: 0,
  studyPageSize: 4,
  studyFilter: "전체",
  studyAnswers: {},
  exam: {
    active: false,
    index: 0,
    questions: [],
    answers: {},
  },
  mobileMode: false,
  mobileSheet: null,
};

const FONT_SCALE_STORAGE_KEY = "gic-font-scale";
const MOBILE_MODE_STORAGE_KEY = "gic-mobile-reading-mode";
const MIN_FONT_SCALE = 90;
const MAX_FONT_SCALE = 135;

function clampNumber(value, min, max) {
  const numeric = Number(value);

  if (Number.isNaN(numeric)) {
    return min;
  }

  return Math.min(max, Math.max(min, numeric));
}

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeRegex(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function normalizeTerm(term) {
  return String(term).trim().toLowerCase();
}

function buildTermTriggerMarkup(lookupLabel, visibleLabel) {
  return `<button class="term-trigger" type="button" data-term="${escapeAttr(lookupLabel)}">${visibleLabel}</button>`;
}

function buildTermTriggerNode(lookupLabel, visibleLabel) {
  const button = document.createElement("button");
  button.className = "term-trigger";
  button.type = "button";
  button.dataset.term = lookupLabel;
  button.textContent = visibleLabel;
  return button;
}

function autoLinkEconomicTerms(html) {
  if (!autoLinkPattern) {
    return html;
  }

  const root = document.createElement("div");
  root.innerHTML = html;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const value = node.nodeValue || "";
      const parent = node.parentElement;

      if (!value.trim() || !parent || parent.closest("button, a, script, style")) {
        return NodeFilter.FILTER_REJECT;
      }

      autoLinkPattern.lastIndex = 0;
      return autoLinkPattern.test(value) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });
  const textNodes = [];

  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  textNodes.forEach((node) => {
    const value = node.nodeValue || "";
    let lastIndex = 0;
    let hasReplacement = false;
    let match;
    const fragment = document.createDocumentFragment();

    autoLinkPattern.lastIndex = 0;

    while ((match = autoLinkPattern.exec(value))) {
      const matchedText = match[0];
      const lookupLabel = termAliasLookup.get(normalizeTerm(matchedText));

      if (!lookupLabel) {
        continue;
      }

      hasReplacement = true;

      if (match.index > lastIndex) {
        fragment.appendChild(document.createTextNode(value.slice(lastIndex, match.index)));
      }

      fragment.appendChild(buildTermTriggerNode(lookupLabel, matchedText));
      lastIndex = match.index + matchedText.length;
    }

    if (!hasReplacement) {
      return;
    }

    if (lastIndex < value.length) {
      fragment.appendChild(document.createTextNode(value.slice(lastIndex)));
    }

    node.parentNode.replaceChild(fragment, node);
  });

  return root.innerHTML;
}

function renderRichText(text) {
  const explicit = String(text).replace(/\[\[(.+?)\]\]/g, (_, rawTerm) => {
    const entry = termDictionary[normalizeTerm(rawTerm)];
    const visibleLabel = entry ? entry.display : rawTerm.trim();
    const lookupLabel = entry ? entry.label : rawTerm.trim();
    return buildTermTriggerMarkup(lookupLabel, visibleLabel);
  });

  return autoLinkEconomicTerms(explicit);
}

function plainTextFromRich(text) {
  const holder = document.createElement("div");
  holder.innerHTML = String(text).replace(/\[\[(.+?)\]\]/g, "$1");
  return (holder.textContent || holder.innerText || "").replace(/\s+/g, " ").trim();
}

function hashString(value) {
  return Array.from(String(value)).reduce(
    (acc, char, index) => acc + char.charCodeAt(0) * (index + 17),
    0,
  );
}

function rotate(items, offset) {
  if (!items.length) {
    return [];
  }

  const normalizedOffset = ((offset % items.length) + items.length) % items.length;
  return items.slice(normalizedOffset).concat(items.slice(0, normalizedOffset));
}

function buildChoices(correct, pool, seed) {
  const uniquePool = Array.from(new Set(pool.filter((item) => item && item !== correct)));
  const distractors = rotate(uniquePool, hashString(seed)).slice(0, 3);
  const combined = [correct, ...distractors];
  return rotate(combined, hashString(`${seed}-choices`));
}

function makeQuestion({ id, prompt, answer, distractors, explanation, hint, category, source, kind }) {
  const choices = buildChoices(answer, distractors, id);

  return {
    id,
    prompt,
    choices,
    correctIndex: choices.indexOf(answer),
    explanation,
    hint,
    category,
    source,
    kind,
  };
}

function buildSectionQuestions(section) {
  const blueprints = sectionQuestionBlueprints[section.id] || [];

  return blueprints.map((blueprint) =>
    makeQuestion({
      id: `${section.id}-${blueprint.idSuffix}`,
      prompt: blueprint.prompt,
      answer: blueprint.answer,
      distractors: blueprint.distractors,
      explanation: `${blueprint.explanation} 이 파트의 중심 문장은 ${plainTextFromRich(section.oneLine)}입니다.`,
      hint: blueprint.hint,
      category: section.quizCategory,
      source: section.title,
      kind: "section",
    }),
  );
}

function getPeerTermEntries(entry, entries) {
  const clusterLabels = termClusterLookup[normalizeTerm(entry.label)] || [];
  const clusterSet = new Set(clusterLabels.map((label) => normalizeTerm(label)));
  const sameCluster = entries.filter(
    (item) => item.label !== entry.label && clusterSet.has(normalizeTerm(item.label)),
  );

  if (sameCluster.length >= 3) {
    return sameCluster;
  }

  return entries.filter((item) => item.label !== entry.label);
}

function buildTermQuestions(entry, entries) {
  const slug = entry.label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const display = getTermDisplay(entry.label);
  const peerEntries = getPeerTermEntries(entry, entries);

  return [
    makeQuestion({
      id: `term-${slug}-scenario`,
      prompt: `다음 설명이 가리키는 원문 용어를 고르세요. <strong>${plainTextFromRich(entry.easy)}</strong> 이 개념은 글 전체에서 ${plainTextFromRich(entry.why)}`,
      answer: display,
      distractors: peerEntries.map((item) => getTermDisplay(item.label)),
      explanation: `정답은 [[${entry.label}]]입니다. ${entry.summary} 쉽게 말하면 ${entry.easy} 이 글에서는 ${entry.why}`,
      hint: `사전 뜻보다 이 용어가 원문 전체의 어느 고리를 설명하는지 떠올려 보세요. ${entry.summary}`,
      category: "용어",
      source: display,
      kind: "term",
    }),
    makeQuestion({
      id: `term-${slug}-importance`,
      prompt: `원문에서 [[${entry.label}]]이 중요한 이유를 가장 정확히 고르세요.`,
      answer: entry.why,
      distractors: peerEntries.map((item) => item.why),
      explanation: `[[${entry.label}]]이 중요한 이유는 ${entry.why} 이 용어 자체의 뜻은 ${entry.summary}이고, 본문에서는 ${entry.easy}`,
      hint: `뜻풀이만 외우지 말고, 이 단어가 어떤 경제 고리를 연결하는지 생각해 보세요. ${entry.easy}`,
      category: "용어",
      source: display,
      kind: "term",
    }),
  ];
}

function getQuestionBank() {
  const sections = getFlatSections();
  return [
    ...sections.flatMap((section) => buildSectionQuestions(section)),
    ...termEntries.flatMap((entry) => buildTermQuestions(entry, termEntries)),
  ];
}

function buildExamQuestions() {
  const bank = getQuestionBank();
  const sectionQuestions = bank.filter((question) => question.kind === "section");
  const termQuestions = bank.filter((question) => question.kind === "term");
  const guaranteedSectionSources = Array.from(new Set(sectionQuestions.map((question) => question.source)));
  const guaranteedSections = guaranteedSectionSources.map((source) => {
    const candidates = sectionQuestions.filter((question) => question.source === source);
    return shuffled(candidates)[0];
  });
  const usedIds = new Set(guaranteedSections.map((question) => question.id));
  const extraSections = shuffled(sectionQuestions.filter((question) => !usedIds.has(question.id))).slice(0, 5);
  const termSet = shuffled(termQuestions).slice(0, 5);

  return shuffled([...guaranteedSections, ...extraSections, ...termSet]).slice(0, 20);
}

function getQuizCategories() {
  return ["전체", ...new Set(getQuestionBank().map((question) => question.category))];
}

function renderOverview() {
  refs.overviewContent.innerHTML = `
    ${overview.paragraphs.map((paragraph) => `<p>${renderRichText(paragraph)}</p>`).join("")}
    <div class="overview-flow">
      ${overview.flow
        .map((item, index) => {
          const chip = `<span class="flow-chip">${item}</span>`;
          const arrow = index < overview.flow.length - 1 ? '<span class="flow-arrow">→</span>' : "";
          return chip + arrow;
        })
        .join("")}
    </div>
  `;
}

function getOutlineMarkup() {
  const numberedSections = getFlatSections();
  const sectionsByGroup = new Map(
    articleGroups.map((group) => [
      group.id,
      numberedSections.filter((section) => section.groupId === group.id),
    ]),
  );

  return articleGroups
    .map(
      (group) => `
        <section class="outline-group">
          <p class="outline-group-label">${getGroupRangeLabel(group.id)}</p>
          ${sectionsByGroup
            .get(group.id)
            .map(
              (section) => `
                <a href="#${section.id}" data-outline-link="${section.id}">
                  <span>${section.chapterLabel}</span>
                  ${section.title}
                  <small>${section.originalTitle}</small>
                </a>
              `,
            )
            .join("")}
        </section>
      `,
    )
    .join("");
}

function renderOutline() {
  const outlineMarkup = getOutlineMarkup();

  refs.articleOutline.innerHTML = `
    <p class="panel-kicker">Outline</p>
    <h3>원문 순서</h3>
    <nav>
      ${outlineMarkup}
    </nav>
  `;

  refs.mobileOutlineList.innerHTML = `
    <nav>
      ${outlineMarkup}
    </nav>
  `;
}

function renderSectionContent(section) {
  const sourceCoverage = sectionExpandedCoverage[section.id];

  return `
    <p class="section-one-line">${renderRichText(section.oneLine)}</p>
    <div class="reading-prose">
      ${section.paragraphs.map((paragraph) => `<p>${renderRichText(paragraph)}</p>`).join("")}
    </div>
    <div class="reading-expand">
      <p><strong>쉽게 말해:</strong> ${renderRichText(section.easy)}</p>
      <p><strong>왜 중요한가:</strong> ${renderRichText(section.impact)}</p>
      <p><strong>헷갈리기 쉬운 점:</strong> ${renderRichText(section.trap)}</p>
      <p><strong>조금 더 확장해서:</strong> ${renderRichText(section.expand)}</p>
    </div>
    <div class="takeaways">
      <strong>핵심만 다시 잡기</strong>
      <ul>
        ${section.takeaways.map((item) => `<li>${renderRichText(item)}</li>`).join("")}
      </ul>
    </div>
    ${
      sectionDetailNotes[section.id]
        ? `
      <div class="takeaways">
        <strong>원문에서 더 잡아둘 디테일</strong>
        <ul>
          ${sectionDetailNotes[section.id].map((item) => `<li>${renderRichText(item)}</li>`).join("")}
        </ul>
      </div>
    `
        : ""
    }
    ${
      sourceCoverage
        ? sourceCoverage
            .map(
              (block) => `
      <div class="reading-appendix">
        <p class="reading-appendix-label">${block.label}</p>
        <div class="reading-prose">
          ${block.paragraphs.map((paragraph) => `<p>${renderRichText(paragraph)}</p>`).join("")}
        </div>
        ${
          block.points?.length
            ? `
          <div class="takeaways appendix-points">
            <ul>
              ${block.points.map((item) => `<li>${renderRichText(item)}</li>`).join("")}
            </ul>
          </div>
        `
            : ""
        }
      </div>
    `,
            )
            .join("")
        : ""
    }
  `;
}

function renderArticle() {
  const numberedSections = getFlatSections();
  const sectionLookup = new Map(numberedSections.map((section) => [section.id, section]));

  if (state.mobileMode) {
    refs.articleGroups.innerHTML = articleGroups
      .map((group, groupIndex) => {
        const groupSections = group.sections.map((rawSection) => sectionLookup.get(rawSection.id) || rawSection);

        return `
          <details class="mobile-reading-card reading-group" data-reveal ${groupIndex === 0 ? "open" : ""}>
            <summary class="mobile-card-summary">
              <span class="eyebrow">${getGroupRangeLabel(group.id)}</span>
              <strong>${group.title}</strong>
              <small>${groupSections.length}개 섹션 · 눌러서 펼치기</small>
            </summary>
            <div class="mobile-card-body">
              <p class="mobile-card-intro">${renderRichText(group.intro)}</p>
              <div class="mobile-section-list">
                ${groupSections
                  .map(
                    (section, sectionIndex) => `
                      <details id="${section.id}" class="mobile-section-card" ${
                        groupIndex === 0 && sectionIndex === 0 ? "open" : ""
                      }>
                        <summary class="mobile-section-summary">
                          <span class="section-label">${section.chapterLabel} · ${section.category}</span>
                          <strong>${section.title}</strong>
                          <small>${section.originalTitle}</small>
                        </summary>
                        <div class="mobile-section-body">
                          ${renderSectionContent(section)}
                        </div>
                      </details>
                    `,
                  )
                  .join("")}
              </div>
            </div>
          </details>
        `;
      })
      .join("");

    return;
  }

  refs.articleGroups.innerHTML = articleGroups
    .map(
      (group) => `
        <section class="reading-group" data-reveal>
          <div class="group-head">
            <p class="eyebrow">${getGroupRangeLabel(group.id)}</p>
            <h2>${group.title}</h2>
            <p>${group.intro}</p>
          </div>
          <div class="reading-stack">
            ${group.sections
              .map(
                (rawSection) => {
                  const section = sectionLookup.get(rawSection.id) || rawSection;

                  return `
                  <article id="${section.id}" class="reading-section">
                    <div class="reading-head">
                      <p class="section-label">${section.chapterLabel} · ${section.category} · ${section.originalTitle}</p>
                      <h3>${section.title}</h3>
                    </div>
                    ${renderSectionContent(section)}
                  </article>
                `;
                },
              )
              .join("")}
          </div>
        </section>
      `,
    )
    .join("");
}

function renderContext() {
  if (state.mobileMode) {
    refs.contextGroups.innerHTML = contextEssays
      .map(
        (essay, index) => `
          <details class="mobile-reading-card reading-group" data-reveal ${index === 0 ? "open" : ""}>
            <summary class="mobile-card-summary">
              <span class="eyebrow">${essay.label}</span>
              <strong>${essay.title}</strong>
              <small>눌러서 펼치기</small>
            </summary>
            <div class="mobile-card-body">
              <p class="mobile-card-intro">${renderRichText(essay.intro)}</p>
              <div class="reading-prose">
                ${essay.paragraphs.map((paragraph) => `<p>${renderRichText(paragraph)}</p>`).join("")}
              </div>
              <div class="takeaways">
                <strong>이 장을 읽고 남겨둘 관찰 포인트</strong>
                <ul>
                  ${essay.takeaways.map((item) => `<li>${renderRichText(item)}</li>`).join("")}
                </ul>
              </div>
            </div>
          </details>
        `,
      )
      .join("");

    return;
  }

  refs.contextGroups.innerHTML = contextEssays
    .map(
      (essay) => `
        <section class="reading-group" data-reveal>
          <div class="group-head">
            <p class="eyebrow">${essay.label}</p>
            <h2>${essay.title}</h2>
            <p>${renderRichText(essay.intro)}</p>
          </div>
          <div class="reading-stack">
            <article class="reading-section">
              <div class="reading-prose">
                ${essay.paragraphs.map((paragraph) => `<p>${renderRichText(paragraph)}</p>`).join("")}
              </div>
              <div class="takeaways">
                <strong>이 장을 읽고 남겨둘 관찰 포인트</strong>
                <ul>
                  ${essay.takeaways.map((item) => `<li>${renderRichText(item)}</li>`).join("")}
                </ul>
              </div>
            </article>
          </div>
        </section>
      `,
    )
    .join("");
}

function renderCategoryFilters() {
  refs.categoryFilters.innerHTML = getQuizCategories()
    .map(
      (category) => `
        <button
          class="filter-chip ${state.studyFilter === category ? "active" : ""}"
          type="button"
          data-filter="${escapeAttr(category)}"
        >
          ${category}
        </button>
      `,
    )
    .join("");
}

function getFilteredQuestions() {
  if (state.studyFilter === "전체") {
    return getQuestionBank();
  }

  return getQuestionBank().filter((question) => question.category === state.studyFilter);
}

function getStudyFeedback(question, response) {
  if (!response || !response.status) {
    return "";
  }

  if (response.status === "hint") {
    return `<div class="question-feedback hint"><strong>힌트:</strong> ${renderRichText(question.hint)}</div>`;
  }

  if (response.status === "correct") {
    return `<div class="question-feedback correct"><strong>정답입니다.</strong> ${renderRichText(question.explanation)}</div>`;
  }

  return `<div class="question-feedback incorrect"><strong>오답입니다.</strong> 정답은 <strong>${plainTextFromRich(
    question.choices[question.correctIndex],
  )}</strong>입니다. ${renderRichText(question.explanation)}</div>`;
}

function getOptionClass(question, optionIndex, response) {
  const classes = ["quiz-option"];

  if (response?.selected === optionIndex) {
    classes.push("selected");
  }

  if (response?.status === "hint" && response.selected === optionIndex) {
    classes.push("soft-wrong");
  }

  if (response?.status === "correct" && optionIndex === question.correctIndex) {
    classes.push("correct");
  }

  if (response?.status === "incorrect") {
    if (response.selected === optionIndex) {
      classes.push("wrong");
    }

    if (optionIndex === question.correctIndex) {
      classes.push("correct");
    }
  }

  return classes.join(" ");
}

function renderStudyQuestions() {
  const filtered = getFilteredQuestions();
  const totalPages = Math.max(1, Math.ceil(filtered.length / state.studyPageSize));
  state.studyPage = Math.min(state.studyPage, totalPages - 1);
  const start = state.studyPage * state.studyPageSize;
  const pageQuestions = filtered.slice(start, start + state.studyPageSize);

  refs.questionBankCount.textContent = `총 ${getQuestionBank().length}문제`;
  refs.studyPageInfo.textContent = `${state.studyPage + 1} / ${totalPages}`;
  refs.studyPrev.disabled = state.studyPage === 0;
  refs.studyNext.disabled = state.studyPage === totalPages - 1;

  refs.studyQuestions.innerHTML = pageQuestions
    .map((question, index) => {
      const response = state.studyAnswers[question.id];
      const displayIndex = start + index + 1;

      return `
        <article class="question-card">
          <div class="question-meta">
            <span class="quiz-index">Q${displayIndex}</span>
            <span class="question-category">${question.category}</span>
          </div>
          <h3>${renderRichText(question.prompt)}</h3>
          <p class="quiz-rule">출처: ${question.source}</p>
          <div class="quiz-options">
            ${question.choices
              .map(
                (choice, choiceIndex) => `
                  <button
                    class="${getOptionClass(question, choiceIndex, response)}"
                    type="button"
                    data-study-answer="true"
                    data-question-id="${question.id}"
                    data-choice-index="${choiceIndex}"
                  >
                    ${plainTextFromRich(choice)}
                  </button>
                `,
              )
              .join("")}
          </div>
          ${getStudyFeedback(question, response)}
        </article>
      `;
    })
    .join("");
}

function handleStudyAnswer(questionId, choiceIndex) {
  const question = getQuestionBank().find((item) => item.id === questionId);

  if (!question) {
    return;
  }

  const existing = state.studyAnswers[questionId] || {
    attempts: 0,
    selected: null,
    status: "",
  };

  if (existing.status === "correct" || existing.status === "incorrect") {
    return;
  }

  const isCorrect = Number(choiceIndex) === question.correctIndex;

  if (isCorrect) {
    state.studyAnswers[questionId] = {
      attempts: existing.attempts + 1,
      selected: Number(choiceIndex),
      status: "correct",
    };
  } else if (existing.attempts === 0) {
    state.studyAnswers[questionId] = {
      attempts: 1,
      selected: Number(choiceIndex),
      status: "hint",
    };
  } else {
    state.studyAnswers[questionId] = {
      attempts: existing.attempts + 1,
      selected: Number(choiceIndex),
      status: "incorrect",
    };
  }

  renderStudyQuestions();
}

function shuffled(items) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }

  return copy;
}

function renderExamQuestion() {
  if (!state.exam.active || !state.exam.questions.length) {
    return;
  }

  const question = state.exam.questions[state.exam.index];
  const selected = state.exam.answers[question.id];
  const answeredCount = Object.keys(state.exam.answers).length;

  refs.examProgress.textContent = `${state.exam.index + 1} / ${state.exam.questions.length}`;
  refs.examAnswered.textContent = `${answeredCount}문제 선택`;
  refs.examPrev.disabled = state.exam.index === 0;
  refs.examNext.disabled = state.exam.index === state.exam.questions.length - 1;

  refs.examQuestionCard.innerHTML = `
    <article class="question-card">
      <div class="question-meta">
        <span class="quiz-index">시험</span>
        <span class="question-category">${question.category}</span>
      </div>
      <h3>${renderRichText(question.prompt)}</h3>
      <p class="quiz-rule">출처: ${question.source}</p>
      <div class="quiz-options">
        ${question.choices
          .map(
            (choice, choiceIndex) => `
              <button
                class="quiz-option ${selected === choiceIndex ? "selected" : ""}"
                type="button"
                data-exam-answer="true"
                data-choice-index="${choiceIndex}"
              >
                ${plainTextFromRich(choice)}
              </button>
            `,
          )
          .join("")}
      </div>
    </article>
  `;
}

function startExam() {
  state.exam = {
    active: true,
    index: 0,
    questions: buildExamQuestions(),
    answers: {},
  };

  refs.examIntro.hidden = true;
  refs.examShell.hidden = false;
  refs.examResult.hidden = true;
  refs.examResult.innerHTML = "";
  renderExamQuestion();
}

function submitExam() {
  if (!state.exam.questions.length) {
    return;
  }

  const results = state.exam.questions.map((question) => {
    const selected = state.exam.answers[question.id];
    const correct = selected === question.correctIndex;
    return { question, selected, correct };
  });

  const score = results.filter((result) => result.correct).length;
  const percentage = Math.round((score / results.length) * 100);
  let comment = "전체 흐름을 꽤 잘 잡았습니다.";

  if (percentage < 50) {
    comment = "본문을 한 번 더 읽고 큰 흐름부터 다시 잡는 편이 좋습니다.";
  } else if (percentage < 80) {
    comment = "핵심은 이해했지만 금융 전염과 정책 파트 복습이 도움이 됩니다.";
  }

  refs.examShell.hidden = true;
  refs.examResult.hidden = false;
  refs.examResult.innerHTML = `
    <div class="exam-result-card">
      <p class="panel-kicker">Result</p>
      <h3>${score} / ${results.length}점 · ${percentage}%</h3>
      <p>${comment}</p>
      <button class="button primary" type="button" data-restart-exam="true">시험 다시 만들기</button>
    </div>
    <div class="exam-review-list">
      ${results
        .map(
          ({ question, selected, correct }, index) => `
            <article class="review-card ${correct ? "correct" : "incorrect"}">
              <p class="panel-kicker">Review ${index + 1}</p>
              <h4>${renderRichText(question.prompt)}</h4>
              <p><strong>내 답:</strong> ${
                selected === undefined ? "선택 안 함" : plainTextFromRich(question.choices[selected])
              }</p>
              <p><strong>정답:</strong> ${plainTextFromRich(question.choices[question.correctIndex])}</p>
              <p>${renderRichText(question.explanation)}</p>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function activateMode(mode) {
  state.mode = mode;
  refs.modeStudy.classList.toggle("active", mode === "study");
  refs.modeExam.classList.toggle("active", mode === "exam");
  refs.studyPanel.classList.toggle("active", mode === "study");
  refs.examPanel.classList.toggle("active", mode === "exam");
}

function syncBodyLock() {
  const shouldLock =
    !refs.termModal.hidden || !refs.settingsPanel.hidden || !refs.mobileSheet.hidden;
  document.body.style.overflow = shouldLock ? "hidden" : "";
}

function refreshReadingLayout() {
  renderOutline();
  renderArticle();
  renderContext();
  setupRevealObserver();
  setupOutlineHighlight();
  setupDraggableOutline();
}

function updateMobileModeUI() {
  document.body.classList.toggle("mobile-reading-mode", state.mobileMode);
  refs.mobileModeToggle.classList.toggle("active", state.mobileMode);
  refs.mobileModeToggle.setAttribute("aria-pressed", String(state.mobileMode));
  refs.mobileModeToggle.textContent = state.mobileMode ? "기본 보기" : "모바일 보기";
}

function openMobileSheet(panel) {
  if (!state.mobileMode) {
    return;
  }

  state.mobileSheet = panel;
  refs.mobileSheet.hidden = false;
  refs.mobileSheetOutlinePanel.hidden = panel !== "outline";
  refs.mobileSheetFontPanel.hidden = panel !== "font";

  if (panel === "outline") {
    refs.mobileSheetKicker.textContent = "Mobile Reading";
    refs.mobileSheetTitle.textContent = "목록";
  } else {
    refs.mobileSheetKicker.textContent = "Reading Size";
    refs.mobileSheetTitle.textContent = "글자 크기";
  }

  syncBodyLock();
}

function closeMobileSheet() {
  state.mobileSheet = null;
  refs.mobileSheet.hidden = true;
  refs.mobileSheetOutlinePanel.hidden = true;
  refs.mobileSheetFontPanel.hidden = true;
  syncBodyLock();
}

function openMobileSectionFromLink(sectionId) {
  const sectionCard = document.getElementById(sectionId);

  if (!(sectionCard instanceof HTMLElement)) {
    closeMobileSheet();
    return;
  }

  const parentGroup = sectionCard.closest(".mobile-reading-card");

  if (parentGroup instanceof HTMLDetailsElement) {
    parentGroup.open = true;
  }

  if (sectionCard instanceof HTMLDetailsElement) {
    sectionCard.open = true;
  }

  closeMobileSheet();

  if (window.location.hash !== `#${sectionId}`) {
    window.history.replaceState(null, "", `#${sectionId}`);
  }

  window.requestAnimationFrame(() => {
    sectionCard.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

function applyMobileMode(enabled, { persist = true, focusSectionId = null } = {}) {
  const nextMode = Boolean(enabled);
  const previousScroll = window.scrollY;

  if (state.mobileMode === nextMode) {
    if (focusSectionId && state.mobileMode) {
      openMobileSectionFromLink(focusSectionId);
    }
    return;
  }

  state.mobileMode = nextMode;

  if (!nextMode) {
    closeMobileSheet();
  }

  updateMobileModeUI();
  refreshReadingLayout();

  if (persist) {
    window.localStorage.setItem(MOBILE_MODE_STORAGE_KEY, nextMode ? "true" : "false");
  }

  window.requestAnimationFrame(() => {
    window.scrollTo({
      top: previousScroll,
      behavior: "auto",
    });

    if (focusSectionId && nextMode) {
      openMobileSectionFromLink(focusSectionId);
    }
  });
}

function restoreMobileMode() {
  state.mobileMode = window.localStorage.getItem(MOBILE_MODE_STORAGE_KEY) === "true";
  updateMobileModeUI();
}

function openTerm(termLabel) {
  const entry = termDictionary[normalizeTerm(termLabel)];

  if (!entry) {
    return;
  }

  refs.termTitle.textContent = entry.display;
  refs.termSummary.textContent = entry.summary;
  refs.termEasy.textContent = `쉽게 말해: ${entry.easy}`;
  refs.termWhy.textContent = `이 글에서 왜 중요한가: ${entry.why}`;
  refs.termModal.hidden = false;
  syncBodyLock();
}

function closeTerm() {
  refs.termModal.hidden = true;
  syncBodyLock();
}

function applyFontScale(value) {
  const numericValue = clampNumber(value, MIN_FONT_SCALE, MAX_FONT_SCALE);
  const scale = numericValue / 100;
  document.documentElement.style.setProperty("--font-scale", scale.toFixed(2));
  refs.fontSizeRange.value = String(numericValue);
  refs.mobileFontSizeRange.value = String(numericValue);
  refs.fontSizeValue.textContent = `${numericValue}%`;
  refs.mobileFontSizeValue.textContent = `${numericValue}%`;
  window.localStorage.setItem(FONT_SCALE_STORAGE_KEY, String(numericValue));
}

function restoreFontScale() {
  const storedValue = clampNumber(
    window.localStorage.getItem(FONT_SCALE_STORAGE_KEY) || 100,
    MIN_FONT_SCALE,
    MAX_FONT_SCALE,
  );
  applyFontScale(storedValue);
}

function openSettings() {
  closeMobileSheet();
  refs.settingsPanel.hidden = false;
  syncBodyLock();
}

function closeSettings() {
  refs.settingsPanel.hidden = true;
  syncBodyLock();
}

function setupRevealObserver() {
  const nodes = document.querySelectorAll("[data-reveal]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("will-reveal");
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 },
  );

  nodes.forEach((node) => {
    const rect = node.getBoundingClientRect();
    const inInitialView = rect.top < window.innerHeight * 0.92;

    if (inInitialView) {
      node.classList.remove("will-reveal");
      node.classList.add("is-visible");
      return;
    }

    node.classList.remove("is-visible");
    node.classList.add("will-reveal");
    observer.observe(node);
  });
}

function setupOutlineHighlight() {
  const links = Array.from(document.querySelectorAll("[data-outline-link]"));
  const sectionMap = new Map(
    getFlatSections().map((section) => [section.id, document.getElementById(section.id)]),
  );
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        links.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("data-outline-link") === entry.target.id,
          );
        });
      });
    },
    {
      rootMargin: "-10% 0px -65% 0px",
      threshold: 0.1,
    },
  );

  sectionMap.forEach((node) => {
    if (node) {
      observer.observe(node);
    }
  });
}

function setupScrollProgress() {
  const update = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollHeight > 0 ? Math.min(1, scrollTop / scrollHeight) : 0;
    refs.scrollBar.style.width = `${ratio * 100}%`;
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
}

function setupDraggableOutline() {
  const outline = refs.articleOutline;

  if (!outline || outline.dataset.dragScrollBound === "true") {
    return;
  }

  outline.dataset.dragScrollBound = "true";

  let pointerId = null;
  let startX = 0;
  let startY = 0;
  let startLeft = 0;
  let startTop = 0;
  let hasDragged = false;
  let suppressClick = false;

  outline.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "touch" || event.button !== 0) {
      return;
    }

    pointerId = event.pointerId;
    startX = event.clientX;
    startY = event.clientY;
    startLeft = outline.scrollLeft;
    startTop = outline.scrollTop;
    hasDragged = false;
    outline.classList.add("dragging");
    outline.setPointerCapture?.(event.pointerId);
  });

  outline.addEventListener("pointermove", (event) => {
    if (pointerId !== event.pointerId) {
      return;
    }

    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;

    if (!hasDragged && Math.abs(deltaX) + Math.abs(deltaY) > 6) {
      hasDragged = true;
    }

    if (!hasDragged) {
      return;
    }

    outline.scrollLeft = startLeft - deltaX;
    outline.scrollTop = startTop - deltaY;
    event.preventDefault();
  });

  const endDrag = (event) => {
    if (pointerId !== event.pointerId) {
      return;
    }

    if (hasDragged) {
      suppressClick = true;
      window.setTimeout(() => {
        suppressClick = false;
      }, 0);
    }

    outline.classList.remove("dragging");
    outline.releasePointerCapture?.(event.pointerId);
    pointerId = null;
  };

  outline.addEventListener("pointerup", endDrag);
  outline.addEventListener("pointercancel", endDrag);
  outline.addEventListener("lostpointercapture", () => {
    outline.classList.remove("dragging");
    pointerId = null;
  });
  outline.addEventListener(
    "click",
    (event) => {
      if (!suppressClick) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      suppressClick = false;
    },
    true,
  );
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    const termButton = target.closest("[data-term]");
    if (termButton) {
      openTerm(termButton.getAttribute("data-term"));
      return;
    }

    const studyAnswer = target.closest("[data-study-answer]");
    if (studyAnswer) {
      handleStudyAnswer(
        studyAnswer.getAttribute("data-question-id"),
        studyAnswer.getAttribute("data-choice-index"),
      );
      return;
    }

    const examAnswer = target.closest("[data-exam-answer]");
    if (examAnswer) {
      const question = state.exam.questions[state.exam.index];
      if (!question) {
        return;
      }

      state.exam.answers[question.id] = Number(examAnswer.getAttribute("data-choice-index"));
      renderExamQuestion();
      return;
    }

    const filterButton = target.closest("[data-filter]");
    if (filterButton) {
      state.studyFilter = filterButton.getAttribute("data-filter");
      state.studyPage = 0;
      renderCategoryFilters();
      renderStudyQuestions();
      return;
    }

    const outlineLink = target.closest("[data-outline-link]");
    if (outlineLink && state.mobileMode) {
      event.preventDefault();
      openMobileSectionFromLink(outlineLink.getAttribute("data-outline-link"));
      return;
    }

    if (target.closest("[data-close-term='true']")) {
      closeTerm();
      return;
    }

    if (target.closest("[data-close-settings='true']")) {
      closeSettings();
      return;
    }

    if (target.closest("[data-close-mobile-sheet='true']")) {
      closeMobileSheet();
      return;
    }

    if (target.closest("[data-restart-exam='true']")) {
      startExam();
    }
  });

  refs.modeStudy.addEventListener("click", () => activateMode("study"));
  refs.modeExam.addEventListener("click", () => activateMode("exam"));

  refs.studyPrev.addEventListener("click", () => {
    state.studyPage = Math.max(0, state.studyPage - 1);
    renderStudyQuestions();
  });

  refs.studyNext.addEventListener("click", () => {
    const filtered = getFilteredQuestions();
    const totalPages = Math.max(1, Math.ceil(filtered.length / state.studyPageSize));
    state.studyPage = Math.min(totalPages - 1, state.studyPage + 1);
    renderStudyQuestions();
  });

  refs.startExam.addEventListener("click", startExam);
  refs.examPrev.addEventListener("click", () => {
    state.exam.index = Math.max(0, state.exam.index - 1);
    renderExamQuestion();
  });

  refs.examNext.addEventListener("click", () => {
    state.exam.index = Math.min(state.exam.questions.length - 1, state.exam.index + 1);
    renderExamQuestion();
  });

  refs.examSubmit.addEventListener("click", submitExam);
  refs.mobileModeToggle.addEventListener("click", () => applyMobileMode(!state.mobileMode));
  refs.mobileOutlineToggle.addEventListener("click", () => openMobileSheet("outline"));
  refs.mobileFontToggle.addEventListener("click", () => openMobileSheet("font"));
  refs.mobileSheetClose.addEventListener("click", closeMobileSheet);
  refs.settingsToggle.addEventListener("click", openSettings);
  refs.settingsClose.addEventListener("click", closeSettings);
  refs.termClose.addEventListener("click", closeTerm);
  refs.fontSizeRange.addEventListener("input", (event) => {
    const nextValue = event.target instanceof HTMLInputElement ? event.target.value : "100";
    applyFontScale(nextValue);
  });
  refs.fontSizeReset.addEventListener("click", () => applyFontScale(100));
  refs.mobileFontSizeRange.addEventListener("input", (event) => {
    const nextValue = event.target instanceof HTMLInputElement ? event.target.value : "100";
    applyFontScale(nextValue);
  });
  refs.mobileFontDecrease.addEventListener("click", () =>
    applyFontScale(Number(refs.mobileFontSizeRange.value) - 5),
  );
  refs.mobileFontIncrease.addEventListener("click", () =>
    applyFontScale(Number(refs.mobileFontSizeRange.value) + 5),
  );
  refs.mobileFontReset.addEventListener("click", () => applyFontScale(100));

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }

    if (!refs.mobileSheet.hidden) {
      closeMobileSheet();
    }

    if (!refs.termModal.hidden) {
      closeTerm();
    }

    if (!refs.settingsPanel.hidden) {
      closeSettings();
    }
  });
}

function init() {
  renderOverview();
  restoreMobileMode();
  refreshReadingLayout();
  renderCategoryFilters();
  renderStudyQuestions();
  restoreFontScale();
  bindEvents();
  setupScrollProgress();
}

const termDictionary = Object.fromEntries(
  termEntries.map((entry) => [
    entry.label.toLowerCase(),
    {
      ...entry,
      display: getTermDisplay(entry.label),
    },
  ]),
);

function getBaseKoreanLabel(display) {
  const match = String(display).match(/^(.+?)\s*\(/);
  return match ? match[1].trim() : String(display).trim();
}

function getTermAliases(entry) {
  return Array.from(
    new Set([entry.label, getBaseKoreanLabel(entry.display), ...(entry.aliases || [])].filter(Boolean)),
  );
}

const autoLinkTermEntries = termEntries
  .map((entry) => termDictionary[normalizeTerm(entry.label)])
  .flatMap((entry) =>
    getTermAliases(entry).map((alias) => ({
      alias,
      key: normalizeTerm(alias),
      label: entry.label,
    })),
  )
  .filter((item, index, list) => list.findIndex((candidate) => candidate.key === item.key) === index)
  .sort((left, right) => right.alias.length - left.alias.length);

const termAliasLookup = new Map(autoLinkTermEntries.map((item) => [item.key, item.label]));
const autoLinkPattern = autoLinkTermEntries.length
  ? new RegExp(autoLinkTermEntries.map((item) => escapeRegex(item.alias)).join("|"), "gi")
  : null;

const overview = {
  paragraphs: [
    '이 글의 출발점은 단순한 기술 공포가 아닙니다. 핵심 질문은 <strong>"AI가 실패해서가 아니라 너무 잘돼서 인간 소득과 소비를 흔들 수 있는가?"</strong> 입니다. 그래서 위기의 중심도 기술 실패가 아니라 분배와 적응 속도 차이입니다.',
    '읽는 방법도 단순합니다. 아래 본문은 원문 구조를 그대로 따라가면서, 각 파트마다 쉬운 말로 다시 풀고 왜 중요한지까지 붙였습니다. 이해가 필요한 용어는 본문 안에서 바로 눌러 볼 수 있고, 오른쪽 위 <strong>Aa</strong> 버튼으로 전체 글자 크기도 바꿀 수 있습니다.',
    '가장 짧게 요약하면 이렇습니다. <strong>AI 성능 점프 → 기업 인건비 축소 → 사무직 수요 약화 → 소비 둔화 → 금융시장 재평가 → 정책 대응 압박</strong>. 이 순서를 머리에 넣고 읽으면 글 전체가 훨씬 덜 어렵습니다.',
  ],
  flow: [
    "AI 성능 점프",
    "기업 비용 절감",
    "사무직 수요 약화",
    "소비 둔화",
    "금융 재평가",
    "정책 대응 경쟁",
  ],
};

const articleGroups = [
  {
    id: "group-frame",
    label: "1부",
    quizCategory: "큰 그림",
    title: "큰 그림부터 읽기",
    intro: "처음 두 파트는 이 글이 무엇을 경고하는지, 그리고 왜 단순한 기술주 이야기로 끝나지 않는지를 깔아 줍니다.",
    sections: [
      {
        id: "preface",
        originalTitle: "Preface",
        title: "왜 이런 시나리오를 상상하나",
        category: "큰 그림",
        oneLine:
          "이 글은 [[left-tail risk]]를 다루는 글입니다. 가장 평범한 전망이 아니라, 시장이 거의 준비하지 않은 큰 충격을 먼저 점검해 보자는 뜻입니다.",
        easy:
          "쉽게 말해 'AI가 너무 잘되면 오히려 사람 경제가 먼저 흔들릴 수도 있지 않나?'를 끝까지 밀어 보는 글입니다.",
        impact:
          "그래서 질문이 바뀝니다. AI가 성공하느냐 실패하느냐가 아니라, 성공했을 때 이익이 누구에게 먼저 가고 누가 늦게 받느냐가 중심이 됩니다.",
        trap:
          "이 파트를 읽을 때 흔한 오해는 '곧 세상이 끝난다'는 예언으로 받아들이는 것입니다. 원문은 확정 예언이 아니라 스트레스 테스트에 더 가깝습니다.",
        paragraphs: [
          "Preface는 독자를 겁주기보다 프레임을 바꿉니다. 보통 사람들은 기술 위기를 말하면 'AI 거품이 꺼진다'를 먼저 떠올리지만, 여기서는 정반대입니다. 기술은 실제로 잘 되는데 사회가 그 속도를 따라가지 못하는 경우를 묻습니다.",
          "이 시점부터 주인공은 AI 자체가 아니라 경제 구조가 됩니다. 회사는 더 효율적으로 돌아가는데 사람 소득은 늦게 반영되거나 아예 줄어들면, 표면적으로는 혁신이지만 생활 쪽에서는 충격이 될 수 있습니다.",
          "원문은 이런 위험을 굳이 지금 상상해야 하는 이유도 말합니다. 시장은 흔한 위험에는 어느 정도 대비하지만, 준비되지 않은 꼬리 위험에는 한꺼번에 반응합니다. 그래서 미리 논리를 따라가 보는 것이 중요합니다.",
          "즉 첫 파트의 역할은 '이 글은 기술 비관론이 아니라 분배 지연 시나리오다'라는 점을 분명히 하는 데 있습니다.",
        ],
        expand:
          "이제부터 각 장은 같은 질문을 다른 층에서 반복합니다. 소프트웨어, 중개, 노동시장, 금융, 정책이 각각 어떻게 같은 충격을 받는지 이어서 보여 줍니다.",
        takeaways: [
          "출발점은 AI 실패가 아니라 AI 성공의 부작용입니다.",
          "핵심 변수는 기술보다 분배와 적응 속도입니다.",
          "원문 전체는 준비되지 않은 큰 하방 시나리오를 점검하는 구조입니다.",
        ],
      },
      {
        id: "macro-memo",
        originalTitle: "Macro Memo",
        title: "좋은 생산성과 나쁜 체감 경기가 동시에 오는 그림",
        category: "큰 그림",
        oneLine:
          "생산성과 기업 이익은 좋아지는데 사람 지갑은 약해지면 [[Ghost GDP]]가 나타나고, 결국 [[velocity of money]]가 식으면서 체감 경기가 나빠질 수 있습니다.",
        easy:
          "회사 실적과 데이터센터 투자는 늘어도 월급과 소비가 덜 살아나면 숫자와 현실이 따로 갈 수 있다는 뜻입니다.",
        impact:
          "그래서 GDP 같은 총량 숫자만 보면 괜찮아 보여도, 실제 소비와 고용은 훨씬 먼저 흔들릴 수 있습니다. 이 괴리가 시장 충격을 키웁니다.",
        trap:
          "여기서 빠지기 쉬운 오해는 '생산성이 좋아지면 자동으로 모두 좋아진다'는 생각입니다. 원문은 분배 경로가 막히면 그 자동 연결이 깨진다고 봅니다.",
        paragraphs: [
          "Macro Memo는 아예 숫자로 시작합니다. 실업률 10.2%, S&P 이익 -38% 같은 가정은 극적이지만, 핵심은 숫자 자체보다 왜 그런 숫자가 가능한지를 설명하는 구조에 있습니다.",
          "원문이 그리는 그림은 이렇습니다. 기업은 사람 대신 AI와 서버에 돈을 더 쓰며 마진을 지키려고 합니다. 이 과정에서 생산성은 높아질 수 있습니다. 하지만 그 돈이 [[white-collar]] 노동자의 급여나 가계 소비로 충분히 돌아오지 않으면 생활 경제는 약해집니다.",
          "이때 등장하는 개념이 [[Ghost GDP]]입니다. 생산은 되는데 체감은 비어 있는 상태입니다. 돈이 가계 대신 자본과 컴퓨트 설비에 머물면 [[velocity of money]]도 느려지고, 소비 중심 경제는 생각보다 빨리 식을 수 있습니다.",
          "요약하면 이 장은 '좋은 기술과 좋은 경기'를 같은 말로 취급하면 안 된다는 경고입니다. 생산성의 승자와 소비의 주체가 서로 다를 수 있기 때문입니다.",
        ],
        expand:
          "아주 쉽게 바꾸면 이렇습니다. 공장은 더 좋아졌는데 동네 가게 매출은 약해지는 그림입니다. 원문은 바로 이 괴리를 뒤에서 계속 추적합니다.",
        takeaways: [
          "총량 숫자와 가계 체감은 다르게 움직일 수 있습니다.",
          "생산성 개선이 자동으로 소비 회복을 뜻하지는 않습니다.",
          "돈이 사람을 거치지 않으면 소비와 고용은 예상보다 빨리 식을 수 있습니다.",
        ],
      },
    ],
  },
  {
    id: "group-disruption",
    label: "2부",
    quizCategory: "사업 붕괴",
    title: "사업 모델이 먼저 흔들리는 자리",
    intro: "원문은 위기의 출발점으로 소프트웨어와 중개 비즈니스를 봅니다. 둘 다 사람의 귀찮음과 조직의 마찰을 먹고 자라 온 구조이기 때문입니다.",
    sections: [
      {
        id: "how-it-started",
        originalTitle: "How It Started",
        title: "SaaS 가격표가 흔들리기 시작한 순간",
        category: "사업 붕괴",
        oneLine:
          "핵심 시작점은 [[agentic coding]]입니다. 기업이 '직접 만들 수 있는데 왜 이렇게 비싼 툴을 계속 사지?'라고 묻기 시작하면 SaaS의 가격 권력이 흔들립니다.",
        easy:
          "예전에는 비싼 소프트웨어를 사는 수밖에 없던 기능도, 이제는 내부 팀과 AI로 꽤 많은 부분을 대체할 수 있게 되었다는 뜻입니다.",
        impact:
          "이 변화는 단순히 몇 개 앱이 사라지는 문제가 아니라, 기업 소프트웨어 예산과 좌석 수, 재계약 조건 전체를 다시 쓰게 만듭니다.",
        trap:
          "여기서 흔한 오해는 '내일부터 SaaS가 전부 0이 된다'는 식으로 보는 것입니다. 원문은 소멸보다 먼저 가격 협상력과 계약 구조가 무너진다고 봅니다.",
        paragraphs: [
          "원문은 2025년 후반을 전환점으로 잡습니다. [[agentic coding]]이 눈에 띄게 좋아지면서, 기능 하나를 위해 전용 SaaS를 통째로 사야 했던 과거의 논리가 약해지기 시작합니다.",
          "이 변화가 무서운 이유는 기술팀만의 고민이 아니라는 데 있습니다. [[CIO]]와 [[procurement]] 부서가 재계약 시즌마다 '비슷한 결과를 더 싸게 만들 수 있지 않나?'라고 묻기 시작하면 판매자의 힘이 빠집니다.",
          "원문은 long-tail SaaS만 위험하다고 보지 않습니다. [[systems of record]]처럼 깊게 박힌 제품도 사용 좌석과 확장 계약이 줄면 매출이 약해질 수 있습니다. 이때 [[ACV]] 둔화가 먼저 보이기 시작합니다.",
          "여기에 [[reflexivity]]가 붙습니다. 고객이 사람을 줄이면 라이선스 수가 줄고, 매출이 약해진 판매사는 다시 비용을 줄이며 AI를 더 공격적으로 도입합니다. 각 회사 입장에서는 합리적이지만 합치면 충격이 됩니다.",
        ],
        expand:
          "아주 쉽게 말하면 'AI가 개발자를 대신한다'보다 'AI 때문에 소프트웨어 구매 담당자의 계산식이 바뀐다'가 더 직접적인 포인트입니다. 가격표가 흔들리면 산업 전체가 흔들립니다.",
        takeaways: [
          "AI 코딩 발전은 내부 구축 대 외부 구매 비교식을 바꿉니다.",
          "소프트웨어 위기는 제품력보다 가격 권력 약화에서 먼저 옵니다.",
          "재계약, 좌석 수, 업셀 구조가 같이 흔들리면 충격이 커집니다.",
        ],
      },
      {
        id: "friction-zero",
        originalTitle: "When Friction Went to Zero",
        title: "귀찮음을 먹고 살던 층이 약해지는 방식",
        category: "사업 붕괴",
        oneLine:
          "[[friction]]이 사라지기 시작하면 [[intermediation]]과 [[habitual intermediation]]에 기대던 사업 모델이 약해집니다.",
        easy:
          "사람은 귀찮아서 중간업자에게 맡기지만, AI 에이전트는 쉬지 않고 비교하고 실행하니 중간 수수료를 못 참기 시작한다는 뜻입니다.",
        impact:
          "그래서 충격은 소프트웨어를 넘어 배달, 예약, 여행, 법률 보조, 결제 네트워크처럼 중개와 연결 위에 선 산업까지 번질 수 있습니다.",
        trap:
          "오해하기 쉬운 점은 인간 관계의 가치가 완전히 사라진다고 보는 것입니다. 원문이 약하다고 말하는 것은 정서적 관계가 아니라 '귀찮아서 그냥 내던 마진'입니다.",
        paragraphs: [
          "이 장에서 원문은 AI 에이전트를 단순 챗봇이 아니라 행동 주체로 봅니다. 한 번 목표를 주면 가격 비교, 재협상, 취소, 재예약까지 이어서 해 낼 수 있다면 사람이 느끼는 귀찮음이 크게 줄어듭니다.",
          "귀찮음이 줄면 [[intermediation]] 층이 흔들립니다. 그동안은 비교가 어렵고 시간이 많이 들어서 중간 플랫폼이 강했지만, 에이전트는 그 비용을 거의 0에 가깝게 낮출 수 있습니다.",
          "원문은 이것을 [[habitual intermediation]]라고 부릅니다. 원래 쓰던 앱이라서, 기본값이라서, 바꾸기 귀찮아서 계속 내던 수수료입니다. 이런 구조의 [[moat]]는 생각보다 약할 수 있습니다. [[customer lifetime value]]도 덜 안정적으로 보이기 시작합니다.",
          "마지막으로 이 논리는 결제 쪽으로도 갑니다. 에이전트가 가장 싼 결제 경로를 고른다면 [[interchange]]가 압박받고, 더 싸고 빠른 정산 수단인 [[stablecoin]]이 부상할 수 있습니다. 그래서 원문은 이를 서비스 이야기보다 [[plumbing story]]에 가깝다고 봅니다.",
        ],
        expand:
          "한 줄로 줄이면 '사람의 귀찮음이 만들어 준 마진'이 AI 앞에서 무너지기 시작하는 장입니다. 눈에 보이는 앱보다 뒤의 수수료 층이 먼저 흔들릴 수 있습니다.",
        takeaways: [
          "AI는 사람 대신 쇼핑하고 비교하고 재협상할 수 있습니다.",
          "중개 수익 중 상당수는 실제 가치보다 마찰에서 나왔을 수 있습니다.",
          "결제 인프라와 수수료 체계도 함께 재평가될 수 있습니다.",
        ],
      },
    ],
  },
  {
    id: "group-macro",
    label: "3부",
    quizCategory: "실물경제",
    title: "산업 문제에서 경기 문제로 번지는 구간",
    intro: "원문은 여기서 시야를 넓힙니다. 이게 기술 업종 내부의 일이 아니라 미국 소비와 노동시장 전체를 건드릴 수 있다고 주장합니다.",
    sections: [
      {
        id: "systemic-risk",
        originalTitle: "From Sector Risk to Systemic Risk",
        title: "업종 리스크가 시스템 리스크가 되는 이유",
        category: "실물경제",
        oneLine:
          "미국은 [[white-collar]] 서비스 경제 비중이 큰 나라라서, AI 충격은 특정 기술 섹터 문제가 아니라 시스템 문제로 커질 수 있습니다.",
        easy:
          "사무직이 미국 중산층 소비의 큰 축인데, 그 수요가 약해지면 기술주만이 아니라 식당, 여행, 주택, 금융까지 같이 흔들릴 수 있다는 뜻입니다.",
        impact:
          "원문은 [[JOLTS]] 같은 지표로 사무직 채용이 식고 있다고 보고, 사람 운영비가 [[OpEx substitution]]으로 AI 비용으로 바뀌는 동안 [[hyperscaler]]만 강해질 수 있다고 설명합니다.",
        trap:
          "흔한 오해는 '예전 자동화도 결국 새 일자리를 만들었으니 이번에도 똑같다'는 생각입니다. 원문은 이번에는 새로 생기는 인지 노동도 AI가 바로 먹을 수 있다는 점이 다르다고 봅니다.",
        paragraphs: [
          "이 장의 핵심은 범위의 확대입니다. 처음엔 소프트웨어 업체 문제처럼 보였던 일이 왜 미국 경제 전체 문제로 커질 수 있는지 설명합니다. 이유는 미국이 제조업보다 서비스와 사무직 소득에 크게 기대는 구조이기 때문입니다.",
          "원문은 [[JOLTS]]와 구인 플랫폼 흐름을 함께 보며 사무직 채용 수요가 약해지고 있다고 말합니다. 만약 AI가 신규 채용을 대체하면 실업은 느리게 올라가더라도 임금 협상력은 먼저 약해질 수 있습니다.",
          "기업 지출 안에서도 이상한 분화가 나타납니다. 사람 관련 운영비는 줄지만 AI와 클라우드 비용은 느는 [[OpEx substitution]]이 일어나면, 일반 경기는 식는데 [[hyperscaler]]와 데이터센터 관련 수요만 강하게 남는 장면이 나옵니다.",
          "원문은 이 충격이 미국만의 문제가 아니라고도 봅니다. 서비스 수출과 외주 비중이 큰 나라들은 [[current account surplus]]가 약해질 수 있고, 심하면 [[IMF]]급 논의가 필요한 국가까지 나올 수 있다고 봅니다.",
        ],
        expand:
          "쉽게 말하면 '사무직이 흔들리면 미국은 그냥 기술 뉴스로 끝나지 않는다'는 장입니다. 소비의 큰 기둥이 바로 그 계층이기 때문입니다.",
        takeaways: [
          "미국 경제는 사무직 소득과 소비 의존도가 높습니다.",
          "채용 둔화는 실업 급등보다 먼저 나타날 수 있습니다.",
          "AI 지출만 버티는 비정상적 경기 조합이 가능하다고 봅니다.",
        ],
      },
      {
        id: "displacement-spiral",
        originalTitle: "The Intelligence Displacement Spiral",
        title: "밀려난 사람이 다른 시장까지 눌러 버리는 고리",
        category: "실물경제",
        oneLine:
          "사무직에서 밀려난 사람이 더 낮은 임금의 일자리로 내려오면 임금 압박이 넓게 번지고, 결국 [[discretionary spending]]부터 먼저 꺼질 수 있습니다.",
        easy:
          "직장을 잃은 사람만 힘든 게 아니라, 아직 남아 있는 사람도 불안해서 덜 쓰기 시작하면 경제가 더 빨리 식는다는 뜻입니다.",
        impact:
          "원문은 고소득층 소비가 전체에서 차지하는 비중이 크기 때문에, 소수의 고연봉 일자리 약화만으로도 체감 경기가 크게 나빠질 수 있다고 봅니다.",
        trap:
          "오해하기 쉬운 점은 '실업률이 아직 안 뛰었으니 괜찮다'는 생각입니다. 원문은 저축과 퇴직금 때문에 충격이 늦게 보일 뿐, 그 사이 소비와 임금이 먼저 눌릴 수 있다고 봅니다.",
        paragraphs: [
          "이 장은 실업률 숫자보다 더 현실적인 질문을 던집니다. 잘리면 그 사람이 사라지는 것이 아니라, 더 낮은 임금의 시장으로 내려와 다른 사람의 임금까지 누를 수 있다는 것입니다.",
          "예를 들어 고연봉 분석가가 일을 잃고 계약직, 프리랜서, 상담, 영업 지원 같은 자리로 내려오면, 그 아래 시장의 공급도 갑자기 많아집니다. 그러면 새로 취업한 사람도 예전만큼 벌기 어려워집니다.",
          "동시에 아직 직장을 유지한 사람도 지갑을 닫습니다. 원문은 이런 방어적 소비 축소가 특히 [[discretionary spending]]에서 먼저 나타난다고 봅니다. 여행, 외식, 업그레이드, 명품, 리모델링 같은 항목이 가장 빨리 줄어듭니다.",
          "그래서 경기 둔화는 한 번에 폭발하기보다 층층이 내려오는 느낌으로 올 수 있습니다. 원문이 2027년 무렵 경기침체를 말하는 이유도 이 지연 효과 때문입니다.",
        ],
        expand:
          "아주 쉽게 말하면 '해고된 사람의 문제'가 아니라 '해고를 본 사람 모두의 문제'로 번지는 장입니다. 불안은 소비를 줄이고, 소비 둔화는 또 다른 해고를 부릅니다.",
        takeaways: [
          "소득 하향 이동은 한 사람 문제가 아니라 임금 시장 전체를 누를 수 있습니다.",
          "남아 있는 사람의 방어적 소비 축소도 매우 중요합니다.",
          "충격은 늦게 보일 수 있지만 그만큼 사전에 읽기 어렵습니다.",
        ],
      },
    ],
  },
  {
    id: "group-finance",
    label: "4부",
    quizCategory: "금융 전염",
    title: "노동 충격이 금융 구조를 건드리는 구간",
    intro: "실물경제가 약해지면 결국 금융이 그 변화를 가격에 반영합니다. 원문은 소프트웨어 현금흐름과 가계 대출이 가장 민감한 고리라고 봅니다.",
    sections: [
      {
        id: "daisy-chain",
        originalTitle: "The Daisy Chain of Correlated Bets",
        title: "서로 다른 베팅처럼 보였지만 사실 한 줄로 연결된 베팅",
        category: "금융 전염",
        oneLine:
          "[[private credit]]와 소프트웨어 금융은 '반복 매출은 안정적이다'라는 가정 위에 많이 쌓였는데, AI는 그 안정성 자체를 흔들 수 있습니다.",
        easy:
          "겉으로는 여러 대출과 투자처럼 보여도, 속을 보면 모두 SaaS 현금흐름이 계속 안전할 것이라는 같은 믿음에 기대고 있었다는 뜻입니다.",
        impact:
          "그래서 성장 둔화가 시작되면 [[ARR]], [[EBITDA]], [[debt covenant]] 같은 숫자가 같이 흔들리고, 뒤에서는 [[annuity]] 자금과 보험 자금까지 영향을 받을 수 있습니다.",
        trap:
          "많이 하는 오해는 '닫힌 펀드고 장기 자본이니 괜찮다'는 생각입니다. [[closed-end vehicle]]나 [[permanent capital]]은 환매 압박을 늦출 뿐 손실을 없애지는 못합니다.",
        paragraphs: [
          "이 장은 금융의 연결고리를 설명합니다. SaaS 기업 가치가 흔들리면 상장주만 빠지는 것이 아니라, [[leveraged buyout]] 인수금융과 [[private credit]] 대출도 재평가될 수 있습니다.",
          "원문은 특히 '반복 매출은 안전하다'는 믿음이 문제라고 봅니다. 예전에는 [[ARR]]이 거의 채권처럼 여겨졌지만, AI가 고객 지원, 영업 보조, 개발 도구를 빠르게 대체하면 그 반복성이 생각보다 약해질 수 있습니다.",
          "그러면 기업 가치는 [[EBITDA]]와 성장률 가정이 함께 눌리면서 떨어지고, 대출 계약에 붙은 [[debt covenant]]도 더 자주 건드리게 됩니다. 회계상 평가가 늦게 움직여도 실제 위험은 이미 쌓일 수 있습니다.",
          "게다가 이 위험은 단순한 펀드 안에만 갇혀 있지 않습니다. [[closed-end vehicle]], [[permanent capital]], [[SPV]] 구조가 많아도 실제 돈의 출처를 따라가면 보험과 [[annuity]] 자금이 들어 있을 수 있습니다. 여기에 [[regulatory arbitrage]]와 [[risk-based capital]] 문제가 더해지면 손실 인식이 늦고 복잡해집니다.",
        ],
        expand:
          "핵심은 '다 따로 노는 위험처럼 보였지만 사실 같은 현금흐름에 걸려 있었다'는 점입니다. 줄이 하나 끊기면 다른 줄도 같이 당겨질 수 있습니다.",
        takeaways: [
          "사모대출과 인수금융은 반복 매출 안정성에 많이 기대고 있습니다.",
          "평가가 늦게 움직인다고 위험이 없는 것은 아닙니다.",
          "손실은 그림자 구조를 타고 보험과 장기 자금으로 번질 수 있습니다.",
        ],
      },
      {
        id: "mortgage-question",
        originalTitle: "The Mortgage Question",
        title: "주택담보대출은 정말 안전한가",
        category: "금융 전염",
        oneLine:
          "문제는 2008년처럼 대출이 애초에 나빴느냐가 아니라, [[prime mortgage]] 차주의 미래 소득이 예전만큼 안전하냐는 질문입니다.",
        easy:
          "지금 집담보 대출은 출발할 때는 괜찮았어도, 앞으로 그 사람이 계속 같은 돈을 벌 수 있는지가 흔들리면 대출의 안전성도 다시 봐야 한다는 뜻입니다.",
        impact:
          "원문은 [[HELOC]], 카드 부채, 401k 대출, 그리고 [[debt-to-income ratio]] 악화를 같이 보며 가계가 조용히 압박받을 수 있다고 봅니다.",
        trap:
          "오해하면 안 되는 점은 이것이 2008년식 서브프라임 사기 재현이라는 뜻이 아니라는 것입니다. 원문은 문제를 '현재 대출 품질'보다 '미래 소득 내구성'에 둡니다.",
        paragraphs: [
          "미국의 주택담보대출 시장은 거대합니다. 원문이 이 장을 따로 두는 이유는, 사무직 소득 약화가 결국 가계 자산의 가장 큰 축인 집으로 번질 수 있기 때문입니다.",
          "여기서 중요한 차이는 출발점입니다. 2008년에는 대출 자체가 처음부터 부실한 경우가 많았습니다. 반면 이 글의 시나리오에서는 대출은 발행 당시엔 멀쩡했지만, 차주의 미래 소득 경로가 바뀝니다.",
          "그래서 표면 연체율이 곧바로 튀지 않아도 안심할 수 없습니다. 사람들은 먼저 [[HELOC]]을 더 쓰고, 카드 잔액을 늘리고, 은퇴계좌 대출까지 건드리며 시간을 벌 수 있습니다. 그 과정에서 [[debt-to-income ratio]]는 서서히 나빠집니다.",
          "원문은 금리 인하나 [[QE]] 같은 정책이 와도 이 문제를 완전히 고치지 못한다고 봅니다. 집값과 유동성은 살릴 수 있어도, 인간 지능 노동의 가격이 다시 매겨지는 흐름 자체를 거꾸로 돌리기는 어렵기 때문입니다.",
        ],
        expand:
          "한 문장으로 줄이면 '대출 서류는 안전했지만 차주의 미래가 덜 안전해졌다'는 이야기입니다. 이 차이는 겉으로는 늦게 드러나지만 훨씬 깊을 수 있습니다.",
        takeaways: [
          "이 장의 위험은 대출 출발점보다 미래 소득 불안에 있습니다.",
          "가계는 연체 전에 여러 우회 경로로 버티기 때문에 신호가 늦게 보일 수 있습니다.",
          "유동성 정책만으로는 노동 가치 재조정을 되돌리기 어렵습니다.",
        ],
      },
    ],
  },
  {
    id: "group-policy",
    label: "5부",
    quizCategory: "정책과 결론",
    title: "정책 시간표와 마지막 결론",
    intro: "마지막 두 파트는 결국 시간을 다룹니다. 시장이 재가격되는 속도와 정부가 새 제도를 만드는 속도 중 어느 쪽이 더 빠르냐는 질문입니다.",
    sections: [
      {
        id: "battle-against-time",
        originalTitle: "The Battle Against Time",
        title: "정부가 맞서 싸우는 대상은 경기보다 시간",
        category: "정책",
        oneLine:
          "AI가 인간 소득을 빠르게 압박하면 세금 기반은 약해지고 지원 수요는 늘어나므로, 정책은 경기보다 시간과 먼저 싸워야 합니다.",
        easy:
          "사람 월급에서 세금을 걷던 구조가 약해지는데, 동시에 실업과 전환 지원에는 더 많은 돈이 필요해지는 딜레마라는 뜻입니다.",
        impact:
          "원문은 기존 [[automatic stabilizers]]만으로는 부족하고, [[labor share of GDP]] 하락에 맞는 새 도구가 필요하다고 봅니다. 예로 [[inference compute tax]]나 [[sovereign wealth fund]] 같은 아이디어가 나옵니다.",
        trap:
          "흔한 오해는 좋은 정책 아이디어가 있기만 하면 된다는 생각입니다. 원문은 정책의 내용만큼 실행 속도와 정치적 합의가 중요하다고 강조합니다.",
        paragraphs: [
          "이 장은 두 개의 루프를 동시에 봅니다. 하나는 실물경제 루프이고 다른 하나는 금융 루프입니다. 실업과 소비 둔화가 오면 세수는 줄고, 금융 스트레스가 오면 정부 지출 압박은 더 커집니다.",
          "문제는 기존 제도가 대부분 경기순환형 충격을 상정하고 있다는 데 있습니다. [[automatic stabilizers]]는 일시적 침체에는 유용하지만, 사람이 하던 고부가가치 일이 구조적으로 대체될 때는 속도와 규모가 부족할 수 있습니다.",
          "원문은 그래서 세금 기반 자체를 다시 생각합니다. [[labor share of GDP]]가 내려가면 기존 노동세 중심 국가는 흔들릴 수 있습니다. 그래서 [[inference compute tax]]처럼 기계 연산 쪽에 과세하는 구상이나, AI 인프라 수익을 [[sovereign wealth fund]]처럼 사회가 함께 보유하는 모델이 언급됩니다.",
          "하지만 가장 중요한 단어는 결국 시간입니다. 정치가 늦으면 실물 충격이 금융 충격으로 굳어지고, 한번 굳어진 뒤에는 훨씬 더 비싸게 막아야 합니다.",
        ],
        expand:
          "정리하면 이 장은 '무슨 정책이 맞나?'보다 '그 정책이 제때 나오나?'를 더 무섭게 봅니다. 늦으면 같은 정책도 효과가 훨씬 약해집니다.",
        takeaways: [
          "세금 기반과 지출 수요가 동시에 엇갈릴 수 있습니다.",
          "기존 자동 안정 장치만으로는 구조적 대체를 버티기 어렵습니다.",
          "정책의 정답보다 속도가 먼저 중요할 수 있습니다.",
        ],
      },
      {
        id: "premium-unwind",
        originalTitle: "The Intelligence Premium Unwind",
        title: "마지막 결론: 인간 지능의 가격표가 다시 매겨진다",
        category: "결론",
        oneLine:
          "현대 경제는 인간 사고력의 희소성에 높은 값을 매겨 왔는데, AI는 그 [[intelligence premium]]을 다시 가격 매기기 시작합니다.",
        easy:
          "머리로 하는 일이 귀하고 비쌌던 시대에서, 그 일부가 빠르게 풍부해지는 시대로 넘어가면 연봉과 기업가치 계산도 함께 바뀐다는 뜻입니다.",
        impact:
          "원문은 이것이 곧 문명 붕괴를 뜻한다고 말하지는 않습니다. 다만 새 균형으로 가는 첫 이동이 매우 아플 수 있고, 그래서 지금 읽어 두는 것이 중요하다고 봅니다.",
        trap:
          "오해하지 말아야 할 점은 인간의 가치가 0이 된다는 주장이 아니라는 것입니다. 원문이 말하는 것은 '루틴한 인지 노동의 시장 가격'이 먼저 낮아질 수 있다는 쪽에 가깝습니다.",
        paragraphs: [
          "마지막 장은 앞선 모든 장을 한 문장으로 묶습니다. 지금까지 높은 급여와 높은 밸류에이션의 많은 부분은 희소한 인간 사고력이 비쌌기 때문이었고, AI는 바로 그 희소성을 건드립니다.",
          "이 말은 인간이 쓸모없어진다는 뜻이 아닙니다. 오히려 무엇이 진짜 희소한 인간 능력인지 다시 가려내는 과정에 가깝습니다. 하지만 그 전환기에는 기존 가격표가 먼저 흔들릴 수 있습니다.",
          "원문이 비관만으로 끝나지 않는 이유도 여기에 있습니다. 새로운 균형은 가능할 수 있습니다. 다만 그 균형으로 가는 길에서 고용, 소비, 금융, 정책이 동시에 시험대에 오른다는 것이 문제입니다.",
          "그래서 마지막 분위기는 절망보다 경고에 가깝습니다. 카나리아가 아직 완전히 죽지 않았다는 말은, 아직 시간을 벌 수 있다는 뜻이기도 합니다.",
        ],
        expand:
          "쉽게 요약하면 '머리값이 내려가는 시대의 첫 충격'입니다. 새 질서는 올 수 있지만, 그 사이의 가격 재조정은 결코 가볍지 않을 수 있습니다.",
        takeaways: [
          "희소했던 인지 노동의 가격이 다시 매겨질 수 있습니다.",
          "인간의 가치 전체와 특정 노동 가격은 같은 말이 아닙니다.",
          "결론의 톤은 종말론보다 늦기 전에 대비하라는 경고에 가깝습니다.",
        ],
      },
    ],
  },
];

const sectionDetailNotes = {
  preface: [
    "원문은 처음부터 이 글을 예언이라기보다 [[left-tail risk]]를 점검하는 사고실험으로 둡니다. 즉, 가장 가능성이 큰 미래를 찍기보다 준비가 덜 된 충격을 미리 상상해 보자는 태도입니다.",
    "서술 시점도 중요합니다. 글은 2026년 현재에서 쓰였지만, 형식은 2028년 6월 메모처럼 꾸며져 있어서 '나중에 돌아보니 어디서부터 꼬였는가'를 역추적하게 만듭니다.",
    "핵심 질문은 간단합니다. 'AI에 대한 낙관이 맞아도, 그 성공이 시장에는 오히려 약세 재료가 될 수 있지 않나?' 원문 전체가 이 질문을 한 장씩 밀어붙이는 구조입니다.",
    "그래서 이 글의 적은 AI 실패가 아니라 AI 성공입니다. 능력이 너무 빨리 좋아져서 사람 중심 경제가 적응할 시간을 못 버는 그림을 상정합니다.",
  ],
  "macro-memo": [
    "원문 속 2028년 설정에서는 실업률이 10.2%까지 올라가고, S&P는 2026년 10월 고점 대비 38% 빠진 상태입니다. 그 전에는 S&P 500이 8,000 근처, 나스닥이 30,000 위를 보던 과열 구간도 있었다고 설명합니다.",
    "처음 몇 분기에는 숫자가 오히려 좋아 보입니다. 해고 덕분에 기업 마진이 좋아지고, 이익이 늘고, 그 돈이 다시 AI 컴퓨팅으로 들어가면서 생산성 통계는 더 반짝입니다.",
    "문제는 [[Ghost GDP]]입니다. GDP와 생산성은 좋아 보이는데, 임금과 소비로 번지지 않아 체감 경기는 얼어붙는 상태입니다. 원문은 사람 중심 소비경제가 당시 GDP의 약 70%였다고 짚습니다.",
    "여기서 [[velocity of money]]가 멈춘다는 표현이 나옵니다. 기계는 쇼핑도, 외식도, 주택담보대출 상환도 하지 않기 때문에, 사람이 사라진 자리를 생산성 수치만으로 메워도 생활경제는 비어 보일 수 있다는 논리입니다.",
    "원문은 이 충격이 결국 미국의 약 13조 달러 [[prime mortgage]] 기반까지 건드린다고 연결합니다. 사무직 소득이 주택 금융의 받침목이기 때문입니다.",
  ],
  "how-it-started": [
    "출발점은 2025년 말 [[agentic coding]] 도약입니다. 원문은 '유능한 개발자 한 명이 중견 SaaS 핵심 기능을 몇 주 만에 흉내 낼 수 있게 됐다'는 식으로 압축합니다.",
    "그러자 [[CIO]]와 [[procurement]] 팀의 질문이 바뀝니다. '매년 50만 달러짜리 갱신을 왜 그냥 해야 하지? 내부에서 직접 만들면 안 되나?' 이 질문 하나만으로도 가격 협상력이 뒤집힙니다.",
    "원문에는 실제 협상 사례도 들어 있습니다. 한 대기업 구매 담당자가 OpenAI의 지원 인력과 내부 구축 가능성을 들이밀자, 기존 공급업체가 30% 할인으로 갱신했다는 대목입니다.",
    "처음엔 Monday, Zapier, Asana 같은 장기 꼬리 SaaS만 위험해 보였지만, 나중엔 [[systems of record]]도 안전지대가 아니었다고 설명합니다. 좌석 기반 과금은 고객의 인원 감축이 그대로 매출 감축으로 번지기 때문입니다.",
    "원문은 ServiceNow 사례를 전환점처럼 사용합니다. 순신규 [[ACV]] 성장 둔화와 15% 인력 감축이 겹치면서, AI가 고객의 효율을 높일수록 소프트웨어 회사 자신의 매출 기반도 깎이는 [[reflexivity]]가 보였다는 식입니다.",
  ],
  "friction-zero": [
    "원문은 2027년 초쯤 LLM 사용이 '의식적으로 AI를 쓰는 것'이 아니라 기본 인프라가 되었다고 그립니다. 휴대폰과 노트북에서 돌아가는 가벼운 모델 덕분에, 사람은 요청하지 않아도 에이전트가 백그라운드에서 계속 최적화를 돌립니다.",
    "그 결과 소비가 이벤트가 아니라 24시간 돌아가는 자동 최적화 과정으로 바뀝니다. 원문은 2027년 3월 미국 중간값 이용자가 하루 40만 토큰을 소비한다는 강한 이미지를 던집니다.",
    "첫 타격은 [[friction]]로 돈 벌던 중개층입니다. 여행 예약, 보험 갱신, 세금 신고, 반복적 법률 업무, 재정 조언처럼 '복잡해서 귀찮은 일 대신 해주는 값'을 받던 업종이 흔들린다는 설명입니다.",
    "부동산도 예외가 아니라는 점을 원문은 세게 밀어붙입니다. 정보 비대칭이 줄자 매수 중개 수수료가 2.5~3%에서 1% 아래로 눌리고, 어떤 거래는 매수 측 인간 중개인 없이 닫힌다고 봅니다.",
    "배달 앱 사례는 [[habitual intermediation]] 설명용입니다. 홈 화면에 늘 있던 앱이라는 습관적 [[moat]]는 기계에겐 거의 의미가 없고, 에이전트는 DoorDash, Uber Eats, 식당 직판, 신규 앱을 동시에 비교해 제일 싼 쪽으로 보냅니다.",
    "원문 후반부는 결제 인프라로 넘어갑니다. [[interchange]] 2~3%는 기계 간 거래에선 너무 큰 마찰로 보이고, 그래서 [[stablecoin]] 기반 결제가 떠오르며 이 이야기가 소비 서비스가 아니라 [[plumbing story]]가 된다고 정리합니다.",
  ],
  "systemic-risk": [
    "원문이 '섹터 리스크가 아니라 시스템 리스크'라고 부르는 이유는 미국 경제의 중심에 [[white-collar]] 소득과 소비가 놓여 있기 때문입니다. 사무직 고용이 흔들리면 기술주 몇 개만의 문제가 아니라 소비, 세수, 주택, 금융이 같이 흔들립니다.",
    "원문은 [[JOLTS]] 같은 지표와 사무직 채용 약세를 이용해 금이 먼저 가는 장면을 보여 줍니다. 실업이 폭발하기 전부터 채용이 말라붙고 이직 시장이 식는 식입니다.",
    "기업 지출에서도 분화가 생깁니다. 사람 관련 운영비는 줄어드는데, 그 줄어든 돈이 [[OpEx substitution]] 형태로 AI 도구와 데이터센터 비용으로 이동해 [[hyperscaler]]만 강해지는 이상한 조합이 나옵니다.",
    "원문은 미국 밖도 잠깐 비춥니다. 서비스 수출과 아웃소싱에 기대던 나라들은 [[current account surplus]]가 약해질 수 있고, 심하면 [[IMF]] 지원 이야기가 나올 수도 있다는 식으로 파장을 넓힙니다.",
    "이 장의 진짜 포인트는 단순합니다. 소프트웨어 섹터에서 보인 논리가 사무직 비용 구조를 가진 거의 모든 기업으로 번지면, 더는 '기술 업종 조정'이라고 부르기 어렵다는 점입니다.",
  ],
  "displacement-spiral": [
    "원문은 고연봉 분석가, 기획자, 지원 인력이 더 낮은 임금의 서비스직이나 계약직으로 내려오는 그림을 상상합니다. 문제는 단지 실업이 아니라 소득 수준의 하향 이동입니다.",
    "그래서 신규 실업수당 청구나 해고 뉴스만 보면 반만 보는 셈이라는 논리가 나옵니다. 아직 직장을 유지한 사람도 불안해지면 [[discretionary spending]]부터 줄이기 때문입니다.",
    "원문은 소비의 쏠림도 강조합니다. 상위 10% 가구가 지출의 절반 이상, 상위 20%가 약 65% 가까이를 맡는 구조라면, 고소득 사무직이 조금만 흔들려도 체감 경기가 급속히 나빠질 수 있습니다.",
    "이 장의 나선형 구조는 단순합니다. 사무직 소득 압박이 소비를 줄이고, 소비 약화가 기업 매출을 깎고, 매출 압박이 다시 AI 투자와 인력 감축을 밀어붙여 다음 고리를 만든다는 것입니다.",
    "원문이 2027년 중반쯤 경기침체를 논하는 이유도 여기에 있습니다. 헤드라인 실업률이 완전히 망가지기 전부터 고소득층 소비 둔화가 먼저 지표를 눌러버릴 수 있다는 뜻입니다.",
  ],
  "daisy-chain": [
    "원문은 [[private credit]]이 1조 달러 아래에서 2조 5천억 달러를 넘길 만큼 커졌다고 짚으면서, AI 충격이 사모 소프트웨어 금융 구조 전체를 흔들 수 있다고 봅니다.",
    "공개시장 SaaS는 먼저 할인율을 맞지만, 비공개 거래는 평가가 늦게 내려옵니다. 그래서 상장 SaaS가 5~8배 [[EBITDA]] 같은 낮은 배수로 거래될 때도, 비상장 딜 장부는 더 낙관적인 가정을 붙잡고 버틸 수 있습니다.",
    "원문은 Zendesk 같은 LBO 사례를 예시로 들며, 수십억 달러 대출이 액면가보다 훨씬 낮은 수준에서 평가될 수 있다는 점을 보여 줍니다. 핵심은 '반복 매출이라 안전하다'는 믿음이 흔들릴 때 [[leveraged buyout]] 구조가 얼마나 민감한가입니다.",
    "그 아래에는 [[debt covenant]]와 평가 지연 문제가 있습니다. 겉으로는 조용한데 실제론 대출 조건과 담보 가치가 같이 나빠지고, 그 손실이 장부에 늦게 올라오는 식입니다.",
    "원문은 또 [[annuity]] 자금, 보험사 자금, [[SPV]] 같은 구조를 거론합니다. [[closed-end vehicle]]이나 [[permanent capital]]처럼 쉽게 환매가 안 되는 돈이라도 손실이 사라지는 것은 아니고, [[regulatory arbitrage]]와 [[risk-based capital]] 규칙이 복잡성을 키운다는 뜻입니다.",
  ],
  "mortgage-question": [
    "원문은 이번 위기가 2008년처럼 처음부터 엉터리 대출이 폭발하는 이야기는 아니라고 선을 긋습니다. 대신 오늘은 건전해 보이는 [[prime mortgage]]도 미래 소득 경로가 흔들리면 다시 평가해야 한다는 쪽에 가깝습니다.",
    "특히 샌프란시스코, 시애틀, 오스틴 같은 기술 인력 비중이 높은 도시가 먼저 흔들릴 수 있다는 상상이 붙습니다. 고연봉 사무직 수요가 약해지면 집값도 가장 먼저 민감하게 반응할 수 있기 때문입니다.",
    "가계는 보통 바로 무너지지 않습니다. 원문은 [[HELOC]], 카드 부채, 401(k) 대출 같은 우회 수단으로 시간을 벌다가, 조용히 [[debt-to-income ratio]]가 나빠지는 경로를 그립니다.",
    "그래서 표면상 연체율이 당장 안 튀어도 안심할 수 없다는 메시지가 나옵니다. 집계가 늦고, 버티기 경로가 많고, 사람은 마지막까지 주택을 지키려 하기 때문입니다.",
    "원문이 극단적 공포 장면으로 S&P 3500 같은 숫자를 스쳐 지나가게 하는 이유도 이 장입니다. 노동 소득 기반이 흔들리면 주택이 결국 금융시장 공포의 증폭기가 될 수 있다는 경고입니다.",
  ],
  "battle-against-time": [
    "원문은 경기 둔화와 동시에 세수도 약해진다고 봅니다. 노동소득과 소비가 약해지면 정부가 돈을 더 써야 하는 순간에 오히려 걷는 세금이 예산 전망보다 덜 들어올 수 있습니다.",
    "그래서 기존 [[automatic stabilizers]]만으로는 부족하다고 말합니다. 실업급여나 자동 재정 장치가 순환 경기엔 유용해도, 인간 노동의 구조적 대체 속도를 따라잡기엔 느릴 수 있다는 뜻입니다.",
    "이 장에는 정책 아이디어들이 여러 개 등장합니다. [[inference compute tax]]처럼 기계 계산 쪽에 과세하는 상상, 또는 AI 수익 일부를 [[sovereign wealth fund]]처럼 사회 전체가 공유하는 상상입니다.",
    "원문은 지방채와 지역 재정도 암시합니다. 도시마다 세원 구성이 다르기 때문에, 사무직과 기술세금 의존도가 큰 지역은 훨씬 더 빨리 압박을 받을 수 있다는 논리입니다.",
    "하지만 가장 무서운 것은 정책의 정답 부재보다 시간차라고 설명합니다. 정치적 합의와 행정 집행이 늦을수록, 같은 정책도 훨씬 약하게 작동할 수 있다는 뜻입니다.",
  ],
  "premium-unwind": [
    "마지막 장의 문장은 원문 전체를 한 줄로 압축합니다. 현대 경제는 희소한 인간 사고력에 높은 값을 매겼고, AI는 그 [[intelligence premium]]을 다시 계산하기 시작했다는 것입니다.",
    "이 말은 인간 가치가 0이 된다는 뜻이 아닙니다. 다만 과거에 너무 비쌌던 지적 노동의 일부 가격표가 빠르게 내려오고, 그에 맞춰 급여와 기업 가치도 다시 매겨질 수 있다는 뜻입니다.",
    "원문은 파국 확정처럼 말하지는 않습니다. 오히려 '카나리아가 아직 죽지 않았다'는 식으로, 아직 경고를 읽고 준비할 시간은 남아 있다는 어조를 남깁니다.",
    "그래서 결론은 단순한 공포가 아니라 재평가입니다. AI가 잘 되는 것과 사람 중심 경제가 건강한 것은 같은 말이 아니며, 두 문장을 분리해서 봐야 한다는 것이 마지막 교훈입니다.",
  ],
};

const sectionExpandedCoverage = {
  preface: [
    {
      label: "원문 전개 더 따라가기",
      paragraphs: [
        "원문 서두의 핵심은 'AI 낙관론이 맞아도 경제에는 약세 충격이 될 수 있다'는 역설입니다. 글은 처음부터 이걸 예언처럼 단정하지 않고, 아직 시장이 충분히 진지하게 다루지 않은 꼬리 위험을 사고실험 형태로 끝까지 밀어 봅니다.",
        "형식도 중요합니다. 2026년에 쓴 글을 2028년 거시 메모처럼 꾸며 놓은 이유는, 독자가 지금 시점의 뉴스 소비자가 아니라 나중에 연쇄 충격을 되짚는 사람처럼 읽게 만들기 위해서입니다. 이렇게 읽으면 '지금은 별일 아닌 듯 보이는 변화가 어떻게 시스템 전체로 퍼지는가'에 더 집중하게 됩니다.",
      ],
      points: [
        "이 장은 AI 실패 시나리오가 아니라 AI 성공의 부작용 시나리오를 여는 프롤로그입니다.",
        "핵심 질문은 기술이 좋아지느냐가 아니라 그 성과가 인간 경제를 거쳐 다시 순환하느냐입니다.",
      ],
    },
    {
      label: "관련해서 더 넓게 보기",
      paragraphs: [
        "이 프롤로그를 이해하려면 보통 사람들이 가진 '기술 혁신 = 장기적으로는 좋은 일'이라는 기본 습관을 잠깐 멈춰야 합니다. 장기적으로 사회 전체 후생이 늘 수 있어도, 중간 전환 구간에서는 특정 계층의 소득 기반이 먼저 무너질 수 있고 금융시장은 그 전환기를 매우 폭력적으로 가격에 반영합니다.",
        "그래서 이 글은 기술 철학 글이 아니라 분배, 소득, 대출, 소비, 정치 시간차를 같이 읽는 거시 시나리오 글로 보는 편이 맞습니다.",
      ],
      points: [
        "기술 변화의 승자와 사회의 안정이 항상 같은 속도로 움직이지는 않습니다.",
        "시장 충격은 '기술이 싫다'가 아니라 '현금흐름 경로가 바뀐다'에서 시작됩니다.",
      ],
    },
  ],
  "macro-memo": [
    {
      label: "원문 전개 더 따라가기",
      paragraphs: [
        "원문은 2028년 6월 메모 형식으로 실업률 10.2%, S&P 누적 하락 38%를 먼저 던진 뒤, 불과 2년 전에 시장이 정반대 분위기였다고 되짚습니다. 2026년 말에는 AI로 이익률이 좋아지고 생산성이 뛰니 주식이 더 올랐고, 기업들은 사람을 줄여 아낀 돈을 다시 AI 컴퓨트에 넣었습니다.",
        "문제는 좋은 숫자와 좋은 생활이 분리됐다는 점입니다. 명목 성장률과 생산성은 강한데, 임금 상승은 꺼지고 사무직이 더 낮은 임금의 일자리로 밀려나면서 가계에 돈이 덜 돌기 시작합니다. 그래서 글은 국가계정에는 잡히지만 사람들 지갑을 통해 다시 돌지 않는 산출을 '유령 GDP'로 설명합니다.",
        "여기서 연결 고리가 하나 더 붙습니다. 인간 중심 소비 경제가 GDP의 큰 비중을 차지하는데, 기계는 외식도 여행도 주택 업그레이드도 하지 않습니다. 돈의 회전이 멈추면 생산이 늘어도 소비 기반은 마르고, 그 위에 세워진 담보와 대출 체계가 뒤늦게 흔들리기 시작합니다.",
      ],
      points: [
        "원문은 처음부터 '생산성 호황'과 '가계 경기 악화'가 동시에 존재할 수 있다고 말합니다.",
        "기업 이익 개선이 다시 AI 투자로 이어지며 다음 감원 여력을 키우는 구조가 메모 전체의 첫 고리입니다.",
        "이 장에서 이미 실업, 소비, 주택금융, 민간신용이 한 줄로 연결됩니다.",
      ],
    },
    {
      label: "관련해서 더 넓게 보기",
      paragraphs: [
        "이 장이 중요한 이유는 많은 사람이 거시를 볼 때 GDP나 주가지수 같은 총량부터 보기 때문입니다. 그런데 원문은 총량 지표가 한동안 멀쩡해 보여도, 소득의 귀속처가 바뀌면 생활경제와 금융은 먼저 나빠질 수 있다고 강조합니다.",
        "즉 '경제가 성장한다'와 '사람들이 돈을 써서 다음 분기 매출을 받쳐 준다'는 같은 말이 아닙니다. 이 구분을 이해해야 뒤에 나오는 SaaS, 중개업, 주택시장, 정책 파트가 전부 자연스럽게 이어집니다.",
      ],
      points: [
        "총량 성장과 인간의 구매력은 따로 움직일 수 있습니다.",
        "생산성이 높아질수록 모두가 같이 좋아지는 자동 경로는 분배가 이어질 때만 성립합니다.",
      ],
    },
  ],
  "how-it-started": [
    {
      label: "원문 전개 더 따라가기",
      paragraphs: [
        "원문은 2025년 말 에이전트형 코딩 도구가 계단식으로 좋아진 순간을 출발점으로 잡습니다. 핵심은 '완벽한 대체'가 아니라 '큰 기업이 비싼 SaaS 재계약을 다시 생각하게 만들 만큼 충분히 괜찮은 내부 대안'이 생겼다는 점입니다.",
        "그래서 2026년 중간 예산 검토 때 조달팀과 CIO가 이전과 다른 협상력을 갖게 됩니다. 실제 예시로, 기존 세일즈가 5% 인상과 락인 논리를 들고 왔지만 구매 담당자가 '우리가 직접 만들 수도 있다'는 카드를 꺼내자 30% 할인으로 재계약했다는 장면이 나옵니다.",
        "처음에는 Monday, Zapier, Asana 같은 롱테일 SaaS만 위험해 보였지만 원문은 곧 더 큰 문제를 짚습니다. ServiceNow처럼 좌석 기반으로 파는 시스템도 고객이 인력을 15% 줄이면 라이선스 15%가 같이 사라집니다. AI가 고객사의 비용을 줄이는 방식이 공급사의 매출 기반을 동시에 갉아먹는 자기증폭 구조였다는 뜻입니다.",
        "여기서 원문이 역사적 비교를 뒤집습니다. 과거의 기존 기업은 신기술을 무시하다가 천천히 졌지만, 이번에는 기존 기업도 버틸 수가 없어 더 공격적으로 AI를 도입합니다. 각자 합리적인 선택을 했는데 전체적으로는 더 빠른 감원 루프를 만든다는 게 핵심입니다.",
      ],
      points: [
        "위험은 '전부 사라진다'보다 '가격 협상력과 차별화가 동시에 무너진다'에서 먼저 시작됩니다.",
        "고객사의 AI 도입이 공급사의 매출 약화를 직접 부른다는 점이 SaaS 파트의 핵심 메커니즘입니다.",
        "기존 기업도 AI를 받아들일 수밖에 없어서 변화 속도가 더 빨라진다는 점이 과거 파괴와 다릅니다.",
      ],
    },
    {
      label: "관련해서 더 넓게 보기",
      paragraphs: [
        "이 장은 소프트웨어 업종 얘기처럼 보이지만 사실은 더 넓은 경고입니다. 화이트칼라 비용구조를 가진 거의 모든 회사가 비슷한 계산을 할 수 있으면, 나중에는 특정 업종 문제가 아니라 기업 운영 방식 전체의 표준이 바뀌는 문제가 됩니다.",
        "또한 '내부 개발이 완벽해야 외부 솔루션을 대체한다'는 오해도 깨 줍니다. 구매 의사결정에서는 100점짜리 대체재보다 70점짜리 협상 카드가 먼저 가격을 무너뜨리는 경우가 많습니다.",
      ],
      points: [
        "실제 파괴는 완전한 대체보다 협상력 붕괴에서 먼저 드러납니다.",
        "고정 좌석, 반복 계약, 느린 기능 차별화에 기대는 모델이 특히 약합니다.",
      ],
    },
  ],
  "friction-zero": [
    {
      label: "원문 전개 더 따라가기",
      paragraphs: [
        "원문은 2027년 초부터 LLM 사용이 너무 일상화돼 사람들이 자신이 에이전트를 쓰고 있다는 사실조차 의식하지 않게 됐다고 묘사합니다. 핵심 사례는 배경에서 돌아가는 소비 에이전트입니다. 이제 쇼핑은 사람이 한 번 클릭해서 끝내는 사건이 아니라, 기계가 하루 종일 최적 가격과 조건을 찾는 지속적 최적화 과정으로 바뀝니다.",
        "이 변화가 제일 먼저 때린 것은 중개였습니다. 구독 서비스의 방치 갱신, 여행 예약 플랫폼, 보험 자동 갱신, 세무와 법률의 반복 업무, 부동산 중개처럼 '복잡하고 귀찮아서 대신 맡긴다'는 논리로 돈 벌던 카테고리들이 흔들립니다. 에이전트는 지치지도 귀찮아하지도 않기 때문입니다.",
        "원문은 도어대시를 상징 사례로 씁니다. 배달앱의 해자는 '배고프고 귀찮은 인간이 홈 화면 첫 번째 앱을 그냥 누른다'는 습관이었는데, 기계는 그런 습관이 없습니다. 동시에 코딩 에이전트가 새 경쟁 앱을 쉽게 만들고, 소비 에이전트가 그걸 바로 비교해 주니 양쪽에서 동시에 마진이 깨집니다.",
        "마지막 고리는 결제입니다. 기계끼리 거래하면 카드 네트워크의 2~3% 수수료가 너무 크게 보입니다. 그래서 카드 스토리였던 것이 인프라 스토리로 바뀌고, 스테이블코인과 저비용 결제 레일이 본격적으로 부상합니다.",
      ],
      points: [
        "이 장의 본질은 '에이전트가 인간의 게으름과 관성을 먹고 살던 업종을 무너뜨린다'는 것입니다.",
        "습관 기반 충성도는 인간에게는 해자지만 기계에게는 아무 의미가 없습니다.",
        "중개 수수료 붕괴는 앱 하나의 경쟁이 아니라 결제 인프라 재편으로 이어집니다.",
      ],
    },
    {
      label: "관련해서 더 넓게 보기",
      paragraphs: [
        "많은 플랫폼 기업은 기술 자체보다 인간 행동의 비효율 위에 세워져 있었습니다. 가격 비교를 귀찮아하고, 익숙한 앱을 누르고, 약관을 안 읽고, 갱신을 미루는 인간 특성이 사실상 수익원이었던 셈입니다. 에이전트가 보급되면 그 비효율은 기업 자산에서 바로 비용 누수로 바뀝니다.",
        "그래서 이 장을 '소비자 후생 개선'만으로 보면 절반만 읽는 것입니다. 소비자는 싸게 살 수 있지만, 그 과정에서 수수료를 먹던 기업가치와 고임금 사무직이 같이 흔들립니다.",
      ],
      points: [
        "에이전트는 인간이 아니라 인간의 행동 편향을 공격합니다.",
        "가격투명성 상승은 소비자에게는 이익이지만 중개업에는 구조적 압박입니다.",
      ],
    },
  ],
  "systemic-risk": [
    {
      label: "원문 전개 더 따라가기",
      paragraphs: [
        "원문은 이 시점부터 '이게 아직도 소프트웨어 섹터 이야기인가?'라는 질문에 아니라고 답합니다. AI는 더 싸지고 더 좋아지는데, 기업은 사람을 줄인 돈으로 다시 AI를 사기 때문에 경기 둔화가 와도 AI 지출이 꺾이지 않습니다. 원문 표현대로 이건 전통적 설비투자 사이클이 아니라 운영비 대체입니다.",
        "그래서 이상한 조합이 나옵니다. 경제는 식는데 엔비디아, TSMC, 하이퍼스케일러는 계속 좋습니다. 원문은 대만과 한국 같은 순수 수혜 경제가 강하고, 반대로 값싼 인간 개발자라는 비교우위에 기대던 인도 IT서비스 수출 모델은 급속히 흔들린다고 설명합니다.",
        "인도 사례는 글로벌 버전의 화이트칼라 문제입니다. 미국 개발자가 비싸서 인도 개발자를 썼는데, 이제 AI 코딩 에이전트의 한계비용이 전기료 수준으로 떨어지면 아웃소싱 논리 자체가 붕괴합니다. 그렇게 되면 서비스 흑자, 통화, 대외수지까지 연쇄적으로 압박을 받습니다.",
      ],
      points: [
        "원문은 경기 둔화가 와도 AI 예산이 자동으로 줄지 않는다고 강조합니다.",
        "같은 충격 안에서도 하드웨어/컴퓨트 수혜자와 화이트칼라 노동 수출국은 정반대 결과를 맞습니다.",
        "이 장은 '섹터 조정'이 아니라 '경제 구조 재배치'라는 인식을 만들기 위한 파트입니다.",
      ],
    },
    {
      label: "관련해서 더 넓게 보기",
      paragraphs: [
        "이 부분이 중요한 이유는 시장이 종종 특정 승자 산업의 강세만 보고 전체 경제도 괜찮다고 착각하기 때문입니다. 하지만 어떤 산업의 기록적 이익이 다른 산업과 가계의 소득 붕괴 위에 세워졌다면, 지수 안에서는 승자와 패자가 같이 존재해도 사회 전체는 불안정해질 수 있습니다.",
        "또한 글로벌 분업 구조도 다시 계산해야 합니다. 인력비 차이를 먹고살던 수출 모델은 AI가 임금격차 자체를 무력화할 때 가장 빠르게 흔들릴 수 있습니다.",
      ],
      points: [
        "AI 인프라 강세와 인간 경제 약세는 동시에 성립할 수 있습니다.",
        "국가 단위에서도 누가 컴퓨트를 파는지, 누가 인간 노동을 파는지가 결과를 가릅니다.",
      ],
    },
  ],
  "displacement-spiral": [
    {
      label: "원문 전개 더 따라가기",
      paragraphs: [
        "원문은 2027년에 이야기가 추상적 통계가 아니라 생활 수준의 충격으로 바뀐다고 말합니다. 화이트칼라 실직자는 집에서 놀지 않고 더 낮은 임금의 서비스업과 플랫폼 노동으로 내려오고, 그 결과 그쪽 임금도 같이 눌립니다. 즉 충격이 사무직 내부에만 머무르지 않고 저임금 노동시장까지 퍼집니다.",
        "구체적 사례로, 18만 달러를 받던 시니어 프로덕트 매니저가 몇 차례 감원 뒤 4만5천 달러 수준의 우버 수입으로 내려오는 장면이 등장합니다. 원문이 말하고 싶은 건 개인 드라마가 아니라 수백만 명 단위로 이런 하향 이동이 벌어질 때 소비 구조 전체가 달라진다는 점입니다.",
        "또 하나 중요한 포인트는 지연입니다. 고소득층은 저축 여력이 있어서 몇 분기 동안은 멀쩡해 보입니다. 그래서 데이터가 문제를 확인할 때는 이미 현실경제에서는 오래전부터 소비 축소가 시작된 뒤입니다. 이후 신규 실업수당 청구가 튀고, 그때서야 시장이 거시 악화를 진지하게 가격에 넣기 시작합니다.",
        "여기서 원문은 상위 10%와 20%가 소비의 큰 비중을 차지한다는 점을 강조합니다. 화이트칼라 일자리 몇 퍼센트 감소가 전체 소비에서 훨씬 더 큰 충격으로 번지는 이유가 바로 여기에 있습니다.",
      ],
      points: [
        "원문은 단순 실업률보다 소득 하향 이동과 소비 비중에 주목합니다.",
        "고소득층 소비는 늦게 줄지만 줄기 시작하면 파급력이 큽니다.",
        "화이트칼라 충격은 서비스업 임금 압박까지 유발해 2차 충격을 만듭니다.",
      ],
    },
    {
      label: "관련해서 더 넓게 보기",
      paragraphs: [
        "많은 경기 모델은 하위 소득층 충격이 즉시 소비에 반영된다는 가정에 익숙합니다. 하지만 이 글은 상위 소득층 충격이 '늦지만 깊게' 온다고 말합니다. 그래서 헤드라인은 늦게 깨지는데, 실제 체감경기는 이미 몇 분기 전부터 꺾였을 수 있습니다.",
        "또한 처음 충격을 흡수하던 일자리, 예를 들면 배달이나 운전 같은 플랫폼 노동도 자율주행과 자동화가 확산되면 다시 안전판이 아니게 됩니다. 원문은 이 안전판이 임시적일 뿐이라고 경고합니다.",
      ],
      points: [
        "이 장은 실업보다 소득 분포 변화가 더 중요하다는 점을 보여 줍니다.",
        "임시 피난처였던 서비스/긱 노동도 결국 다시 자동화 압박을 받을 수 있습니다.",
      ],
    },
  ],
  "daisy-chain": [
    {
      label: "원문 전개 더 따라가기",
      paragraphs: [
        "원문은 민간신용이 2015년 1조 달러 미만에서 2026년 2.5조 달러를 넘게 불어난 뒤, 그 자금의 상당 부분이 영속 성장 가정을 깔고 소프트웨어와 기술 LBO에 들어갔다고 설명합니다. 문제는 공모 SaaS 밸류에이션은 먼저 깨졌는데, 사모 쪽 장부가는 한참 뒤늦게 아주 천천히만 내려왔다는 점입니다.",
        "전환점은 2027년 무디스의 대규모 강등과, 그 뒤에 이어진 소프트웨어 담보 대출 부실입니다. 원문은 Zendesk를 결정적 사례로 씁니다. ARR이 계속 반복될 것이라는 전제 위에 거대한 직접대출 패키지가 얹혀 있었는데, AI 고객지원 자동화가 자리 잡자 그 반복 매출 전제 자체가 무너졌다는 것입니다.",
        "여기서 글은 처음엔 '그래도 이건 버틸 수 있는 손실 아닌가'라는 컨센서스를 일부 인정합니다. 폐쇄형 펀드와 락업 자본 덕분에 은행식 뱅크런은 없기 때문입니다. 하지만 바로 그 안심이 문제였습니다. 대형 대체자산 운용사들은 생명보험사를 인수해 연금성 자금을 민간신용의 안정적 재원으로 썼고, 손실이 나면 그 충격이 결국 가계 저축 쪽으로도 번집니다.",
        "원문 후반은 구조의 불투명성에 초점을 맞춥니다. 해외 SPV, 보험 계열사, 자산운용 부문, 같은 그룹이 만든 대출과 그걸 다시 사는 다른 계열 구조가 겹치면서, 실제 손실이 어디에 최종 귀속되는지 실시간으로 답하기 어려운 상황이 됩니다.",
      ],
      points: [
        "핵심은 손실 그 자체보다 손실 인식과 귀속 불확실성입니다.",
        "ARR 기반 안전자산처럼 보이던 대출이 AI 때문에 세속적 역풍을 맞을 수 있다는 점이 중요합니다.",
        "닫힌 자본 구조가 당장 매도 압력은 막아도, 실질 손실을 없애 주지는 않습니다.",
      ],
    },
    {
      label: "관련해서 더 넓게 보기",
      paragraphs: [
        "이 파트는 2008년과 닮은 점과 다른 점을 동시에 보여 줍니다. 닮은 점은 '안전하다고 믿었던 현금흐름 가정이 무너진다'는 것이고, 다른 점은 은행 예금 런보다 훨씬 불투명한 사모 구조 안에서 손실 인식이 지연된다는 점입니다.",
        "그래서 원문이 말하는 '데이지 체인'은 그냥 복잡하다는 뜻이 아니라, 겉보기엔 다른 운용사와 다른 자산처럼 보이지만 실제 전제는 모두 같은 곳, 즉 화이트칼라 생산성과 반복 매출 유지에 걸려 있었다는 뜻입니다.",
      ],
      points: [
        "연결고리가 많을수록 시스템은 더 단단해지는 것이 아니라 같은 가정에 묶여 더 취약해질 수 있습니다.",
        "장부가의 느린 하향 조정은 위험이 작다는 뜻이 아니라 인식이 늦다는 뜻일 수 있습니다.",
      ],
    },
  ],
  "mortgage-question": [
    {
      label: "원문 전개 더 따라가기",
      paragraphs: [
        "원문은 주택시장을 이 시나리오의 가장 중요한 금융 전환점으로 다룹니다. 샌프란시스코, 시애틀, 오스틴 같은 화이트칼라 비중 높은 지역의 집값 하락과 초기 연체 상승이 먼저 보이고, 그와 함께 아주 높은 신용점수와 20% 다운페이먼트를 가진 차주들까지 의심받기 시작합니다.",
        "여기서 원문이 강조하는 차별점은 2008년처럼 처음부터 나쁜 대출이 아니었다는 점입니다. 이 대출들은 발급 시점에는 정말 좋은 대출이었습니다. 그런데 대출이 전제한 미래 소득 경로가 몇 년 뒤 더 이상 믿기 어려워졌다는 것이 문제입니다.",
        "또한 표면상 정상인 가계와 실제로 취약해진 가계를 구분합니다. HELOC 인출, 401(k) 인출, 카드부채 증가가 먼저 나타나고, 모기지 납부는 한동안 유지됩니다. 즉 '연체가 아직 크게 안 올랐다'는 사실이 안전을 보장하는 게 아니라, 사람들이 마지막까지 주택을 지키며 버티는 중이라는 해석이 더 맞다는 것입니다.",
        "원문은 시장 평균이 아직 멀쩡해 보여도 위험이 기술과 금융 중심 ZIP 코드에 먼저 쌓일 수 있다고 봅니다. 그리고 이 차주들이 바로 다음 집을 사 줄 한계 매수자이기도 해서, 집값 하락이 시작되면 방어력이 더 빠르게 약해질 수 있다고 설명합니다.",
      ],
      points: [
        "질이 나쁜 대출이 아니라 미래 소득 기대가 무너진 좋은 대출이 흔들린다는 점이 이 장의 핵심입니다.",
        "조용한 스트레스 신호는 연체보다 생활자금 보충과 저축 소진에서 먼저 나타납니다.",
        "전국 평균보다 특정 고소득 지역의 조기 징후가 더 중요하다는 메시지가 반복됩니다.",
      ],
    },
    {
      label: "관련해서 더 넓게 보기",
      paragraphs: [
        "이 파트를 넓게 읽으면 주택금융은 사실 '현재 집값'보다 '향후 10~30년 소득을 얼마나 믿을 수 있느냐'의 문제라는 점이 선명해집니다. 그래서 금리만 내린다고 해결되지 않을 수 있습니다. 지금 금리가 문제가 아니라 그 소득 경로가 덜 믿기기 때문입니다.",
        "또한 평균 통계가 안정적으로 보여도, 주택은 지역성과 직업 구성이 매우 중요합니다. 같은 국가 안에서도 화이트칼라 고임금 집중 지역은 먼저 흔들리고, 그 신호를 뒤늦게 전국 평균이 따라가는 식으로 보일 수 있습니다.",
      ],
      points: [
        "모기지는 담보 상품이지만 실제로는 미래 소득에 대한 긴 계약입니다.",
        "전국 평균보다 고소득 화이트칼라 밀집 지역의 미세한 이상 신호가 더 먼저 움직일 수 있습니다.",
      ],
    },
  ],
  "battle-against-time": [
    {
      label: "원문 전개 더 따라가기",
      paragraphs: [
        "원문은 마지막 실전 파트를 시간 문제로 묶습니다. 첫 번째 피드백 루프는 실물경제에서, 두 번째는 금융에서 돌고 있는데, 정부는 둘 다 충분히 빠르게 따라가지 못한다고 봅니다. 특히 세수 구조가 인간 노동과 급여에 크게 의존한다는 점이 핵심입니다.",
        "생산성은 오르지만 그 이익이 노동이 아니라 자본과 컴퓨트 쪽으로 가면, 가계를 거쳐 IRS로 돌아오는 순환이 약해집니다. 그래서 정부는 세수는 덜 걷는데 지원은 더 많이 해야 하는 역설에 빠집니다. 원문은 노동소득분배율 하락과 세수 부족을 함께 묶어 설명합니다.",
        "여기서 자동안정화장치의 한계가 나옵니다. 기존 제도는 '일시적 실직 후 재흡수'를 전제로 설계됐는데, 구조적 대체가 진행되면 같은 규모와 속도로는 버티기 어렵다는 것입니다. 그래서 직접이전, AI 추론세, AI 인프라 수익에 대한 공공 청구권 같은 더 근본적인 제안들이 논의됩니다.",
        "하지만 정책 논의는 이념 속도로 움직이고 사회 불만은 현실 속도로 커집니다. 원문은 Occupy Silicon Valley 같은 시위를 넣어, 실업 통계보다 정치적 분노가 더 큰 뉴스가 되는 장면을 보여 줍니다. 결국 진짜 악당은 특정 인물보다 시간이라고 결론냅니다.",
      ],
      points: [
        "정부 재정 기반이 인간 노동에 묶여 있다는 점이 정책 대응을 더 어렵게 만듭니다.",
        "기존 자동안정화장치는 순환 침체에는 맞지만 구조적 대체에는 충분하지 않을 수 있습니다.",
        "원문은 정책 아이디어 부족보다 실행 속도 부족을 더 큰 위험으로 봅니다.",
      ],
    },
    {
      label: "관련해서 더 넓게 보기",
      paragraphs: [
        "이 파트는 단순히 복지 확대 주장이 아니라, 경제 엔진이 바뀌었는데 세금과 이전 구조는 옛 엔진 기준으로 남아 있는 문제를 짚습니다. 생산이 여전히 일어나도 세금은 덜 걷히고, 동시에 대체된 가계엔 더 많은 지원이 필요해지는 구조입니다.",
        "그래서 논점은 '정부가 돈을 쓸 수 있느냐'보다 '어떤 분배 장치를 어떤 속도로 설계해 사회적 합의를 만들 수 있느냐'로 이동합니다. 기술의 속도와 제도의 속도가 어긋날 때 정치 갈등이 경제 갈등을 더 키울 수 있다는 점도 이 장의 확장 포인트입니다.",
      ],
      points: [
        "시간차는 경제 변수이면서 동시에 정치 변수입니다.",
        "세수 기반, 이전 제도, 사회적 합의가 모두 인간 노동 시대에 맞춰져 있다는 점을 다시 보게 합니다.",
      ],
    },
  ],
  "premium-unwind": [
    {
      label: "원문 전개 더 따라가기",
      paragraphs: [
        "마지막 장의 핵심은 '인간 지능 프리미엄의 해체'입니다. 현대 경제는 인간의 판단, 설득, 분석, 조정 능력이 희소하다는 전제 위에 설계됐는데, 이제 기계가 점점 더 넓은 범위의 과업에서 그 희소성을 줄이고 있다는 것이 원문의 결론입니다.",
        "그래서 금융시스템 전체가 다시 가격을 매기기 시작합니다. 노동시장, 모기지 시장, 세금 체계, 기업가치 평가가 모두 '인간 지능은 희소하다'는 오래된 전제를 조금씩 빼고 다시 계산되는 과정이 바로 재평가입니다.",
        "원문은 여기서 중요한 완충 문장을 넣습니다. 재평가는 붕괴와 같지 않다는 것입니다. 새로운 균형을 찾을 수는 있지만, 그 과정은 무질서하고 고통스럽고 아직 끝나지 않았습니다. 다시 말해 글의 목적은 종말 선언이 아니라, 포트폴리오와 사회 제도가 어떤 낡은 가정 위에 서 있는지 미리 따져 보자는 데 있습니다.",
        "마지막 문단이 다시 현재로 돌아오는 이유도 같습니다. 2028년 이야기를 다 읽었지만 우리는 아직 2026년에 있고, 완전한 파국은 오지 않았으며, 일부 시나리오는 실현되지 않을 수도 있습니다. 다만 인간 지능 프리미엄이 좁아질 가능성 자체는 매우 높으니 지금 점검할 시간이 남아 있다는 메시지입니다.",
      ],
      points: [
        "이 장은 '인간의 가치가 0'이라는 얘기가 아니라 인간 지능의 희소성 가격이 재조정된다는 얘기입니다.",
        "원문은 붕괴보다 재평가를 강조해 독자가 과도한 종말론으로 읽지 않게 합니다.",
        "결론은 공포보다 준비입니다. 아직 카나리아는 살아 있다는 문장도 그 맥락입니다.",
      ],
    },
    {
      label: "관련해서 더 넓게 보기",
      paragraphs: [
        "이 결론을 사회적으로 읽으면 질문이 바뀝니다. 'AI가 좋으냐 나쁘냐'보다 '인간의 희소성에서 나오던 소득과 자산 가격을 무엇으로 다시 설계할 것이냐'가 더 중요해집니다. 교육, 세금, 주택금융, 소비, 기업가치 평가가 모두 같은 질문을 받는 셈입니다.",
        "투자 관점으로 읽으면, 앞으로 10년 동안 그대로 유지되기 어려운 가정이 무엇인지 점검하라는 메시지에 가깝습니다. 반복 매출, 안정적 사무직 소득, 습관 기반 중개 수익, 인간시간에 세금을 매기는 구조 같은 전제들이 얼마나 민감한지 다시 살피라는 뜻입니다.",
      ],
      points: [
        "결론의 초점은 기술 찬반이 아니라 경제 설계의 재조정입니다.",
        "원문은 투자자와 사회 모두에게 아직 선제 대응 시간이 남아 있다고 말합니다.",
      ],
    },
  ],
};

const contextEssays = [
  {
    label: "Context 1",
    title: "이 글을 한 번에 읽는 가장 쉬운 프레임",
    intro:
      "원문을 길게 읽다 보면 장면이 많아 보이지만, 사실은 하나의 고리를 여러 각도에서 반복해서 보여 줍니다.",
    paragraphs: [
      "첫 번째 고리는 비용입니다. 기업은 AI 덕분에 사람을 덜 써도 된다고 느끼고, 그 순간 인건비를 줄입니다. 단기적으로는 이게 너무 합리적이라 주가도, 마진도, 생산성도 좋아 보일 수 있습니다.",
      "두 번째 고리는 소득입니다. 그런데 잘린 사람이나 임금이 약해진 사람은 대부분 [[white-collar]] 소비층입니다. 이들이 쓰던 돈이 줄면 식당, 여행, 주택, 카드, 구독, 보험이 같이 식습니다.",
      "세 번째 고리는 매출입니다. 소비가 식으면 기업은 다시 비용을 줄이려 하고, 그때 가장 손쉬운 버튼은 또 AI와 인력 감축입니다. 그래서 [[reflexivity]]가 생깁니다. 각 회사는 합리적으로 행동하지만, 전체 경제는 더 불안정해집니다.",
      "마지막 고리는 금융입니다. 사무직 소득이 받치던 [[prime mortgage]]와, 반복매출 신화를 믿고 짜인 [[private credit]] 구조가 동시에 흔들릴 수 있습니다. 그래서 원문은 기술 이야기를 하다가도 끝내 금융사 메모처럼 읽히게 됩니다.",
    ],
    takeaways: [
      "이 글의 뼈대는 생산성 개선 → 소득 약화 → 소비 둔화 → 추가 자동화의 반복입니다.",
      "개별 기업에 좋은 선택이 전체 경제에는 나쁜 결과를 만들 수 있다는 점이 핵심입니다.",
      "소프트웨어, 소비, 금융이 따로가 아니라 한 고리로 묶여 있다는 시선으로 읽으면 훨씬 쉽습니다.",
    ],
  },
  {
    label: "Context 2",
    title: "왜 이번 자동화는 예전 자동화와 다르게 읽히나",
    intro:
      "예전 자동화는 주로 공장이나 반복 육체노동의 효율을 높이는 쪽이었다면, 원문이 보는 이번 파도는 판단과 조정, 비교와 설계 같은 사무직 영역을 먼저 건드립니다.",
    paragraphs: [
      "과거 기계화는 대개 사람 한 명을 보완하거나, 특정 공정을 더 싸게 만드는 방식이었습니다. 그래서 새 일자리로 이동할 시간을 어느 정도 벌어 주는 경우가 많았습니다. 반면 원문 속 AI는 [[agentic coding]]처럼 바로 고부가가치 의사결정과 실행 일부를 대체합니다.",
      "또 한 가지 차이는 속도입니다. 공장 자동화는 설비 투자, 공간, 라인 전환이 필요했습니다. 하지만 소프트웨어형 자동화는 배포 속도가 너무 빠릅니다. 한 팀이 효과를 보자마자 다른 팀이 따라 하고, 절감된 비용이 다시 AI에 재투자되기 쉽습니다.",
      "게다가 이번엔 인간의 귀찮음 자체가 시장이었던 곳들이 위험합니다. [[intermediation]], [[habitual intermediation]], [[friction]] 위에 세워진 서비스는 사람의 게으름과 시간 부족이 사라질수록 수익 근거가 약해집니다.",
      "쉽게 말하면 예전 자동화는 '더 빨리 만들기'가 중심이었고, 원문이 보는 이번 자동화는 '사람이 원래 돈 쓰던 방식 자체를 바꾸기'가 중심입니다. 그래서 생산 측 충격이 소비 측 충격으로 더 직접 이어집니다.",
    ],
    takeaways: [
      "이번 자동화는 공장보다 책상, 서류, 클릭, 비교, 협상에 먼저 들어온다는 점이 다릅니다.",
      "배포 속도가 빠르기 때문에 적응 시간 부족이 더 큰 문제로 잡힙니다.",
      "사람의 귀찮음으로 먹고 살던 시장은 기술 성능만큼이나 소비 습관 변화에 맞아 쓰러질 수 있습니다.",
    ],
  },
  {
    label: "Context 3",
    title: "2008년과 닮은 점, 완전히 다른 점",
    intro:
      "원문은 여러 번 2008년을 떠올리게 하지만, 같은 영화의 재상영이라고 보지는 않습니다. 비슷한 것은 전염 경로이고, 다른 것은 최초의 금이 가는 위치입니다.",
    paragraphs: [
      "닮은 점부터 보면, 둘 다 한 군데의 문제가 금융 구조 전체로 번집니다. 2008년엔 주택 대출의 질과 증권화 구조가 핵심이었다면, 여기서는 사무직 소득과 반복매출 가정이 묶인 금융 구조가 비슷한 역할을 합니다.",
      "하지만 다른 점이 더 중요합니다. 2008년은 많은 경우 대출이 처음부터 나빴습니다. 원문이 그리는 이번 장면은 오늘은 괜찮아 보이는 [[prime mortgage]]도 내일의 소득 불안 때문에 다시 위험해질 수 있다는 쪽입니다.",
      "또 2008년엔 금융시장이 먼저 크게 무너지고 실물경제 충격이 퍼지는 느낌이 강했습니다. 여기서는 실물에서 시작된 소득 압박과 소비 둔화가 천천히 금융을 잠식합니다. 겉으론 늦어 보여도 속으로는 넓게 번지는 타입입니다.",
      "정책도 다르게 어려워집니다. 금리를 내리거나 [[QE]]를 해도, 문제의 뿌리가 담보물 가격이 아니라 [[labor share of GDP]]와 소득 배분 쪽에 있다면 효과가 제한적일 수 있습니다. 그래서 원문은 세금, 분배, 소득 이전까지 끌어옵니다.",
    ],
    takeaways: [
      "닮은 점은 '한 가정이 전체 금융 구조에 스며 있었다'는 전염 방식입니다.",
      "다른 점은 시작점이 엉터리 대출이 아니라 미래 소득 경로라는 것입니다.",
      "그래서 통화정책만으로 해결되기 어려운 구조 문제라는 색깔이 더 강합니다.",
    ],
  },
  {
    label: "Context 4",
    title: "현실에서 무엇을 보면 이 시나리오를 빨리 감지할 수 있나",
    intro:
      "원문을 공부용으로 바꿔 읽을 때 중요한 건 공포보다 체크리스트입니다. 실제 세상에서 먼저 볼 만한 신호를 순서대로 잡아 두면 이해가 훨씬 단단해집니다.",
    paragraphs: [
      "첫 번째는 소프트웨어 가격 협상입니다. 신규 계약보다 갱신 계약에서 할인 폭이 커지고, 고객이 '직접 만들 수 있다'는 말을 더 자주 꺼내면 [[agentic coding]] 충격이 판매 현장에 도달한 것입니다.",
      "두 번째는 사무직 채용과 좌석 기반 매출입니다. [[JOLTS]] 같은 고용 지표, 기업의 채용 공고, 그리고 좌석 수에 민감한 [[systems of record]] 업체의 [[ACV]] 둔화를 함께 보면 훨씬 빨리 그림이 보입니다.",
      "세 번째는 소비의 결입니다. 총소비보다 [[discretionary spending]]이 먼저 꺾이는지, 카드 네트워크와 여행/예약/보험 갱신 업종의 마진이 줄어드는지를 보면 [[intermediation]] 붕괴가 실물로 옮겨가는지 읽을 수 있습니다.",
      "네 번째는 금융 전염입니다. [[private credit]] 재평가, 보험사와 [[annuity]] 자금 노출, 주택담보대출 차주의 [[HELOC]] 사용 증가, [[debt-to-income ratio]] 악화를 함께 보면 '아직 조용하지만 안은 무거워지는' 국면을 찾는 데 도움이 됩니다.",
    ],
    takeaways: [
      "가장 먼저 볼 곳은 소비 공포가 아니라 계약 협상과 채용 약세입니다.",
      "실물 신호와 금융 신호를 따로 보지 말고 한 줄로 묶어 봐야 합니다.",
      "겉으로 조용한 국면일수록 할인, 좌석 감소, 우회 대출 같은 작은 신호가 더 중요합니다.",
    ],
  },
  {
    label: "Context 5",
    title: "이 시나리오가 틀리려면 무엇이 먼저 달라져야 하나",
    intro:
      "공부를 제대로 하려면 반대편도 같이 봐야 합니다. 원문은 경고문이지만, 동시에 어떤 조건이 충족되면 이 경고가 약해질지도 거꾸로 생각하게 만듭니다.",
    paragraphs: [
      "첫째, AI가 생산성은 올려도 고용과 임금을 덜 해치는 방식으로 도입돼야 합니다. 즉, 사람을 지우는 자동화보다 사람 한 명이 더 많은 일을 하게 만드는 보완형 도입이 훨씬 많아야 합니다.",
      "둘째, 새 소득 경로가 빨리 생겨야 합니다. 사무직이 줄어드는 속도만큼 다른 고부가가치 일이 만들어지거나, 적어도 감소한 [[labor share of GDP]]를 메울 제도가 빨리 작동해야 합니다.",
      "셋째, 중개층 붕괴가 곧바로 가격 파괴로 이어지지 않아야 합니다. 사람들은 여전히 브랜드, 신뢰, 오프라인 관계, 규제 장벽에 값을 매길 수 있고, 그 덕분에 모든 [[habitual intermediation]]이 한 번에 0이 되지는 않을 수 있습니다.",
      "넷째, 정책이 뒤늦지 않아야 합니다. [[automatic stabilizers]]만으로 모자라다면 [[inference compute tax]]나 [[sovereign wealth fund]] 같은 새로운 장치가 실제 정치 일정 안에서 빠르게 굴러야 합니다. 원문은 바로 이 시간차를 가장 큰 위험으로 봅니다.",
    ],
    takeaways: [
      "반박 포인트의 핵심은 '대체 속도보다 보완과 재분배 속도가 빨라야 한다'입니다.",
      "고용, 임금, 소비가 버티면 금융 전염도 훨씬 약해집니다.",
      "그래서 이 시나리오는 기술 전망만이 아니라 제도와 적응 속도에 대한 테스트이기도 합니다.",
    ],
  },
];

const sectionQuestionBlueprints = {
  preface: [
    {
      idSuffix: "thesis",
      prompt: "Preface를 가장 정확하게 읽은 설명은 무엇인가요?",
      answer: "AI 낙관이 맞더라도 시장과 경제에는 오히려 약세 충격이 될 수 있는 경우를 점검하는 사고실험이다.",
      distractors: [
        "AI 성능이 기대에 못 미쳐 기술주 거품만 조정되는 시나리오를 예측하는 글이다.",
        "정부 규제 강화가 혁신을 멈추게 하는 정치 드라마를 중심에 둔 글이다.",
        "AI 윤리 문제를 도덕적으로 비판하기 위한 선언문에 가깝다.",
      ],
      hint: "핵심은 AI 실패가 아니라 AI 성공이 사람 중심 경제와 충돌할 수 있다는 점입니다.",
      explanation:
        "Preface는 [[left-tail risk]]를 점검하자는 도입부입니다. 가장 가능성 높은 기본 시나리오를 찍기보다, 준비가 덜 된 충격을 먼저 상상해 보자는 태도로 읽어야 합니다.",
    },
    {
      idSuffix: "memo-form",
      prompt: "글을 2028년 메모처럼 꾸민 이유를 가장 잘 설명한 것은 무엇인가요?",
      answer: "미래에서 뒤돌아보는 형식을 써서, 위기가 어느 단계에서 어떻게 번졌는지 연쇄적으로 복기하게 만들기 위해서다.",
      distractors: [
        "숫자와 사건을 확정된 예언처럼 보이게 해 독자를 압도하기 위해서다.",
        "실제 데이터가 부족하다는 약점을 문학적 장치로 감추기 위해서다.",
        "정책 처방만 따로 떼어 강조하기 위한 편집상의 장난에 가깝다.",
      ],
      hint: "이 형식은 '이미 벌어진 일을 돌아보는 메모'처럼 읽히게 만듭니다.",
      explanation:
        "미래 메모 형식은 원인을 시간순으로 역추적하게 해 줍니다. 그래서 독자는 사건 하나보다, 작은 균열이 어떻게 시스템 위기로 커졌는지를 따라가게 됩니다.",
    },
    {
      idSuffix: "reader-posture",
      prompt: "Preface가 독자에게 요구하는 읽기 태도로 가장 적절한 것은 무엇인가요?",
      answer: "가장 평범한 전망보다, 준비가 부족한 큰 충격을 먼저 가정해 보며 고리를 따라 읽는 태도다.",
      distractors: [
        "정확한 숫자 예측이 맞는지만 확인하며 통계표처럼 읽는 태도다.",
        "어차피 비관론이라고 전제하고 반박 포인트만 찾는 태도다.",
        "기술 섹터 이야기로 한정하고 거시경제 연결은 의도적으로 무시하는 태도다.",
      ],
      hint: "도입부는 확률이 가장 높은 미래보다, 놓치기 쉬운 충격을 보자고 말합니다.",
      explanation:
        "이 글은 결론 맞히기보다 구조 읽기가 중요합니다. 어떤 충격이 어디에서 시작해 어디로 번지는지 차근차근 따라가야 나머지 장들이 연결됩니다.",
    },
  ],
  "macro-memo": [
    {
      idSuffix: "ghost-gdp",
      prompt: "Macro Memo의 핵심 역설을 가장 정확하게 고른 것은 무엇인가요?",
      answer: "생산성과 기업 이익은 좋아 보이는데 임금과 소비가 약해져 [[Ghost GDP]]가 생기는 상황이다.",
      distractors: [
        "생산성이 무너져 기업 이익과 고용이 동시에 급락하는 전형적 침체다.",
        "AI 이익이 임금으로 널리 퍼져 소비까지 함께 강해지는 확장 국면이다.",
        "AI 투자 감소가 먼저 나오고 그 결과 실업률이 뒤늦게 높아지는 상황이다.",
      ],
      hint: "표면의 생산성 수치와 실제 생활경제의 체감이 서로 어긋나는 장면입니다.",
      explanation:
        "원문은 숫자상 산출과 실제 순환이 분리되는 순간을 [[Ghost GDP]]로 묘사합니다. 기계가 생산은 늘려도 사람처럼 소비하지 않기 때문에 생기는 역설입니다.",
    },
    {
      idSuffix: "consumer-base",
      prompt: "원문이 '사람 중심 소비경제가 GDP의 큰 축'이라고 강조하는 이유는 무엇인가요?",
      answer: "사람이 하던 일을 기계가 대신해도, 기계는 선택 소비를 하지 않기 때문에 경제 순환의 빈자리가 남기 때문이다.",
      distractors: [
        "기계가 소비를 더 공격적으로 늘려 총수요를 자동으로 키워 주기 때문이다.",
        "GDP에서 소비 비중이 낮기 때문에 생산만 늘면 문제가 거의 없기 때문이다.",
        "정부 이전지출이 소비를 완전히 대체하므로 민간 지출 약화는 중요하지 않기 때문이다.",
      ],
      hint: "원문은 '기계가 discretionary goods를 얼마나 사느냐'는 질문을 던집니다.",
      explanation:
        "이 장의 요지는 생산 수치만으로는 생활경제를 유지할 수 없다는 점입니다. 소비의 주체가 사라지면 [[velocity of money]]가 약해지고, 체감 경기는 빠르게 식습니다.",
    },
    {
      idSuffix: "mortgage-link",
      prompt: "Macro Memo가 미국 주택담보대출 시장을 끌고 들어오는 이유는 무엇인가요?",
      answer: "사무직 소득이 미국 [[prime mortgage]]의 상환 기반이라, 소득 약화가 금융 안정성 문제로 번질 수 있기 때문이다.",
      distractors: [
        "모든 주택대출이 처음부터 부실하게 발행되었기 때문에 구조가 이미 무너져 있기 때문이다.",
        "주택 가격 상승이 지나치게 빨라 소비 호황을 더 자극하고 있기 때문이다.",
        "주택담보대출은 실물경제와 거의 분리되어 있어 충격 흡수 장치가 되기 때문이다.",
      ],
      hint: "여기서는 '대출의 출발점'보다 '차주의 미래 소득'이 중요합니다.",
      explanation:
        "원문은 금융 불안이 갑자기 하늘에서 떨어진다고 보지 않습니다. 사무직 소득 기반이 약해지면 가장 큰 가계 금융 구조인 주택담보대출이 함께 흔들린다는 연결을 보여 줍니다.",
    },
  ],
  "how-it-started": [
    {
      idSuffix: "pricing-power",
      prompt: "How It Started에서 SaaS 업체의 가격 협상력이 흔들리기 시작한 직접 계기는 무엇인가요?",
      answer: "고객이 내부 팀과 AI로 비슷한 기능을 직접 만들 수 있다는 인식이 생기며, 갱신 협상이 달라졌기 때문이다.",
      distractors: [
        "클라우드 사용료가 갑자기 급등해 SaaS 업체가 먼저 가격을 내릴 수밖에 없었기 때문이다.",
        "오픈소스 모델이 금지되면서 모든 기업이 동일한 공급업체만 써야 했기 때문이다.",
        "규제상 외부 소프트웨어 사용이 막혀 기업이 울며 겨자 먹기로 계약을 줄였기 때문이다.",
      ],
      hint: "원문은 '우리가 그냥 직접 만들면 안 되나?'라는 질문이 협상을 뒤집었다고 봅니다.",
      explanation:
        "핵심은 완벽한 대체가 아니라 대체 가능성의 등장입니다. 내부 구축이 진짜 옵션이 되는 순간, 기존 SaaS의 가격표와 갱신 논리는 바로 약해집니다.",
    },
    {
      idSuffix: "systems-of-record",
      prompt: "원문이 [[systems of record]]마저 완전한 안전지대가 아니라고 보는 이유는 무엇인가요?",
      answer: "고객의 인원 감축이 좌석 수와 사용량 감소로 이어져, 견고해 보이던 반복 매출도 같이 깎일 수 있기 때문이다.",
      distractors: [
        "기록 시스템은 기능이 단순해서 오히려 신규 경쟁자가 가격을 올리기 쉬웠기 때문이다.",
        "기록 시스템은 브랜드 가치만으로 유지되므로 실제 사용량 변화와 거의 무관하기 때문이다.",
        "기록 시스템은 보안 규제가 강해질수록 고객당 좌석 수가 자동으로 늘기 때문이다.",
      ],
      hint: "여기서 중요한 것은 제품 종류보다 과금 구조입니다.",
      explanation:
        "원문은 좌석 기반 매출의 기계적 약점을 집습니다. 고객이 AI로 15% 감원하면, 공급업체 매출도 매우 직접적으로 15% 줄 수 있다는 식입니다.",
    },
    {
      idSuffix: "reflexive-loop",
      prompt: "How It Started가 말하는 [[reflexivity]]를 가장 잘 설명한 것은 무엇인가요?",
      answer: "AI에 가장 위협받는 회사가 비용 절감을 위해 AI를 더 공격적으로 도입하면서, 자기 매출 기반까지 더 약하게 만드는 구조다.",
      distractors: [
        "AI에 위협받는 회사일수록 기존 방식을 끝까지 고수해 시장 점유율을 잃는 전형적 혁신 저항 구조다.",
        "AI 도입 기업은 비용을 줄이지 못해 오히려 고용을 늘리며 시장을 방어하는 구조다.",
        "AI 수혜 기업의 주가 상승이 곧바로 소비 증가로 이어져 SaaS 매출을 되살리는 구조다.",
      ],
      hint: "개별 회사의 합리적 선택이 전체 구조에는 더 나쁜 결과를 만드는 부분을 떠올려 보세요.",
      explanation:
        "이 장의 공포는 악의가 아니라 합리성입니다. 각 회사는 살아남기 위해 맞는 선택을 하는데, 그 선택이 모이면 다음 감원과 다음 가격 압박을 더 쉽게 만듭니다.",
    },
  ],
  "friction-zero": [
    {
      idSuffix: "background-agents",
      prompt: "When Friction Went to Zero에서 진짜 전환점으로 그리는 변화는 무엇인가요?",
      answer: "사용자가 일일이 시키지 않아도 에이전트가 백그라운드에서 계속 비교·협상·최적화를 수행하기 시작한 것이다.",
      distractors: [
        "모든 소비자가 직접 가격 비교 사이트를 더 열심히 쓰기 시작한 것이다.",
        "모델 크기가 커져 사람이 기다리는 시간이 길어졌지만 정확도만 올라간 것이다.",
        "모든 플랫폼이 같은 가격을 쓰면서 비교의 의미가 사라진 것이다.",
      ],
      hint: "핵심은 사람이 매번 결정하는 구조에서, 기계가 상시 최적화하는 구조로 넘어간 점입니다.",
      explanation:
        "원문은 에이전트가 단순 검색도구가 아니라 행동 주체가 되는 순간을 강조합니다. 이때 소비는 이벤트가 아니라 24시간 돌아가는 자동화 과정이 됩니다.",
    },
    {
      idSuffix: "friendly-face",
      prompt: "원문이 '인간 관계의 가치'를 과대평가했다고 보는 이유는 무엇인가요?",
      answer: "관계처럼 보이던 가치의 상당 부분이 사실은 친절한 얼굴을 한 [[friction]]이었기 때문이다.",
      distractors: [
        "인간 관계는 남아 있어도 정보 비대칭이 더 커져 수수료를 높일 수 있기 때문이다.",
        "인간 관계는 기술이 발전할수록 법적으로 더 강하게 보호되기 때문이다.",
        "인간 관계는 기계가 가격만 보게 만들어 오히려 더 높은 프리미엄을 받기 때문이다.",
      ],
      hint: "원문은 부동산과 배달앱을 예로 들며 '관계'가 생각보다 방어벽이 아니었다고 봅니다.",
      explanation:
        "관계가 완전히 무가치하다는 뜻은 아닙니다. 다만 많은 중개 수익이 진짜 전문성보다 귀찮음과 시간 부족 위에 서 있었고, 그 기반이 에이전트 앞에서 약해진다는 뜻입니다.",
    },
    {
      idSuffix: "plumbing-shift",
      prompt: "원문이 이 파트를 서비스 경쟁이 아니라 [[plumbing story]]로 읽는 이유는 무엇인가요?",
      answer: "에이전트끼리 거래가 늘면 카드 수수료 같은 결제 마찰이 직접 공격 대상이 되어, 소비 앱 경쟁이 결제 인프라 재편으로 번지기 때문이다.",
      distractors: [
        "소비 앱 충격은 작고 결제망만 독립적으로 흔들리기 때문에 두 이야기를 분리해야 하기 때문이다.",
        "결제 인프라는 인간 습관과 무관하므로 AI 확산과 연결해서 볼 이유가 없기 때문이다.",
        "카드 수수료는 너무 작아 에이전트 입장에선 최적화할 유인이 거의 없기 때문이다.",
      ],
      hint: "원문은 Mastercard 보고서를 '되돌리기 어려운 지점'처럼 다룹니다.",
      explanation:
        "처음엔 배달·여행·보험 같은 서비스 중개가 흔들리지만, 에이전트가 거래 경로를 직접 고르기 시작하면 결국 [[interchange]]와 정산 구조까지 압박이 번집니다.",
    },
  ],
  "systemic-risk": [
    {
      idSuffix: "why-systemic",
      prompt: "From Sector Risk to Systemic Risk가 기술 섹터 문제를 시스템 문제로 확대하는 이유는 무엇인가요?",
      answer: "미국 소비와 세수, 주택금융의 받침대가 사무직 소득이라서, 사무직 충격이 곧 경제 전체 충격으로 번질 수 있기 때문이다.",
      distractors: [
        "미국 경제에서 소비 비중이 낮아 기술 섹터 조정이 전체 경제를 거의 건드리지 않기 때문이다.",
        "사무직 일자리는 제조업과 분리되어 있어 다른 산업의 수요를 거의 좌우하지 않기 때문이다.",
        "AI 충격은 기업 내부 생산성에만 머물고 가계 소득 구조와는 연결되지 않기 때문이다.",
      ],
      hint: "이 장은 '사무직 소득이 어디까지 받치고 있나'를 묻습니다.",
      explanation:
        "원문은 [[white-collar]] 고용을 단순 노동시장 항목이 아니라 소비경제의 기둥으로 봅니다. 그래서 여기의 균열이 섹터 뉴스로 끝나지 않는다고 주장합니다.",
    },
    {
      idSuffix: "weird-mix",
      prompt: "이 장이 그리는 '이상한 조합'으로 가장 적절한 것은 무엇인가요?",
      answer: "사무직 채용은 식고 장기금리는 내려가는데, 동시에 AI 인프라 지출은 강해지는 비대칭 조합이다.",
      distractors: [
        "채용과 소비와 금리와 AI 지출이 모두 같은 방향으로 동시에 강해지는 전형적 호황 조합이다.",
        "AI 지출이 약해지면서 사무직 채용만 먼저 강하게 회복되는 순환 회복 조합이다.",
        "장기금리는 오르는데 소비도 강하고 채용도 뜨거운 인플레이션 재가속 조합이다.",
      ],
      hint: "사람 쪽은 식는데 컴퓨트 쪽만 강한 구도를 떠올려 보세요.",
      explanation:
        "원문이 보는 특징은 '경기 민감 신호는 차가운데 AI 투자만 뜨거운' 상태입니다. 이런 비대칭은 단순한 성장 서사보다 구조 전환 신호에 가깝습니다.",
    },
    {
      idSuffix: "global-spillover",
      prompt: "원문이 미국 밖 국가들까지 언급하는 이유를 가장 잘 고른 것은 무엇인가요?",
      answer: "서비스 수출과 백오피스 인력에 기대던 나라들은 경상수지와 통화 안정성까지 같이 압박받을 수 있기 때문이다.",
      distractors: [
        "AI 확산은 미국 외 국가들의 서비스 수출을 자동으로 늘려 대외수지가 더 좋아지기 때문이다.",
        "서비스 수출 중심 국가는 제조업 비중이 낮아 AI 충격과 거의 무관하기 때문이다.",
        "미국 내 사무직 충격은 국경 안에 갇혀 있고 국제금융 조건과는 연결되지 않기 때문이다.",
      ],
      hint: "원문은 미국 충격이 글로벌 서비스 공급망과 국제수지 문제로도 번질 수 있다고 봅니다.",
      explanation:
        "해외 아웃소싱과 서비스 수출도 결국 인간 사무직 노동 위에 서 있습니다. 그래서 미국의 수요 구조가 바뀌면 다른 나라의 [[current account surplus]]와 자금사정도 흔들릴 수 있습니다.",
    },
  ],
  "displacement-spiral": [
    {
      idSuffix: "headline-lag",
      prompt: "The Intelligence Displacement Spiral에서 헤드라인 실업률만 보면 위험을 늦게 볼 수 있는 이유는 무엇인가요?",
      answer: "해고뿐 아니라 고임금 인력이 저임금 일자리로 내려오고, 남아 있는 사람도 불안 때문에 소비를 줄이기 때문이다.",
      distractors: [
        "실업률은 사무직만 따로 잡아내기 때문에 서비스업 충격을 과장해서 보여 주기 때문이다.",
        "고임금 인력은 대체로 현금이 많아 소비를 거의 줄이지 않기 때문이다.",
        "고용 통계는 AI 시대에 오히려 소비보다 훨씬 빠르게 악화를 반영하기 때문이다.",
      ],
      hint: "원문은 '직장을 잃은 사람'만이 아니라 '남아 있는 사람의 방어적 소비 축소'도 봅니다.",
      explanation:
        "이 장의 포인트는 숫자가 아니라 행동 변화입니다. 해고가 확정되기 전에도 소득 전망이 흐려지면 소비는 먼저 식기 시작합니다.",
    },
    {
      idSuffix: "top-spenders",
      prompt: "원문이 상위 소비층 비중을 강조하는 이유는 무엇인가요?",
      answer: "고소득 사무직이 지출의 큰 몫을 맡고 있어, 일부 계층 충격만으로도 선택 소비가 빠르게 식을 수 있기 때문이다.",
      distractors: [
        "소비는 대부분 저소득층이 결정하므로 고소득층 충격은 거시경제에 거의 영향이 없기 때문이다.",
        "상위 소비층은 불황기에도 지출을 늘리는 경향이 강해 완충 역할을 하기 때문이다.",
        "선택 소비는 전체 소비에서 작은 비중이므로 경기 전환 신호로 보기 어렵기 때문이다.",
      ],
      hint: "원문은 '모든 사람이 동시에 무너져야만 소비가 꺾인다'고 보지 않습니다.",
      explanation:
        "지출이 한쪽에 많이 쏠려 있으면, 그 한쪽이 흔들릴 때 체감 경기는 생각보다 빨리 나빠집니다. 그래서 고소득 사무직의 약화가 중요하게 다뤄집니다.",
    },
    {
      idSuffix: "spiral-chain",
      prompt: "이 장의 나선을 가장 잘 요약한 인과관계는 무엇인가요?",
      answer: "소득 하향 이동이 소비를 줄이고, 줄어든 소비가 기업 매출 압박을 만들며, 그 압박이 다시 AI 투자와 감원을 자극한다.",
      distractors: [
        "감원이 일어나도 소비는 유지되고, 소비 유지가 기업에 추가 고용 여력을 만들어 자동 회복으로 이어진다.",
        "AI 도입이 늘수록 소비도 같이 늘어 기업이 감원을 멈추고 임금을 높인다.",
        "서비스직 전환이 빨라질수록 이전 고임금 수준의 소비가 복원되어 나선이 끊긴다.",
      ],
      hint: "한 고리가 다음 고리를 강화하는 구조라는 점을 떠올려 보세요.",
      explanation:
        "원문은 이 과정을 자연 브레이크가 없는 음의 루프로 묘사합니다. 각 단계가 다음 자동화와 다음 소비 둔화를 쉽게 만들어 연쇄가 지속된다는 뜻입니다.",
    },
  ],
  "daisy-chain": [
    {
      idSuffix: "credit-core",
      prompt: "The Daisy Chain of Correlated Bets가 말하는 핵심 취약점은 무엇인가요?",
      answer: "반복매출과 안정적 성장에 기대어 쌓인 사모 신용 구조가, AI가 그 반복성을 흔들면 한꺼번에 재평가되기 쉽다는 점이다.",
      distractors: [
        "사모 신용은 실물 매출과 무관하게 움직여 SaaS 충격과 거의 연결되지 않는다는 점이다.",
        "반복매출 모델은 경기와 기술 변화에 가장 둔감하므로 오히려 안전자산처럼 행동한다는 점이다.",
        "AI 도입이 늘수록 사모 신용의 회수율이 자동으로 개선된다는 점이다.",
      ],
      hint: "원문은 '반복'이라는 가정을 사실상 담보처럼 사용한 구조를 의심합니다.",
      explanation:
        "이 장은 [[ARR]]이 영원히 반복될 것이라는 믿음이 깨질 때 어떤 금융 구조가 민감한지 보여 줍니다. 매출의 안정성 가정이 흔들리면 신용 구조 전체가 다시 계산됩니다.",
    },
    {
      idSuffix: "marks-lag",
      prompt: "원문이 비상장 구조의 '느린 평가'를 안심 재료로 보지 않는 이유는 무엇인가요?",
      answer: "거래가 적고 구조가 복잡하면 손실이 없어지는 것이 아니라 늦게 드러날 뿐이기 때문이다.",
      distractors: [
        "거래가 적을수록 실제 손실도 자동으로 작아지기 때문이다.",
        "장부 평가가 느리면 대출 계약 조건도 함께 사라져 위험이 줄어들기 때문이다.",
        "비상장 구조는 투자자 환매가 없어서 가치 훼손이 원천적으로 불가능하기 때문이다.",
      ],
      hint: "원문은 '표시가 늦다'와 '위험이 없다'를 구분합니다.",
      explanation:
        "가격이 매일 찍히지 않는다고 해서 손실이 사라지는 것은 아닙니다. 오히려 [[SPV]], 보험자금, 늦은 마킹이 겹치면 어디에 얼마나 쌓였는지 보기가 더 어려워집니다.",
    },
    {
      idSuffix: "correlated-bets",
      prompt: "원문이 이 구조를 '서로 연결된 상관 베팅'이라고 부르는 이유는 무엇인가요?",
      answer: "겉보기 자산은 달라도 대부분이 '사무직 생산성과 SaaS 현금흐름은 계속 버틴다'는 같은 가정 위에 놓여 있기 때문이다.",
      distractors: [
        "각 자산이 완전히 다른 산업과 현금흐름을 가져 공통 가정이 거의 없기 때문이다.",
        "규제가 강할수록 자산 간 상관관계가 자동으로 낮아지기 때문이다.",
        "보험사와 연금 자금은 소프트웨어 가치평가와 연결되지 않기 때문이다.",
      ],
      hint: "겉모습이 다른 자산들이 실제론 같은 전제 하나에 걸려 있다는 점을 보세요.",
      explanation:
        "원문은 다양한 구조가 따로따로인 것처럼 보여도 실제론 같은 신념에 기대고 있었다고 봅니다. 그래서 한 가정이 깨질 때 충격이 동시에 퍼질 수 있습니다.",
    },
  ],
  "mortgage-question": [
    {
      idSuffix: "vs-2008",
      prompt: "The Mortgage Question가 2008년과 이번 시나리오를 구분하는 핵심은 무엇인가요?",
      answer: "이번 우려는 초기 대출 질보다 차주의 미래 소득 경로가 무너질 수 있다는 데 더 가깝다.",
      distractors: [
        "이번에도 핵심은 처음부터 부실한 대출이 대량 발행되었다는 점이다.",
        "이번엔 주택 가격이 너무 강해 오히려 대출 건전성이 자동으로 좋아진다는 점이다.",
        "이번엔 모기지 시장이 실물경제와 분리되어 있어 고용 충격과 거의 연결되지 않는다는 점이다.",
      ],
      hint: "원문은 '오늘의 건전함'과 '내일의 소득'을 구분합니다.",
      explanation:
        "이 장은 대출 출발점보다 상환 능력의 미래를 봅니다. 지금은 멀쩡한 [[prime mortgage]]라도 소득 경로가 흔들리면 다시 위험자산처럼 읽힐 수 있다는 뜻입니다.",
    },
    {
      idSuffix: "hidden-stress",
      prompt: "원문이 [[HELOC]]와 카드부채, 은퇴계정 대출을 같이 언급하는 이유는 무엇인가요?",
      answer: "가계가 여러 우회 수단으로 시간을 벌 수 있어, 표면상 연체보다 내부 스트레스가 먼저 커질 수 있기 때문이다.",
      distractors: [
        "이 수단들은 모두 가계 부채를 자동으로 줄여 주택 시장을 안정시키기 때문이다.",
        "이 수단들은 주택가격과 무관하게 소득 감소를 즉시 상쇄해 주기 때문이다.",
        "이 수단들은 사용량이 늘수록 차주의 부채비율을 개선해 주기 때문이다.",
      ],
      hint: "원문은 문제가 안 보인다고 문제가 없다고 보지 않습니다.",
      explanation:
        "가계는 보통 바로 무너지지 않고 버팁니다. 그래서 [[debt-to-income ratio]]가 안에서 먼저 나빠지고, 연체와 강제 매물은 나중에야 드러날 수 있습니다.",
    },
    {
      idSuffix: "metro-risk",
      prompt: "기술 대도시가 먼저 흔들릴 수 있다고 보는 논리로 가장 적절한 것은 무엇인가요?",
      answer: "고연봉 사무직 수요에 기대던 지역일수록 소득 충격이 주택 수요와 가격에 더 빨리 반영될 수 있기 때문이다.",
      distractors: [
        "기술 대도시는 주택공급이 충분해 소득 충격이 가격에 잘 반영되지 않기 때문이다.",
        "기술 대도시는 금리 변화와 무관하게 항상 같은 수준의 주택 수요가 유지되기 때문이다.",
        "고연봉 수요가 많은 지역일수록 오히려 AI 충격에 대한 방어력이 자동으로 강해지기 때문이다.",
      ],
      hint: "이 장은 지역별로 소득 기반이 얼마나 한쪽에 몰려 있는지도 봅니다.",
      explanation:
        "원문은 집값을 추상적 국가 평균으로만 보지 않습니다. 특정 소득 구조에 기대던 도시일수록 노동시장 변화가 더 빠르게 주택시장으로 번질 수 있습니다.",
    },
  ],
  "battle-against-time": [
    {
      idSuffix: "policy-lag",
      prompt: "The Battle Against Time에서 '시간'이 핵심 변수인 이유는 무엇인가요?",
      answer: "소득과 소비가 약해져 세수는 줄어드는데 지원 수요는 늘어나므로, 정책이 늦을수록 같은 처방의 효과가 약해지기 때문이다.",
      distractors: [
        "세수와 지원 수요가 같은 방향으로 움직여 정책 시차가 거의 중요하지 않기 때문이다.",
        "AI 충격은 완전히 순환적이어서 시간이 지나면 자동으로 원래 상태로 돌아오기 때문이다.",
        "정책은 언제 도입해도 동일한 속도로 실물경제에 반영되기 때문이다.",
      ],
      hint: "원문은 정답 부재만큼이나 집행의 늦음을 위험하게 봅니다.",
      explanation:
        "이 장은 내용보다 타이밍을 무섭게 봅니다. 충격이 먼저 퍼진 뒤에야 제도가 움직이면, 같은 정책도 훨씬 더 작은 효과만 낼 수 있습니다.",
    },
    {
      idSuffix: "stabilizers",
      prompt: "원문이 [[automatic stabilizers]]만으로는 부족할 수 있다고 보는 이유는 무엇인가요?",
      answer: "경기순환용 장치는 일시적 침체엔 맞지만, 인간 노동의 구조적 대체 속도를 따라가기엔 부족할 수 있기 때문이다.",
      distractors: [
        "자동 안정 장치는 구조 변화가 클수록 더 강력하게 작동해 새 제도를 불필요하게 만들기 때문이다.",
        "자동 안정 장치는 오직 물가상승기에만 쓰이고 경기하강기에는 거의 작동하지 않기 때문이다.",
        "자동 안정 장치는 노동소득이 줄수록 세수를 자동으로 늘려 주기 때문이다.",
      ],
      hint: "순환 경기 문제와 구조 변화 문제를 구분해 보세요.",
      explanation:
        "실업급여와 기존 이전지출은 중요하지만, 원문은 그것만으로는 속도와 규모가 맞지 않을 수 있다고 봅니다. 문제의 뿌리가 경기순환보다 배분 구조에 더 가깝기 때문입니다.",
    },
    {
      idSuffix: "new-claims",
      prompt: "원문이 [[inference compute tax]]나 [[sovereign wealth fund]] 같은 아이디어를 꺼내는 이유는 무엇인가요?",
      answer: "AI 수익이 노동소득 바깥으로 쏠릴 때, 감소한 [[labor share of GDP]]를 메울 새 청구권이 필요할 수 있기 때문이다.",
      distractors: [
        "AI 수익은 이미 광범위하게 임금으로 환원되므로 추가 배분 장치가 필요 없기 때문이다.",
        "새로운 과세나 공적 보유 장치는 오직 인플레이션 억제와만 관련 있고 소득 배분과는 무관하기 때문이다.",
        "노동소득 비중이 내려갈수록 기존 세금 체계가 더 강해져 재정 공백이 자동으로 줄어들기 때문이다.",
      ],
      hint: "이 장은 'AI 이익을 누가 어떻게 가져가느냐'를 묻습니다.",
      explanation:
        "정책 아이디어의 목적은 AI 자체를 벌주는 것이 아니라, 사람 소득이 줄어드는 구조에서 사회 전체가 어떤 식으로 다시 몫을 가질지 묻는 데 있습니다.",
    },
  ],
  "premium-unwind": [
    {
      idSuffix: "repricing",
      prompt: "The Intelligence Premium Unwind가 재평가된다고 보는 대상은 무엇인가요?",
      answer: "희소한 인간 인지 노동에 붙어 있던 높은 가격표, 즉 [[intelligence premium]]이다.",
      distractors: [
        "모든 인간 노동 전체의 가치가 예외 없이 0으로 수렴한다는 가정이다.",
        "오직 반도체 기업의 자본지출 계획만 다시 가격 매겨진다는 주장이다.",
        "기계 계산 비용이 오르기 때문에 인간 노동이 다시 희소해진다는 가정이다.",
      ],
      hint: "원문은 인간 전체의 쓸모를 말하는 게 아니라, 특정 노동 가격표를 말합니다.",
      explanation:
        "이 결론의 중심은 재평가입니다. 과거에 비싸게 매겨졌던 일부 지적 노동의 시장가격이 다시 계산될 수 있다는 뜻이지, 인간 가치가 사라진다는 선언이 아닙니다.",
    },
    {
      idSuffix: "not-collapse",
      prompt: "이 장을 종말론으로 읽으면 안 되는 이유를 가장 잘 설명한 것은 무엇인가요?",
      answer: "인간 가치 전체가 사라진다는 말이 아니라, 너무 비싸게 매겨졌던 일부 인지 노동의 가격이 먼저 내려갈 수 있다는 뜻이기 때문이다.",
      distractors: [
        "원문은 AI가 실제로는 경제에 거의 영향을 주지 못한다고 보기 때문이다.",
        "원문은 사무직과 소비 충격이 오더라도 금융시장에는 전혀 번지지 않는다고 보기 때문이다.",
        "원문은 새로운 소득 구조가 이미 완성되었으니 조정이 거의 없다고 보기 때문이다.",
      ],
      hint: "이 장은 부정이 아니라 범위 조정의 문제입니다.",
      explanation:
        "결론은 '사람이 무가치하다'가 아니라 '무엇이 진짜로 희소한 인간 능력인가를 다시 묻자'에 가깝습니다. 다만 그 재평가 과정이 아플 수 있다는 점을 강조합니다.",
    },
    {
      idSuffix: "canary",
      prompt: "원문이 마지막에 '카나리아가 아직 완전히 죽지 않았다'는 식의 어조를 남기는 이유는 무엇인가요?",
      answer: "위기가 끝났다는 뜻이 아니라, 경고 신호를 읽고 대비할 시간이 아직 남아 있다는 뜻이기 때문이다.",
      distractors: [
        "실제 위험은 이미 지나갔고 앞으로는 자동 회복만 남았다는 뜻이기 때문이다.",
        "금융시장 조정이 끝났으니 소비와 고용은 더 볼 필요가 없다는 뜻이기 때문이다.",
        "AI 충격은 기술 섹터 안에서만 정리되었으니 시스템 문제로 보지 말라는 뜻이기 때문이다.",
      ],
      hint: "마지막 문장은 안심보다 경고에 가깝습니다.",
      explanation:
        "원문은 절망으로 끝내지 않습니다. 하지만 그 낙관은 '문제 없음'이 아니라 '지금이라도 읽고 대비하면 늦지 않을 수 있음'에 더 가깝습니다.",
    },
  ],
};

const termClusters = {
  framing: ["left-tail risk", "Ghost GDP", "velocity of money", "intelligence premium"],
  "labor-consumer": ["white-collar", "prime mortgage", "JOLTS", "discretionary spending", "labor share of GDP"],
  software: ["agentic coding", "CIO", "procurement", "systems of record", "ACV", "reflexivity"],
  intermediation: [
    "friction",
    "intermediation",
    "customer lifetime value",
    "moat",
    "habitual intermediation",
    "interchange",
    "stablecoin",
    "plumbing story",
  ],
  "global-infrastructure": ["OpEx substitution", "hyperscaler", "current account surplus", "IMF"],
  "private-finance": [
    "private credit",
    "leveraged buyout",
    "ARR",
    "EBITDA",
    "debt covenant",
    "closed-end vehicle",
    "permanent capital",
    "annuity",
    "regulatory arbitrage",
    "SPV",
    "risk-based capital",
  ],
  "household-policy": [
    "HELOC",
    "debt-to-income ratio",
    "QE",
    "automatic stabilizers",
    "inference compute tax",
    "sovereign wealth fund",
  ],
};

const termClusterLookup = Object.fromEntries(
  Object.values(termClusters).flatMap((labels) =>
    labels.map((label) => [normalizeTerm(label), labels]),
  ),
);

init();
