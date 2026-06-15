export const examMeta = {
  title: "HKSI Paper 2",
  subtitle: "證券規例題庫",
  version: "v2.8.1 對應版",
  questionCount: 800,
  examFormat: "40 題 MCQ / 60 分鐘 / 70% 合格",
  checkedAt: "2026-06-15",
  notice:
    "本題庫為根據 HKSI Paper 2 溫習手冊範圍及公開監管資料整理的原創仿真題，不是官方真題重製。官方樣題及舊真題請從資料頁連往 HKSI 網站查看。"
};

export const chapters = [
  { id: 1, title: "監管架構", short: "架構", accent: "#1d7ed0" },
  { id: 2, title: "相關附屬法例的規定", short: "附屬法例", accent: "#0d9488" },
  { id: 3, title: "證券業務管理及監管", short: "業務管理", accent: "#7c3aed" },
  { id: 4, title: "買賣於聯交所交易的證券", short: "聯交所交易", accent: "#dc8a00" },
  { id: 5, title: "其他證券活動", short: "其他活動", accent: "#2563eb" },
  { id: 6, title: "交易所買賣的期權及場外衍生工具", short: "期權/OTC", accent: "#be185d" },
  { id: 7, title: "市場失當行為及不當交易手法", short: "市場失當", accent: "#dc2626" }
];

export const materials = [
  {
    title: "HKSI Licensing Examination Overview",
    tag: "考試格式",
    url: "https://www.hksi.org/en/qualification/examinations/licensing-examination-for-securities-and-futures-intermediaries/overview/",
    note: "官方列明 Paper 2 題量、時間、合格分數及考試版本。"
  },
  {
    title: "HKSI Paper 2 eStudy Guide v2.8.1",
    tag: "官方手冊",
    url: "https://www.hksi.org/development/activities/1007250-regulation-of-securities-english-v2-8-1-estudy-guide/",
    note: "官方電子溫習手冊入口，考試內容以手冊及更新文件為準。"
  },
  {
    title: "HKSI Updating Your Study Guides",
    tag: "手冊更新",
    url: "https://www.hksi.org/en/qualification/examinations/licensing-examination-for-securities-and-futures-intermediaries/updating-your-study-guides/",
    note: "檢查考前是否已有手冊更新或補充。"
  },
  {
    title: "HKSI Sample Practice Tests",
    tag: "官方樣題",
    url: "https://www.hksi.org/qualification/examinations/licensing-examination-for-securities-and-futures-intermediaries/sample-practice-tests/",
    note: "官方樣題不是實際考題，適合熟悉題型。"
  },
  {
    title: "HKSI Paper 2 Past Q&A 2006",
    tag: "舊真題",
    url: "https://www.hksi.org/files/qualification/practising-questions-and-answers/le_paper_2_2006_qa.pdf",
    note: "官方公開舊版 Past Q&A，法例內容可能已過時，只宜看題型。"
  },
  {
    title: "Securities and Futures Ordinance Cap. 571",
    tag: "SFO",
    url: "https://www.elegislation.gov.hk/hk/cap571",
    note: "《證券及期貨條例》官方文本。"
  },
  {
    title: "SFC Code of Conduct",
    tag: "操守準則",
    url: "https://www.sfc.hk/en/Rules-and-standards/Codes-and-guidelines/Codes/Code-of-Conduct-for-Persons-Licensed-by-or-Registered-with-the-Securities-and-Futures-Commission",
    note: "持牌人及註冊人的操守準則。"
  },
  {
    title: "SFC Internal Control Guidelines",
    tag: "內控指引",
    url: "https://www.sfc.hk/en/Rules-and-standards/Codes-and-guidelines/Guidelines/Management-Supervision-and-Internal-Control-Guidelines-for-Persons-Licensed-by-or-Registered-with-the-Securities-and-Futures-Commission",
    note: "管理、監督及內部監控要求。"
  },
  {
    title: "SFC AML/CFT Guideline",
    tag: "AML",
    url: "https://www.sfc.hk/en/Rules-and-standards/Anti-money-laundering-and-counter-financing-of-terrorism/Guidelines",
    note: "打擊洗錢及恐怖分子資金籌集指引。"
  },
  {
    title: "SFC Disciplinary Fining Guidelines",
    tag: "紀律罰款",
    url: "https://www.sfc.hk/en/Rules-and-standards/Codes-and-guidelines/Guidelines/Disciplinary-Fining-Guidelines",
    note: "市場失當及中介人紀律處分時常見考點。"
  },
  {
    title: "HKEX Securities Trading",
    tag: "交易機制",
    url: "https://www.hkex.com.hk/Services/Trading/Securities/Overview/Trading-Mechanism",
    note: "交易機制、競價及持續交易安排。"
  },
  {
    title: "HKEX Securities Settlement",
    tag: "結算交收",
    url: "https://www.hkex.com.hk/Services/Settlement-and-Depository/Securities/Overview?sc_lang=en",
    note: "香港結算、CCASS、結算交收流程。"
  }
];

