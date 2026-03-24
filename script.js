const summaryItems = [
  {
    label: "전제",
    title: "이 글은 예언이 아니라 시나리오 실험",
    text:
      "저자는 'AI 낙관론이 맞아도 시장에는 약세일 수 있다'는 역설을 시험합니다. 즉, AI가 실패해서가 아니라 너무 잘돼서 위기가 올 수 있다는 가정입니다.",
  },
  {
    label: "핵심 문제",
    title: "생산성은 뛰는데 사람 소득은 무너진다",
    text:
      "AI가 화이트칼라 일을 대체하면 기업 비용은 줄고 생산성은 높아집니다. 하지만 월급이 줄어든 사람들은 소비를 줄이기 때문에 실물경제는 약해집니다.",
  },
  {
    label: "중간 단계",
    title: "마찰로 먹고살던 산업이 먼저 흔들린다",
    text:
      "비싼 중개 수수료, 귀찮음에 기대는 구독, 소비자 비교를 대신해주던 플랫폼은 AI 에이전트가 등장하면 방어력이 약해집니다.",
  },
  {
    label: "전염",
    title: "소프트웨어 문제로 끝나지 않는다",
    text:
      "실직한 사람이 늘면 소비가 꺼지고, 소비가 꺼지면 다른 기업들도 실적 방어를 위해 더 많은 AI를 사게 됩니다. 그래서 충격이 여러 산업으로 번집니다.",
  },
  {
    label: "금융",
    title: "신용과 주택 시장까지 질문이 번진다",
    text:
      "고연봉 화이트칼라의 소득이 흔들리면 사모대출, 보험사 자산, 프라임 모기지까지 모두 '원래 가정이 유효한가?'라는 의심을 받기 시작합니다.",
  },
  {
    label: "정책",
    title: "정부는 기술 속도를 따라가기 어렵다",
    text:
      "이 글의 마지막 결론은 정책 실패 공포입니다. 정부는 더 많이 지원해야 하는데, 동시에 세수 기반은 약해지기 때문에 대응이 항상 늦을 수 있습니다.",
  },
];

const timelineItems = [
  {
    year: "2025 Q4",
    phase: "출발점",
    title: "에이전트형 코딩 도구의 성능 점프",
    text:
      "몇 주 안에 중간급 SaaS 핵심 기능을 복제할 정도로 AI 코딩이 좋아졌다는 가정입니다. 여기서 '그럼 우리가 직접 만들면 되지 않나?'라는 질문이 시작됩니다.",
  },
  {
    year: "2026 H1",
    phase: "기업 의사결정",
    title: "기업 구매팀이 소프트웨어 가격을 다시 보게 된다",
    text:
      "벤더를 완전히 갈아엎지 않더라도, 내부 구축 가능성이 협상력을 바꿉니다. 가격 인하 압박이 커지고 기능 차별화도 약해집니다.",
  },
  {
    year: "2026 Q3-Q4",
    phase: "반사 효과",
    title: "ServiceNow식 역설이 드러난다",
    text:
      "고객사들이 인력을 줄이면 좌석 라이선스를 파는 회사의 매출도 줄어듭니다. 즉, 고객에게 효율을 판 회사가 효율 때문에 맞는 구조가 됩니다.",
  },
  {
    year: "2027 H1",
    phase: "소비 영역",
    title: "소비자 AI가 거래의 마찰을 없애기 시작한다",
    text:
      "여행, 보험 갱신, 세무, 법률, 부동산, 배달, 카드 결제까지 '귀찮아서 그냥 쓰던' 영역에서 수수료와 습관 기반의 해자가 약해집니다.",
  },
  {
    year: "2027 Q2-Q3",
    phase: "실물경제",
    title: "화이트칼라 고용 충격이 소비로 번진다",
    text:
      "실직한 사람들은 더 낮은 임금의 서비스 일자리로 내려가고, 아직 안 잘린 사람들도 소비를 줄입니다. 실업자 수보다 소비 충격이 더 크게 나타납니다.",
  },
  {
    year: "2027 Q3-Q4",
    phase: "금융 전염",
    title: "사모대출과 보험 구조가 흔들린다",
    text:
      "AI가 망가뜨린 SaaS 현금흐름을 담보로 한 사모대출이 부실화되고, 그 자산을 들고 있던 보험사와 대체자산 운용사 구조도 의심받기 시작합니다.",
  },
  {
    year: "2028 H1",
    phase: "최종 질문",
    title: "프라임 모기지와 정책 대응까지 불안해진다",
    text:
      "원래 가장 안전하다고 여겨졌던 고신용자 주담대가 '소득이 계속 유지될까?'라는 질문을 받습니다. 그 시점에는 정부 대응 속도도 핵심 변수로 올라옵니다.",
  },
];

