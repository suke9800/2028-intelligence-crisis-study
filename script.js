"use strict";

const conceptBank = [];

conceptBank.push(
  {
    id: "productivity-jump",
    category: "기초 프레임",
    title: "AI 생산성 점프",
    quick: "AI가 보조가 아니라 직원 한두 명 몫을 대신하는 순간",
    easy: "쉽게 말해 회사가 같은 일을 더 적은 사람으로 해내는 상황이다.",
    why: "생산성이 갑자기 뛰면 기업은 먼저 인건비를 줄일 유인을 느낀다.",
    next: "채용이 느려지고, 기존 인력도 '굳이 이렇게 많이 필요할까?'라는 질문을 받기 시작한다.",
    metaphor: "계단 옆에 초고속 엘리베이터가 생기면 계단 안내원의 일이 먼저 줄어드는 장면과 비슷하다.",
    hook: "핵심은 '기술이 좋아졌다'가 아니라 '사람 대신 돌려도 된다'가 빨라진다는 점이다.",
    explanation:
      "이 글은 AI를 멋진 발명품으로만 보지 않는다. 기업 입장에서는 같은 매출을 만들 때 사람을 덜 써도 되면 인건비를 줄이고 싶어진다. 그래서 생산성 향상이 모두에게 축복으로 흘러가기 전에 먼저 노동시장 충격으로 보일 수 있다고 본다.",
    statement: "AI는 생산성을 올리지만 그 이익이 자동으로 노동자에게 나눠지지는 않는다.",
    terms: [
      {
        word: "생산성",
        meaning: "같은 시간에 얼마나 많은 결과를 내느냐",
        hook: "한 사람이 하루 10개 하던 일을 20개 하면 생산성이 오른 것이다.",
      },
      {
        word: "자동화",
        meaning: "사람이 하던 일을 소프트웨어나 기계가 대신하는 것",
        hook: "엑셀 정리하던 사람 대신 AI가 버튼 한 번에 보고서를 만드는 그림이다.",
      },
    ],
  },
  {
    id: "labor-bargaining",
    category: "기초 프레임",
    title: "노동 협상력 약화",
    quick: "회사가 '사람 아니어도 된다'고 느끼면 직원의 협상 카드가 약해진다.",
    easy: "쉽게 말해 월급 올려 달라고 말하기가 훨씬 어려워지는 상황이다.",
    why: "일자리가 남아 있어도 대체 가능성이 커지면 임금 상승 압력이 약해진다.",
    next: "겉으론 고용이 유지돼도 월급과 승진 속도는 둔해지고 소비 여력이 줄어든다.",
    metaphor: "한 식당에 손님은 비슷한데 대기 줄에 대체 셰프가 100명 서 있는 모습과 비슷하다.",
    hook: "사람을 바로 자르지 않아도 협상력만 약해져도 체감 경기는 차가워질 수 있다.",
    explanation:
      "많은 사람은 실업자 수만 본다. 하지만 글의 포인트는 그 전 단계다. 회사가 '이 사람을 꼭 붙잡아야 하나?'라고 생각하는 순간부터 임금 협상은 달라진다. 그래서 해고가 크게 늘기 전에도 가계는 먼저 팍팍해질 수 있다.",
    statement: "실업이 폭발하기 전에도 협상력 약화만으로 가계 체감은 나빠질 수 있다.",
    terms: [
      {
        word: "협상력",
        meaning: "내가 원하는 조건을 밀어붙일 수 있는 힘",
        hook: "회사가 나를 놓치기 싫어하면 협상력이 세고, 대체 인력이 많으면 약하다.",
      },
      {
        word: "임금 압력",
        meaning: "월급이 올라가게 만드는 힘",
        hook: "사람 구하기 어려우면 임금 압력이 강해지고, 대체 수단이 많으면 약해진다.",
      },
    ],
  },
  {
    id: "capex-concentration",
    category: "산업 충격",
    title: "AI 투자 수익의 집중",
    quick: "AI 열풍의 돈은 모두에게 고르게 가지 않고 일부 플랫폼과 자본에 먼저 쏠린다.",
    easy: "쉽게 말해 시장 전체가 좋아 보이지만 실제 돈은 몇몇 거대 기업 쪽으로 몰리는 그림이다.",
    why: "돈이 넓게 퍼지지 않으면 대다수 가계의 소비 체력은 같이 좋아지지 않는다.",
    next: "지수는 버티는데 일반 기업과 일반 직장인의 체감은 점점 따로 놀게 된다.",
    metaphor: "동네 전체에 비가 오는 줄 알았는데 사실은 초대형 물탱크 몇 개에만 물이 차는 상황이다.",
    hook: "주가가 강하다고 경제 전체가 건강하다는 뜻은 아니라는 점이 중요하다.",
    explanation:
      "AI 투자는 막대하지만 그 수익은 GPU, 클라우드, 거대 플랫폼, 상위 자본가에게 먼저 모이기 쉽다. 그러면 시장 지표는 화려한데 소비 기반은 약해진다. 글은 이 '겉보기 호황, 속은 편중'을 큰 위험 신호로 본다.",
    statement: "수익이 소수에게 몰리면 지수는 강해도 소비 기반은 약해질 수 있다.",
    terms: [
      {
        word: "집중",
        meaning: "돈이나 힘이 넓게 퍼지지 않고 일부에 몰리는 것",
        hook: "피자 8조각을 8명이 나누지 않고 2명이 대부분 먹는 모습이다.",
      },
      {
        word: "자본지출",
        meaning: "기업이 장비, 서버, 데이터센터 같은 큰 자산에 쓰는 돈",
        hook: "월세가 아니라 건물을 사는 쪽에 가까운 큰 투자다.",
      },
    ],
  },
  {
    id: "hyperscaler-power",
    category: "산업 충격",
    title: "하이퍼스케일러의 힘",
    quick: "AI 시대의 수도관을 쥔 회사들이 더 강해진다.",
    easy: "쉽게 말해 AI를 쓰려면 결국 큰 서버 회사 문을 통과해야 하는 구조다.",
    why: "인프라를 쥔 쪽은 가격과 규칙을 정할 힘이 커진다.",
    next: "작은 회사는 AI를 써도 마진이 얇고, 큰 플랫폼은 더 두꺼운 이익을 챙긴다.",
    metaphor: "모두가 요리사가 되어도 가스 밸브는 몇 명만 쥐고 있는 주방과 비슷하다.",
    hook: "앱을 만드는 회사보다 그 앱이 돌아갈 전기와 서버를 파는 회사가 더 세질 수 있다.",
    explanation:
      "AI 서비스가 늘수록 뒤에서 연산을 공급하는 초대형 클라우드 사업자의 영향력도 커진다. 결국 많은 기업이 AI를 팔아도, 그 밑단의 서버와 전력 비용은 몇몇 거대 사업자에게 흘러간다. 그래서 이익 구조가 더 위로 빨려 올라간다.",
    statement: "인프라를 쥔 회사는 AI 붐에서 반복적으로 통행료를 받을 수 있다.",
    terms: [
      {
        word: "하이퍼스케일러",
        meaning: "초대형 클라우드와 데이터센터를 운영하는 거대 사업자",
        hook: "동네 PC방이 아니라 도시 전체 전산실을 가진 회사라고 생각하면 쉽다.",
      },
      {
        word: "인프라",
        meaning: "서비스가 돌아가기 위한 밑바닥 구조물",
        hook: "화려한 앱이 자동차라면 인프라는 도로와 주유소에 가깝다.",
      },
    ],
  },
  {
    id: "service-deflation",
    category: "산업 충격",
    title: "서비스 가격 하락 압력",
    quick: "AI가 반복 업무를 싸게 만들면 서비스 단가가 내려간다.",
    easy: "쉽게 말해 예전엔 10만 원 받던 작업을 이제 3만 원에 해 달라는 압박이 생긴다.",
    why: "소비자에겐 좋을 수 있지만, 그 일로 먹고살던 사람과 기업엔 수익 압박이 된다.",
    next: "가격 인하 경쟁이 붙으면 매출은 유지돼도 남는 돈이 줄어든다.",
    metaphor: "사진 필터 앱이 늘어나자 증명사진 보정 가게들이 가격 경쟁에 들어가는 장면과 비슷하다.",
    hook: "싸고 빨라진다는 말은 누군가의 단가가 깎인다는 말과 거의 같다.",
    explanation:
      "AI 덕분에 많은 사무, 디자인, 콘텐츠, 분석 업무의 원가가 떨어질 수 있다. 문제는 원가 하락이 곧바로 모두의 여유로 바뀌지 않는다는 점이다. 보통은 먼저 가격 경쟁과 단가 인하로 나타난다. 글은 이 과정을 산업 전반의 수익성 압박으로 본다.",
    statement: "AI가 비용을 낮추면 소비자는 좋을 수 있지만 공급자의 마진은 먼저 눌릴 수 있다.",
    terms: [
      {
        word: "디플레이션",
        meaning: "가격이 내려가는 힘",
        hook: "비슷한 물건이 계속 더 싸져서 판매자가 버티기 힘들어지는 상황이다.",
      },
      {
        word: "단가",
        meaning: "한 건당 받는 가격",
        hook: "블로그 글 1개에 10만 원 받던 것이 4만 원이 되면 단가가 내려간 것이다.",
      },
    ],
  },
  {
    id: "margin-wage-split",
    category: "산업 충격",
    title: "마진과 임금의 갈라짐",
    quick: "기업 이익은 오르는데 사람 월급은 따라가지 못하는 균열",
    easy: "쉽게 말해 회사 성적표는 좋아 보이는데 직원 통장은 생각보다 안 좋아지는 그림이다.",
    why: "이익과 월급이 따로 놀면 총수요가 약해지고 사회적 불만도 커진다.",
    next: "상위 자본가의 소비는 늘어도 중간층 소비가 약해지면서 경제의 허리가 흔들린다.",
    metaphor: "학교 평균 점수는 올랐는데 절반 학생은 여전히 낙제선 근처에 있는 모습이다.",
    hook: "기업 실적과 국민 체감이 갈라지는 순간이 위험하다.",
    explanation:
      "시장은 기업 이익 증가를 반길 수 있다. 하지만 가계 소득이 같이 늘지 않으면 그 호황은 오래 버티기 어렵다. 경제는 결국 사람들이 쓰는 돈으로 굴러가기 때문이다. 그래서 글은 '마진은 좋고 월급은 약한' 상태를 매우 불안한 조합으로 본다.",
    statement: "기업 이익 증가만으로는 넓은 소비 회복이 보장되지 않는다.",
    terms: [
      {
        word: "마진",
        meaning: "매출에서 비용을 빼고 남는 몫",
        hook: "10만 원에 팔아 7만 원 들었다면 3만 원이 마진이다.",
      },
      {
        word: "총수요",
        meaning: "경제 전체에서 사람들이 실제로 사려고 쓰는 돈의 총합",
        hook: "가게마다 손님이 줄면 총수요가 약해진다고 보면 된다.",
      },
    ],
  }
);
window.addEventListener("load", () => {
  questionBank = buildQuestionBank();
  categories = ["전체", ...new Set(questionBank.map((question) => question.category))];
  init();
});