const coreQuestions = [
  {
    id: "P2-C1-001",
    chapter: 1,
    topic: "監管方法",
    difficulty: "基礎",
    stem: "證監會監管市場中介人的基本取向，最貼近下列哪一項？",
    options: [
      "只在投資者投訴後才採取行動",
      "以風險為本，把較多監管資源放在高風險範疇",
      "由交易所全權監管所有持牌人的操守",
      "以中介人自願匯報作為唯一監管工具"
    ],
    answer: 1,
    explanation:
      "Paper 2 常考監管思路。證監會採用風險為本的監管方針，並會把監管注意力集中於風險較高的業務、產品、客戶資產及管治範疇。",
    source: "HKSI Paper 2 v2.8.1 第1章；HKSI 官方考試綱要"
  },
  {
    id: "P2-C1-002",
    chapter: 1,
    topic: "SFO 架構",
    difficulty: "基礎",
    stem: "《證券及期貨條例》在香港證券及期貨業監管中扮演什麼角色？",
    options: [
      "只規管上市公司，不規管中介人",
      "是監管證券及期貨市場的基礎法例，並由附屬法例、守則及指引補充",
      "只適用於交易所，不適用於場外衍生工具",
      "只處理稅務及印花稅事宜"
    ],
    answer: 1,
    explanation:
      "《證券及期貨條例》是核心法例；詳細執行要求常由附屬規則、守則、指引及交易所規則補充。",
    source: "《證券及期貨條例》Cap.571；HKSI Paper 2 第1章"
  },
  {
    id: "P2-C1-003",
    chapter: 1,
    topic: "監管機構",
    difficulty: "基礎",
    stem: "下列哪一項最能描述香港交易所的主要市場職能？",
    options: [
      "批准所有持牌代表的個人牌照",
      "確保其營運的證券及期貨市場公平、有序及風險受控",
      "擔任所有投資者的投資顧問",
      "負責審理所有市場失當行為刑事案件"
    ],
    answer: 1,
    explanation:
      "香港交易所及其交易所負責市場運作及交易規則執行；持牌及大部分中介人操守監管則屬證監會範圍。",
    source: "HKSI Paper 2 第1章；HKEX 官方資料"
  },
  {
    id: "P2-C1-004",
    chapter: 1,
    topic: "發牌制度",
    difficulty: "基礎",
    stem: "Paper 2 對負責人員特別相關，主要因為它覆蓋哪兩類受規管活動的本地監管架構要求？",
    options: [
      "第1類證券交易及第4類就證券提供意見",
      "第2類期貨合約交易及第6類就機構融資提供意見",
      "第7類提供自動化交易服務及第9類資產管理",
      "第10類信貸評級服務及第13類存管服務"
    ],
    answer: 0,
    explanation:
      "Paper 2 是針對第1類和第4類負責人員本地監管架構的認可考試。",
    source: "HKSI Paper 2 關於資格考試卷二"
  },
  {
    id: "P2-C1-005",
    chapter: 1,
    topic: "負責人員",
    difficulty: "高頻",
    stem: "就持牌法團而言，下列哪一組說法正確？\nI. 一般須至少有兩名證監會核准的負責人員\nII. 每名執行董事均須獲核准為負責人員\nIII. 負責人員須積極參與或監督相關受規管活動\nIV. 負責人員只需由公司內部任命，毋須證監會核准",
    options: ["I、II、III", "I、III、IV", "II、III、IV", "I、II、III、IV"],
    answer: 0,
    explanation:
      "持牌法團通常最少需要兩名負責人員；執行董事若參與受規管業務，須成為負責人員；負責人員須經證監會核准。",
    source: "SFO 第125條；HKSI Paper 2 第1章"
  },
  {
    id: "P2-C1-006",
    chapter: 1,
    topic: "適當人選",
    difficulty: "基礎",
    stem: "判斷申請人是否為「適當人選」時，哪一項通常不是核心考慮？",
    options: [
      "財政狀況或償付能力",
      "勝任能力、經驗及資格",
      "聲譽、品格、可靠性及誠信",
      "申請人是否偏好某一類投資產品"
    ],
    answer: 3,
    explanation:
      "適當人選測試重點是財政狀況、勝任能力、聲譽、品格、可靠性和誠信等，個人投資偏好本身不是核心準則。",
    source: "SFO 第129條；HKSI Paper 2 第1章"
  },
  {
    id: "P2-C1-007",
    chapter: 1,
    topic: "大股東",
    difficulty: "應用",
    stem: "某投資者擬成為持牌法團的大股東。以下哪一項最符合監管要求？",
    options: [
      "只需通知公司董事會，不涉及證監會",
      "通常須事先取得證監會核准",
      "只要資金來源合法，即可事後通知",
      "只需要聯交所批准"
    ],
    answer: 1,
    explanation:
      "成為或繼續作為持牌法團大股東通常涉及證監會核准，原因是控制權會影響中介人是否仍屬適當人選。",
    source: "SFO 發牌制度；HKSI Paper 2 第1章"
  },
  {
    id: "P2-C1-008",
    chapter: 1,
    topic: "其他法例",
    difficulty: "應用",
    stem: "公司董事在處理公司事務時，應避免個人利益與公司利益衝突。這主要反映哪類法律/管治概念？",
    options: ["董事受信責任", "印花稅責任", "賣空申報責任", "交易所持倉限制"],
    answer: 0,
    explanation:
      "董事對公司負有受信責任，須真誠為公司利益行事、按恰當目的行使權力並避免利益衝突。",
    source: "公司法概念；HKSI Paper 2 第1章"
  },
  {
    id: "P2-C1-009",
    chapter: 1,
    topic: "受規管活動",
    difficulty: "高頻",
    stem: "下列哪一項最可能屬於第1類受規管活動「證券交易」？",
    options: [
      "代表客戶買賣上市股票",
      "只提供公司秘書服務",
      "只向僱員提供內部培訓",
      "只就非證券商品提供市場評論"
    ],
    answer: 0,
    explanation:
      "代表客戶買賣證券是第1類活動的典型例子。題目常以業務情境測試受規管活動分類。",
    source: "SFO 附表5；HKSI Paper 2 第1章"
  },
  {
    id: "P2-C1-010",
    chapter: 1,
    topic: "監管資訊",
    difficulty: "應用",
    stem: "證監會根據法定權力要求中介人提供文件或解釋時，中介人提供重要方面虛假或具誤導性的答案，最可能有什麼後果？",
    options: [
      "只會被要求重新提交，沒有其他後果",
      "可能構成違法並引起紀律或刑事後果",
      "只會影響交易所參與者資格，不影響證監會牌照",
      "只適用於上市公司董事，不適用於中介人"
    ],
    answer: 1,
    explanation:
      "未遵從調查要求或提供在要項上虛假/具誤導性的資料，可能觸犯法例並影響適當人選資格。",
    source: "SFO 第180條及相關條文；HKSI Paper 2 第1章"
  },
  {
    id: "P2-C1-011",
    chapter: 1,
    topic: "短期牌照",
    difficulty: "進階",
    stem: "短期牌照主要為哪類申請人設計？",
    options: [
      "主要在香港長期經營零售證券業務的公司",
      "主要在海外經營業務、短期在香港進行指定受規管活動的人士或公司",
      "任何不符合適當人選要求但希望試營業的人士",
      "只適用於香港交易所上市公司"
    ],
    answer: 1,
    explanation:
      "短期牌照是為主要在香港以外經營並短期在港進行指定活動的人士/公司而設，仍受條件及監管要求限制。",
    source: "SFO 發牌制度；HKSI Paper 2 第1章"
  },
  {
    id: "P2-C1-012",
    chapter: 1,
    topic: "企業管治",
    difficulty: "高頻",
    stem: "高級管理層推動合規文化時，最應建立哪一類安排？",
    options: [
      "只依靠前線員工自行判斷",
      "清晰匯報途徑、職責分工、監督及問責機制",
      "完全外判所有監管責任",
      "只在年末檢討一次所有客戶交易"
    ],
    answer: 1,
    explanation:
      "合規文化不是口號，考點在於高級管理層須建立匯報、監督、控制、資源及問責安排。",
    source: "HKSI Paper 2 第1章；SFC 內控指引"
  },
  {
    id: "P2-C2-001",
    chapter: 2,
    topic: "財政資源規則",
    difficulty: "基礎",
    stem: "《財政資源規則》的主要監管目的，是使證監會能夠評估持牌法團的哪一方面？",
    options: [
      "品牌知名度及市場推廣能力",
      "償付能力及受規管活動風險",
      "員工福利水平",
      "上市公司盈利能力"
    ],
    answer: 1,
    explanation:
      "FRR 的核心是財務穩健性、速動資金及風險監察，以保護投資者和市場穩定。",
    source: "HKSI Paper 2 第2章；SFRR"
  },
  {
    id: "P2-C2-002",
    chapter: 2,
    topic: "財政資源規則",
    difficulty: "高頻",
    stem: "在財政資源規則的語境下，「速動資金」概念最接近下列哪一項？",
    options: [
      "持牌法團所有固定資產的市值",
      "速動資產扣除認可負債後的監管資本指標",
      "客戶存放於信託戶口的全部款項",
      "上市公司每日成交額"
    ],
    answer: 1,
    explanation:
      "速動資金是以速動資產與認可負債為基礎的監管資本概念，用於判斷持牌法團是否滿足最低資本要求。",
    source: "HKSI Paper 2 第2章"
  },
  {
    id: "P2-C2-003",
    chapter: 2,
    topic: "客戶證券",
    difficulty: "應用",
    stem: "中介人收到客戶證券抵押品後，一般應如何處理？",
    options: [
      "在合理切實可行範圍內盡快存放於認可財務機構、核准保管人或合資格中介人等適當帳戶",
      "可直接轉為公司自有資產使用",
      "必須立即在市場出售套現",
      "只需以口頭方式通知客戶即可任意處置"
    ],
    answer: 0,
    explanation:
      "客戶證券規則重點在保管及授權使用。客戶資產須與公司資產分開、按規則存放及處理。",
    source: "HKSI Paper 2 第2章；客戶證券規則"
  },
  {
    id: "P2-C2-004",
    chapter: 2,
    topic: "客戶款項",
    difficulty: "基礎",
    stem: "客戶款項規則的核心要求是什麼？",
    options: [
      "客戶款項可與公司營運資金混合使用",
      "客戶款項須按規則存放於獨立客戶帳戶並受到保護",
      "客戶款項只需記錄於內部試算表",
      "客戶款項規則只適用於上市公司"
    ],
    answer: 1,
    explanation:
      "客戶款項須隔離保管，防止中介人把客戶資金用作自身用途或令客戶承受中介人的信用風險。",
    source: "HKSI Paper 2 第2章；客戶款項規則"
  },
  {
    id: "P2-C2-005",
    chapter: 2,
    topic: "成交單據",
    difficulty: "基礎",
    stem: "《成交單據、戶口結單及收據規則》的主要功能是什麼？",
    options: [
      "規定中介人向客戶提供成交、帳戶及收款相關文件",
      "規定上市公司派息時間",
      "規定交易所收市時間",
      "規定分析員研究報告格式"
    ],
    answer: 0,
    explanation:
      "該規則確保客戶能收到交易確認、帳戶資料及收據，便於核對中介人如何處理其交易及資產。",
    source: "HKSI Paper 2 第2章"
  },
  {
    id: "P2-C2-006",
    chapter: 2,
    topic: "備存紀錄",
    difficulty: "高頻",
    stem: "《備存紀錄規則》要求中介人保存足夠紀錄，下列哪一項最符合其目的？",
    options: [
      "只為市場推廣部門分析客戶喜好",
      "能解釋財政狀況、反映受規管業務運作及追蹤客戶資產",
      "只保存董事會會議相片",
      "避免向監管機構提交任何資料"
    ],
    answer: 1,
    explanation:
      "紀錄須足以編製財務報表、反映客戶資產及交易，並支援審計和監管查核。",
    source: "HKSI Paper 2 第2章；備存紀錄規則"
  },
  {
    id: "P2-C2-007",
    chapter: 2,
    topic: "帳目及審計",
    difficulty: "應用",
    stem: "持牌法團的核數師發現重大違規或財務問題，最可能涉及哪類監管安排？",
    options: [
      "核數師只向公司市場部匯報",
      "帳目及審計規則下的報告、審計及通知責任",
      "只屬交易所交易費問題",
      "只屬客戶私人投資偏好問題"
    ],
    answer: 1,
    explanation:
      "帳目及審計規則要求財務報表和核數師報告，重大事項可能觸發向證監會報告的責任。",
    source: "HKSI Paper 2 第2章；帳目及審計規則"
  },
  {
    id: "P2-C2-008",
    chapter: 2,
    topic: "投資者賠償",
    difficulty: "基礎",
    stem: "投資者賠償基金主要處理哪類情況？",
    options: [
      "因投資決定失誤而產生的所有虧損",
      "因指明中介人或相關人士違責而導致的合資格損失",
      "任何股價下跌",
      "所有海外市場交易虧損"
    ],
    answer: 1,
    explanation:
      "投資者賠償並不是投資保本安排；它針對特定違責事件下的合資格申索，且受規則限制。",
    source: "HKSI Paper 2 第2章；投資者賠償規則"
  },
  {
    id: "P2-C2-009",
    chapter: 2,
    topic: "持倉限額",
    difficulty: "高頻",
    stem: "《合約限量及須申報的持倉量規則》的主要目的，是避免什麼風險？",
    options: [
      "投資者完全不承受市場波動",
      "衍生工具市場累積過大持倉而影響市場有序運作及穩定",
      "上市公司派息過高",
      "所有客戶使用網上交易"
    ],
    answer: 1,
    explanation:
      "持倉限額和大額持倉申報是市場穩定工具，常以期貨/期權持倉情境考核。",
    source: "HKSI Paper 2 第2章；合約限量及須申報持倉量規則"
  },
  {
    id: "P2-C2-010",
    chapter: 2,
    topic: "OTC 匯報",
    difficulty: "進階",
    stem: "場外衍生工具交易資料匯報責任通常不會適用於哪一項？",
    options: [
      "被金管局指定須匯報的場外衍生工具交易",
      "達到規則適用範圍的指定交易",
      "任何完全不屬指定類別的私人非衍生工具安排",
      "中介人須按規則保存的相關紀錄"
    ],
    answer: 2,
    explanation:
      "場外衍生工具匯報及備存紀錄責任只適用於規則涵蓋及指定的交易和人士，不是所有私人安排都納入。",
    source: "HKSI Paper 2 第2章；OTC 匯報規則"
  },
  {
    id: "P2-C2-011",
    chapter: 2,
    topic: "OTC 結算",
    difficulty: "進階",
    stem: "場外衍生工具中央結算責任的監管重點是什麼？",
    options: [
      "把所有零售股票交易改為場外交易",
      "處理規模較大、可能造成系統性風險的場外衍生工具交易",
      "禁止所有衍生工具",
      "只規管上市公司公告"
    ],
    answer: 1,
    explanation:
      "OTC 結算制度旨在減低系統性風險，尤其針對重要市場參與者之間的指定交易。",
    source: "HKSI Paper 2 第2章；OTC 結算規則"
  },
  {
    id: "P2-C2-012",
    chapter: 2,
    topic: "法例配對",
    difficulty: "高頻",
    stem: "下列哪一組配對最準確？",
    options: [
      "客戶證券規則 - 保管及處置客戶證券/抵押品",
      "成交單據規則 - 設定交易所上市要求",
      "財政資源規則 - 規定分析員不可交易個人股票",
      "備存紀錄規則 - 規定印花稅稅率"
    ],
    answer: 0,
    explanation:
      "Paper 2 第2章常以規則名稱配功能考核。客戶證券規則對應客戶證券/抵押品保管及處置。",
    source: "HKSI Paper 2 第2章"
  },
  {
    id: "P2-C3-001",
    chapter: 3,
    topic: "負責人員職責",
    difficulty: "基礎",
    stem: "負責人員及主管人員被視為中介人的「主腦人」，主要因為他們通常負責什麼？",
    options: [
      "只處理公司品牌設計",
      "最終決策、監督受規管活動及確保合規運作",
      "只負責接聽客戶電話",
      "只管理辦公室租約"
    ],
    answer: 1,
    explanation:
      "負責人員/主管人員是受規管業務的核心管理者，考點在於其監督、管理和合規責任。",
    source: "HKSI Paper 2 第3章"
  },
  {
    id: "P2-C3-002",
    chapter: 3,
    topic: "操守準則",
    difficulty: "基礎",
    stem: "《操守準則》的一般原則通常不包括哪一項？",
    options: [
      "誠實及公平",
      "勤勉盡責",
      "保證客戶投資一定獲利",
      "妥善處理利益衝突"
    ],
    answer: 2,
    explanation:
      "中介人不得保證投資一定獲利；操守原則強調誠信、公平、勤勉、能力、客戶資料、資產保護、利益衝突和合規。",
    source: "SFC Code of Conduct；HKSI Paper 2 第3章"
  },
  {
    id: "P2-C3-003",
    chapter: 3,
    topic: "客戶資料",
    difficulty: "高頻",
    stem: "中介人在向客戶作出建議前，最應先完成哪項工作？",
    options: [
      "了解客戶財務狀況、投資經驗、目標、風險承受能力等資料",
      "只查閱當日成交排名",
      "要求客戶承諾不投訴",
      "只按佣金高低選產品"
    ],
    answer: 0,
    explanation:
      "KYC 和適合性是 Paper 2 高頻考點；建議應以客戶情況和產品風險為基礎。",
    source: "SFC Code of Conduct；HKSI Paper 2 第3章"
  },
  {
    id: "P2-C3-004",
    chapter: 3,
    topic: "客戶協議",
    difficulty: "基礎",
    stem: "向客戶提供證券交易服務前，書面客戶協議通常應達到什麼目的？",
    options: [
      "清楚列明服務、權利義務、風險披露及重要條款",
      "取代所有法例及守則要求",
      "只列出公司宣傳口號",
      "保證所有交易沒有虧損"
    ],
    answer: 0,
    explanation:
      "客戶協議和風險披露有助客戶理解服務及風險，也為中介人的合規安排提供文件基礎。",
    source: "SFC Code of Conduct；HKSI Paper 2 第3章"
  },
  {
    id: "P2-C3-005",
    chapter: 3,
    topic: "利益衝突",
    difficulty: "應用",
    stem: "分析員持有某股票並準備發表研究報告。中介人最應注意哪項安排？",
    options: [
      "完全不需要披露任何利益",
      "設立處理利益衝突、個人交易限制及披露的監控",
      "要求分析員只寫正面意見",
      "把研究報告交由銷售人員任意修改"
    ],
    answer: 1,
    explanation:
      "研究、銷售、個人交易及投資銀行利益可能構成衝突，須有披露、限制和監督措施。",
    source: "HKSI Paper 2 第3章及第5章；SFC Code of Conduct"
  },
  {
    id: "P2-C3-006",
    chapter: 3,
    topic: "內部監控",
    difficulty: "高頻",
    stem: "良好內部監控制度最應包括下列哪一組元素？",
    options: [
      "職責分工、監督、資料管理、合規監察、審計及風險管理",
      "只依靠一名交易員自行覆核所有事項",
      "只在出事後才補寫政策",
      "只保存客戶生日資料"
    ],
    answer: 0,
    explanation:
      "內控指引強調管理監督、職責分隔、資料管理、監察、審計、運作控制與風險管理。",
    source: "SFC Internal Control Guidelines；HKSI Paper 2 第3章"
  },
  {
    id: "P2-C3-007",
    chapter: 3,
    topic: "AML/CFT",
    difficulty: "基礎",
    stem: "打擊洗錢及恐怖分子資金籌集制度的核心不是下列哪一項？",
    options: [
      "客戶盡職審查",
      "持續監察",
      "可疑交易報告",
      "允許匿名客戶無限制交易"
    ],
    answer: 3,
    explanation:
      "AML/CFT 的核心包括風險為本客戶盡職審查、持續監察、紀錄保存和可疑交易報告；匿名無限制交易與要求相反。",
    source: "SFC AML/CFT Guideline；HKSI Paper 2 第3章"
  },
  {
    id: "P2-C3-008",
    chapter: 3,
    topic: "AML/CFT",
    difficulty: "應用",
    stem: "客戶交易模式突然與其已知財政狀況及投資目的明顯不符。中介人最應採取哪種做法？",
    options: [
      "因客戶有權交易，所以完全不理會",
      "按風險為本方法作進一步查詢、持續監察並在需要時提交可疑交易報告",
      "立即公開客戶身份",
      "只增加佣金"
    ],
    answer: 1,
    explanation:
      "不尋常交易是 AML 監察重點。處理方式是查詢、記錄、升級及按需要報告，而不是任意公開資料。",
    source: "SFC AML/CFT Guideline；HKSI Paper 2 第3章"
  },
  {
    id: "P2-C3-009",
    chapter: 3,
    topic: "客戶資產",
    difficulty: "高頻",
    stem: "中介人處理客戶資產時，最重要的監管理念是什麼？",
    options: [
      "客戶資產可用於公司日常融資",
      "客戶資產須受到保護、適當記錄並與公司資產區分",
      "只要客戶沒有投訴便無需記錄",
      "客戶資產只受稅務法例監管"
    ],
    answer: 1,
    explanation:
      "保護客戶資產貫穿客戶證券規則、客戶款項規則、操守準則及內控要求。",
    source: "HKSI Paper 2 第2章及第3章"
  },
  {
    id: "P2-C3-010",
    chapter: 3,
    topic: "電子交易",
    difficulty: "應用",
    stem: "網上證券交易系統的保安監控措施，最應包括哪一項？",
    options: [
      "可靠身份認證、資料保密完整性及未經授權入侵偵測",
      "所有客戶使用同一密碼以方便管理",
      "不保存任何系統紀錄",
      "容許任何人繞過交易限額"
    ],
    answer: 0,
    explanation:
      "電子交易考點常聚焦身份認證、加密/完整性、入侵偵測、容量、應變及審計紀錄。",
    source: "HKSI Paper 2 第3章及第5章；SFC Code of Conduct"
  },
  {
    id: "P2-C3-011",
    chapter: 3,
    topic: "投訴處理",
    difficulty: "基礎",
    stem: "中介人收到客戶投訴後，最合適的合規處理方式是什麼？",
    options: [
      "刪除相關交易紀錄",
      "按既定程序調查、保存紀錄、向客戶回覆並在需要時升級處理",
      "只要前線員工認為沒問題便不記錄",
      "要求客戶先購買更多產品"
    ],
    answer: 1,
    explanation:
      "投訴處理是內控及操守要求的一部分，重點是程序、紀錄、獨立調查、補救及管理層監督。",
    source: "SFC Code of Conduct；HKSI Paper 2 第3章"
  },
  {
    id: "P2-C3-012",
    chapter: 3,
    topic: "風險管理",
    difficulty: "進階",
    stem: "下列哪項最能反映高級管理層對風險管理的責任？",
    options: [
      "只在市場急跌時才臨時訂政策",
      "確保有足夠資源、風險限額、監察及獨立覆核安排",
      "把全部責任轉嫁給客戶",
      "只關注短期佣金收入"
    ],
    answer: 1,
    explanation:
      "風險管理需要政策、限額、監察、報告、資源及獨立覆核，高級管理層須承擔監督責任。",
    source: "SFC Internal Control Guidelines；HKSI Paper 2 第3章"
  },
  {
    id: "P2-C4-001",
    chapter: 4,
    topic: "交易所參與者",
    difficulty: "高頻",
    stem: "有意成為聯交所交易所參與者的法團，一般須符合哪一組條件？",
    options: [
      "持有交易權、具第1類牌照、為香港註冊成立股份有限公司並符合財務及交易所規定",
      "只要有網頁及客戶名單即可",
      "只需是任何海外公司",
      "只需客戶人數超過一百名"
    ],
    answer: 0,
    explanation:
      "交易所參與者要求常考：交易權、第1類牌照、香港註冊公司、財政狀況及交易所/FRR 要求。",
    source: "HKSI Paper 2 第4章"
  },
  {
    id: "P2-C4-002",
    chapter: 4,
    topic: "市場產品",
    difficulty: "基礎",
    stem: "下列哪一項通常屬於聯交所證券市場買賣產品？",
    options: ["股票、ETF、REIT、權證等", "住宅租約", "一般保險保單", "私人僱傭合約"],
    answer: 0,
    explanation:
      "聯交所證券市場涵蓋股份、ETF、REIT、權證、債務證券等產品，具體產品按交易所規則及上市安排而定。",
    source: "HKSI Paper 2 第4章；HKEX 證券交易資料"
  },
  {
    id: "P2-C4-003",
    chapter: 4,
    topic: "交易機制",
    difficulty: "基礎",
    stem: "聯交所證券交易系統中，買賣盤配對通常以哪項優先原則為核心？",
    options: ["價格優先，其後時間優先", "客戶年齡優先", "經紀公司規模優先", "隨機抽籤優先"],
    answer: 0,
    explanation:
      "香港證券市場買賣盤配對的基本概念是價格優先、時間優先。",
    source: "HKSI Paper 2 第4章；HKEX Trading Mechanism"
  },
  {
    id: "P2-C4-004",
    chapter: 4,
    topic: "交易時段",
    difficulty: "基礎",
    stem: "以下哪一項最接近香港證券市場的一般交易日結構？",
    options: [
      "開市前時段、早市、午市及收市競價交易時段",
      "只在午夜交易",
      "只在星期日交易",
      "每日只有一次單一價格拍賣"
    ],
    answer: 0,
    explanation:
      "交易時間細節會更新，考前應查 HKEX；概念上包括開市前、持續交易及收市競價安排。",
    source: "HKEX Trading Hours；HKSI Paper 2 第4章"
  },
  {
    id: "P2-C4-005",
    chapter: 4,
    topic: "結算交收",
    difficulty: "高頻",
    stem: "於聯交所買賣的證券交易，中央結算及交收主要透過哪一系統處理？",
    options: ["CCASS", "SWIFT 個人訊息系統", "土地註冊處系統", "MPF 供款平台"],
    answer: 0,
    explanation:
      "香港結算營運 CCASS，處理證券市場中央結算、交收、存管及代理人服務。",
    source: "HKSI Paper 2 第4章；HKEX Securities Settlement"
  },
  {
    id: "P2-C4-006",
    chapter: 4,
    topic: "結算交收",
    difficulty: "高頻",
    stem: "香港證券市場一般交收周期常以哪一項描述？",
    options: ["T+2", "T+30", "交易後即時實物交付", "只在每年年末交收"],
    answer: 0,
    explanation:
      "香港證券市場一般以 T+2 交收為常見考點；仍應以最新 HKEX/香港結算公布為準。",
    source: "HKSI Paper 2 第4章；HKEX Securities Settlement"
  },
  {
    id: "P2-C4-007",
    chapter: 4,
    topic: "中央對手方",
    difficulty: "應用",
    stem: "香港結算作為中央對手方的主要意義是什麼？",
    options: [
      "介入合資格交易雙方之間，降低對手方風險並促進結算",
      "代替所有投資者作投資決定",
      "決定上市公司派息政策",
      "取消所有交易費用"
    ],
    answer: 0,
    explanation:
      "中央對手方機制讓結算所介入買賣雙方之間，透過淨額結算及風險管理降低市場結算風險。",
    source: "HKSI Paper 2 第4章；HKEX Securities Settlement"
  },
  {
    id: "P2-C4-008",
    chapter: 4,
    topic: "停牌及除牌",
    difficulty: "應用",
    stem: "上市證券可能被短暫停牌或停牌，通常是為了什麼監管目的？",
    options: [
      "確保市場有序及投資者在重要資訊公布後再交易",
      "讓所有投資者保證獲利",
      "永久取消市場風險",
      "提高印花稅收入"
    ],
    answer: 0,
    explanation:
      "停牌安排常與資訊披露、異常波動、維持公平有序市場及投資者保護相關。",
    source: "HKSI Paper 2 第4章；HKEX 上市/交易規則"
  },
  {
    id: "P2-C4-009",
    chapter: 4,
    topic: "紀律處分",
    difficulty: "高頻",
    stem: "交易所與證監會在紀律監管上如何分工，最貼近下列哪一項？",
    options: [
      "證監會主要監管中介人違反 SFO、法定規則及操守準則；交易所處理其規則範圍內的交易、結算、交收及上市規則事項",
      "交易所負責所有持牌人操守，證監會沒有角色",
      "證監會只負責收取交易費",
      "兩者完全不涉及紀律監管"
    ],
    answer: 0,
    explanation:
      "分工題常考：證監會是中介人法例及操守的前線監管者；交易所按其規則監管參與者及市場運作。",
    source: "HKSI Paper 2 第4章"
  },
  {
    id: "P2-C4-010",
    chapter: 4,
    topic: "交易費用",
    difficulty: "基礎",
    stem: "香港證券交易可能涉及的費用/徵費，最合理的一組是？",
    options: [
      "經紀佣金、交易費、交易徵費、會財局交易徵費、印花稅及結算費等",
      "只涉及電費",
      "只涉及物業差餉",
      "只涉及海外旅遊稅"
    ],
    answer: 0,
    explanation:
      "Paper 2 會考交易成本構成。實際費率會變，考前應查 HKEX 及政府最新資料。",
    source: "HKSI Paper 2 第4章；HKEX 收費資料"
  },
  {
    id: "P2-C4-011",
    chapter: 4,
    topic: "惡劣天氣交易",
    difficulty: "進階",
    stem: "近年香港證券市場關於惡劣天氣交易安排的更新，對考生最重要的備考態度是什麼？",
    options: [
      "完全不用理會，因交易時間永遠不變",
      "以最新 HKEX 及 HKSI 手冊更新為準，特別留意交易、結算及交收安排",
      "只看 2006 年舊真題",
      "只背印花稅即可"
    ],
    answer: 1,
    explanation:
      "手冊 v2.8.1 已提示惡劣天氣交易安排有更新。這類時效性考點須考前查官方更新。",
    source: "HKSI Paper 2 v2.8.1 更新附錄；HKEX 官方公布"
  },
  {
    id: "P2-C4-012",
    chapter: 4,
    topic: "結算參與者",
    difficulty: "應用",
    stem: "CCASS 的「持續淨額交收」安排，主要有助於什麼？",
    options: [
      "把多筆合資格交易淨額化，提升結算效率並管理風險",
      "保證股票價格上升",
      "免除所有投資者 AML 責任",
      "取消交易所參與者資格要求"
    ],
    answer: 0,
    explanation:
      "CNS 是 CCASS 結算的核心概念之一，透過淨額處理提高效率並配合結算風險管理。",
    source: "HKSI Paper 2 第4章；HKEX Securities Settlement"
  },
  {
    id: "P2-C5-001",
    chapter: 5,
    topic: "核准介紹代理人",
    difficulty: "基礎",
    stem: "「核准介紹代理人」最接近下列哪一描述？",
    options: [
      "向其他證券交易商介紹證券業務的人士，並受相關資本及其他要求限制",
      "負責上市公司派息的人士",
      "交易所的結算系統",
      "只提供物業估值的人士"
    ],
    answer: 0,
    explanation:
      "核准介紹代理人是第5章開首考點，重點在介紹業務、資本規定及其業務範圍限制。",
    source: "HKSI Paper 2 第5章"
  },
  {
    id: "P2-C5-002",
    chapter: 5,
    topic: "證券保證金融資",
    difficulty: "高頻",
    stem: "提供證券保證金融資前，中介人最應確保什麼？",
    options: [
      "已與客戶訂立書面保證金客戶協議並提供適當風險披露",
      "已保證客戶不會被追繳保證金",
      "已把保證金帳戶與現金帳戶混合",
      "已刪除客戶證券紀錄"
    ],
    answer: 0,
    explanation:
      "保證金業務高頻考點包括書面協議、風險披露、信貸政策、抵押品、追繳保證金及帳戶分隔。",
    source: "HKSI Paper 2 第5章；SFC Code of Conduct"
  },
  {
    id: "P2-C5-003",
    chapter: 5,
    topic: "再質押",
    difficulty: "高頻",
    stem: "客戶證券抵押品再質押的常見考點是什麼？",
    options: [
      "一般有上限，常見考點為不得超過相關負債的 140%",
      "可無限制使用所有客戶證券",
      "只需口頭同意即可無限制再質押",
      "完全不受任何規則規管"
    ],
    answer: 0,
    explanation:
      "再質押限制是 Paper 2 常見數字考點。注意與客戶授權、客戶證券規則及證保金要求一併理解。",
    source: "HKSI Paper 2 第5章；客戶證券規則"
  },
  {
    id: "P2-C5-004",
    chapter: 5,
    topic: "帳戶分隔",
    difficulty: "應用",
    stem: "保證金經紀行分隔現金帳戶與保證金帳戶的主要目的，是避免什麼？",
    options: [
      "避免現金帳戶交易及資產與保證金帳戶交易及資產混淆",
      "避免客戶看到戶口結單",
      "避免任何風險披露",
      "避免遵守財政資源規則"
    ],
    answer: 0,
    explanation:
      "分隔帳戶有助清楚記錄客戶資產、負債及抵押品，亦有利於監控信貸及客戶資產風險。",
    source: "HKSI Paper 2 第5章"
  },
  {
    id: "P2-C5-005",
    chapter: 5,
    topic: "賣空",
    difficulty: "高頻",
    stem: "下列哪一項最符合香港對賣空的監管思路？",
    options: [
      "禁止所有形式的賣空",
      "容許符合規則的有擔保賣空，並禁止/規管無擔保賣空及相關申報",
      "賣空只由客戶自行決定，與中介人無關",
      "賣空只適用於物業交易"
    ],
    answer: 1,
    explanation:
      "香港不是全面禁止賣空，而是透過指定證券、可交付安排、標記、申報及紀錄等規則監管。",
    source: "HKSI Paper 2 第5章；SFO 賣空規定"
  },
  {
    id: "P2-C5-006",
    chapter: 5,
    topic: "須申報淡倉",
    difficulty: "進階",
    stem: "「須申報淡倉」制度的主要目的，是讓監管機構掌握什麼？",
    options: [
      "市場中重大淡倉水平及可能的系統/市場風險",
      "每名客戶的個人喜好",
      "所有買盤的投資理由",
      "上市公司員工假期"
    ],
    answer: 0,
    explanation:
      "淡倉申報制度幫助監管機構監察市場風險及透明度，與賣空監管配套相關。",
    source: "HKSI Paper 2 第5章；證券及期貨淡倉申報規則"
  },
  {
    id: "P2-C5-007",
    chapter: 5,
    topic: "證券借貸",
    difficulty: "基礎",
    stem: "受規管股票借貸活動對市場的主要好處通常包括什麼？",
    options: [
      "提升交收效率、支持有擔保賣空及市場流動性",
      "保證股票價格不會下跌",
      "取消所有結算風險",
      "令所有交易免佣金"
    ],
    answer: 0,
    explanation:
      "證券借貸有助交收及市場流動性，但仍須受授權、紀錄及風險管理要求規管。",
    source: "HKSI Paper 2 第5章"
  },
  {
    id: "P2-C5-008",
    chapter: 5,
    topic: "就證券提供意見",
    difficulty: "高頻",
    stem: "下列哪一行為最可能構成第4類受規管活動？",
    options: [
      "就某證券是否適合客戶作出投資建議",
      "單純提供辦公室清潔服務",
      "維修電腦硬件",
      "只替客戶申請信用卡"
    ],
    answer: 0,
    explanation:
      "就證券提供意見包括投資建議及研究等，須留意豁免、持牌要求、適合性及利益衝突。",
    source: "SFO 附表5；HKSI Paper 2 第5章"
  },
  {
    id: "P2-C5-009",
    chapter: 5,
    topic: "互聯網交易",
    difficulty: "應用",
    stem: "中介人提供互聯網證券交易服務時，哪一項最不合適？",
    options: [
      "設立身份認證、交易限額、系統容量及事故應變安排",
      "完全不監控系統是否被未授權使用",
      "保存交易及系統紀錄",
      "定期檢討保安控制"
    ],
    answer: 1,
    explanation:
      "互聯網交易考點與電子交易保安、監控、容量、紀錄及業務延續計劃相關。",
    source: "HKSI Paper 2 第5章；SFC Code of Conduct"
  },
  {
    id: "P2-C5-010",
    chapter: 5,
    topic: "另類交易平台",
    difficulty: "進階",
    stem: "營運另類交易平台時，監管重點通常不包括哪一項？",
    options: [
      "系統充足性、進入及運作控制、紀錄、匯報及通知",
      "平台可任意免除所有市場失當規則",
      "管理及監督安排",
      "交易及系統風險控制"
    ],
    answer: 1,
    explanation:
      "ATS 不是監管真空；系統、准入、運作、紀錄和通知要求是主要考點。",
    source: "HKSI Paper 2 第5章；SFC ATS 指引"
  },
  {
    id: "P2-C5-011",
    chapter: 5,
    topic: "證券要約",
    difficulty: "高頻",
    stem: "就未經認可投資產品向公眾發出廣告、邀請或文件時，中介人最應注意什麼？",
    options: [
      "SFO 及相關守則下的認可/豁免、廣告及失實陳述要求",
      "只要圖片漂亮便可刊發",
      "只需向交易員口頭說明",
      "不涉及任何監管要求"
    ],
    answer: 0,
    explanation:
      "作出證券要約涉及認可文件、廣告、邀請及失實陳述等要求，是第5章高頻概念。",
    source: "HKSI Paper 2 第5章；SFO 投資要約規定"
  },
  {
    id: "P2-C5-012",
    chapter: 5,
    topic: "跨境及虛擬資產",
    difficulty: "進階",
    stem: "關於跨境交易及虛擬資產活動，下列哪項備考方法最恰當？",
    options: [
      "只背舊真題，不看官方更新",
      "留意 Stock Connect、跨境牌照/註冊限制及虛擬資產監管更新",
      "假設所有虛擬資產都完全不受證監會監管",
      "假設境外活動永遠不涉及香港監管"
    ],
    answer: 1,
    explanation:
      "跨境和虛擬資產是易更新範圍，需結合手冊、HKSI 更新及 SFC 最新指引理解。",
    source: "HKSI Paper 2 第5章；SFC 虛擬資產監管資料"
  },
  {
    id: "P2-C6-001",
    chapter: 6,
    topic: "期權概念",
    difficulty: "基礎",
    stem: "期權與期貨/遠期合約的一項基本分別是什麼？",
    options: [
      "期權給予持有人權利而非責任",
      "期權必定沒有期權金",
      "期權必定不能在交易所買賣",
      "期權沒有行使價格"
    ],
    answer: 0,
    explanation:
      "期權的核心是持有人有權利但非義務在特定條件下行使；賣方承擔相應責任並收取期權金。",
    source: "HKSI Paper 2 第6章"
  },
  {
    id: "P2-C6-002",
    chapter: 6,
    topic: "HKATS",
    difficulty: "高頻",
    stem: "聯交所交易所買賣期權主要透過哪個電子交易系統買賣？",
    options: ["HKATS", "CCASS Investor Account App", "FPS", "eMPF"],
    answer: 0,
    explanation:
      "HKATS 是交易所買賣期權的高頻名詞考點；CCASS/OCH 則與結算交收相關。",
    source: "HKSI Paper 2 第6章"
  },
  {
    id: "P2-C6-003",
    chapter: 6,
    topic: "OCH 參與者",
    difficulty: "高頻",
    stem: "聯交所期權結算所參與者中的「全面結算參與者」通常可為哪些帳戶結算？",
    options: [
      "只可為自身帳戶",
      "可為自身、其客戶、其他買賣參與者及其客戶的帳戶結算",
      "只可為上市公司董事帳戶",
      "不涉及任何結算功能"
    ],
    answer: 1,
    explanation:
      "直接結算參與者與全面結算參與者的差別是第6章常考點。",
    source: "HKSI Paper 2 第6章"
  },
  {
    id: "P2-C6-004",
    chapter: 6,
    topic: "莊家",
    difficulty: "應用",
    stem: "交易所批准某參與者成為期權莊家前，最可能考慮哪些因素？",
    options: [
      "財務狀況、交易紀錄、職員、電腦設備及內部保安程序",
      "公司標誌顏色",
      "董事個人興趣",
      "客戶是否喜歡高風險產品"
    ],
    answer: 0,
    explanation:
      "莊家須有能力維持報價及風險管理，交易所會考慮財務、經驗、人手、系統及內控。",
    source: "HKSI Paper 2 第6章"
  },
  {
    id: "P2-C6-005",
    chapter: 6,
    topic: "持倉限制",
    difficulty: "高頻",
    stem: "交易所對期權實施持倉限制的主要目的，是什麼？",
    options: [
      "維持市場持正操作及降低操控/過度集中風險",
      "保證所有期權買方獲利",
      "取消所有結算要求",
      "提高公司市場推廣費"
    ],
    answer: 0,
    explanation:
      "持倉限制與大額持倉申報是衍生工具風險監管的重要工具。",
    source: "HKSI Paper 2 第6章；第2章持倉規則"
  },
  {
    id: "P2-C6-006",
    chapter: 6,
    topic: "客戶失責",
    difficulty: "應用",
    stem: "期權交易所參與者遇到客戶失責時，最可能需要依據什麼處理？",
    options: [
      "客戶合約、交易所/結算所規則及內部風險政策",
      "只按社交媒體投票決定",
      "完全不能採取任何風險控制",
      "只等待客戶自行處理"
    ],
    answer: 0,
    explanation:
      "客戶失責可涉及斬倉、平倉、抵銷、追收欠款及通知等安排，須根據合約及規則執行。",
    source: "HKSI Paper 2 第6章"
  },
  {
    id: "P2-C6-007",
    chapter: 6,
    topic: "按金",
    difficulty: "基礎",
    stem: "期權按金制度主要用於什麼？",
    options: [
      "管理賣方及未平倉合約產生的信用及市場風險",
      "支付上市公司股息",
      "保證期權買方永不虧損",
      "替代所有客戶協議"
    ],
    answer: 0,
    explanation:
      "按金是結算所及參與者管理期權責任和市場風險的重要工具。",
    source: "HKSI Paper 2 第6章"
  },
  {
    id: "P2-C6-008",
    chapter: 6,
    topic: "OTC 發牌",
    difficulty: "進階",
    stem: "進行場外衍生工具產品交易或就該等產品提供意見，通常涉及哪類受規管活動？",
    options: ["第11類", "第3類", "第8類", "第10類"],
    answer: 0,
    explanation:
      "第11類是場外衍生工具產品交易或就場外衍生工具產品提供意見。另第12類涉及客戶結算服務。",
    source: "SFO 附表5；HKSI Paper 2 第6章"
  },
  {
    id: "P2-C6-009",
    chapter: 6,
    topic: "OTC 風險",
    difficulty: "高頻",
    stem: "場外衍生工具業務的風險管理政策，最應涵蓋哪一組內容？",
    options: [
      "信貸、市場、流動性、法律、操作及模型等風險，並由高級管理層監督",
      "只涵蓋辦公室裝修預算",
      "只涵蓋品牌宣傳",
      "只涵蓋客戶生日提醒"
    ],
    answer: 0,
    explanation:
      "OTC 衍生工具複雜度高，需充足資源、政策程序、信貸風險管理及高級管理層監督。",
    source: "HKSI Paper 2 第6章"
  },
  {
    id: "P2-C6-010",
    chapter: 6,
    topic: "信貸及交收風險",
    difficulty: "應用",
    stem: "信貸風險與交收風險的區別，下列哪項最準確？",
    options: [
      "信貸風險關注交易對手未能履約；交收風險關注交付及付款在交收過程中未能完成或不同步",
      "兩者完全等同於印花稅",
      "兩者只適用於上市公司派息",
      "兩者與衍生工具無關"
    ],
    answer: 0,
    explanation:
      "場外衍生工具及期權結算常測試風險分類。信貸風險是對手方不履約，交收風險更聚焦交付/付款流程。",
    source: "HKSI Paper 2 第6章"
  },
  {
    id: "P2-C6-011",
    chapter: 6,
    topic: "資源要求",
    difficulty: "進階",
    stem: "若中介人不再具備足夠資源管理場外衍生工具業務，證監會最可能關注什麼？",
    options: [
      "是否需要限制其中介人的活動至其具備資源的範圍",
      "是否必須更換公司名稱",
      "是否需要提高廣告預算",
      "是否可免除所有風險管理"
    ],
    answer: 0,
    explanation:
      "手冊強調資源包括人手、系統、專門技術及管理能力；資源不足會影響適當人選及業務限制。",
    source: "HKSI Paper 2 第6章"
  },
  {
    id: "P2-C6-012",
    chapter: 6,
    topic: "非中央結算 OTC",
    difficulty: "進階",
    stem: "非中央結算場外衍生工具交易的保證金要求，最適合作為哪類考點理解？",
    options: [
      "持續監管要求，涉及風險抵押、操作流程、文件及合規監控",
      "只屬公司市場推廣安排",
      "與中介人完全無關",
      "保證所有 OTC 交易沒有違約風險"
    ],
    answer: 0,
    explanation:
      "手冊 v2.8.1 更新涉及非中央結算 OTC 保證金要求的生效安排。考點在持續要求及風險管理，不是投資保本。",
    source: "HKSI Paper 2 v2.8.1 第6章更新；SFC Code of Conduct"
  },
  {
    id: "P2-C7-001",
    chapter: 7,
    topic: "雙軌制度",
    difficulty: "高頻",
    stem: "香港如何規管市場失當行為？",
    options: [
      "只以民事途徑處理",
      "只以刑事途徑處理",
      "透過民事市場失當行為審裁處及刑事檢控雙軌制度",
      "完全交由中介人自行處理"
    ],
    answer: 2,
    explanation:
      "第7章首要考點是雙軌制度：民事途徑由市場失當行為審裁處處理，刑事途徑由法院處理。",
    source: "SFO Parts XIII/XIV；HKSI Paper 2 第7章"
  },
  {
    id: "P2-C7-002",
    chapter: 7,
    topic: "市場失當行為種類",
    difficulty: "基礎",
    stem: "下列哪一項通常不是 SFO 下市場失當行為的類別？",
    options: ["內幕交易", "虛假交易", "操控價格", "正常派發已公告股息"],
    answer: 3,
    explanation:
      "市場失當行為包括內幕交易、虛假交易、操控價格、披露受禁交易資料、披露虛假或具誤導性資料誘使交易、操縱證券市場等。",
    source: "SFO 市場失當行為；HKSI Paper 2 第7章"
  },
  {
    id: "P2-C7-003",
    chapter: 7,
    topic: "內幕交易",
    difficulty: "高頻",
    stem: "判斷是否涉及內幕交易時，「內幕消息」通常須具備哪類特徵？",
    options: [
      "具體、非公開，並相當可能對證券價格有重大影響",
      "任何已在交易所公告的資料",
      "所有市場傳聞，不論是否具體",
      "只限董事個人生活資料"
    ],
    answer: 0,
    explanation:
      "內幕消息考點是具體、未公開、價格敏感。題目常以董事、員工、顧問及親友交易情境出現。",
    source: "SFO 內幕交易規定；HKSI Paper 2 第7章"
  },
  {
    id: "P2-C7-004",
    chapter: 7,
    topic: "虛假交易",
    difficulty: "應用",
    stem: "A 與 B 串通以沒有實質擁有權變動的方式反覆買賣股票，營造活躍成交假象。這最可能涉及哪類市場失當行為？",
    options: ["虛假交易", "正常套戥", "客戶盡職審查", "投資者賠償申索"],
    answer: 0,
    explanation:
      "沒有實質所有權改變而製造成交假象，是虛假交易/虛售交易的典型情境。",
    source: "SFO 市場失當行為；HKSI Paper 2 第7章"
  },
  {
    id: "P2-C7-005",
    chapter: 7,
    topic: "操控價格",
    difficulty: "應用",
    stem: "某人士透過一連串交易把收市價推高，以影響衍生工具結算價。最可能涉及什麼風險？",
    options: ["操控價格或操縱市場", "正常派息程序", "客戶款項隔離", "董事會授權"],
    answer: 0,
    explanation:
      "透過交易影響價格形成，尤其在收市、指數重整或結算點，常被視為操控價格/操縱市場風險。",
    source: "SFO 市場失當行為；HKSI Paper 2 第7章"
  },
  {
    id: "P2-C7-006",
    chapter: 7,
    topic: "虛假或誤導資料",
    difficulty: "高頻",
    stem: "某人明知資料虛假仍發布，誘使他人買賣證券。這最可能觸及哪類市場失當行為？",
    options: [
      "披露虛假或具誤導性資料以誘使交易",
      "正常風險披露",
      "客戶協議簽署",
      "投資者教育"
    ],
    answer: 0,
    explanation:
      "對市場發布虛假或具誤導性資料，若誘使交易或影響價格，可能構成市場失當或其他違法行為。",
    source: "SFO 市場失當行為；HKSI Paper 2 第7章"
  },
  {
    id: "P2-C7-007",
    chapter: 7,
    topic: "安全港",
    difficulty: "進階",
    stem: "穩定價格規則被稱作市場失當行為的「安全港」之一，主要因為什麼？",
    options: [
      "在指定條件下，使某些公開發售相關穩定價格活動不被視為操縱市場",
      "令所有價格操控行為合法",
      "令所有上市公司無需披露資料",
      "令所有中介人免受紀律處分"
    ],
    answer: 0,
    explanation:
      "安全港不是全面豁免，而是在嚴格條件下容許指定穩定價格活動。",
    source: "SFO 穩定價格規則；HKSI Paper 2 第7章"
  },
  {
    id: "P2-C7-008",
    chapter: 7,
    topic: "MMT 命令",
    difficulty: "高頻",
    stem: "市場失當行為審裁處可作出的命令通常不包括哪一項？",
    options: [
      "取消董事資格令",
      "冷淡對待令",
      "交出利潤令",
      "直接判處被告監禁十年"
    ],
    answer: 3,
    explanation:
      "MMT 是民事途徑，可作取消資格、冷淡對待、停止及終止、交出利潤、費用及紀律轉介等命令；監禁屬刑事法院制裁。",
    source: "SFO Part XIII；HKSI Paper 2 第7章"
  },
  {
    id: "P2-C7-009",
    chapter: 7,
    topic: "刑事制裁",
    difficulty: "高頻",
    stem: "SFO 下市場失當行為一經循公訴程序定罪，最高刑罰通常可達哪一組？",
    options: [
      "監禁10年及罰款1,000萬港元",
      "只罰款100港元",
      "只須口頭道歉",
      "只暫停交易一天"
    ],
    answer: 0,
    explanation:
      "這是第7章常見數字考點：循公訴程序最高可監禁10年及罰款1,000萬港元；簡易程序另有較低上限。",
    source: "SFO 第303條；HKSI Paper 2 第7章"
  },
  {
    id: "P2-C7-010",
    chapter: 7,
    topic: "未獲邀約的造訪",
    difficulty: "應用",
    stem: "中介人主動致電陌生散戶推銷證券產品，最應留意哪類限制？",
    options: [
      "未獲邀約的造訪及相關推銷限制",
      "只要語氣禮貌就沒有問題",
      "只涉及印花稅",
      "只涉及交易所收市時間"
    ],
    answer: 0,
    explanation:
      "未獲邀約的造訪限制旨在保護投資者免受不當推銷，須留意允許情況、例外及紀錄。",
    source: "SFO 未獲邀約造訪規定；HKSI Paper 2 第7章"
  },
  {
    id: "P2-C7-011",
    chapter: 7,
    topic: "不當交易手法",
    difficulty: "高頻",
    stem: "下列哪一項最可能屬於不當交易手法？",
    options: [
      "未經客戶授權進行交易",
      "按客戶明確指示並符合規則執行交易",
      "按要求保存交易紀錄",
      "向客戶發出成交單據"
    ],
    answer: 0,
    explanation:
      "未經授權交易、老鼠倉、搶先交易、過度交易、不適當建議等都是第7章常見不當手法。",
    source: "HKSI Paper 2 第7章；SFC Code of Conduct"
  },
  {
    id: "P2-C7-012",
    chapter: 7,
    topic: "紀律罰款",
    difficulty: "進階",
    stem: "證監會考慮紀律罰款時，通常會考慮哪類因素？",
    options: [
      "違規嚴重性、持續時間、受害人損失、合作程度、補救措施及阻嚇效果",
      "公司辦公室裝修風格",
      "違規者喜歡的股票顏色",
      "是否在星期一發生"
    ],
    answer: 0,
    explanation:
      "罰款指引重點在嚴重性、收益/損失、合作、補救、過往紀錄、財政資源及阻嚇效果。",
    source: "SFC Disciplinary Fining Guidelines；HKSI Paper 2 第7章"
  }
];