const loopStages = [
  {
    index: "Stage 01",
    title: "AI가 더 싸고 더 똑똑해진다",
    oneLine: "기술 진보가 문제의 시동을 건다.",
    summary:
      "원문은 AI가 느리게 퍼지는 도구가 아니라, 분기마다 더 강해지고 더 싸지는 일반 지능형 생산수단처럼 움직인다고 가정합니다.",
    easy:
      "예전엔 비싼 인턴 한 명을 더 뽑는 느낌이었다면, 이제는 24시간 일하는 팀을 거의 전기료 수준으로 붙이는 느낌입니다.",
    why:
      "이 전제가 있어야 뒤의 구조가 성립합니다. 기술이 조금 좋아지는 수준이면 위기가 아니라 단순한 효율화로 끝나기 때문입니다.",
  },
  {
    index: "Stage 02",
    title: "기업은 인건비를 줄이고 AI를 더 산다",
    oneLine: "비용 절감이 다시 기술 투자로 돌아간다.",
    summary:
      "기업 입장에서는 자연스러운 결정입니다. 사람을 줄이고, 그 절감분 일부로 AI 도구를 더 사면 비용은 낮아지고 생산성은 유지되거나 오르기 때문입니다.",
    easy:
      "직원 10명을 줄여서 비용을 줄였는데, 그 돈 일부로 더 좋은 자동화 도구를 사면 다음 감원은 더 쉬워지는 구조입니다.",
    why:
      "원문이 가장 강조하는 건 개별 기업의 선택은 합리적이지만, 모두가 그렇게 하면 집단적으로는 파괴적이라는 점입니다.",
  },
  {
    index: "Stage 03",
    title: "화이트칼라 소득과 소비가 약해진다",
    oneLine: "생산성 상승이 사람 지갑을 살리지 못한다.",
    summary:
      "해고되거나 임금이 낮은 일자리로 이동한 사람들은 소비를 줄입니다. 아직 남아 있는 사람도 '나도 곧 위험할 수 있다'고 생각해 지출을 줄입니다.",
    easy:
      "돈을 가장 많이 쓰던 손님들이 갑자기 불안해진 상황입니다. 가게는 아직 문을 열고 있지만 장바구니가 비어갑니다.",
    why:
      "원문은 미국 소비 구조에서 고소득 화이트칼라의 비중이 매우 크기 때문에, 적은 수의 해고라도 소비 충격은 크게 나타난다고 봅니다.",
  },
  {
    index: "Stage 04",
    title: "마찰로 돈 벌던 산업이 붕괴한다",
    oneLine: "AI 에이전트는 귀찮음을 수익 모델로 두지 않는다.",
    summary:
      "구독의 자동 갱신, 여행 예약 플랫폼, 보험 재쇼핑, 부동산 중개, 배달 앱, 카드 수수료처럼 사람의 게으름과 정보 비대칭 위에 있던 수익 모델이 압박을 받습니다.",
    easy:
      "사람은 귀찮아서 비교 안 하고 그냥 결제하지만, 에이전트는 밤새 20군데를 뒤져 가장 싼 길을 찾습니다.",
    why:
      "이 단계에서 충격은 단순한 고용 문제가 아니라 산업 해자 붕괴 문제로 확장됩니다. 그래서 소프트웨어 섹터 리스크가 시스템 리스크로 커집니다.",
  },
  {
    index: "Stage 05",
    title: "금융은 뒤늦게 기존 가정을 의심한다",
    oneLine: "부실보다 더 무서운 건 가정의 붕괴 인식이다.",
    summary:
      "사모대출은 ARR이 계속 돈이 된다고 믿었고, 보험은 그 자산이 괜찮다고 믿었고, 모기지는 고연봉 직장이 유지된다고 믿었습니다. 그 믿음 자체가 흔들립니다.",
    easy:
      "건물이 무너진 게 아니라, 그 건물 기초가 안전하다고 적힌 설계도가 틀렸다는 사실을 늦게 깨닫는 상황입니다.",
    why:
      "원문은 금융위기의 본질을 '실손'보다 '실손을 인정하는 순간의 패닉'에 둡니다. 그래서 정보 비대칭과 평가 지연을 크게 다룹니다.",
  },
  {
    index: "Stage 06",
    title: "정책은 늦고 루프는 더 빨라진다",
    oneLine: "정부는 사람을 지원해야 하지만 세수는 줄어든다.",
    summary:
      "임금 기반 세금이 줄어드는 시점에 정부는 더 많은 이전지출을 해야 합니다. 하지만 정치적 합의는 느리고, AI는 그 사이에도 계속 발전합니다.",
    easy:
      "불은 점점 커지는데 소방차는 출발 여부를 회의 중인 상태입니다.",
    why:
      "원문이 끝에서 던지는 질문은 '기술이 빨라서 무섭다'보다 '제도가 그 속도를 못 따라가서 더 무섭다'에 가깝습니다.",
  },
];