const storyCards = [];
const timelineItems = [];
const loopStages = [];
const chapters = [];
const extraGlossary = [];

conceptBank.push(
  {
    id: "white-collar-shock",
    category: "실물경제",
    title: "화이트칼라 충격",
    quick: "공장보다 먼저 사무직이 흔들릴 수 있다는 경고",
    easy: "쉽게 말해 깔끔한 사무실 일도 AI 앞에서는 생각보다 빨리 흔들릴 수 있다는 뜻이다.",
    why: "중산층 소득의 중심축인 사무직이 약해지면 소비의 허리가 꺾인다.",
    next: "당장 해고가 아니어도 프리랜서화, 프로젝트 계약화, 승진 정체가 번진다.",
    metaphor: "안전지대라 믿었던 2층 발코니 바닥이 먼저 흔들리는 느낌이다.",
    hook: "사람들이 안전하다고 믿던 직무가 흔들리면 심리 충격도 훨씬 크다.",
    explanation:
      "과거 자동화 공포는 주로 공장, 단순 노동과 연결됐다. 그런데 생성형 AI는 보고서, 요약, 번역, 디자인 시안, 코드 초안처럼 사무직 영역도 건드린다. 그래서 중산층의 안정 장치가 약해질 수 있다는 점이 이 글의 핵심 중 하나다.",
    statement: "AI 충격은 블루칼라만이 아니라 화이트칼라 중산층에도 강하게 닿을 수 있다.",
    terms: [
      {
        word: "화이트칼라",
        meaning: "사무, 관리, 분석, 기획 같은 책상 중심 직무",
        hook: "공장 현장보다 컴퓨터 앞에서 일하는 직무를 떠올리면 된다.",
      },
      {
        word: "중산층",
        meaning: "소비와 세금 기반을 받치는 경제의 허리 계층",
        hook: "이 계층이 튼튼해야 식당, 카페, 교육, 주거 시장이 안정적으로 돈다.",
      },
    ],
  },
  {
    id: "demand-shock",
    category: "실물경제",
    title: "수요 둔화",
    quick: "월급과 고용 불안이 커지면 사람들은 지갑부터 닫는다.",
    easy: "쉽게 말해 겁이 나면 사람은 새 차보다 통장 잔고를 먼저 챙긴다.",
    why: "경제는 소비가 버텨야 도는데, 소비가 식으면 기업 실적도 결국 따라 식는다.",
    next: "기업은 더 방어적으로 변하고, 다시 채용과 투자에 브레이크를 건다.",
    metaphor: "놀이공원에 비가 온다는 소문만 돌아도 사람들은 입장권 구매부터 미루는 것과 같다.",
    hook: "위기는 종종 숫자보다 심리에서 먼저 시작된다.",
    explanation:
      "가계는 미래가 불안하면 지출을 미룬다. 외식, 여행, 가전, 차, 집 수리처럼 '지금 안 해도 되는 소비'부터 줄어든다. 그러면 기업 매출이 약해지고, 기업은 다시 비용을 줄인다. 글은 이 악순환의 출발점에 AI발 소득 불안을 놓고 있다.",
    statement: "소득 불안은 소비 축소를 통해 다시 기업 실적을 누르는 역풍이 된다.",
    terms: [
      {
        word: "수요",
        meaning: "사람들이 실제로 사고 싶어 하고 살 돈도 있는 상태",
        hook: "보고만 있는 건 수요가 아니고, 지갑을 열 준비가 되어 있어야 수요다.",
      },
      {
        word: "심리",
        meaning: "경제 주체가 느끼는 불안, 자신감, 기대감",
        hook: "같은 월급이어도 불안하면 덜 쓰고, 자신 있으면 더 쓴다.",
      },
    ],
  },
  {
    id: "housing-stress",
    category: "실물경제",
    title: "주택 부담의 압력",
    quick: "소득이 흔들릴 때 가장 무거운 고정비는 집이다.",
    easy: "쉽게 말해 월급이 흔들리면 제일 먼저 무섭게 느껴지는 청구서가 집값과 대출이다.",
    why: "주거비는 가계 예산에서 덩치가 커서 작은 소득 충격도 크게 느껴지게 만든다.",
    next: "연체가 늘고, 주택시장 분위기가 식고, 소비는 더 얼어붙는다.",
    metaphor: "작은 배에 돌멩이 하나가 아니라 닻 하나가 매달려 있는 상태와 비슷하다.",
    hook: "집은 감정적으로도 크고 금액으로도 크다. 그래서 충격을 증폭시킨다.",
    explanation:
      "월세든 주담대든 주거비는 대부분의 가계에서 가장 큰 항목 중 하나다. AI 충격이 소득을 흔들면 가장 버티기 어려운 고정비가 바로 여기서 드러난다. 그래서 글은 주택과 모기지 시장을 중요한 전염 경로로 본다.",
    statement: "소득 충격은 주거비 부담을 통해 훨씬 크게 체감될 수 있다.",
    terms: [
      {
        word: "고정비",
        meaning: "경기가 나빠도 매달 거의 꼭 나가는 비용",
        hook: "통신비, 월세, 대출이자처럼 끊거나 줄이기 어려운 돈이다.",
      },
      {
        word: "연체",
        meaning: "정해진 날짜에 돈을 못 갚는 상태",
        hook: "카드값이나 대출 이자를 제때 못 내면 연체가 된다.",
      },
    ],
  },
  {
    id: "mortgage-bridge",
    category: "실물경제",
    title: "모기지라는 다리",
    quick: "가계 문제는 모기지를 타고 금융시장으로 건너간다.",
    easy: "쉽게 말해 개인의 집 대출 문제가 은행과 채권시장 문제로 번지는 통로다.",
    why: "가계 문제로 끝나지 않고 금융 시스템 전체의 스트레스로 커질 수 있다.",
    next: "대출 자산 가격이 흔들리면 은행, 투자자, 시장 심리가 한꺼번에 긴장한다.",
    metaphor: "개별 집마다 난 작은 불씨가 대출이라는 전선을 타고 큰 변전소로 번지는 그림이다.",
    hook: "문제는 집값이 아니라, 그 집을 담보로 쌓인 금융상품 덩어리다.",
    explanation:
      "주택담보대출은 단순히 한 사람과 은행의 약속으로 끝나지 않는다. 그 대출은 묶여서 상품이 되고, 투자자 자산이 되고, 금융기관 장부가 된다. 그래서 가계의 균열이 금융의 균열로 이어질 수 있다.",
    statement: "모기지는 가계 스트레스를 금융 시스템으로 옮기는 다리 역할을 할 수 있다.",
    terms: [
      {
        word: "모기지",
        meaning: "집을 담보로 잡고 받는 장기 대출",
        hook: "집이 대출의 보증 역할을 하는 구조라고 생각하면 쉽다.",
      },
      {
        word: "담보",
        meaning: "돈을 못 갚을 때 대신 잡히는 자산",
        hook: "빌린 돈의 안전장치로 맡겨 두는 물건이라고 보면 된다.",
      },
    ],
  },
  {
    id: "bank-balance-sheet",
    category: "금융 전염",
    title: "은행 장부 스트레스",
    quick: "대출이 흔들리면 은행 장부의 건강도 흔들린다.",
    easy: "쉽게 말해 은행의 자산 칸에 적혀 있던 숫자가 갑자기 덜 믿을 만해지는 상황이다.",
    why: "은행이 움츠러들면 대출이 더 까다로워지고 실물경제는 더 차가워진다.",
    next: "신용이 경색되면 멀쩡한 기업과 가계도 돈줄이 막혀 힘들어진다.",
    metaphor: "멀쩡해 보이던 냉장고 안 음식이 사실 유통기한 직전이었다는 걸 뒤늦게 아는 느낌이다.",
    hook: "금융위기는 종종 '돈이 없어져서'가 아니라 '장부를 못 믿어서' 시작된다.",
    explanation:
      "은행은 예금만 보관하는 곳이 아니라, 대출 자산을 쌓아 수익을 만든다. 그런데 대출의 건전성이 흔들리면 장부 전체가 의심받는다. 그러면 은행은 방어적으로 변하고, 경제 전체의 돈 흐름이 갑자기 말라붙을 수 있다.",
    statement: "은행의 대출 자산 신뢰가 흔들리면 경제 전체 신용 공급이 위축될 수 있다.",
    terms: [
      {
        word: "장부",
        meaning: "은행이나 기업이 가진 자산과 부채를 적어 둔 기록",
        hook: "가계부의 초대형 버전이라고 생각하면 된다.",
      },
      {
        word: "건전성",
        meaning: "재무 상태가 얼마나 튼튼하고 안전한지",
        hook: "겉보기 화려함보다 오래 버틸 힘이 있느냐를 보는 말이다.",
      },
    ],
  },
  {
    id: "credit-spread",
    category: "금융 전염",
    title: "신용 스프레드 확대",
    quick: "불안이 커지면 투자자들은 위험한 곳에 더 높은 이자를 요구한다.",
    easy: "쉽게 말해 '너 요즘 좀 위험해 보여, 그러니 돈 빌리려면 더 비싸게 가져가'가 된다.",
    why: "이자 비용이 오르면 이미 약한 기업과 가계는 더 빨리 무너진다.",
    next: "돈 조달이 어려워진 기업은 채용, 투자, 운영을 더 세게 줄인다.",
    metaphor: "비가 올 것 같을 때 우산 가격이 갑자기 뛰는 것과 비슷하다.",
    hook: "위기는 금리 인하보다 먼저 위험 프리미엄 상승으로 체감될 수 있다.",
    explanation:
      "같은 금리 시대라도 모두가 똑같이 돈을 빌리는 건 아니다. 불안이 커지면 투자자는 안전한 자산만 선호하고, 위험한 쪽에는 더 높은 수익을 요구한다. 그 차이가 커질수록 실물경제의 약한 고리가 먼저 끊어진다.",
    statement: "불안 국면에서는 기준금리보다 위험 프리미엄 상승이 더 아프게 작동할 수 있다.",
    terms: [
      {
        word: "스프레드",
        meaning: "두 금리나 가격 사이의 차이",
        hook: "1%와 4%의 차이 3%포인트가 스프레드다.",
      },
      {
        word: "위험 프리미엄",
        meaning: "위험한 대상에 돈을 빌려줄 때 추가로 요구하는 보상",
        hook: "친한 친구보다 처음 보는 사람에게 더 센 조건을 거는 느낌이다.",
      },
    ],
  }
);