const chapterTargets = {
  1: 115,
  2: 115,
  3: 114,
  4: 114,
  5: 114,
  6: 114,
  7: 114
};

const stemFrames = [
  ({ topic }) => `就「${topic}」而言，下列哪一項最準確？`,
  ({ topic, scenario }) => `${scenario}。就「${topic}」而言，最合適的判斷是什麼？`,
  ({ topic }) => `備考 Paper 2 時，關於「${topic}」最應記住哪一項？`,
  ({ topic, role }) => `${role}處理「${topic}」事項時，哪一項做法最符合法規/守則要求？`,
  ({ topic }) => `下列哪一項最能反映「${topic}」的監管重點？`,
  ({ topic, scenario }) => `${scenario}。以下哪項最可能是正確的合規處理？`,
  ({ topic, role }) => `${role}檢討「${topic}」相關政策時，哪一項最值得採納？`
];

const scenarioPool = [
  "某持牌法團更新內部合規手冊",
  "負責人員在月度監管會議上審視一項流程",
  "合規部為新入職代表準備考前訓練",
  "一名客戶提出交易或產品相關查詢",
  "管理層發現前線流程與書面政策不一致",
  "中介人準備接受監管機構查詢",
  "營運團隊檢討客戶資產及交易紀錄",
  "風險委員會評估一項新業務安排"
];