const chapters = [
  {
    index: "01",
    section: "Preface / Macro Memo",
    title: "이 글의 큰 주장: AI 낙관론이 맞아도 약세 시나리오가 가능하다",
    oneLine:
      "2028년에서 뒤돌아보는 형식으로, 생산성 호황과 실물경제 붕괴가 동시에 가능한지 보여줍니다.",
    easy:
      "가게 매출 장부는 좋아 보이는데 손님 표정은 점점 어두워지는 상황이라고 생각하면 됩니다. 숫자는 좋은데 체감은 나빠지는 것입니다.",
    logic:
      "원문은 'Ghost GDP'라는 표현을 씁니다. 생산은 늘고 GDP에는 찍히지만, 인간 가계로 돈이 돌아오지 않아 소비 순환이 끊긴다는 뜻입니다. AI가 사람 일을 대체할수록 기업 이익은 늘 수 있지만, 사람들의 지출 여력이 같이 줄어들면 경제 전체는 병들 수 있다는 논리입니다.",
    memory:
      "이 챕터에서 꼭 기억할 문장은 'AI는 기대보다 잘됐고, 시장도 좋았지만, 경제는 아니었다'입니다. 글 전체의 톤을 정하는 문장입니다.",
    tags: ["Ghost GDP", "실업률 10.2%", "S&P -38%", "생산성과 소비의 분리"],
  },
  {
    index: "02",
    section: "How It Started",
    title: "처음 균열은 SaaS와 화이트칼라 비용 구조에서 시작된다",
    oneLine:
      "AI 코딩이 좋아지면서 기업은 외부 소프트웨어를 굳이 비싸게 살 이유를 다시 계산하기 시작합니다.",
    easy:
      "예전에는 가구를 꼭 사야 했다면, 이제는 집에 있는 도구만으로 꽤 괜찮게 직접 만드는 시대가 온 느낌입니다.",
    logic:
      "원문은 기업 구매팀이 '직접 만들기'를 실제 대안으로 보기 시작한 순간을 중요하게 다룹니다. 벤더는 가격 협상력이 약해지고, 기능 차별화도 희미해집니다. 특히 좌석 기반 소프트웨어는 고객사가 사람을 줄일수록 라이선스가 바로 빠지는 역설을 맞습니다.",
    memory:
      "ServiceNow 사례의 포인트는 제품이 나빠져서가 아니라, 고객의 AI 효율화가 곧 그 회사 매출 감소로 이어진다는 구조적 아이러니입니다.",
    tags: ["에이전트형 코딩", "내부 구축", "가격 협상력 붕괴", "ServiceNow 역설"],
  },
  {
    index: "03",
    section: "When Friction Went to Zero",
    title: "소비자 AI는 '귀찮음'으로 먹고살던 산업을 때린다",
    oneLine:
      "사람이 대충 넘기던 비교와 검색을 에이전트가 대신하면, 마찰 기반 비즈니스 모델이 약해집니다.",
    easy:
      "사람은 피곤하면 그냥 첫 번째 앱에서 결제하지만, 에이전트는 끝까지 비교해서 가장 싼 선택을 합니다.",
    logic:
      "원문은 여행 예약, 보험 갱신, 세무, 법률, 부동산, 배달 플랫폼, 카드 결제까지 예로 듭니다. 공통점은 모두 인간의 시간 부족, 인내 부족, 정보 비대칭에서 수익을 얻는다는 점입니다. 에이전트가 항상 가장 싼 옵션을 고르면 브랜드 습관과 UX 해자는 크게 약해집니다.",
    memory:
      "DoorDash 예시는 아주 중요합니다. 글은 DoorDash의 해자를 '배고프고 귀찮은 사람이 홈 화면에 있는 앱을 누르는 습관'으로 봅니다. 에이전트에게는 그런 습관이 없다는 것이 핵심입니다.",
    tags: ["마찰 0", "DoorDash", "부동산 중개", "카드 수수료", "에이전트 커머스"],
  },
  {
    index: "04",
    section: "From Sector Risk to Systemic Risk",
    title: "충격이 소프트웨어 섹터 이야기를 넘어 경제 전체 이야기로 바뀐다",
    oneLine:
      "미국 경제가 사실상 화이트칼라 서비스 경제라면, 그 고용 충격은 섹터 문제가 아니라 시스템 문제라는 주장입니다.",
    easy:
      "배 한쪽 구멍이 아니라, 배의 무게중심 자체가 흔들리는 상황에 가깝습니다.",
    logic:
      "원문은 기존 기술혁신 논리가 '일자리를 없애도 새 일자리를 만든다'는 인간 중심 가정을 갖고 있다고 봅니다. 하지만 AI는 새로 생기는 일도 빠르게 흡수할 수 있기 때문에, 과거 산업혁신 사례를 그대로 적용하기 어렵다고 말합니다. 동시에 AI 인프라 회사는 잘나가는데 소비 경제는 무너지는 비대칭도 강조합니다.",
    memory:
      "이 챕터의 핵심 대비는 'NVDA는 잘 나가는데, 사람들은 점점 못 산다'입니다. 기술 인프라의 호황과 실물경제 악화가 동시에 성립할 수 있다는 그림입니다.",
    tags: ["화이트칼라 경제", "일자리 재흡수 실패", "인프라 호황", "한국/대만 수혜", "인도 IT 서비스 역풍"],
  },
  {
    index: "05",
    section: "The Intelligence Displacement Spiral",
    title: "고연봉 일자리 충격은 인원 수보다 소비 파괴력이 크다",
    oneLine:
      "상위 소득층이 미국 소비를 많이 담당하기 때문에, 적은 해고도 큰 소비 위축으로 이어질 수 있습니다.",
    easy:
      "학생 수가 조금 줄었는데도 학교 매점 매출이 확 꺾이는 이유가, 가장 많이 사 먹던 학생들이 빠졌기 때문인 상황과 비슷합니다.",
    logic:
      "원문은 해고된 화이트칼라가 더 낮은 임금의 서비스·긱 일자리로 내려오면서 그 구간 임금까지 누른다고 설명합니다. 또 아직 고용된 사람도 불안해서 소비를 줄입니다. 그래서 데이터에는 늦게 보이지만, 실제 현장에서는 이미 경기 침체가 진행된다는 것이 핵심입니다.",
    memory:
      "이 글에서 가장 중요하게 외워둘 숫자 중 하나는 '상위 10%가 미국 소비의 50% 이상을 차지한다'는 설정입니다. 왜 적은 해고가 큰 소비 충격이 되는지 설명하는 열쇠입니다.",
    tags: ["다운시프트", "긱 경제 임금 압박", "상위 10% 소비", "지연된 충격", "Q2 2027 경기침체"],
  },
  {
    index: "06",
    section: "The Daisy Chain of Correlated Bets",
    title: "사모대출, 보험, 재보험 구조가 같은 가정 위에 얹혀 있었다",
    oneLine:
      "AI가 SaaS 현금흐름을 흔들자, 그 위에 올려진 사모대출과 보험 구조도 한꺼번에 의심받습니다.",
    easy:
      "도미노가 한 줄이 아니라 여러 층으로 쌓여 있었는데, 맨 아래 블록 하나가 빠지면서 위층까지 흔들리는 그림입니다.",
    logic:
      "원문은 Zendesk 사례를 대표 부실로 제시합니다. ARR이 계속 유지된다는 가정으로 빌려준 돈이, AI 때문에 카테고리 자체가 약해지자 갑자기 위험해집니다. 문제는 여기서 끝이 아니라, 그 자산이 보험사와 재보험 구조, 해외 SPV, 대체자산 운용사의 수익 구조와 연결돼 있다는 점입니다.",
    memory:
      "이 챕터의 핵심 문장은 '위기를 만드는 건 손실 자체보다 손실을 인정하는 순간'입니다. 평가 지연과 불투명성이 공포를 키운다는 뜻입니다.",
    tags: ["Zendesk", "Private Credit", "Athene", "보험사 자본 규제", "영구자본 신화"],
  },
  {
    index: "07",
    section: "The Mortgage Question",
    title: "진짜 무서운 질문은 프라임 모기지까지 안전한가이다",
    oneLine:
      "가장 안전하다고 여겨졌던 고신용자의 주택담보대출도, 미래 소득이 흔들리면 다시 봐야 합니다.",
    easy:
      "문제는 집을 산 사람이 원래 나쁜 차주였다는 게 아니라, 그 사람이 기대했던 미래 연봉이 사라질 수 있다는 점입니다.",
    logic:
      "원문은 이번 위기가 2008년처럼 '처음부터 나쁜 대출' 문제가 아니라, 대출 당시에는 괜찮았던 사람이 이후의 기술 변화 때문에 약해질 수 있다는 점을 강조합니다. 높은 신용점수, 큰 계약금, 깔끔한 이력보다 중요한 것이 앞으로 30년 소득 기대인데 그 가정이 약해진다는 것입니다.",
    memory:
      "여기서 기억할 포인트는 '대출은 작성된 날엔 좋았지만, 세상이 바뀌었다'입니다. 이 문장이 2008년형 위기와 이 시나리오를 구분합니다.",
    tags: ["프라임 모기지", "샌프란시스코/시애틀/오스틴", "HELOC", "401(k) 인출", "소득 기대 붕괴"],
  },
  {
    index: "08",
    section: "The Battle Against Time",
    title: "정부는 더 써야 하는데 세수 기반은 동시에 약해진다",
    oneLine:
      "사람 노동에 세금이 걸려 있는 구조에서, 사람 소득이 줄면 정부는 가장 필요한 순간에 재원이 약해집니다.",
    easy:
      "병원이 환자는 늘어나는데 보험료 수입은 줄어드는 상황이라고 보면 됩니다.",
    logic:
      "원문은 개인소득세와 급여세가 미국 세수의 뼈대인데, AI로 생산성 이익이 자본과 컴퓨트 소유자에게 몰리면 가계를 거쳐 세금으로 돌아오는 순환이 깨진다고 설명합니다. 그래서 정부는 더 많은 이전지출을 해야 하지만, 동시에 세수는 약해집니다.",
    memory:
      "정치 논쟁보다 더 큰 문제로 저자가 보는 것은 시간입니다. AI는 빠르게 변하는데 제도와 입법은 느리게 움직인다는 점이 마지막 긴장감을 만듭니다.",
    tags: ["세수 감소", "이전지출 증가", "Transition Economy Act", "AI 컴퓨트 과세", "시간의 문제"],
  },
  {
    index: "09",
    section: "The Intelligence Premium Unwind",
    title: "결론: 인간 지능의 희소성이 줄어드는 재가격이 시작됐다",
    oneLine:
      "현대 경제는 인간 지능이 희소하다는 가정 위에 설계됐는데, 그 프리미엄이 줄어들면 모든 제도가 다시 가격을 매기게 됩니다.",
    easy:
      "금보다 물이 더 귀해지면 시장 전체 가격표를 다시 써야 하는 것과 비슷합니다. 여기서는 희소 자원이 인간 지능이었다는 이야기입니다.",
    logic:
      "노동시장, 주택담보대출, 세금 체계, 기업 가치평가 모두 인간의 판단과 조정 능력이 비싸고 희귀하다는 가정 위에 만들어졌다는 것이 원문의 결론입니다. AI가 그 희소성을 빠르게 깎아내리면, 우리가 보는 위기는 개별 섹터의 붕괴가 아니라 가격 체계 전체의 재조정입니다.",
    memory:
      "마지막 메시지는 공포 자체보다 '새 프레임을 빨리 만들어야 한다'입니다. 재가격은 붕괴와 같지 않지만, 늦으면 붕괴처럼 느껴질 수 있다는 뜻입니다.",
    tags: ["인간 지능 프리미엄", "재가격", "제도 재설계", "새 프레임", "아직 시간은 있다"],
  },
];