storyCards.push(
  {
    step: "Step 1",
    title: "AI가 '멋진 장난감'에서 '인건비 대체 수단'으로 바뀐다",
    setup: "처음엔 다들 생산성이 좋아진다고 박수친다.",
    easy: "그런데 회사 입장에선 곧 '사람을 덜 써도 되겠는데?'라는 계산이 먼저 시작된다.",
    why: "좋은 기술이어도 일자리와 월급에 미치는 속도가 너무 빠르면 충격이 된다.",
    termIndexes: [0],
  },
  {
    step: "Step 2",
    title: "겉으론 멀쩡해도 직원의 협상력이 약해진다",
    setup: "해고 공지가 없어도 분위기는 바뀔 수 있다.",
    easy: "사람이 당장 잘리지 않아도 '대체될 수 있다'는 공기가 돌면 임금 협상이 약해진다.",
    why: "실업률만 보면 늦고, 협상력 변화부터 봐야 체감 경기를 이해할 수 있다.",
    termIndexes: [1],
  },
  {
    step: "Step 3",
    title: "돈은 넓게 퍼지지 않고 위로 먼저 모인다",
    setup: "AI 투자 붐이 크다고 모두가 같이 좋아지는 건 아니다.",
    easy: "서버, 클라우드, 초대형 플랫폼을 쥔 곳으로 돈이 먼저 빨려 올라간다.",
    why: "시장은 강한데 가계는 약한 이상한 풍경이 여기서 나온다.",
    termIndexes: [2],
  },
  {
    step: "Step 4",
    title: "중산층이 흔들리면 소비가 식는다",
    setup: "사무직과 중간층이 불안해지면 경제의 허리가 흔들린다.",
    easy: "사람들은 여행, 가전, 차, 외식 같은 '나중에 해도 되는 소비'부터 멈춘다.",
    why: "경제는 결국 사람들이 쓰는 돈으로 돌아가니까, 소비 둔화는 뒤늦게 큰 충격이 된다.",
    termIndexes: [7],
  },
  {
    step: "Step 5",
    title: "주택과 대출이 충격을 증폭시킨다",
    setup: "가계의 가장 무거운 짐은 대체로 집과 대출이다.",
    easy: "소득이 조금만 흔들려도 주거비 압박은 훨씬 크게 느껴지고, 그게 연체와 금융 불안으로 번진다.",
    why: "집 문제는 감정적으로도 크고, 금융상품과 연결돼 있어서 파급력이 세다.",
    termIndexes: [8],
  },
  {
    step: "Step 6",
    title: "마지막에 보이는 건 단일 사건이 아니라 도미노 루프다",
    setup: "고용, 소비, 주택, 금융, 정책이 따로 노는 게 아니다.",
    easy: "하나가 흔들리면 다음 것이 흔들리고, 그게 다시 앞단을 더 약하게 만든다.",
    why: "이 연결 구조를 봐야 왜 작은 충격이 큰 위기로 커질 수 있는지 이해된다.",
    termIndexes: [17],
  }
);

timelineItems.push(
  {
    label: "2025-2026",
    phase: "기대와 투자",
    title: "AI는 기회처럼 보인다",
    body: "기업은 AI 투자에 돈을 쏟고, 시장은 생산성 개선 기대를 가격에 반영한다. 표면적으로는 '좋은 뉴스'가 대부분이다.",
    note: "하지만 이 시점부터 이미 사람 대신 AI를 넣는 실험이 늘어난다.",
  },
  {
    label: "2026",
    phase: "현장 체감",
    title: "채용과 외주 구조가 조용히 바뀐다",
    body: "정규직 확대 대신 계약직, 외주, 자동화 툴 조합이 늘고, 사무직 업무도 조각나기 시작한다.",
    note: "통계는 느리게 보이지만 직장인의 체감은 먼저 차가워진다.",
  },
  {
    label: "2027 초",
    phase: "분배 균열",
    title: "기업 이익과 가계 체감이 갈라진다",
    body: "AI 수혜는 자본과 플랫폼 쪽으로 몰리는데, 중간층 소득과 협상력은 약해진다.",
    note: "주가와 뉴스 헤드라인이 좋아 보여도 소비 기반은 약해질 수 있다.",
  },
  {
    label: "2027 말",
    phase: "소비 둔화",
    title: "지갑이 닫히고 민감한 자산이 흔들린다",
    body: "차, 여행, 리모델링, 주거 관련 소비가 줄고 주택 부담이 더 무겁게 체감된다.",
    note: "주거비는 가계 충격을 배가시키는 증폭기 역할을 한다.",
  },
  {
    label: "2028",
    phase: "금융 전염",
    title: "가계 스트레스가 금융시장으로 건너간다",
    body: "연체와 자산가치 불안이 은행 장부, 신용 스프레드, 위험자산 매도로 연결될 수 있다.",
    note: "여기부터는 개별 가계 문제가 아니라 시스템 문제다.",
  },
  {
    label: "그 이후",
    phase: "정책과 후폭풍",
    title: "정책은 움직이지만 상처는 이미 커져 있다",
    body: "금리 인하나 재정 지원이 나와도 분배, 심리, 신용 문제가 동시에 엉킨 뒤라 회복이 깔끔하지 않을 수 있다.",
    note: "글의 결론은 '정책이 없어서'가 아니라 '정책이 늦고 불완전할 수 있다'는 경고다.",
  }
);

