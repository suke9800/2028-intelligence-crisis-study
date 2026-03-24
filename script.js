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
];

function getFlatSections() {
  return articleGroups.flatMap((group) =>
    group.sections.map((section) => ({
      ...section,
      groupId: group.id,
      groupLabel: group.label,
      groupTitle: group.title,
      groupIntro: group.intro,
      quizCategory: group.quizCategory,
    })),
  );
}

const refs = {
  overviewContent: document.querySelector("#overview-content"),
  articleOutline: document.querySelector("#article-outline"),
  articleGroups: document.querySelector("#article-groups"),
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
  settingsToggle: document.querySelector("#settings-toggle"),
  settingsPanel: document.querySelector("#settings-panel"),
  settingsClose: document.querySelector("#settings-close"),
  fontSizeRange: document.querySelector("#font-size-range"),
  fontSizeValue: document.querySelector("#font-size-value"),
  fontSizeReset: document.querySelector("#font-size-reset"),
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
};

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function normalizeTerm(term) {
  return String(term).trim().toLowerCase();
}

function renderRichText(text) {
  return String(text).replace(/\[\[(.+?)\]\]/g, (_, rawTerm) => {
    const entry = termDictionary[normalizeTerm(rawTerm)];
    const label = entry ? entry.label : rawTerm.trim();
    return `<button class="term-trigger" type="button" data-term="${escapeAttr(label)}">${label}</button>`;
  });
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

function makeQuestion({ id, prompt, answer, distractors, explanation, hint, category, source }) {
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
  };
}

function buildSectionQuestions(section, sections) {
  const otherSections = sections.filter((item) => item.id !== section.id);
  const groupOptions = Array.from(new Set(sections.map((item) => item.quizCategory))).filter(
    (category) => category !== section.quizCategory,
  );

  return [
    makeQuestion({
      id: `${section.id}-core`,
      prompt: `원문 <strong>${section.originalTitle}</strong> 파트의 핵심을 가장 쉽게 풀어쓴 것은 무엇인가요?`,
      answer: section.easy,
      distractors: otherSections.map((item) => item.easy),
      explanation: `${section.title} 파트는 ${plainTextFromRich(section.oneLine)}를 가장 쉽게 이해시키는 역할을 합니다. ${plainTextFromRich(section.impact)}`,
      hint: section.oneLine,
      category: section.quizCategory,
      source: section.title,
    }),
    makeQuestion({
      id: `${section.id}-impact`,
      prompt: `${section.title} 파트가 특히 경고하는 직접 효과는 무엇인가요?`,
      answer: section.impact,
      distractors: otherSections.map((item) => item.impact),
      explanation: `${section.title}의 초점은 ${plainTextFromRich(section.impact)}입니다. 이 파트는 ${plainTextFromRich(section.easy)}`,
      hint: section.easy,
      category: section.quizCategory,
      source: section.title,
    }),
    makeQuestion({
      id: `${section.id}-trap`,
      prompt: `${section.title} 파트를 읽을 때 피해야 할 오해는 무엇인가요?`,
      answer: section.trap,
      distractors: otherSections.map((item) => item.trap),
      explanation: `${section.title}는 ${plainTextFromRich(section.trap)}는 점을 분명히 해 둡니다. 이 오해를 빼야 나머지 논리가 연결됩니다.`,
      hint: `핵심은 ${plainTextFromRich(section.oneLine)}`,
      category: section.quizCategory,
      source: section.title,
    }),
    makeQuestion({
      id: `${section.id}-group`,
      prompt: `${section.title} 파트가 속한 큰 묶음은 무엇인가요?`,
      answer: section.quizCategory,
      distractors: groupOptions,
      explanation: `${section.title}는 ${section.quizCategory} 묶음에 속합니다. 이 묶음은 ${section.groupIntro}`,
      hint: section.groupIntro,
      category: section.quizCategory,
      source: section.title,
    }),
    makeQuestion({
      id: `${section.id}-identify`,
      prompt: `다음 한 줄 요약과 가장 가까운 파트 제목을 고르세요. <strong>${plainTextFromRich(section.oneLine)}</strong>`,
      answer: section.title,
      distractors: otherSections.map((item) => item.title),
      explanation: `정답은 ${section.title}입니다. 원문 제목은 ${section.originalTitle}이고, 이 파트는 ${plainTextFromRich(section.easy)}`,
      hint: section.impact,
      category: section.quizCategory,
      source: section.title,
    }),
  ];
}