const glossaryItems = [
  {
    label: "Term",
    title: "Ghost GDP",
    text:
      "생산과 GDP 숫자는 늘지만, 그 돈이 사람 가계로 돌지 않아 실제 소비 경제를 살리지 못하는 상태를 말합니다.",
  },
  {
    label: "Term",
    title: "Agentic Coding",
    text:
      "AI가 단순 보조가 아니라, 스스로 여러 단계의 개발 작업을 이어가며 제품 기능을 만드는 상태를 뜻합니다.",
  },
  {
    label: "Term",
    title: "Habitual Intermediation",
    text:
      "소비자가 습관적으로 쓰는 앱이나 플랫폼이 거래 중간에서 수수료를 챙기는 구조입니다. 에이전트는 습관이 없어 이 해자가 약합니다.",
  },
  {
    label: "Term",
    title: "OpEx Substitution",
    text:
      "총비용을 늘리지 않고도 사람 인건비를 AI 사용료로 바꾸는 구조입니다. 경기 둔화에도 AI 투자가 계속될 수 있는 이유로 제시됩니다.",
  },
  {
    label: "Term",
    title: "Private Credit",
    text:
      "은행 대신 사모펀드나 대체자산 운용사가 직접 기업에 빌려주는 대출입니다. 원문에서는 SaaS와 기술기업 부실의 전파 경로로 등장합니다.",
  },
  {
    label: "Term",
    title: "Prime Mortgage",
    text:
      "신용이 높고 소득이 안정적인 차주에게 나간 상대적으로 우량한 주담대입니다. 원문은 이 안전자산마저 다시 보게 된다고 말합니다.",
  },
  {
    label: "Term",
    title: "Intelligence Premium",
    text:
      "인간의 사고력, 판단력, 창의력이 희소해서 높은 가치를 받던 프리미엄을 뜻합니다. 글의 마지막 결론은 이 프리미엄이 축소된다는 것입니다.",
  },
  {
    label: "Term",
    title: "Permanent Capital",
    text:
      "쉽게 환매되지 않는 장기 자금을 뜻합니다. 원문은 이 표현 뒤에 실제로는 보험 계약자 돈이 숨어 있었다는 점을 비판적으로 다룹니다.",
  },
  {
    label: "Term",
    title: "Inference Compute Tax",
    text:
      "AI 추론 사용량이나 컴퓨트에 세금을 매겨, 노동소득 약화를 보완하는 재원으로 쓰자는 정책 아이디어입니다.",
  },
];