loopStages.push(
  {
    index: "Loop 01",
    title: "AI가 사람 몫의 일을 먹기 시작한다",
    oneLine: "같은 매출을 내는 데 필요한 사람이 줄어든다.",
    summary: "기업은 생산성 향상을 비용 절감으로 바꾸고 싶어 한다.",
    punch: "좋은 기술이 곧바로 좋은 분배를 뜻하지는 않는다.",
    warning: "충격은 실업 숫자보다 협상력 약화와 채용 둔화에서 먼저 보일 수 있다.",
    termIndexes: [0],
  },
  {
    index: "Loop 02",
    title: "이익은 위로 모이고 중간층은 약해진다",
    oneLine: "자본과 플랫폼은 두꺼워지고 월급은 얇아진다.",
    summary: "시장은 화려해도 가계의 구매력은 따라가지 못할 수 있다.",
    punch: "마진의 호황이 곧 소비의 호황은 아니다.",
    warning: "중산층이 흔들리면 경제의 허리가 먼저 휘청인다.",
    termIndexes: [5],
  },
  {
    index: "Loop 03",
    title: "소비 둔화가 다시 기업을 압박한다",
    oneLine: "사람들이 덜 쓰기 시작하면 기업도 다시 방어적으로 변한다.",
    summary: "수요 약화는 투자, 채용, 가격 전략을 다시 얼어붙게 만든다.",
    punch: "가계의 불안이 기업 실적으로 되돌아오는 순간이다.",
    warning: "이 단계부터는 심리 악화가 숫자 악화로 번지기 쉽다.",
    termIndexes: [7],
  },
  {
    index: "Loop 04",
    title: "주택과 금융이 충격을 배로 키운다",
    oneLine: "집과 대출은 작은 충격을 큰 시스템 문제로 바꾼다.",
    summary: "가계 부담은 모기지를 타고 은행 장부와 신용시장으로 넘어갈 수 있다.",
    punch: "개인의 고민이 시스템 전염으로 커지는 구간이다.",
    warning: "여기선 금리 인하만으로 진정되지 않을 수도 있다.",
    termIndexes: [9],
  }
);

chapters.push(
  {
    number: "01",
    category: "출발점",
    title: "문제의 출발: AI가 너무 잘하는 순간",
    preview: "기술 낙관론 뒤에 숨어 있는 가장 첫 번째 균열을 설명한다.",
    plain: "글은 AI가 똑똑해지는 걸 나쁜 일로 보지 않는다. 다만 기업이 그 능력을 '사람을 덜 써도 되는 이유'로 쓰기 시작하면 충격이 빨라질 수 있다고 본다.",
    deep: "생산성 상승은 본래 좋은 일이다. 문제는 그 과실이 누구에게, 얼마나 빨리, 어떤 순서로 가느냐다. 기업이 먼저 비용 절감을 택하면 노동시장과 분배 구조가 바로 흔들린다.",
    miss: "많은 사람이 '실업률이 아직 괜찮은데?'라고 말하며 초반 신호를 놓친다. 하지만 협상력, 채용 속도, 외주 구조 변화는 더 빨리 움직인다.",
    fun: "쉽게 말해 AI는 처음엔 슈퍼 인턴처럼 들어오지만, 회사가 그 인턴에게 세 팀 일을 몰아주기 시작하면 분위기가 달라진다.",
    termIndexes: [0, 1],
  },
  {
    number: "02",
    category: "돈의 방향",
    title: "누가 돈을 먹는가: 수익의 집중",
    preview: "AI 시대의 돈이 왜 모두에게 넓게 퍼지지 않을 수 있는지 보여 준다.",
    plain: "AI 붐은 엄청난 투자와 기대를 만들지만, 실제 이익은 서버, 전력, 클라우드, 플랫폼을 쥔 쪽으로 먼저 모이기 쉽다.",
    deep: "애플리케이션 회사가 늘어나도 그 뒤에서 돌아가는 컴퓨팅 자원과 인프라는 소수 사업자가 공급한다. 그래서 시장 전체가 성장해도 수익의 배분은 훨씬 좁아질 수 있다.",
    miss: "주가가 세다고 경제 전체가 강하다고 착각하기 쉽다. 하지만 분배가 편중되면 소비 기반은 오히려 약해질 수 있다.",
    fun: "모두가 금을 캐러 간다고 해서 모두가 부자가 되는 건 아니다. 삽과 곡괭이를 파는 가게가 제일 많이 버는 경우가 많다.",
    termIndexes: [2, 3, 5],
  },
  {
    number: "03",
    category: "가계 체감",
    title: "왜 체감 경기는 먼저 차가워지나",
    preview: "화이트칼라와 중간층이 흔들릴 때 소비가 왜 빠르게 식는지 정리한다.",
    plain: "사람들은 해고 통지서보다 '앞으로 괜찮을까?'라는 불안에 먼저 반응한다. 그래서 미래가 불안하면 당장 지갑부터 닫는다.",
    deep: "중산층은 소비의 허리다. 이 계층이 승진, 연봉, 고용 안정에 자신을 잃으면 외식, 여행, 자동차, 주거 업그레이드 같은 선택 소비가 먼저 줄어든다.",
    miss: "소비 둔화는 늘 뒤늦게 통계에 잡힌다. 그래서 현장의 체감과 뉴스 수치가 한동안 엇갈릴 수 있다.",
    fun: "사람은 태풍 뉴스가 나오면 아직 비가 안 와도 마트부터 간다. 경제에서도 불안은 실제 숫자보다 먼저 행동을 바꾼다.",
    termIndexes: [6, 7],
  },
  {
    number: "04",
    category: "증폭기",
    title: "집과 대출이 왜 제일 무서운가",
    preview: "작은 소득 충격이 주거비와 모기지를 만나면 왜 훨씬 커지는지 설명한다.",
    plain: "가계에서 가장 무거운 고정비는 대체로 집이다. 그래서 월급이 흔들릴 때 집 관련 부담은 심리적으로도 숫자상으로도 가장 크게 느껴진다.",
    deep: "주택담보대출은 가계의 문제로 끝나지 않는다. 그 대출은 금융 시스템의 자산이기도 하다. 그래서 가계 균열이 금융 균열로 이어질 통로가 생긴다.",
    miss: "많은 사람은 집값만 본다. 하지만 이 글은 집값보다 '대출 상환 능력과 그것이 금융상품으로 연결된 구조'를 더 중요하게 본다.",
    fun: "작은 방울도 댐 벽에 생기면 무섭다. 주거 시장은 그만큼 경제 전체에 연결된 큰 벽이다.",
    termIndexes: [8, 9],
  },
  {
    number: "05",
    category: "전염",
    title: "금융시장으로 번질 때 벌어지는 일",
    preview: "은행 장부, 신용 스프레드, 위험자산 매도가 어떻게 이어지는지 푼다.",
    plain: "가계 문제는 시간이 지나면 금융기관의 숫자 문제가 된다. 장부를 믿기 어려워지면 돈줄은 갑자기 보수적으로 변한다.",
    deep: "신용 스프레드가 벌어지고, 위험자산 되감기가 시작되면 멀쩡한 기업도 자금 조달이 어려워질 수 있다. 이 구간에서는 불안이 스스로 불안을 키운다.",
    miss: "금융위기는 항상 대형 사건 하나로 터진다고 오해하기 쉽다. 실제로는 신뢰가 천천히 깎이다가 어느 순간 급하게 무너지는 경우가 많다.",
    fun: "냉장고 음식이 하나 상하면 냄새가 퍼진다. 금융 전염도 그런 식으로 한 곳의 문제를 여러 칸으로 퍼뜨린다.",
    termIndexes: [10, 11, 12],
  },
  {
    number: "06",
    category: "결말",
    title: "정책, 불평등, 그리고 마지막 경고",
    preview: "왜 대응은 늦기 쉽고, 왜 분배 문제가 결국 핵심인지 정리한다.",
    plain: "정책은 보통 확실한 피해가 보인 뒤 크게 움직인다. 그 사이 사회는 더 예민해지고, 불평등 문제는 더 커진다.",
    deep: "금리 인하, 재정 투입, 규제 완화 같은 카드가 있어도 신용과 분배, 정치 갈등이 함께 엉키면 회복은 느리고 불완전할 수 있다. 그래서 글은 마지막에 연결 구조와 분배 구조를 함께 보라고 말한다.",
    miss: "사람들은 '결국 정부가 막아 주겠지'라고 쉽게 생각한다. 하지만 정책은 속도, 정치, 전달 경로 문제를 동시에 안고 있다.",
    fun: "연극 막판에 소방관이 들어와도 무대가 이미 무너졌다면 정리하는 데 오래 걸린다. 정책도 비슷하다.",
    termIndexes: [13, 14, 15, 16, 17],
  }
);