const rolePool = [
  "負責人員",
  "主管人員",
  "合規主任",
  "前線持牌代表",
  "高級管理層",
  "營運主管",
  "風險管理經理"
];

const difficultyCycle = ["基礎", "高頻", "應用", "進階"];

const generatedConcepts = {
  1: [
    {
      topic: "風險為本監管",
      correct: "證監會會把較多監管資源放在較高風險的業務、產品、客戶資產及管治範疇。",
      traps: ["證監會只在接獲投訴後才可行動。", "交易所可完全取代證監會監管中介人操守。", "低風險和高風險中介人必須接受完全相同密度的監管。", "中介人只要盈利良好便毋須接受監管審視。"],
      explain: "Paper 2 經常用情境測試風險為本監管，而不是只背監管機構名稱。"
    },
    {
      topic: "SFO 及附屬法例",
      correct: "《證券及期貨條例》是核心法例，細節通常由附屬法例、守則、指引及交易所規則補充。",
      traps: ["《證券及期貨條例》只規管上市公司董事。", "守則及指引一定沒有監管後果。", "所有交易規則均只由客戶協議決定。", "附屬法例只適用於海外市場。"],
      explain: "考題常要求把 SFO、附屬規則、守則及交易所規則放在同一監管框架理解。"
    },
    {
      topic: "證監會規管目標",
      correct: "證監會的目標包括維持市場公平、有序、透明，保障投資者，減低系統風險及打擊違規行為。",
      traps: ["證監會的唯一目標是提高市場成交額。", "證監會只處理稅務，不處理投資者保障。", "證監會不可就中介人違規採取紀律行動。", "證監會只負責交易所上市審批。"],
      explain: "規管目標題通常以多項選擇或情境題出現，重點是市場質素與投資者保障。"
    },
    {
      topic: "香港交易所角色",
      correct: "香港交易所及其市場營運機構負責其市場的公平有序運作、交易及相關市場規則執行。",
      traps: ["香港交易所核准所有持牌代表牌照。", "香港交易所負責所有 AML 可疑交易報告。", "香港交易所可取代法院處理刑事市場失當案件。", "香港交易所只負責收取印花稅。"],
      explain: "香港交易所、聯交所、香港結算與證監會的分工是第1章及第4章交叉考點。"
    },
    {
      topic: "第1類受規管活動",
      correct: "代表客戶買賣證券通常屬第1類受規管活動。",
      traps: ["只要交易在網上進行便不屬第1類。", "第1類只適用於期貨合約交易。", "代表客戶買賣證券只需要客戶口頭同意而不需牌照。", "第1類只適用於上市公司本身。"],
      explain: "分類題要先辨認業務實質，再判斷是否落入 SFO 附表5。"
    },
    {
      topic: "第4類受規管活動",
      correct: "就證券提供投資意見或建議，通常可能構成第4類受規管活動。",
      traps: ["第4類只涵蓋資產管理。", "任何證券意見只要免費提供便必然不受規管。", "第4類與研究報告或投資建議完全無關。", "第4類只適用於交易所參與者。"],
      explain: "第4類常與研究、建議、適合性及豁免安排一起考。"
    },
    {
      topic: "負責人員最少數目",
      correct: "持牌法團一般須至少有兩名獲證監會核准的負責人員，其中至少一名通常須為執行董事。",
      traps: ["持牌法團只需一名兼職負責人員。", "負責人員由公司任命後毋須證監會核准。", "所有非執行董事均必須成為負責人員。", "負責人員只負責市場推廣。"],
      explain: "負責人員是 Paper 2 高頻考點，常與執行董事及監督責任一起測試。"
    },
    {
      topic: "適當人選準則",
      correct: "適當人選評估會考慮財政狀況、勝任能力、誠信、聲譽、可靠性及品格等因素。",
      traps: ["只要通過筆試便永遠符合適當人選。", "個人投資偏好是唯一判斷準則。", "過往紀律紀錄與適當人選完全無關。", "公司盈利高低可取代誠信評估。"],
      explain: "適當人選不是一次性考試概念，而是持續適用於持牌人、註冊人和相關管理人員。"
    },
    {
      topic: "大股東核准",
      correct: "成為持牌法團大股東通常需要事先取得證監會核准。",
      traps: ["成為大股東只需事後通知客戶。", "交易所交易權可自動取代大股東核准。", "只要資金來源合法便毋須監管核准。", "大股東核准只適用於上市公司。"],
      explain: "控制權變動會影響中介人的適當人選及穩健營運，因此是發牌制度重點。"
    },
    {
      topic: "短期牌照",
      correct: "短期牌照主要讓主要在海外經營的人士或公司在香港短期進行指定受規管活動。",
      traps: ["短期牌照可讓不適當人選試營業。", "短期牌照沒有任何期限或條件。", "短期牌照只適用於香港永久居民。", "短期牌照可覆蓋所有未列明活動。"],
      explain: "短期牌照仍受條件和監管要求限制，不是豁免牌照。"
    },
    {
      topic: "董事受信責任",
      correct: "董事須真誠為公司利益行事、按恰當目的行使權力並避免利益衝突。",
      traps: ["董事可優先考慮個人利益而毋須披露。", "董事責任只在公司清盤後才存在。", "董事受信責任與公司管治無關。", "董事可任意使用公司資產作私人用途。"],
      explain: "公司法及管治概念會用於判斷負責人員和董事是否合適。"
    },
    {
      topic: "向證監會提供資料",
      correct: "中介人須按法例、規則、守則或證監會要求提供準確、完整及不具誤導性的資料。",
      traps: ["向證監會提供虛假資料只屬禮貌問題。", "調查要求可任意忽略。", "只有上市公司才須向證監會提供資料。", "資料要求必須先由客戶批准才有效。"],
      explain: "調查及資料提供權力涉及刑事和紀律後果，是第1章常考應用點。"
    }
  ],
  2: [
    {
      topic: "財政資源規則目的",
      correct: "財政資源規則旨在讓證監會評估持牌法團償付能力及受規管活動風險。",
      traps: ["財政資源規則只規定辦公室租金。", "財政資源規則主要用作審批上市公司派息。", "只要公司有客戶便不用維持資本。", "財政資源規則與投資者保障無關。"],
      explain: "FRR 的關鍵是監管資本、速動資金及財務穩健。"
    },
    {
      topic: "速動資金",
      correct: "速動資金通常以速動資產扣除認可負債後的數額作監管資本指標。",
      traps: ["速動資金等於所有固定資產原值。", "速動資金等於客戶信託款項總額。", "速動資金只指公司品牌價值。", "速動資金不用扣除任何負債。"],
      explain: "速動資金、速動資產和認可負債是 FRR 數字題和概念題核心。"
    },
    {
      topic: "客戶證券規則",
      correct: "客戶證券及抵押品須按規則妥善保管、登記或存放，並受授權使用限制。",
      traps: ["客戶證券可自動變成公司自有資產。", "只要內部電郵批准便可任意處置客戶證券。", "客戶證券規則只適用於現金。", "客戶證券毋須任何紀錄。"],
      explain: "客戶資產保護貫穿第2章及第3章，常以保管、授權和再質押情境考核。"
    },
    {
      topic: "客戶款項規則",
      correct: "客戶款項通常須存放於獨立客戶帳戶，並與中介人自有款項分開。",
      traps: ["客戶款項可用於支付公司日常開支。", "客戶款項規則只適用於海外客戶。", "只要月底補回便可混用客戶款項。", "客戶款項毋須入帳或核對。"],
      explain: "隔離保管是保護客戶免受中介人信用風險影響的基本要求。"
    },
    {
      topic: "成交單據及戶口結單",
      correct: "中介人須按規則向客戶提供成交單據、戶口結單及收據等文件。",
      traps: ["成交單據規則用來設定交易所上市資格。", "成交單據可完全由口頭通知取代。", "客戶沒有查問便毋須提供任何交易文件。", "成交單據規則只適用於公司董事。"],
      explain: "文件要求讓客戶核對交易、收款及資產狀況。"
    },
    {
      topic: "備存紀錄",
      correct: "紀錄須足以反映受規管業務、財政狀況、客戶資產及交易流向。",
      traps: ["紀錄只需保存市場推廣圖片。", "刪除交易紀錄可降低監管風險。", "客戶資產變動毋須可追蹤。", "備存紀錄規則只處理印花稅稅率。"],
      explain: "備存紀錄支援財務報表、審計、監管查核及客戶資產保護。"
    },
    {
      topic: "帳目及審計規則",
      correct: "持牌法團須按規則提交財務報表及核數師報告，重大事項可能觸發報告責任。",
      traps: ["核數師只向市場推廣部匯報。", "財務報表只需在公司內部口頭確認。", "帳目及審計規則與證監會無關。", "核數師可忽略所有重大違規。"],
      explain: "帳目、審計和核數師報告是證監會監察中介人財務穩健的重要工具。"
    },
    {
      topic: "投資者賠償基金",
      correct: "投資者賠償基金針對指明中介人違責造成的合資格損失，而不是投資保本。",
      traps: ["基金補償所有市場價格下跌。", "基金保證所有投資建議正確。", "基金適用於任何海外私人交易。", "只要投資虧損便必然獲賠。"],
      explain: "投資者賠償有範圍和上限，與市場風險虧損不同。"
    },
    {
      topic: "持倉限額及申報",
      correct: "合約限量及須申報持倉規則旨在防止過大或集中持倉影響市場有序運作。",
      traps: ["持倉限額用來保證期權投資獲利。", "大額持倉申報只為市場推廣。", "衍生工具持倉永遠不需監管。", "持倉限額只適用於普通股股息。"],
      explain: "衍生工具持倉監控是市場穩定及防止操控的重要安排。"
    },
    {
      topic: "OTC 衍生工具匯報",
      correct: "指定場外衍生工具交易可能須按規則匯報交易資料及備存相關紀錄。",
      traps: ["所有私人非衍生工具安排都必然須匯報。", "OTC 匯報只適用於上市公告。", "交易資料匯報可由客戶口頭豁免。", "指定交易毋須任何識別資料。"],
      explain: "OTC 匯報制度是系統風險監測的一部分，須看交易及人士是否落入適用範圍。"
    },
    {
      topic: "OTC 衍生工具結算",
      correct: "中央結算責任主要針對規模較大且可能造成系統性風險的指定 OTC 交易。",
      traps: ["中央結算責任適用於所有零售股票買賣。", "中央結算制度保證交易一定盈利。", "OTC 結算與系統風險無關。", "任何人可自行選擇永遠不受結算規則約束。"],
      explain: "OTC 結算與匯報、備存紀錄共同降低場外市場風險。"
    },
    {
      topic: "規則功能配對",
      correct: "客戶證券規則處理客戶證券及抵押品保管，客戶款項規則處理客戶款項隔離。",
      traps: ["成交單據規則設定所有持倉限額。", "財政資源規則規定研究報告格式。", "備存紀錄規則只規管交易時段。", "帳目及審計規則只處理客戶密碼。"],
      explain: "第2章常考規則名稱與功能配對，先抓住每條規則的核心對象。"
    }
  ],
  3: [
    {
      topic: "操守準則一般原則",
      correct: "中介人須誠實公平、勤勉盡責、具備勝任能力並遵守法律及守則。",
      traps: ["中介人可保證客戶必然獲利。", "只要佣金足夠便可忽略客戶利益。", "操守準則只適用於未持牌人士。", "一般原則不涉及利益衝突。"],
      explain: "一般原則是很多應用題的根基，尤其是誠信、勤勉和客戶利益。"
    },
    {
      topic: "認識你的客戶",
      correct: "作出建議前須了解客戶財務狀況、投資經驗、目標、風險承受能力及需要。",
      traps: ["只要客戶願意交易便毋須 KYC。", "KYC 只需要客戶姓名。", "高佣金產品可取代客戶需要分析。", "KYC 與適合性完全無關。"],
      explain: "KYC 是適合性和 AML 的共同基礎。"
    },
    {
      topic: "適合性責任",
      correct: "建議或招攬產品時，須有合理基礎相信產品適合該客戶。",
      traps: ["所有客戶都適合同一產品。", "只要產品受歡迎便自動適合所有人。", "適合性只看產品回報，不看風險。", "客戶簽名可完全免除適合性責任。"],
      explain: "適合性題常考客戶特徵、產品風險和文件紀錄是否一致。"
    },
    {
      topic: "客戶協議",
      correct: "客戶協議應清楚列明服務、權利義務、風險披露及重要條款。",
      traps: ["客戶協議可取代所有法定要求。", "協議只需列出宣傳口號。", "風險披露毋須以客戶能理解方式提供。", "所有條款均可留待爭議後補寫。"],
      explain: "客戶文件是前線服務、風險披露和爭議處理的重要證據。"
    },
    {
      topic: "利益衝突管理",
      correct: "中介人須識別、避免、管理及披露利益衝突，並確保客戶獲公平對待。",
      traps: ["利益衝突只要不被客戶發現便可接受。", "披露利益衝突永遠足以解決所有問題。", "研究和銷售之間不可能有衝突。", "個人交易不需任何限制。"],
      explain: "利益衝突題通常要求判斷是否需隔離、披露、限制或拒絕交易。"
    },
    {
      topic: "內部監控",
      correct: "有效內控應涵蓋職責分工、監督、監察、審計、資料管理、營運控制及風險管理。",
      traps: ["所有控制交由一名前線員工即可。", "只在出事後才建立政策。", "內控不需要管理層參與。", "內控只等於密碼長度。"],
      explain: "內控指引強調制度化、書面化及管理層監督。"
    },
    {
      topic: "高級管理層責任",
      correct: "高級管理層須建立合規文化、足夠資源、清晰匯報和問責機制。",
      traps: ["高級管理層可把所有責任轉嫁予客戶。", "只要聘用合規主任便無需董事監督。", "合規文化只在周年晚宴提及即可。", "管理層只需關注短期佣金。"],
      explain: "Paper 2 對負責人員尤其重視管理層責任和問責。"
    },
    {
      topic: "AML 客戶盡職審查",
      correct: "AML/CFT 要求按風險為本方法識別及核實客戶身份、了解業務關係目的並持續監察。",
      traps: ["匿名客戶可無限制交易。", "高風險客戶可減少盡職審查。", "完成開戶後永遠不用更新資料。", "AML 只適用於銀行而不適用於持牌法團。"],
      explain: "AML 題常以不尋常交易、PEP、高風險司法管轄區和持續監察出現。"
    },
    {
      topic: "可疑交易報告",
      correct: "發現可疑交易時應按內部程序升級，必要時提交可疑交易報告並避免洩密。",
      traps: ["應先通知客戶已被懷疑。", "只要交易金額小便永遠不用理會。", "可疑交易報告可在社交媒體公開。", "前線人員可刪除紀錄避免麻煩。"],
      explain: "可疑交易處理重點包括升級、紀錄、報告和防止 tipping-off。"
    },
    {
      topic: "電子交易保安",
      correct: "電子交易系統應有可靠認證、資料保密完整性、入侵偵測、容量及應變安排。",
      traps: ["所有客戶使用同一密碼最方便。", "系統紀錄可完全不保存。", "交易限額可任意繞過。", "保安事故毋須上報或檢討。"],
      explain: "電子交易題會跨第3章及第5章，重點是系統風險和客戶保護。"
    },
    {
      topic: "投訴處理",
      correct: "投訴應按既定程序調查、記錄、回覆及在需要時升級管理層或監管層面。",
      traps: ["投訴可由涉事員工自行刪除。", "只要客戶沒有再追問便毋須記錄。", "投訴處理與內控無關。", "所有投訴都必須以推銷新產品解決。"],
      explain: "投訴紀錄能揭示系統性問題，也是監管查核常見資料。"
    },
    {
      topic: "客戶資產保護",
      correct: "客戶資產須妥善保管、分隔、記錄及定期核對。",
      traps: ["客戶資產可用於公司短期融資。", "只要客戶信任便毋須對帳。", "客戶資產與公司資產混合可提高效率。", "客戶資產保護只適用於現金，不適用於證券。"],
      explain: "客戶資產保護是第2章規則和第3章操守/內控的交界。"
    }
  ],
  4: [
    {
      topic: "交易所參與者資格",
      correct: "交易所參與者通常須持有交易權、具第1類牌照、為香港註冊股份有限公司並符合財務要求。",
      traps: ["只要有網站便可成為交易所參與者。", "任何海外自然人均可直接成為參與者。", "交易權可取代第1類牌照。", "參與者資格與財政資源無關。"],
      explain: "交易所參與者資格是第4章基本考點。"
    },
    {
      topic: "價格時間優先",
      correct: "買賣盤配對一般以價格優先，其後時間優先為核心。",
      traps: ["客戶年齡優先。", "經紀公司規模優先。", "隨機抽籤永遠優先。", "買賣盤輸入語言優先。"],
      explain: "交易機制概念題通常先考價格時間優先。"
    },
    {
      topic: "開市前及收市競價",
      correct: "競價時段旨在透過買賣盤集合及價格發現形成公平有序的開市或收市價格。",
      traps: ["競價時段不受任何交易規則約束。", "競價時段保證所有買賣盤成交。", "競價時段只用作收取印花稅。", "競價時段完全禁止輸入買賣盤。"],
      explain: "交易時段細節會更新，但價格發現和秩序維持是核心。"
    },
    {
      topic: "CCASS 功能",
      correct: "CCASS 提供中央結算、交收、存管及代理人服務等功能。",
      traps: ["CCASS 是投資建議平台。", "CCASS 負責批准持牌代表考試。", "CCASS 只處理公司招聘。", "CCASS 可保證證券價格上升。"],
      explain: "CCASS 與香港結算、CNS、DVP 等概念常一起考。"
    },
    {
      topic: "T+2 交收",
      correct: "香港證券市場一般以 T+2 交收為常見安排，考前應以最新 HKEX 資料為準。",
      traps: ["所有交易均 T+30 交收。", "交收只在每年年末進行。", "T+2 表示交易前兩天交收。", "交收安排與香港結算無關。"],
      explain: "交收周期是常見數字題，亦可能與惡劣天氣安排更新一起考。"
    },
    {
      topic: "中央對手方",
      correct: "中央對手方介入合資格交易雙方之間，有助降低對手方及結算風險。",
      traps: ["中央對手方代替客戶作投資決定。", "中央對手方可取消所有市場風險。", "中央對手方只負責派息。", "中央對手方使所有交易免收費。"],
      explain: "結算風險管理是第4章高頻應用點。"
    },
    {
      topic: "持續淨額交收",
      correct: "CNS 把多筆合資格交易淨額化，提升結算效率並配合風險管理。",
      traps: ["CNS 保證投資者賺錢。", "CNS 等於客戶協議。", "CNS 取消所有持倉限制。", "CNS 只處理研究報告。"],
      explain: "CNS 需和 CCASS、香港結算及中央對手方概念一起理解。"
    },
    {
      topic: "停牌及短暫停牌",
      correct: "停牌安排通常用於維持公平有序市場及確保重要資料披露後再交易。",
      traps: ["停牌是保證投資者獲利的工具。", "任何停牌都由客戶自行決定。", "停牌只為提高印花稅。", "停牌後所有交易紀錄自動失效。"],
      explain: "停牌題通常圍繞資訊披露、異常波動和市場秩序。"
    },
    {
      topic: "交易費用及徵費",
      correct: "證券交易可能涉及佣金、交易費、交易徵費、會財局交易徵費、印花稅及結算費等。",
      traps: ["證券交易只涉及水電費。", "所有費率永遠不會變。", "交易費用與成交金額無關。", "交易費用只由客戶自行想像。"],
      explain: "費率具時效性，考前應查最新官方資料。"
    },
    {
      topic: "交易所紀律",
      correct: "交易所可按其規則處理參與者在交易、結算、交收或上市規則範圍內的違規。",
      traps: ["交易所紀律可取代所有刑事程序。", "交易所不能要求參與者遵守其規則。", "交易所紀律只處理公司茶水間管理。", "所有中介人操守均只由客戶決定。"],
      explain: "要分清證監會中介人監管與交易所市場規則執行。"
    },
    {
      topic: "惡劣天氣交易安排",
      correct: "惡劣天氣下交易、結算及交收安排可能更新，應以 HKEX 及 HKSI 最新資料為準。",
      traps: ["惡劣天氣安排從不更新。", "只看 2006 舊題即可掌握最新安排。", "惡劣天氣只影響客戶協議，不影響交易市場。", "所有惡劣天氣日必然完全停市。"],
      explain: "v2.8.1 已提示相關更新，是高時效性考點。"
    },
    {
      topic: "交易系統輸入錯盤",
      correct: "發現輸入錯誤時須按交易所規則及系統功能在指定時限內處理，並保留證據。",
      traps: ["錯盤可在任何時間任意更改且毋須紀錄。", "錯盤處理只需客戶口頭同意。", "交易所不得要求時間印記紀錄。", "錯盤一律由香港結算取消。"],
      explain: "交易系統、時間印記和錯盤處理常以操作情境出現。"
    }
  ],
  5: [
    {
      topic: "核准介紹代理人",
      correct: "核准介紹代理人通常指向其他證券交易商介紹證券業務的人士，並受相關限制。",
      traps: ["核准介紹代理人可直接持有所有客戶資產。", "核准介紹代理人就是結算所。", "核准介紹代理人只負責上市公司派息。", "核准介紹代理人不受任何資本或業務限制。"],
      explain: "核准介紹代理人考點集中於業務範圍和資本要求。"
    },
    {
      topic: "保證金客戶協議",
      correct: "提供證券保證金融資前應與客戶簽訂書面保證金客戶協議並提供風險披露。",
      traps: ["保證金貸款可只靠口頭承諾。", "風險披露可在追繳保證金後才首次提供。", "保證金帳戶可不標明其性質。", "保證金協議可保證客戶永不虧損。"],
      explain: "保證金融資題常考協議、披露、信貸政策及抵押品。"
    },
    {
      topic: "保證金貸款政策",
      correct: "政策應涵蓋信貸評估、貸款比率、追繳保證金、抵押品監控及強制平倉等安排。",
      traps: ["貸款政策只需列出推廣利率。", "所有客戶可使用相同無限額信貸。", "追繳保證金安排不需要書面政策。", "抵押品價值毋須監察。"],
      explain: "負責人員要能說明保證金業務如何控制信貸及市場風險。"
    },
    {
      topic: "再質押 140% 限制",
      correct: "再質押客戶證券抵押品通常受上限限制，常見考點為相關負債的 140%。",
      traps: ["再質押可無上限使用客戶證券。", "再質押比例永遠是 10%。", "客戶授權後可忽略所有規則限制。", "再質押只適用於現金。"],
      explain: "140% 是第5章常見數字考點，但仍要連同授權及客戶證券規則理解。"
    },
    {
      topic: "現金及保證金帳戶分隔",
      correct: "現金帳戶與保證金帳戶應分隔，避免交易、資產及負債混淆。",
      traps: ["混合帳戶可增加合規透明度。", "所有客戶資產可放入公司營運帳戶。", "帳戶性質毋須向客戶說明。", "分隔帳戶只適用於上市公司。"],
      explain: "帳戶分隔有利客戶資產保護和信貸風險監控。"
    },
    {
      topic: "有擔保賣空",
      correct: "符合規則的有擔保賣空可被容許，重點是可交付安排、指定證券、標記和紀錄。",
      traps: ["香港全面禁止所有賣空。", "無擔保賣空永遠沒有監管問題。", "賣空毋須任何可交付安排。", "賣空只由客戶自行決定且中介人無責任。"],
      explain: "賣空題常考有擔保與無擔保賣空的區分。"
    },
    {
      topic: "須申報淡倉",
      correct: "重大淡倉申報有助監管機構掌握市場風險及提高透明度。",
      traps: ["淡倉申報是客戶生日提醒。", "所有淡倉永遠不用申報。", "淡倉申報只為收取佣金。", "淡倉申報與市場風險無關。"],
      explain: "淡倉申報制度與賣空監管互相配合。"
    },
    {
      topic: "證券借貸",
      correct: "受規管證券借貸可支持交收、有擔保賣空及市場流動性，但須有授權和紀錄。",
      traps: ["證券借貸令所有交易保本。", "借貸證券可不作任何紀錄。", "證券借貸完全不受客戶授權限制。", "證券借貸只適用於物業。"],
      explain: "證券借貸既有市場功能，也有客戶資產和風險管理要求。"
    },
    {
      topic: "分析員交易限制",
      correct: "分析員個人交易及研究報告須受利益衝突、披露及限制安排規管。",
      traps: ["分析員可先交易再秘密改報告。", "研究報告不可能構成利益衝突。", "分析員毋須披露相關持倉。", "研究部門可完全由銷售部門控制結論。"],
      explain: "研究分析與利益衝突是第5章與第3章交叉高頻點。"
    },
    {
      topic: "互聯網證券交易",
      correct: "互聯網交易服務須有保安、容量、交易限額、監察、紀錄及業務延續安排。",
      traps: ["網上交易可不設身份核實。", "系統容量不足不屬監管問題。", "交易系統紀錄可完全不保存。", "網上交易不需風險披露。"],
      explain: "電子交易題要同時考慮客戶保護和系統風險。"
    },
    {
      topic: "另類交易平台",
      correct: "ATS 營運須重視系統充足性、准入控制、運作監控、紀錄、匯報及通知責任。",
      traps: ["ATS 可豁免所有市場失當規則。", "ATS 不需任何系統控制。", "ATS 營運可完全不作紀錄。", "ATS 只是一份客戶協議。"],
      explain: "另類交易平台不是監管真空，系統和准入控制是核心。"
    },
    {
      topic: "證券要約及廣告",
      correct: "向公眾作出證券要約或廣告時須注意認可、豁免、失實陳述及廣告限制。",
      traps: ["只要廣告設計吸引便可刊發。", "所有投資文件都毋須認可或豁免。", "失實陳述只屬市場推廣技巧。", "證券要約規定只適用於海外。"],
      explain: "作出證券要約是第5章高頻應用題。"
    },
    {
      topic: "跨境交易及虛擬資產",
      correct: "跨境及虛擬資產活動須留意香港牌照觸發、銷售限制及 SFC 最新監管更新。",
      traps: ["境外平台永遠不受香港監管影響。", "所有虛擬資產活動都完全不受規管。", "只看舊真題即可掌握跨境最新規則。", "跨境交易不需要客戶文件。"],
      explain: "這一部分時效性高，考前應核對官方更新。"
    }
  ],
  6: [
    {
      topic: "期權權利與責任",
      correct: "期權給予持有人權利而非義務，賣方則承擔相應責任並收取期權金。",
      traps: ["期權持有人必須行使。", "期權賣方沒有任何責任。", "期權沒有期權金。", "期權必定不能在交易所買賣。"],
      explain: "期權基本概念是第6章入門高頻題。"
    },
    {
      topic: "HKATS",
      correct: "聯交所交易所買賣期權主要透過 HKATS 電子交易系統買賣。",
      traps: ["期權主要透過土地註冊系統買賣。", "HKATS 是 AML 可疑交易表格。", "HKATS 只處理強積金供款。", "期權買賣毋須任何交易系統。"],
      explain: "HKATS 名稱及功能需與 OCH、CCASS 分開。"
    },
    {
      topic: "期權結算所參與者",
      correct: "全面結算參與者可為自身、其客戶、其他買賣參與者及其客戶的帳戶結算。",
      traps: ["直接結算參與者和全面結算參與者沒有分別。", "全面結算參與者不涉及結算。", "所有客戶可直接成為 OCH 參與者。", "全面結算參與者只可為上市公司派息。"],
      explain: "直接結算與全面結算參與者的差別常被考核。"
    },
    {
      topic: "期權莊家",
      correct: "交易所可考慮申請人的財務狀況、交易紀錄、職員、電腦設備及內部保安程序。",
      traps: ["莊家資格只看公司標誌顏色。", "莊家不需任何系統或人手。", "莊家可不遵守交易所規則。", "任何客戶可自稱莊家。"],
      explain: "莊家活動要求資源和風險控制能力。"
    },
    {
      topic: "期權持倉限制",
      correct: "持倉限制旨在維持市場持正操作並降低操控或過度集中風險。",
      traps: ["持倉限制保證買方盈利。", "持倉限制只為收取佣金。", "期權持倉越集中越符合法規。", "持倉限制與市場秩序無關。"],
      explain: "持倉限制與第2章合約限量規則互相呼應。"
    },
    {
      topic: "期權客戶協議",
      correct: "提供交易所買賣期權服務前，應按操守準則與客戶訂立期權客戶協議並作風險披露。",
      traps: ["期權客戶協議可在失責後才補簽。", "期權風險披露不需要客戶理解。", "所有期權交易都可不留文件。", "期權客戶協議可保證沒有按金要求。"],
      explain: "期權風險較高，客戶文件和披露是基本要求。"
    },
    {
      topic: "按金制度",
      correct: "按金制度用於管理賣方及未平倉合約帶來的信用和市場風險。",
      traps: ["按金是上市公司派息。", "按金保證所有交易獲利。", "按金只是一項市場推廣優惠。", "未平倉合約不產生風險。"],
      explain: "按金、追繳及結算所風險控制是第6章核心。"
    },
    {
      topic: "行使及交收",
      correct: "期權行使及交收須依交易所、結算所及合約規則處理。",
      traps: ["行使後毋須任何交收安排。", "期權行使完全由社交媒體投票決定。", "所有期權都自動以相同方式交收且不受規則限制。", "行使價格可由客戶事後任意更改。"],
      explain: "期權題常把權利、行使價格、到期和交收連在一起。"
    },
    {
      topic: "第11類受規管活動",
      correct: "場外衍生工具產品交易或就該等產品提供意見通常涉及第11類受規管活動。",
      traps: ["第11類是提供證券保證金融資。", "第11類只處理信貸評級。", "OTC 衍生工具永遠不屬受規管活動。", "第11類只適用於上市公司秘書。"],
      explain: "場外衍生工具牌照分類是第6章 B 部分重點。"
    },
    {
      topic: "OTC 衍生工具風險",
      correct: "OTC 衍生工具風險管理應涵蓋信貸、市場、流動性、法律、操作及模型等風險。",
      traps: ["OTC 風險只等於辦公室租金風險。", "OTC 衍生工具沒有對手方風險。", "複雜產品不需要模型或估值控制。", "風險管理只需前線口頭確認。"],
      explain: "OTC 風險複雜，對資源、系統和高級管理層監督要求較高。"
    },
    {
      topic: "獨立信貸風險管理",
      correct: "場外衍生工具業務應設有獨立及有效的信貸風險管理政策、限額及監察。",
      traps: ["信貸風險可完全交給銷售員自行決定。", "限額只在客戶要求時才設立。", "獨立風險管理會降低合規性。", "所有交易對手信用風險相同。"],
      explain: "對手方風險是 OTC 衍生工具的主要監管關注。"
    },
    {
      topic: "OTC 資源充足性",
      correct: "中介人須有足夠人手、系統及專門技術管理其 OTC 衍生工具業務。",
      traps: ["沒有資源仍可無限制拓展 OTC 業務。", "資源只指公司宣傳預算。", "高級管理層毋須理解 OTC 風險。", "系統不足不會影響適當人選評估。"],
      explain: "資源不足可能導致業務限制或適當人選問題。"
    },
    {
      topic: "非中央結算 OTC 保證金",
      correct: "非中央結算 OTC 保證金要求屬持續風險管理及合規控制安排。",
      traps: ["保證金要求只是客戶禮品安排。", "非中央結算交易完全沒有抵押或風險控制需要。", "保證金要求保證交易盈利。", "相關要求與操守準則更新無關。"],
      explain: "v2.8.1 已提示相關更新，需留意生效安排及持續要求。"
    }
  ],
  7: [
    {
      topic: "市場失當雙軌制度",
      correct: "香港透過民事 MMT 研訊及刑事檢控雙軌制度規管市場失當行為。",
      traps: ["香港只用內部公司政策處理市場失當。", "市場失當只能以民事途徑處理。", "市場失當只能由交易所私下和解。", "刑事途徑與市場失當無關。"],
      explain: "雙軌制度是第7章開首必考概念。"
    },
    {
      topic: "內幕消息",
      correct: "內幕消息通常是具體、非公開且相當可能對證券價格有重大影響的資料。",
      traps: ["所有公開公告都是內幕消息。", "任何模糊市場傳聞必然是內幕消息。", "內幕消息只限董事個人生活資料。", "價格敏感性與內幕交易無關。"],
      explain: "內幕交易題重點是消息性質、知悉身份及交易/披露行為。"
    },
    {
      topic: "內幕交易情境",
      correct: "在重大未公開消息公布前利用該消息交易，可能構成內幕交易。",
      traps: ["只要交易量小便永遠不是內幕交易。", "董事親友利用消息交易必然不受規管。", "未公開消息可任意轉告客戶交易。", "內幕交易只適用於海外市場。"],
      explain: "情境題常用董事、員工、顧問或親友作角色。"
    },
    {
      topic: "虛假交易",
      correct: "沒有實質擁有權轉移而製造成交活躍假象，可能構成虛假交易。",
      traps: ["虛假交易是正常 KYC 程序。", "洗售和配對買賣永遠合法。", "成交假象與市場失當無關。", "只要價格不變便沒有問題。"],
      explain: "虛售交易或造市假象是市場失當常見案例。"
    },
    {
      topic: "操控價格",
      correct: "透過交易或安排人為推高、壓低或維持價格，可能構成操控價格或操縱市場。",
      traps: ["操控價格只要在收市前發生便合法。", "交易目的與價格形成永遠無關。", "操控價格只適用於物業。", "人為影響結算價沒有監管風險。"],
      explain: "操控題常出現在收市價、結算價、薄弱市場或連串交易情境。"
    },
    {
      topic: "虛假或誤導資料誘使交易",
      correct: "明知資料虛假或具誤導性仍發布以誘使交易，可能構成市場失當行為。",
      traps: ["虛假資料只是市場推廣技巧。", "社交媒體發布永遠不受規管。", "只要資料吸引便毋須核實。", "誤導資料與投資者交易決定無關。"],
      explain: "發布渠道可以多樣，重點是資料是否虛假/誤導及是否誘使交易。"
    },
    {
      topic: "披露受禁交易資料",
      correct: "披露與受禁交易有關的資料，若符合 SFO 條件，可能構成市場失當行為。",
      traps: ["任何交易資料都可任意公開。", "披露受禁交易資料永遠不受規管。", "只有客戶投訴才可能違規。", "資料披露與市場完整性無關。"],
      explain: "第7章不只考內幕交易，也考其他較容易混淆的市場失當類別。"
    },
    {
      topic: "穩定價格安全港",
      correct: "穩定價格規則在指定條件下容許若干公開發售相關穩定價格活動。",
      traps: ["安全港令所有操縱市場合法。", "穩定價格活動不需要任何條件。", "安全港可免除所有中介人牌照要求。", "穩定價格規則只處理 AML。"],
      explain: "安全港是有條件豁免，不是全面免責。"
    },
    {
      topic: "MMT 命令",
      correct: "MMT 可作出取消資格、冷淡對待、停止及終止、交出利潤、費用及紀律轉介等命令。",
      traps: ["MMT 可直接判處監禁十年。", "MMT 只負責收取交易費。", "MMT 不能處理任何市場失當研訊。", "MMT 命令與適當人選資格無關。"],
      explain: "民事命令與刑事制裁要分清。"
    },
    {
      topic: "刑事市場失當制裁",
      correct: "循公訴程序定罪的市場失當行為最高可監禁 10 年及罰款 1,000 萬港元。",
      traps: ["刑事制裁最高只罰款 100 港元。", "市場失當刑事程序不可能監禁。", "所有案件都只由 MMT 處理。", "刑事制裁只適用於未持牌人士。"],
      explain: "10 年及 1,000 萬港元是常見數字考點。"
    },
    {
      topic: "未獲邀約造訪",
      correct: "主動向不相識投資者推銷證券或相關服務時，須留意未獲邀約造訪限制及例外。",
      traps: ["只要語氣禮貌便不受限制。", "所有冷電推銷都可任意進行。", "未獲邀約造訪只涉及印花稅。", "相關限制與投資者保障無關。"],
      explain: "未獲邀約造訪保護投資者免受不當推銷。"
    },
    {
      topic: "不當交易手法",
      correct: "未經授權交易、老鼠倉、搶先交易、過度交易及不適當建議都可能屬不當手法。",
      traps: ["未經授權交易只要盈利便沒有問題。", "老鼠倉與利益衝突無關。", "過度交易必然符合客戶最佳利益。", "搶先交易是正常客戶服務。"],
      explain: "不當手法題通常考操守、利益衝突和客戶授權。"
    },
    {
      topic: "紀律罰款因素",
      correct: "罰款考慮可包括違規嚴重性、持續時間、損失、收益、合作、補救、過往紀錄及阻嚇效果。",
      traps: ["罰款只看辦公室裝修。", "合作和補救永遠無關。", "違規所得利益不會被考慮。", "過往紀錄必須被忽略。"],
      explain: "罰款指引重點是公平、比例及阻嚇。"
    }
  ]
};