const quizItems = [
  {
    question: "원문이 말하는 위기의 출발점에 가장 가까운 것은 무엇인가요?",
    options: [
      "AI가 기대보다 성능이 낮았기 때문",
      "AI가 너무 잘돼서 화이트칼라 비용 구조를 흔들었기 때문",
      "금리가 갑자기 폭등했기 때문",
      "원자재 가격이 급등했기 때문",
    ],
    answer: 1,
    explanation:
      "이 글은 'AI 실망' 시나리오가 아니라 'AI 성공이 너무 빨라서 생기는 부작용' 시나리오입니다.",
  },
  {
    question: "Ghost GDP라는 표현이 뜻하는 바는 무엇인가요?",
    options: [
      "GDP 통계가 조작된 상태",
      "생산은 늘지만 사람 경제로 돈이 순환하지 않는 상태",
      "암호화폐 거래만으로 만들어진 GDP",
      "불법 경제가 공식 통계에 잡힌 상태",
    ],
    answer: 1,
    explanation:
      "원문에서 Ghost GDP는 산출은 존재하지만, 그 부가 인간 소비 경제를 살리지 못하는 상태를 가리킵니다.",
  },
  {
    question: "DoorDash 사례가 상징하는 것은 무엇인가요?",
    options: [
      "배달 수요 자체의 소멸",
      "노동조합의 급격한 성장",
      "습관과 귀찮음 위에 쌓인 플랫폼 해자의 약화",
      "정부 보조금 축소",
    ],
    answer: 2,
    explanation:
      "에이전트는 홈 화면 습관이 없기 때문에, 배달 앱의 브랜드 습관 해자가 훨씬 약해질 수 있다는 논리입니다.",
  },
  {
    question: "이 글이 화이트칼라 해고를 특히 위험하게 보는 이유는 무엇인가요?",
    options: [
      "화이트칼라는 세금을 거의 내지 않기 때문",
      "화이트칼라 해고는 수치상으로 잡히지 않기 때문",
      "고소득층은 미국 소비에서 차지하는 비중이 커서 소비 충격이 크기 때문",
      "화이트칼라는 모두 주식을 팔기 때문",
    ],
    answer: 2,
    explanation:
      "원문은 상위 소득층이 미국 소비의 매우 큰 비중을 담당하므로, 소수의 충격도 소비 위축을 크게 만들 수 있다고 봅니다.",
  },
  {
    question: "Zendesk 사례는 어떤 금융 논리를 보여주나요?",
    options: [
      "좋아 보였던 반복 매출 가정이 AI로 약해질 수 있다",
      "모든 SaaS는 금리와 무관하다",
      "보험사는 언제나 은행보다 안전하다",
      "사모대출은 공개시장보다 투명하다",
    ],
    answer: 0,
    explanation:
      "원문은 ARR이 계속 돈을 벌 것이라는 가정이 깨질 때, 그 위에 쌓인 대출 구조가 얼마나 취약한지 보여줍니다.",
  },
  {
    question: "원문이 프라임 모기지를 새롭게 걱정하는 이유는 무엇인가요?",
    options: [
      "차주가 원래부터 신용이 나빴기 때문",
      "집값이 모두 즉시 폭락했기 때문",
      "높은 신용점수보다 더 중요한 미래 소득 안정성이 흔들리기 때문",
      "모든 대출이 변동금리였기 때문",
    ],
    answer: 2,
    explanation:
      "이 글은 2008년형 '처음부터 나쁜 대출'이 아니라, 나중에 세상이 변해서 불안해지는 우량 대출을 문제 삼습니다.",
  },
];