function buildTermQuestions(entry, entries) {
  const otherEntries = entries.filter((item) => item.label !== entry.label);
  const slug = entry.label.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return [
    makeQuestion({
      id: `term-${slug}-meaning`,
      prompt: `본문 문맥에서 [[${entry.label}]]은 무엇을 뜻하나요?`,
      answer: entry.summary,
      distractors: otherEntries.map((item) => item.summary),
      explanation: `${entry.label}은 ${entry.summary}입니다. 쉽게 말하면 ${entry.easy} 원문에서는 ${entry.why}`,
      hint: entry.easy,
      category: "용어",
      source: entry.label,
    }),
    makeQuestion({
      id: `term-${slug}-label`,
      prompt: `다음 설명에 맞는 원문 용어를 고르세요. <strong>${entry.easy}</strong>`,
      answer: entry.label,
      distractors: otherEntries.map((item) => item.label),
      explanation: `정답은 [[${entry.label}]]입니다. ${entry.summary} 원문에서는 ${entry.why}`,
      hint: entry.summary,
      category: "용어",
      source: entry.label,
    }),
  ];
}

function getQuestionBank() {
  const sections = getFlatSections();
  return [
    ...sections.flatMap((section) => buildSectionQuestions(section, sections)),
    ...termEntries.flatMap((entry) => buildTermQuestions(entry, termEntries)),
  ];
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

function renderOutline() {
  refs.articleOutline.innerHTML = `
    <p class="panel-kicker">Outline</p>
    <h3>원문 순서</h3>
    <nav>
      ${getFlatSections()
        .map(
          (section) => `
            <a href="#${section.id}" data-outline-link="${section.id}">
              <span>${section.groupLabel}</span>
              ${section.title}
              <small>${section.originalTitle}</small>
            </a>
          `,
        )
        .join("")}
    </nav>
  `;
}

function renderArticle() {
  refs.articleGroups.innerHTML = articleGroups
    .map(
      (group) => `
        <section class="reading-group" data-reveal>
          <div class="group-head">
            <p class="eyebrow">${group.label}</p>
            <h2>${group.title}</h2>
            <p>${group.intro}</p>
          </div>
          <div class="reading-stack">
            ${group.sections
              .map(
                (section) => `
                  <article id="${section.id}" class="reading-section">
                    <div class="reading-head">
                      <p class="section-label">${section.category} · ${section.originalTitle}</p>
                      <h3>${section.title}</h3>
                      <p class="section-one-line">${renderRichText(section.oneLine)}</p>
                    </div>
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
                  </article>
                `,
              )
              .join("")}
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
    questions: shuffled(getQuestionBank()).slice(0, 20),
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

function openTerm(termLabel) {
  const entry = termDictionary[normalizeTerm(termLabel)];

  if (!entry) {
    return;
  }

  refs.termTitle.textContent = entry.label;
  refs.termSummary.textContent = entry.summary;
  refs.termEasy.textContent = `쉽게 말해: ${entry.easy}`;
  refs.termWhy.textContent = `이 글에서 왜 중요한가: ${entry.why}`;
  refs.termModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeTerm() {
  refs.termModal.hidden = true;

  if (refs.settingsPanel.hidden) {
    document.body.style.overflow = "";
  }
}

function applyFontScale(value) {
  const numericValue = Number(value);
  const scale = numericValue / 100;
  document.documentElement.style.setProperty("--font-scale", scale.toFixed(2));
  refs.fontSizeRange.value = String(numericValue);
  refs.fontSizeValue.textContent = `${numericValue}%`;
  window.localStorage.setItem("gic-font-scale", String(numericValue));
}

function restoreFontScale() {
  const storedValue = Number(window.localStorage.getItem("gic-font-scale")) || 100;
  applyFontScale(storedValue);
}

function openSettings() {
  refs.settingsPanel.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeSettings() {
  refs.settingsPanel.hidden = true;

  if (refs.termModal.hidden) {
    document.body.style.overflow = "";
  }
}

function setupRevealObserver() {
  const nodes = document.querySelectorAll("[data-reveal]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 },
  );

  nodes.forEach((node) => observer.observe(node));
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

    if (target.closest("[data-close-term='true']")) {
      closeTerm();
      return;
    }

    if (target.closest("[data-close-settings='true']")) {
      closeSettings();
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
  refs.settingsToggle.addEventListener("click", openSettings);
  refs.settingsClose.addEventListener("click", closeSettings);
  refs.termClose.addEventListener("click", closeTerm);
  refs.fontSizeRange.addEventListener("input", (event) => {
    const nextValue = event.target instanceof HTMLInputElement ? event.target.value : "100";
    applyFontScale(nextValue);
  });
  refs.fontSizeReset.addEventListener("click", () => applyFontScale(100));

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
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
  renderOutline();
  renderArticle();
  renderCategoryFilters();
  renderStudyQuestions();
  restoreFontScale();
  bindEvents();
  setupRevealObserver();
  setupOutlineHighlight();
  setupScrollProgress();
}

const termDictionary = Object.fromEntries(
  termEntries.map((entry) => [entry.label.toLowerCase(), entry]),
);

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
    label: "Group 1",
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
    label: "Group 2",
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
    label: "Group 3",
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
    label: "Group 4",
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
    label: "Group 5",
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

init();