function rotate(items, start, count) {
  return Array.from({ length: count }, (_, offset) => items[(start + offset) % items.length]);
}

function shuffleOptions(correct, traps, seed) {
  const pickedTraps = rotate(traps, seed, 3);
  const correctIndex = seed % 4;
  const options = [];
  for (let index = 0; index < 4; index += 1) {
    options.push(index === correctIndex ? correct : pickedTraps.shift());
  }
  return { options, answer: correctIndex };
}

function buildGeneratedQuestions() {
  const generated = [];

  for (const chapter of chapters) {
    const coreCount = coreQuestions.filter((question) => question.chapter === chapter.id).length;
    const required = chapterTargets[chapter.id] - coreCount;
    const concepts = generatedConcepts[chapter.id];

    for (let index = 0; index < required; index += 1) {
      const concept = concepts[index % concepts.length];
      const frame = stemFrames[index % stemFrames.length];
      const scenario = scenarioPool[(index + chapter.id) % scenarioPool.length];
      const role = rolePool[(index * 2 + chapter.id) % rolePool.length];
      const { options, answer } = shuffleOptions(concept.correct, concept.traps, index + chapter.id);

      generated.push({
        id: `P2-C${chapter.id}-G${String(index + 1).padStart(3, "0")}`,
        chapter: chapter.id,
        topic: concept.topic,
        difficulty: difficultyCycle[(index + chapter.id) % difficultyCycle.length],
        stem: frame({ topic: concept.topic, scenario, role }),
        options,
        answer,
        explanation: `${concept.correct} ${concept.explain}`,
        source: `HKSI Paper 2 v2.8.1 第${chapter.id}章；相關 SFO/SFC/HKEX 公開資料`
      });
    }
  }

  return generated;
}

export const questions = [...coreQuestions, ...buildGeneratedQuestions()];