function renderSummary() {
  const container = document.getElementById("summary-grid");
  container.innerHTML = summaryItems
    .map(
      (item) => `
        <article class="summary-card" data-reveal>
          <span>${item.label}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join("");
}

function renderTimeline() {
  const container = document.getElementById("timeline-grid");
  container.innerHTML = timelineItems
    .map(
      (item) => `
        <article class="timeline-card" data-reveal>
          <span>${item.year}</span>
          <small class="timeline-phase">${item.phase}</small>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join("");
}

function renderLoop() {
  const nav = document.getElementById("loop-nav");
  const detail = document.getElementById("loop-detail");

  function setActive(index) {
    const stage = loopStages[index];

    detail.innerHTML = `
      <span class="detail-index">${stage.index}</span>
      <h3>${stage.title}</h3>
      <p class="detail-one-line">${stage.oneLine}</p>
      <p>${stage.summary}</p>
      <div class="detail-grid">
        <div class="detail-card">
          <strong>쉽게 말하면</strong>
          <p>${stage.easy}</p>
        </div>
        <div class="detail-card">
          <strong>왜 중요하나</strong>
          <p>${stage.why}</p>
        </div>
      </div>
    `;

    [...nav.querySelectorAll(".loop-step")].forEach((button, buttonIndex) => {
      const isActive = buttonIndex === index;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-selected", String(isActive));
      button.setAttribute("tabindex", isActive ? "0" : "-1");
    });
  }

  nav.innerHTML = loopStages
    .map(
      (stage, index) => `
        <button
          class="loop-step ${index === 0 ? "active" : ""}"
          type="button"
          role="tab"
          aria-selected="${index === 0}"
          data-index="${index}"
        >
          <span class="loop-step-index">${stage.index}</span>
          <strong>${stage.title}</strong>
          <p>${stage.oneLine}</p>
        </button>
      `,
    )
    .join("");

  nav.addEventListener("click", (event) => {
    const button = event.target.closest(".loop-step");
    if (!button) {
      return;
    }

    setActive(Number(button.dataset.index));
  });

  setActive(0);
}

function renderChapters() {
  const container = document.getElementById("chapter-list");
  container.innerHTML = chapters
    .map(
      (chapter, index) => `
        <details class="chapter-card" data-reveal ${index === 0 ? "open" : ""}>
          <summary>
            <span class="chapter-index">${chapter.index}</span>
            <div class="chapter-meta">
              <span>${chapter.section}</span>
              <h3>${chapter.title}</h3>
              <p>${chapter.oneLine}</p>
            </div>
            <span class="chapter-toggle">+</span>
          </summary>
          <div class="chapter-body">
            <div class="chapter-grid">
              <section class="chapter-block">
                <h4>쉽게 말하면</h4>
                <p>${chapter.easy}</p>
              </section>
              <section class="chapter-block">
                <h4>원문 논리</h4>
                <p>${chapter.logic}</p>
              </section>
              <section class="chapter-block">
                <h4>기억 포인트</h4>
                <p>${chapter.memory}</p>
              </section>
            </div>
            <ul class="chapter-tags">
              ${chapter.tags.map((tag) => `<li>${tag}</li>`).join("")}
            </ul>
          </div>
        </details>
      `,
    )
    .join("");
}

function renderGlossary() {
  const container = document.getElementById("glossary-grid");
  container.innerHTML = glossaryItems
    .map(
      (item) => `
        <article class="glossary-card" data-reveal>
          <span>${item.label}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join("");
}

function renderQuiz() {
  const container = document.getElementById("quiz-list");
  container.innerHTML = quizItems
    .map(
      (item, index) => `
        <article class="quiz-card" data-reveal data-answer="${item.answer}">
          <span class="quiz-index">Q${index + 1}</span>
          <h3>${item.question}</h3>
          <div class="quiz-options">
            ${item.options
              .map(
                (option, optionIndex) => `
                  <button class="quiz-option" type="button" data-option="${optionIndex}">
                    ${option}
                  </button>
                `,
              )
              .join("")}
          </div>
          <div class="quiz-feedback" hidden></div>
        </article>
      `,
    )
    .join("");

  container.addEventListener("click", (event) => {
    const option = event.target.closest(".quiz-option");
    if (!option) {
      return;
    }

    const card = option.closest(".quiz-card");
    const correctIndex = Number(card.dataset.answer);
    const selectedIndex = Number(option.dataset.option);
    const feedback = card.querySelector(".quiz-feedback");
    const isCorrect = selectedIndex === correctIndex;
    const explanation = quizItems[[...container.children].indexOf(card)].explanation;

    card.querySelectorAll(".quiz-option").forEach((button, buttonIndex) => {
      button.disabled = true;
      if (buttonIndex === correctIndex) {
        button.classList.add("correct");
      } else if (buttonIndex === selectedIndex && !isCorrect) {
        button.classList.add("wrong");
      }
    });

    feedback.hidden = false;
    feedback.innerHTML = isCorrect
      ? `<strong>정답입니다.</strong> ${explanation}`
      : `<strong>다시 확인:</strong> ${explanation}`;
  });
}

function setupRevealObserver() {
  const items = document.querySelectorAll("[data-reveal]");

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  items.forEach((item) => observer.observe(item));
}

function setupScrollProgress() {
  const bar = document.getElementById("scroll-progress-bar");

  function update() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable <= 0 ? 0 : (window.scrollY / scrollable) * 100;
    bar.style.width = `${Math.min(100, Math.max(0, ratio))}%`;
  }

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

function setupAnchorOffsets() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  function getOffset() {
    const shell = document.querySelector(".nav-shell");
    return (shell?.getBoundingClientRect().height ?? 0) + 28;
  }

  function scrollToHash(hash, replace = false) {
    const target = document.querySelector(hash);
    if (!target) {
      return;
    }

    const top = target.getBoundingClientRect().top + window.scrollY - getOffset();
    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth",
    });

    if (replace) {
      history.replaceState(null, "", hash);
    } else {
      history.pushState(null, "", hash);
    }
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const hash = link.getAttribute("href");
      if (!hash || hash === "#" || !document.querySelector(hash)) {
        return;
      }

      event.preventDefault();
      scrollToHash(hash);
    });
  });

  if (window.location.hash && document.querySelector(window.location.hash)) {
    window.requestAnimationFrame(() => {
      scrollToHash(window.location.hash, true);
    });
  }
}

renderSummary();
renderTimeline();
renderLoop();
renderChapters();
renderGlossary();
renderQuiz();
setupRevealObserver();
setupScrollProgress();
setupAnchorOffsets();