extraGlossary.push(
  {
    word: "소득 충격",
    meaning: "월급, 수입, 보너스가 예상보다 줄어드는 일",
    hook: "가계에서 제일 먼저 체감되는 경제 문제다.",
  },
  {
    word: "구매력",
    meaning: "같은 돈으로 실제로 살 수 있는 힘",
    hook: "월급이 같아도 물가와 고정비가 오르면 구매력은 떨어진다.",
  },
  {
    word: "연결 구조",
    meaning: "한 문제가 다른 문제를 건드리는 연결망",
    hook: "도미노를 한 줄이 아니라 여러 줄로 이어 놓은 그림을 떠올리면 된다.",
  }
);

const allTerms = [
  ...conceptBank.flatMap((concept) =>
    concept.terms.map((term) => ({
      ...term,
      from: concept.title,
      category: concept.category,
    }))
  ),
  ...extraGlossary.map((term) => ({
    ...term,
    from: "추가 설명",
    category: "추가 설명",
  })),
];

const uniqueGlossary = Array.from(
  new Map(allTerms.map((term) => [term.word, term])).values()
);

const rotate = (items, seed = 0) =>
  items.map((_, index) => items[(index + seed) % items.length]);

const resolveTerms = (indexes = []) =>
  indexes.flatMap((index) => conceptBank[index]?.terms ?? []);

function getDistractorConcepts(index, offsets) {
  return offsets.map((offset) => conceptBank[(index + offset) % conceptBank.length]);
}

function getDistractorTerms(index, offsets, bannedWord) {
  return offsets
    .map((offset) => uniqueGlossary[(index + offset) % uniqueGlossary.length])
    .filter((term) => term.word !== bannedWord)
    .slice(0, 3);
}

function buildChoices(correct, distractors, seed) {
  const options = rotate([correct, ...distractors.slice(0, 3)], seed % 4);
  return {
    options,
    answer: options.indexOf(correct),
  };
}

function makeQuestion(id, category, prompt, choices, hint, explanation) {
  return {
    id,
    category,
    prompt,
    options: choices.options,
    answer: choices.answer,
    hint,
    explanation,
  };
}

function buildQuestionBank() {
  const questions = [];

  conceptBank.forEach((concept, index) => {
    const [d1, d2, d3] = getDistractorConcepts(index, [3, 7, 11]);
    const term = concept.terms[index % concept.terms.length];
    const termDistractors = getDistractorTerms(index, [5, 10, 15, 20], term.word);

    questions.push(
      makeQuestion(
        `${concept.id}-core`,
        concept.category,
        `다음 중 "${concept.title}"를 가장 쉽게 풀어 쓴 설명은 무엇일까?`,
        buildChoices(concept.easy, [d1.easy, d2.easy, d3.easy], index),
        `힌트: 먼저 '${concept.quick}'라는 한 줄 요약을 떠올리면 쉽다.`,
        `${concept.explanation} 이 문제는 정의를 묻는 문제다. 이 개념의 핵심은 '${concept.quick}'이며, 한마디로 말하면 ${concept.easy}`
      ),
      makeQuestion(
        `${concept.id}-why`,
        concept.category,
        `"${concept.title}"가 이 글에서 위험하게 다뤄지는 가장 큰 이유는 무엇일까?`,
        buildChoices(concept.why, [d1.why, d2.why, d3.why], index + 1),
        `힌트: '그래서 누구의 지갑이 약해지나?'를 생각하면 된다.`,
        `정답은 '${concept.why}'이다. 이 글은 개념 자체보다 그 파급 방향을 본다. ${concept.explanation} 그래서 ${concept.why}라는 연결이 중요하다.`
      ),
      makeQuestion(
        `${concept.id}-term`,
        concept.category,
        `용어 확인: "${term.word}"를 가장 쉽게 설명한 것은 무엇일까?`,
        buildChoices(
          `${term.meaning} (${term.hook})`,
          termDistractors.map((item) => `${item.meaning} (${item.hook})`),
          index + 2
        ),
        `힌트: 시험처럼 외우지 말고, 일상 장면으로 바꿔 보면 된다.`,
        `"${term.word}"는 ${term.meaning}라는 뜻이다. ${term.hook} 이 문제를 맞히면 글 속 딱딱한 경제 용어가 바로 생활 언어로 바뀐다.`
      ),
      makeQuestion(
        `${concept.id}-next`,
        concept.category,
        `"${concept.title}" 다음에 이어지기 쉬운 장면으로 가장 알맞은 것은 무엇일까?`,
        buildChoices(concept.next, [d1.next, d2.next, d3.next], index + 3),
        `힌트: 도미노는 '지금 장면' 다음 칸을 묻는다. 바로 이어질 압박을 고르면 된다.`,
        `이 개념의 다음 칸은 '${concept.next}'이다. 글의 중요한 포인트는 개별 현상보다 연결이다. ${concept.quick}가 나타나면 보통 그다음엔 ${concept.next}가 따라온다.`
      ),
      makeQuestion(
        `${concept.id}-statement`,
        concept.category,
        `다음 중 "${concept.title}"의 논지를 가장 정확하게 담은 문장은 무엇일까?`,
        buildChoices(concept.statement, [d1.statement, d2.statement, d3.statement], index + 1),
        `힌트: 정답은 이 개념이 말하는 '핵심 주장'을 그대로 담고 있다.`,
        `정답 문장은 '${concept.statement}'이다. 나머지 선택지는 다른 개념의 핵심을 섞어 놓은 문장이다. 이 개념은 특히 ${concept.hook}`
      ),
      makeQuestion(
        `${concept.id}-memory`,
        concept.category,
        `"${concept.title}"를 가장 잘 기억하게 도와주는 그림 비유는 무엇일까?`,
        buildChoices(concept.metaphor, [d1.metaphor, d2.metaphor, d3.metaphor], index),
        `힌트: 비유는 정확한 숫자보다 '어떤 느낌의 구조였지?'를 떠올리게 한다.`,
        `정답 비유는 '${concept.metaphor}'다. 이런 비유를 붙여 두면 딱딱한 경제 개념이 장면처럼 남는다. 그리고 이 장면이 가리키는 실제 뜻은 ${concept.easy}`
      )
    );
  });

  return questions.map((question, index) => ({
    ...question,
    number: index + 1,
  }));
}

let questionBank = [];
let categories = [];

const state = {
  studyMode: "study",
  studyFilter: "전체",
  studyPage: 1,
  studyPerPage: 12,
  studyAnswers: new Map(),
  examQuestions: [],
  examAnswers: [],
  examIndex: 0,
  examSubmitted: false,
};

const refs = {
  progressBar: document.querySelector("#scroll-progress-bar"),
  storyList: document.querySelector("#story-list"),
  timelineGrid: document.querySelector("#timeline-grid"),
  loopNav: document.querySelector("#loop-nav"),
  loopDetail: document.querySelector("#loop-detail"),
  chapterList: document.querySelector("#chapter-list"),
  glossaryGrid: document.querySelector("#glossary-grid"),
  questionBankCount: document.querySelector("#question-bank-count"),
  categoryFilters: document.querySelector("#category-filters"),
  studyQuestions: document.querySelector("#study-questions"),
  studyPrev: document.querySelector("#study-prev"),
  studyNext: document.querySelector("#study-next"),
  studyPageInfo: document.querySelector("#study-page-info"),
  modeStudy: document.querySelector("#mode-study"),
  modeExam: document.querySelector("#mode-exam"),
  studyPanel: document.querySelector("#study-panel"),
  examPanel: document.querySelector("#exam-panel"),
  startExam: document.querySelector("#start-exam"),
  examShell: document.querySelector("#exam-shell"),
  examIntro: document.querySelector("#exam-intro"),
  examProgress: document.querySelector("#exam-progress"),
  examAnswered: document.querySelector("#exam-answered"),
  examQuestionCard: document.querySelector("#exam-question-card"),
  examPrev: document.querySelector("#exam-prev"),
  examNext: document.querySelector("#exam-next"),
  examSubmit: document.querySelector("#exam-submit"),
  examResult: document.querySelector("#exam-result"),
};

function termCardsMarkup(terms, variant = "") {
  return `
    <div class="term-grid ${variant}">
      ${terms
        .map(
          (term) => `
            <article class="term-card ${variant.includes("dark") ? "dark" : ""}">
              <span>${term.word}</span>
              <strong>${term.meaning}</strong>
              <p>${term.hook}</p>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderStoryCards() {
  refs.storyList.innerHTML = storyCards
    .map(
      (card) => `
        <article class="story-card" data-reveal>
          <div class="story-top">
            <span class="story-step">${card.step}</span>
            <h3>${card.title}</h3>
            <p class="story-setup">${card.setup}</p>
          </div>
          <div class="story-grid">
            <div class="story-block">
              <strong>아주 쉽게 말하면</strong>
              <p>${card.easy}</p>
            </div>
            <div class="story-block fun-block">
              <strong>왜 중요하냐면</strong>
              <p>${card.why}</p>
            </div>
          </div>
          ${termCardsMarkup(resolveTerms(card.termIndexes), "compact")}
        </article>
      `
    )
    .join("");
}

function renderTimeline() {
  refs.timelineGrid.innerHTML = timelineItems
    .map(
      (item) => `
        <article class="timeline-card" data-reveal>
          <span>${item.label}</span>
          <strong class="timeline-phase">${item.phase}</strong>
          <h3>${item.title}</h3>
          <p>${item.body}</p>
          <p class="timeline-note">${item.note}</p>
        </article>
      `
    )
    .join("");
}

function renderLoop(index = 0) {
  refs.loopNav.innerHTML = loopStages
    .map(
      (stage, stageIndex) => `
        <button class="loop-step ${stageIndex === index ? "active" : ""}" type="button" data-loop-index="${stageIndex}">
          <span class="loop-step-index">${stage.index}</span>
          <strong>${stage.title}</strong>
          <p>${stage.oneLine}</p>
        </button>
      `
    )
    .join("");

  const stage = loopStages[index];
  refs.loopDetail.innerHTML = `
    <span class="detail-index">${stage.index}</span>
    <h3>${stage.title}</h3>
    <p class="detail-one-line">${stage.oneLine}</p>
    <div class="detail-grid">
      <article class="detail-card">
        <strong>쉽게 풀면</strong>
        <p>${stage.summary}</p>
      </article>
      <article class="detail-card">
        <strong>핵심 포인트</strong>
        <p>${stage.punch}</p>
      </article>
      <article class="detail-card">
        <strong>조심할 착각</strong>
        <p>${stage.warning}</p>
      </article>
    </div>
    ${termCardsMarkup(resolveTerms(stage.termIndexes), "dark compact")}
  `;

  refs.loopNav.querySelectorAll("[data-loop-index]").forEach((button) => {
    button.addEventListener("click", () => renderLoop(Number(button.dataset.loopIndex)));
  });
}

function renderChapters() {
  refs.chapterList.innerHTML = chapters
    .map(
      (chapter, index) => `
        <details class="chapter-card" ${index === 0 ? "open" : ""} data-reveal>
          <summary>
            <span class="chapter-index">${chapter.number}</span>
            <div class="chapter-meta">
              <span>${chapter.category}</span>
              <h3>${chapter.title}</h3>
              <p>${chapter.preview}</p>
            </div>
            <span class="chapter-toggle">열기</span>
          </summary>
          <div class="chapter-body">
            <div class="chapter-rich-grid">
              <article class="chapter-block">
                <h4>한 번에 이해</h4>
                <p>${chapter.plain}</p>
              </article>
              <article class="chapter-block">
                <h4>조금 더 깊게</h4>
                <p>${chapter.deep}</p>
              </article>
              <article class="chapter-block">
                <h4>많이 놓치는 부분</h4>
                <p>${chapter.miss}</p>
              </article>
              <article class="chapter-block fun-block">
                <h4>재밌게 기억하기</h4>
                <p>${chapter.fun}</p>
              </article>
            </div>
            ${termCardsMarkup(resolveTerms(chapter.termIndexes), "compact")}
          </div>
        </details>
      `
    )
    .join("");
}

function renderGlossary() {
  refs.glossaryGrid.innerHTML = uniqueGlossary
    .map(
      (term) => `
        <article class="glossary-card" data-reveal>
          <span>${term.category}</span>
          <h3>${term.word}</h3>
          <p><strong>${term.meaning}</strong></p>
          <p>${term.hook}</p>
        </article>
      `
    )
    .join("");
}

function getFilteredStudyQuestions() {
  if (state.studyFilter === "전체") {
    return questionBank;
  }

  return questionBank.filter((question) => question.category === state.studyFilter);
}

function renderCategoryFilters() {
  refs.categoryFilters.innerHTML = categories
    .map(
      (category) => `
        <button
          class="filter-chip ${category === state.studyFilter ? "active" : ""}"
          type="button"
          data-category="${category}"
        >
          ${category}
        </button>
      `
    )
    .join("");

  refs.categoryFilters.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      state.studyFilter = button.dataset.category;
      state.studyPage = 1;
      renderStudyQuestions();
      renderCategoryFilters();
    });
  });
}

function getStudyFeedback(question, answerState) {
  if (!answerState || answerState.status === "idle") {
    return "";
  }

  if (answerState.status === "hint") {
    return `<div class="question-feedback hint"><strong>힌트 한 번:</strong> ${question.hint}</div>`;
  }

  if (answerState.status === "correct") {
    return `<div class="question-feedback correct"><strong>정답.</strong> ${question.explanation}</div>`;
  }

  return `
    <div class="question-feedback incorrect">
      <strong>오답 처리.</strong> 정답: <b>${question.options[question.answer]}</b><br />
      ${question.explanation}
    </div>
  `;
}

function getStudyOptionClass(question, optionIndex, answerState) {
  const classes = ["quiz-option"];

  if (answerState?.selected === optionIndex) {
    classes.push("selected");
  }

  if (answerState?.status === "hint" && answerState.wrongChoice === optionIndex) {
    classes.push("soft-wrong");
  }

  if (answerState?.status === "correct" && optionIndex === question.answer) {
    classes.push("correct");
  }

  if (answerState?.status === "incorrect") {
    if (optionIndex === question.answer) {
      classes.push("correct");
    } else if (answerState.selected === optionIndex) {
      classes.push("wrong");
    }
  }

  return classes.join(" ");
}

function renderStudyQuestions() {
  const filtered = getFilteredStudyQuestions();
  const totalPages = Math.max(1, Math.ceil(filtered.length / state.studyPerPage));
  state.studyPage = Math.min(state.studyPage, totalPages);

  const startIndex = (state.studyPage - 1) * state.studyPerPage;
  const pageQuestions = filtered.slice(startIndex, startIndex + state.studyPerPage);

  refs.questionBankCount.textContent = `총 ${questionBank.length}문제`;
  refs.studyPageInfo.textContent = `${state.studyPage} / ${totalPages} 페이지`;
  refs.studyPrev.disabled = state.studyPage === 1;
  refs.studyNext.disabled = state.studyPage === totalPages;

  refs.studyQuestions.innerHTML = pageQuestions
    .map((question) => {
      const answerState = state.studyAnswers.get(question.id) ?? { status: "idle" };
      return `
        <article class="question-card" data-question-id="${question.id}">
          <div class="question-meta">
            <span class="quiz-index">Q${question.number}</span>
            <span class="question-category">${question.category}</span>
          </div>
          <h3>${question.prompt}</h3>
          <div class="quiz-options">
            ${question.options
              .map(
                (option, optionIndex) => `
                  <button
                    class="${getStudyOptionClass(question, optionIndex, answerState)}"
                    type="button"
                    data-study-answer="${question.id}"
                    data-option-index="${optionIndex}"
                    ${answerState.status === "correct" || answerState.status === "incorrect" ? "disabled" : ""}
                  >
                    ${option}
                  </button>
                `
              )
              .join("")}
          </div>
          ${getStudyFeedback(question, answerState)}
        </article>
      `;
    })
    .join("");

  refs.studyQuestions.querySelectorAll("[data-study-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      handleStudyAnswer(button.dataset.studyAnswer, Number(button.dataset.optionIndex));
    });
  });
}

function handleStudyAnswer(questionId, optionIndex) {
  const question = questionBank.find((item) => item.id === questionId);
  const current = state.studyAnswers.get(questionId) ?? {
    attempts: 0,
    status: "idle",
    selected: null,
    wrongChoice: null,
  };

  if (current.status === "correct" || current.status === "incorrect") {
    return;
  }

  if (optionIndex === question.answer) {
    state.studyAnswers.set(questionId, {
      attempts: current.attempts + 1,
      status: "correct",
      selected: optionIndex,
      wrongChoice: current.wrongChoice,
    });
  } else if (current.attempts === 0) {
    state.studyAnswers.set(questionId, {
      attempts: 1,
      status: "hint",
      selected: optionIndex,
      wrongChoice: optionIndex,
    });
  } else {
    state.studyAnswers.set(questionId, {
      attempts: current.attempts + 1,
      status: "incorrect",
      selected: optionIndex,
      wrongChoice: current.wrongChoice,
    });
  }

  renderStudyQuestions();
}

function shuffledCopy(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function startExam() {
  state.examQuestions = shuffledCopy(questionBank).slice(0, 20);
  state.examAnswers = Array(state.examQuestions.length).fill(null);
  state.examIndex = 0;
  state.examSubmitted = false;

  refs.examIntro.hidden = true;
  refs.examShell.hidden = false;
  refs.examResult.hidden = true;
  refs.examResult.innerHTML = "";

  renderExamQuestion();
}

function renderExamQuestion() {
  if (!state.examQuestions.length) {
    return;
  }

  const question = state.examQuestions[state.examIndex];
  const selected = state.examAnswers[state.examIndex];
  const answeredCount = state.examAnswers.filter((answer) => answer !== null).length;

  refs.examProgress.textContent = `${state.examIndex + 1} / ${state.examQuestions.length}`;
  refs.examAnswered.textContent = `${answeredCount}문제 답안 체크`;
  refs.examPrev.disabled = state.examIndex === 0;
  refs.examNext.disabled = state.examIndex === state.examQuestions.length - 1;

  refs.examQuestionCard.innerHTML = `
    <article class="question-card exam-card">
      <div class="question-meta">
        <span class="quiz-index">시험 Q${state.examIndex + 1}</span>
        <span class="question-category">${question.category}</span>
      </div>
      <h3>${question.prompt}</h3>
      <p class="quiz-rule">시험 모드에서는 힌트 없이 바로 실전처럼 푼다.</p>
      <div class="quiz-options">
        ${question.options
          .map(
            (option, optionIndex) => `
              <button
                class="quiz-option ${selected === optionIndex ? "selected" : ""}"
                type="button"
                data-exam-option="${optionIndex}"
              >
                ${option}
              </button>
            `
          )
          .join("")}
      </div>
    </article>
  `;

  refs.examQuestionCard.querySelectorAll("[data-exam-option]").forEach((button) => {
    button.addEventListener("click", () => {
      state.examAnswers[state.examIndex] = Number(button.dataset.examOption);
      renderExamQuestion();
    });
  });
}

function submitExam() {
  const unanswered = state.examAnswers.findIndex((answer) => answer === null);
  if (unanswered !== -1) {
    window.alert(`${unanswered + 1}번 시험 문제에 아직 답을 고르지 않았습니다.`);
    state.examIndex = unanswered;
    renderExamQuestion();
    return;
  }

  state.examSubmitted = true;
  const score = state.examQuestions.reduce((total, question, index) => {
    return total + (state.examAnswers[index] === question.answer ? 1 : 0);
  }, 0);

  refs.examResult.hidden = false;
  refs.examResult.innerHTML = `
    <div class="exam-result-card">
      <p class="panel-kicker">Exam Result</p>
      <h3>${score} / ${state.examQuestions.length}점</h3>
      <p>
        ${score >= 17 ? "거의 완전히 이해한 상태다. 이제 원문을 읽어도 흐름이 보일 가능성이 높다." : ""}
        ${score >= 12 && score < 17 ? "핵심 구조는 잡혔다. 틀린 문제 해설을 읽으면 이해가 훨씬 단단해진다." : ""}
        ${score < 12 ? "괜찮다. 이 시험은 흐름과 연결 구조를 묻는 편이라, 오답 해설을 보면 실력이 빨리 오른다." : ""}
      </p>
    </div>
    <div class="exam-review-list">
      ${state.examQuestions
        .map((question, index) => {
          const userAnswer = state.examAnswers[index];
          const isCorrect = userAnswer === question.answer;
          return `
            <article class="review-card ${isCorrect ? "correct" : "incorrect"}">
              <span class="quiz-index">리뷰 ${index + 1}</span>
              <h4>${question.prompt}</h4>
              <p><strong>내 답:</strong> ${question.options[userAnswer]}</p>
              <p><strong>정답:</strong> ${question.options[question.answer]}</p>
              <p>${isCorrect ? "잘 맞혔다. 그래도 아래 해설로 연결 구조를 다시 한 번 굳히면 더 좋다." : "이 문제는 단어 하나보다 연결 논리를 보는 문제였다. 아래 해설에서 왜 그런지 다시 잡아 보자."}</p>
              <p>${question.explanation}</p>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function setMode(mode) {
  state.studyMode = mode;
  const isStudy = mode === "study";

  refs.modeStudy.classList.toggle("active", isStudy);
  refs.modeExam.classList.toggle("active", !isStudy);
  refs.studyPanel.classList.toggle("active", isStudy);
  refs.examPanel.classList.toggle("active", !isStudy);
}

function setupRevealObserver() {
  const targets = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window)) {
    targets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  targets.forEach((target) => observer.observe(target));
}

function setupScrollProgress() {
  const update = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    refs.progressBar.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function bindEvents() {
  refs.studyPrev.addEventListener("click", () => {
    state.studyPage = Math.max(1, state.studyPage - 1);
    renderStudyQuestions();
  });

  refs.studyNext.addEventListener("click", () => {
    const total = Math.ceil(getFilteredStudyQuestions().length / state.studyPerPage);
    state.studyPage = Math.min(total, state.studyPage + 1);
    renderStudyQuestions();
  });

  refs.modeStudy.addEventListener("click", () => setMode("study"));
  refs.modeExam.addEventListener("click", () => setMode("exam"));
  refs.startExam.addEventListener("click", startExam);
  refs.examPrev.addEventListener("click", () => {
    state.examIndex = Math.max(0, state.examIndex - 1);
    renderExamQuestion();
  });
  refs.examNext.addEventListener("click", () => {
    state.examIndex = Math.min(state.examQuestions.length - 1, state.examIndex + 1);
    renderExamQuestion();
  });
  refs.examSubmit.addEventListener("click", submitExam);
}

function init() {
  renderStoryCards();
  renderTimeline();
  renderLoop();
  renderChapters();
  renderGlossary();
  renderCategoryFilters();
  renderStudyQuestions();
  bindEvents();
  setupRevealObserver();
  setupScrollProgress();
}

conceptBank.push(
  {
    id: "risk-unwind",
    category: "금융 전염",
    title: "리스크 자산 되감기",
    quick: "불안이 커지면 투자자들은 한꺼번에 위험 자산을 줄인다.",
    easy: "쉽게 말해 다들 동시에 출구로 몰려 나가며 가격이 더 세게 흔들리는 상황이다.",
    why: "가격 하락이 또 다른 불안을 부르며 시장의 낙폭을 키운다.",
    next: "주가와 채권이 같이 흔들리면 '안전한 피난처'도 잠시 부족해진다.",
    metaphor: "영화관에서 작은 연기만 나도 모두가 한 문으로 뛰는 장면과 비슷하다.",
    hook: "위기는 천천히 분석되기보다 한꺼번에 던지며 생기기 쉽다.",
    explanation:
      "시장 참가자는 서로를 본다. 누군가 팔기 시작하면 다른 사람도 더 빨리 팔고 싶어진다. 이 되감기 과정은 실적 변화보다 속도가 빠르다. 글은 AI 충격이 실물경제를 흔든 뒤 자산시장에서도 이런 자기증폭 반응이 나올 수 있다고 본다.",
    statement: "시장 충격은 펀더멘털 악화보다 군집 행동 때문에 더 커질 수 있다.",
    terms: [
      {
        word: "리스크 자산",
        meaning: "가격 변동이 커서 손실 가능성도 큰 자산",
        hook: "주식, 하이일드 채권처럼 수익 가능성과 손실 가능성이 함께 큰 자산이다.",
      },
      {
        word: "되감기",
        meaning: "쌓아 둔 포지션을 빠르게 줄이거나 청산하는 것",
        hook: "잔뜩 사 둔 물건을 급히 다시 내다파는 모습이다.",
      },
    ],
  },
  {
    id: "policy-delay",
    category: "정책",
    title: "정책 대응 지연",
    quick: "정책은 늘 데이터가 망가진 뒤에야 크게 움직이는 경향이 있다.",
    easy: "쉽게 말해 불 난 뒤 소화차가 출발하는 구조다.",
    why: "대응이 늦으면 작은 균열이 시스템 문제로 커질 시간을 벌어 준다.",
    next: "뒤늦은 금리 인하나 재정 지원이 나오지만 시장은 이미 상처를 크게 입는다.",
    metaphor: "아이가 감기 걸린 뒤에야 창문 닫는 부모와 비슷하다.",
    hook: "정책은 미리 예쁘게 움직이기보다 대개 뒤늦게 크게 움직인다.",
    explanation:
      "정책 당국은 근거 없이 과하게 움직이기 어렵다. 그래서 실업, 연체, 성장 둔화 같은 숫자가 실제로 나빠진 뒤에야 본격 대응하는 경우가 많다. 문제는 시장과 가계는 그 전부터 이미 아프다는 점이다.",
    statement: "정책은 선제적으로 보이기보다 대개 확인된 피해 뒤에 따라오는 경우가 많다.",
    terms: [
      {
        word: "정책 시차",
        meaning: "문제가 생기고 정책이 효과를 내기까지 걸리는 시간 차이",
        hook: "약을 먹어도 바로 낫지 않는 것처럼 정책도 시간이 걸린다.",
      },
      {
        word: "선제 대응",
        meaning: "큰 피해가 터지기 전에 먼저 움직이는 것",
        hook: "비 오기 전에 우산을 펴는 식의 대응이다.",
      },
    ],
  },
  {
    id: "rate-cut-trap",
    category: "정책",
    title: "금리 인하의 함정",
    quick: "금리를 내린다고 모든 문제가 자동으로 풀리지는 않는다.",
    easy: "쉽게 말해 진통제를 먹어도 골절 자체가 바로 붙는 건 아니라는 뜻이다.",
    why: "소득 불안과 신용 불신이 크면 금리 인하 효과가 약해질 수 있다.",
    next: "정책은 더 세지고, 시장은 '왜 이렇게 급하지?' 하며 오히려 더 불안해할 수 있다.",
    metaphor: "자동차가 미끄러지는 중에는 액셀보다 핸들 제어가 더 중요한 상황과 비슷하다.",
    hook: "돈값을 낮춰도 돈을 빌릴 자신과 갚을 자신이 없으면 효과는 제한적이다.",
    explanation:
      "기준금리를 내리면 보통 자산시장과 경기엔 도움이 된다. 하지만 이번 시나리오는 소득 불안, 고용 불안, 신용 경색이 함께 오는 그림이다. 그럴 때는 금리가 낮아도 사람들이 집을 사거나 투자를 늘릴 용기가 부족할 수 있다.",
    statement: "위기가 신용과 소득 신뢰 문제로 번지면 금리 인하만으로는 부족할 수 있다.",
    terms: [
      {
        word: "기준금리",
        meaning: "중앙은행이 정하는 가장 기본이 되는 금리",
        hook: "시중 금리들의 출발점이 되는 기준선이라고 보면 된다.",
      },
      {
        word: "전달 경로",
        meaning: "정책 변화가 실제 경제에 영향을 미치는 길",
        hook: "금리 인하가 대출 금리, 소비, 투자로 이어지는 길목 전체를 뜻한다.",
      },
    ],
  },
  {
    id: "fiscal-backlash",
    category: "정책",
    title: "재정의 정치적 마찰",
    quick: "도와줘야 하지만 누굴 얼마나 도울지에서 갈등이 커진다.",
    easy: "쉽게 말해 지원금은 필요해 보여도 세금 부담과 형평성 논쟁이 바로 붙는다.",
    why: "정치적 갈등이 심하면 필요한 지원도 늦고 약하게 집행될 수 있다.",
    next: "구조조정보다 감정싸움이 앞서며 시장 불안이 더 길어진다.",
    metaphor: "배가 새는데 누가 먼저 양동이를 들지 토론만 길어지는 장면과 비슷하다.",
    hook: "경제 문제는 숫자만의 문제가 아니라 정치의 속도 문제이기도 하다.",
    explanation:
      "대규모 재정 지원은 경제를 떠받칠 수 있지만, 동시에 엄청난 정치적 반발을 부른다. 누구를 구하느냐, 왜 그들을 구하느냐, 누가 비용을 내느냐가 곧바로 싸움이 된다. 그래서 정책 수단이 있어도 현실 집행은 매끄럽지 않을 수 있다.",
    statement: "재정 대응의 핵심 제약은 돈의 부족보다 정치적 합의 부족일 때가 많다.",
    terms: [
      {
        word: "재정",
        meaning: "정부가 세금으로 걷고 쓰는 돈의 영역",
        hook: "가계부의 국가 버전이라고 생각하면 쉽다.",
      },
      {
        word: "형평성",
        meaning: "누가 얼마나 부담하고 혜택받는지가 공정한지 따지는 기준",
        hook: "같이 고생했는데 왜 저 사람만 더 받느냐는 질문이 형평성 문제다.",
      },
    ],
  },
  {
    id: "inequality-surge",
    category: "결론",
    title: "불평등의 가속",
    quick: "AI의 과실이 위로 쏠릴수록 사회 전체의 긴장도 커진다.",
    easy: "쉽게 말해 파이는 커졌는데 대부분 사람 손에 들어오는 조각은 오히려 얇아질 수 있다는 뜻이다.",
    why: "불평등은 단지 감정 문제가 아니라 소비, 정치, 사회 안정까지 흔든다.",
    next: "시장 문제는 결국 사회 문제와 정책 문제로 이어진다.",
    metaphor: "케이크가 더 커졌는데 접시 대부분은 몇 사람 앞에만 놓이는 장면과 같다.",
    hook: "기술 혁신의 승자 구조가 너무 좁으면 시스템이 버티기 어려워진다.",
    explanation:
      "생산성과 기업 가치가 오르는 것만으로는 충분하지 않다. 소득과 자산의 분배가 지나치게 위로 쏠리면 경제의 기반 소비층이 약해지고 사회적 긴장도 커진다. 글은 AI 시대의 핵심 위험 중 하나로 이 '분배의 비대칭'을 강조한다.",
    statement: "불평등 심화는 경제와 사회를 동시에 약하게 만드는 구조적 위험이다.",
    terms: [
      {
        word: "불평등",
        meaning: "소득, 자산, 기회가 한쪽으로 심하게 치우친 상태",
        hook: "같이 뛰는 경기인데 출발선이 너무 다르게 깔린 모습이다.",
      },
      {
        word: "분배",
        meaning: "경제에서 만들어진 몫이 누구에게 얼마나 돌아가는지",
        hook: "빵을 얼마나 만들었는지가 생산이라면, 누가 몇 조각 먹는지가 분배다.",
      },
    ],
  },
  {
    id: "domino-loop",
    category: "결론",
    title: "도미노 루프",
    quick: "AI 충격은 한 번 끝나는 사건이 아니라 서로 밀어 올리는 고리일 수 있다.",
    easy: "쉽게 말해 한 조각이 넘어지면 끝이 아니라, 넘어진 조각이 다음 줄을 또 밀어 넘어뜨리는 구조다.",
    why: "고리 구조를 이해해야 '왜 생각보다 충격이 커질 수 있지?'를 설명할 수 있다.",
    next: "고용, 소비, 주택, 금융, 정책이 서로를 자극하며 충격을 확대한다.",
    metaphor: "눈덩이가 굴러 내려오며 더 많은 눈을 붙여 커지는 장면과 같다.",
    hook: "이 글의 마지막 포인트는 개별 문제보다 연결 구조가 더 무섭다는 점이다.",
    explanation:
      "실업만 문제라면 정책 하나로 막을 수도 있다. 주가만 문제라면 유동성 공급으로 완화할 수도 있다. 하지만 이 시나리오는 노동시장, 소비, 주택, 금융, 정치가 엮여 있다. 그래서 한 군데 충격이 다른 곳을 깨우며 스스로 커질 수 있다.",
    statement: "서로 연결된 문제는 합보다 크게 터질 수 있다.",
    terms: [
      {
        word: "전염",
        meaning: "한 영역의 문제가 다른 영역으로 번지는 현상",
        hook: "감기처럼 번진다고 생각하면 경제 전염도 이해하기 쉽다.",
      },
      {
        word: "루프",
        meaning: "한 바퀴 돌고 다시 자기 자신을 강화하는 고리",
        hook: "불안해서 덜 쓰고, 덜 써서 경기가 약해지고, 약해져서 더 불안해지는 구조다.",
      },
    ],
  }
);
