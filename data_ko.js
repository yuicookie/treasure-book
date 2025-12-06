/*
=================================
バージョン管理用の配列
=================================
*/
const VERSION_DATA_KO = {
'13.3': [
// 追加
'tr_ch83',
'tr_ch84',
'tr_pet95',
'tr_pet96',
'tr_event_58',
'tr_event_93',
'tr_ga187',
'tr_ga188',
'tr_ga189',
// 上方修正
'tr_ch15',
'tr_ch15_m',
'tr_ch15_m_blessed',
'tr_ch21',
'tr_ch21_m',
'tr_ch21_m_blessed',
'tr_ch28',
'tr_ch28_m',
'tr_ch28_m_blessed',
'tr_ch39',
'tr_ch39_m',
'tr_ch39_m_blessed',
'tr_ch47',
'tr_ch47_m',
'tr_ch47_m_blessed',
'tr_ch58',
'tr_ch58_m',
'tr_ch58_m_blessed',
'tr_ch67',
'tr_pet24_m',
'tr_pet24_m_blessed',
'tr_pet28',
'tr_pet28_m',
'tr_pet28_m_blessed',
'tr_pet40',
'tr_pet40_m',
'tr_pet40_m_blessed',
'tr_pet41',
'tr_pet41_m',
'tr_pet41_m_blessed',
'tr_pet50',
'tr_pet50_m',
'tr_pet50_m_blessed',
'tr_ga046',
'tr_ga046_m',
'tr_ga046_m_blessed',
'tr_ga056',
'tr_ga056_m',
'tr_ga056_m_blessed',
'tr_ga060',
'tr_ga060_m',
'tr_ga060_m_blessed',
'tr_ga064_m',
'tr_ga064_m_blessed',
'tr_ga065_m',
'tr_ga065_m_blessed',
'tr_ga068',
'tr_ga068_m',
'tr_ga068_m_blessed',
],
'13.4': [
// 追加
'tr_ch85',
'tr_pet97',
'tr_ga190',
'tr_ga190_m',
'tr_ga190_m_blessed',
'tr_ga191',
'tr_ga191_m',
'tr_ga191_m_blessed',
'tr_ga192',
'tr_ga192_m',
'tr_ga192_m_blessed',
// 上方修正
'tr_ch12_m',
'tr_ch12_m_blessed',
'tr_ch20_m',
'tr_ch20_m_blessed',
'tr_ch29_m',
'tr_ch29_m_blessed',
'tr_ch33_m',
'tr_ch33_m_blessed',
'tr_ch48_m',
'tr_ch48_m_blessed',
'tr_pet43_m',
'tr_pet43_m_blessed',
'tr_pet51_m',
'tr_pet51_m_blessed',
'tr_pet74_m',
'tr_pet74_m_blessed',
'tr_ga059_m',
'tr_ga059_m_blessed',
'tr_ga068_m',
'tr_ga068_m_blessed',
'tr_ga076_m',
'tr_ga076_m_blessed',
'tr_ga093_m',
'tr_ga093_m_blessed',
'tr_ga117_m',
'tr_ga117_m_blessed',
'tr_ga135_m',
'tr_ga135_m_blessed',
],
};

/*
=================================
アイテムデータ定義
=================================
*/
const ITEM_DATA_KO = {
// 一般宝物（進化前）
general: [
{
id: 'tr_ch01',
name: '용감한 쿠키군의 세번째 해골단추',
rarity: 'C',
canEvolve: true,
effect: '강화 수치에 따라 체력이 5~15 증가',
method: '용감한 쿠키군 레벨 8 달성시 획득',
description: '원래는 3개였다는 그 해골단추! 장착하고 있으면 용기가 솟는다.'
},
{
id: 'tr_ch02',
name: '딸기맛 쿠키의 달콤한 향딸기',
rarity: 'B',
canEvolve: true,
effect: '강화 수치에 따라 보너스타임 0.5~1초 연장',
method: '딸기맛 쿠키 레벨 8 달성시 획득',
description: '딸기맛 쿠키가 매일 지니고 다니는 달콤한 향딸기.'
},
{
id: 'tr_ch03',
name: '명랑한 쿠키양의 롤리팝캔디 조각',
rarity: 'C',
canEvolve: true,
effect: '강화 수치에 따라 경험치 2~7% 보너스',
method: '명랑한 쿠키양 레벨 8 달성시 획득',
description: '롤리롤리~ 명랑한 기분이 퐁퐁 솟아나요.'
},
{
id: 'tr_ch04',
name: '산타맛 쿠키의 선물보따리',
rarity: 'A',
canEvolve: false,
effect: '출석시 30~50% 확률로 선물포인트 100점을 획득',
method: '산타맛 쿠키 레벨 8 달성시 획득',
description: '선물포인트가 충분히 들어있는 빵빵한 보따리!',
hasPassiveTag: true,
booknone: true
},
{
id: 'tr_ch05',
name: '구름맛 쿠키의 무지개사탕 조각',
rarity: 'B',
canEvolve: true,
effect: '강화 수치에 따라 아이템 시간 5~6% 연장',
method: '구름맛 쿠키 레벨 8 달성시 획득',
description: '무지개 맛이 나는 사탕. 두개로 쪼개면 쌍무지개 사탕이 된다.'
},
{
id: 'tr_ch06',
name: '버터크림 초코쿠키 의 느끼한 버터조각',
rarity: 'B',
canEvolve: true,
effect: '강화 수치에 따라 코인 3~4% 보너스',
method: '버터크림 초코쿠키 레벨 8 달성시 획득',
description: '느끼하지만 그래서 더 부드럽고 맛있는 고칼로리, 고효율의 버터조각.'
},
{
id: 'tr_ch07',
name: '닌자맛 쿠키의 분신 나뭇잎',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 점프 1~3회 추가',
method: '닌자맛 쿠키 레벨 8 달성시 획득',
description: '닌자맛 쿠키가 날아오를 때 흩날리던 나뭇잎은 그냥 연출이 아니었던 것이다!'
},
{
id: 'tr_ch08',
name: '공주맛 쿠키의 완소 보석반지',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 충돌 피해 5~6% 감소',
method: '공주맛 쿠키 레벨 8 달성시 획득',
description: '왠지 맛보고 싶은 보석반지. 사실은 체력 보존의 기능이 숨어있는 왕가의 고급보물이다.'
},
{
id: 'tr_ch09',
name: '용사맛 쿠키의 말발굽 장식',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 광속질주 속도 5~10% 증가',
method: '용사맛 쿠키 레벨 8 달성시 획득',
description: '전리품이나 기념품을 좋아하는 용사맛 쿠키의 고급 재료로 만든 말발굽 장식.'
},
{
id: 'tr_ch10',
name: '커피맛 쿠키의 오리지널 커피콩',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 체력회복량 2~4% 증가',
method: '커피맛 쿠키 레벨 8 달성시 획득',
description: '이 작은 한 알에 맛과 향, 피로회복 물질까지 풍부해, 체력 회복에 그만이다.'
},
{
id: 'tr_ch11',
name: '보더맛 쿠키의 날쌘 바퀴',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 기본속도 3~5% 증가',
method: '보더맛 쿠키 레벨 8 달성시 획득',
description: '그렇게 굴러다니고도 반짝이는 처음의 광택을 잃지 않는 고품질의 바퀴.'
},
{
id: 'tr_ch12',
name: '천사맛 쿠키의 성스러운 깃털',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 꼬마 자력 세기 증가',
method: '천사맛 쿠키 레벨 8 달성시 획득',
description: '천사맛 쿠키가 마구 흘리고 다니는것 같지만 사실은 구하기가 매우 힘든 진귀한 보물.'
},
{
id: 'tr_ch13',
name: '좀비맛 쿠키의 오리지널 세포체',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 체력 10~20으로 부활',
method: '좀비맛 쿠키 레벨 8 달성시 획득',
description: '강력한 좀비 바이러스를 지닌 세포체이므로 절대 맨손으로 만지면 안된다. 만졌다간...'
},
{
id: 'tr_ch14',
name: '쿠키앤크림 쿠키의 오후 간식',
rarity: 'B',
canEvolve: true,
effect: '강화 수치에 따라 체력감소 1~4% 느림',
method: '쿠키앤크림 쿠키 레벨 8 달성시 획득',
description: '체력을 유지하기 위해 쿠키에게도 적절한 간식이 필요한 것이었다.'
},
{
id: 'tr_ch15',
name: '근육맛 쿠키의 단백질 파우더',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 장애물 파괴시 1200~4000점 추가',
method: '근육맛 쿠키 레벨 8 달성시 획득',
description: '부작용 주의! 자꾸만 때려 부수고 싶어질 수 있습니다.'
},
{
id: 'tr_ch16',
name: '해적맛 쿠키의 부활 부츠',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력 10~20으로 부활 2회',
method: '해적맛 쿠키 레벨 8 달성시 획득',
description: '해적맛 쿠키가 이 부츠를 잃어버리지만 않았더라면 온전한 모습으로 부활할 수 있었을지도...'
},
// {
//     id: 'tr_ch17',
//     name: '???',
//     rarity: 'S',
//     canEvolve: false,
//     effect: '???',
//     method: '???',
//     description: '???',
//     booknone: true
// },
{
id: 'tr_ch18',
name: '피겨여왕맛 쿠키의 블루베리 헤어핀',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 초급 꼬마 연기점수 추가',
method: '피겨여왕맛 쿠키 레벨 8 달성시 획득',
description: '블루베리 헤어스타일을 완성시켜주는 잇아이템. 소장가치 100%, 후회안함.'
},
{
id: 'tr_ch19',
name: '히어로맛 쿠키의 민트캔디',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력감소 4~5% 느림',
method: '히어로맛 쿠키 레벨 8 달성시 획득',
description: '사실 캔디하트엔진을 정상 작동시키기 위해 적정량의 민트캔디 섭취가 필수이다.'
},
{
id: 'tr_ch20',
name: '치어리더맛 쿠키의 핑크 메가폰',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 이어달리기시 체력 40~90 증가',
method: '치어리더맛 쿠키 레벨 8 달성시 획득',
description: '큰 소리로 응원할 수 있게 도와주면서 스타일까지 살려주는 일석이조의 핑크 메가폰.'
},
{
id: 'tr_ch21',
name: '특전사맛 쿠키의 초콜릿 위장 크림',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 장애물 파괴시 7300~10000점 추가',
method: '특전사맛 쿠키 레벨 8 달성시 획득',
description: '시중에 판매되지 않는 고급 위장크림. 바르면 강력해지고 달콤한 맛이 난다.'
},
{
id: 'tr_ch22',
name: '의적맛 쿠키의 분신인형',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 2단점프부터 500~1000점 추가',
method: '의적맛 쿠키 레벨 8 달성시 획득',
description: '왠지 괴롭히고 싶어지는 분신인형.'
},
{
id: 'tr_ch23',
name: '악마맛 쿠키의 꼬리형 나침반',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 분홍곰젤리 200~400점 추가',
method: '악마맛 쿠키 레벨 8 달성시 획득',
description: '맛있는 젤리가 어디에있는지 가장 잘 찾아낸다는 그 나침반!'
},
{
id: 'tr_ch24',
name: '구미호맛 쿠키의 신선한 선홍빛 푸딩',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 거대화시 모든 젤리 100~150점 추가',
method: '구미호맛 쿠키 레벨 8 달성시 획득',
description: '그 어떤 음식보다 철분이 많이 함유되어 있다고 알려진 선홍빛 푸딩.'
},
{
id: 'tr_ch25',
name: '마법사맛 쿠키의 팝핑캔디 아이스크림',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 장애물 파괴시 1~4코인 획득',
method: '마법사맛 쿠키 레벨 8 달성시 획득',
description: '살짝 녹아서 흘러내린 상태에서 최상의 맛을 낸다.'
},
{
id: 'tr_ch26',
name: '요정맛 쿠키의 녹차맛 롤케이크',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 이어달리기시 체력 50~100 증가',
method: '요정맛 쿠키 레벨 8 달성시 획득',
description: '녹차와 치즈가 부드럽게 어우러져 맛도 좋고 몸에도 좋다.'
},
{
id: 'tr_ch27',
name: '락스타맛 쿠키의 전설의 기타 피크',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력감소 2~3% 느림\n강화 수치에 따라 체력회복량 4~5% 증가',
method: '락스타맛 쿠키 레벨 8 달성시 획득',
description: '열정적인 장시간의 연주에도 쉽게 지치지 않게 해주는 피크.'
},
{
id: 'tr_ch28',
name: '체리맛 쿠키의 파티용 컵케이크',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 장애물 파괴시 7300~10000점 추가',
method: '체리맛 쿠키 레벨 8 달성시 획득',
description: '한겨울 파티의 분위기를 더 따뜻하고 화사하게 만들어주는 아이템.'
},
{
id: 'tr_ch29',
name: '음유시인맛 쿠키의 크리스마스트리 쿠키',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 모든 젤리 10~30점 추가',
method: '음유시인맛 쿠키 레벨 8 달성시 획득',
description: '사랑과 평화 맛이 나는 겨울 별미.'
},
{
id: 'tr_ch30',
name: '눈설탕맛 쿠키의 스노우 파르페',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 이어달리기시 체력 25~70 증가\n강화 수치에 따라 구멍에 빠진 쿠키를 1~2회 구출',
method: '눈설탕맛 쿠키 레벨 8 달성시 획득',
description: '쿠키들의 마을에 내리는 달콤한 눈을 땅에 닿기 전에 모아 만든 파르페.'
},
{
id: 'tr_ch31',
name: '핑크초코쿠키의 수제 초콜릿 세트',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 분홍곰젤리 300~500점 추가',
method: '핑크초코쿠키 레벨 8 달성시 획득',
description: '쿠키의 손맛이 살아있는 값진 선물. 이정도라면 마음을 받아주지 않을까?'
},
{
id: 'tr_ch32',
name: '예언자맛 쿠키의 바삭한 수염',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 출석시 7~30% 확률로 크리스탈 2개 획득',
method: '예언자맛 쿠키 레벨 8 달성시 획득',
description: '부수지 않고 바로 입에 넣어 먹으면 곧 후회할 일이 생긴다.',
hasPassiveTag: true
},
{
id: 'tr_ch33',
name: '피스타치오맛 쿠키의 부활의 성배',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 이어달리기 쿠키가 체력 25으로 1~3회 부활',
method: '피스타치오맛 쿠키 레벨 8 달성시 획득',
description: '이것만 있으면 마지막 순간에 다시 한 번 힘을 낼 수 있을 듯하다!'
},
{
id: 'tr_ch34',
name: '연금술사맛 쿠키의 분자모형 브로치',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 15~25% 확률로 코인매직에 금화출현',
method: '연금술사맛 쿠키 레벨 8 달성시 획득',
description: '연금술사맛 쿠키에겐 ’물’로 보인다는 포도알 브로치.'
},
{
id: 'tr_ch35',
name: '뱀파이어맛 쿠키의 부활의 포도주스',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력 30~65로 부활\n강화 수치에 따라 충돌 피해 6~10% 감소',
method: '뱀파이어맛 쿠키 레벨 8 달성시 획득',
description: '뱀파이어의 신비한 힘이 담긴 최고급 포도주스로, 무려 쓰러진 쿠키를 살려낸다!'
},
{
id: 'tr_ch36',
name: '풋사과맛 쿠키의 사과모양 똑딱핀',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 보너스타임 점수 5~10% 추가',
method: '풋사과맛 쿠키 레벨 8 달성시 획득',
description: '쿠키의 머리에 포인트가 되어줄 귀여운 아이템.'
},
{
id: 'tr_ch37',
name: '치즈케이크맛 쿠키의 골든피스',
rarity: 'S',
canEvolve: true,
effect: '기본속도 5% 증가\n강화 수치에 따라 코인 6~8% 보너스',
method: '치즈케이크맛 쿠키 레벨 8 달성시 획득',
description: '주인공만 먹을 수 있다는 가장 비싼 한조각!'
},
{
id: 'tr_ch38',
name: '탐험가맛 쿠키의 밧줄 바움쿠헨',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 경험치 7~9% 보너스\n강화 수치에 따라 코인 7~9% 보너스',
method: '탐험가맛 쿠키 레벨 8 달성시 획득',
description: '유기농 통밀 밧줄을 돌돌 말아 만든 건강 간식. 퍽퍽하게 느껴진다면 생명물약을 함께 마셔보자.'
},
{
id: 'tr_ch39',
name: '소다맛 쿠키의 파도맛 소다',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 기본속도 3~4% 증가\n강화 수치에 따라 장애물 파괴시 7300~10000점 추가',
method: '소다맛 쿠키 레벨 8 달성시 획득',
description: '소다 파도를 병에 담기만 하면 얼음을 넣지 않아도 시원한 파도맛 소다가 완성된다.'
},
{
id: 'tr_ch40',
name: '정글전사 쿠키의 젤리꽃 헤어핀',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 소환수에 탑승시 모든 젤리 450~650점 추가',
method: '정글전사 쿠키 레벨 8 달성시 획득',
description: '정글전사 쿠키가 처음 정글에서 발견되었을 때부터 하고 있었던 헤어핀. 뭔가 사연이 있는걸까?'
},
{
id: 'tr_ch41',
name: '불꽃정령 쿠키의 화염구슬',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 구출/부활(체력 20) 총 2~4회',
method: '불꽃정령 쿠키 레벨 8 달성시 획득',
description: '붉은용이 500년만에 한 번 뱉어낸다는 희귀한 구슬. 이것만 있으면 가슴 뜨겁게 다시 달릴 수 있을 것 같다.'
},
{
id: 'tr_ch42',
name: '블랙베리맛 쿠키의 블랙베리 모자',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력회복량 1~5% 증가\n강화 수치에 따라 체력 30~60으로 부활',
method: '블랙베리맛 쿠키 레벨 8 달성시 획득',
description: '모자를 떨어뜨리지 않기 위해 블랙베리맛쿠키는 그렇게 조심스럽게 달리는 것일까?'
},
{
id: 'tr_ch43',
name: '키위맛 쿠키의 소중한 열쇠',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 기본속도 3~5% 증가\n강화 수치에 따라 체력 30~50으로 부활',
method: '키위맛 쿠키 레벨 8 달성시 획득',
description: '브라보! 이 열쇠를 얻어 드디어 바이커의 완벽한 주인이 되었다!'
},
{
id: 'tr_ch44',
name: '웨어울프맛 쿠키의 소중한 목걸이',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 이어달리기시 구출/부활(체력 20) 총 1~3회',
method: '웨어울프맛 쿠키 레벨 8 달성시 획득',
description: '웨어울프맛 쿠키가 마을을 떠나올 때 누군가가 손에 꼭 쥐어준 목걸이. 강해지길 염원하는 마음이 담겨있다.'
},
{
id: 'tr_ch45',
name: '코코아맛 쿠키의 마시멜로 모자',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 소환수에 탑승시 모든 젤리 150~350점 추가',
method: '코코아맛 쿠키 레벨 8 달성시 획득',
description: '추운날씨에 강력한 효과를 발휘하는 모자! 먹지 말고 머리에 양보하자.'
},
{
id: 'tr_ch46',
name: '민트초코쿠키의 바이올린 케이스',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력감소 2~3% 느림\n강화 수치에 따라 2~3% 확률로 코인꽃 생성',
method: '민트초코쿠키 레벨 8 달성시 획득',
description: '바이올린만큼 케이스도 최고급. 최고의 실력을 가진 연주자에게 딱이다!'
},
{
id: 'tr_ch47',
name: '홍고추맛 쿠키의 질끈 묶은 머리끈',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력 30~70으로 부활\n강화 수치에 따라 장애물 파괴시 7300~10000점 추가',
method: '홍고추맛 쿠키 레벨 8 달성시 획득',
description: '꽉 맬수록 의지가 더욱 강해진다는 머리끈. 질끈 묶고 화끈하게 달려볼까?'
},
{
id: 'tr_ch48',
name: '슈크림맛 쿠키의 슈모자',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 모든 젤리 30~80점 추가',
method: '슈크림맛 쿠키 레벨 8 달성시 획득',
description: '신선한 슈크림이 가득 담겨 부드러운 슈 모자!'
},
{
id: 'tr_ch49',
name: '달빛술사 쿠키의 꿈을 담은 병',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 구출/부활(체력 25) 총 1~3회\n강화 수치에 따라 별가루젤리 400~800점 추가',
method: '달빛술사 쿠키 레벨 8 달성시 획득',
description: '언젠가 행복한 꿈에서 깨야 할 그때를 위해 조금씩 꿈의 정수를 모아 두는 병.'
},
{
id: 'tr_ch50',
name: '버블껌맛 쿠키의 버블껌 수류탄',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 버블껌볼 발사점수 1000~2000점 추가',
method: '버블껌맛 쿠키 레벨 8 달성시 획득',
description: '안전핀을 뽑고 나서, 수류탄 든 손을 헷갈려 안전핀을 던지면 안 된다. 큰일 난다.'
},
{
id: 'tr_ch51',
name: '벚꽃맛 쿠키의 벚꽃잼 비스킷 가방',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 출석시 30~50% 확률로 부스트 세트를 획득',
method: '벚꽃맛 쿠키 레벨 8 달성시 획득',
description: '보기와는 다르게 엄청 많은 것을 담을 수 있다. 무엇이 담겨있는지는 아무도 보지 못 했다고.',
hasPassiveTag: true
},
{
id: 'tr_ch52',
name: '레몬맛 쿠키의 레몬 mp3 플레이어',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 번개 질주시 파괴점수 1000~2000점 추가',
method: '레몬맛 쿠키 레벨 8 달성시 획득',
description: '레몬 슬라이스 휠을 돌릴 때마다 손끝에서 상큼함이 톡~'
},
{
id: 'tr_ch53',
name: '오렌지맛 쿠키의 스포츠 보틀',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 광속질주 시간 10~15% 연장\n강화 수치에 따라 광속질주 속도 10~15% 증가',
method: '오렌지맛 쿠키 레벨 8 달성시 획득',
description: '몸에 오렌지가 그렇게 많이 함유돼 있는데 또 오렌지 주스를 찾는다! 빠져나간 상큼함을 회복하는 거라나.'
},
{
id: 'tr_ch54',
name: '라임맛 쿠키의 워터프루프 마스카라',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 거대화 시간 5~10% 연장\n강화 수치에 따라 거대화시 속도 5~10% 증가',
method: '라임맛 쿠키 레벨 8 달성시 획득',
description: '라임컬러 마스카라로 화사하게 치장하면, 올여름 핫한 걸~'
},
{
id: 'tr_ch55',
name: '박하사탕맛 쿠키의 유리병 편지',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 소환수에 탑승시 모든 젤리 400~600점 추가',
method: '박하사탕맛 쿠키 레벨 8 달성시 획득',
description: '결국 띄우지 못한 편지. 보내지 않는 게 좋겠다고 생각한 것 같다.'
},
{
id: 'tr_ch56',
name: '복숭아맛 쿠키의 무술비법서',
rarity: 'S',
canEvolve: true,
effect: '점프 1회 추가\n강화 수치에 따라 구멍에 빠진 쿠키를 1~3회 구출',
method: '복숭아맛 쿠키 레벨 8 달성시 획득',
description: '수많은 고수들의 비법을 정리해 놓았다. 물론 읽기만 해서는 절대 고수가 될 수 없겠지. 몸을 좀 움직이도록 하자.'
},
{
id: 'tr_ch57',
name: '대추맛 쿠키의 정갈한 참빗',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 생명물약 획득시 거대화 1~2초',
method: '대추맛 쿠키 레벨 8 달성시 획득',
description: '대추맛 쿠키의 아름다운 수염 결의 비결. 매일같이 관리해주어야 한다.'
},
{
id: 'tr_ch58',
name: '양파맛 쿠키의 눈물에 젖은 베개',
rarity: 'S',
canEvolve: true,
effect: '광속질주시 장애물 통과\n강화 수치에 따라 장애물 통과시 6300~9000점 추가',
method: '양파맛 쿠키 레벨 8 달성시 획득',
description: '달리고 있을 땐 몰랐던 나약한 생각들이 가만히 누워있다 보면 갑자기 밀려오곤 한다.'
},
{
id: 'tr_ch59',
name: '마카롱맛 쿠키의 볼터치 퍼프',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 마카롱 동물 젤리 500~1000점 추가',
method: '마카롱맛 쿠키 레벨 8 달성시 획득',
description: '마카롱맛 쿠키가 행진을 나가기 직전 꼭 챙기는 그것! 깜찍함이 배가된다.'
},
{
id: 'tr_ch60',
name: '시나몬맛 쿠키의 트럼프카드 케이스',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 카드 젤리 500~1000점 추가',
method: '시나몬맛 쿠키 레벨 8 달성시 획득',
description: '어떤 트릭이 숨겨져 있을 지 모르는 카드 케이스.\n뽑아도 뽑아도 계속 나온다.'
},
{
id: 'tr_ch61',
name: '단팥맛 쿠키의 후끈한 모포 더미',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력감소 5~6% 느림',
method: '단팥맛 쿠키 레벨 8 달성시 획득',
description: '따뜻하게 지켜주지만 정전기 때문에 따가울 수 있으니 조심하자. 앗 따거!'
},
{
id: 'tr_ch62',
name: '화이트초코 쿠키의 백장미 꽃다발',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 화이트초코 젤리 500~1000점 추가',
method: '화이트초코 쿠키 레벨 8 달성시 획득',
description: '2월 어느 날 누군가가 수줍게 건넨 선물. 유독 이 꽃다발만 소중하게 간직하고 있다.'
},
{
id: 'tr_ch63',
name: '허브맛 쿠키의 무럭무럭 허브씨앗',
rarity: 'S',
canEvolve: false,
effect: '해 젤리 획득시 광속질주 2초\n강화 수치에 따라 체력 30~70으로 부활',
method: '허브맛 쿠키 레벨 8 달성시 획득',
description: '해가 쨍쨍한 날 씨를 뿌리면 순식간에 퐁 하고 새싹이 솟아오르는 마법씨앗. 허브맛 쿠키의 발 밑을 주시하라!'
},
{
id: 'tr_ch64',
name: '다이노사워 쿠키의 젤리공룡 화석',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 공룡발바닥 젤리 500~1000점 추가',
method: '다이노사워 쿠키 레벨 8 달성시 획득',
description: '화석침대가 있어야 젤리공룡이 편안하게 잠을 이룬다고 한다.'
},
{
id: 'tr_ch65',
name: '바다요정 쿠키의 산호조개 쟁반',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 바다결정 젤리 1000~3000점 추가\n강화 수치에 따라 체력 40~80으로 부활',
method: '바다요정 쿠키 레벨 8 달성시 획득',
description: '이 쟁반에 바닷물을 담아 한참을 애달픈 마음으로 들여다보곤 한다.'
},
{
id: 'tr_ch66',
name: '솜사탕맛 쿠키의 폴인러브 하트송송펜',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 모든 젤리 30~80점 추가',
method: '솜사탕맛 쿠키 레벨 8 달성시 획득',
description: '한 글자만 써도 달콤함이 똑똑 묻어난다. 사랑의 말을 전하기에 이만한 펜도 없지.'
},
{
id: 'tr_ch67',
name: '롤케이크맛 쿠키의 미니롤 글라스',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 장애물 파괴시 8300~11000점 추가\n강화 수치에 따라 기본속도 5~7% 증가',
method: '롤케이크맛 쿠키 레벨 8 달성시 획득',
description: '이 안경을 쓰면 시야가 빙글빙글 돌며 눈에 뵈는 게 없어진다. 뭐, 막 나간다는 얘기지.'
},
{
id: 'tr_ch68',
name: '바나나맛 쿠키의 바나나 우유 젖병',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력 30~40으로 부활\n강화 수치에 따라 코인 3~5% 보너스',
method: '바나나맛 쿠키 레벨 8 달성시 획득',
description: '바나나맛 쿠키가 탐험가 시절에 어린 원숭이를 먹이려고 늘 들고 다녔던 젖병. 우리가 아는 그 맛!'
},
{
id: 'tr_ch69',
name: '팬케이크맛 쿠키의 팬케이크 미니백팩',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 해바라기 씨앗 젤리 500~1000점 추가',
method: '팬케이크맛 쿠키 레벨 8 달성시 획득',
description: '장점 : 팬케이크맛 쿠키의 앙증맞음과 귀여움을 한층 더해준다. 단점 : ...팬케이크맛 쿠키의 팔에 끼우기 어려운 구조'
},
{
id: 'tr_ch70',
name: '바람궁수 쿠키의 생명깃털 화살깃',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 바람깃털 젤리 2600~3100점 추가\n강화 수치에 따라 구출/부활(체력 22~32) 총 3회',
method: '바람궁수 쿠키 레벨 8 달성시 획득',
description: '설탕백조의 깃털로 만든 화살깃. 모든 어둠을 정화할 수 있다.'
},
{
id: 'tr_ch71',
name: '달토끼맛 쿠키의 화려한 떡케이크',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 꿀떡젤리 2000~3000점 추가\n체력 50으로 부활',
method: '달토끼맛 쿠키 레벨 8 달성시 획득',
description: '달토끼맛 쿠키가 제일 좋아하는 떡들이 잔뜩 모여있는 무지개떡 케이크'
},
{
id: 'tr_ch81',
name: '바리공주맛 쿠키의 무구 방울',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 바리공주맛 쿠키 꽃 젤리 400~1300 점 추가\n강화 수치에 따라 체력 30~65으로 부활',
method: '바리공주맛 쿠키 레벨 8 달성시 획득',
description: '청아한 소리로 악령을 내쫓고 신령을 부르는 무구 방울. 삼색실이 살랑거릴 때마다 뼈살이, 살살이, 숲살이 꽃의 향이 일렁인다.'
},
{
id: 'tr_ch73',
name: '굴랍자문맛 쿠키의 반짝이는 귀걸이',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 구출/부활(체력 10~20) 총 2~3회\n강화 수치에 따라 코인 3~5% 보너스',
method: '굴랍자문맛 쿠키 레벨 8 달성시 획득',
description: '달빛 아래에서 빛날 때 가장 아름다운 귀걸이.\n굴랍자문맛 쿠키가 착용하면서 유행하기 시작했다고!'
},
{
id: 'tr_ch74',
name: '카주카틀리맛 쿠키의 고급 간식',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 카주카틀리젤리 600~1500점 추가',
method: '카주카틀리맛 쿠키 레벨 8 달성시 획득',
description: '풍미가 가득하고 입에서 살살 녹는 행복한 맛!\n카주카틀리맛 쿠키의 주머니에서 떨어질 날이 없다는데?'
},
{
id: 'tr_ch75',
name: '멜로우버니 쿠키의 행복의 키링',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 마시멜로 젤리 400~1300점 추가\n강화 수치에 따라 체력감소 2~3% 느림',
method: '멜로우버니 쿠키 레벨 8 달성시 획득',
description: '복슬복슬한 토끼 꼬리털과 마시멜로처럼\n말랑말랑한 토끼 인형이 한 세트인 행복의 키링.\n가방에 걸어두면 매일의 소소한 행복이 가득할 거야~!'
},
{
id: 'tr_ch77',
name: '오이맛 쿠키의 애지중지 오이찌',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 물고기 젤리 3500~8000점 추가\n강화 수치에 따라 체력감소 2~3% 느림',
method: '오이맛 쿠키 레벨 8 달성시 획득',
description: '오이맛 쿠키가 소꿉친구로부터 선물 받은\n오이모양 찌. 독특한 모양이라 애지중지 여기고 있다.'
},
{
id: 'tr_ch78',
name: '식혜맛 쿠키의 최고 인기! 용감한 바둑왕',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 백돌 젤리 300~3500점 추가\n강화 수치에 따라 이어달리기시 체력 25~70 증가',
method: '식혜맛 쿠키 레벨 8 달성시 획득',
description: '어떤 쿠키가 열심히 추천을 한 덕분에 기원에서\n읽지 않은 쿠키가 없다는 인기 절정 바둑 만화책!'
},
{
id: 'tr_ch79',
name: '수정과맛 쿠키의 바둑 초급 교본',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 흑돌 젤리 300~3500점 추가\n강화 수치에 따라 이어달리기시 체력 25~70 증가',
method: '수정과맛 쿠키 레벨 8 달성시 획득',
description: '식혜맛 쿠키가 같이 바둑 두자고 권하면서 준 바둑 기초 교본. 지금은 너무 쉬운 책이지만 책 곳곳에 식혜맛 쿠키의 낙서가 있는 것이 귀여워 소중하게 간직하고 있다.'
},
{
id: 'tr_ch80',
name: '보리장수맛 쿠키의 보리향 배냇저고리',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 보리 젤리 700~1600점 추가\n강화 수치에 따라 거대화시 체력감소 10~15% 느림',
method: '보리장수맛 쿠키 레벨 8 달성시 획득',
description: '소중한 아기쿠키의 탄생을 기다리며 준비해둔 배냇저고리. 부디 오래오래 건강하라는 기도를 담았다.'
},
{
id: 'tr_ch72',
name: '딸기쇼트케이크맛 쿠키의 애착 쿠션',
rarity: 'S',
canEvolve: false,
effect: '초미니자력\n강화 수치에 따라 구출/부활(체력 10~20) 총 1~3회',
method: '딸기쇼트케이크맛 쿠키 레벨 8 달성시 획득',
description: '주인 쿠키가 선물해준 쿠션. 케이크들개의 발바닥에서 나는 딸기케이크 향이 나는 걸 보면 오랫동안 소중히 안고 다닌 모양이다.'
},
{
id: 'tr_ch82',
name: '감자샐러드맛 쿠키의 시식용 숟가락',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 기본속도 2~4% 증가\n초미니자력',
method: '감자샐러드맛 쿠키 레벨 8 달성시 획득',
description: '\'한 입만 잡솨봐용~!\' 감자샐러드맛 쿠키가 영업할 때 쓰는 비장의 아이템. 언제나 먹기 좋은 한 입이 떠지는 황금밸런스의 스푼이다.'
},
{
id: 'tr_ch83',
name: '파김치맛 쿠키의 소음 싹둑 귀마개',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 장애물 파괴시 9300~12000점 추가\n강화 수치에 따라 체력감소 2~3% 느림',
method: '파김치맛 쿠키 레벨 8 달성시 획득',
description: '이리 뛰랴 저리 뛰랴 일을 끝내고 힘이 쭉쭉 빠져 파김치가 되어버렸을 때, 작은 소음마저도 거슬린다면 귀에 끼워보자. 힘든 큭생, 내면의 평화를 찾을 수 있다.'
},
{
id: 'tr_ch84',
name: '백김치맛 쿠키의 부적 보관함',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 장애물 통과시 4300~7000점 추가\n강화 수치에 따라 체력감소 2~3% 느림',
method: '백김치맛 쿠키 레벨 8 달성시 획득',
description: '백김치맛 쿠키의 정화의 기운이 깃든 특별한 부적 보관함. 부적을 소금에 절여 보관함에 넣어두면 어떤 장애물이든 정화할 수 있는 힘이 깃든다고 한다.'
},
{
id: 'tr_ch85',
name: '충무김밥맛 쿠키의 종이배 한 접시',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 충무김밥 젤리 300~500점 추가\n강화 수치에 따라 소환수 탑승시 11~20% 체력감소 느림',
method: '충무김밥맛 쿠키 레벨 8 달성시 획득',
description: '배를 모는 쿠키들의 삶의 애환이 느껴지는 종이배 접시. 이리저리 흔들리는 파도 위에서도 밥을 탈 없이 먹을 수 있도록, 옛 쿠키들의 지혜가 고스란히 깃들어 있다. 접시 안의 주먹밥에는, 쿠키들의 무사 귀환을 바라는 육지로부터의 마음이 꾹꾹 눌러 담겨 더욱 든든하다고.'
},
{
id: 'tr_ch86',
name: '망개떡맛 쿠키의 망개열매 머리꽂이',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 망개떡 젤리 1500~3500점 추가',
method: '망개떡맛 쿠키 레벨 8 달성시 획득',
description: '망개떡맛 쿠키가 첫 숲속 탐험에서 찾아낸 망개\n열매를 엮어 만든 머리꽂이. 망개잎 달팽이의\n도움으로 부드럽고 매끈한 모양으로 다듬었다.\n지금까지 망개떡맛 쿠키의 보물 1호 자리를\n굳건히 지키고 있다고!'
},
{
id: 'tr_pet01',
name: '초코방울의 달콤한 초콜릿 조각',
rarity: 'C',
canEvolve: true,
effect: '강화 수치에 따라 노란곰젤리 10~20점 추가',
method: '초코방울 레벨 8 달성시 획득',
description: '초콜릿 조각 하나면 초코방울의 표면을 좀더 매끄럽게 코팅할 수 있다.'
},
{
id: 'tr_pet02',
name: '치즈방울의 고소한 치즈조각',
rarity: 'C',
canEvolve: true,
effect: '강화 수치에 따라 분홍곰젤리 50~60점 추가',
method: '치즈방울 레벨 8 달성시 획득',
description: '치즈나무 열매를 조각 형태로 가공한 수제품.'
},
{
id: 'tr_pet03',
name: '좋은손의 좋은 골무',
rarity: 'C',
canEvolve: true,
effect: '강화 수치에 따라 은화 획득시 20~30점 추가',
method: '좋은손 레벨 8 달성시 획득',
description: '손끝을 자꾸 깨물어 먹는 어린 쿠키들에게도 좋다.'
},
{
id: 'tr_pet04',
name: '조랭이젤리의 돌연변이 친구',
rarity: 'C',
canEvolve: true,
effect: '강화 수치에 따라 곰젤리파티 시간 10~15% 연장',
method: '조랭이젤리 레벨 8 달성시 획득',
description: '조랭이 젤리로서는 돌연변이인 한쪽얼굴의 친구 조랭이젤리.'
},
{
id: 'tr_pet05',
name: '뭉치유니콘의 겨울용 뿔모자',
rarity: 'B',
canEvolve: true,
effect: '강화 수치에 따라 금화 획득시 100~120점 추가',
method: '뭉치유니콘 레벨 8 달성시 획득',
description: '겨울에는 뿔이 시려워서 쓰고 다닌다고 한다.'
},
{
id: 'tr_pet06',
name: '산타모자의 달랑이는 꼬리방울',
rarity: 'B',
canEvolve: true,
effect: '강화 수치에 따라 은화 획득시 10~20점 추가',
method: '산타모자 레벨 8 달성시 획득',
description: '사실 모자에 붙어있지 않더라도 훌륭한 장식용 방울이 될 수 있다.'
},
{
id: 'tr_pet07',
name: '구름사탕의 구름 별사탕',
rarity: 'C',
canEvolve: true,
effect: '강화 수치에 따라 보너스타임에서 펫이 1~1.5배 커짐',
method: '구름사탕 레벨 8 달성시 획득',
description: '구름사탕 속에 가끔씩 뭉쳐져 있기도 하는 덩어리.\n달콤함도 더 진하다!'
},
{
id: 'tr_pet08',
name: '산타양말의 빨간 천조각',
rarity: 'C',
canEvolve: true,
effect: '강화 수치에 따라 기본속도 3~5% 증가',
method: '산타양말 레벨 8 달성시 획득',
description: '산타양말을 만들고 남은 천조각은 구멍이 났을 때도 유용하게 쓸 수 있다.'
},
{
id: 'tr_pet09',
name: '테크노볼의 번개 에너지',
rarity: 'B',
canEvolve: true,
effect: '강화 수치에 따라 자석 시간 10~20% 연장',
method: '테크노볼 레벨 8 달성시 획득',
description: '찌리리리릭 찌리리리릭 찌리리리릭 붐 찌릭 짝 짝 붐붐 찌릭 짝!'
},
{
id: 'tr_pet10',
name: '안깐 마늘의 까진 마늘 한쪽',
rarity: 'B',
canEvolve: true,
effect: '강화 수치에 따라 광속질주 시간 10~19% 연장',
method: '안깐 마늘 레벨 8 달성시 획득',
description: '안깐 것 보다 좀 더 편리해 보이는 느낌이다.'
},
{
id: 'tr_pet11',
name: '플라워콥터의 소중한 씨앗',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 보너스타임 속도 3~8% 증가',
method: '플라워콥터 레벨 8 달성시 획득',
description: '플라워콥터처럼 이 씨앗도 정말 멀리까지 날아갈 수 있다.'
},
{
id: 'tr_pet12',
name: '꼬마유령의 구슬픈 감정',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 구멍에 빠진 쿠키를 1~3회 구출',
method: '꼬마유령 레벨 8 달성시 획득',
description: '꼬마 유령의 구슬픈 감정만으로도 구멍에서 살아날 수 있다니!'
},
{
id: 'tr_pet13',
name: '해적폭탄의 비밀 화약가루',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 충돌시 장애물을 25~35% 확률로 폭발/코인화',
method: '해적폭탄 레벨 8 달성시 획득',
description: '부딪히지 않고 조심히 달린다면 터질 일이 없는 화약가루.'
},
{
id: 'tr_pet14',
name: '포근실타래의 전용 뜨개바늘',
rarity: 'B',
canEvolve: true,
effect: '강화 수치에 따라 보너스타임 1~2초 연장',
method: '포근실타래 레벨 8 달성시 획득',
description: '고급털실에 어울리는 고급 뜨개바늘을 사용하세요.'
},
{
id: 'tr_pet15',
name: '럭키다이스 형제의 미니다이스',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 아이템 시간 5~7% 연장',
method: '럭키다이스 형제 레벨 8 달성시 획득',
description: '럭키다이스 형제의 행운을 점쳐주는 미니다이스.'
},
{
id: 'tr_pet16',
name: '공주장신구의 미니 장신구',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력회복량 5~6% 증가',
method: '공주의 장신구 레벨 8 달성시 획득',
description: '공주의 장신구 자신도 장신구를 매우 좋아한다.'
},
{
id: 'tr_pet17',
name: '용의 꼬리의 얼굴 허물',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 광속질주 2~5% 연장\n강화 수치에 따라 거대화 시간 2~5% 연장',
method: '용의 꼬리 레벨 8 달성시 획득',
description: '꼬리만 남은 용도 가끔 허물을 벗는다.'
},
{
id: 'tr_pet18',
name: '브레인껌의 어린시절',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 충돌 피해 5~6% 감소',
method: '브레인껌 레벨 8 달성시 획득',
description: '개구리처럼 브레인껌의 어린시절도 모양이 다르다.'
},
{
id: 'tr_pet19',
name: '생크림 모카커피용 생크림',
rarity: 'B',
canEvolve: true,
effect: '강화 수치에 따라 알파벳젤리 100~150점 추가',
method: '생크림 모카커피 레벨 8 달성시 획득',
description: '우유는 저지방이라도 생크림은 언제나 가득!'
},
{
id: 'tr_pet20',
name: '천사의 별이 뿌린 축복가루',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 체력이 15~25 증가',
method: '천사의 별 레벨 8 달성시 획득',
description: '사실 언제 어디에나 뿌려져 있는 축복가루. 잘 주워 모으면 된 것이다.'
},
{
id: 'tr_pet21',
name: '쌍둥이 덤벨의 땀방울',
rarity: 'B',
canEvolve: true,
effect: '강화 수치에 따라 거대화 시간 5~6% 연장',
method: '쌍둥이 덤벨 레벨 8 달성시 획득',
description: '흘린 땀방울의 부피만큼 배가 들어간다나 뭐래나.'
},
// {
//     id: 'tr_pet22',
//     name: '???',
//     rarity: 'S',
//     canEvolve: false,
//     effect: '???',
//     method: '???',
//     description: '???',
//     booknone: true
// },
{
id: 'tr_pet23',
name: '눈꽃송이의 반짝이는 얼음조각',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 20~30% 확률로 얼음다리 생성',
method: '눈꽃송이 레벨 8 달성시 획득',
description: '정말 작은 조각이지만 여전히 빛이 난다.'
},
{
id: 'tr_pet24',
name: '젤리코 큐브의 길잃은 젤리코',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 5~10% 확률로 젤리코가 떨어짐',
method: '젤리코 큐브 레벨 8 달성시 획득',
description: '목표물에 명중되지 못한 젤리코들이 우주를 돌아 다시 목표물을 찾아온다는 소문.'
},
{
id: 'tr_pet26',
name: '반짝이볼의 색동별젤리 조각',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 금화 획득시 130~150점 추가',
method: '반짝이볼 레벨 8 달성시 획득',
description: '쿠키들이 놓친 색동별젤리가 오랜시간동안 열과 압력을 받아 투명한 빛을 내는 보물이 되었다.'
},
{
id: 'tr_pet27',
name: '건빵 보급병의 최첨단 헤드셋',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 아이템 시간 5~15% 연장',
method: '건빵 보급병 레벨 8 달성시 획득',
description: '청사과맛 젤리빈을 사용하여 편안한 착용감을 제공하는 헤드셋.'
},
{
id: 'tr_pet28',
name: '불꽃박쥐의 영원한 불씨',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 장애물 통과시 3300~6000점 추가',
method: '불꽃박쥐 레벨 8 달성시 획득',
description: '닿기만 해도 검게 타버리기 때문에 취급에 매우 주의해야 한다.'
},
{
id: 'tr_pet29',
name: '황금방울의 엄청난 골드바',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 코인 6~9% 보너스',
method: '황금방울 레벨 8 달성시 획득',
description: '넘쳐나는 황금코인을 녹여 만든 순도 99.9%의 엄청난 골드바!'
},
{
id: 'tr_pet30',
name: '바람이의 얼음캔디',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 펫이 획득한 점수 3~8% 추가',
method: '바람이 레벨 8 달성시 획득',
description: '눈의 마을에서 구해온 차갑고 달콤한 얼음캔디. 우박은 아니다.'
},
{
id: 'tr_pet31',
name: '여우구슬의 심장',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력이 20~40 증가',
method: '여우구슬 레벨 8 달성시 획득',
description: '여우구슬의 푸른빛 능력의 불이 꺼지면 심장만 남는다고 한다.'
},
{
id: 'tr_pet32',
name: '빛나는 럭키 호박의 달콤한 호박파이',
rarity: 'A',
canEvolve: false,
effect: '강화 수치에 따라 아이템 시간 5~7% 연장',
method: '빛나는 럭키 호박 레벨 8 달성시 획득',
description: '흥겨운 파티에 빠질 수 없는 달콤한 디저트!'
},
{
id: 'tr_pet33',
name: '마법사전의 뜯어진 한장',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 기본속도 2~6% 증가',
method: '마법사전 레벨 8 달성시 획득',
description: '무슨 주문인지 모르겠지만 마법사전이 읽지 못하도록 누군가 뜯어내었다.'
},
{
id: 'tr_pet34',
name: '꽃봉오리의 청순한 꽃잎',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 보너스타임 0.5~1초 연장',
method: '꽃봉오리 레벨 8 달성시 획득',
description: '꽃봉오리가 춤추다가 떨군 이파리로, 한장만으로 코뿔소나 하마를 청순하게 만들 수 있다고 함.'
},
{
id: 'tr_pet35',
name: '스포트라이트의 바닐라향 전구',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 경험치 6~8% 보너스\n강화 수치에 따라 코인 6~8% 보너스',
method: '스포트라이트 레벨 8 달성시 획득',
description: '언제까지나 꺼지지 않아 전구를 갈 일이 없다.\n와우!'
},
{
id: 'tr_pet36',
name: '로켓폭죽의 여분의 풍선껌',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 기본속도 2~3% 증가\n강화 수치에 따라 체력감소 1~2% 느림',
method: '로켓폭죽 레벨 8 달성시 획득',
description: '만킬로미터정도 날았으면 풍선껌을 새 것으로 교체해줘야 한다.'
},
{
id: 'tr_pet37',
name: '통나무케이크의 큼직한 한조각',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 노란곰젤리 50~100점 추가\n강화 수치에 따라 분홍곰젤리 50~100점 추가',
method: '통나무케이크 레벨 8 달성시 획득',
description: '제일 좋아하는 사람에게 주는 한조각.'
},
{
id: 'tr_pet38',
name: '스노우 글로브의 크리스탈 왕관',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 출석시 15~60% 확률로 크리스탈 1개 획득',
method: '스노우 글로브 레벨 8 달성시 획득',
description: '왕관처럼 생겼지만 사실은 받침대라는 소문이 있다.',
hasPassiveTag: true
},
{
id: 'tr_pet39',
name: '코인 꽃을 피우는 코인씨앗',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 3~6% 확률로 코인꽃 생성',
method: '복주머니 레벨 8 달성시 획득',
description: '꿰어진 엽전 모양의 코인 씨앗은 말그대로 코인으로 된 꽃을 피운다.'
},
{
id: 'tr_pet40',
name: '핑크캔디의 벗겨진 껍질',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 분홍곰젤리 200~300점 추가\n강화 수치에 따라 장애물 파괴시 7300~10000점 추가',
method: '핑크캔디 레벨 8 달성시 획득',
description: '핑크캔디가 자기전에 벗어놓은 껍질이다. 벗었을 때의 핑크캔디는 어떤모습일까.'
},
{
id: 'tr_pet41',
name: '보라보라 향초의 아직 따뜻한 촛농',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 장애물 통과시 4300~7000점 추가',
method: '보라보라 향초 레벨 8 달성시 획득',
description: '촛농 방울을 모아서 뭉치면 보라보라 향초를 다시 만들 수 있는걸까?'
},
{
id: 'tr_pet42',
name: '반딧불이의 단단한 피스타치오 껍질',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 광속질주시 모든 젤리 100~200점 추가',
method: '반딧불이 레벨 8 달성시 획득',
description: '껍질이 적당히 열려있어야 아름다운 빛을 낼 수 있다.'
},
{
id: 'tr_pet43',
name: '젤리저울의 젤리를 담은 접시',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 기본속도 3~4% 증가\n강화 수치에 따라 모든 젤리 10~20점 추가',
method: '젤리저울 레벨 8 달성시 획득',
description: '엿 바꿔 먹지말고 젤리 바꿔 먹어요!'
},
{
id: 'tr_pet44',
name: '코인저울의 코인을 담은 접시',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 2~5% 확률로 코인꽃 생성',
method: '코인저울 레벨 8 달성시 획득',
description: '이 정도라면 먹지 않아도 배가 부른 느낌!'
},
{
id: 'tr_pet45',
name: '참나무 주스통의 나무꼭지',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 기본속도 3~4% 증가\n강화 수치에 따라 충돌 피해 6~10% 감소',
method: '참나무 주스통 레벨 8 달성시 획득',
description: '적당량의 포도주스를 따라 마시기 위해 필요하다.'
},
{
id: 'tr_pet46',
name: '토끼사과의 엄마사과',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 기본속도 3~4% 증가\n강화 수치에 따라 이어달리기시 체력 10~40 증가',
method: '토끼사과 레벨 8 달성시 획득',
description: '토끼같은 자식을 위해 자신의 한쪽을 내어준 고마운 엄마사과의 은혜를 잊으면 안된다.'
},
{
id: 'tr_pet47',
name: '치즈뭉치 고양이의 치즈 헤어볼',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력감소 2~4% 느림\n강화 수치에 따라 코인 6~8% 보너스',
method: '치즈뭉치 고양이 레벨 8 달성시 획득',
description: '구석진 곳에서 발견할 수 있으며, 무심코 버려서는 안되는 가치있는 물건이다.'
},
{
id: 'tr_pet48',
name: '배낭이의 하트 열쇠고리',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 모든 곰젤리 300~500점 추가',
method: '배낭이 레벨 8 달성시 획득',
description: '배낭이가 늘 차고 다니는 열쇠고리. 이걸 보고도 곰젤리가 가만히 있을 수 있을까?'
},
{
id: 'tr_pet49',
name: '초코왕방울의 왕젤리 왕관',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 출석시 15~60% 확률로 크리스탈 1개 획득',
method: '초코 왕방울 레벨 8 달성시 획득',
description: '빛나는 왕가의 추억이 어린 왕관. 언젠가부터 머리를 꽉 조여오기 시작했다.',
hasPassiveTag: true
},
{
id: 'tr_pet50',
name: '조각레몬의 상큼한 한조각',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력회복량 3~5% 증가\n강화 수치에 따라 장애물 파괴시 3300~6000점 추가',
method: '조각레몬 레벨 8 달성시 획득',
description: '소다에 빠지면 매우 섭섭하다. 맛도 기분도 상큼하게 채워주는 한조각!'
},
{
id: 'tr_pet51',
name: '집사 유령의 스케줄러',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력회복량 3~5% 증가\n강화 수치에 따라 아이템 시간 5~10% 연장',
method: '집사 유령 레벨 8 달성시 획득',
description: '섣불리 열지 말자. 스케줄러를 넘기는 순간 이미 일을 하고 있는 자신을 발견하게 된다.'
},
{
id: 'tr_pet52',
name: '키위새의 키위 한 조각',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 거대화시 모든 젤리 100~300점 추가\n거대화시 기본속도 5% 증가',
method: '키위새 레벨 8 달성시 획득',
description: '케이크면 케이크, 빙수면 빙수. 알고보면 어디에나 어울려 상큼함을 더해 좋아할 수 밖에 없는 한 조각.'
},
{
id: 'tr_pet53',
name: '털뭉치 멍뭉이의 뼈다귀 비스킷',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 출석시 25~50% 확률로 마법가루 150개 획득',
method: '털뭉치 멍뭉이 레벨 8 달성시 획득',
description: '털뭉치 멍뭉이가 어디선가 물어온 간식.\n아껴먹으며 심심할 때마다 한 번씩 핥는다니 아주 조금씩 조금씩 닳고 있는 것 같다.',
hasPassiveTag: true
},
{
id: 'tr_pet54',
name: '파프리카 샌드백의 황금씨앗',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 3~4% 확률로 코인꽃 생성\n강화 수치에 따라 코인 4~6% 보너스',
method: '파프리카 샌드백 레벨 8 달성시 획득',
description: '파프리카 샌드백을 칠때마다 조금씩 흘러나오는 씨앗. 나도 모르게 더 열심히 수련하게 된다.'
},
{
id: 'tr_pet56',
name: '마시멜로 햄찌의 초코 해바라기씨',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 생명물약 획득시 광속질주 0.3~0.8초',
method: '마시멜로 햄찌 레벨 8 달성시 획득',
description: '안 그래도 맛있는 해바라기씨를 풍미가 풍부한 초콜렛으로 코팅했다! 햄찌는 한 번에 스무 개까지 입에 넣을 수 있다고!'
},
{
id: 'tr_pet57',
name: '미스 도레미의 깜찍 리본',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 색동젤리 200~300점 추가\n강화 수치에 따라 체력회복량 3~5% 증가',
method: '미스 도레미 레벨 8 달성시 획득',
description: '장인이 특별히 한 땀 한 땀 제작했다! 왠지 더 나은 음을 잘 낼 수 있을 것 같은 느낌!'
},
{
id: 'tr_pet58',
name: '미스터 파솔라시의 신사 모자',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력 10~20으로 부활 2회\n강화 수치에 따라 코인 3~5% 보너스',
method: '미스터 파솔라시 레벨 8 달성시 획득',
description: '장인이 특별히 한 땀 한 땀 제작했다! 왠지 더 높은 음을 잘 낼 수 있을 것 같은 느낌!'
},
{
id: 'tr_pet59',
name: '도토리 부엉이의 꽁다리 모자',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 노란곰젤리 100~300점 추가',
method: '도토리 부엉이 레벨 8 달성시 획득',
description: '꽁다리를 잡고 모자를 확 벗겨보고 싶지만 혼이 날 것 같다.'
},
{
id: 'tr_pet60',
name: '미니 잭슨 2호의 알록달록 나사',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 그믐달젤리 300~800점 추가',
method: '미니 잭슨 2호 레벨 8 달성시 획득',
description: '1호와 달리 2호의 수리가 성공할 수 있었던 이유는 바로 이 나사의 발견 덕분이다. 이 나사의 비밀을 미리 알았더라면...'
},
{
id: 'tr_pet61',
name: '홍차 찻잔의 벚꽃 티스푼',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 40~60% 확률로 곰젤리파티에 분홍곰젤리 출현',
method: '홍차 찻잔 레벨 8 달성시 획득',
description: '피크닉 가서 홍차를 마실 땐, 이 티스푼이 필수다.\n살포시 저으면 벚꽃향이 홍차에 녹아들어간다나.'
},
{
id: 'tr_pet62',
name: '방울방울 콩콩이의 폭풍콩콩탄',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 5~7% 확률로 젤리콩 미사일이 떨어짐',
method: '방울방울 콩콩이 레벨 8 달성시 획득',
description: '작은콩의 매운맛을 보여주마, 폭풍저격 콩콩탄이 간다!'
},
{
id: 'tr_pet63',
name: '레몬 전지의 레몬빛깔 LED',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 광속질주 속도 5~10% 증가\n강화 수치에 따라 노란곰젤리 300~400점 추가',
method: '레몬 전지 레벨 8 달성시 획득',
description: '강력한 빛을 내는 상큼한 LED. 불이 켜질 때 상큼 달콤한 향까지 난다면 믿겠는가.'
},
{
id: 'tr_pet64',
name: '어린쥐의 오렌지껍질 쳇바퀴',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 광속질주시 체력감소 10~15% 느림',
method: '어린쥐 레벨 8 달성시 획득',
description: '언젠가는 이 길 끝에 도달할 수 있다고 믿는 눈치다.'
},
{
id: 'tr_pet65',
name: '백금방울의 삐까뻔쩍 백금바',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 코인 8~13% 보너스',
method: '백금방울 레벨 8 달성시 획득',
description: '차곡차곡 모은 백금코인을 마법의 오븐에서 엄청난 고열로 녹여 삐까뻔쩍하게 만들었다!'
},
{
id: 'tr_pet66',
name: '미스터 삑의 탱탱한 구명튜브',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 구출/부활(체력 10~20) 총 3회',
method: '미스터 삑 레벨 8 달성시 획득',
description: '위급 시 언제든지 사용할 수 있도록 항상 탱탱하게 관리되고 있다.'
},
{
id: 'tr_pet67',
name: '종이배 선원의 종이로 접은 닻',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 바다거품젤리 300~500점 추가',
method: '종이배 선원 레벨 8 달성시 획득',
description: '종이배가 떠내려가지 않도록 하기 위해 만들어준 닻. 하지만 가벼워서 같이 떠내려가 버리는 건 아닐까?'
},
{
id: 'tr_pet68',
name: '파도방울의 소중한 미니산호',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 20~30% 확률로 얼음다리 생성\n강화 수치에 따라 구출/부활(체력 38) 총 2~4회',
method: '파도방울 레벨 8 달성시 획득',
description: '아무도 없는 얼음파도의 탑 꼭대기에서 파도방울의 유일한 친구가 되어주었던 작은 산호.'
},
{
id: 'tr_pet69',
name: '판다 만두의 갓 나온 죽순',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 대나무잎 젤리 1000~1500점 추가',
method: '판다 만두 레벨 8 달성시 획득',
description: '판다 만두가 가장 좋아하는 간식. 야금야금 먹고 있는 모습을 보면 너무 귀여워서 깨물어주고 싶다.'
},
{
id: 'tr_pet70',
name: '식지 않는 찻잔의 황금대추 티백',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 장애물 파괴시 20~60% 확률로 날개 달린 코인 생성',
method: '식지 않는 찻잔 레벨 8 달성시 획득',
description: '100번을 우려먹어도 그 맛이 유지되는 훌륭한 황금대추차. 마시기도 전에 고풍스러운 향이 온몸을 감싼다.'
},
{
id: 'tr_pet71',
name: '양파 물고기의 양파 비늘 한 겹',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 눈물 젤리 500~1000점 추가',
method: '양파 물고기 레벨 8 달성시 획득',
description: '반질반질한 비늘 한 겹! 벗겨도 벗겨도 계속 나온다고 한다.'
},
{
id: 'tr_pet72',
name: '캐스터네츠의 마카롱 메트로놈',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력회복량 4~6% 증가\n강화 수치에 따라 구멍에 빠진 쿠키를 1~2회 구출',
method: '캐스터네츠 레벨 8 달성시 획득',
description: '캐스터네츠가 연습할 때면 언제나 곁에 두고 박자를 맞춘다. 가만히 보고 있으면 잠이 들 수 있으니 조심.'
},
{
id: 'tr_pet73',
name: '시나몬롤 토끼의 시나몬 스틱',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 시나몬롤 젤리 500~1000점 추가',
method: '시나몬롤 토끼 레벨 8 달성시 획득',
description: '시나몬롤 토끼의 표정이 유일하게 밝아질 때가 바로 이 시나몬 스틱을 오물거릴 때라고 한다.'
},
{
id: 'tr_pet74',
name: '찹쌀 하프물범의 단팥 통조림',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 모든 젤리 40~90점 추가',
method: '찹쌀 하프물범 레벨 8 달성시 획득',
description: '찹쌀 하프물범이 항상 소중히 보관하고 있는 단팥 통조림. 통조림 따개가 없어서 먹을 수 없다...'
},
{
id: 'tr_pet75',
name: '회중시계 심판의 오래된 시계 덮개',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 광속질주 속도 5~10% 증가\n강화 수치에 따라 광속질주시 모든 젤리 100~300점 추가',
method: '회중시계 심판 레벨 8 달성시 획득',
description: '눈을 부릅뜨고 정확히 보아야 하는 것이 있고, 눈을 덮고 마음으로 보아야 하는 것이 있다고 한다.'
},
{
id: 'tr_pet76',
name: '허브티팟의 대용량 샤워헤드',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 2~5% 확률로 코인꽃 생성',
method: '허브티팟 레벨 8 달성시 획득',
description: '이것만 장착하면 완벽하게 물뿌리개로 변신! 물을 흠뻑 맞은 화초들의 꺄르륵 소리가 들리는 듯하다.'
},
{
id: 'tr_pet77',
name: '팝핑 용알의 엑스레이 사진',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 거대화시 모든 젤리 100~300점 추가',
method: '팝핑 용알 레벨 8 달성시 획득',
description: '자신이 누군지 잊지 않기 위해 팝핑 용알이 꼭 가지고 다닌다.'
},
{
id: 'tr_pet78',
name: '솜사탕 비둘기의 묵직한 집배원 가방',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 보너스타임 속도 5~10% 증가',
method: '솜사탕 비둘기 레벨 8 달성시 획득',
description: '소중한 마음들로 가득 찬 가방. 하트 스티커가 붙은 편지만 취급한다.'
},
{
id: 'tr_pet79',
name: '라이트 형제의 막내 노랑이',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 광속질주시 모든 젤리 100~200점 추가\n강화 수치에 따라 체력감소 2~3% 느림',
method: '라이트형제 레벨 8 달성시 획득',
description: '롤케이크맛 쿠키가 과격한 운전을 할 때마다 컨트롤을 위해 함께 활동한다. 합체!'
},
{
id: 'tr_pet80',
name: '사바나나 사자의 뚝떨어진 꼬리',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력 30~40으로 부활\n강화 수치에 따라 장애물 파괴시 1~4코인 획득',
method: '사바나나 사자 레벨 8 달성시 획득',
description: '몸통분리 묘기로 사바나나사자 몸에서 떨어져 나왔는데 제자리를 찾지 못하고 있다.'
},
{
id: 'tr_pet81',
name: '팬케이크 원반의 끈적한 메이플 시럽',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 메이플시럽 젤리 500~1000점 추가',
method: '팬케이크 원반 레벨 8 달성시 획득',
description: '원반 케이크의 멋스러움을 빛내줄 소중한 메이플 시럽. 무더위 속에서도 쉽게 흘러내리지 않는다!'
},
{
id: 'tr_pet82',
name: '달절구의 완벽한 초승달떡',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 보름달떡젤리 획득시 광속질주 0.3~0.8초\n강화 수치에 따라 체력 10~20으로 2회 부활',
method: '달절구 레벨 8 달성시 획득',
description: '무언가를 이해하려면, 대상의 변화와 여러 가지 모습까지도 이해해야 한다는 게 달절구의 지론이다.'
},
{
id: 'tr_pet83',
name: '작은 케이크들개 전용 컵케이크',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 출석시 1~11% 확률로 크리스탈 11개 획득',
method: '작은 케이크들개 레벨 8 달성시 획득',
description: '작지만 생크림에 딸기, 리본까지 있을 건 다 있는 케이크들개 전용 컵케이크! 강아지들도 먹을 수 있는 재료들이니 안심하라구~!',
hasPassiveTag: true
},
{
id: 'tr_pet84',
name: '꼬마북의 달콤 북채',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 꿀빵젤리 600~1500점추가',
method: '꼬마북 레벨 8 달성시 획득',
description: '어떤 장단이든 더 흥겹게 만들어 준다. 열심히 북을 칠수록 달콤한 향기가 뿜어져 나온다!'
},
{
id: 'tr_pet85',
name: '앵무할아범의 깃털로 만든 부채',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 기본속도 2~4% 증가\n강화 수치에 따라 체력 40~60으로 부활',
method: '앵무할아범 레벨 8 달성시 획득',
description: '앵무 할아범의 깃털로 한 땀 한 땀 만들어\n자부심이 가득한 부채. 평소보다 강한 바람을 타고\n달릴 수 있을 것 같다!'
},
{
id: 'tr_pet87',
name: '말랑 에그버니의 말랑 바구니 침대',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 모든 젤리 10~30점 추가\n강화 수치에 따라 구출/부활(체력 10~20) 총\n2~3회',
method: '말랑 에그버니 레벨 8 달성시 획득',
description: '달콤하고 말랑말랑한 마시멜로 쿠션이 가득한\n바구니 침대. 말랑 에그버니의 달걀 껍데기가 깨질\n염려 없이 편히 잠들 수 있다!'
},
{
id: 'tr_pet89',
name: '오이푸딩 개구리의 리사이클 낚시가방',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 개구리밥 젤리 1500~6000점\n추가\n강화 수치에 따라 체력 30~65로 부활',
method: '오이푸딩 개구리 레벨 8 달성시 획득',
description: '낚시터 근처에서 주운 통을 깨끗하게 씻어 만든\n낚시 가방. 오이맛 쿠키가 잡은 물고기를\n담아둔다고...'
},
{
id: 'tr_pet90',
name: '흑돌 흑미 선생의 옥빛 바둑알 보관함',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 흑돌 젤리 300~3500점 추가\n강화 수치에 따라 체력회복량 4~6% 증가',
method: '흑돌 흑미 선생 레벨 8 달성시 획득',
description: '중요한 대국에만 꺼낸다는 흑돌 보관함. 정성껏\n닦아 하나하나 빛나는 돌에서 누군가의 바둑\n철학이 느껴진다.'
},
{
id: 'tr_pet91',
name: '백돌 백미 선생의 포크숟가락 효자손',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 백돌 젤리 300~3500점 추가\n강화 수치에 따라 체력 30~65로 부활',
method: '백돌 백미 선생 레벨 8 달성시 획득',
description: '떠먹을 때, 찍어 먹을 때, 가려운 곳을 긁을 때 모두\n사용할 수 있다니, 대단한걸? 느긋한 이의 지혜가\n듬뿍 담겼다!'
},
{
id: 'tr_pet92',
name: '용마 인형의 황금보리짚단',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 구출/부활(체력 15~25) 총 3회',
method: '용마 인형 레벨 8 달성시 획득',
description: '용마 인형을 위해 낟알이 튼튼한 짚만을 고르고\n고른 황금보리짚단. 어떤 바람에도 쉬이 흩어지지\n않는다!'
},
{
id: 'tr_pet93',
name: '꿀떡 영혼의 우유 목욕탕',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 눈물 젤리 700~1600점 추가\n강화 수치에 따라 체력감소 4~5% 느림',
method: '꿀떡 영혼 레벨 8 달성시 획득',
description: '꿀떡 영혼의 데인 상처를 치유해주는 우유 목욕탕'
},
{
id: 'tr_pet94',
name: '다사라 빵의 신선 빵 클립',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 거대화시 기본속도 5~8% 증가\n강화 수치에 따라 거대화시 10~60% 확률로 은화를 금화로 변환 (변경 최대 개수 제한 있음)',
method: '다사라 빵 레벨 8 달성시 획득',
description: '언제나 피부에 윤기가 흐르는 다사라빵의 비결이 이 클립에 담겨있다고? 빵의 신선함을 위한 필수템이다.'
},
{
id: 'tr_pet95',
name: '벌레무당의 톡 쏘는 쌀 주스',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 장애물 파괴시 5300~8000점 추가\n초미니자력',
method: '벌레무당 레벨 8 달성시 획득',
description: '벌레무당이 열심히 날아다니며 모은 쌀알로 직접 담근 쌀 주스. 일하느라 파김치가 되어버린 쿠키들도 살려내는, 톡 쏘는 시원한 맛이 일품!'
},
{
id: 'tr_pet96',
name: '깍두기방울의 하얀 곱깔 배추모자',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 장애물 통과시 3300~6000점 추가\n초미니자력',
method: '깍두기방울 레벨 8 달성시 획득',
description: '무엇이든 정화할 수 있을 것 같은 하얀 빛이 도는, 백김치맛 쿠키가 만들어준 소담한 매력의 알배추 고깔. 너무 소중해서 쓰지 못하고 고이 접어두고 있다.'
},
{
id: 'tr_pet97',
name: '런중일기의 바다 먹물 붓',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 노란곰젤리 300~400점 추가\n초미니자력',
method: '런중일기 레벨 8 달성시 획득',
description: '100일 동안 돌김 바다에 잠재워 굳센 탄력을 자랑하는 붓. 검은 파도의 힘이 깃들어, 휘몰아치는 바닷바람 위에서도 흐트러지지 않는 글씨를 쓸 수 있도록 해준다.'
},
{
id: 'tr_pet98',
name: '망개잎 달팽이의 이슬방울 간식',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 이슬젤리 1000~2000점 추가\n초미니자력',
method: '망개잎 달팽이 레벨 8 달성시 획득',
description: '아주 맑은 아침 이슬 세 방울에 달팽이 크림 한 스푼을 더하고, 선선한 산들바람까지 불어야 만들 수 있는 망개잎 달팽이의 이슬 간식. 상쾌하고 담백한 맛이 일품이지만, 지금까지 망개잎\n달팽이의 이슬 간식을 먹어 본 쿠키는 오직 망개떡맛 쿠키뿐!'
},
{
id: 'tr_ga001',
name: '연기의 비법이 담긴 마법책',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 초급 미니 연기점수 추가',
method: '최고급 보물 상자에서 획득',
description: '베개로 사용하기 좋은 두께지만, 그러기엔 아까운\n비법이 담긴 마법책.'
},
{
id: 'tr_ga002',
name: '500년 묵은 인삼',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 노란곰젤리 300~500점 추가',
method: '최고급 보물 상자에서 획득',
description: '500년은 되어야 아, 이제 젤리좀 먹겠구나~ 할 수\n있는 인삼이 됨.'
},
{
id: 'tr_ga004',
name: '레어 크리스탈 사파이어',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 출석시 5~50% 확률로 크리스탈\n2개 획득',
method: '최고급 보물 상자에서 획득',
description: '쿠키라면 누구나 탐내는 영롱한 푸른 빛!',
hasPassiveTag: true
},
{
id: 'tr_ga005',
name: '자루만 남은 검',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 출석시 5~50% 확률로 3,000\n코인 획득',
method: '최고급 보물 상자에서 획득',
description: '검에 흠집 좀 났다고 전투가 치열했다고 말 할 수\n있겠어?',
hasPassiveTag: true
},
{
id: 'tr_ga006',
name: '젤리가 되기 전의 핑크곰',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 출석시 5~50% 확률로\n선물포인트 200점 획득',
method: '최고급 보물 상자에서 획득',
description: '쿠키들이 가장 좋아하는 핑크 곰젤리의 원형!',
hasPassiveTag: true
},
{
id: 'tr_ga007',
name: '신비로운 빛을 내는 운석',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 곰젤리파티 시간 10~15% 연장',
method: '고급 또는 최고급 보물 상자에서 획득',
description: '떨어진 후 차갑게 식었지만 신비로운 빛이 영영\n사라지지 않는 귀한 운석.'
},
{
id: 'tr_ga008',
name: '승리의 한복판에 서 있던 체스말',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 알파벳젤리 100~300점 추가',
method: '고급 또는 최고급 보물 상자에서 획득',
description: '체크메이트를 10,000회 달성했다는 전설의\n체스말.'
},
{
id: 'tr_ga009',
name: '특히 더 달콤한 딸기잼',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 분홍곰젤리 100~300점 추가',
method: '고급 또는 최고급 보물 상자에서 획득',
description: '쿠키 뿐 아니라 모든 과자류가 좋아하는 달콤한\n딸기잼.'
},
{
id: 'tr_ga010',
name: '다크 초코잼 헤어무스',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 노란곰젤리 50~100점 추가',
method: '고급 또는 최고급 보물 상자에서 획득',
description: '대부분의 쿠키들이 헤어스타일을 연출하기 위해\n사용한다.'
},
{
id: 'tr_ga011',
name: '특수 방수 손목시계',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 보너스타임 0.5~1초 연장',
method: '고급 또는 최고급 보물 상자에서 획득',
description: '습기를 싫어하는 쿠키들에게 방수는 필수다.'
},
{
id: 'tr_ga012',
name: '의문의 쿠키주스 병뚜껑',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 코인 3~5% 보너스',
method: '고급 또는 최고급 보물 상자에서 획득',
description: '그냥 버리는 보통의 병뚜껑과는 다른 특별한\n병뚜껑. 주스는 어떤 맛이었을까.'
},
{
id: 'tr_ga013',
name: '진주 크리스탈 귀걸이',
rarity: 'A',
canEvolve: false,
effect: '강화 수치에 따라 출석시 5~50% 확률로 크리스탈\n1개 획득',
method: '고급 또는 최고급 보물 상자에서 획득',
description: '진주와 크리스탈의 중간쯤되는 빛깔의 아름다운\n귀걸이.',
hasPassiveTag: true
},
{
id: 'tr_ga014',
name: '활활 타오르는 순간의 해조각',
rarity: 'A',
canEvolve: false,
effect: '강화 수치에 따라 출석시 5~50% 확률로 1,500\n코인 획득',
method: '고급 또는 최고급 보물 상자에서 획득',
description: '시간의 속성과 온도의 속성을 동시에 지닌 엄청난\n조각. 가지고 있으면 좋은일이 생길 것 같다.',
hasPassiveTag: true
},
{
id: 'tr_ga015',
name: '선물 포장용 고급 리본',
rarity: 'A',
canEvolve: false,
effect: '강화 수치에 따라 출석시 5~50% 확률로\n선물포인트 100점을 획득',
method: '고급 또는 최고급 보물 상자에서 획득',
description: '몸도 마음도 풍성해지는 고급 리본으로, 어느\n선물에 묶어도 고급스러워지는 느낌이다.',
hasPassiveTag: true
},
{
id: 'tr_ga016',
name: '바다빛깔 뿔소라 껍데기',
rarity: 'B',
canEvolve: true,
effect: '강화 수치에 따라 은화 획득시 20~30점 추가',
method: '일반 또는 고급 보물 상자에서 획득',
description: '바다의 푸른색이 흠뻑 물들 때까지 오랜 시간동안\n깊은 바닷속에서 살던 뿔소라의 껍데기.'
},
{
id: 'tr_ga017',
name: '활짝 웃는 얼굴 가면',
rarity: 'B',
canEvolve: true,
effect: '강화 수치에 따라 경험치 2~7% 보너스',
method: '일반 또는 고급 보물 상자에서 획득',
description: '자신의 기분을 들키고 싶지 않을 때 유용하게\n사용할 수 있는 가면.'
},
{
id: 'tr_ga018',
name: '유명한 초코칩 쿠키',
rarity: 'B',
canEvolve: true,
effect: '강화 수치에 따라 노란곰젤리 20~70점 추가',
method: '일반 또는 고급 보물 상자에서 획득',
description: '누구나 알고 있는 너무나도 유명한 초코칩 쿠키.'
},
{
id: 'tr_ga019',
name: '활력 비타민 C 알약',
rarity: 'B',
canEvolve: true,
effect: '강화 수치에 따라 광속질주 속도 5~10% 증가',
method: '일반 또는 고급 보물 상자에서 획득',
description: '한 알이면 쿠키들의 비타민 C 하루치 권장량을\n보충할 수 있는 알약.'
},
{
id: 'tr_ga020',
name: '영양만점 크랜베리',
rarity: 'B',
canEvolve: true,
effect: '강화 수치에 따라 분홍곰젤리 50~150점 추가',
method: '일반 또는 고급 보물 상자에서 획득',
description: '블루베리만큼이나 쿠키들이 좋아하는 과일로\n영양가가 높다.'
},
{
id: 'tr_ga021',
name: '털털한 발모제 크림형',
rarity: 'B',
canEvolve: true,
effect: '강화 수치에 따라 금화 획득시 100~120점 추가',
method: '일반 또는 고급 보물 상자에서 획득',
description: '공짜를 좋아해서 벗겨진 머리칼엔 털털한\n발모크림.'
},
{
id: 'tr_ga022',
name: '고양이 발바닥 마시멜로',
rarity: 'B',
canEvolve: true,
effect: '강화 수치에 따라 알파벳젤리 50~150점 추가',
method: '일반 또는 고급 보물 상자에서 획득',
description: '실제 고양이 발바닥만큼이나 부드럽고 기분좋은\n마시멜로.'
},
{
id: 'tr_ga023',
name: '처음 수확한 올리브 오일',
rarity: 'B',
canEvolve: true,
effect: '강화 수치에 따라 기본속도 2~4% 증가',
method: '일반 또는 고급 보물 상자에서 획득',
description: '쿠키들에게 무척 유용하다. 슬라이드할 때 잘\n미끄러지기 때문만은 아니다.'
},
{
id: 'tr_ga024',
name: '긴박한 순간에 유용한 구급상자',
rarity: 'B',
canEvolve: false,
effect: '강화 수치에 따라 출석시 4~22% 확률로\n이어달리기 1개 획득',
method: '일반 또는 고급 보물 상자에서 획득',
description: '구급상자가 있다면 체력이 다해 쓰러지더라도\n당황하지 않아도 된다.',
hasPassiveTag: true
},
{
id: 'tr_ga025',
name: '과자집 지붕 장식용 바람개비',
rarity: 'B',
canEvolve: false,
effect: '강화 수치에 따라 출석시 4~22% 확률로\n빠른스타트 1개 획득',
method: '일반 또는 고급 보물 상자에서 획득',
description: '이웃 마녀가 지어 놓고 아이들을 유혹한다는\n과자집의 지붕 꼭대기 장식.',
hasPassiveTag: true
},
{
id: 'tr_ga026',
name: '의문의 재료로 만든 소시지',
rarity: 'B',
canEvolve: false,
effect: '강화 수치에 따라 출석시 4~22% 확률로 체력강화\n1개 획득',
method: '일반 또는 고급 보물 상자에서 획득',
description: '마녀의 화덕에서 발견된 소시지인데, 박쥐의\n간으로 만든 것이라는 소문이 있다.',
hasPassiveTag: true
},
{
id: 'tr_ga027',
name: '행운의 다섯잎 클로버',
rarity: 'B',
canEvolve: false,
effect: '강화 수치에 따라 출석시 4~22% 확률로\n아이템시간연장 1개 획득',
method: '일반 또는 고급 보물 상자에서 획득',
description: '쿠키들 사이에서 네잎 정도로는 행운이라고\n이야기할 수 없다.',
hasPassiveTag: true
},
{
id: 'tr_ga028',
name: '푸른붉은 용의 이빨',
rarity: 'B',
canEvolve: false,
effect: '강화 수치에 따라 출석시 4~22% 확률로 경험치\n2배 1개 획득',
method: '일반 또는 고급 보물 상자에서 획득',
description: '용의 꼬리, 얼굴비늘과 함께 중요하게 다뤄지는\n용사의 전리품.',
hasPassiveTag: true
},
{
id: 'tr_ga029',
name: '갓 구운 크래커',
rarity: 'C',
canEvolve: true,
effect: '강화 수치에 따라 체력이 5~15 증가',
method: '일반 보물 상자에서 획득',
description: '쿠키들의 좋은 간식 중에 하나.'
},
{
id: 'tr_ga030',
name: '흙으로 빚은 화살촉',
rarity: 'C',
canEvolve: true,
effect: '강화 수치에 따라 은화 획득시 10~20점 추가',
method: '일반 보물 상자에서 획득',
description: '오랜 옛날 전투에서 사용되었던 화살촉으로,\n지금은 무뎌졌지만 한때는 최고의 무기였다.'
},
{
id: 'tr_ga031',
name: '빛나는 빨간 체리',
rarity: 'C',
canEvolve: true,
effect: '강화 수치에 따라 분홍곰젤리 25~70점 추가',
method: '일반 보물 상자에서 획득',
description: '쿠키들을 장식할 때 쓰기 좋은 재료로, 새빨갛고 광택이 잘 나는 것이 좋다.'
},
{
id: 'tr_ga032',
name: '마녀가 깔아놓았던 압정',
rarity: 'C',
canEvolve: true,
effect: '강화 수치에 따라 자석 시간 10~20% 연장',
method: '일반 보물 상자에서 획득',
description: '자석을 사용하는 법을 알기 전에는 쿠키들이 많이 다쳤다는 소문이 있다.'
},
{
id: 'tr_ga033',
name: '풍년에 수확한 밀',
rarity: 'C',
canEvolve: true,
effect: '강화 수치에 따라 금화 획득시 50~70점 추가',
method: '일반 보물 상자에서 획득',
description: '쿠키의 원료인 밀가루의 원료이니 쿠키들에겐 할아버지뻘 된다.'
},
{
id: 'tr_ga034',
name: '언제봐도 귀여운 도토리',
rarity: 'C',
canEvolve: true,
effect: '강화 수치에 따라 보너스타임 0.3~0.8초 연장',
method: '일반 보물 상자에서 획득',
description: '모자를 벗겨보고 싶은 귀여운 도토리.'
},
{
id: 'tr_ga035',
name: '누런색 유기농 밀가루',
rarity: 'C',
canEvolve: true,
effect: '강화 수치에 따라 알파벳젤리 25~70점 추가',
method: '일반 보물 상자에서 획득',
description: '모든 쿠키의 원료인 밀가루. 흰색보단 누런색이 고급이다.'
},
{
id: 'tr_ga036',
name: '잘 볶은 신선한 땅콩',
rarity: 'C',
canEvolve: true,
effect: '강화 수치에 따라 노란곰젤리 10~60점 추가',
method: '일반 보물 상자에서 획득',
description: '잘 볶아야만 껍질도 잘 까지고 향과 맛도 좋은 땅콩을 얻을 수 있다.'
},
{
id: 'tr_ga037',
name: '바톤터치용 당근',
rarity: 'C',
canEvolve: false,
effect: '강화 수치에 따라 출석시 2~11% 확률로 이어달리기 1개 획득',
method: '일반 보물 상자에서 획득',
description: '바톤터치용 당근이 있으면 이어달리기를 할 수 있을 것 같은 기분이다.',
hasPassiveTag: true
},
{
id: 'tr_ga038',
name: '포장이 벗겨진 각설탕',
rarity: 'C',
canEvolve: false,
effect: '강화 수치에 따라 출석시 2~11% 확률로 빠른스타트 1개 획득',
method: '일반 보물 상자에서 획득',
description: '포장을 벗기는 재미가 있는 각설탕은 쿠키만큼이나 습기에 취약하니 주의해야 한다.',
hasPassiveTag: true
},
{
id: 'tr_ga039',
name: '씨를 발라 절인 올리브',
rarity: 'C',
canEvolve: false,
effect: '강화 수치에 따라 출석시 2~11% 확률로 체력강화 1개 획득',
method: '일반 보물 상자에서 획득',
description: '마녀는 올리브 절임을 만들때 올리브 속에 특별한 재료를 채워 넣는다.',
hasPassiveTag: true
},
{
id: 'tr_ga040',
name: '머리가 좋아지는 호두',
rarity: 'C',
canEvolve: false,
effect: '강화 수치에 따라 출석시 2~11% 확률로 아이템시간연장 1개 획득',
method: '일반 보물 상자에서 획득',
description: '브레인껌은 IQ에 도움이 되지 않지만 호두는 도움이 된다!',
hasPassiveTag: true
},
{
id: 'tr_ga041',
name: '큰머리 송이송이 버섯',
rarity: 'C',
canEvolve: false,
effect: '강화 수치에 따라 출석시 2~11% 확률로 경험치 2배 1개 획득',
method: '일반 보물 상자에서 획득',
description: '마녀의 숲 어디에서나 오묘한 냄새가 풍기는 곳을 따라가 보면 어김없이 발견된다.',
hasPassiveTag: true
},
{
id: 'tr_ga042',
name: '쿠키박스720 컨트롤러',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 미니 자력 강화',
method: '최고급 보물 상자에서 획득',
description: '쿠키들의 무료함을 달래줄 달리기 게임 전용 컨트롤러.'
},
{
id: 'tr_ga043',
name: '마블링 코믹스 스페셜 에디션',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 경험치 10~15% 보너스',
method: '최고급 보물 상자에서 획득',
description: '슈퍼영웅 쿠키들의 이야기가 잔뜩 들어있는 코믹북 특별 한정판!'
},
{
id: 'tr_ga044',
name: '1000년 묵은 홍삼',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 분홍곰젤리 200~600점 추가',
method: '최고급 보물 상자에서 획득',
description: '990년 묵은 인삼을 찌고 말려 10년간 공들여 만든 쿠키들의 최고급 피로회복 명약!'
},
{
id: 'tr_ga045',
name: '마카롱 소고기 버거',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 아이템 시간 5~7% 연장',
method: '고급 또는 최고급 보물 상자에서 획득',
description: '마녀의 독특한 레시피로 마카롱에 소고기 패티를 넣어 달콤하면서도 육즙 가득한 맛.'
},
{
id: 'tr_ga046',
name: '파.괴.신의 뿅망치',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 장애물 파괴시 5300~8000점 추가',
method: '고급 또는 최고급 보물 상자에서 획득',
description: '한번 내리치면 지지직 하고 번개가 일면서 뭐든지 파괴된다고 한다.'
},
{
id: 'tr_ga047',
name: '인생맛 아이스크림',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 경험치 5~10% 보너스',
method: '고급 또는 최고급 보물 상자에서 획득',
description: '언제나 달콤하지만은 않다. 순간 순간 느껴지는 짧은 단맛도 소중히 해야함.'
},
{
id: 'tr_ga048',
name: '언제나 배고픈 돼지 저금통',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 은화 획득시 40~60점 추가',
method: '고급 또는 최고급 보물 상자에서 획득',
description: '항상 다이어트 중인데 살은 언제 찐건지 알 수 없다.'
},
{
id: 'tr_ga049',
name: '까칠한 감독님의 클립보드',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 초급 어린이 연기점수 추가',
method: '고급 또는 최고급 보물 상자에서 획득',
description: 'NG 없이 절묘한 연기를 이끌어내는 감독님의 절친 클립보드.'
},
{
id: 'tr_ga050',
name: '파티에서 도망친 피냐타',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 광속질주 속도 5~10% 증가',
method: '고급 또는 최고급 보물 상자에서 획득',
description: '멕시코에서 왔다고 생각하는 사람들이 많지만, 사실은 제주도 출신이다.'
},
{
id: 'tr_ga051',
name: '보물 상인의 미니금고',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 코인 7~12% 보너스',
method: '최고급 보물 상자에서 획득',
description: '크기는 작지만 어마어마한 양의 보물을 보관할 수 있다고 한다.'
},
{
id: 'tr_ga052',
name: '뷰티풀 샤이닝 립스틱 3호 캔디핑크',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 별사탕젤리 300~500점 추가',
method: '최고급 보물 상자에서 획득',
description: '최고의 아름다움으로 무장하자.'
},
{
id: 'tr_ga053',
name: '드디어 발견한 자연산 산삼',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 모든 곰젤리 200~400점 추가',
method: '최고급 보물 상자에서 획득',
description: '심봤다~! 정말 오랫동안 찾아다닌 바로 그 산삼!'
},
{
id: 'tr_ga054',
name: '강호의 야생 옥수수',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 2단점프부터 1000~1500점 추가',
method: '최고급 보물 상자에서 획득',
description: '산 속에서 도를 닦는 쿠키들에게 특별한 에너지를 공급하는 야생 옥수수.'
},
{
id: 'tr_ga055',
name: '템테이션 NO.9 오 드 퍼퓸',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 거대화시 모든 젤리 100~300점 추가',
method: '최고급 보물 상자에서 획득',
description: '쿠키들의 매력을 극대화시켜주는 향수. 꿀과 과일 향기로 곰젤리에게 치명적 유혹.'
},
{
id: 'tr_ga056',
name: '돌로 만든 핫도그',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 장애물 파괴시 9300~12000점 추가',
method: '최고급 보물 상자에서 획득',
description: '이걸 씹어먹을 수 있다면 장애물쯤이야.'
},
{
id: 'tr_ga057',
name: '꽁꽁얼린 아이스비스킷',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 기본속도 3~5% 증가\n강화 수치에 따라 체력감소 3~4% 느림',
method: '최고급 보물 상자에서 획득',
description: '북극에서 순식간에 얼려 아삭한 식감을 최대로 살린 겨울 별미.'
},
{
id: 'tr_ga058',
name: '힘이 불끈 카라멜 초코바',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 이어달리기시 체력 40~90 증가\n강화 수치에 따라 점프 1~2회 추가',
method: '최고급 보물 상자에서 획득',
description: '엄청난 단맛과 높은 칼로리로 냄새만 맡아도 힘이 불끈 솟는다고 함.'
},
{
id: 'tr_ga059',
name: '울트라 파워 무지개삼',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 모든 젤리 50~100점 추가',
method: '최고급 보물 상자에서 획득',
description: '발견되기 전까지는 존재하는지도 몰랐던 고귀한 인삼.'
},
{
id: 'tr_ga060',
name: '캠핑용 불꽃랜턴',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 장애물 통과시 7300~10000점 추가',
method: '최고급 보물 상자에서 획득',
description: '불꽃박쥐의 혼령으로 만들어진 랜턴.'
},
{
id: 'tr_ga061',
name: '새콤달콤 뮤즈젤리',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 음표젤리 100~600점 추가',
method: '최고급 보물 상자에서 획득',
description: '먹으면 천재적인 멜로디가 떠오르는 사우어 젤리.'
},
{
id: 'tr_ga062',
name: '희귀한 크리스탈 조개',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 출석시 1~11% 확률로 크리스탈 10개 획득',
method: '최고급 보물 상자에서 획득',
description: '바다 속 깊은 곳에서 찾은 조개는 크리스탈을 품고 있을 확률이 높다고 한다.',
hasPassiveTag: true
},
{
id: 'tr_ga063',
name: '커다란 크리스탈 원석',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 출석시 2~21% 확률로 크리스탈 5개 획득',
method: '최고급 보물 상자에서 획득',
description: '커다란 크리스탈 원석을 조금씩 깎아 정제하면 질 좋은 크리스탈을 얻을 수 있다.',
hasPassiveTag: true
},
{
id: 'tr_ga003',
name: '차갑게 식은 달조각',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 경험치 8~10% 보너스\n강화 수치에 따라 코인 8~10% 보너스',
method: '최고급 보물 상자에서 획득',
description: '첫번째로 달에 도착한 쿠키가 채취했다고\n전해지는 달조각.'
},
{
id: 'tr_ga067',
name: '광산용 다이너마이트',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 장애물 파괴시 3~6 코인 획득',
method: '최고급 보물 상자에서 획득',
description: '코인으로 만든 광산용 다이너마이트. 비싸지만 성능만은 최고!'
},
{
id: 'tr_ga066',
name: '오래된 마법의 화분',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 3~6% 확률로 코인꽃 생성',
method: '최고급 보물 상자에서 획득',
description: '고대 유적에서 발견된 마법의 화분. 물을 주면 코인이 자라난다는 전설이 있다.'
},
{
id: 'tr_ga065',
name: '원혼을 부르는 성냥갑',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 원혼젤리 1000~2000점 추가',
method: '최고급 보물 상자에서 획득',
description: '악마가 사용했다는 이 성냥에는 원혼을 부르는 힘이 있다. 밤에 혼자 있을 때는 사용하지 말자.'
},
{
id: 'tr_ga064',
name: '눈설탕 조각 케이크',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 눈꽃젤리 500~800점 추가',
method: '최고급 보물 상자에서 획득',
description: '뜨거운 오븐이 아니라 추운 설원에서 얼려 만든 시원달콤 조각 케이크.'
},
{
id: 'tr_ga068',
name: '힘이 솟는 오색 무지개떡',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 장애물 파괴시 8300~11000점 추가\n강화 수치에 따라 모든 젤리 15~25점 추가',
method: '최고급 보물 상자에서 획득',
description: '이제 막 떠오른 무지개를 잘라 오랜 시간을 공들여 굳혀서 만든 것.'
},
{
id: 'tr_ga069',
name: '궁극의 달리기를 위한 폭죽세트',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 출석시 30~50% 확률로 부스트 세트를 획득',
method: '최고급 보물 상자에서 획득',
description: '진짜 신나는 달리기를 하고 싶다면 한 개쯤 소장하고 있는게 좋다.',
hasPassiveTag: true
},
{
id: 'tr_ga070',
name: '아름다운 질주를 위한 꽃신',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 광속질주시 모든 젤리 100~300점 추가',
method: '최고급 보물 상자에서 획득',
description: '광속질주를 할 때도 다소곳이 아름답게 걸을 수 있는 신비로운 꽃신.'
},
{
id: 'tr_ga071',
name: '꿀 찍은 가래떡 구이',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 이어달리기시 체력 20~40 증가\n강화 수치에 따라 체력감소 2~3% 느림',
method: '최고급 보물 상자에서 획득',
description: '이어달릴때 바톤으로 사용하면 호랑이 기운이 솟아난다.'
},
{
id: 'tr_ga072',
name: '펫 전용 영양 약과',
rarity: 'S',
canEvolve: true,
effect: '보너스타임에서 펫이 커짐\n강화 수치에 따라 펫이 획득한 점수 3~8% 추가',
method: '최고급 보물 상자에서 획득',
description: '쿠키에겐 별로 인기가 없지만, 펫에게는 훌륭한 영양간식이다.'
},
{
id: 'tr_ga073',
name: '마그네틱 에너지 드링크',
rarity: 'S',
canEvolve: true,
effect: '초미니자력\n강화 수치에 따라 체력감소 2~4% 느림',
method: '최고급 보물 상자에서 획득',
description: '브라보! 드디어 체력도 강화되고 자력도 생성되는 엄청난 드링크가 개발되었다.'
},
{
id: 'tr_ga074',
name: '달콤한 부활의 도넛',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 구멍에 빠진 쿠키를 1~2회 구출\n강화 수치에 따라 체력 20으로 1~3회 부활',
method: '최고급 보물 상자에서 획득',
description: '너무 강력한 부활의 능력을 가지고 있어 방부제가 많이 첨가된 것 아니냐는 의혹을 사고 있다.'
},
{
id: 'tr_ga075',
name: '색동별젤리 펜던트 리미티드 에디션',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 색동별젤리 100~300점 추가',
method: '최고급 보물 상자에서 획득',
description: '색동별젤리를 모아 만든 아름다운 펜던트로, 목에 걸면 움직일때마다 아름다운 소리가 난다.'
},
{
id: 'tr_ga076',
name: '마그네틱 무지개 드링크',
rarity: 'S',
canEvolve: true,
effect: '초미니자력\n강화 수치에 따라 모든 젤리 50~100점 추가',
method: '최고급 보물 상자에서 획득',
description: '주의! 24시간 내에 잠들 계획이라면 마시지 않는게 낫다.'
},
{
id: 'tr_ga077',
name: '여왕벌의 로열젤리',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 이어달리기시 체력 50~100 증가',
method: '최고급 보물 상자에서 획득',
description: '쿠키들이 꿀벌을 만난 후 얻게 된 가장 큰 소득은, 진귀한 로얄젤리를 얻게 된 것!'
},
{
id: 'tr_ga078',
name: '누군가 만들어준 신선한 야채주스',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력감소 4~7% 느림',
method: '최고급 보물 상자에서 획득',
description: '항상 내가 만든 것 보다 다른사람이 만들어 주는게 훨씬 더 맛있다.'
},
{
id: 'tr_ga079',
name: '정신이 번쩍드는 와사비 챕스틱',
rarity: 'S',
canEvolve: true,
effect: '경험치 10% 보너스\n강화 수치에 따라 체력 20~30으로 부활 2회',
method: '최고급 보물 상자에서 획득',
description: '매우 핫한 입술을 만들어주는 아이템! 그러나 맛보지 말자.'
},
{
id: 'tr_ga080',
name: '노란곰젤리 모양 롤케이크',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 이어달리기시 노란곰젤리 500~1000점 추가',
method: '최고급 보물 상자에서 획득',
description: '썰면 노란곰젤리 얼굴이 나오는 롤케이크.'
},
{
id: 'tr_ga081',
name: '레드쿠키 에너지드링크',
rarity: 'S',
canEvolve: true,
effect: '초미니자력\n강화 수치에 따라 이어달리기시 체력 45~65 추가',
method: '최고급 보물 상자에서 획득',
description: '붉은 황소만큼이나 에너지 회복 효과가 좋다고 함.'
},
{
id: 'tr_ga082',
name: '간편하고 든든한 삼각 주먹밥',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력회복량 2~5% 증가\n강화 수치에 따라 거대화시 모든 젤리 100~300점 추가',
method: '최고급 보물 상자에서 획득',
description: '정성이 담겨있어 더욱 맛있는 에너지 보충용 간식.'
},
{
id: 'tr_ga083',
name: '하늘로 날아간 젤리풍선다발',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 보너스타임 점수 5~10% 추가',
method: '최고급 보물 상자에서 획득',
description: '언젠가 놓쳐서 날아간 이후로, 보너스타임의 젤리가 되어 떠다닌다고 한다.'
},
{
id: 'tr_ga084',
name: '초콜릿커버 학습서',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력감소 1~2% 느림\n강화 수치에 따라 경험치 7~12% 보너스',
method: '최고급 보물 상자에서 획득',
description: '먹고싶은 욕구를 누르며 읽어야 하기 때문에 인내력 향상에도 도움을 준다.'
},
{
id: 'tr_ga085',
name: '빠른 발바닥 막대사탕',
rarity: 'A',
canEvolve: false,
effect: '강화 수치에 따라 출석시 10~40% 확률로 빠른스타트 1개 획득',
method: '고급 또는 최고급 보물 상자에서 획득',
description: '냄새를 맡지말고 바로 먹는것이 좋겠다.',
hasPassiveTag: true
},
{
id: 'tr_ga086',
name: '녹아버린 회중시계',
rarity: 'A',
canEvolve: false,
effect: '강화 수치에 따라 출석시 10~40% 확률로 아이템시간연장 1개 획득',
method: '고급 또는 최고급 보물 상자에서 획득',
description: '어쩌다 녹아버렸는지 모르겠지만 시공을 초월한 느낌.',
hasPassiveTag: true
},
{
id: 'tr_ga087',
name: '미디엄레어 미트파이',
rarity: 'A',
canEvolve: false,
effect: '강화 수치에 따라 출석시 10~40% 확률로 체력강화 1개 획득',
method: '고급 또는 최고급 보물 상자에서 획득',
description: '겉은 바삭하고 속은 부드러운 고급요리.',
hasPassiveTag: true
},
{
id: 'tr_ga088',
name: '찍어먹는 초코스틱',
rarity: 'A',
canEvolve: false,
effect: '강화 수치에 따라 출석시 10~40% 확률로 이어달리기 1개 획득',
method: '고급 또는 최고급 보물 상자에서 획득',
description: '초콜릿 찍는 양을 잘 조절해야 끝까지 맛있게 먹을 수 있다.',
hasPassiveTag: true
},
{
id: 'tr_ga089',
name: '탁상용 별빛 전등',
rarity: 'A',
canEvolve: false,
effect: '강화 수치에 따라 출석시 10~40% 확률로 경험치 2배 1개 획득',
method: '고급 또는 최고급 보물 상자에서 획득',
description: '불을 끄면 저절로 빛이 나는 별빛 전등. 불을 끄면 저절로 빛이 나기 때문에 어두워져도 무섭지 않다.',
hasPassiveTag: true
},
{
id: 'tr_ga090',
name: '글레이즈드 불로장생 도넛',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 구출/부활(체력 25) 총 2~4회',
method: '최고급 보물 상자에서 획득',
description: '장수의 마을에서 아주 어렵게 공수해 온 장수 비법 도넛!'
},
{
id: 'tr_ga091',
name: '황금으로 만든 가시 링',
rarity: 'S',
canEvolve: true,
effect: '충돌데미지추가\n강화 수치에 따라 코인 5~10% 보너스',
method: '최고급 보물 상자에서 획득',
description: '프로 러너들에게만 허락된 것으로, 초보들에게는 매우 위험할 수 있다.'
},
{
id: 'tr_ga092',
name: '초콜릿 에너지 저장 인형',
rarity: 'S',
canEvolve: true,
effect: '충돌데미지추가\n강화 수치에 따라 이어달리기시 체력 65~115 추가',
method: '최고급 보물 상자에서 획득',
description: '에너지 저장 능력이 매우 높은 특수 초콜릿으로 만들었으며, 충돌에 약하므로 주의해야한다.'
},
{
id: 'tr_ga093',
name: '자력차단 젤로 헬멧',
rarity: 'S',
canEvolve: true,
effect: '자력차단\n강화 수치에 따라 모든 젤리 70~120점 추가',
method: '최고급 보물 상자에서 획득',
description: '엄청난 수련을 마친 고수 쿠키만이 이 헬멧을 쓸 수 있게 된다고 한다.'
},
{
id: 'tr_ga094',
name: '최고급 크리스탈 보석함',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 출석시 2~16% 확률로 크리스탈 7개 획득',
method: '최고급 보물 상자에서 획득',
description: '그 자체만으로도 안에 든 보석들만큼이나 아름다운 보석!',
hasPassiveTag: true
},
{
id: 'tr_ga095',
name: '작은 구급차 장난감',
rarity: 'S',
canEvolve: true,
effect: '체력비례속도증가\n강화 수치에 따라 체력 20으로 1~3회 부활',
method: '최고급 보물 상자에서 획득',
description: '위급한 상황에 처한 쿠키들을 위해 유용하게 사용되고 있는 장난감 차량.'
},
{
id: 'tr_ga096',
name: '레드 핫 칠리 에너지 드링크',
rarity: 'S',
canEvolve: true,
effect: '초미니자력\n강화 수치에 따라 기본속도 3~6% 증가',
method: '최고급 보물 상자에서 획득',
description: '처음부터 활활 타오르는 힘을 느낄 수 있는 진짜 화끈한 드링크!'
},
// {
//     id: 'tr_ga097',
//     name: '???',
//     rarity: 'S',
//     canEvolve: false,
//     effect: '???',
//     method: '???',
//     description: '???',
//     booknone: true
// },
// {
//     id: 'tr_ga098',
//     name: '???',
//     rarity: 'S',
//     canEvolve: false,
//     effect: '???',
//     method: '???',
//     description: '???',
//     booknone: true
// },
// {
//     id: 'tr_ga099',
//     name: '???',
//     rarity: 'S',
//     canEvolve: false,
//     effect: '???',
//     method: '???',
//     description: '???',
//     booknone: true
// },
{
id: 'tr_ga100',
name: '선원의 단단한 단검',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력 20~30으로 부활 2회\n강화 수치에 따라 코인 5~7% 보너스',
method: '최고급 보물 상자에서 획득',
description: '바다의 찝찔한 해풍에도 절대 녹이 슬지 않는 단단한 검.'
},
{
id: 'tr_ga101',
name: '언제나 배고픈 코끼리 저금통',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 금화 획득시 300~800점 추가\n강화 수치에 따라 은화 획득시 200~500점 추가',
method: '최고급 보물 상자에서 획득',
description: '가진게 없어 조금 슬프지만 충분히 빛나는...\n청춘을 닮았다.'
},
{
id: 'tr_ga102',
name: '소다향 쭈쭈바',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력회복량 4~6% 증가\n강화 수치에 따라 거품젤리 100~300점 추가',
method: '최고급 보물 상자에서 획득',
description: '‘한입만’이라는 소리가 저절로 나오는 달고 시원한 쭈쭈바. 꽁다리는 아무도 줄 수 없어!'
},
{
id: 'tr_ga103',
name: '생크림 몬스터머핀',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력감소 3~4% 느림\n강화 수치에 따라 체력 30~50으로 부활',
method: '최고급 보물 상자에서 획득',
description: '무섭게 맛있는 생크림 머핀. 둘이 먹다 하나가 죽어도 다시 살아남.'
},
{
id: 'tr_ga104',
name: '비타비타 드링크',
rarity: 'S',
canEvolve: true,
effect: '초미니자력\n강화 수치에 따라 구출/부활(체력 10~20) 총 2~3회',
method: '최고급 보물 상자에서 획득',
description: '상큼한 비타민 알갱이가 톡톡 터지는 드링크.\n토독~톡! 기분까지 상쾌해진다.'
},
// {
//     id: 'tr_ga105',
//     name: '???',
//     rarity: 'S',
//     canEvolve: false,
//     effect: '???',
//     method: '???',
//     description: '???',
//     booknone: true
// },
// {
//     id: 'tr_ga106',
//     name: '???',
//     rarity: 'S',
//     canEvolve: false,
//     effect: '???',
//     method: '???',
//     description: '???',
//     booknone: true
// },
// {
//     id: 'tr_ga107',
//     name: '???',
//     rarity: 'S',
//     canEvolve: false,
//     effect: '???',
//     method: '???',
//     description: '???',
//     booknone: true
// },
{
id: 'tr_ga108',
name: '따뜻한 카페라떼 드링크',
rarity: 'S',
canEvolve: true,
effect: '초미니자력\n강화 수치에 따라 체력회복량 6~8% 증가',
method: '최고급 보물 상자에서 획득',
description: '쓸쓸할 때 마음까지 따뜻해지는 부드러운 맛과 향.'
},
{
id: 'tr_ga109',
name: '말랑말랑 젤리안장',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 소환수에 탑승시 모든 젤리 200~300점 추가\n강화 수치에 따라 체력감소 2~3% 느림',
method: '최고급 보물 상자에서 획득',
description: '폭신한 감촉에 달콤한 향까지! 단언컨대 정말 완벽한 안장이다.'
},
{
id: 'tr_ga111',
name: '얼룩소 고단백 우유',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 거대화시 모든 젤리 100~200점 추가\n강화 수치에 따라 체력 30~40으로 부활',
method: '최고급 보물 상자에서 획득',
description: '이 우유 한 모금에 주체할 수 없는 힘이 솟아난다!\n지금 당장 달리고 싶어!'
},
{
id: 'tr_ga110',
name: '배배꼬인 꽈배기 도넛',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 이어달리기시 구출/부활(체력 15~35) 총 2회',
method: '최고급 보물 상자에서 획득',
description: '이 도넛이 가장 맛있을 때는, 설탕가루를 입에 잔뜩 묻히고 먹을 때다.'
},
{
id: 'tr_ga112',
name: '청명한 크리스탈 자명종',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 출석시 1~10% 확률로 크리스탈 12개 획득',
method: '최고급 보물 상자에서 획득',
description: '소리가 맑고 고와 한번 들으면 깨지 않을 수가 없다. 잠꾸러기 쿠키에게 딱이다.',
hasPassiveTag: true
},
{
id: 'tr_ga113',
name: '고귀한 별빛 브로치',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 블랙베리젤리 300~900점 추가\n강화 수치에 따라 색동별젤리 50~100점 추가',
method: '최고급 보물 상자에서 획득',
description: '왠지 불안하지만 매력 있는, 그래서 더욱 갖고 싶은 브로치.'
},
{
id: 'tr_ga114',
name: '분홍곰젤리 고깔모자',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 40~60% 확률로 곰젤리파티에 분홍곰젤리 출현\n강화 수치에 따라 분홍곰젤리 200~300점 추가',
method: '최고급 보물 상자에서 획득',
description: '머리에 쓰면 기분이 분홍분홍해지는 고깔모자.\n자신도 모르게 분홍곰젤리의 표정을 짓고 있다.'
},
{
id: 'tr_ga115',
name: '캔디바퀴 롤러스케이트',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 생명물약 획득시 광속질주 0.3~0.8초\n체력감소 1% 느림',
method: '최고급 보물 상자에서 획득',
description: '달리기만 하면 증폭되는 달콤한 냄새 때문에 쿠키들이 더 열심히, 오래 달린다고.'
},
{
id: 'tr_ga116',
name: '상큼폭발 키위빵',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 거대화시 기본속도 5~10% 증가\n강화 수치에 따라 키위젤리 100~200점 추가',
method: '최고급 보물 상자에서 획득',
description: '무지막지하게 큰 키위 조각이 들어간 만큼 무지막지하게 상큼한 통밀빵.'
},
{
id: 'tr_ga117',
name: '달달한 피넛버터 샌드위치',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 거대화시 체력감소 10~15% 느림\n강화 수치에 따라 모든 젤리 50~80점 추가',
method: '최고급 보물 상자에서 획득',
description: '피넛버터가 골고루 잘 발라져 식빵 가장자리까지도 완벽히 맛있다! 냠냠!'
},
{
id: 'tr_ga118',
name: '골든쉐이크 드링크',
rarity: 'S',
canEvolve: true,
effect: '초미니자력\n강화 수치에 따라 2~3% 확률로 코인꽃 생성',
method: '최고급 보물 상자에서 획득',
description: '금가루가 들어있는 음료를 마시는 것이야말로, 쿠키가 부릴 수 있는 최고의 사치!'
},
// {
//     id: 'tr_ga119',
//     name: '???',
//     rarity: 'S',
//     canEvolve: false,
//     effect: '???',
//     method: '???',
//     description: '???',
//     booknone: true
// },
// {
//     id: 'tr_ga120',
//     name: '???',
//     rarity: 'S',
//     canEvolve: false,
//     effect: '???',
//     method: '???',
//     description: '???',
//     booknone: true
// },
// {
//     id: 'tr_ga121',
//     name: '???',
//     rarity: 'S',
//     canEvolve: false,
//     effect: '???',
//     method: '???',
//     description: '???',
//     booknone: true
// },
{
id: 'tr_ga122',
name: '왕 크리스탈 보석반지',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 출석시 4~27% 확률로 크리스탈 4개 획득',
method: '최고급 보물 상자에서 획득',
description: '모든 쿠키들이 연인에게 가장 받고 싶은 궁극의 선물 1위!',
hasPassiveTag: true
},
{
id: 'tr_ga123',
name: '불타는 빨간 젤리코',
rarity: 'S',
canEvolve: true,
effect: '5% 확률로 젤리코가 떨어짐\n강화 수치에 따라 체력감소 1~2% 느림',
method: '최고급 보물 상자에서 획득',
description: '더 무섭게 질주하기 위해 뜨겁게 돌아왔다! 더 이상 말랑한 젤리코가 아니야!'
},
{
id: 'tr_ga124',
name: '달콤 밤하늘 크레페',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 구름달젤리 300~800점 추가\n강화 수치에 따라 체력 30~60으로 부활',
method: '최고급 보물 상자에서 획득',
description: '밤하늘의 신비한 기운이 가득한 크레페. 별빛 알갱이가 톡! 터지며 달콤한 향을 낸다.'
},
{
id: 'tr_ga125',
name: '초승달빛 무드 칵테일',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력감소 3~6% 느림\n구멍에 빠진 쿠키를 1회 구출',
method: '최고급 보물 상자에서 획득',
description: '초승달빛을 오랜 시간 응축시켜 만든 분위기 있는 칵테일! 달빛 기운이 샘솟음!'
},
{
id: 'tr_ga126',
name: '빙산의 일각 아이스바',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 기본속도 2~4% 증가\n강화 수치에 따라 경험치 10~14% 보너스',
method: '최고급 보물 상자에서 획득',
description: '쿠키 세계에서 가장 오래된 빙산, 그 꼭대기에 있던 조각을 채취해 만든 아이스바.'
},
{
id: 'tr_ga127',
name: '다람쥐의 가루 솔솔 마법한과',
rarity: 'S',
canEvolve: false,
effect: '출석시 25~50% 확률로 마법가루 200개 획득',
method: '다람쥐 상점 뽑기에서 획득',
description: '꿀을 구석구석 발라 고물 위에서 한 바퀴! 땅콩가루 위에서 또 한 바퀴!\n...눈물 나게 맛있다.',
hasPassiveTag: true,
booknone: true
},
// {
//     id: 'tr_ga128',
//     name: '???',
//     rarity: 'S',
//     canEvolve: false,
//     effect: '???',
//     method: '???',
//     description: '???',
//     booknone: true
// },
// {
//     id: 'tr_ga129',
//     name: '???',
//     rarity: 'S',
//     canEvolve: false,
//     effect: '???',
//     method: '???',
//     description: '???',
//     booknone: true
// },
// {
//     id: 'tr_ga130',
//     name: '???',
//     rarity: 'S',
//     canEvolve: false,
//     effect: '???',
//     method: '???',
//     description: '???',
//     booknone: true
// },
{
id: 'tr_ga131',
name: '대지의 번영 팔찌',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 거대화 착지시 바닥에서 코인 생성 초급 1단~10단',
method: '최고급 보물 상자에서 획득',
description: '거대하고 자비로운 대지의 기운이 응축되어 만들어진 팔찌.'
},
{
id: 'tr_ga132',
name: '불의 수호 반지',
rarity: 'S',
canEvolve: true,
effect: '충돌 직전 모든 장애물을 파괴 1회\n강화 수치에 따라 체력감소 3~5% 느림',
method: '최고급 보물 상자에서 획득',
description: '깊고 뜨거운 불의 기운이 응축되어 만들어진 반지.'
},
{
id: 'tr_ga133',
name: '바람의 질주 귀걸이',
rarity: 'S',
canEvolve: true,
effect: '광속질주시 장애물 통과',
method: '최고급 보물 상자에서 획득',
description: '날쐬고 가벼운 바람의 기운이 응축되어 만들어진 귀걸이.'
},
{
id: 'tr_ga134',
name: '물의 회복 펜던트',
rarity: 'S',
canEvolve: true,
effect: '장애물에 충돌시 체력복구 1회\n강화 수치에 따라 코인 5~9% 보너스',
method: '최고급 보물 상자에서 획득',
description: '맑고 깨끗한 물의 기운이 응축되어 만들어진 펜던트.'
},
{
id: 'tr_ga135',
name: '짜릿한 AAA 건전지 바톤',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 이어달리기시 꼬마 자력 세기 증가\n강화 수치에 따라 모든 젤리 20~70점 추가',
method: '최고급 보물 상자에서 획득',
description: '이 바톤을 건네받은 쿠키는 더없이 짜릿하게 달릴 수 있다.'
},
{
id: 'tr_ga136',
name: '풍미가득 버터 크로와상',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력감소 2~3% 느림\n강화 수치에 따라 체력회복량 4~8% 증가',
method: '최고급 보물 상자에서 획득',
description: '입안 가득한 바삭함과 촉촉함에 반하지 않을 수 없다. 단, 부스러기를 흘리고 다니다간 등짝을 맞을 수 있으니 주의.'
},
{
id: 'tr_ga137',
name: '알록달록 미니 버블껌 미사일',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 버블껌볼 발사점수 500~1000점 추가\n강화 수치에 따라 체력 40~60으로 부활',
method: '최고급 보물 상자에서 획득',
description: '상상해보라. 이 미사일이 터지는 순간 공중에서 아름답게 펼쳐지는 버블껌놀이의 향연을!'
},
{
id: 'tr_ga138',
name: '누군가가 놓아둔 바나나 껍질',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 기본속도 3~5% 증가\n강화 수치에 따라 코인 8~10% 보너스',
method: '최고급 보물 상자에서 획득',
description: '미끄러지듯 달릴 수 있는 최적의 형태와 표면적으로 당신을 기다리고 있다!'
},
{
id: 'tr_ga139',
name: '초보용 모래주머니 5g',
rarity: 'S',
canEvolve: true,
effect: '이어달리기시 기본속도 10% 감소\n강화 수치에 따라 체력감소 3~5% 느림',
method: '최고급 보물 상자에서 획득',
description: '이 모래주머니를 벗었을 때 쌩쌩 달리는 모습을 떠올리며 연습에 매진하자.'
},
// {
//     id: 'tr_ga140',
//     name: '???',
//     rarity: 'S',
//     canEvolve: true,
//     effect: '???',
//     method: '???',
//     description: '???',
//     booknone: true
// },
{
id: 'tr_ga141',
name: '초급자용 베이킹파우더',
rarity: 'S',
canEvolve: true,
effect: '생명물약 획득시 거대화 2초\n강화 수치에 따라 체력회복량 3~5% 증가',
method: '최고급 보물 상자에서 획득',
description: '아기쿠키 손에 닿지 않도록 주의. 아기가 커져버릴 수 있음.'
},
{
id: 'tr_ga142',
name: '젤리퐁퐁 스카이콩콩',
rarity: 'S',
canEvolve: true,
effect: '초미니자력\n강화 수치에 따라 거대화 착지시 바닥에서 젤리 생성 초급 1단~10단',
method: '최고급 보물 상자에서 획득',
description: '젤리가 솟아 나는 스카이 콩콩! 이런 점프력은 처음이야! 콩콩!'
},
{
id: 'tr_ga143',
name: '사르르 분홍벚꽃 솜사탕',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 벚꽃젤리 점수 100~400점 추가',
method: '최고급 보물 상자에서 획득',
description: '입안에 사르르 퍼지는 봄의 달콤함. 다시 봄이 찾아온 기분이다.'
},
{
id: 'tr_ga144',
name: '시원달콤 아이스 소다바',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 거품젤리 100~200점 추가',
method: '최고급 보물 상자에서 획득',
description: '소다바 고유의 맛을 느끼려면 겉 부분부터 벗겨먹는 것이 정석이다.'
},
{
id: 'tr_ga145',
name: '스파클링 워터 드링크',
rarity: 'S',
canEvolve: true,
effect: '초미니자력\n강화 수치에 따라 체력 30~60으로 부활 1회',
method: '최고급 보물 상자에서 획득',
description: '몸에 꼭 필요한 미네랄이 가득 함유되어 건강과 탄력을 유지해주는 드링크!'
},
{
id: 'tr_ga146',
name: '다람쥐의 마법모래 유리병',
rarity: 'S',
canEvolve: false,
effect: '출석시 50% 확률로 마법가루 200개 획득',
method: '다람쥐 상점 뽑기에서 획득',
description: '다람쥐만 알고 있는 비밀장소에서 채취한 마법모래. 열어볼 때마다 좋은 일이 생긴다고.',
hasPassiveTag: true,
booknone: true
},
{
id: 'tr_ga147',
name: '다람쥐의 힘나는 코코넛 음료',
rarity: 'S',
canEvolve: false,
effect: '서핑보드 탑승시 모든 젤리 1000~1900점 추가\n체력회복량 10~15% 증가',
method: '다람쥐 상점 뽑기에서 획득',
description: '너무 시원하고 달콤해서 한모금 마시면 두모금 마시고 싶고 두모금 마시면 세모금 마시고 싶다. 세모금 마시면 네모금 마시고 싶고 네모금 마시면 이제 없다...흑.',
booknone: true
},
{
id: 'tr_ga148',
name: '다람쥐의 소라조개 목걸이',
rarity: 'S',
canEvolve: false,
effect: '소환수에 탑승시 모든 젤리 600~1500점 추가\n체력 40~70으로 부활',
method: '다람쥐 상점 뽑기에서 획득',
description: '신나는 바캉스 분위기를 내는 데에 소라조개 목걸이만한게 없지!!',
booknone: true
},
{
id: 'tr_ga149',
name: '장식용 크리스탈 포크스푼',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 출석시 1~12% 확률로 크리스탈 9개 획득',
method: '최고급 보물 상자에서 획득',
description: '아이 쿠키들을 위해 만들어진 포크스푼! 하지만 아까워서 쓸 수가 없다!',
hasPassiveTag: true
},
{
id: 'tr_ga150',
name: '달콤한 대추꽃 송편',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 대추 젤리 300~700점 추가\n강화 수치에 따라 체력 30~60으로 부활',
method: '최고급 보물 상자에서 획득',
description: '한 입 물면 마치 한가위가 입안에 가득 찬 듯한 풍성한 느낌이 든다.'
},
{
id: 'tr_ga151',
name: '대나무향 물씬 죽통밥',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 대나무잎 젤리 300~700점 추가\n강화 수치에 따라 체력 30~60으로 부활',
method: '최고급 보물 상자에서 획득',
description: '대나무 숲의 아침을 머금은 듯한 향기롭고 든든한 식사!'
},
{
id: 'tr_ga152',
name: '기능성 얼음구두',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 20~30% 확률로 얼음다리 생성\n강화 수치에 따라 체력감소 2~5% 느림',
method: '최고급 보물 상자에서 획득',
description: '한 발 한 발 내디딜 때마다 얼음이 쫙 깔리는 신비한 구두.'
},
{
id: 'tr_ga153',
name: '번쩍번쩍 황금 쌍절곤',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 장애물 파괴시 30~80% 확률로 날개 달린 코인 생성\n강화 수치에 따라 코인 3~4% 보너스',
method: '최고급 보물 상자에서 획득',
description: '장애물을 파괴하면서 부유해지는 느낌까지 드는 고급스러운 쌍절곤.'
},
{
id: 'tr_ga154',
name: '다람쥐 모형 스노우볼',
rarity: 'S',
canEvolve: false,
effect: '출석시 25~50% 확률로 마법가루 200개 획득',
method: '다람쥐 상점 뽑기에서 획득',
description: '다람쥐 상점 대대로 내려오는 전통 보물. 어떤 계절에도 겨울을 만날 수 있다.',
hasPassiveTag: true,
booknone: true
},
// {
//     id: 'tr_ga155',
//     name: '???',
//     rarity: 'S',
//     canEvolve: false,
//     effect: '???',
//     method: '???',
//     description: '???',
//     booknone: true
// },
// {
//     id: 'tr_ga156',
//     name: '???',
//     rarity: 'S',
//     canEvolve: false,
//     effect: '???',
//     method: '???',
//     description: '???',
//     booknone: true
// },
// {
//     id: 'tr_ga157',
//     name: '???',
//     rarity: 'S',
//     canEvolve: false,
//     effect: '???',
//     method: '???',
//     description: '???',
//     booknone: true
// },
// {
//     id: 'tr_ga158',
//     name: '???',
//     rarity: 'S',
//     canEvolve: false,
//     effect: '???',
//     method: '???',
//     description: '???',
//     booknone: true
// },
{
id: 'tr_ga159',
name: '마음에 품은 신성한 크리스탈 검',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 출석시 3~33% 확률로 크리스탈 3개 획득',
method: '최고급 보물 상자에서 획득',
description: '누구를 해치기 위한 검이 아니라 마음속 자아를 이기는 검이라고 알려진다.',
hasPassiveTag: true
},
{
id: 'tr_ga162',
name: '아이스 오렌지라임 스무디',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력감소 3~4% 느림\n강화 수치에 따라 모든 과즙젤리 200~400점 추가',
method: '최고급 보물 상자에서 획득',
description: '상큼함에 상큼함을 더했다! 더워지는 계절 기력 회복에 딱 좋은 스무디!'
},
{
id: 'tr_ga160',
name: '달콤한 초콜릿 에클레어 바톤',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력감소 3~4% 느림\n강화 수치에 따라 이어달리기 쿠키가 체력 30~50으로 부활',
method: '최고급 보물 상자에서 획득',
description: '어느 방향에서 먹어도 맛이 일정한, 초코가 고르게 잘 발린 에클레어 바톤!'
},
{
id: 'tr_ga161',
name: '스프링 팡팡 핑크 젤리슈즈',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 구출/부활(체력 20) 총 2~4회\n점프 1회 추가',
method: '최고급 보물 상자에서 획득',
description: '통통 튀는 젤리로 스프링을 만들 생각을 하다니! 이런 엄청난 발명품은 대체 누가 생각해내는 거지?!'
},
{
id: 'tr_ga163',
name: '다람쥐의 말랑말랑 젤리 탕후루',
rarity: 'S',
canEvolve: false,
effect: '소환수에 탑승시 모든 젤리 450~650점 추가\n기본속도 4~6% 증가',
method: '다람쥐 상점 뽑기에서 획득',
description: '색색의 젤리에 달콤한 설탕시럽을 끼얹었으니 맛도 향도 일품! 다람쥐 상점의 물건답게 맨 꼭대기는 도토리젤리로 마무리!',
booknone: true
},
{
id: 'tr_ga164',
name: '다람쥐의 고농축 도토리 드링크',
rarity: 'S',
canEvolve: false,
effect: '초미니자력\n5~6% 확률로 코인꽃 생성',
method: '다람쥐 상점 뽑기에서 획득',
description: '도토리 하나에도 온 산을 뒤지는 다람쥐의 집중력이 부럽다면? 바로 이 에너지 드링크를 마셔보세요!\n효과 만점, 결과 만족!',
booknone: true
},
{
id: 'tr_ga165',
name: '다람쥐의 반짝이는 크리스탈 보석함',
rarity: 'S',
canEvolve: false,
effect: '출석시 62~72% 확률로 크리스탈 1개 획득',
method: '다람쥐 상점 뽑기에서 획득',
description: '귀한 보석을 담는다더니 보석함부터 번쩍번쩍 휘황찬란하구나!',
hasPassiveTag: true,
booknone: true
},
{
id: 'tr_ga166',
name: '다람쥐의 진심어린 축하 폭죽',
rarity: 'S',
canEvolve: false,
effect: '출석시 25~50% 확률로 마법가루 200개 획득',
method: '다람쥐 상점 뽑기에서 획득',
description: '당길까, 말까? 끝에 매달린 다람쥐가 언제든 축하할 준비를 마치고 빵!팡파레를 울리기를 고대하고 있다.',
hasPassiveTag: true,
booknone: true
},
{
id: 'tr_ga167',
name: '다람쥐의 크리스탈 에이드 디스펜서',
rarity: 'S',
canEvolve: false,
effect: '출석시 31~36% 확률로 크리스탈 2개 획득',
method: '다람쥐 상점 뽑기에서 획득',
description: '크리스탈을 조각해 만든 디스펜서에 달콤상큼 과일 에이드가 가득! 더위 먹은 쿠키도 에이드 한 모금이면 끄적적! 시원하게 얼어버릴 거야!',
hasPassiveTag: true,
booknone: true
},
{
id: 'tr_ga168',
name: '다람쥐의 크리스탈 별 오너먼트',
rarity: 'S',
canEvolve: false,
effect: '출석시 31~36% 확률로 크리스탈 2개 획득',
method: '다람쥐 상점 뽑기에서 획득',
description: '반짝반짝 빛나는 크리스탈로 만들어진 별 모양 오너먼트. 이것만 있으면 깜깜한 밤도 눈부신 크리스마스 분위기로!',
hasPassiveTag: true,
booknone: true
},
{
id: 'tr_ga169',
name: '다람쥐의 홀리데이 쿠키박스',
rarity: 'S',
canEvolve: false,
effect: '초미니자력\n구출/부활(체력 12~22) 총 2~3회',
method: '다람쥐 상점 뽑기에서 획득',
description: '다람쥐 상점 특제 레시피로 만들어 채운 쿠키 박스. 고소하고 달콤한 냄새에 자꾸만 손이 간다!',
booknone: true
},
{
id: 'tr_ga170',
name: '다람쥐의 마시멜로 산타 초코케이크',
rarity: 'S',
canEvolve: false,
effect: '체력감소 4~7% 느림\n체력 10~30으로 부활',
method: '다람쥐 상점 뽑기에서 획득',
description: '즐거운 자리에 케이크는 필수!\n마시멜로 산타 장식 옆에 놓인 도토리는 다람쥐 상점만의 특별한 포인트라나?',
booknone: true
},
// {
//     id: 'tr_ga171',
//     name: '???',
//     rarity: 'S',
//     canEvolve: false,
//     effect: '???',
//     method: '???',
//     description: '???',
//     hasPassiveTag: true,
//     booknone: true
// },
{
id: 'tr_ga172',
name: '다람쥐의 단단달달한 옥춘당',
rarity: 'S',
canEvolve: false,
effect: '초미니자력\n체력감소 3~5% 느림',
method: '다람쥐 상점 뽑기에서 획득',
description: '야무진 옥춘 장인에게서 배워온 비법으로 만든 바로 그 옥춘당! 와작 깨물면 단단함 속 달달함에 미소 짓게 될 거야~',
booknone: true
},
// {
//     id: 'tr_ga173',
//     name: '???',
//     rarity: 'S',
//     canEvolve: false,
//     effect: '???',
//     method: '???',
//     description: '???',
//     booknone: true
// },
{
id: 'tr_ga174',
name: '쫄깃바삭 갓 구운 난',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 기본속도 3~5% 증가\n강화 수치에 따라 꿀잠문젤리 1300~2200점 추가',
method: '최고급 보물 상자에서 획득',
description: '한 입만 베어물어도 식감과 풍미에 감동! 어디에 찍어먹어도 정말 맛있다.'
},
{
id: 'tr_ga175',
name: '시원달콤 망고 라씨',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력감소 3~4% 느림\n강화 수치에 따라 카쿠카쿠젤리 400~1300점 추가',
method: '최고급 보물 상자에서 획득',
description: '입맛도 건강도 한 번에 사로잡는 바로 그 맛! 상큼한 요거트와 달콤한 과일이 서늘하게 땀을 식혀주는 과일 라씨.'
},
{
id: 'tr_ga176',
name: '달콤상큼 탄산 드링크',
rarity: 'S',
canEvolve: true,
effect: '초미니자력\n강화 수치에 따라 코인 6~8% 보너스',
method: '최고급 보물 상자에서 획득',
description: '텁텁한 입맛도 달콤하게, 퍽퍽한 마음도 상큼하게\n터트려주는 그 맛! 마시고 나면 눈이 번쩍 뜨인다!'
},
// {
//     id: 'tr_ga177',
//     name: '???',
//     rarity: 'S',
//     canEvolve: false,
//     effect: '???',
//     method: '???',
//     description: '???',
//     booknone: true
// },
// {
//     id: 'tr_ga178',
//     name: '???',
//     rarity: 'S',
//     canEvolve: false,
//     effect: '???',
//     method: '???',
//     description: '???',
//     booknone: true
// },
{
id: 'tr_ga182',
name: '다람쥐의 쁘잉쁘잉 뿅망치',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 구출/부활(체력 10~20) 총 2~3회\n강화 수치에 따라 경험치 +20% 코인 5~10% 보너스',
method: '다람쥐 상점 뽑기에서 획득',
description: '다람쥐의 얼굴모양이 장식된 귀여운 뿅망치. 가볍게 내려쳐도 통통 튀어오른다. 다람쥐의 귀여운 발소리가 난다. 쁘잉쁘잉',
booknone: true
},
{
id: 'tr_ga183',
name: '다람쥐의 보글보글 버블건',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 체력감소 3~5% 느림\n강화 수치에 따라 체력회복량 5.5~10% 증가',
method: '다람쥐 상점 뽑기에서 획득',
description: '뜨거운 여름날, 맑은 하늘 아래 누구보다 큰 비눗방울을 만들어보자! 보글보글 소리만 들어도 기분이 상쾌해져.',
booknone: true
},
{
id: 'tr_ga184',
name: '소환수를 위한 사료',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 소환수 탑승시 11~20% 체력감소 느림\n강화 수치에 따라 소환수에 탑승시 모든 젤리 100~400점 추가',
method: '최고급 보물 상자에서 획득',
description: '건강에 좋은 유기농 재료로 만들어진 특제 사료. 더운 날씨에 지친 소환수들에게 건강한 한끼를 선사해보세요! (주의, 어린 쿠키의 손에 닿지 않는 곳에 보관하시오)'
},
{
id: 'tr_ga185',
name: '승자를 위한 깃털 월계관',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 자력세기 증가\n강화 수치에 따라 체력 30~40으로 2회 부활',
method: '최고급 보물 상자에서 획득',
description: '경쟁에서 승리한 자만 쓸 수 있는 빛나는 월계관! 젤리를 끌어당기는 특별한 힘을 가진 깃털을 하나하나 모아 정성스럽게 엮어 만들었다. 어떤 쿠키의 깃털을 ‘뽑아’만든 것은 절대 아니다.'
},
{
id: 'tr_ga186',
name: '짤랑짤랑 코인 지갑',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 거대화시 기본속도 5~10% 증가\n강화 수치에 따라 거대화시 30~80% 확률로 은화를 금화로 변경 (변경 최대 개수 제한 있음)',
method: '최고급 보물 상자에서 획득',
description: '어린 쿠키들의 용돈을 담아두는 귀여운 코인 지갑. 달릴때마다 짤랑짤랑 소리가 난다. 코인 지갑 속 은화가 금화로 바뀌길 소망하는 어린 쿠키들의 소원이 이뤄지기를...'
},
{
id: 'tr_ga187',
name: '다람쥐의 크리스탈 노리개',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 출석시 31~36% 확률로 크리스탈 2개 획득',
method: '다람쥐 상점 뽑기에서 획득',
description: '고운 저고리에 어울리는 반짝이는 장식, 달릴때마다 모두의 부러움을 살 수 있다.',
hasPassiveTag: true,
booknone: true
},
{
id: 'tr_event_58',
name: '다람쥐의 잘 익은 전통 곶감',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 출석시 25~50% 확률로 마법가루 200개 획득',
method: '다람쥐 상점 뽑기에서 획득',
description: '달달하고 쫀득한 식감이 살아있는 곶감! 씨가 있으니 맛있다고 한 입에 먹으면 안 된다.',
hasPassiveTag: true,
booknone: true
},
{
id: 'tr_ga188',
name: '다람쥐의 도토리 깸송편',
rarity: 'S',
canEvolve: false,
effect: '6% 확률로 젤리코가 떨어짐\n강화 수치에 따라 체력 30~65로 부활',
method: '다람쥐 상점 뽑기에서 획득',
description: '수요가 있어야 공급이 있는법, 다람쥐 상점에서 콩 송편은 취급하지 않는다.',
booknone: true
},
{
id: 'tr_ga189',
name: '다람쥐의 둥실둥실 방패 연',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 장애물 파괴 또는 통과시 9500~14000점 추가\n강화 수치에 따라 체력감소 2~4% 느림',
method: '다람쥐 상점 뽑기에서 획득',
description: '파아란 가을 하늘, 바람을 타고 높이 높이 둥실둥실 날려보자.',
booknone: true
},
{
id: 'tr_ga190',
name: '갓 구운 은행 꼬치',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 모든 젤리 20~200점 추가\n강화 수치에 따라 체력감소 2~4% 느림',
method: '최고급 보물 상자에서 획득',
description: '두 손 가득 주워온 은행을 기름에 볶고, 꼬치에 꽂아 소금을 뿌려 한번 더 구워냈다. 쫀득이는 식감이 일품!'
},
{
id: 'tr_ga191',
name: '머쉬룸 드링크',
rarity: 'S',
canEvolve: true,
effect: '초미니자력\n강화 수치에 따라 생명물약 획득시 광속질주 0.2~0.6초',
method: '최고급 보물 상자에서 획득',
description: '몸에도 좋고 맛도 좋은 버섯을 가득 담았다. 한모금 머금기만 해도 가을의 풍미가 가득 느껴진다!'
},
{
id: 'tr_ga192',
name: '오래가는 버섯 손전등',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 부활시 0.8~1.7초 동안 거대화 (중첩적용X)\n강화 수치에 따라 부활시 0.8~1.7초 동안 광속질주 (중첩적용X)',
method: '최고급 보물 상자에서 획득',
description: '한 밤의 여행자에겐 꼭 필요한 손전등. 앞 길을 비춰주는 빛과 함께라면 어둠 속도 전혀 무섭지 않다.'
},
// 所持効果
{
id: 'tr_level_01',
name: 'Lv.50 골든 쿠키스 클럽 트로피',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 출석시 20~50% 확률로\n크리스탈 2개 획득',
method: 'Lv.50 달성 보상으로 획득',
description: '지금의 영예를 얻기까지, 길고 험난한\n스테이지에서의 무수한 점프, 슬라이드가 있었다.\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true
},
{
id: 'tr_level_02',
name: 'Lv.60 레전드 쿠키스 클럽 트로피',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 출석시 20~50% 확률로\n크리스탈 3개 획득',
method: 'Lv.60 달성 보상으로 획득',
description: '쿠키들을 위한 샴페인이 있다면 오늘을 위한 것,\n다같이 축배를 들자!\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true
},
{
id: 'tr_level_03',
name: 'Lv.70 나는 쿠키다 클럽 트로피',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 출석시 10~30% 확률로\n크리스탈 5개 획득',
method: 'Lv.70 달성 보상으로 획득',
description: '치열한 경쟁 속에서 끝까지 살아남은 진정한 쿠키!\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true
},
{
id: 'tr_level_04',
name: 'Lv.80 프리미엄 쿠키스 클럽 트로피',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 출석시 10~25% 확률로\n크리스탈 6개 획득',
method: 'Lv.80 달성 보상으로 획득',
description: '뛰어난 체력! 끝없는 도전! 불굴의 노력! 이\n삼박자를 갖춘 뛰어난 쿠키들만이 이 영예를 누릴\n수 있다.\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true
},
{
id: 'tr_level_05',
name: 'Lv.90 VIP 쿠키스 클럽 트로피',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 출석시 6~16% 확률로 크리스탈\n9개 획득',
method: 'Lv.90 달성 보상으로 획득',
description: '쿠키들의 미래를 이끌 영광의 주역!\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true
},
{
id: 'tr_level_06',
name: 'Lv.100 꿈을 이룬 쿠키스 클럽 트로피',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 출석시 5~15% 확률로 크리스탈\n10개 획득',
method: 'Lv.100 달성 보상으로 획득',
description: '쿠키들의 정점에 선 당신을 향해 박수를!\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true
},
// エピソード
{
id: 'tr_epS_01',
name: '코인섬을 가리키는 나침반',
rarity: 'S',
canEvolve: false,
effect: '자력차단\n강화 수치에 따라 코인 15~17% 보너스',
method: '"유령해적의 코인섬" 에피소드 유물 보상으로 획득',
description: '언제 어디서나 코인섬을 향하는 나침반. 저쪽이야!\n*판매시 재구매가 불가능한 보물입니다.',
booknone: true
},
{
id: 'tr_epS_02',
name: '달을 향한 바다요정의 마음',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 스페셜 에피소드 1,2에서 경험치 100~400% 보너스\n강화 수치에 따라 스페셜 에피소드 1,2에서 코인 5~10% 보너스',
method: '"얼음파도의 탑" 에피소드 유물 보상으로 획득',
description: '바다요정의 마음 깊숙한 곳에서 스며 나온 달을 향한 간절한 마음이 겹겹이 쌓여 만들어졌다.\n*판매시 재구매가 불가능한 보물입니다.',
booknone: true
},
{
id: 'tr_epS_02_01',
name: '별빛을 머금은 얼음방울꽃',
rarity: 'S',
canEvolve: false,
effect: '구출/부활(체력 50) 총 1~3회\n경험치 5~10% 보너스',
method: '얼음파도의 탑 얼음별 보상으로 획득',
description: '별빛이 잘 드는 얼음 위에서만 피어난다는 신비로운 꽃\n*판매시 재구매가 불가능한 보물입니다.',
booknone: true
},
{
id: 'tr_epS_02_02',
name: '얼음꽃 황금 물뿌리개',
rarity: 'S',
canEvolve: false,
effect: '3~5% 확률로 코인꽃 생성\n체력 30으로 1~2회 부활',
method: '얼음파도의 탑 미션 보상으로 획득',
description: '완전히 꽁꽁 얼어붙은 땅에도 이 물뿌리개로 물을 뿌리면 예쁜 꽃이 자라난다.\n*판매시 재구매가 불가능한 보물입니다.',
booknone: true
},
{
id: 'tr_epS_02_03',
name: '광속의 얼음날 스케이트',
rarity: 'S',
canEvolve: false,
effect: '얼음곰젤리파티 획득시 광속질주 1~1.5초',
method: '얼음파도의 탑 미션 보상으로 획득',
description: '얼음날 스케이트로 얼음 위를 미끄러지듯 슝슝~ 멈추는 방법을 모른다면 시작조차 하지 말 것.\n*판매시 재구매가 불가능한 보물입니다.',
booknone: true
},
{
id: 'tr_epS_02_04',
name: '꽁꽁 얼어붙은 황금망치',
rarity: 'S',
canEvolve: false,
effect: '장애물 파괴시 3~5 코인 획득\n구멍에 빠진 쿠키를 1~2회 구출',
method: '얼음파도의 탑 미션 보상으로 획득',
description: '무지막지한 힘으로 내리치면 바위건 얼음이건 남아나는 게 없다. 꽝! 콰광!\n*판매시 재구매가 불가능한 보물입니다.',
booknone: true
},
{
id: 'tr_epS_02_05',
name: '어딘가 낯익은 푸른빛 목걸이',
rarity: 'S',
canEvolve: false,
effect: '출석시 5~10% 확률로 크리스탈 1개 획득',
method: '얼음파도의 탑 미션 보상으로 획득',
description: '파도가 치솟아 오르지 않았다면, 영영 바다 한가운데에 묻혀 사라질뻔했던 목걸이.\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true,
booknone: true
},
{
id: 'tr_epS_03',
name: '마시멜로 별똥별 조각',
rarity: 'S',
canEvolve: false,
effect: '강화 수치에 따라 출석시 25~50% 확률로 마법가루 300개 획득',
method: '"미지의 토끼굴 여행" 에피소드 유물 보상으로 획득',
description: '어디로 이어질지 모르는 마시멜로 동산에서 길을 잃지 않게 해주는 마시멜로 별을 바라본다면 가끔 반짝하고 마시멜로 별똥별이 떨어진다!\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true,
booknone: true
},
// メダル
{
id: 'tr_medal_01',
name: '경험의 영약 (소)',
rarity: 'U',
canEvolve: false,
effect: '사용시 경험치 5000 획득',
method: '메달 교환소에서 교환을 통해 획득\n얼음파도의 탑 미션 보상으로 획득\n행운쿠키 제작 보상으로 획득',
description: '수없이 달려온 그들의 힘찬 숨결을 모아 만든 경험치 영약! 작은 사이즈.',
hasUseTag: true,
booknone: true
},
{
id: 'tr_medal_02',
name: '경험의 영약 (중)',
rarity: 'U',
canEvolve: false,
effect: '사용시 경험치 9000 획득',
method: '메달 교환소에서 교환을 통해 획득\n얼음파도의 탑 미션 보상으로 획득\n행운쿠키 제작 보상으로 획득',
description: '수없이 달려온 그들의 힘찬 숨결을 모아 만든 경험치 영약! 중간 사이즈.',
hasUseTag: true,
booknone: true
},
{
id: 'tr_medal_03',
name: '경험의 영약 (대)',
rarity: 'U',
canEvolve: false,
effect: '사용시 경험치 13000 획득',
method: '메달 교환소에서 교환을 통해 획득\n얼음파도의 탑 미션 보상으로 획득\n행운쿠키 제작 보상으로 획득',
description: '수없이 달려온 그들의 힘찬 숨결을 모아 만든 경험치 영약! 큰 사이즈.',
hasUseTag: true,
booknone: true
},
{
id: 'tr_medal_04',
name: '경험의 영약 (특대)',
rarity: 'U',
canEvolve: false,
effect: '사용시 경험치 30000 획득',
method: '메달 교환소에서 교환을 통해 획득\n얼음파도의 탑 미션 보상으로 획득\n행운쿠키 제작 보상으로 획득',
description: '수없이 달려온 그들의 힘찬 숨결을 모아 만든 경험치 영약! 특대 사이즈.',
hasUseTag: true,
booknone: true
},
{
id: 'tr_medal_05',
name: '경험의 영약 (특특대)',
rarity: 'U',
canEvolve: false,
effect: '사용시 경험치 50000 획득',
method: '메달 교환소에서 교환을 통해 획득\n얼음파도의 탑 미션 보상으로 획득\n행운쿠키 제작 보상으로 획득',
description: '수없이 달려온 그들의 힘찬 숨결을 모아 만든 경험치 영약! 특특대 사이즈.',
hasUseTag: true,
booknone: true
},
// イベント
{
id: 'tr_event_03',
name: '첫번째 쿠키군단 완성 기념 액자',
rarity: 'A',
canEvolve: false,
effect: '강화 수치에 따라 출석시 30~50% 확률로 선물포인트 190점 획득',
method: '첫번째 쿠키군단 완성 보상으로 획득',
description: '드디어 오븐에 누워있던 첫번째 쿠키들이 모두 탈출에 나섰다! 마녀, 미안~ 다음에 또 구워줘.\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true
},
{
id: 'tr_event_05',
name: '두번째 쿠키군단 완성 기념 액자',
rarity: 'A',
canEvolve: false,
effect: '강화 수치에 따라 출석시 30~50% 확률로 선물포인트 190점 획득',
method: '두번째 쿠키군단 완성 보상으로 획득',
description: '한결같은 너희들의 달리기가 우리에겐 너무 커다란 힘이 되었지.\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true
},
{
id: 'tr_event_09',
name: '다이아몬드 쿠키커터 미니',
rarity: 'A',
canEvolve: false,
effect: '쿠키의 크기가 귀엽게 작아짐',
method: '만우절 이벤트 보상으로 획득',
description: '쿠키가 작아질 수 있다니 정말 만우절 거짓말같은 사실!\n*판매시 재구매가 불가능한 보물입니다.',
booknone: true
},
{
id: 'tr_event_14',
name: '세번째 쿠키군단 완성 기념 액자',
rarity: 'A',
canEvolve: false,
effect: '강화 수치에 따라 출석시 30~50% 확률로 선물포인트 190점 획득',
method: '세번째 쿠키군단 완성 보상으로 획득',
description: '겨울을 녹여버릴 듯한 열정에 힘껏 박수를. 짝짝짝.\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true
},
{
id: 'tr_event_15',
name: '네번째 쿠키군단 완성 기념 액자',
rarity: 'A',
canEvolve: false,
effect: '강화 수치에 따라 출석시 30~50% 확률로 선물포인트 190점 획득',
method: '네번째 쿠키군단 완성 보상으로 획득',
description: '지금까지의 노력으로 새로운 세계가 열렸다.그곳에서 더 힘차게 달려 줄거지?\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true
},
{
id: 'tr_event_22',
name: '다섯번째 쿠키군단 완성 기념 액자',
rarity: 'A',
canEvolve: false,
effect: '강화 수치에 따라 출석시 30~50% 확률로 선물포인트 190점 획득',
method: '다섯번째 쿠키군단 완성 보상으로 획득',
description: '모두가 힘을 모아 멋지게 달려줬어! 잃어버린 쿠키 왕국을 되찾기 위한 위대한 첫걸음을 함께 내디딘 거야!\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true
},
{
id: 'tr_event_26',
name: '메가 자이언트 뻥튀기 대포',
rarity: 'A',
canEvolve: false,
effect: '거대화시 쿠키의 크기가 귀엽게 커짐',
method: '만우절 이벤트 보상으로 획득',
description: '이 안에 넣으면 무엇이든지 크게 뻥튀기되어 나온다고 한다! 정말 만우절 거짓말 같은 사실!\n*판매시 재구매가 불가능한 보물입니다.',
booknone: true
},
{
id: 'tr_event_30',
name: '꿈꾸는 딸기초코 도넛',
rarity: 'A',
canEvolve: false,
effect: '체력 40~50으로 부활\n코인/경험치 8~10% 보너스',
method: '스타터 패키지 상품 구매로 획득',
description: '이 도넛 한 입이면 지금 막 달리기를 시작하는 쿠키들도 더욱더 힘을 내 쌩쌩 달릴 수 있지.\n*판매시 재구매가 불가능한 보물입니다.',
booknone: true
},
{
id: 'tr_event_35',
name: '여섯번째 쿠키군단 완성 기념 액자',
rarity: 'A',
canEvolve: false,
effect: '강화 수치에 따라 출석시 30~50% 확률로 선물포인트 190점 획득',
method: '여섯번째 쿠키군단 완성 보상으로 획득',
description: '우리가 여기까지 올 수 있을거라고 누가 상상이나 했겠어? 자랑스런 우리 모습, 꼭 기억하자!\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true
},
{
id: 'tr_event_48',
name: '일곱번째 쿠키군단 완성 기념 액자',
rarity: 'A',
canEvolve: false,
effect: '강화 수치에 따라 출석시 30~50% 확률로 선물포인트 190점 획득',
method: '일곱번째 쿠키군단 완성 보상으로 획득',
description: '자, 준비되었나? 우리 모두가 힘을 모아야 소중한 것을 지킬 수 있어!\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true
},
{
id: 'tr_event_62',
name: '새해 복많이 더많이 짱짱많이 복어',
rarity: 'A',
canEvolve: false,
effect: '2024년 12월 31일까지 출석시 40~50% 확률로 2,024 코인 획득',
method: '2024 설날 이벤트 보상으로 획득',
description: '설날 선물은 무엇보다 반짝반짝 화려한 금이 최고! 라고 말하는 듯한 복어. 상큼한 눈빛이 살짝 부담스럽다..\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true,
booknone: true
},
{
id: 'tr_event_63',
name: '11주년 기념 골드 액자',
rarity: 'S',
canEvolve: false,
effect: '2024년 12월 31일까지 강화 수치에 따라 출석시\n1~11% 확률로 크리스탈 11개 획득',
method: '11주년 기념 보상으로 획득',
description: '함께 달려줘서 고마워~! 우리의 여정은 끝나지\n않아!\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true
},
{
id: 'tr_event_64',
name: '11주년 기념 크리스탈 액자',
rarity: 'S',
canEvolve: false,
effect: '2024년 12월 31일까지 강화 수치에 따라 출석시\n1~11% 확률로 크리스탈 11개 획득',
method: '11주년 기념 패키지에서 획득',
description: '지치지 않고 달려온 우리 모두를 축하하며, 찰칵!',
hasPassiveTag: true
},
{
id: 'tr_event_65',
name: '2024 여름한정 크리스탈 딸기빙수',
rarity: 'S',
canEvolve: false,
effect: '2024년 8월 31일까지 출석시 50~78% 확률로 크리스탈 2개 획득',
method: '딸기빙수 만들기 보상으로 획득',
description: '사르르 녹는 우유얼음에 새콤달콤 딸기까지! 올여름 최고 인기 디저트!',
hasPassiveTag: true,
booknone: true
},
{
id: 'tr_event_66',
name: '생일 기념! 영롱한 딸기 보석캔디',
rarity: 'S',
canEvolve: false,
effect: '2024년 12월 31일까지 출석시 6~15% 확률로 크리스탈 15개 획득',
method: '용쿠 15주년 생일 웹사이트에서 MID 입력 시 획득',
description: '생일 케이크 꼭대기를 장식한 딸기 보석캔디. 살살 깨물어 먹으면 나타나는 보석 속 빛나는 글자가 25번째 생일의 특별함을 더해준다!\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true,
booknone: true
},
{
id: 'tr_event_69',
name: '영양듬뿍 크리스탈 뚝배기 삼계탕',
rarity: 'S',
canEvolve: false,
effect: '2024년 말복(8월 14일)까지 출석 시 30~100% 확률로 크리스탈 5개 획득',
method: '2024 여름맞이 보상으로 획득',
description: '자연에서 얻은 재료를 듬뿍 넣어 만든 여름 특제 삼계탕, 맛있는 삼계탕으로 무더위를 이겨내보자!\n이번 여름을 위해 특수 제작한 크리스탈 뚝배기에 담아 특별함을 더했다.',
hasPassiveTag: true,
booknone: true
},
{
id: 'tr_event_70',
name: '찰랑찰랑 감칠맛 식혜',
rarity: 'A',
canEvolve: false,
effect: '출석시 25~50% 확률로 빠른스타트 2개 획득',
method: '2024 송편모으기 이벤트 보상으로 획득',
description: '시원한 식혜와 함께라면 말랑쫀득 송편도 막힘없이 배부르게 먹을 수 있다.\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true,
booknone: true
},
{
id: 'tr_event_72',
name: '2025 크리스탈 푸른뱀',
rarity: 'S',
canEvolve: false,
effect: '2025년 12월 31일까지 출석시 5~50% 확률로 크리스탈 1개 획득',
method: '2025 새해 기념 보상으로 획득',
description: '푸른뱀과 함께 2025년을 시작해보자! 푸른뱀이 우리의 2025년을 더 풍족하게 만들어줄거야!\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true,
booknone: true
},
{
id: 'tr_event_73',
name: '정성가득 버터 오곡밥',
rarity: 'A',
canEvolve: false,
effect: '2026년 3월 3일까지 출석시 35% 확률로 부스트 세트를 획득',
method: '부럼 모으기 이벤트 보상으로 획득',
description: '다섯가지 곡식에 정성을 담아 만든 오곡밥, 버터 한조각을 추가해 어린 쿠키들의 입맛도 사로잡아버렸다!\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true,
booknone: true
},
{
id: 'tr_event_74',
name: '초코원숭이의 특제 바나나 초콜릿',
rarity: 'A',
canEvolve: false,
effect: '추출시 마법가루 340~3840개 획득',
method: '2025 발렌타인 이벤트 보상으로 획득',
description: '바나나맛 쿠키와 초코 원숭이가 정성을 다해 만든 특제 바나나 초콜릿, 그냥 먹어도 맛있는 바나나에 달콤한 초콜릿까지 더해져서 반해버릴지도? 그렇다고 바나나맛 쿠키에게 반하면 곤란하다.\n*판매시 재구매가 불가능한 보물입니다.',
booknone: true
},
{
id: 'tr_event_75',
name: '초코원숭이의 특제 치약 초콜릿',
rarity: 'A',
canEvolve: false,
effect: '추출시 마법가루 340~3840개 획득',
method: '2025 발렌타인 이벤트 보상으로 획득',
description: '초콜릿도 먹고 양치질도 동시에 하고 싶은 바쁜 쿠키들을 위한 필수품! 초콜릿을 먹고 양치를 하는 건지, 양치를 하고 초콜릿을 먹는건지 모르겠는 건 기분탓일까?\n*판매시 재구매가 불가능한 보물입니다.',
booknone: true
},
{
id: 'tr_event_77',
name: '민트초코쿠키의 민트초코사탕',
rarity: 'A',
canEvolve: false,
effect: '추출시 마법가루 340~3840개 획득',
method: '2025 화이트데이 이벤트 보상으로 획득',
description: '민트초코에 대한 편견을 해소하겠다는 일념으로 민트초코 쿠키가 성심성의껏 만들어온 민트초코사탕. 먹어보면 생각이 달라질 거라고 하는데....\n*판매시 재구매가 불가능한 보물입니다.',
booknone: true
},
{
id: 'tr_event_78',
name: '박하사탕맛 쿠키의 민트 사탕',
rarity: 'A',
canEvolve: false,
effect: '추출시 마법가루 340~3840개 획득',
method: '2025 화이트데이 이벤트 보상으로 획득',
description: '박하사탕맛 쿠키가 민트초코 쿠키를 도와 정성을 다해 만든 민트사탕, 그런데 초코를 넣는걸 깜빡해버렸다.\n*판매시 재구매가 불가능한 보물입니다.',
booknone: true
},
{
id: 'tr_event_79',
name: '허브맛 쿠키가 소중히 간직해온 황금화분',
rarity: 'A',
canEvolve: false,
effect: '2025년 12월 31일까지 출석시 7~12% 확률로 10,000 코인 획득',
method: '허브맛 쿠키 새싹모으기 보상으로 획득',
description: '허브맛 쿠키가 금고 깊숙히 소중하게 간직해온 황금 화분, 어떤 식물이든 잘 자란다고\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true,
booknone: true
},
{
id: 'tr_event_81',
name: '12주년 기념 골드 액자',
rarity: 'S',
canEvolve: false,
effect: '2025년 12월 31일까지 강화 수치에 따라 출석시\n1~12% 확률로 크리스탈 12개 획득',
method: '12주년 기념 보상으로 획득',
description: '다시 한 번 달려볼까? 더 멀리~ 더 오래!\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true
},
{
id: 'tr_event_80',
name: '12주년 기념 크리스탈 액자',
rarity: 'S',
canEvolve: false,
effect: '2025년 12월 31일까지 강화 수치에 따라 출석시\n1~12% 확률로 크리스탈 12개 획득',
method: '12주년 기념 패키지에서 획득',
description: '앞으로가 더 신날 우리들의 달리기 이야기를\n기대해보라구!\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true
},
{
id: 'tr_event_82',
name: '미스터리박스 모음',
rarity: 'A',
canEvolve: false,
effect: '출석시 12~40% 확률로 아이템시간연장 2개 획득',
method: '12주년 추억 이벤트로 획득',
description: '3-4개씩 쌓아두고 열어보는 맛이 있는 상자. 이번엔 뭐가 들어있을까? 아...\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true,
booknone: true
},
{
id: 'tr_event_83',
name: '용감한 쿠키군의 첫 발자국',
rarity: 'A',
canEvolve: false,
effect: '출석시 12~40% 확률로 빠른스타트 1개 획득',
method: '12주년 추억 이벤트로 획득',
description: '모든 것의 시작이 된 어떤 쿠키의 용감한 첫 걸음을 기억하며...\n시작은 미약했으나 그 끝은 창대하리라~!\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true,
booknone: true
},
{
id: 'tr_event_84',
name: '뒤집기 좋은 장난감',
rarity: 'A',
canEvolve: false,
effect: '출석시 12~40% 확률로 이어달리기 1개 획득',
method: '12주년 추억 이벤트로 획득',
description: '해적맛 쿠키의 위풍당당한 모습으로 만들어진 멋진 장난감. 유령 해적 섬의 코인을 하나 넣어두면 더 든든해진다. 한번 뒤집어보시지!\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true,
booknone: true
},
{
id: 'tr_event_86',
name: '단추 부자 눈사람',
rarity: 'A',
canEvolve: false,
effect: '출석시 12~40% 확률로 1200코인 획득',
method: '12주년 추억 이벤트로 획득',
description: '몇 년전에 눈사람을 잔뜩 만들고 남아버린 재료로 만들어진 귀여운 눈사람. “난 단추가 많아.”\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true,
booknone: true
},
{
id: 'tr_event_87',
name: '오래전 예언을 기록해둔 액자',
rarity: 'A',
canEvolve: false,
effect: '출석시 12~40% 확률로 경험치 2배 아이템 2개 획득',
method: '12주년 추억 이벤트로 획득',
description: '오래전 세계에 격변이 일어날거라는 무시무시한 예언을 남겨둔 액자. 액자 뒤에 누군가 메시지를 남겨뒀다.\n(벌써 4일째 집에 가지 못했어. 집에 보내줘...)\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true,
booknone: true
},
{
id: 'tr_event_88',
name: '성격을 보여주는 액자',
rarity: 'A',
canEvolve: false,
effect: '출석시 12~40% 확률로 체력강화 2개 획득',
method: '12주년 추억 이벤트로 획득',
description: '나와 비슷했던 쿠키 누구였더라..? 기억이 안난다면 다시 해볼까?\nhttps://www.cookieruntest.com/\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true,
booknone: true
},
{
id: 'tr_event_89',
name: '반짝반짝 용감한 쿠키군의 생일 케이크',
rarity: 'S',
canEvolve: false,
effect: '2025년 12월 31일까지 출석시 6~16% 확률로 크리스탈 16개 획득',
method: '용감한 쿠키군 생일 기념 패키지에서 획득',
description: '16번째 생일을 맞이한 파티 주인공의 멋진 모습을 본따 만든 케이크. 최고의 파티쉐의 손길로 귀여운 초코방울까지 그대로 구현해냈다.\n생일 축하해, 용감한 쿠키군!\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true,
booknone: true
},
{
id: 'tr_event_90',
name: '신묘한 생명의 약수병',
rarity: 'S',
canEvolve: false,
effect: '2025년 12월 31일까지 출석시 60% 확률로 크리스탈 1개 획득',
method: '꿀떡 모으기 이벤트 보상으로 획득',
description: '신묘한 힘이 담긴 생명의 약수병. 뚜껑을 연 순간 뼈살이 꽃, 살살이 꽃, 쓿살이 꽃의 기운이 피어오른다.\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true,
booknone: true
},
{
id: 'tr_event_91',
name: '파티런 크리스탈 기념 티켓 1',
rarity: 'S',
canEvolve: false,
effect: '2025년 12월 31일까지 출석시 7~14 % 확률로 크리스탈 9개 획득',
method: '파티런 패스 베타 시즌 구매 보상으로 획득',
description: '파티런의 특별한 손님만이 소지할 수 있는 반짝이는 티켓! 파티런의 멋진 시작을 기념하기 위해 만들어졌다. 표면을 크리스탈로 정성스럽게 가공해 반짝반짝한 빛이 주머니 속에서도 새어 나올 정도라고\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true,
booknone: true
},
{
id: 'tr_event_92',
name: '파티런 크리스탈 기념 티켓 2',
rarity: 'S',
canEvolve: false,
effect: '2026년 1월 31일까지 출석시 7~14% 확률로 크리스탈 9개 획득',
method: '파티런 패스 베타 시즌 구매 보상으로 획득',
description: '파티런의 특별한 손님만이 소지할 수 있는 반짝이는 티켓! 파티런의 성공을 기념하기 위해 만들어졌다. 표면을 크리스탈로 정성스럽게 가공해 반짝반짝한 빛이 주머니 속에서도 새어 나올 정도라고\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true,
booknone: true
},
{
id: 'tr_event_93',
name: '보름달을 품은 달항아리',
rarity: 'A',
canEvolve: false,
effect: '2026년 9월 25일까지 출석시 6~11% 확률로 11,000 코인 획득',
method: '2025 추석 이벤트 보상으로 획득',
description: '쿠보 제1441호. 달빛을 담아 방 안 가득 밝히면, 집 안으로 행복이 찾아든다고.\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true,
booknone: true
},
{
id: 'tr_event_96',
name: '짤랑이는 트리 오너먼트',
rarity: 'A',
canEvolve: false,
effect: '2026년 12월 24일까지 출석시 6~11% 확률로 11,000 코인 획득',
method: '2025 크리스마스 트리 전구 모으기 이벤트 보상으로 획득',
description: '어떤 트리라도 풍성하고 아름답게 꾸며주는 트리 전구.\n코인 전구가 함께 달려 있어, 이전구로 트리를 장식해 두면 금전운이 오른다는 소문이?\n흔들릴 때마다 크리스마스 종소리 대신 짤랑짤랑 소리가 울려 퍼진다.\n*판매시 재구매가 불가능한 보물입니다.',
hasPassiveTag: true,
booknone: true
},
],
// 進化宝物（進化後）
evolution: [
{
id: 'tr_ch01_m',
name: '용기의 해골단추 목걸이',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 체력이 15~25 증가\n강화 수치에 따라 체력 10~20으로 부활',
method: '용감한 쿠키군의 세번째 해골단추 진화하여 획득',
description: '용감한 쿠키군의 세번째 해골단추로 만든 목걸이. 목에 걸면 용기가 샘솟아 더욱 용감해진 기분이 든다고 한다.',
baseId: 'tr_ch01'
},
{
id: 'tr_ch02_m',
name: '달콤한 딸기 타르트',
rarity: 'B',
canEvolve: true,
effect: '보너스타임 1초 연장\n강화 수치에 따라 보너스타임 점수 5~10% 추가',
method: '딸기맛 쿠키의 달콤한 향딸기 진화하여 획득',
description: '한 입 베어무는 순간 봄이 피어나는 소리가 들린다는 딸기 타르트.',
baseId: 'tr_ch02'
},
{
id: 'tr_ch03_m',
name: '슈가범벅 롤리팝캔디 조각',
rarity: 'C',
canEvolve: true,
effect: '강화 수치에 따라 경험치 5~10% 보너스\n강화 수치에 따라 코인 3~5% 보너스',
method: '명랑한 쿠키양의 롤리팝캔디 조각 진화하여 획득',
description: '이보다 더 달콤할 수 없다. 충치 조심!',
baseId: 'tr_ch03'
},
{
id: 'tr_ch05_m',
name: '구름맛 쿠키의 쌍무지개사탕',
rarity: 'B',
canEvolve: true,
effect: '아이템 시간 10% 연장\n강화 수치에 따라 광속질주시 모든 젤리 30~130점 추가',
method: '구름맛 쿠키의 무지개사탕 조각 진화하여 획득',
description: '드디어 맛이 두 배 풍성해진 쌍무지개사탕이 되었다!',
baseId: 'tr_ch05'
},
{
id: 'tr_ch06_m',
name: '버터크림 초코 팬케익',
rarity: 'B',
canEvolve: true,
effect: '강화 수치에 따라 코인 4~5% 보너스',
method: '버터크림 초코쿠키의 느끼한 버터조각 진화하여 획득',
description: '버터가 잔뜩 들어가서 더욱 풍부한 맛. 느끼해서 더 맛있어.',
baseId: 'tr_ch06'
},
{
id: 'tr_ch07_m',
name: '발광하는 푸른 나뭇잎',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 점프 2~4회 추가',
method: '닌자맛 쿠키의 분신 나뭇잎 진화하여 획득',
description: '빛을 내는 나뭇잎은 햇빛이 없어도 스스로 양분을 만들 수 있다고.',
baseId: 'tr_ch07'
},
{
id: 'tr_ch08_m',
name: '빛나는 초코 보석반지',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 충돌 피해 5~10% 감소\n강화 수치에 따라 체력회복량 2~4% 증가',
method: '공주맛 쿠키의 완소 보석반지 진화하여 획득',
description: '사탕 가운데에 초코가 박혀있다. 안 그래도 맛있는데 먹는 동안 점점 행복해지는 기분. 금상첨화.',
baseId: 'tr_ch08'
},
{
id: 'tr_ch09_m',
name: '강철 스파이크 말발굽',
rarity: 'S',
canEvolve: true,
effect: '광속질주 속도 10% 증가\n강화 수치에 따라 광속질주시 모든 젤리 130~230점 추가',
method: '용사맛 쿠키의 말발굽 장식 진화하여 획득',
description: '말발굽에 솟아있는 돌기가 빠르게 달려도 미끄러지지 않게 해줌.',
baseId: 'tr_ch09'
},
{
id: 'tr_ch10_m',
name: '기묘한 카페라떼',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 체력감소 1~2% 느림\n강화 수치에 따라 체력회복량 2~4% 증가',
method: '커피맛 쿠키의 오리지널 커피콩 진화하여 획득',
description: '한 모금 마시면 눈살이 찌푸려지지만 묘하게 계속 마시게 된다. 아, 너란 라떼.',
baseId: 'tr_ch10'
},
{
id: 'tr_ch11_m',
name: '불타는 날쌘 바퀴',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 기본속도 3~5% 증가\n체력 10으로 부활 2회',
method: '보더맛 쿠키의 날쌘 바퀴 진화하여 획득',
description: '달릴수록 활활 타오름. 빨리 달려서 불이 붙은건지 불이 붙어서 빨라진 건지 알 수가 없다.',
baseId: 'tr_ch11'
},
{
id: 'tr_ch12_m',
name: '천사맛 쿠키의 무지개빛 깃털',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 꼬마 자력 세기 증가\n강화 수치에 따라 모든 젤리 100~240점 추가',
method: '천사맛 쿠키의 성스러운 깃털 진화하여 획득',
description: '찬란한 빛을 내는 깃털의 아름다움에 넋이 나간 젤리들이 눈이 하트가 되었다. 뿅!',
baseId: 'tr_ch12'
},
{
id: 'tr_ch13_m',
name: '꿈틀거리는 좀비 세포체',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 체력 10~20으로 부활 2회',
method: '좀비맛 쿠키의 오리지널 세포체 진화하여 획득',
description: '더욱 생명력이 끈질겨진 좀비 세포체. 죽은것 같아도 밟으면 꿈틀한다.',
baseId: 'tr_ch13'
},
{
id: 'tr_ch14_m',
name: '쿠키앤크림 쿠키의 야식',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 체력감소 2~5% 느림',
method: '쿠키앤크림 쿠키의 오후 간식 진화하여 획득',
description: '한 번 생각나면 쉽사리 잠들 수 없지. 일단 먹고 보자.',
baseId: 'tr_ch14'
},
{
id: 'tr_ch15_m',
name: '풀파워 단백질 파우더',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 장애물 파괴시 4200~7000점 추가\n강화 수치에 따라 광속질주 속도 5~10% 증가',
method: '근육맛 쿠키의 단백질 파우더 진화하여 획득',
description: '이 파우더를 섭취하면 장애물 앞에서도 당당할 수 있다. 아무리 많이 먹어도 부작용이 없으니 안심하자.',
baseId: 'tr_ch15'
},
{
id: 'tr_ch16_m',
name: '근성의 부활 부츠',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력 10~20으로 부활 3회',
method: '해적맛 쿠키의 부활 부츠 진화하여 획득',
description: '해적의 근성이 담겨있어 끈질기게 살아나는 부활의 부츠. 시간이 갈 수록 짙어지는 향기만큼 능력도 강해지고 있다.',
baseId: 'tr_ch16'
},
{
id: 'tr_ch18_m',
name: '반짝이는 블루베리 샤베트',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 중급 꼬마 연기점수 추가',
method: '피겨여왕맛 쿠키의 블루베리 헤어핀 진화하여 획득',
description: '블루베리를 차가운 미소와 섞어 만든 샤베트. 왠지 몸이 가벼워지는 맛.',
baseId: 'tr_ch18'
},
{
id: 'tr_ch19_m',
name: '초고밀도 민트캔디',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력감소 5~6% 느림',
method: '히어로맛 쿠키의 민트캔디 진화하여 획득',
description: '민트캔디 수백 개를 만들 정도의 설탕을 초고밀도로 압축한 캔디. 일반 민트캔디와 차원이 다른 파워를 자랑한다.',
baseId: 'tr_ch19'
},
{
id: 'tr_ch20_m',
name: '10단고음 핑크 메가폰',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 이어달리기시 체력 50~110 추가\n강화 수치에 따라 이어달리기시 모든 젤리 120~260점 추가',
method: '치어리더맛 쿠키의 핑크 메가폰 진화하여 획득',
description: '더이상 올라가지 않을 것 같은데 자꾸 올라가는 메가폰. 돌고래와 대화를 나눠보자.',
baseId: 'tr_ch20'
},
{
id: 'tr_ch21_m',
name: '워터프루프 초콜릿 위장 크림',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 장애물 파괴시 9300~12000점 추가\n강화 수치에 따라 체력회복량 4~6% 증가',
method: '특전사맛 쿠키의 초콜릿 위장 크림 진화하여 획득',
description: '땀에도 비에도 지워지지 않는 강력한 위장 크림.',
baseId: 'tr_ch21'
},
{
id: 'tr_ch22_m',
name: '가시꽂힌 분신 인형',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 2단점프부터 1000~1500점 추가\n구멍에 빠진 쿠키를 1회 구출',
method: '의적맛 쿠키의 분신인형 진화하여 획득',
description: '누군가 엄청 미워하고 있는 것 같다. 화가 미칠 수 있으니 조심하자.',
baseId: 'tr_ch22'
},
{
id: 'tr_ch23_m',
name: '가시돋친 꼬리형 나침반',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 분홍곰젤리 300~800점 추가\n강화 수치에 따라 모든 곰젤리 100~200점 추가',
method: '악마맛 쿠키의 꼬리형 나침반 진화하여 획득',
description: '가시가 돋쳐 더 악랄해진 꼬리형 나침반. 더 집요하게 맛있는 젤리를 추적해서 찾아낸다.',
baseId: 'tr_ch23'
},
{
id: 'tr_ch24_m',
name: '선홍빛 푸딩 미디움레어',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 거대화시 모든 젤리 200~300점 추가\n거대화 시간 5% 연장',
method: '구미호맛 쿠키의 신선한 선홍빛 푸딩 진화하여 획득',
description: '적당하게 구워져 고소한 냄새가 난다. 남녀노소 누구나 끌릴 만한 쿠키들의 핫한 간식.',
baseId: 'tr_ch24'
},
{
id: 'tr_ch25_m',
name: '금가루 아이스크림 선데',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 장애물 파괴시 2~5 코인 획득',
method: '마법사맛 쿠키의 팝핑캔디 아이스크림 진화하여 획득',
description: '노블한 맛의 아이스크림 선데. 하지만 이빨에 금가루가 낄 수 있으니 먹을 때 함부로 웃으면 안 되겠지?',
baseId: 'tr_ch25'
},
{
id: 'tr_ch26_m',
name: '프리미엄 녹차맛 롤케이크',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 이어달리기시 체력 60~120 증가',
method: '요정맛 쿠키의 녹차맛 롤케이크 진화하여 획득',
description: '백만 번 휘저은 휘핑크림을 곁들인 롤케이크. 이걸 만들려다 요정마을에 휘핑크림 홍수가 날 뻔한 일이 있었다나...',
baseId: 'tr_ch26'
},
{
id: 'tr_ch27_m',
name: '피크로 만든 펜던트',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력감소 3~4% 느림\n강화 수치에 따라 체력회복량 4~6% 증가',
method: '락스타맛 쿠키의 전설의 기타 피크 진화하여 획득',
description: '락스타맛 쿠키가 늘 지니고 있는 펜던트. 지칠 때마다 피크에 입을 맞추며 힘을 낸다던데.',
baseId: 'tr_ch27'
},
{
id: 'tr_ch28_m',
name: '정성 가득 생일파티용 케이크',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 장애물 파괴시 10300~13000점 추가\n강화 수치에 따라 기본속도 5~6% 증가',
method: '체리맛 쿠키의 파티용 컵케이크 진화하여 획득',
description: '구하기 힘든 재료로 일년에 한 번 정성스레 만드는 특별한 케이크이다.',
baseId: 'tr_ch28'
},
{
id: 'tr_ch29_m',
name: '블링블링 미니 크리스마스트리',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 모든 젤리 280~460점 추가',
method: '음유시인맛 쿠키의 크리스마스트리 쿠키 진화하여 획득',
description: '한 겨울 음유시인맛 쿠키는 이 크리스마스트리를 장식하며 시를 노래한다. "징글벨~징글벨~♪"',
baseId: 'tr_ch29'
},
{
id: 'tr_ch30_m',
name: '오색 찬란한 눈꽃빙수',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 이어달리기시 체력 40~100 증가\n구멍에 빠진 쿠키를 2회 구출',
method: '눈설탕맛 쿠키의 스노우 파르페 진화하여 획득',
description: '막 내린 눈과 만년설을 블렌딩하고, 바삭하게 씹히는 보석으로 토핑한 환상적인 빙수.',
baseId: 'tr_ch30'
},
{
id: 'tr_ch31_m',
name: '만년 초콜릿 스페셜 패키지',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 분홍곰젤리 300~800점 추가\n강화 수치에 따라 모든 곰젤리 100~200점 추가',
method: '핑크초코쿠키의 수제 초콜릿 세트 진화하여 획득',
description: '만년설로 만들어서 아무리 손에 쥐고 있어도 녹지 않는 초콜릿. 영원한 사랑의 징표.',
baseId: 'tr_ch31'
},
{
id: 'tr_ch33_m',
name: '성스러운 불멸의 성배',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 이어달리기 쿠키가 체력 10~30으로 3회 부활\n강화 수치에 따라 이어달리기시 모든 젤리 170~310점 추가',
method: '피스타치오맛 쿠키의 부활의 성배 진화하여 획득',
description: '튼튼한 가루와 성스러운 기운이 더해져 이제 달리기를 멈추고 싶어도 멈출 수가 없다.',
baseId: 'tr_ch33'
},
{
id: 'tr_ch34_m',
name: '포도알 원자모형 브로치',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 15~25% 확률로 코인매직에 금화출현\n강화 수치에 따라 코인 4~6% 보너스',
method: '연금술사맛 쿠키의 분자모형 브로치 진화하여 획득',
description: '연금술의 핵심 이론이 이 모형에서부터 시작되었다고 함.',
baseId: 'tr_ch34'
},
{
id: 'tr_ch35_m',
name: '마성의 부활 포도주스',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력감소 3~4% 느림\n강화 수치에 따라 체력 30~65으로 부활',
method: '뱀파이어맛 쿠키의 부활의 포도주스 진화하여 획득',
description: '이 포도주스를 마시면 딱 한 모금만 더 마시고 싶다. 하지만 언제나 적정량이 정해져 있지.',
baseId: 'tr_ch35'
},
{
id: 'tr_ch36_m',
name: '후루츠장식 헤어밴드',
rarity: 'S',
canEvolve: true,
effect: '보너스타임 1초 연장\n강화 수치에 따라 보너스타임 점수 5~10% 추가',
method: '풋사과맛 쿠키의 사과모양 똑딱핀 진화하여 획득',
description: '후루츠장식 헤어밴드를 한 풋사과맛 쿠키, 더 싱그럽게 자라길.',
baseId: 'tr_ch36'
},
{
id: 'tr_ch37_m',
name: '황금시럽 듬뿍 골든 피스',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 기본속도 5~6% 증가\n강화 수치에 따라 코인 8~10% 보너스',
method: '치즈케이크맛 쿠키의 골든피스 진화하여 획득',
description: '쿠키를 가장 빛나게 하는 한 조각. 매우 비싸지만 한 입만 먹어도 고개를 끄덕이게 된다.',
baseId: 'tr_ch37'
},
{
id: 'tr_ch38_m',
name: '살살 녹는 밧줄 바움쿠헨',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 경험치 10~14% 보너스\n강화 수치에 따라 코인 8~10% 보너스',
method: '탐험가맛 쿠키의 밧줄 바움쿠헨 진화하여 획득',
description: '퍽퍽했던 통밀 바움쿠헨에 우유와 시럽을 섞어 건강함은 남기고 부드러움은 더했다!!',
baseId: 'tr_ch38'
},
{
id: 'tr_ch39_m',
name: '잔잔한 파도맛 소다칵테일',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 기본속도 4~7% 증가\n강화 수치에 따라 거품젤리 400~600점 추가',
method: '소다맛 쿠키의 파도맛 소다 진화하여 획득',
description: '늘 몰아치기만 하는 것은 아니다. 가끔은 모든 게 지나가고 난 후의 잔잔한 파도의 맛을 느껴보자.',
baseId: 'tr_ch39'
},
{
id: 'tr_ch40_m',
name: '정글전사 쿠키의 젤리꽃 화관',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 정글전사 파괴점수 20000~29000점 추가\n강화 수치에 따라 체력감소 4~7% 느림',
method: '정글전사 쿠키의 헤어핀 진화하여 획득',
description: '버터호랑이가 물어다준 젤리꽃을 한땀 한땀 엮어서 만들었다. 왠지 그리운 느낌...',
baseId: 'tr_ch40'
},
{
id: 'tr_ch42_m',
name: '시럽후루룩뚝뚝 블랙베리 모자',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력회복량 2~6% 증가\n강화 수치에 따라 체력 30~70으로 부활',
method: '블랙베리맛 쿠키의 블랙베리 모자 진화하여 획득',
description: '누군가가 몰래 시럽을 잔뜩 부어놨다. 블랙베리맛 쿠키가 눈에 불을 켜고 범인을 찾고 있다고...',
baseId: 'tr_ch42'
},
{
id: 'tr_ch43_m',
name: '부릉부릉 골드키위 열쇠',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 기본속도 3~6% 증가\n강화 수치에 따라 체력 40~60으로 부활',
method: '키위맛 쿠키의 소중한 열쇠 진화하여 획득',
description: '골드키위 장식으로 업그레이드되었다! 더 빠르고 세진 느낌.',
baseId: 'tr_ch43'
},
{
id: 'tr_ch44_m',
name: '튼튼해진 소중한 목걸이',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 이어달리기시 구출/부활(체력 25) 총 1~3회',
method: '웨어울프맛 쿠키의 소중한 목걸이 진화하여 획득',
description: '낡은 줄을 교체해 더 튼튼해졌다. 이제 잃어버릴 일은 없어!',
baseId: 'tr_ch44'
},
{
id: 'tr_ch45_m',
name: '초코듬뿍 마시멜로',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 소환수에 탑승시 모든 젤리 150~350점 추가\n강화 수치에 따라 체력 25~55으로 부활',
method: '코코아맛 쿠키의 마시멜로 모자 진화하여 획득',
description: '달달한 향이 솔솔 나는 마시멜로. 황홀한 달콤함에 중독되어버릴 수 있으니 주의!',
baseId: 'tr_ch45'
},
{
id: 'tr_ch46_m',
name: '금화가득 바이올린 케이스',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력감소 3~4% 느림\n강화 수치에 따라 3~5% 확률로 코인꽃 생성',
method: '민트초코쿠키의 바이올린 케이스 진화하여 획득',
description: '늘 묵직한 바이올린 케이스의 비밀이 밝혀졌다!',
baseId: 'tr_ch46'
},
{
id: 'tr_ch47_m',
name: '불굴의 삼색 머리끈',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력 30~80으로 부활\n강화 수치에 따라 장애물 파괴시 10300~13000점 추가',
method: '홍고추맛 쿠키의 질끈 묶은 머리끈 진화하여 획득',
description: '어떤 것에도 굴하지 않겠다는 강한 신념을 가진 쿠키만이 착용할 수 있다. 화르르!',
baseId: 'tr_ch47'
},
{
id: 'tr_ch48_m',
name: '슈가파우더 솔솔 슈크림샌드',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 모든 젤리 170~350점 추가\n초미니자력',
method: '슈크림맛 쿠키의 슈모자 진화하여 획득',
description: '슈크림이 절대 손에 묻을 일이 없다! 한입에 쏘옥~',
baseId: 'tr_ch48'
},
{
id: 'tr_ch50_m',
name: '얼마 남지 않은 버블껌 시한폭탄',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 버블껌 발사점수 1200~2100점 추가',
method: '버블껌맛 쿠키의 버블껌 수류탄 진화하여 획득',
description: '너무 고민하지 말자. 시간이 흐르면, 일어날 일은 일어나게 되어 있으니까.',
baseId: 'tr_ch50'
},
// {
//     id: 'tr_ch51_m',
//     name: '???',
//     rarity: 'S',
//     canEvolve: true,
//     effect: '???',
//     method: '???',
//     description: '???',
//     baseId: 'tr_ch51',
//     hasPassiveTag: true,
//     booknone: true
// },
{
id: 'tr_ch52_m',
name: '레몬향 스마트폰 스페셜 에디션',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 번개 질주시 파괴점수 7000~16000점 추가\n강화 수치에 따라 광속질주 속도 10~15% 증가',
method: '레몬맛 쿠키의 레몬 mp3 플레이어 진화하여 획득',
description: '이것만 있으면 종일 심심할 일이 없다. 굉장히 재미있어 보이는 게임도 보인다!',
baseId: 'tr_ch52'
},
{
id: 'tr_ch53_m',
name: '꽁꽁 얼린 오렌지 음료',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 광속질주 속도 10~15% 증가\n강화 수치에 따라 생명물약 획득시 광속질주 0.3~0.8초',
method: '오렌지맛 쿠키의 스포츠 보틀 진화하여 획득',
description: '아직도 시원한 한 모금에 모든 기력이 회복된다.\n살짝 녹았을 때 샤베트처럼 먹어도 좋다.',
baseId: 'tr_ch53'
},
{
id: 'tr_ch54_m',
name: '수분가득 라임향 아이리무버',
rarity: 'S',
canEvolve: true,
effect: '거대화 시간 10% 연장\n강화 수치에 따라 거대화 착지시 바닥에서 젤리 생성 중급 1단~10단',
method: '라임맛 쿠키의 워터프루프 마스카라 진화하여 획득',
description: '스치기만 해도 지워진다는 한 방 리무버! 상큼한 라임향으로 기분까지 깔끔!',
baseId: 'tr_ch54'
},
{
id: 'tr_ch56_m',
name: '복숭아맛 쿠키의 비단 두루마리 비법서',
rarity: 'S',
canEvolve: true,
effect: '점프 2회 추가\n강화 수치에 따라 구출/부활(체력 15~25) 총 3회',
method: '복숭아맛 쿠키의 무술비법서 진화하여 획득',
description: '수많은 고수들의 비법에 복숭아맛 쿠키의 노하우를 더한 특급 무술 비법 두루마리. 복숭아맛 쿠키가 언제나 몸에 지니고 다니는 탓에 복숭아 향이 풍긴다고 한다.',
baseId: 'tr_ch56'
},
{
id: 'tr_ch58_m',
name: '양파맛 쿠키의 레이스 베개',
rarity: 'S',
canEvolve: true,
effect: '체력감소 7% 느림\n강화 수치에 따라 장애물 통과시 7500~12000점 추가',
method: '양파맛 쿠키의 눈물에 젖은 베개 진화하여 획득',
description: '악몽에서 벗어나 좀 더 편안한 잠을 자기 위해 마련한 레이스 베개. 하지만 여전히 가끔 눈물을 흘린다.',
baseId: 'tr_ch58'
},
{
id: 'tr_ch59_m',
name: '마카롱맛 쿠키의 블러셔 브러시',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 마카롱 동물 젤리 500~1000점 추가\n강화 수치에 따라 체력 50~68으로 부활',
method: '마카롱맛 쿠키의 볼터치 퍼프 진화하여 획득',
description: '컬러도 짱짱 브라이트하고 한올 한올 곱게 발리는 브러시!',
baseId: 'tr_ch59'
},
{
id: 'tr_ch60_m',
name: '한정판 트럼프카드 케이스',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 카드 젤리 1500~2500점 추가\n초미니자력',
method: '시나몬맛 쿠키의 트럼프카드 케이스 진화하여 획득',
description: '시나몬맛 쿠키의 팬이 만들어 선물해준 트럼프카드 케이스. 시나몬맛 쿠키가 트릭을 더해 세상에 단 하나뿐인 케이스로 만들었다.',
baseId: 'tr_ch60'
},
{
id: 'tr_ch61_m',
name: '단팥맛 쿠키의 모포로 만든 털모자',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력감소 6~7% 느림\n강화 수치에 따라 붕어빵 젤리 점수 50,000~100,000점 추가',
method: '단팥맛 쿠키의 후끈힌 모포더미 진화하여 획득',
description: '후끈한 모포를 꿰어 만든 털모자. 복실복실한 털방울이 키포인트!',
baseId: 'tr_ch61'
},
{
id: 'tr_ch62_m',
name: '화이트초코 쿠키의 백장미 꽃병',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 화이트초코 젤리 1000~1500점 추가\n초미니자력',
method: '화이트초코 쿠키의 백장미 꽃다발 진화하여 획득',
description: '꽃다발은 꽃병으로, 과거는 추억으로 여전히 소중하게 간직된다.',
baseId: 'tr_ch62'
},
{
id: 'tr_ch64_m',
name: '다이노사워 쿠키의 진열된 젤리공룡 화석',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 공룡발바닥 젤리 1600~2500점 추가\n강화 수치에 따라 체력 60~78으로 부활',
method: '다이노사워 쿠키의 젤리공룡 화석 진화하여 획득',
description: '누군가의 제보로 젤리공룡의 화석침대는 엄청난 명성과 함께 전시되어 버렸다. 하지만 젤리공룡은 자신의 침대가 멋진 취급을 받는 게 뿌듯한 것 같기도?',
baseId: 'tr_ch64'
},
{
id: 'tr_ch68_m',
name: '영롱한 바나나우유 양손컵',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 구출/부활(체력 15~25) 총 3회\n강화 수치에 따라 코인 8~10% 보너스',
method: '바나나맛 쿠키의 바나나 우유 젖병 진화하여 획득',
description: '바나나맛 쿠키가 쑥쑥 자라나는 초코 원숭이를 위해 마련한 고급 바나나 우유 양손컵. 우리가 아는 그 맛!',
baseId: 'tr_ch68'
},
{
id: 'tr_ch71_m',
name: '달토끼맛 쿠키의 3단 송편 떡케이크',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 꿀떡젤리 3000~3500점 추가\n체력 65으로 부활',
method: '달토끼맛 쿠키의 화려한 떡케이크 진화하여 획득',
description: '달토끼맛 쿠키가 제일 좋아하는 떡 위에 송편까지 올린 3단 무지개떡 케이크',
baseId: 'tr_ch71'
},
{
id: 'tr_pet01_m',
name: '더 맛있는 초콜릿 조각',
rarity: 'B',
canEvolve: true,
effect: '강화 수치에 따라 모든 젤리 30~50점 추가',
method: '초코방울의 달콤한 초콜릿 조각 진화하여 획득',
description: '이 작은 한조각을 지니고 있는 것만으로도 곰젤리가 앞다투어 모여든다는 사실!',
baseId: 'tr_pet01'
},
{
id: 'tr_pet02_m',
name: '풍미가득 치즈조각',
rarity: 'B',
canEvolve: true,
effect: '강화 수치에 따라 분홍곰젤리 200~600점 추가\n강화 수치에 따라 노란곰젤리 100~200점 추가',
method: '치즈방울의 고소한 치즈조각 진화하여 획득',
description: '풍미가 진해 100미터 밖에서도 향기가 진동한다는 치즈조각.',
baseId: 'tr_pet02'
},
{
id: 'tr_pet03_m',
name: '좋은손의 짱짱한 골무',
rarity: 'B',
canEvolve: true,
effect: '강화 수치에 따라 은화 획득시 100~200점 추가\n강화 수치에 따라 금화 획득시 200~400점 추가',
method: '좋은손의 좋은 골무 진화하여 획득',
description: '어느 바늘도 뚫을 수 없다는 짱짱한 골무가 짱임!',
baseId: 'tr_pet03'
},
{
id: 'tr_pet04_m',
name: '쫀득한 치즈 조랭이',
rarity: 'C',
canEvolve: true,
effect: '강화 수치에 따라 곰젤리파티 시간 10~15% 연장\n강화 수치에 따라 노란곰젤리 200~300점 추가',
method: '조랭이젤리의 돌연변이 친구 진화하여 획득',
description: '베어 물면 치즈가 새어 나오는 조랭이.',
baseId: 'tr_pet04'
},
{
id: 'tr_pet05_m',
name: '보송보송 귀마개',
rarity: 'B',
canEvolve: true,
effect: '강화 수치에 따라 금화 획득시 200~400점 추가\n강화 수치에 따라 은화 획득시 100~300점 추가',
method: '뭉치유니콘의 겨울용 뿔모자 진화하여 획득',
description: '보온성과 심미성을 동시에 갖춘 이 시대의 패션 아이템!',
baseId: 'tr_pet05'
},
{
id: 'tr_pet06_m',
name: '산타모자의 빛나는 꼬리방울',
rarity: 'B',
canEvolve: true,
effect: '강화 수치에 따라 은화 획득시 400~600점 추가',
method: '산타모자의 달랑이는 꼬리방울 진화하여 획득',
description: '산타모자에서 빛이 나 사슴코가 없이도 길을 밝힐 수 있다!',
baseId: 'tr_pet06'
},
{
id: 'tr_pet07_m',
name: '알록달록 별사탕',
rarity: 'C',
canEvolve: true,
effect: '보너스타임에서 펫이 2배 커짐\n강화 수치에 따라 보너스타임 점수 5~10% 추가',
method: '구름사탕의 구름 별사탕 진화하여 획기득',
description: '무지개의 빛을 머금은 별사탕. 작은 한 알에도 다채로운 맛이 난다.',
baseId: 'tr_pet07'
},
{
id: 'tr_pet08_m',
name: '산타양말의 빨간 원단',
rarity: 'C',
canEvolve: true,
effect: '강화 수치에 따라 기본속도 4~6% 증가',
method: '산타양말의 빨간 천조각 진화하여 획득',
description: '깜짝 놀랄만큼 예쁜 빨강. 산타가 온 쿠키마을을 뒤져 겨우 찾아 내었다고.',
baseId: 'tr_pet08'
},
{
id: 'tr_pet09_m',
name: '폭발하는 번개 에너지',
rarity: 'B',
canEvolve: true,
effect: '강화 수치에 따라 자석 시간 10~20% 연장\n강화 수치에 따라 펫이 획득한 점수 5~10% 추가',
method: '테크노볼의 번개 에너지 진화하여 획득',
description: '찌리리리릭 찌리리리릭 찌릿찌릿 붐붐 샤카라카 붐샤카 붐샤카 붐붐 샤카라카!',
baseId: 'tr_pet09'
},
{
id: 'tr_pet10_m',
name: '안깐 마늘의 독특한 갈릭소스',
rarity: 'B',
canEvolve: true,
effect: '광속질주 시간 10% 연장\n강화 수치에 따라 광속질주시 모든 젤리 70~170점 추가',
method: '안깐 마늘의 까지인 마늘 한쪽 진화하여 획득',
description: '갈릭소스를 만들기 위해서는 일단 마늘 한쪽을 으깨서......미안하다. 크흡.',
baseId: 'tr_pet10'
},
{
id: 'tr_pet11_m',
name: '플라워콥터의 돌연변이 씨앗',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 보너스타임 속도 5~10% 증가\n보너스타임 1초 연장',
method: '플라워콥터의 소중한 씨앗 진화하여 획득',
description: '날개가 하나 더 달려있어 조금 더 멀리까지 갈 수 있다.',
baseId: 'tr_pet11'
},
{
id: 'tr_pet12_m',
name: '꼬마유령의 찬란한 추억',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 구멍에 빠진 쿠키를 1~3회 구출\n강화 수치에 따라 체력 10으로 부활 1~2회',
method: '꼬마유령의 구슬픈 감정 진화하여 획득',
description: '잊혀지기엔 너무 꿈같은 시절. 다시 살아나 다음 생애가 되면 그걸 추억이라고 부를 수 있을까.',
baseId: 'tr_pet12'
},
{
id: 'tr_pet13_m',
name: '해적폭탄의 트랜스폭탄늄',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 15~25% 확률로 코인매직에 금화출현\n강화 수치에 따라 코인 6~8% 보너스',
method: '해적폭탄의 비밀 화약가루 진화하여 획득',
description: '해적폭탄의 비밀원료는 트랜스폭탄늄으로 밝혀졌다. 이것만 있으면 장애물을 금화로 변환시킬 수 있다고.',
baseId: 'tr_pet13'
},
{
id: 'tr_pet14_m',
name: '포근실타래가 노는 미니물레',
rarity: 'B',
canEvolve: true,
effect: '보너스타임 2초 연장\n강화 수치에 따라 보너스타임 속도 3~8% 증가',
method: '포근실타래의 전용 뜨게바늘 진화하여 획득',
description: '빙글빙글 돌아가며 지루함을 달래주는 아이템. 신이 난 실타래의 환호성이 들릴지도 모른다.',
baseId: 'tr_pet14'
},
{
id: 'tr_pet15_m',
name: '계속 구르는 둥근 다이스',
rarity: 'A',
canEvolve: true,
effect: '아이템 시간 5% 연장\n강화 수치에 따라 거대화시 모든 젤리 150~300점 추가',
method: '럭키다이스 형제의 미니다이스 진화하여 획득',
description: '정답은 없다고 외치며 끊임없이 구르는 다이스. 멈춘다고 한들 누가 숫자를 말할 수 있을까.',
baseId: 'tr_pet15'
},
{
id: 'tr_pet16_m',
name: '블링블링 미니 장신구',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력회복량 5~6% 증가\n강화 수치에 따라 분홍곰젤리 100~300점 추가',
method: '공주의 장신구의 미니 장신구 진화하여 획득',
description: '공주맛 쿠키가 성년의 날을 맞은 후에는 더 반짝거리는 장신구를 찾고 있다고 한다.',
baseId: 'tr_pet16'
},
{
id: 'tr_pet17_m',
name: '용의 꼬리의 허물 초밥',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 광속질주 시간 3~8% 연장\n강화 수치에 따라 거대화 시간 3~8% 연장',
method: '용의 꼬리의 얼굴 허물 진화하여 획득',
description: '쓸모없어 보였던 허물이 맛있는 초밥으로 탄생했다. 신선함을 위해 냉장 보관은 필수!',
baseId: 'tr_pet17'
},
{
id: 'tr_pet18_m',
name: '브레인껌의 사춘기 시절',
rarity: 'A',
canEvolve: true,
effect: '충돌 피해 10% 감소\n강화 수치에 따라 체력 감소 1~2% 느림',
method: '브레인껌의 어린시절 진화하여 획득',
description: '브레인 껌에게도 그런 시절이 있었다. 모든게 무겁고 질척거리게 느껴졌던.',
baseId: 'tr_pet18'
},
{
id: 'tr_pet19_m',
name: '일부러 만든 생크림 수염',
rarity: 'B',
canEvolve: true,
effect: '강화 수치에 따라 알파벳젤리 100~150점 추가\n강화 수치에 따라 은화 획득시 300~500점 추가',
method: '생크림 모카커피용 생크림 진화하여 획득',
description: '입술에 거품을 살짝 묻히고 모르는 척 하고 있어보자.',
baseId: 'tr_pet19'
},
{
id: 'tr_pet20_m',
name: '금빛 축복 반죽',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력이 15~25 증가\n강화 수치에 따라 체력 10~20으로 부활 2회',
method: '천사의 별이 뿌린 축복가루 진화하여 획득',
description: '축복가루에 설탕과 행복기운을 넣고 잘 저어 반죽을 만들었다. 출발하기 전 몸에 바르면 기운이 솟는다고.',
baseId: 'tr_pet20'
},
{
id: 'tr_pet21_m',
name: '쌍둥이 덤벨의 퐁카리스웨트',
rarity: 'B',
canEvolve: true,
effect: '강화 수치에 따라 거대화 시간 5~10% 연장\n강화 수치에 따라 거대화시 모든 젤리 100~250점 추가',
method: '쌍둥이 덤벨의 땀방울 진화하여 획득',
description: '쌍둥이 덤벨의 땀방울과 새벽의 이슬을 섞어 만든 특별한 음료. 마시면 몸이 점점 커진다고.',
baseId: 'tr_pet21'
},
{
id: 'tr_pet23_m',
name: '별빛 머금은 얼음 조각',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 25~30% 확률로 얼음다리 생성\n강화 수치에 따라 어린이 연기점수 추가',
method: '눈꽃송이의 반짝이는 얼음조각 진화하여 획득',
description: '별맞이꽃이 얼음조각에 닿자 별처럼 영롱하게 빛나게 되었다.',
baseId: 'tr_pet23'
},
{
id: 'tr_pet24_m',
name: '용맹한 폭주 젤리코',
rarity: 'S',
canEvolve: true,
effect: '7% 확률로 젤리코가 떨어짐\n강화 수치에 따라 장애물 파괴시 1300~4000점 추가',
method: '젤리코 큐브의 길잃은 젤리코 진화하여 획득',
description: '너무 오래 길을 잃고 방황했는지, 예전의 밝은 모습이 사라졌다. 하지만 강해진 느낌.',
baseId: 'tr_pet24'
},
{
id: 'tr_pet26_m',
name: '색동별젤리 조각 모음',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 금화 획득시 400~900점 추가\n강화 수치에 따라 은화 획득시 200~500점 추가',
method: '반짝이볼의 색동별젤리 조각 진화하여 획득',
description: '왠지 잘 짜맞추면 온전한 색동별젤리를 만들 수 있지 않을까?',
baseId: 'tr_pet26'
},
{
id: 'tr_pet27_m',
name: '최첨단 캐러멜 헬멧',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 아이템 시간 5~10% 연장\n강화 수치에 따라 거대화시 모든 젤리 100~300점 추가',
method: '건빵 보급병의 최첨단 헤드셋 진화하여 획득',
description: '캐러멜로 만들어진 최첨단 헬멧을 쓰면 다 이길 것 같은 기분.',
baseId: 'tr_pet27'
},
{
id: 'tr_pet28_m',
name: '불꽃박쥐의 불멸의 불꽃',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 장애물 통과시 4500~9000점 추가\n강화 수치에 따라 체력 20~40으로 부활',
method: '불꽃박쥐의 영원한 불씨 진화하여 획득',
description: '마음에 타오르는 불꽃도 이 불꽃처럼 영원히 꺼지지 않았으면...',
baseId: 'tr_pet28'
},
{
id: 'tr_pet29_m',
name: '발광하는 으리으리한 골드메달',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 코인 8~10% 보너스\n강화 수치에 따라 체력이 20~30 증가',
method: '황금방울의 엄청난 골드바 진화하여 획득',
description: '혼신의 힘을 다해 달려야 겨우 얻을 수 있다는 골드메달.',
baseId: 'tr_pet29'
},
{
id: 'tr_pet30_m',
name: '바람이 얼음 샤베트',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 펫이 획득한 점수 5~10% 추가',
method: '바람이의 얼음캔디 진화하여 획득',
description: '눈의 마을에서 바람이가 실어온 얼음 샤베트.',
baseId: 'tr_pet30'
},
{
id: 'tr_pet31_m',
name: '빨갛게 빛나는\n여우구슬의 심장',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력이 40~100 증가',
method: '여우구슬의 심장 진화하여 획득',
description: '여우구슬이 사랑에 빠져 심장이 빨갛게 빛나게 되었다고 한다.',
baseId: 'tr_pet31'
},
{
id: 'tr_pet33_m',
name: '마법사전의\n부록 브로마이드',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 기본속도 3~8% 증가\n구멍에 빠진 쿠키를 1회 구출',
method: '마법사전의 뜯어진 한장 진화하여 획득',
description: '탈출 비법이 정리되어 있는 유용한 브로마이드. 예쁘기도 해서 방에 걸어 놓고 주문을 외울 수 있다.',
baseId: 'tr_pet33'
},
{
id: 'tr_pet34_m',
name: '매끈한\n무지개빛 꽃잎',
rarity: 'S',
canEvolve: true,
effect: '보너스타임 1초 연장\n강화 수치에 따라 보너스타임 점수 5~10% 추가',
method: '꽃봉오리의 청순한 꽃잎 진화하여 획득',
description: '비온 뒤 이 꽃잎에 가만히 귀를 기울이면 무지개가 자라는 소리가 들리지.',
baseId: 'tr_pet34'
},
{
id: 'tr_pet35_m',
name: '바닐라향\n삼파장 전구 호박색',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 경험치 7~12% 보너스\n강화 수치에 따라 코인 7~9% 보너스',
method: '스포트라이트의 바닐라향 전구 진화하여 획득',
description: '아름다운 호박색으로 빛나는 삼파장 전구. 마치 보석을 보는 듯한 착각이 든다.',
baseId: 'tr_pet35'
},
{
id: 'tr_pet36_m',
name: '로켓폭죽의\n불타는 풍선껌',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 기본속도 4~6% 증가\n강화 수치에 따라 체력감소 1~2% 느림',
method: '로켓폭죽의 여분의 풍선껌 진화하여 획득',
description: '씹을 수록 뜨거워지는 맛. 뜨거워서 불이 붙은건지 불이 붙어서 뜨거워진 건지 알 수가 없다.',
baseId: 'tr_pet36'
},
{
id: 'tr_pet37_m',
name: '통나무케이크의\n화려한 두조각 반',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 노란곰젤리 400~600점 추가\n강화 수치에 따라 분홍곰젤리 100~150점 추가',
method: '통나무케이크의 큼직한 한조각 진화하여 획득',
description: '배부르게 먹었는데도 아직도 두 조각 반이나 남았다니 너무 행복해!',
baseId: 'tr_pet37'
},
{
id: 'tr_pet40_m',
name: '까칠한 알록달록 캔디 껍질',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 분홍젤리 300~700점 추가\n강화 수치에 따라 장애물 파괴시 10300~13000점 추가',
method: '핑크캔디의 벗겨진 껍질 진화하여 획득',
description: '까칠거려서 더욱 매력적인 껍질. 왜 어른들은 그저 좋은 쿠키가 되라고만 하는걸까.',
baseId: 'tr_pet40'
},
{
id: 'tr_pet41_m',
name: '보라보라 파라핀 장미',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 장애물 통과시 6500~11000점 추가\n강화 수치에 따라 체력회복량 8~10% 증가',
method: '보라보라 향초의 아직 따뜻한 촛농 진화하여 획득',
description: '아직 따뜻할 때 촛농을 다듬어 장미를 만들었다. 처음에는 악소리가 나게 뜨겁지만 금방 괜찮아진다고.',
baseId: 'tr_pet41'
},
{
id: 'tr_pet42_m',
name: '오색 찬란한 피스타치오 껍질',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 광속질주시 모든 젤리 200~400점 추가\n광속질주 시간 10% 연장',
method: '반딧불이의 단단한 피스타치오 껍질 진화하여 획득',
description: '반딧불이 중에는 껍질까지 빛을 내는 돌연변이가 있다고. 바로 그 껍질이다.',
baseId: 'tr_pet42'
},
{
id: 'tr_pet43_m',
name: '젤리가 퐁퐁 솟아나는 접시',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 기본속도 3~4% 증가\n강화 수치에 따라 모든 젤리 270~450점 추가',
method: '젤리저울의 젤리를 담은 접시 진화하여 획득',
description: '먹어도 먹어도 젤리가 끊임없이 솟아나는 사랑스런 접시. 반했다.',
baseId: 'tr_pet43'
},
{
id: 'tr_pet44_m',
name: '코인이 은근 불어나는 접시',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 2~5% 확률로 코인꽃 생성\n강화 수치에 따라 코인 7~9% 보너스',
method: '코인저울의 코인을 담은 접시 진화하여 획득',
description: '분명 처음 담을 때보다 코인이 살짝 불어나 있다.',
baseId: 'tr_pet44'
},
{
id: 'tr_pet45_m',
name: '참나무 주스통의 강화유리 꼭지',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 기본속도 3~4% 증가\n강화 수치에 따라 체력감소 3~4% 느림',
method: '참나무 주스통의 나무꼭지 진화하여 획득',
description: '아무리 흔들려도 포도주스가 새지 않기 때문에 달릴 때 유용하다.',
baseId: 'tr_pet45'
},
{
id: 'tr_pet46_m',
name: '엄마사과의 처녀시절',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 기본속도 3~4% 증가\n강화 수치에 따라 이어달리기시 체력 25~55 증가',
method: '토끼사과의 엄마사과 진화하여 획득',
description: '햇살에 탱탱하게 빛이 나는 엄마의 전성기 시절. 그때가 다시 찾아왔다면 믿을 수 있을까.',
baseId: 'tr_pet46'
},
{
id: 'tr_pet47_m',
name: '굉장한 치즈 헤어볼',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력감소 2~4% 느림\n강화 수치에 따라 코인 8~10% 보너스',
method: '치즈뭉치 고양이의 치즈 헤어볼 진화하여 획득',
description: '별것 아닌 것처럼 보였던 헤어볼 안에 굉장한 것들이 숨어있다. 파헤칠수록 놀라게 될 것이다.',
baseId: 'tr_pet47'
},
{
id: 'tr_pet48_m',
name: '레인보우 하트 열쇠고리',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 모든 곰젤리 400~600점 추가\n강화 수치에 따라 아이템 시간 5~10% 연장',
method: '배냥이의 하트 열쇠고리 진화하여 획득',
description: '무지개빛 하트로 변신! 곰젤리 유혹에 박차를 가했다!',
baseId: 'tr_pet48'
},
{
id: 'tr_pet50_m',
name: '상큼달콤 레모네이드',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력회복량 5~8% 증가\n강화 수치에 따라 거품젤리 520~700점 추가',
method: '조각레몬의 상큼한 한조각 진화하여 획득',
description: '신 나게 놀다가 지쳤을 때 한 모금! 몸도 마음도 상큼하게 채워준다!',
baseId: 'tr_pet50'
},
{
id: 'tr_pet51_m',
name: '완벽 스케줄링 세트',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력회복량 3~5% 증가\n강화 수치에 따라 모든 젤리 270~450점 추가',
method: '집사 유령의 스케줄러 진화하여 획득',
description: '완벽한 인생 계획을 짜고 싶은가?! 이 세트를 손에 넣는 순간 이미 반은 이루었다!',
baseId: 'tr_pet51'
},
{
id: 'tr_pet52_m',
name: '특별한 키위 두 조각',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 거대화시 모든 젤리 200~300점 추가\n강화 수치에 따라 거대화시 기본속도 5~10% 증가',
method: '키위새의 키위 한 조각 진화하여 획득',
description: '어느새 두 조각이 되어 있었다! 놔두면 점점 늘어나는 걸까?',
baseId: 'tr_pet52'
},
{
id: 'tr_pet54_m',
name: '황금싹을 틔운 황금씨앗',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 5~6% 확률로 코인꽃 생성\n강화 수치에 따라 코인 6~8% 보너스',
method: '파프리카 샌드백의 황금씨앗 진화하여 획득',
description: '매일 일정한 햇빛과 금가루 양분을 줬더니 황금싹이 자라났다! 이제 부자 되는건 시간문제!',
baseId: 'tr_pet54'
},
{
id: 'tr_pet56_m',
name: '풍미가득 해바라기씨',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 생명물약 획득시 광속질주 0.3~0.8초\n강화 수치에 따라 펫이 획득한 점수 5~10% 추가',
method: '마시멜로 햄찌의 초코 해바라기씨 진화하여 획득',
description: '해바라기씨에 올리브기름을 바르고 햇볕에 두 번 구웠다! 마지막으로 초코에 퐁~',
baseId: 'tr_pet56'
},
{
id: 'tr_pet57_m',
name: '화려한 레이스 리본',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 색동별젤리 250~350점 추가\n강화 수치에 따라 체력회복량 3~6% 증가',
method: '미스 도레미의 깜찍 리본 진화하여 획득',
description: '특별한 날, 빛나고 싶은 날, 이 리본이 완벽한 하루를 선물해줄 거야.',
baseId: 'tr_pet57'
},
{
id: 'tr_pet58_m',
name: '번쩍번쩍 신사 모자',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력 25~35으로 부활 2회\n강화 수치에 따라 코인 5~7% 보너스',
method: '미스터 파솔라시의 신사 모자 진화하여 획득',
description: '이 모자를 쓰면 이 세상 제일 가는 멋쟁이 신사~ 번쩍번쩍 신사~',
baseId: 'tr_pet58'
},
{
id: 'tr_pet59_m',
name: '위대한 느낌의 마법사 모자',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 노란곰젤리 500~700점 추가',
method: '도토리 부엉이의 꽁다리 모자 진화하여 획득',
description: '이 모자를 쓰면 마치 자신이 위대한 마법사가 된 것만 같은 기분이 들어서 자꾸 잔소리를 하게 된다!',
baseId: 'tr_pet59'
},
{
id: 'tr_pet60_m',
name: '다시 만난 볼트너트세트',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 그림달젤리 400~900점 추가\n강화 수치에 따라 체력 40~60으로 부활',
method: '미니잭슨 2호의 알록달록 나사 진화하여 획득',
description: '다시는 빠지는 일이 없게 너트로 꽉. 미니잭슨 2호! 늘 건강해야 해!',
baseId: 'tr_pet60'
},
{
id: 'tr_pet61_m',
name: '벚꽃이 만개한 샤랄라 티스푼',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 40~60% 확률로 곰젤리파티에 분홍곰젤리 출현\n강화 수치에 따라 분홍곰젤리 200~300점 추가',
method: '홍차 찻잔의 벚꽃 티스푼 진화하여 획득',
description: '눈을 감고 티스푼을 저어보자. 어디선가 화사한 봄바람이 불어오는 것을 느낄 수 있다.',
baseId: 'tr_pet61'
},
{
id: 'tr_pet63_m',
name: '휘황찬란 고휘도 레몬 LED',
rarity: 'S',
canEvolve: true,
effect: '광속질주 시간 10% 연장\n강화 수치에 따라 노란곰젤리 500~800점 추가',
method: '레몬 전지의 레몬빛깔 LED 진화하여 획득',
description: '전도도가 높은 금이 함유되어 더 선명하고 더 눈부시게 빛을 내는 상큼한 LED.',
baseId: 'tr_pet63'
},
{
id: 'tr_pet64_m',
name: '애완쥐용 오렌지 러닝머신',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 광속질주시 체력감소 10~20% 느림\n강화 수치에 따라 체력감소 2~3% 느림',
method: '어린쥐의 오렌지껍질 챗바퀴 진화하여 획득',
description: '어린쥐가 요즘 살이 찐 것 같다며 누군가가 선물해주었다. 조만간 어린쥐의 근육을 볼 수 있을 것만 같은 느낌…',
baseId: 'tr_pet64'
},
{
id: 'tr_pet66_m',
name: '빵빵한 물놀이용 구명조끼',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 이어달리기시 체력 20~50 증가\n강화 수치에 따라 구출/부활(체력 10~20) 총 3회',
method: '미스터 백의 탱탱한 구명튜브 진화하여 획득',
description: '안전은 물론, 노출의 계절에 고민이 많은 쿠키들의 햇살 가리기에도 효과가 있다!',
baseId: 'tr_pet66'
},
{
id: 'tr_pet69_m',
name: '판다 만두의 잘 다듬어진 죽순',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 대나무잎 젤리 2000~4000점 추가\n강화 수치에 따라 체력감소 4~7% 느림',
method: '판다 만두의 갓 나온 죽순 진화하여 획득',
description: '판다 만두는 죽순 하나로는 절대 만족하지 않는다. 자, 여기 껍질을 벗기고 잘 다듬은 죽순 쟁반 대령이오~!',
baseId: 'tr_pet69'
},
{
id: 'tr_pet71_m',
name: '양파 물고기의 양파 비늘 슬라이스',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 눈물젤리 2800~3800점 추가\n강화 수치에 따라 체력 50~70으로 부활',
method: '양파 물고기의 양파 비늘 한 겹 진화하여 획득',
description: '벗겨도 벗겨도 계속 나오는 양파 비늘을 모았더니 슬라이스가 되었다!',
baseId: 'tr_pet71'
},
{
id: 'tr_pet72_m',
name: '캐스터네츠의 전자 메트로놈',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력회복량 10~13% 증가\n강화 수치에 따라 구멍에 빠진 쿠키를 1~3회 구출',
method: '캐스터네츠의 마카롱 메트로놈 진화하여 획득',
description: '시대에 발맞춰 빠르게 발전하는 쿠키세계! 더 다양한 옵션을 제공한다.',
baseId: 'tr_pet72'
},
{
id: 'tr_pet73_m',
name: '시나몬롤 토끼의 시나몬 파우더',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 시나몬롤 젤리 1800~2300점 추가\n강화 수치에 따라 체력회복량 4~7% 증가',
method: '시나몬롤 토끼의 시나몬 스틱 진화하여 획득',
description: '시나몬 스틱을 곱게 갈아 시나몬 잎을 곁들였다. 스틱이었을 때보다 더욱 강한 시나몬 향이 느껴진다.',
baseId: 'tr_pet73'
},
{
id: 'tr_pet74_m',
name: '찹쌀 하프물범의 최고급 팥 통조림',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 모든 젤리 130~180점 추가\n강화 수치에 따라 기본속도 6~11% 증가',
method: '찹쌀 하프물범의 단팥 통조림 진화하여 획득',
description: '반짝이는 금빛 캔이라 찹쌀 하프물범이 더욱더 소중하게 보관하고 있는 이 세상 최고의 팥으로 만든 팥 통조림',
baseId: 'tr_pet74'
},
{
id: 'tr_pet75_m',
name: '회중시계 심판의 황금빛 시계 덮개',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 광속질주 속도 5~10% 증가\n강화 수치에 따라 광속질주시 모든 젤리 300~500점 추가',
method: '회중시계 심판의 오래된 시계 덮개 진화하여 획득',
description: '눈을 닫고 마음으로 보아야 하는 것이 있다… 황금색은 더욱 잘 보일지도 모른다.',
baseId: 'tr_pet75'
},
{
id: 'tr_pet77_m',
name: '팝핑 용알의 분석된 엑스레이 사진',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 거대화시 모든 젤리 200~500점 추가\n강화 수치에 따라 거대화시 체력감소 6~15% 느림',
method: '팝핑 용알의 분석된 엑스레이 사진 진화하여 획득',
description: '자신이 누군지 잊지 않기 위해… 어라, 추가된 이 데이터 분석은 뭐지? 시대의 발전에 따라 팝핑용알은 스스로를 더욱 많이 알게 됐다.',
baseId: 'tr_pet77'
},
{
id: 'tr_pet80_m',
name: '똑떨어진 초코토핑 꼬리',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 구출/부활(체력 15~25) 총 3회\n강화 수치에 따라 장애물 파괴시 4~6코인 획득',
method: '사바나나 사자의 똑떨어진 꼬리 진화하여 획득',
description: '몸통 분리 묘기로 사바나나 사자 몸에서 떨어져 나왔는데, 어디서 무슨 모험을 한 건지 달달한 초콜릿을 묻혀왔다!',
baseId: 'tr_pet80'
},
{
id: 'tr_pet82_m',
name: '달절구의 달콤한 꿀 초승달 떡',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 보름달젤리 획득시 광속질주 0.4~0.9초\n강화 수치에 따라 체력 15~25으로 2회 부활',
method: '달절구의 완벽한 초승달떡 진화하여 획득',
description: '달절구의 말에 따르면, 초승달떡은 달콤한 꿀을 듬뿍 찍어 먹을 때 가장 맛있다고 한다.',
baseId: 'tr_pet82'
},
{
id: 'tr_ga001_m',
name: '스타를 만드는 비법책',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 중급 미니 연기점수 추가\n강화 수치에 따라 체력감소 2~4% 느림',
method: '연기의 비법이 담긴 마법책 진화하여 획득',
description: '연기만 잘 한다고 스타가 되는 것은 아니다. 어떤 쿠키가 이 책의 주인공이 될까?',
baseId: 'tr_ga001'
},
{
id: 'tr_ga002_m',
name: '500년 묵은 인삼주 골드라벨',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 노란곰젤리 500~900점 추가\n곰젤리파티 시간 10% 연장',
method: '500년 묵은 인삼 진화하여 획득',
description: '인삼의 영양과 유효성분을 농축한 액기스를 뜨거운 태양 아래서 익히면 황금빛이 난다.',
baseId: 'tr_ga002'
},
{
id: 'tr_ga007_m',
name: '신비로운 빛을 내는 흑검',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 곰젤리파티 시간 10~15% 연장\n강화 수치에 따라 노란곰젤리 300~700점 추가',
method: '신비로운 빛을 내는 운석 진화하여 획득',
description: '운석의 영험한 기운이 그대로 담긴 흑검이 탄생했다! 이 검으로 부서진 쿠키 왕국을 다시 살릴 수 있을까?',
baseId: 'tr_ga007'
},
{
id: 'tr_ga008_m',
name: '죽지않는 질긴 체스말',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 알파벳젤리 300~500점 추가\n강화 수치에 따라 체력감소 2~3% 느림',
method: '승리의 한복판에 서 있던 체스말 진화하여 획득',
description: '어떤 위기에서도 살아나는 체스말. 죽지 않는 비결이 뭘까?',
baseId: 'tr_ga008'
},
{
id: 'tr_ga009_m',
name: '꿀딸기 아이스크림',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 분홍곰젤리 200~400점 추가\n노란곰젤리 100~200점 추가',
method: '특히 더 달콤한 딸기잼 진화하여 획득',
description: '쿠키들의 지친 마음을 달래주는 새콤달콤 아이스크림. 한 입 물고 달리면 말랑한 기분을 만끽할 수 있다.',
baseId: 'tr_ga009'
},
{
id: 'tr_ga010_m',
name: '샤이닝 초코잼\n헤어왁스',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 곰젤리파티 시간 10~20% 연장\n강화 수치에 따라 노란곰젤리 300~600점 추가',
method: '다크 초코잼 헤어무스 진화하여 획득',
description: '쿠키들이 파티를 앞두고 펑키헤어를 만들기 위해\n꼭 찾는 아이템.',
baseId: 'tr_ga010'
},
{
id: 'tr_ga011_m',
name: '심해 방수\n손목시계',
rarity: 'A',
canEvolve: true,
effect: '보너스타임 1초 연장\n강화 수치에 따라 보너스타임 점수 5~10% 추가',
method: '특수 방수 손목시계 진화하여 획득',
description: '물 속에 빠져도 젖지 않게 보호막을 형성해주는\n방수 손목시계. 이제 물놀이가 두렵지 않아!',
baseId: 'tr_ga011'
},
{
id: 'tr_ga012_m',
name: '은빛 쿠키주스\n병뚜껑',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 코인 6~8% 보너스\n강화 수치에 따라 경험치 6~8% 보너스',
method: '의문의 쿠키주스 병뚜껑 진화하여 획득',
description: '코인과 착각하기 쉬운 은빛 병뚜껑. 하지만\n코인보다 귀하니 함부로 버리지 말자.',
baseId: 'tr_ga012'
},
{
id: 'tr_ga016_m',
name: '바다빗깔\n뿔소라 귀걸이',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 은화 획득시 500~700점 추가',
method: '바다빗깔 뿔소라 껍데기 진화하여 획득',
description: '차고 있으면 항상 바다 소리를 들을 수 있는\n귀걸이. 잠시만 하던 일을 멈추고 귀를 기울여\n보자.',
baseId: 'tr_ga016'
},
{
id: 'tr_ga017_m',
name: '도도한\n얼굴 가면',
rarity: 'B',
canEvolve: true,
effect: '강화 수치에 따라 경험치 5~8% 보너스',
method: '활짝 웃는 얼굴 가면 진화하여 획득',
description: '이것만 있으면 나도 차가운 도시 쿠키.',
baseId: 'tr_ga017'
},
{
id: 'tr_ga018_m',
name: '유명한\n허니칩 쿠키',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 노란곰젤리 200~500점 추가',
method: '유명한 초코칩 쿠키 진화하여 획득',
description: '천연벌집을 얹어 달달하고 건강한 맛. 더 유명해질\n것 같다.',
baseId: 'tr_ga018'
},
{
id: 'tr_ga019_m',
name: '튼튼한\n종합비타민제',
rarity: 'B',
canEvolve: true,
effect: '강화 수치에 따라 광속질주 속도 5~10% 증가\n체력이 40 증가',
method: '활력 비타민 C 알약 진화하여 획득',
description: '비타민 C, D, E가 골고루 들어 있어 하루를\n가뿐하게 시작할 수 있는 종합비타민제.',
baseId: 'tr_ga019'
},
{
id: 'tr_ga020_m',
name: '고칼로리\n크랜베리 시리얼',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 분홍곰젤리 100~300점 추가\n강화 수치에 따라 노란곰젤리 100~200점 추가',
method: '영양만점 크랜베리 진화하여 획득',
description: '영양과 칼로리가 더해진 시리얼. 간질간질한\n맛이다. 커피맛 쿠키는 칼로리가 높아서\n싫어한다고.',
baseId: 'tr_ga020'
},
{
id: 'tr_ga021_m',
name: '일명 털의\n습격 발모크림',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 금화 획득시 300~500점 추가\n강화 수치에 따라 은화 획득시 200~400점 추가',
method: '털털한 발모제 크림형 진화하여 획득',
description: '일주일만 발라보자. 털로 둘러싸인 자신을 발견할\n수 있다.',
baseId: 'tr_ga021'
},
{
id: 'tr_ga022_m',
name: '쫀득한\n마시멜로 파이',
rarity: 'B',
canEvolve: true,
effect: '강화 수치에 따라 알파벳젤리 200~400점 추가',
method: '고양이 발바닥 마시멜로 진화하여 획득',
description: '마시멜로를 살짝 구워 흐르기 직전에\n초코비스킷에 얹었다! 바로 먹어야 환상의 맛을\n즐길 수 있다고.',
baseId: 'tr_ga022'
},
{
id: 'tr_ga023_m',
name: '자외선 차단\n올리브 오일',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 기본속도 3~5% 증가\n아이템 시간 10% 연장',
method: '처음 수확한 올리브 오일 진화하여 획득',
description: '햇빛에 장시간 노출되어도 걱정없다. SPF50+++',
baseId: 'tr_ga023'
},
{
id: 'tr_ga029_m',
name: '시럽뿌린\n바삭바삭 크래커',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 체력이 10~30 증가',
method: '갓 구운 크래커 진화하여 획득',
description: '항상 눅눅해질까봐 시럽은 나중에 뿌려먹는데\n시럽을 부어도 바삭한 크래커라니!',
baseId: 'tr_ga029'
},
{
id: 'tr_ga030_m',
name: '은으로 빚은\n화살촉',
rarity: 'B',
canEvolve: true,
effect: '강화 수치에 따라 은화 획득시 400~600점 추가',
method: '흙으로 빚은 화살촉 진화하여 획득',
description: '은으로 빚어 더 고급스러워진 화살촉. 잘 못\n다뤘다간 다칠 수 있으니 조심하자.',
baseId: 'tr_ga030'
},
{
id: 'tr_ga031_m',
name: '시럽 철철\n달콤 체리',
rarity: 'B',
canEvolve: true,
effect: '강화 수치에 따라 분홍곰젤리 200~400점 추가',
method: '빛나는 빨간 체리 진화하여 획득',
description: '사탕수수 즙과 각설탕, 거기에 호박꿀까지 바른\n체리는 얼마나 환상적인 맛일까?',
baseId: 'tr_ga031'
},
{
id: 'tr_ga032_m',
name: '보송보송\n압정',
rarity: 'C',
canEvolve: true,
effect: '강화 수치에 따라 자석 시간 10~20% 연장\n강화 수치에 따라 펫이 획득한 점수 3~7% 추가',
method: '마녀가 깔아놓았던 압정 진화하여 획득',
description: '쿠키들의 반란. 압정을 곰팡이로 싸서 마녀의\n의자에 올려두었다.',
baseId: 'tr_ga032'
},
{
id: 'tr_ga033_m',
name: '윤기나는\n밀',
rarity: 'C',
canEvolve: true,
effect: '강화 수치에 따라 금화 획득시 300~500점 추가',
method: '풍년에 수확한 밀 진화하여 획득',
description: '철철 흐르는 밀의 윤기가 마녀의 머릿기름\n덕분이라는 소문이 있다.',
baseId: 'tr_ga033'
},
{
id: 'tr_ga034_m',
name: '키가 큰\n도토리',
rarity: 'C',
canEvolve: true,
effect: '보너스타임 1초 연장\n강화 수치에 따라 보너스타임 점수 5~10% 추가',
method: '언제봐도 귀여운 도토리 진화하여 획득',
description: '도토리가 키가 커 봤자지...',
baseId: 'tr_ga034'
},
{
id: 'tr_ga035_m',
name: '설탕 가득\n유기농 밀가루',
rarity: 'B',
canEvolve: true,
effect: '강화 수치에 따라 알파벳젤리 200~400점 추가',
method: '누런색 유기농 밀가루 진화하여 획득',
description: '유기농 밀가루와 달디 단 설탕을\n섞은 재료를 ’밀당’이라고 한다. 이 재료를 잘\n다루면? 밀당의 고수.',
baseId: 'tr_ga035'
},
{
id: 'tr_ga036_m',
name: '신선한\n오색 땅콩잼',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 노란곰젤리 200~400점 추가',
method: '잘 볶은 신선한 땅콩 진화하여 획득',
description: '땅콩을 볶자마자 바로 만든 신선한 땅콩잼. 맛을\n더하기 위해서는 마녀의 곰팡이가 들어가야\n한다나.',
baseId: 'tr_ga036'
},
{
id: 'tr_ga042_m',
name: '쿠키박스\n1440 컨트롤러',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 미니 자력 강화\n구멍에 빠진 쿠키를 1회 구출',
method: '쿠키박스720 컨트롤러 진화하여 획득',
description: '여러장소에서 달리기를 할 수 있어 두 배 재밌어진\n컨트롤러. 새로운 스테이지를 누비는 재미가\n쏠쏠하다.',
baseId: 'tr_ga042'
},
{
id: 'tr_ga043_m',
name: '어드벤처스 코믹스\n스페셜 에디션',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 경험치 13~23% 보너스\n강화 수치에 따라 체력감소 2~3% 느림',
method: '마블링 코믹스 스페셜 에디션 진화하여 획득',
description: '마블링 코믹스의 최강의 영웅들이 한자리에\n모였다. 꿈과 희망과 모험이 가득한 이야기.\n영화로 곧 출시된다고.',
baseId: 'tr_ga043'
},
{
id: 'tr_ga044_m',
name: '1000년 묵은\n홍삼주 핑크라벨',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 분홍곰젤리 300~1200점 추가\n강화 수치에 따라 아이템 시간 5~10% 연장',
method: '1000년 묵은 홍삼 진화하여 획득',
description: '1000년묵은 홍삼을 달여 만든 홍삼주. 이것을\n만들 때 온도와 습도를 비롯한 모든 조건이\n완벽했을 때만 핑크빛을 띤다고.',
baseId: 'tr_ga044'
},
{
id: 'tr_ga045_m',
name: '마카롱\n소불고기 버거',
rarity: 'A',
canEvolve: true,
effect: '아이템 시간 5% 연장\n강화 수치에 따라 거대화시 모든 젤리 100~200점\n추가',
method: '마카롱 소고기 버거 진화하여 획득',
description: '소고기에 여러가지 양념을 버무려 풍부한 식감을\n느낄 수 있는 고급버거.',
baseId: 'tr_ga045'
},
{
id: 'tr_ga046_m',
name: '파.괴.신의\n돌망치',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 장애물 파괴시 8300~11000점\n추가\n강화 수치에 따라 체력 30~40으로 1회 부활',
method: '파.괴.신의 뿅망치 진화하여 획득',
description: '파.괴.신이 어느날 새로 들고 온 망치. 참\n단단하게도 생겼다.',
baseId: 'tr_ga046'
},
{
id: 'tr_ga047_m',
name: '장밋빛 인생맛\n아이스크림',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 경험치 8~18% 보너스\n강화 수치에 따라 체력감소 3~4% 느림',
method: '인생맛 아이스크림 진화하여 획득',
description: '울 일보다 웃을 일이, 구멍에 빠지는 날보다\n날아오르는 날이 더 많은, 지금을 닮은 평범하지만\n소중한 아이스크림.',
baseId: 'tr_ga047'
},
{
id: 'tr_ga048_m',
name: '배가 부른\n돼지 저금통',
rarity: 'A',
canEvolve: true,
effect: '강화 수치에 따라 은화 획득시 300~500점 추가\n강화 수치에 따라 금화 획득시 300~500점 추가',
method: '언제나 배고픈 돼지 저금통 진화하여 획득',
description: '왠지 돼지같지만 멋있어.',
baseId: 'tr_ga048'
},
{
id: 'tr_ga049_m',
name: '베테랑\n감독님의 썬글라스',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 중급 어린이 연기점수 추가\n구멍에 빠진 쿠키를 1회 구출',
method: '까칠한 감독님의 클립보드 진화하여 획득',
description: '디테일한 감정까지 잡아낼 수 있는 썬글라스.\n발연기는 이제 그만.',
baseId: 'tr_ga049'
},
{
id: 'tr_ga050_m',
name: '광속의\n유리 피냐타',
rarity: 'S',
canEvolve: true,
effect: '광속질주 속도 5% 증가\n강화 수치에 따라 광속질주시 모든 젤리\n100~270점 추가',
method: '파티에서 도망친 피냐타 진화하여 획득',
description: '이제야 고향의 초원 위를 마음껏 달리는 피냐타.\n투명해진 피냐타 안의 사탕들이 아름답게 빛난다.',
baseId: 'tr_ga050'
},
{
id: 'tr_ga051_m',
name: '보물 상인의\n절대금고',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 코인 8~13% 보너스\n충돌 피해 10% 감소',
method: '보물 상인의 미니 금고 진화하여 획득',
description: '특별한 주문을 외워야만 열리는 절대금고. 잠든\n보물 상인에게 물어보면 잠꼬대로 말해줄지도...',
baseId: 'tr_ga051'
},
{
id: 'tr_ga052_m',
name: '플래티넘 펄샤이닝\n립스틱 7호 레드',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 별사탕젤리 500~1500점 추가\n초미니자력',
method: '뷰티풀 샤이닝 립스틱 3호 캔디핑크 진화하여 획득',
description: '누구나 한 번쯤 강렬한 빨간 립스틱을 바르고\n뽐내고 싶을 때가 있지. 화끈한 쿠키로 만들어줌.',
baseId: 'tr_ga052'
},
{
id: 'tr_ga053_m',
name: '꿀에 재워둔\n자연산 산삼',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 모든 곰젤리 200~400점 추가\n강화 수치에 따라 체력회복량 3~6% 증가',
method: '드디어 발견한 자연산 산삼 진화하여 획득',
description: '꿀에 재워두면 산삼이 잠이 드는걸까? 그곳에선\n젤리꿈을 꾸고 있을지도 모르겠다.',
baseId: 'tr_ga053'
},
{
id: 'tr_ga054_m',
name: '강호의\n옥수수 버터구이',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 2단점프부터 1000~1500점\n추가\n구멍에 빠진 쿠키를 2회 구출',
method: '강호의 야생 옥수수 진화하여 획득',
description: '옥수수 버터구이의 냄새를 풍기는 것만으로도\n집나간 쿠키가 돌아온다는 소문이 있다.',
baseId: 'tr_ga054'
},
{
id: 'tr_ga055_m',
name: '팜므파탈\nNO.10 오 드 퍼퓸',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 거대화시 모든 젤리 150~350점\n추가\n강화 수치에 따라 거대화 시간 5~10% 연장',
method: '템테이션 NO.9 오 드 퍼퓸 진화하여 획득',
description: '뭐든지 유혹할 수 있는 치명적 유혹의 향수.\n정수리에 뿌리면 더 효과가 좋다고 한다.',
baseId: 'tr_ga055'
},
{
id: 'tr_ga056_m',
name: '무적의\n강철 핫도그',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 장애물 파괴시 13300~16000점\n추가\n강화 수치에 따라 체력회복량 4~13% 증가',
method: '돌로 만든 핫도그 진화하여 획득',
description: '자, 이제 각오가 되었다면 씹고 뜯고 맛보고\n즐기자.',
baseId: 'tr_ga056'
},
{
id: 'tr_ga057_m',
name: '꽝꽝얼린\n아이스 초코비스킷',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 기본속도 4.3~6.3% 증가\n강화 수치에 따라 체력감소 3.5~4.5% 느림',
method: '꽁꽁얼린 아이스비스킷 진화하여 획득',
description: '절대 녹지 않아 몸 속까지 시원해지는 신비로운\n간식. 마음까지 얼려버릴지 모르니 조심!',
baseId: 'tr_ga057'
},
{
id: 'tr_ga058_m',
name: '열나게 맛있는\n용암 초코바',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 이어달리기시 체력 40~100\n증가\n점프 2회 추가',
method: '힘이 불끈 카라멜 초코바 진화하여 획득',
description: '쿠키들이 소풍갈 때 꼭 챙기는 초코바. 열이 날\n정도로 화끈한 맛.',
baseId: 'tr_ga058'
},
{
id: 'tr_ga059_m',
name: '울트라 파워\n쌍무지개삼',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 모든 젤리 270~450점 추가\n강화 수치에 따라 체력감소 2.5~3.5% 느림',
method: '울트라 파워 무지개삼 진화하여 획득',
description: '행운의 발견. 흔히 볼 수 없는 쌍무지개 삼! 쿠키의\n자신감이 배가 된 느낌이다.',
baseId: 'tr_ga059'
},
{
id: 'tr_ga060_m',
name: '어둠을 삼키는\n투명랜턴',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 장애물 통과시 8500~13000점\n추가\n강화 수치에 따라 체력감소 5~8% 느림',
method: '캠핑용 불꽃랜턴 진화하여 획득',
description: '삼켜진 어둠은 어디로 가기에 아직도 랜턴이\n투명한걸까?',
baseId: 'tr_ga060'
},
{
id: 'tr_ga061_m',
name: '끈적한 재즈 뮤즈젤리',
rarity: 'S',
canEvolve: true,
effect: '초 초미니자력\n강화 수치에 따라 음표젤리 400~700점 추가',
method: '새콤달콤 뮤즈젤리 진화하여 획득',
description: '시럽이 잔뜩 묻어있어 맛보는 것만으로도 끈적한 재즈 선율을 느낄 수 있다.',
baseId: 'tr_ga061'
},
{
id: 'tr_ga003_m',
name: '인고의 세월을 간직한 달조각',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 경험치 10~14% 보너스\n강화 수치에 따라 코인 9~11% 보너스',
method: '차갑게 식은 달조각 진화하여 획득',
description: '시련은 쿠키를 단련하지. 하지만 똑같은 실수를 반복한다면 나아지지 못 한다고.',
baseId: 'tr_ga003'
},
{
id: 'tr_ga067_m',
name: '광산용 황금 다이너마이트',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 장애물 파괴시 3~6코인 획득\n강화 수치에 따라 코인 1~3% 보너스',
method: '광산용 다이너마이트 진화하여 획득',
description: '다이너마이트는 터뜨려야 제맛인데 아까워서 터뜨릴 수나 있을까?',
baseId: 'tr_ga067'
},
{
id: 'tr_ga066_m',
name: '황금이 열리는 마법의 화분',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 3~6% 확률로 코인꽃 생성\n강화 수치에 따라 코인 6~10% 보너스',
method: '오래된 마법의 화분 진화하여 획득',
description: '마법나무의 정기를 받고 황금 줄기를 틔운 화분. 화분 안쪽의 표시선까지 물을 붓고 3분을 기다리면 황금이 주렁주렁!',
baseId: 'tr_ga066'
},
{
id: 'tr_ga065_m',
name: '원혼을 부르는 성난 횃불',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 원혼젤리 1500~3500점 추가\n강화 수치에 따라 장애물 통과시 3500~8000점 추가',
method: '원혼을 부르는 성냥갑 진화하여 획득',
description: '못다 이룬 꿈이 있는 원혼들이 자꾸 모여드는 횃불. 이글이글거리는 불꽃이 열정과 닮았다나.',
baseId: 'tr_ga065'
},
{
id: 'tr_ga064_m',
name: '설탕진주 내리는 눈 케이크',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 눈꽃젤리 600~1500점 추가\n강화 수치에 따라 장애물 파괴시 9300~12000점 추가',
method: '눈설탕 조각 케이크 진화하여 획득',
description: '연인쿠키들에게 인기가 좋은 로맨틱한 선물. 펄펄 내리는 설탕진주가 여심을 자극한다나.',
baseId: 'tr_ga064'
},

{
id: 'tr_ga068_m',
name: '힘이 넘치는 팔색 무지개떡',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 장애물 파괴시 15300~18000점 추가\n강화 수치에 따라 모든 젤리 80~130점 추가',
method: '힘이 솟는 오색 무지개떡 진화하여 획득',
description: '더 단단해져서 이제 무서울게 없는 무지개떡. 분홍 부분이 딸기맛인지 체리맛인지 쿠키들 사이에서 논란이 되고 있다고 함.',
baseId: 'tr_ga068'
},
{
id: 'tr_ga070_m',
name: '완벽한 질주를 위한 에어 꽃신',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 광속질주시 모든 젤리 200~400점 추가\n광속질주 시간 5% 연장',
method: '아름다운 질주를 위한 꽃신 진화하여 획득',
description: '에어 덕분에 더 멀리 달릴 수 있는 러닝 전용 슈즈. 거기다 예쁘기까지.',
baseId: 'tr_ga070'
},
{
id: 'tr_ga071_m',
name: '꿀 퐁당 가래떡꼬치',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 이어달리기시 체력 25~55 추가\n강화 수치에 따라 체력감소 2~3% 느림',
method: '꿀 찍은 가래떡 구이 진화하여 획득',
description: '꿀잼을 바르고 화염 꼬챙이에 꽂아 구운 특급 가래떡 꼬치. 맛좋은 가래떡이 네 개 씩이나! 아 배부르다!',
baseId: 'tr_ga071'
},
{
id: 'tr_ga072_m',
name: '꿀잼바른 고급 영양 약과',
rarity: 'S',
canEvolve: true,
effect: '보너스타임에서 펫이 커짐\n강화 수치에 따라 펫이 획득한 점수 8~13% 추가',
method: '펫 전용 영양 약과 진화하여 획득',
description: '맛과 쫀득함이 더해진 영양약과로 씹을 때마다 꿀재미를 느낄 수 있다.',
baseId: 'tr_ga072'
},
{
id: 'tr_ga073_m',
name: '마그네틱 원기회복 드링크',
rarity: 'S',
canEvolve: true,
effect: '초미니자력\n강화 수치에 따라 체력감소 3~5.5% 느림',
method: '마그네틱 에너지 드링크 진화하여 획득',
description: '이 드링크로 말씀드릴 것 같으면 한 번 마시면 착착 붙고, 두 번 마시면 훨훨 날지.',
baseId: 'tr_ga073'
},
{
id: 'tr_ga074_m',
name: '폭풍달콤 부활의 도넛',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 구멍에 빠진 쿠키를 1~2회 구출\n강화 수치에 따라 체력 25으로 1~3회 부활',
method: '달콤한 부활의 도넛 진화하여 획득',
description: '한 입 베어물면 입안에서 달콤함의 폭풍이 몰아친다. 이대로 휩쓸려버려도 좋아!',
baseId: 'tr_ga074'
},
{
id: 'tr_ga075_m',
name: '색동별젤리 왕관 리미티드 에디션',
rarity: 'S',
canEvolve: true,
effect: '초 초미니자력\n강화 수치에 따라 색동별젤리 200~600점 추가',
method: '색동별젤리 펜던트 리미티드 에디션 진화하여 획득',
description: '한정판에도 급이 있다. 왕관으로 자리를 옮긴 색동별 젤리들은 하늘 높은 줄 모르고 자력과 점수가 치솟고 있다고.',
baseId: 'tr_ga075'
},
{
id: 'tr_ga076_m',
name: '무지개 블랙홀 드링크',
rarity: 'S',
canEvolve: true,
effect: '초미니자력\n강화 수치에 따라 모든 젤리 170~350점 추가',
method: '마그네틱 무지개 드링크 진화하여 획득',
description: '아주 강력해진 드링크. 섣불리 뚜껑을 열었다가는 영혼까지 빨려 들어갈 수도 있다!',
baseId: 'tr_ga076'
},
{
id: 'tr_ga077_m',
name: '로열젤리 소프트 아이스크림',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 이어달리기시 체력 60~120 추가',
method: '여왕벌의 로열젤리 진화하여 획득',
description: '구름보다 부드럽고 캔디보다 달콤한 소프트 아이스크림. 마녀들의 디저트로 선풍적인 인기라고 한다.',
baseId: 'tr_ga077'
},
{
id: 'tr_ga078_m',
name: '누군가 만들어준 불꽃 칵테일',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력감소 4~7% 느림\n강화 수치에 따라 체력 20~40으로 부활',
method: '누군가 만들어준 신선한 야채주스 진화하여 획득',
description: '이 칵테일을 마신 쿠키는 언제 쓰러졌냐는 듯 다시 일어날 수 있지.',
baseId: 'tr_ga078'
},
{
id: 'tr_ga079_m',
name: '눈물콧물 쏙빠지는 와사비 챕스틱',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 경험치 13~23% 보너스\n강화 수치에 따라 체력 20~30으로 부활 2회',
method: '정신이 번쩍드는 와사비 챕스틱 진화하여 획득',
description: '슬픈 일이 있을 때 일부러 이 챕스틱을 바르고 맘껏 울어도 좋다.',
baseId: 'tr_ga079'
},
{
id: 'tr_ga080_m',
name: '노란곰젤리 모양 초코 롤케이크',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 이어달리기시 노란곰젤리 800~1300점 추가\n강화 수치에 따라 이어달리기시 구멍에 빠진 쿠키를 1~2회 구출',
method: '노란곰젤리 모양 롤케이크 진화하여 획득',
description: '초코의 풍미를 더해 더욱 맛있어진 롤케이크. 왠지 노란곰젤리가 더 신나보이는건 기분 탓일까.',
baseId: 'tr_ga080'
},
{
id: 'tr_ga081_m',
name: '근육폭발 에너지드링크',
rarity: 'S',
canEvolve: true,
effect: '초미니자력\n강화 수치에 따라 이어달리기시 체력 50~70 추가',
method: '레드쿠키 에너지드링크 진화하여 획득',
description: '붉은 근육이 불끈불끈 솟아나는 에너지 드링크. 진짜로 폭발하지는 않으니 걱정말자.',
baseId: 'tr_ga081'
},
{
id: 'tr_ga082_m',
name: '엄마가 정성껏 싸주신 도시락',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력회복량 2~5% 증가\n강화 수치에 따라 거대화시 모든 젤리 150~350점 추가',
method: '간편하고 든든한 삼각 주먹밥 진화하여 획득',
description: '이 도시락을 한 입 먹으면 정성맛, 사랑맛, 행복맛이 입안 가득 느껴진다.',
baseId: 'tr_ga082'
},
{
id: 'tr_ga083_m',
name: '우주를 누비는 젤리풍선다발',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 보너스타임 점수 8~13% 추가\n강화 수치에 따라 보너스타임 속도 3.2~5% 증가',
method: '하늘로 날아간 젤리풍선다발 진화하여 획득',
description: '향긋한 바람에 몸을 맡긴 풍선은 지금이 가장 행복하다고 한다.',
baseId: 'tr_ga083'
},
{
id: 'tr_ga084_m',
name: '초콜릿커버 학습서 양장본',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 경험치 15~25% 보너스\n강화 수치에 따라 체력감소 1~2% 느림',
method: '초콜릿커버 학습서 진화하여 획득',
description: '아무리 열심히 봐도 헤지지 않는다. 짱짱함.\n소중히 간직했다가 동생에게 물려주세요.',
baseId: 'tr_ga084'
},
{
id: 'tr_ga090_m',
name: '위대한 불멸의 도넛',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 구출/부활(체력 30) 총 2~4회',
method: '글레이즈드 불로장생 도넛 진화하여 획득',
description: '쿠키로 태어나 단 한 번 볼까 말까할 정도로 소중한 아이템. 흔하디 흔해 쌓이고 쌓인 일반 도넛과는 차원이 다르다.',
baseId: 'tr_ga090'
},
{
id: 'tr_ga091_m',
name: '황금연꽃이 날리는 지혜의 링',
rarity: 'S',
canEvolve: true,
effect: '충돌데미지추가\n강화 수치에 따라 코인 8~15% 보너스',
method: '황금으로 만든 가시 링 진화하여 획득',
description: '쿠키마을에서 가장 똑똑한 쿠키만이 지혜의 링을 쓸 수 있다고 한다. 지혜를 겨루는 방법은 꿀말잇기지. 우라늄!',
baseId: 'tr_ga091'
},
{
id: 'tr_ga092_m',
name: '불타는 초코 에너지 저장 인형',
rarity: 'S',
canEvolve: true,
effect: '충돌데미지추가\n강화 수치에 따라 이어달리기시 체력 70~130 추가',
method: '초콜릿 에너지 저장 인형 진화하여 획득',
description: '부글거리는 초코 마그마를 이용해 불에도 녹지 않는 엄청 강력한 초콜릿을 만들었다!',
baseId: 'tr_ga092'
},
{
id: 'tr_ga093_m',
name: '자력차단 티타늄 헬멧',
rarity: 'S',
canEvolve: true,
effect: '자력차단\n강화 수치에 따라 모든 젤리 430~700점 추가',
method: '자력차단 젤로 헬멧 진화하여 획득',
description: '궁극의 고수가 되고 싶다면, 이 헬멧을 쓰고도 무리없이 달릴 수 있어야 한다.',
baseId: 'tr_ga093'
},
{
id: 'tr_ga095_m',
name: '기적을\n부르는 구급차 장난감',
rarity: 'S',
canEvolve: true,
effect: '체력비례속도증가\n강화 수치에 따라 체력 25으로 1~3회 부활',
method: '작은 구급차 장난감 진화하여 획득',
description: '기적같은 힘으로 쿠키를 살려내는 장난감 차량. 그 작은 공간에 설탕 호흡기와 밀가루 반죽기까지 갖춰져 있다는 소문.',
baseId: 'tr_ga095'
},
{
id: 'tr_ga096_m',
name: '핫핫슙슙슈비루왑빱빠쑝 드링크',
rarity: 'S',
canEvolve: true,
effect: '초미니자력\n강화 수치에 따라 기본속도 4~7% 증가',
method: '레드 핫 칠리 에너지 드링크 진화하여 획득',
description: '참을 수 없이 맵고 화끈한 드링크. 마시면 저절로 외치게 된다. 핫핫슙슙슈비루왑빱빠쑝!',
baseId: 'tr_ga096'
},
{
id: 'tr_ga100_m',
name: '선원의\n불타는 황금검',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력 15~25으로 부활 3회\n강화 수치에 따라 코인 6~8% 보너스',
method: '선원의 단단한 단검 진화하여 획득',
description: '황금시럽에 여러 번 담금질하여 더욱 강해졌음.',
baseId: 'tr_ga100'
},
{
id: 'tr_ga101_m',
name: '빵빵한\n코끼리 저금통',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 금화 획득시 600~1100점 추가\n강화 수치에 따라 은화 획득시 200~700점 추가',
method: '언제나 배고픈 코끼리 저금통 진화하여 획득',
description: '저금통에 금화와 은화가 가득차 코에 끼고도 남는다.',
baseId: 'tr_ga101'
},
{
id: 'tr_ga102_m',
name: '소다향\n쌍쌍쭈쭈바',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력회복량 4~7% 증가\n강화 수치에 따라 거품젤리 350~550점 추가',
method: '소다향 쭈쭈바 진화하여 획득',
description: '꽁다리 때문에 싸우는 일이 없도록 쌍쌍쭈쭈바가 개발되었다!',
baseId: 'tr_ga102'
},
{
id: 'tr_ga103_m',
name: '더 맛있는\n몬스터머핀',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력감소 3.5~4.5% 느림\n강화 수치에 따라 체력 50~68으로 부활',
method: '생크림 몬스터머핀 진화하여 획득',
description: '더 무서워진 맛으로 돌아왔다! 한 입 맛보면 으르렁으르렁으르렁~',
baseId: 'tr_ga103'
},
{
id: 'tr_ga104_m',
name: '비타비타\n플러스 드링크',
rarity: 'S',
canEvolve: true,
effect: '초미니자력\n강화 수치에 따라 구출/부활(체력 15~25) 총 3회',
method: '비타비타 드링크 진화하여 획득',
description: '와우~ 너무 상큼해서 더 끌리는것 같아!',
baseId: 'tr_ga104'
},
{
id: 'tr_ga108_m',
name: '진한\n블랙커피 드링크',
rarity: 'S',
canEvolve: true,
effect: '초미니자력\n강화 수치에 따라 체력회복량 8~10% 증가',
method: '따뜻한 카페라떼 드링크 진화하여 획득',
description: '인생의 쓴맛을 아는 쿠키만이 이 깊고 진한 맛을 제대로 즐길 수 있다.',
baseId: 'tr_ga108'
},
{
id: 'tr_ga109_m',
name: '로열\n곰젤리안장',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 소환수에 탑승시 모든 젤리\n500~1400점 추가\n강화 수치에 따라 체력감소 4~7% 느림',
method: '말랑말랑 젤리안장 진화하여 획득',
description: '너무 푹신해서 한 번 앉으면 엉덩이를 뗄 수 없는,\n왠지 미미안한 안장.',
baseId: 'tr_ga109'
},
{
id: 'tr_ga111_m',
name: '불끈\n초 고단백 우유',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 거대화시 모든 젤리 150~350점\n추가\n강화 수치에 따라 체력 30~50으로 부활',
method: '얼룩소 고단백 우유 진화하여 획득',
description: '단백질이 99%나 함유되었다. 근육맛이 날 것 같아!',
baseId: 'tr_ga111'
},
{
id: 'tr_ga110_m',
name: '진짜배기\n꿀꽈배기 도넛',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 이어달리기시 구출/부활(체력\n15~35) 총 3회',
method: '배배꼬인 꽈배기 도넛 진화하여 획득',
description: '설탕으론 부족해 아예 시럽을 들이부었다. 황홀한 맛에 혀가 배배 꼬일지도.',
baseId: 'tr_ga110'
},
{
id: 'tr_ga113_m',
name: '영험한\n별빛 브로치',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 블랙베리젤리 1000~2000점\n추가\n강화 수치에 따라 색동별젤리 150~250점 추가',
method: '고귀한 별빛 브로치 진화하여 획득',
description: '영험한 기운이 담겨 브로치의 가치가 더욱 높아졌다.',
baseId: 'tr_ga113'
},
{
id: 'tr_ga114_m',
name: '분홍곰젤리\n쌍고깔모자',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 60~80% 확률로 곰젤리파티에\n분홍곰젤리 출현\n강화 수치에 따라 분홍곰젤리 300~400점 추가',
method: '분홍곰젤리 고깔모자 진화하여 획득',
description: '더 재미있고 화려해진 고깔모자! 자꾸 누군가를 놀려주고 싶은 기분이다.',
baseId: 'tr_ga114'
},
{
id: 'tr_ga115_m',
name: '캔디바퀴\n인라인스케이트',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 생명물약 획득시 광속질주\n0.5~1초\n강화 수치에 따라 체력감소 1~2% 느림',
method: '캔디바퀴 롤러스케이트 진화하여 획득',
description: '이것은 혁신. 새로운 유행. 캔디가 바닥에 닿는\n면적을 줄여 마찰을 최소화했다!',
baseId: 'tr_ga115'
},
{
id: 'tr_ga116_m',
name: '상큼달큼\n대폭발 골드키위빵',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 거대화시 기본속도 5~10% 증가\n강화 수치에 따라 키위젤리 200~300점 추가',
method: '상큼폭발 키위빵 진화하여 획득',
description: '달큼함 속에 상큼함이 감돈다. 잘 구워진\n골든키위가 입에서 살살 녹는 맛!',
baseId: 'tr_ga116'
},
{
id: 'tr_ga117_m',
name: '3단 피넛버터\n샌드위치',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 거대화시 체력감소 10~20%\n느림\n강화 수치에 따라 모든 젤리 270~450점 추가',
method: '달달한 피넛버터 샌드위치 진화하여 획득',
description: '쿠키들 사이에서 3단인지 6단인지 논란이 되고\n있지만, 맛있다는 것은 논할 필요가 없지!',
baseId: 'tr_ga117'
},
{
id: 'tr_ga118_m',
name: '99.9%\n골든 드링크',
rarity: 'S',
canEvolve: true,
effect: '초미니자력\n강화 수치에 따라 5~6% 확률로 코인꽃 생성',
method: '골든쉐이크 드링크 진화하여 획득',
description: '아무나 맛볼 수 없어서 더욱 귀하다. 한 모금만\n마시면 온몸이 블링블링해질것만 같아!',
baseId: 'tr_ga118'
},
{
id: 'tr_ga123_m',
name: '뜨겁게 달궈진\n젤리코',
rarity: 'S',
canEvolve: true,
effect: '5% 확률로 젤리코가 떨어짐\n강화 수치에 따라 체력감소 1.5~2.5% 느림',
method: '불타는 빨간 젤리코 진화하여 획득',
description: '한 번 달궈진 젤리코는 식는 법이 없지. 뜨거운\n맛이 뭔지 알게 될 거야!',
baseId: 'tr_ga123'
},
{
id: 'tr_ga124_m',
name: '토핑 듬뿍\n밤하늘 크레페',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 그믐달젤리 400~900점 추가\n강화 수치에 따라 체력 30~70으로 부활',
method: '달콤 밤하늘 크레페 진화하여 획득',
description: '별빛과 달빛을 잘 섞고 밤하늘 소스를\n먹음직스럽게 뿌렸다! 꿈을 꾸는 듯한 맛!',
baseId: 'tr_ga124'
},
{
id: 'tr_ga125_m',
name: '보름달빛\n허니문 칵테일',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력감소 3~6% 느림\n구멍에 빠진 쿠키를 2회 구출',
method: '초승달빛 무드 칵테일 진화하여 획득',
description: '모든 것이 충만하고 완벽한, 가장 행복한 순간에\n한 모금 마시는 최상의 칵테일!',
baseId: 'tr_ga125'
},
{
id: 'tr_ga126_m',
name: '치명적인\n쌍쌍 빙산바',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 기본속도 2~4% 증가\n강화 수치에 따라 경험치 15~25% 보너스',
method: '빙산의 일각 아이스바 진화하여 획득',
description: '치명적으로 차갑고 강하다! 나눠먹고 싶어도 쪼갤\n수가 없다는 소문이...',
baseId: 'tr_ga126'
},
{
id: 'tr_ga131_m',
name: '신성한\n대지의 번영 팔찌',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 거대화 착지시 바닥에서 코인\n생성 중급 1단~10단',
method: '대지의 번영 팔찌 진화하여 획득',
description: '세상에서 가장 거대하고 자비로운 대지의 기운이\n응축되어 만들어진 전설의 팔찌.',
baseId: 'tr_ga131'
},
{
id: 'tr_ga132_m',
name: '신성한\n불의 수호 반지',
rarity: 'S',
canEvolve: true,
effect: '충돌 직전 모든 장애물을 파괴 2회\n강화 수치에 따라 체력감소 3~6% 느림',
method: '불의 수호 반지 진화하여 획득',
description: '세상에서 가장 깊고 뜨거운 불의 기운이 응축되어\n만들어진 전설의 반지.',
baseId: 'tr_ga132'
},
{
id: 'tr_ga133_m',
name: '신성한\n바람의 질주 귀걸이',
rarity: 'S',
canEvolve: true,
effect: '광속질주시 장애물 통과\n강화 수치에 따라 생명물약 획득시 광속질주\n0.3~0.8초',
method: '바람의 질주 귀걸이 진화하여 획득',
description: '세상에서 가장 날쌨고 가벼운 바람의 기운이\n응축되어 만들어진 전설의 귀걸이.',
baseId: 'tr_ga133'
},
{
id: 'tr_ga134_m',
name: '신성한\n물의 회복 펜던트',
rarity: 'S',
canEvolve: true,
effect: '장애물에 충돌시 체력복구 2회\n강화 수치에 따라 코인 8~13% 보너스',
method: '물의 회복 펜던트 진화하여 획득',
description: '세상에서 가장 맑고 깨끗한 물의 기운이 응축되어\n만들어진 전설의 펜던트.',
baseId: 'tr_ga134'
},
{
id: 'tr_ga135_m',
name: '파직파지직\nC 건전지 바톤',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 이어달리기시 꼬마 자력 세기\n증가\n강화 수치에 따라 모든 젤리 140~280점 추가',
method: '짜릿한 AAA 건전지 바톤 진화하여 획득',
description: '사이즈가 커진 만큼 화끈하고 더 짜릿해진 건전지\n바톤!',
baseId: 'tr_ga135'
},
{
id: 'tr_ga136_m',
name: '풍미폭발\n초코 크로와상',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력감소 2~4% 느림\n강화 수치에 따라 체력회복량 5.5~10% 증가',
method: '풍미가득 버터 크로와상 진화하여 획득',
description: '달콤함과 바삭함이 한 데 어우러져 폭발하는\n느낌!! 단, 입가에 초코를 묻히고 다니면 귀여울 수\n있으니 주의.',
baseId: 'tr_ga136'
},
{
id: 'tr_ga137_m',
name: '미니 버블껌\n소다엔진 로켓',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 버블껌볼 발사점수\n1000~1500점 추가\n강화 수치에 따라 체력 50~70으로 부활',
method: '알록달록 미니 버블껌 미사일 진화하여 획득',
description: '소다 기포 추진 엔진을 장착한 버블껌 로켓.\n우주에 근사한 예술작품 하나 남겨볼까?',
baseId: 'tr_ga137'
},
{
id: 'tr_ga138_m',
name: '미끌미끌\n황금 바나나 껍질',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 기본속도 4~6% 증가\n강화 수치에 따라 코인 10~12% 보너스',
method: '누군가가 놓아둔 바나나 껍질 진화하여 획득',
description: '일반 바나나보다 훨씬 미끈덩거리는 황금 바나나\n껍질. 알맹이는 어디로 갔을까?',
baseId: 'tr_ga138'
},
{
id: 'tr_ga139_m',
name: '전문가용\n모래주머니 10g',
rarity: 'S',
canEvolve: true,
effect: '이어달리기시 기본속도 10% 감소\n강화 수치에 따라 체력감소 4.5~6.5% 느림',
method: '초보용 모래주머니 5g 진화하여 획득',
description: '연습 효과가 짱짱! 발목에 착 달라붙어 착용감도\n짱짱!',
baseId: 'tr_ga139'
},
// {
//     id: 'tr_ga140_m',
//     name: '???',
//     rarity: 'S',
//     canEvolve: true,
//     effect: '???',
//     method: '???',
//     description: '???',
//     baseId: 'tr_ga140',
//     booknone: true
// },
{
id: 'tr_ga141_m',
name: '전문가용\n베이킹파우더',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 생명물약 획득시 거대화 2~3초\n강화 수치에 따라 체력회복량 4~6% 증가',
method: '초급자용 베이킹파우더 진화하여 획득',
description: '초급자 손에 닿지 않도록 주의. 케이크가 너무\n커져 깔릴 수 있음.',
baseId: 'tr_ga141'
},
{
id: 'tr_ga142_m',
name: '젤리퐁퐁\n점핑 젤리말',
rarity: 'S',
canEvolve: true,
effect: '초미니자력\n강화 수치에 따라 거대화 착지시 바닥에서 젤리\n생성 중급 1단~10단',
method: '젤리퐁퐁 스카이콩콩 진화하여 획득',
description: '탄력이 일품인 거대 젤리를 한 땀 한 땀 붙여\n만들었다. 달콤함이 폴폴~',
baseId: 'tr_ga142'
},
{
id: 'tr_ga143_m',
name: '사르르르\n벚꽃만개 솜사탕',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 벚꽃젤리 점수 200~500점 추가\n강화 수치에 따라 기본속도 1.5~2.5% 증가',
method: '사르르 분홍벚꽃 솜사탕 진화하여 획득',
description: '한창 날리던 벚꽃을 곱게 말려, 솜사탕 위에 토핑\n했다. 분홍구름 위를 뛰노는 듯한 환상적인 맛!',
baseId: 'tr_ga143'
},
{
id: 'tr_ga144_m',
name: '얼음돌풍\n스크류 소다바',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 거품젤리 450~750점 추가\n강화 수치에 따라 체력감소 2~3% 느림',
method: '시원달콤 아이스 소다바 진화하여 획득',
description: '얼음 돌풍 한가운데에서 얼었다. 무더운 여름을\n차갑게 얼려버릴 스크류 소다바!!',
baseId: 'tr_ga144'
},
{
id: 'tr_ga145_m',
name: '아이스 스파클링\n워터 드링크',
rarity: 'S',
canEvolve: true,
effect: '초미니자력\n강화 수치에 따라 체력 45~75으로 부활 1회',
method: '스파클링 워터 드링크 진화하여 획득',
description: '톡톡 쏘는 아이스 거품 한 입이면 온몸의 오장\n육부가 깨어나는 느낌.',
baseId: 'tr_ga145'
},
{
id: 'tr_ga150_m',
name: '조청 가득\n대추꽃 송편',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 대추 젤리 400~900점 추가\n강화 수치에 따라 체력 40~70으로 부활',
method: '달콤한 대추꽃 송편 진화하여 획득',
description: '꿀이 발라져 있어서, 행복 가득한 연휴를 보낼 수\n있을 것 같다. 사랑하는 쿠키들과 함께라면 더욱\n꿀같겠지.',
baseId: 'tr_ga150'
},
{
id: 'tr_ga151_m',
name: '대나무향 솔솔 오곡 죽통밥',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 대나무잎 젤리 400~900점 추가\n강화 수치에 따라 체력 40~70으로 부활',
method: '대나무향 물씬 죽통밥 진화하여 획득',
description: '쿠키의 건강에 좋은 각종 재료들을 넣어 죽통 안에서 밥과 함께 쪘다. 이보다 완벽한 밥이 있을까?',
baseId: 'tr_ga151'
},
{
id: 'tr_ga152_m',
name: '완벽 방수 얼음부츠',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 20~30% 확률로 얼음다리 생성\n강화 수치에 따라 체력 감소 3~6% 느림',
method: '기능성 얼음구두 진화하여 획득',
description: '방수까지 완벽하게 되어 어떤 냉기와 눈보라에도 견딜 수 있다. 종아리 사이즈 제한 있음.',
baseId: 'tr_ga152'
},
{
id: 'tr_ga153_m',
name: '으리번쩍 황금 철퇴',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 장애물 파괴시 30~80% 확률로 날개 달린 코인 생성\n강화 수치에 따라 코인 5~6% 보너스',
method: '번쩍번쩍 황금 쌍절곤 진화하여 획득',
description: '눈앞의 장애물을 모조리 없앨 수 있을 것만 같다! 실수로 자신이 맞는 일이 없도록 하자.',
baseId: 'tr_ga153'
},
{
id: 'tr_ga162_m',
name: '과육듬뿍 오렌지라임 톡톡 스무디',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력 감소 4~5% 느림\n강화 수치에 따라 모든 과즙젤리 250~450점 추가',
method: '아이스 오렌지라임 스무디 진화하여 획득',
description: '입안에 톡 씹히는 알갱이가 이 더위를 한 방에 터뜨려버린다고?! 톡! 토독~!',
baseId: 'tr_ga162'
},
{
id: 'tr_ga160_m',
name: '생크림 듬뿍 딸기 에클레어 바톤',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력 감소 4~5% 느림\n강화 수치에 따라 이어달리기 쿠키가 체력 50~68으로 부활',
method: '달콤한 초콜릿 에클레어 바톤 진화하여 획득',
description: '한껏 입을 크게 벌려야 베어먹을 수 있는 풍성한 한 입! 으음~',
baseId: 'tr_ga160'
},
{
id: 'tr_ga161_m',
name: '더블 스프링 젤리슈즈 더 샤이니',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 구출/부활(체력 25) 총 2~4회\n점프 2회 추가',
method: '스프링 팡팡 핑크 젤리슈즈 진화하여 획득',
description: '더 반짝이는 더블 스프링을 달고 돌아왔다! 언제 어디서나 이쁘고 강력하게 솟아오를 수 있다!',
baseId: 'tr_ga161'
},
{
id: 'tr_ga174_m',
name: '쫄깃바삭 갓 구운 난 세트',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 기본속도 5~10% 증가\n강화 수치에 따라 꿀과자젤리 2200~3100점 추가',
method: '쫄깃바삭 갓 구운 난 진화하여 획득',
description: '한 입만 베어물어도 식감과 풍미에 감동! 곁들인 꿀을 찍어먹으면 정말 눈물나게 맛있다.',
baseId: 'tr_ga174'
},
{
id: 'tr_ga175_m',
name: '시원달콤 더블 망고 라씨',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 체력 감소 6~9% 느림\n강화 수치에 따라 카푸카푸젤리 3200~4100점 추가',
method: '시원달콤 망고 라씨 진화하여 획득',
description: '입맛도 건강도 한 번에 사로잡는 바로 그 맛!\n상큼한 요거트와 달콤한 과일이 서늘하게 땀을 식혀주는 과일 라씨. 망고를 두 배로 섞어 넣어',
baseId: 'tr_ga175'
},
{
id: 'tr_ga176_m',
name: '달콤상큼짜릿 초탄산 드링크',
rarity: 'S',
canEvolve: true,
effect: '초미니자력\n강화 수치에 따라 코인 6~13% 보너스',
method: '달콤상큼 탄산 드링크 진화하여 획득',
description: '텁텁한 입맛도 달콤하게, 퍽퍽한 마음도 상큼하게, 몽롱한 머리는 짜릿하게 터뜨려주는 바로 그 맛!\n마시고 나면 온 몸이 짜릿하게 깨어난다!',
baseId: 'tr_ga176'
},
{
id: 'tr_ga184_m',
name: '소환수를 위한 특제 사료',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 소환수 탑승시 19~28% 체력감소 느림\n강화 수치에 따라 소환수에 탑승시 모든 젤리 100~1000점 추가',
method: '소환수를 위한 사료 진화하여 획득',
description: '소환수들의 까다로운 입맛마저 만족시키는 최고의 사료. 쿠키들의 동반자, 소환수들에게 특별한 한끼를 선사해보세요! (주의, 과다 섭취시 소환수가 통통해질 수 있습니다)',
baseId: 'tr_ga184'
},
{
id: 'tr_ga185_m',
name: '챔피언을 위한 빛나는 크라운',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 자력세기 증가\n강화 수치에 따라 체력 45~55로 2회 부활',
method: '승자를 위한 깃털 월계관 진화하여 획득',
description: '챔피언을 위해 만들어진 오색빛깔 크라운. 쓰는 순간, 모든 쿠키가 당신을 향해 고개를 숙인다. 경배하라!',
baseId: 'tr_ga185'
},
{
id: 'tr_ga186_m',
name: '리치리치 코인 지갑',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 거대화시 기본속도 8~13% 증가\n강화 수치에 따라 거대화시 40~90% 확률로 은화를 금화로 변경 (변경 최대 개수 제한 있음)',
method: '짤랑짤랑 코인 지갑 진화하여 획득',
description: '코인을 담아두기만 했는데, 뭔가 불어나는 기분이 드는 리치리치 동전지갑. 두툼한 지갑을 바라보기만 해도 마음이 배부르다.',
baseId: 'tr_ga186'
},
{
id: 'tr_ga190_m',
name: '가을밤 캠핑꼬치 세트',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 모든 젤리 220~400점 추가\n강화 수치에 따라 체력감소 4~7% 느림',
method: '갓 구운 은행 꼬치 진화하여 획득',
description: '시원한 밤하늘 아래, 뜨거운 화로 위에 올려 지글지글 구워먹는 맛이 캠핑의 별미!',
baseId: 'tr_ga190'
},
{
id: 'tr_ga191_m',
name: '슈퍼 머쉬룸 드링크',
rarity: 'S',
canEvolve: true,
effect: '초미니자력\n강화 수치에 따라 생명물약 획득시 광속질주 0.3~0.8초',
method: '머쉬룸 드링크 진화하여 획득',
description: '험한 산을 뒤져봐도 찾기 힘들다는 희귀한 버섯으로 만들었다. 만들기 힘든 만큼 마시기만 하면 엄청난 효과가 있다고...',
baseId: 'tr_ga191'
},
{
id: 'tr_ga192_m',
name: '숲속의 버섯램프',
rarity: 'S',
canEvolve: true,
effect: '강화 수치에 따라 부활시 1.5~2.5초 동안 거대화 (중첩적용X)\n강화 수치에 따라 부활시 1.5~2.5초 동안 광속질주 (중첩적용X)',
method: '오래가는 버섯 손전등 진화하여 획득',
description: '어두운 밤 숲 속을 따뜻하게 밝혀주는 버섯 램프가 있다면 나무들도 외롭지 않다.',
baseId: 'tr_ga192'
},
],
// 祝福宝物（祝福後）
blessed: [
{
id: 'tr_ch01_m_blessed',
name: '축복받은 용기의 해골단추 목걸이',
rarity: 'A',
effect: '강화 수치에 따라 체력이 20~30 증가\n강화 수치에 따라 체력 10~20으로 부활',
method: '용감한 쿠키군의 세번째 해골단추 진화하여 획득',
description: '용감한 쿠키군의 세번째 해골단추로 만든 목걸이. 목에 걸면 용기가 샘솟아 더욱 용감해진 기분이 든다고 한다.',
baseId: 'tr_ch01_m'
},
{
id: 'tr_ch02_m_blessed',
name: '축복받은 달콤한 딸기 타르트',
rarity: 'B',
effect: '보너스타임 2초 연장\n강화 수치에 따라 보너스타임 점수 10~15% 추가',
method: '딸기맛 쿠키의 달콤한 향딸기 진화하여 획득',
description: '한 입 베어무는 순간 봄이 피어나는 소리가 들린다는 딸기 타르트.',
baseId: 'tr_ch02_m'
},
{
id: 'tr_ch03_m_blessed',
name: '축복받은 슈가범벅 롤리팝캔디 조각',
rarity: 'C',
effect: '강화 수치에 따라 경험치 8~12% 보너스\n강화 수치에 따라 코인 6~8% 보너스',
method: '명랑한 쿠키양의 롤리팝캔디 조각 진화하여 획득',
description: '이보다 더 달콤할 수 없다. 충치 조심!',
baseId: 'tr_ch03_m'
},
{
id: 'tr_ch05_m_blessed',
name: '축복받은 구름맛 쿠키의 쌍무지개사탕',
rarity: 'B',
effect: '아이템 시간 10% 연장\n강화 수치에 따라 광속질주시 모든 젤리 50~150점 추가',
method: '구름맛 쿠키의 무지개사탕 조각 진화하여 획득',
description: '드디어 맛이 두 배 풍성해진 쌍무지개사탕이 되었다!',
baseId: 'tr_ch05_m'
},
{
id: 'tr_ch06_m_blessed',
name: '축복받은 버터크림 초코 팬케익',
rarity: 'B',
effect: '강화 수치에 따라 코인 6~7% 보너스',
method: '버터크림 초코쿠키의 느끼한 버터조각 진화하여 획득',
description: '버터가 잔뜩 들어가서 더욱 풍부한 맛. 느끼해서 더 맛있어.',
baseId: 'tr_ch06_m'
},
{
id: 'tr_ch07_m_blessed',
name: '축복받은 발광하는 푸른 나뭇잎',
rarity: 'S',
effect: '강화 수치에 따라 점프 4~6회 추가',
method: '닌자맛 쿠키의 분신 나뭇잎 진화하여 획득',
description: '빛을 내는 나뭇잎은 햇빛이 없어도 스스로 양분을 만들 수 있다고.',
baseId: 'tr_ch07_m'
},
{
id: 'tr_ch08_m_blessed',
name: '축복받은 빛나는 초코 보석반지',
rarity: 'A',
effect: '강화 수치에 따라 충돌 피해 5~10% 감소\n강화 수치에 따라 체력회복량 3~5% 증가',
method: '공주맛 쿠키의 완소 보석반지 진화하여 획득',
description: '사탕 가운데에 초코가 박혀있다. 안 그래도 맛있는데 먹는 동안 점점 행복해지는 기분. 금상첨화.',
baseId: 'tr_ch08_m'
},
{
id: 'tr_ch09_m_blessed',
name: '축복받은 강철 스파이크 말발굽',
rarity: 'S',
effect: '광속질주 속도 10% 증가\n강화 수치에 따라 광속질주시 모든 젤리 150~250점 추가',
method: '용사맛 쿠키의 말발굽 장식 진화하여 획득',
description: '말발굽에 솟아있는 돌기가 빠르게 달려도 미끄러지지 않게 해줌.',
baseId: 'tr_ch09_m'
},
{
id: 'tr_ch10_m_blessed',
name: '축복받은 기묘한 카페라떼',
rarity: 'A',
effect: '강화 수치에 따라 체력감소 2~3% 느림\n강화 수치에 따라 체력회복량 3~5% 증가',
method: '커피맛 쿠키의 오리지널 커피콩 진화하여 획득',
description: '한 모금 마시면 눈살이 찌푸려지지만 묘하게 계속 마시게 된다. 아, 너란 라떼.',
baseId: 'tr_ch10_m'
},
{
id: 'tr_ch11_m_blessed',
name: '축복받은 불타는 날쌘 바퀴',
rarity: 'S',
effect: '강화 수치에 따라 기본속도 4~6% 증가\n체력 10으로 부활 3회',
method: '보더맛 쿠키의 날쌘 바퀴 진화하여 획득',
description: '달릴수록 활활 타오름. 빨리 달려서 불이 붙은건지 불이 붙어서 빨라진 건지 알 수가 없다.',
baseId: 'tr_ch11_m'
},
{
id: 'tr_ch12_m_blessed',
name: '축복받은 천사맛 쿠키의 무지개빛 깃털',
rarity: 'S',
effect: '강화 수치에 따라 꼬마 자력 세기 증가\n강화 수치에 따라 모든 젤리 120~260점 추가',
method: '천사맛 쿠키의 성스러운 깃털 진화하여 획득',
description: '찬란한 빛을 내는 깃털의 아름다움에 넋이 나간 젤리들이 눈이 하트가 되었다. 뿅!',
baseId: 'tr_ch12_m'
},
{
id: 'tr_ch13_m_blessed',
name: '축복받은 꿈틀거리는 좀비 세포체',
rarity: 'A',
effect: '강화 수치에 따라 체력 10~20으로 부활 3회',
method: '좀비맛 쿠키의 오리지널 세포체 진화하여 획득',
description: '더욱 생명력이 끈질겨진 좀비 세포체. 죽은것 같아도 밟으면 꿈틀한다.',
baseId: 'tr_ch13_m'
},
{
id: 'tr_ch14_m_blessed',
name: '축복받은 쿠키앤크림 쿠키의 야식',
rarity: 'A',
effect: '강화 수치에 따라 체력감소 3~6% 느림',
method: '쿠키앤크림 쿠키의 오후 간식 진화하여 획득',
description: '한 번 생각나면 쉽사리 잠들 수 없지. 일단 먹고 보자.',
baseId: 'tr_ch14_m'
},
{
id: 'tr_ch15_m_blessed',
name: '축복받은 풀파워 단백질 파우더',
rarity: 'S',
effect: '강화 수치에 따라 장애물 파괴시 4700~7500점 추가\n강화 수치에 따라 광속질주 속도 5~10% 증가',
method: '근육맛 쿠키의 단백질 파우더 진화하여 획득',
description: '이 파우더를 섭취하면 장애물 앞에서도 당당할 수 있다. 아무리 많이 먹어도 부작용이 없으니 안심하자.',
baseId: 'tr_ch15_m'
},
{
id: 'tr_ch16_m_blessed',
name: '축복받은 근성의 부활 부츠',
rarity: 'S',
effect: '강화 수치에 따라 체력 15~25으로 부활 3회',
method: '해적맛 쿠키의 부활 부츠 진화하여 획득',
description: '해적의 근성이 담겨있어 끈질기게 살아나는 부활의 부츠. 시간이 갈 수록 짙어지는 향기만큼 능력도 강해지고 있다.',
baseId: 'tr_ch16_m'
},
{
id: 'tr_ch18_m_blessed',
name: '축복받은 반짝이는 블루베리 샤베트',
rarity: 'S',
effect: '강화 수치에 따라 고급 꼬마 연기점수 추가',
method: '피겨여왕맛 쿠키의 블루베리 헤어핀 진화하여 획득',
description: '블루베리를 차가운 미소와 섞어 만든 샤베트. 왠지 몸이 가벼워지는 맛.',
baseId: 'tr_ch18_m'
},
{
id: 'tr_ch19_m_blessed',
name: '축복받은 초고밀도 민트캔디',
rarity: 'S',
effect: '강화 수치에 따라 체력감소 6~7% 느림',
method: '히어로맛 쿠키의 민트캔디 진화하여 획득',
description: '민트캔디 수백 개를 만들 정도의 설탕을 초고밀도로 압축한 캔디. 일반 민트캔디와 차원이 다른 파워를 자랑한다.',
baseId: 'tr_ch19_m'
},
{
id: 'tr_ch20_m_blessed',
name: '축복받은 10단고음 핑크 메가폰',
rarity: 'S',
effect: '강화 수치에 따라 이어달리기시 체력 70~130 추가\n강화 수치에 따라 이어달리기시 모든 젤리 140~280점 추가',
method: '치어리더맛 쿠키의 핑크 메가폰 진화하여 획득',
description: '더이상 올라가지 않을 것 같은데 자꾸 올라가는 메가폰. 돌고래와 대화를 나눠보자.',
baseId: 'tr_ch20_m'
},
{
id: 'tr_ch21_m_blessed',
name: '축복받은 워터프루프 초콜릿 위장 크림',
rarity: 'S',
effect: '강화 수치에 따라 장애물 파괴시 10300~13000점 추가\n강화 수치에 따라 체력회복량 4~7% 증가',
method: '특전사맛 쿠키의 초콜릿 위장 크림 진화하여 획득',
description: '땀에도 비에도 지워지지 않는 강력한 위장 크림.',
baseId: 'tr_ch21_m'
},
{
id: 'tr_ch22_m_blessed',
name: '축복받은 가시꽂힌 분신 인형',
rarity: 'S',
effect: '강화 수치에 따라 2단점프부터 1000~1500점 추가\n구멍에 빠진 쿠키를 2회 구출',
method: '의적맛 쿠키의 분신인형 진화하여 획득',
description: '누군가 엄청 미워하고 있는 것 같다. 화가 미칠 수 있으니 조심하자.',
baseId: 'tr_ch22_m'
},
{
id: 'tr_ch23_m_blessed',
name: '축복받은 가시돋친 꼬리형 나침반',
rarity: 'S',
effect: '강화 수치에 따라 분홍곰젤리 500~1000점 추가\n강화 수치에 따라 모든 곰젤리 100~200점 추가',
method: '악마맛 쿠키의 꼬리형 나침반 진화하여 획득',
description: '가시가 돋쳐 더 악랄해진 꼬리형 나침반. 더 집요하게 맛있는 젤리를 추적해서 찾아낸다.',
baseId: 'tr_ch23_m'
},
{
id: 'tr_ch24_m_blessed',
name: '축복받은 선홍빛 푸딩 미디움레어',
rarity: 'S',
effect: '강화 수치에 따라 거대화시 모든 젤리 300~400점 추가\n거대화 시간 5% 연장',
method: '구미호맛 쿠키의 신선한 선홍빛 푸딩 진화하여 획득',
description: '적당하게 구워져 고소한 냄새가 난다. 남녀노소 누구나 끌릴 만한 쿠키들의 핫한 간식.',
baseId: 'tr_ch24_m'
},
{
id: 'tr_ch25_m_blessed',
name: '축복받은 금가루 아이스크림 선데',
rarity: 'S',
effect: '강화 수치에 따라 장애물 파괴시 3~6 코인 획득',
method: '마법사맛 쿠키의 팝핑캔디 아이스크림 진화하여 획득',
description: '노블한 맛의 아이스크림 선데. 하지만 이빨에 금가루가 낄 수 있으니 먹을 때 함부로 웃으면 안 되겠지?',
baseId: 'tr_ch25_m'
},
{
id: 'tr_ch26_m_blessed',
name: '축복받은 프리미엄 녹차맛 롤케이크',
rarity: 'S',
effect: '강화 수치에 따라 이어달리기시 체력 80~140 증가',
method: '요정맛 쿠키의 녹차맛 롤케이크 진화하여 획득',
description: '백만 번 휘저은 휘핑크림을 곁들인 롤케이크. 이걸 만들려다 요정마을에 휘핑크림 홍수가 날 뻔한 일이 있었다나...',
baseId: 'tr_ch26_m'
},
{
id: 'tr_ch27_m_blessed',
name: '축복받은 피크로 만든 펜던트',
rarity: 'S',
effect: '강화 수치에 따라 체력감소 4~5% 느림\n강화 수치에 따라 체력회복량 4~7% 증가',
method: '락스타맛 쿠키의 전설의 기타 피크 진화하여 획득',
description: '락스타맛 쿠키가 늘 지니고 있는 펜던트. 지칠 때마다 피크에 입을 맞추며 힘을 낸다던데.',
baseId: 'tr_ch27_m'
},
{
id: 'tr_ch28_m_blessed',
name: '축복받은 정성 가득 생일파티용 케이크',
rarity: 'S',
effect: '강화 수치에 따라 장애물 파괴시 12300~15000점 추가\n강화 수치에 따라 기본속도 6~7% 증가',
method: '체리맛 쿠키의 파티용 컵케이크 진화하여 획득',
description: '구하기 힘든 재료로 일년에 한 번 정성스레 만드는 특별한 케이크이다.',
baseId: 'tr_ch28_m'
},
{
id: 'tr_ch29_m_blessed',
name: '축복받은 블링블링 미니 크리스마스트리',
rarity: 'S',
effect: '강화 수치에 따라 모든 젤리 320~500점 추가',
method: '음유시인맛 쿠키의 크리스마스트리 쿠키 진화하여 획득',
description: '한 겨울 음유시인맛 쿠키는 이 크리스마스트리를 장식하며 시를 노래한다. "징글벨~징글벨~♪"',
baseId: 'tr_ch29_m'
},
{
id: 'tr_ch30_m_blessed',
name: '축복받은 오색 찬란한 눈꽃빙수',
rarity: 'S',
effect: '강화 수치에 따라 이어달리기시 체력 60~120 증가\n구멍에 빠진 쿠키를 3회 구출',
method: '눈설탕맛 쿠키의 스노우 파르페 진화하여 획득',
description: '막 내린 눈과 만년설을 블렌딩하고, 바삭하게 씹히는 보석으로 토핑한 환상적인 빙수.',
baseId: 'tr_ch30_m'
},
{
id: 'tr_ch31_m_blessed',
name: '축복받은 만년 초콜릿 스페셜 패키지',
rarity: 'S',
effect: '강화 수치에 따라 분홍곰젤리 400~900점 추가\n강화 수치에 따라 모든 곰젤리 200~300점 추가',
method: '핑크초코쿠키의 수제 초콜릿 세트 진화하여 획득',
description: '만년설로 만들어서 아무리 손에 쥐고 있어도 녹지 않는 초콜릿. 영원한 사랑의 징표.',
baseId: 'tr_ch31_m'
},
{
id: 'tr_ch33_m_blessed',
name: '축복받은 성스러운 불멸의 성배',
rarity: 'S',
effect: '강화 수치에 따라 이어달리기 쿠키가 체력 20~40으로 3회 부활\n강화 수치에 따라 이어달리기시 모든 젤리 210~350점 추가',
method: '피스타치오맛 쿠키의 부활의 성배 진화하여 획득',
description: '튼튼한 가루와 성스러운 기운이 더해져 이제 달리기를 멈추고 싶어도 멈출 수가 없다.',
baseId: 'tr_ch33_m'
},
{
id: 'tr_ch34_m_blessed',
name: '축복받은 포도알 원자모형 브로치',
rarity: 'S',
effect: '강화 수치에 따라 15~25% 확률로 코인매직에 금화출현\n강화 수치에 따라 코인 6~8% 보너스',
method: '연금술사맛 쿠키의 분자모형 브로치 진화하여 획득',
description: '연금술의 핵심 이론이 이 모형에서부터 시작되었다고 함.',
baseId: 'tr_ch34_m'
},
{
id: 'tr_ch35_m_blessed',
name: '축복받은 마성의 부활 포도주스',
rarity: 'S',
effect: '강화 수치에 따라 체력감소 4~5% 느림\n강화 수치에 따라 체력 44~80으로 부활',
method: '뱀파이어맛 쿠키의 부활의 포도주스 진화하여 획득',
description: '이 포도주스를 마시면 딱 한 모금만 더 마시고 싶다. 하지만 언제나 적정량이 정해져 있지.',
baseId: 'tr_ch35_m'
},
{
id: 'tr_ch36_m_blessed',
name: '축복받은 후루츠장식 헤어밴드',
rarity: 'S',
effect: '보너스타임 2초 연장\n강화 수치에 따라 보너스타임 점수 5~15% 추가',
method: '풋사과맛 쿠키의 사과모양 똑딱핀 진화하여 획득',
description: '후루츠장식 헤어밴드를 한 풋사과맛 쿠키, 더 싱그럽게 자라길.',
baseId: 'tr_ch36_m'
},
{
id: 'tr_ch37_m_blessed',
name: '축복받은 황금시럽 듬뿍 골든 피스',
rarity: 'S',
effect: '강화 수치에 따라 기본속도 6~7% 증가\n강화 수치에 따라 코인 9~11% 보너스',
method: '치즈케이크맛 쿠키의 골든피스 진화하여 획득',
description: '쿠키를 가장 빛나게 하는 한 조각. 매우 비싸지만 한 입만 먹어도 고개를 끄덕이게 된다.',
baseId: 'tr_ch37_m'
},
{
id: 'tr_ch38_m_blessed',
name: '축복받은 살살 녹는 밧줄 바움쿠헨',
rarity: 'S',
effect: '강화 수치에 따라 경험치 12~16% 보너스\n강화 수치에 따라 코인 8~10% 보너스',
method: '탐험가맛 쿠키의 밧줄 바움쿠헨 진화하여 획득',
description: '퍽퍽했던 통밀 바움쿠헨에 우유와 시럽을 섞어 건강함은 남기고 부드러움은 더했다!!',
baseId: 'tr_ch38_m'
},
{
id: 'tr_ch39_m_blessed',
name: '축복받은 잔잔한 파도맛 소다칵테일',
rarity: 'S',
effect: '강화 수치에 따라 기본속도 5~8% 증가\n강화 수치에 따라 거품젤리 520~700점 추가',
method: '소다맛 쿠키의 파도맛 소다 진화하여 획득',
description: '늘 몰아치기만 하는 것은 아니다. 가끔은 모든 게 지나가고 난 후의 잔잔한 파도의 맛을 느껴보자.',
baseId: 'tr_ch39_m'
},
{
id: 'tr_ch40_m_blessed',
name: '축복받은 정글전사 쿠키의 젤리꽃 화관',
rarity: 'S',
effect: '강화 수치에 따라 정글전사 파괴점수 22000~31000점 추가\n강화 수치에 따라 체력감소 5~8% 느림',
method: '정글전사 쿠키의 헤어핀 진화하여 획득',
description: '버터호랑이가 물어다준 젤리꽃을 한땀 한땀 엮어서 만들었다. 왠지 그리운 느낌...',
baseId: 'tr_ch40_m'
},
{
id: 'tr_ch42_m_blessed',
name: '축복받은 시럽후루룩뚝뚝 블랙베리 모자',
rarity: 'S',
effect: '강화 수치에 따라 체력회복량 3~7% 증가\n강화 수치에 따라 체력 40~80으로 부활',
method: '블랙베리맛 쿠키의 블랙베리 모자 진화하여 획득',
description: '누군가가 몰래 시럽을 잔뜩 부어놨다. 블랙베리맛 쿠키가 눈에 불을 켜고 범인을 찾고 있다고...',
baseId: 'tr_ch42_m'
},
{
id: 'tr_ch43_m_blessed',
name: '축복받은 부릉부릉 골드키위 열쇠',
rarity: 'S',
effect: '강화 수치에 따라 기본속도 4~7% 증가\n강화 수치에 따라 체력 60~80으로 부활',
method: '키위맛 쿠키의 소중한 열쇠 진화하여 획득',
description: '골드키위 장식으로 업그레이드되었다! 더 빠르고 세진 느낌.',
baseId: 'tr_ch43_m'
},
{
id: 'tr_ch44_m_blessed',
name: '축복받은 튼튼해진 소중한 목걸이',
rarity: 'S',
effect: '강화 수치에 따라 이어달리기시 구출/부활(체력 30) 총 1~3회',
method: '웨어울프맛 쿠키의 소중한 목걸이 진화하여 획득',
description: '낡은 줄을 교체해 더 튼튼해졌다. 이제 잃어버릴 일은 없어!',
baseId: 'tr_ch44_m'
},
{
id: 'tr_ch45_m_blessed',
name: '축복받은 초코듬뿍 마시멜로',
rarity: 'S',
effect: '강화 수치에 따라 소환수에 탑승시 모든 젤리 200~400점 추가\n강화 수치에 따라 체력 30~60으로 부활',
method: '코코아맛 쿠키의 마시멜로 모자 진화하여 획득',
description: '달달한 향이 솔솔 나는 마시멜로. 황홀한 달콤함에 중독되어버릴 수 있으니 주의!',
baseId: 'tr_ch45_m'
},
{
id: 'tr_ch46_m_blessed',
name: '축복받은 금화가득 바이올린 케이스',
rarity: 'S',
effect: '강화 수치에 따라 체력감소 4~5% 느림\n강화 수치에 따라 4~6% 확률로 코인꽃 생성',
method: '민트초코쿠키의 바이올린 케이스 진화하여 획득',
description: '늘 묵직한 바이올린 케이스의 비밀이 밝혀졌다!',
baseId: 'tr_ch46_m'
},
{
id: 'tr_ch47_m_blessed',
name: '축복받은 불굴의 삼색 머리끈',
rarity: 'S',
effect: '강화 수치에 따라 체력 50~100으로 부활\n강화 수치에 따라 장애물 파괴시 12300~15000점 추가',
method: '홍고추맛 쿠키의 질끈 묶은 머리끈 진화하여 획득',
description: '어떤 것에도 굴하지 않겠다는 강한 신념을 가진 쿠키만이 착용할 수 있다. 화르르!',
baseId: 'tr_ch47_m'
},
{
id: 'tr_ch48_m_blessed',
name: '축복받은 슈가파우더 솔솔 슈크림샌드',
rarity: 'S',
effect: '강화 수치에 따라 모든 젤리 220~400점 추가\n초미니자력',
method: '슈크림맛 쿠키의 슈모자 진화하여 획득',
description: '슈크림이 절대 손에 묻을 일이 없다! 한입에 쏘옥~',
baseId: 'tr_ch48_m'
},
{
id: 'tr_ch50_m_blessed',
name: '축복받은 얼마 남지 않은 버블껌 시한폭탄',
rarity: 'S',
effect: '강화 수치에 따라 버블껌 발사점수 1400~2300점 추가',
method: '버블껌맛 쿠키의 버블껌 수류탄 진화하여 획득',
description: '너무 고민하지 말자. 시간이 흐르면, 일어날 일은 일어나게 되어 있으니까.',
baseId: 'tr_ch50_m'
},
// {
//     id: 'tr_ch51_m_blessed',
//     name: '???',
//     rarity: 'S',
//     effect: '???',
//     method: '???',
//     description: '???',
//     baseId: 'tr_ch51_m',
//     hasPassiveTag: true,
//     booknone: true
// },
{
id: 'tr_ch52_m_blessed',
name: '축복받은 레몬향 스마트폰 스페셜 에디션',
rarity: 'S',
effect: '강화 수치에 따라 번개 질주시 파괴점수 10000~19000점 추가\n강화 수치에 따라 광속질주 속도 10~15% 증가',
method: '레몬맛 쿠키의 레몬 mp3 플레이어 진화하여 획득',
description: '이것만 있으면 종일 심심할 일이 없다. 굉장히 재미있어 보이는 게임도 보인다!',
baseId: 'tr_ch52_m'
},
{
id: 'tr_ch53_m_blessed',
name: '축복받은 꽁꽁 얼린 오렌지 음료',
rarity: 'S',
effect: '강화 수치에 따라 광속질주 속도 10~15% 증가\n강화 수치에 따라 생명물약 획득시 광속질주 0.5~1초',
method: '오렌지맛 쿠키의 스포츠 보틀 진화하여 획득',
description: '아직도 시원한 한 모금에 모든 기력이 회복된다.\n살짝 녹았을 때 샤베트처럼 먹어도 좋다.',
baseId: 'tr_ch53_m'
},
{
id: 'tr_ch54_m_blessed',
name: '축복받은 수분가득 라임향 아이리무버',
rarity: 'S',
effect: '거대화 시간 10% 연장\n강화 수치에 따라 거대화 착지시 바닥에서 젤리 생성 고급 1단~10단',
method: '라임맛 쿠키의 워터프루프 마스카라 진화하여 획득',
description: '스치기만 해도 지워진다는 한 방 리무버! 상큼한 라임향으로 기분까지 깔끔!',
baseId: 'tr_ch54_m'
},
{
id: 'tr_ch56_m_blessed',
name: '축복받은 복숭아맛 쿠키의 비단 두루마리 비법서',
rarity: 'S',
effect: '점프 2회 추가\n강화 수치에 따라 구출/부활(체력 20~30) 총 3회',
method: '복숭아맛 쿠키의 무술비법서 진화하여 획득',
description: '수많은 고수들의 비법에 복숭아맛 쿠키의 노하우를 더한 특급 무술 비법 두루마리. 복숭아맛 쿠키가 언제나 몸에 지니고 다니는 탓에 복숭아 향이 풍긴다고 한다.',
baseId: 'tr_ch56_m'
},
{
id: 'tr_ch58_m_blessed',
name: '축복받은 양파맛 쿠키의 레이스 베개',
rarity: 'S',
effect: '체력감소 7% 느림\n강화 수치에 따라 장애물 통과시 10500~15000점 추가',
method: '양파맛 쿠키의 눈물에 젖은 베개 진화하여 획득',
description: '악몽에서 벗어나 좀 더 편안한 잠을 자기 위해 마련한 레이스 베개. 하지만 여전히 가끔 눈물을 흘린다.',
baseId: 'tr_ch58_m'
},
{
id: 'tr_ch59_m_blessed',
name: '축복받은 마카롱맛 쿠키의 블러셔 브러시',
rarity: 'S',
effect: '강화 수치에 따라 마카롱 동물 젤리 500~1000점 추가\n강화 수치에 따라 체력 60~78으로 부활',
method: '마카롱맛 쿠키의 볼터치 퍼프 진화하여 획득',
description: '컬러도 짱짱 브라이트하고 한올 한올 곱게 발리는 브러시!',
baseId: 'tr_ch59_m'
},
{
id: 'tr_ch60_m_blessed',
name: '축복받은 한정판 트럼프카드 케이스',
rarity: 'S',
effect: '강화 수치에 따라 카드 젤리 2000~3000점 추가\n초미니자력',
method: '시나몬맛 쿠키의 트럼프카드 케이스 진화하여 획득',
description: '시나몬맛 쿠키의 팬이 만들어 선물해준 트럼프카드 케이스. 시나몬맛 쿠키가 트릭을 더해 세상에 단 하나뿐인 케이스로 만들었다.',
baseId: 'tr_ch60_m'
},
{
id: 'tr_ch61_m_blessed',
name: '축복받은 단팥맛 쿠키의 모포로 만든 털모자',
rarity: 'S',
effect: '강화 수치에 따라 체력감소 7~8% 느림\n강화 수치에 따라 붕어빵 젤리 점수 80,000~130,000점 추가',
method: '단팥맛 쿠키의 후끈힌 모포더미 진화하여 획득',
description: '후끈한 모포를 꿰어 만든 털모자. 복실복실한 털방울이 키포인트!',
baseId: 'tr_ch61_m'
},
{
id: 'tr_ch62_m_blessed',
name: '축복받은 화이트초코 쿠키의 백장미 꽃병',
rarity: 'S',
effect: '강화 수치에 따라 화이트초코 젤리 1500~2000점 추가\n초미니자력',
method: '화이트초코 쿠키의 백장미 꽃다발 진화하여 획득',
description: '꽃다발은 꽃병으로, 과거는 추억으로 여전히 소중하게 간직된다.',
baseId: 'tr_ch62_m'
},
{
id: 'tr_ch64_m_blessed',
name: '축복받은 다이노사워 쿠키의 진열된 젤리공룡 화석',
rarity: 'S',
effect: '강화 수치에 따라 공룡발바닥 젤리 2100~3000점 추가\n강화 수치에 따라 체력 80~98으로 부활',
method: '다이노사워 쿠키의 젤리공룡 화석 진화하여 획득',
description: '누군가의 제보로 젤리공룡의 화석침대는 엄청난 명성과 함께 전시되어 버렸다. 하지만 젤리공룡은 자신의 침대가 멋진 취급을 받는 게 뿌듯한 것 같기도?',
baseId: 'tr_ch64_m'
},
{
id: 'tr_ch68_m_blessed',
name: '축복받은 영롱한 바나나우유 양손컵',
rarity: 'S',
effect: '강화 수치에 따라 구출/부활(체력 20~30) 총 3회\n강화 수치에 따라 코인 9~11% 보너스',
method: '바나나맛 쿠키의 바나나 우유 젖병 진화하여 획득',
description: '바나나맛 쿠키가 쑥쑥 자라나는 초코 원숭이를 위해 마련한 고급 바나나 우유 양손컵. 우리가 아는 그 맛!',
baseId: 'tr_ch68_m'
},
{
id: 'tr_ch71_m_blessed',
name: '축복받은 달토끼맛 쿠키의 3단 송편 떡케이크',
rarity: 'S',
effect: '강화 수치에 따라 꿀떡젤리 3500~4000점 추가\n체력 75으로 부활',
method: '달토끼맛 쿠키의 화려한 떡케이크 진화하여 획득',
description: '달토끼맛 쿠키가 제일 좋아하는 떡 위에 송편까지 올린 3단 무지개떡 케이크',
baseId: 'tr_ch71_m'
},
{
id: 'tr_pet01_m_blessed',
name: '축복받은 더 맛있는 초콜릿 조각',
rarity: 'B',
effect: '강화 수치에 따라 모든 젤리 50~70점 추가',
method: '초코방울의 달콤한 초콜릿 조각 진화하여 획득',
description: '이 작은 한조각을 지니고 있는 것만으로도 곰젤리가 앞다투어 모여든다는 사실!',
baseId: 'tr_pet01_m'
},
{
id: 'tr_pet02_m_blessed',
name: '축복받은 풍미가득 치즈조각',
rarity: 'B',
effect: '강화 수치에 따라 분홍곰젤리 300~700점 추가\n강화 수치에 따라 노란곰젤리 100~200점 추가',
method: '치즈방울의 고소한 치즈조각 진화하여 획득',
description: '풍미가 진해 100미터 밖에서도 향기가 진동한다는 치즈조각.',
baseId: 'tr_pet02_m'
},
{
id: 'tr_pet03_m_blessed',
name: '축복받은 좋은손의 짱짱한 골무',
rarity: 'B',
effect: '강화 수치에 따라 은화 획득시 200~400점 추가\n강화 수치에 따라 금화 획득시 400~600점 추가',
method: '좋은손의 좋은 골무 진화하여 획득',
description: '어느 바늘도 뚫을 수 없다는 짱짱한 골무가 짱임!',
baseId: 'tr_pet03_m'
},
{
id: 'tr_pet04_m_blessed',
name: '축복받은 쫀득한 치즈 조랭이',
rarity: 'C',
effect: '강화 수치에 따라 곰젤리파티 시간 10~15% 연장\n강화 수치에 따라 노란곰젤리 300~400점 추가',
method: '조랭이젤리의 돌연변이 친구 진화하여 획득',
description: '베어 물면 치즈가 새어 나오는 조랭이.',
baseId: 'tr_pet04_m'
},
{
id: 'tr_pet05_m_blessed',
name: '축복받은 보송보송 귀마개',
rarity: 'B',
effect: '강화 수치에 따라 금화 획득시 300~500점 추가\n강화 수치에 따라 은화 획득시 200~400점 추가',
method: '뭉치유니콘의 겨울용 뿔모자 진화하여 획득',
description: '보온성과 심미성을 동시에 갖춘 이 시대의 패션 아이템!',
baseId: 'tr_pet05_m'
},
{
id: 'tr_pet06_m_blessed',
name: '축복받은 산타모자의 빛나는 꼬리방울',
rarity: 'B',
effect: '강화 수치에 따라 은화 획득시 600~800점 추가',
method: '산타모자의 달랑이는 꼬리방울 진화하여 획득',
description: '산타모자에서 빛이 나 사슴코가 없이도 길을 밝힐 수 있다!',
baseId: 'tr_pet06_m'
},
{
id: 'tr_pet07_m_blessed',
name: '축복받은 알록달록 별사탕',
rarity: 'C',
effect: '보너스타임에서 펫이 2배 커짐\n강화 수치에 따라 보너스타임 점수 10~15% 추가',
method: '구름사탕의 구름 별사탕 진화하여 획기득',
description: '무지개의 빛을 머금은 별사탕. 작은 한 알에도 다채로운 맛이 난다.',
baseId: 'tr_pet07_m'
},
{
id: 'tr_pet08_m_blessed',
name: '축복받은 산타양말의 빨간 원단',
rarity: 'C',
effect: '강화 수치에 따라 기본속도 5~7% 증가',
method: '산타양말의 빨간 천조각 진화하여 획득',
description: '깜짝 놀랄만큼 예쁜 빨강. 산타가 온 쿠키마을을 뒤져 겨우 찾아 내었다고.',
baseId: 'tr_pet08_m'
},
{
id: 'tr_pet09_m_blessed',
name: '축복받은 폭발하는 번개 에너지',
rarity: 'B',
effect: '강화 수치에 따라 자석 시간 10~20% 연장\n강화 수치에 따라 펫이 획득한 점수 10~15% 추가',
method: '테크노볼의 번개 에너지 진화하여 획득',
description: '찌리리리릭 찌리리리릭 찌릿찌릿 붐붐 샤카라카 붐샤카 붐샤카 붐붐 샤카라카!',
baseId: 'tr_pet09_m'
},
{
id: 'tr_pet10_m_blessed',
name: '축복받은 안깐 마늘의 독특한 갈릭소스',
rarity: 'B',
effect: '광속질주 시간 10% 연장\n강화 수치에 따라 광속질주시 모든 젤리 100~200점 추가',
method: '안깐 마늘의 까지인 마늘 한쪽 진화하여 획득',
description: '갈릭소스를 만들기 위해서는 일단 마늘 한쪽을 으깨서......미안하다. 크흡.',
baseId: 'tr_pet10_m'
},
{
id: 'tr_pet11_m_blessed',
name: '축복받은 플라워콥터의 돌연변이 씨앗',
rarity: 'A',
effect: '강화 수치에 따라 보너스타임 속도 5~10% 증가\n보너스타임 2초 연장',
method: '플라워콥터의 소중한 씨앗 진화하여 획득',
description: '날개가 하나 더 달려있어 조금 더 멀리까지 갈 수 있다.',
baseId: 'tr_pet11_m'
},
{
id: 'tr_pet12_m_blessed',
name: '축복받은 꼬마유령의 찬란한 추억',
rarity: 'S',
effect: '강화 수치에 따라 구멍에 빠진 쿠키를 1~3회 구출\n강화 수치에 따라 체력 20으로 부활 1~2회',
method: '꼬마유령의 구슬픈 감정 진화하여 획득',
description: '잊혀지기엔 너무 꿈같은 시절. 다시 살아나 다음 생애가 되면 그걸 추억이라고 부를 수 있을까.',
baseId: 'tr_pet12_m'
},
{
id: 'tr_pet13_m_blessed',
name: '축복받은 해적폭탄의 트랜스폭탄늄',
rarity: 'S',
effect: '강화 수치에 따라 15~25% 확률로 코인매직에 금화출현\n강화 수치에 따라 코인 7~9% 보너스',
method: '해적폭탄의 비밀 화약가루 진화하여 획득',
description: '해적폭탄의 비밀원료는 트랜스폭탄늄으로 밝혀졌다. 이것만 있으면 장애물을 금화로 변환시킬 수 있다고.',
baseId: 'tr_pet13_m'
},
{
id: 'tr_pet14_m_blessed',
name: '축복받은 포근실타래가 노는 미니물레',
rarity: 'B',
effect: '보너스타임 2초 연장\n강화 수치에 따라 보너스타임 속도 5~10% 증가',
method: '포근실타래의 전용 뜨게바늘 진화하여 획득',
description: '빙글빙글 돌아가며 지루함을 달래주는 아이템. 신이 난 실타래의 환호성이 들릴지도 모른다.',
baseId: 'tr_pet14_m'
},
{
id: 'tr_pet15_m_blessed',
name: '축복받은 계속 구르는 둥근 다이스',
rarity: 'A',
effect: '아이템 시간 5% 연장\n강화 수치에 따라 거대화시 모든 젤리 200~350점 추가',
method: '럭키다이스 형제의 미니다이스 진화하여 획득',
description: '정답은 없다고 외치며 끊임없이 구르는 다이스. 멈춘다고 한들 누가 숫자를 말할 수 있을까.',
baseId: 'tr_pet15_m'
},
{
id: 'tr_pet16_m_blessed',
name: '축복받은 블링블링 미니 장신구',
rarity: 'S',
effect: '강화 수치에 따라 체력회복량 5~6% 증가\n강화 수치에 따라 분홍곰젤리 200~400점 추가',
method: '공주의 장신구의 미니 장신구 진화하여 획득',
description: '공주맛 쿠키가 성년의 날을 맞은 후에는 더 반짝거리는 장신구를 찾고 있다고 한다.',
baseId: 'tr_pet16_m'
},
{
id: 'tr_pet17_m_blessed',
name: '축복받은 용의 꼬리의 허물 초밥',
rarity: 'A',
effect: '강화 수치에 따라 광속질주 시간 5~10% 연장\n강화 수치에 따라 거대화 시간 5~10% 연장',
method: '용의 꼬리의 얼굴 허물 진화하여 획득',
description: '쓸모없어 보였던 허물이 맛있는 초밥으로 탄생했다. 신선함을 위해 냉장 보관은 필수!',
baseId: 'tr_pet17_m'
},
{
id: 'tr_pet18_m_blessed',
name: '축복받은 브레인껌의 사춘기 시절',
rarity: 'A',
effect: '충돌 피해 10% 감소\n강화 수치에 따라 체력 감소 2~3% 느림',
method: '브레인껌의 어린시절 진화하여 획득',
description: '브레인 껌에게도 그런 시절이 있었다. 모든게 무겁고 질척거리게 느껴졌던.',
baseId: 'tr_pet18_m'
},
{
id: 'tr_pet19_m_blessed',
name: '축복받은 일부러 만든 생크림 수염',
rarity: 'B',
effect: '강화 수치에 따라 알파벳젤리 100~150점 추가\n강화 수치에 따라 은화 획득시 500~700점 추가',
method: '생크림 모카커피용 생크림 진화하여 획득',
description: '입술에 거품을 살짝 묻히고 모르는 척 하고 있어보자.',
baseId: 'tr_pet19_m'
},
{
id: 'tr_pet20_m_blessed',
name: '축복받은 금빛 축복 반죽',
rarity: 'S',
effect: '강화 수치에 따라 체력이 20~30 증가\n강화 수치에 따라 체력 10~20으로 부활 2회',
method: '천사의 별이 뿌린 축복가루 진화하여 획득',
description: '축복가루에 설탕과 행복기운을 넣고 잘 저어 반죽을 만들었다. 출발하기 전 몸에 바르면 기운이 솟는다고.',
baseId: 'tr_pet20_m'
},
{
id: 'tr_pet21_m_blessed',
name: '축복받은 쌍둥이 덤벨의 퐁카리스웨트',
rarity: 'B',
effect: '강화 수치에 따라 거대화 시간 5~10% 연장\n강화 수치에 따라 거대화시 모든 젤리 150~300점 추가',
method: '쌍둥이 덤벨의 땀방울 진화하여 획득',
description: '쌍둥이 덤벨의 땀방울과 새벽의 이슬을 섞어 만든 특별한 음료. 마시면 몸이 점점 커진다고.',
baseId: 'tr_pet21_m'
},
{
id: 'tr_pet23_m_blessed',
name: '축복받은 별빛 머금은 얼음 조각',
rarity: 'S',
effect: '강화 수치에 따라 30~35% 확률로 얼음다리 생성\n강화 수치에 따라 어린이 연기점수 추가',
method: '눈꽃송이의 반짝이는 얼음조각 진화하여 획득',
description: '별맞이꽃이 얼음조각에 닿자 별처럼 영롱하게 빛나게 되었다.',
baseId: 'tr_pet23_m'
},
{
id: 'tr_pet24_m_blessed',
name: '축복받은 용맹한 폭주 젤리코',
rarity: 'S',
effect: '7% 확률로 젤리코가 떨어짐\n강화 수치에 따라 장애물 파괴시 3300~6000점 추가',
method: '젤리코 큐브의 길잃은 젤리코 진화하여 획득',
description: '너무 오래 길을 잃고 방황했는지, 예전의 밝은 모습이 사라졌다. 하지만 강해진 느낌.',
baseId: 'tr_pet24_m'
},
{
id: 'tr_pet26_m_blessed',
name: '축복받은 색동별젤리 조각 모음',
rarity: 'S',
effect: '강화 수치에 따라 금화 획득시 500~1000점 추가\n강화 수치에 따라 은화 획득시 300~600점 추가',
method: '반짝이볼의 색동별젤리 조각 진화하여 획득',
description: '왠지 잘 짜맞추면 온전한 색동별젤리를 만들 수 있지 않을까?',
baseId: 'tr_pet26_m'
},
{
id: 'tr_pet27_m_blessed',
name: '축복받은 최첨단 캐러멜 헬멧',
rarity: 'S',
effect: '강화 수치에 따라 아이템 시간 5~10% 연장\n강화 수치에 따라 거대화시 모든 젤리 200~400점 추가',
method: '건빵 보급병의 최첨단 헤드셋 진화하여 획득',
description: '캐러멜로 만들어진 최첨단 헬멧을 쓰면 다 이길 것 같은 기분.',
baseId: 'tr_pet27_m'
},
{
id: 'tr_pet28_m_blessed',
name: '축복받은 불꽃박쥐의 불멸의 불꽃',
rarity: 'S',
effect: '강화 수치에 따라 장애물 통과시 7500~12000점 추가\n강화 수치에 따라 체력 30~50으로 부활',
method: '불꽃박쥐의 영원한 불씨 진화하여 획득',
description: '마음에 타오르는 불꽃도 이 불꽃처럼 영원히 꺼지지 않았으면...',
baseId: 'tr_pet28_m'
},
{
id: 'tr_pet29_m_blessed',
name: '축복받은 발광하는 으리으리한 골드메달',
rarity: 'S',
effect: '강화 수치에 따라 코인 9~11% 보너스\n강화 수치에 따라 체력이 30~40 증가',
method: '황금방울의 엄청난 골드바 진화하여 획득',
description: '혼신의 힘을 다해 달려야 겨우 얻을 수 있다는 골드메달.',
baseId: 'tr_pet29_m'
},
{
id: 'tr_pet30_m_blessed',
name: '축복받은 바람이 얼음 샤베트',
rarity: 'S',
effect: '강화 수치에 따라 펫이 획득한 점수 10~15% 추가',
method: '바람이의 얼음캔디 진화하여 획득',
description: '눈의 마을에서 바람이가 실어온 얼음 샤베트.',
baseId: 'tr_pet30_m'
},
{
id: 'tr_pet31_m_blessed',
name: '축복받은 빨갛게 빛나는\n여우구슬의 심장',
rarity: 'S',
effect: '강화 수치에 따라 체력이 60~120 증가',
method: '여우구슬의 심장 진화하여 획득',
description: '여우구슬이 사랑에 빠져 심장이 빨갛게 빛나게 되었다고 한다.',
baseId: 'tr_pet31_m'
},
{
id: 'tr_pet33_m_blessed',
name: '축복받은 마법사전의\n부록 브로마이드',
rarity: 'S',
effect: '강화 수치에 따라 기본속도 4~9% 증가\n구멍에 빠진 쿠키를 2회 구출',
method: '마법사전의 뜯어진 한장 진화하여 획득',
description: '탈출 비법이 정리되어 있는 유용한 브로마이드. 예쁘기도 해서 방에 걸어 놓고 주문을 외울 수 있다.',
baseId: 'tr_pet33_m'
},
{
id: 'tr_pet34_m_blessed',
name: '축복받은 매끈한\n무지개빛 꽃잎',
rarity: 'S',
effect: '보너스타임 2초 연장\n강화 수치에 따라 보너스타임 점수 5~15% 추가',
method: '꽃봉오리의 청순한 꽃잎 진화하여 획득',
description: '비온 뒤 이 꽃잎에 가만히 귀를 기울이면 무지개가 자라는 소리가 들리지.',
baseId: 'tr_pet34_m'
},
{
id: 'tr_pet35_m_blessed',
name: '축복받은 바닐라향\n삼파장 전구 호박색',
rarity: 'S',
effect: '강화 수치에 따라 경험치 8~13% 보너스\n강화 수치에 따라 코인 8~10% 보너스',
method: '스포트라이트의 바닐라향 전구 진화하여 획득',
description: '아름다운 호박색으로 빛나는 삼파장 전구. 마치 보석을 보는 듯한 착각이 든다.',
baseId: 'tr_pet35_m'
},
{
id: 'tr_pet36_m_blessed',
name: '축복받은 로켓폭죽의\n불타는 풍선껌',
rarity: 'S',
effect: '강화 수치에 따라 기본속도 5~7% 증가\n강화 수치에 따라 체력감소 2~3% 느림',
method: '로켓폭죽의 여분의 풍선껌 진화하여 획득',
description: '씹을 수록 뜨거워지는 맛. 뜨거워서 불이 붙은건지 불이 붙어서 뜨거워진 건지 알 수가 없다.',
baseId: 'tr_pet36_m'
},
{
id: 'tr_pet37_m_blessed',
name: '축복받은 통나무케이크의\n화려한 두조각 반',
rarity: 'S',
effect: '강화 수치에 따라 노란곰젤리 500~700점 추가\n강화 수치에 따라 분홍곰젤리 150~200점 추가',
method: '통나무케이크의 큼직한 한조각 진화하여 획득',
description: '배부르게 먹었는데도 아직도 두 조각 반이나 남았다니 너무 행복해!',
baseId: 'tr_pet37_m'
},
{
id: 'tr_pet40_m_blessed',
name: '축복받은 까칠한 알록달록 캔디 껍질',
rarity: 'S',
effect: '강화 수치에 따라 분홍젤리 400~800점 추가\n강화 수치에 따라 장애물 파괴시 12300~15000점 추가',
method: '핑크캔디의 벗겨진 껍질 진화하여 획득',
description: '까칠거려서 더욱 매력적인 껍질. 왜 어른들은 그저 좋은 쿠키가 되라고만 하는걸까.',
baseId: 'tr_pet40_m'
},
{
id: 'tr_pet41_m_blessed',
name: '축복받은 보라보라 파라핀 장미',
rarity: 'S',
effect: '강화 수치에 따라 장애물 통과시 9500~14000점 추가\n강화 수치에 따라 체력회복량 9~12% 증가',
method: '보라보라 향초의 아직 따뜻한 촛농 진화하여 획득',
description: '아직 따뜻할 때 촛농을 다듬어 장미를 만들었다. 처음에는 악소리가 나게 뜨겁지만 금방 괜찮아진다고.',
baseId: 'tr_pet41_m'
},
{
id: 'tr_pet42_m_blessed',
name: '축복받은 오색 찬란한 피스타치오 껍질',
rarity: 'S',
effect: '강화 수치에 따라 광속질주시 모든 젤리 300~500점 추가\n광속질주 시간 10% 연장',
method: '반딧불이의 단단한 피스타치오 껍질 진화하여 획득',
description: '반딧불이 중에는 껍질까지 빛을 내는 돌연변이가 있다고. 바로 그 껍질이다.',
baseId: 'tr_pet42_m'
},
{
id: 'tr_pet43_m_blessed',
name: '축복받은 젤리가 퐁퐁 솟아나는 접시',
rarity: 'S',
effect: '강화 수치에 따라 기본속도 4~5% 증가\n강화 수치에 따라 모든 젤리 320~500점 추가',
method: '젤리저울의 젤리를 담은 접시 진화하여 획득',
description: '먹어도 먹어도 젤리가 끊임없이 솟아나는 사랑스런 접시. 반했다.',
baseId: 'tr_pet43_m'
},
{
id: 'tr_pet44_m_blessed',
name: '축복받은 코인이 은근 불어나는 접시',
rarity: 'S',
effect: '강화 수치에 따라 2~5% 확률로 코인꽃 생성\n강화 수치에 따라 코인 8~10% 보너스',
method: '코인저울의 코인을 담은 접시 진화하여 획득',
description: '분명 처음 담을 때보다 코인이 살짝 불어나 있다.',
baseId: 'tr_pet44_m'
},
{
id: 'tr_pet45_m_blessed',
name: '축복받은 참나무 주스통의 강화유리 꼭지',
rarity: 'S',
effect: '강화 수치에 따라 기본속도 4~5% 증가\n강화 수치에 따라 체력감소 4~5% 느림',
method: '참나무 주스통의 나무꼭지 진화하여 획득',
description: '아무리 흔들려도 포도주스가 새지 않기 때문에 달릴 때 유용하다.',
baseId: 'tr_pet45_m'
},
{
id: 'tr_pet46_m_blessed',
name: '축복받은 엄마사과의 처녀시절',
rarity: 'S',
effect: '강화 수치에 따라 기본속도 4~5% 증가\n강화 수치에 따라 이어달리기시 체력 35~65 증가',
method: '토끼사과의 엄마사과 진화하여 획득',
description: '햇살에 탱탱하게 빛이 나는 엄마의 전성기 시절. 그때가 다시 찾아왔다면 믿을 수 있을까.',
baseId: 'tr_pet46_m'
},
{
id: 'tr_pet47_m_blessed',
name: '축복받은 굉장한 치즈 헤어볼',
rarity: 'S',
effect: '강화 수치에 따라 체력감소 3~5% 느림\n강화 수치에 따라 코인 9~11% 보너스',
method: '치즈뭉치 고양이의 치즈 헤어볼 진화하여 획득',
description: '별것 아닌 것처럼 보였던 헤어볼 안에 굉장한 것들이 숨어있다. 파헤칠수록 놀라게 될 것이다.',
baseId: 'tr_pet47_m'
},
{
id: 'tr_pet48_m_blessed',
name: '축복받은 레인보우 하트 열쇠고리',
rarity: 'S',
effect: '강화 수치에 따라 모든 곰젤리 500~700점 추가\n강화 수치에 따라 아이템 시간 5~10% 연장',
method: '배냥이의 하트 열쇠고리 진화하여 획득',
description: '무지개빛 하트로 변신! 곰젤리 유혹에 박차를 가했다!',
baseId: 'tr_pet48_m'
},
{
id: 'tr_pet50_m_blessed',
name: '축복받은 상큼달콤 레모네이드',
rarity: 'S',
effect: '강화 수치에 따라 체력회복량 5~8% 증가\n강화 수치에 따라 거품젤리 630~900점 추가',
method: '조각레몬의 상큼한 한조각 진화하여 획득',
description: '신 나게 놀다가 지쳤을 때 한 모금! 몸도 마음도 상큼하게 채워준다!',
baseId: 'tr_pet50_m'
},
{
id: 'tr_pet51_m_blessed',
name: '축복받은 완벽 스케줄링 세트',
rarity: 'S',
effect: '강화 수치에 따라 체력회복량 4~6% 증가\n강화 수치에 따라 모든 젤리 320~500점 추가',
method: '집사 유령의 스케줄러 진화하여 획득',
description: '완벽한 인생 계획을 짜고 싶은가?! 이 세트를 손에 넣는 순간 이미 반은 이루었다!',
baseId: 'tr_pet51_m'
},
{
id: 'tr_pet52_m_blessed',
name: '축복받은 특별한 키위 두 조각',
rarity: 'S',
effect: '강화 수치에 따라 거대화시 모든 젤리 260~360점 추가\n강화 수치에 따라 거대화시 기본속도 5~10% 증가',
method: '키위새의 키위 한 조각 진화하여 획득',
description: '어느새 두 조각이 되어 있었다! 놔두면 점점 늘어나는 걸까?',
baseId: 'tr_pet52_m'
},
{
id: 'tr_pet54_m_blessed',
name: '축복받은 황금싹을 틔운 황금씨앗',
rarity: 'S',
effect: '강화 수치에 따라 6~7% 확률로 코인꽃 생성\n강화 수치에 따라 코인 7~9% 보너스',
method: '파프리카 샌드백의 황금씨앗 진화하여 획득',
description: '매일 일정한 햇빛과 금가루 양분을 줬더니 황금싹이 자라났다! 이제 부자 되는건 시간문제!',
baseId: 'tr_pet54_m'
},
{
id: 'tr_pet56_m_blessed',
name: '축복받은 풍미가득 해바라기씨',
rarity: 'S',
effect: '강화 수치에 따라 생명물약 획득시 광속질주 0.5~1초\n강화 수치에 따라 펫이 획득한 점수 5~15% 추가',
method: '마시멜로 햄찌의 초코 해바라기씨 진화하여 획득',
description: '해바라기씨에 올리브기름을 바르고 햇볕에 두 번 구웠다! 마지막으로 초코에 퐁~',
baseId: 'tr_pet56_m'
},
{
id: 'tr_pet57_m_blessed',
name: '축복받은 화려한 레이스 리본',
rarity: 'S',
effect: '강화 수치에 따라 색동별젤리 300~400점 추가\n강화 수치에 따라 체력회복량 4~7% 증가',
method: '미스 도레미의 깜찍 리본 진화하여 획득',
description: '특별한 날, 빛나고 싶은 날, 이 리본이 완벽한 하루를 선물해줄 거야.',
baseId: 'tr_pet57_m'
},
{
id: 'tr_pet58_m_blessed',
name: '축복받은 번쩍번쩍 신사 모자',
rarity: 'S',
effect: '강화 수치에 따라 체력 30~40으로 부활 2회\n강화 수치에 따라 코인 6~8% 보너스',
method: '미스터 파솔라시의 신사 모자 진화하여 획득',
description: '이 모자를 쓰면 이 세상 제일 가는 멋쟁이 신사~ 번쩍번쩍 신사~',
baseId: 'tr_pet58_m'
},
{
id: 'tr_pet59_m_blessed',
name: '축복받은 위대한 느낌의 마법사 모자',
rarity: 'S',
effect: '강화 수치에 따라 노란곰젤리 600~800점 추가',
method: '도토리 부엉이의 꽁다리 모자 진화하여 획득',
description: '이 모자를 쓰면 마치 자신이 위대한 마법사가 된 것만 같은 기분이 들어서 자꾸 잔소리를 하게 된다!',
baseId: 'tr_pet59_m'
},
{
id: 'tr_pet60_m_blessed',
name: '축복받은 다시 만난 볼트너트세트',
rarity: 'S',
effect: '강화 수치에 따라 그림달젤리 500~1000점 추가\n강화 수치에 따라 체력 50~70으로 부활',
method: '미니잭슨 2호의 알록달록 나사 진화하여 획득',
description: '다시는 빠지는 일이 없게 너트로 꽉. 미니잭슨 2호! 늘 건강해야 해!',
baseId: 'tr_pet60_m'
},
{
id: 'tr_pet61_m_blessed',
name: '축복받은 벚꽃이 만개한 샤랄라 티스푼',
rarity: 'S',
effect: '강화 수치에 따라 40~60% 확률로 곰젤리파티에 분홍곰젤리 출현\n강화 수치에 따라 분홍곰젤리 300~400점 추가',
method: '홍차 찻잔의 벚꽃 티스푼 진화하여 획득',
description: '눈을 감고 티스푼을 저어보자. 어디선가 화사한 봄바람이 불어오는 것을 느낄 수 있다.',
baseId: 'tr_pet61_m'
},
{
id: 'tr_pet63_m_blessed',
name: '축복받은 휘황찬란 고휘도 레몬 LED',
rarity: 'S',
effect: '광속질주 시간 10% 연장\n강화 수치에 따라 노란곰젤리 600~900점 추가',
method: '레몬 전지의 레몬빛깔 LED 진화하여 획득',
description: '전도도가 높은 금이 함유되어 더 선명하고 더 눈부시게 빛을 내는 상큼한 LED.',
baseId: 'tr_pet63_m'
},
{
id: 'tr_pet64_m_blessed',
name: '축복받은 애완쥐용 오렌지 러닝머신',
rarity: 'S',
effect: '강화 수치에 따라 광속질주시 체력감소 10~20% 느림\n강화 수치에 따라 체력감소 3~4% 느림',
method: '어린쥐의 오렌지껍질 챗바퀴 진화하여 획득',
description: '어린쥐가 요즘 살이 찐 것 같다며 누군가가 선물해주었다. 조만간 어린쥐의 근육을 볼 수 있을 것만 같은 느낌…',
baseId: 'tr_pet64_m'
},
{
id: 'tr_pet66_m_blessed',
name: '축복받은 빵빵한 물놀이용 구명조끼',
rarity: 'S',
effect: '강화 수치에 따라 이어달리기시 체력 30~60 증가\n강화 수치에 따라 구출/부활(체력 15~25) 총 3회',
method: '미스터 백의 탱탱한 구명튜브 진화하여 획득',
description: '안전은 물론, 노출의 계절에 고민이 많은 쿠키들의 햇살 가리기에도 효과가 있다!',
baseId: 'tr_pet66_m'
},
{
id: 'tr_pet69_m_blessed',
name: '축복받은 판다 만두의 잘 다듬어진 죽순',
rarity: 'S',
effect: '강화 수치에 따라 대나무잎 젤리 4000~6000점 추가\n강화 수치에 따라 체력감소 5~8% 느림',
method: '판다 만두의 갓 나온 죽순 진화하여 획득',
description: '판다 만두는 죽순 하나로는 절대 만족하지 않는다. 자, 여기 껍질을 벗기고 잘 다듬은 죽순 쟁반 대령이오~!',
baseId: 'tr_pet69_m'
},
{
id: 'tr_pet71_m_blessed',
name: '축복받은 양파 물고기의 양파 비늘 슬라이스',
rarity: 'S',
effect: '강화 수치에 따라 눈물젤리 2800~3800점 추가\n강화 수치에 따라 체력 60~80으로 부활',
method: '양파 물고기의 양파 비늘 한 겹 진화하여 획득',
description: '벗겨도 벗겨도 계속 나오는 양파 비늘을 모았더니 슬라이스가 되었다!',
baseId: 'tr_pet71_m'
},
{
id: 'tr_pet72_m_blessed',
name: '축복받은 캐스터네츠의 전자 메트로놈',
rarity: 'S',
effect: '강화 수치에 따라 체력회복량 12~15% 증가\n강화 수치에 따라 구멍에 빠진 쿠키를 1~3회 구출',
method: '캐스터네츠의 마카롱 메트로놈 진화하여 획득',
description: '시대에 발맞춰 빠르게 발전하는 쿠키세계! 더 다양한 옵션을 제공한다.',
baseId: 'tr_pet72_m'
},
{
id: 'tr_pet73_m_blessed',
name: '축복받은 시나몬롤 토끼의 시나몬 파우더',
rarity: 'S',
effect: '강화 수치에 따라 시나몬롤 젤리 2300~2800점 추가\n강화 수치에 따라 체력회복량 5~8% 증가',
method: '시나몬롤 토끼의 시나몬 스틱 진화하여 획득',
description: '시나몬 스틱을 곱게 갈아 시나몬 잎을 곁들였다. 스틱이었을 때보다 더욱 강한 시나몬 향이 느껴진다.',
baseId: 'tr_pet73_m'
},
{
id: 'tr_pet74_m_blessed',
name: '축복받은 찹쌀 하프물범의 최고급 팥 통조림',
rarity: 'S',
effect: '강화 수치에 따라 모든 젤리 150~200점 추가\n강화 수치에 따라 기본속도 8~13% 증가',
method: '찹쌀 하프물범의 단팥 통조림 진화하여 획득',
description: '반짝이는 금빛 캔이라 찹쌀 하프물범이 더욱더 소중하게 보관하고 있는 이 세상 최고의 팥으로 만든 팥 통조림',
baseId: 'tr_pet74_m'
},
{
id: 'tr_pet75_m_blessed',
name: '축복받은 회중시계 심판의 황금빛 시계 덮개',
rarity: 'S',
effect: '강화 수치에 따라 광속질주 속도 5~10% 증가\n강화 수치에 따라 광속질주시 모든 젤리 500~700점 추가',
method: '회중시계 심판의 오래된 시계 덮개 진화하여 획득',
description: '눈을 닫고 마음으로 보아야 하는 것이 있다… 황금색은 더욱 잘 보일지도 모른다.',
baseId: 'tr_pet75_m'
},
{
id: 'tr_pet77_m_blessed',
name: '축복받은 팝핑 용알의 분석된 엑스레이 사진',
rarity: 'S',
effect: '강화 수치에 따라 거대화시 모든 젤리 400~700점 추가\n강화 수치에 따라 거대화시 체력감소 8~17% 느림',
method: '팝핑 용알의 분석된 엑스레이 사진 진화하여 획득',
description: '자신이 누군지 잊지 않기 위해… 어라, 추가된 이 데이터 분석은 뭐지? 시대의 발전에 따라 팝핑용알은 스스로를 더욱 많이 알게 됐다.',
baseId: 'tr_pet77_m'
},
{
id: 'tr_pet80_m_blessed',
name: '축복받은 똑떨어진 초코토핑 꼬리',
rarity: 'S',
effect: '강화 수치에 따라 구출/부활(체력 20~30) 총 3회\n강화 수치에 따라 장애물 파괴시 6~8코인 획득',
method: '사바나나 사자의 똑떨어진 꼬리 진화하여 획득',
description: '몸통 분리 묘기로 사바나나 사자 몸에서 떨어져 나왔는데, 어디서 무슨 모험을 한 건지 달달한 초콜릿을 묻혀왔다!',
baseId: 'tr_pet80_m'
},
{
id: 'tr_pet82_m_blessed',
name: '축복받은 달절구의 달콤한 꿀 초승달 떡',
rarity: 'S',
effect: '강화 수치에 따라 보름달젤리 획득시 광속질주 0.5~1초\n강화 수치에 따라 체력 20~30으로 2회 부활',
method: '달절구의 완벽한 초승달떡 진화하여 획득',
description: '달절구의 말에 따르면, 초승달떡은 달콤한 꿀을 듬뿍 찍어 먹을 때 가장 맛있다고 한다.',
baseId: 'tr_pet82_m'
},
{
id: 'tr_ga001_m_blessed',
name: '축복받은 스타를 만드는 비법책',
rarity: 'S',
effect: '강화 수치에 따라 고급 미니 연기점수 추가\n강화 수치에 따라 체력감소 4~6% 느림',
method: '연기의 비법이 담긴 마법책 진화하여 획득',
description: '연기만 잘 한다고 스타가 되는 것은 아니다. 어떤 쿠키가 이 책의 주인공이 될까?',
baseId: 'tr_ga001_m'
},
{
id: 'tr_ga002_m_blessed',
name: '축복받은 500년 묵은 인삼주 골드라벨',
rarity: 'S',
effect: '강화 수치에 따라 노란곰젤리 600~1000점 추가\n곰젤리파티 시간 10% 연장',
method: '500년 묵은 인삼 진화하여 획득',
description: '인삼의 영양과 유효성분을 농축한 액기스를 뜨거운 태양 아래서 익히면 황금빛이 난다.',
baseId: 'tr_ga002_m'
},
{
id: 'tr_ga007_m_blessed',
name: '축복받은 신비로운 빛을 내는 흑검',
rarity: 'S',
effect: '강화 수치에 따라 곰젤리파티 시간 10~15% 연장\n강화 수치에 따라 노란곰젤리 400~800점 추가',
method: '신비로운 빛을 내는 운석 진화하여 획득',
description: '운석의 영험한 기운이 그대로 담긴 흑검이 탄생했다! 이 검으로 부서진 쿠키 왕국을 다시 살릴 수 있을까?',
baseId: 'tr_ga007_m'
},
{
id: 'tr_ga008_m_blessed',
name: '축복받은 죽지않는 질긴 체스말',
rarity: 'A',
effect: '강화 수치에 따라 알파벳젤리 500~1000점 추가\n강화 수치에 따라 체력감소 3~4% 느림',
method: '승리의 한복판에 서 있던 체스말 진화하여 획득',
description: '어떤 위기에서도 살아나는 체스말. 죽지 않는 비결이 뭘까?',
baseId: 'tr_ga008_m'
},
{
id: 'tr_ga009_m_blessed',
name: '축복받은 꿀딸기 아이스크림',
rarity: 'S',
effect: '강화 수치에 따라 분홍곰젤리 300~500점 추가\n노란곰젤리 100~200점 추가',
method: '특히 더 달콤한 딸기잼 진화하여 획득',
description: '쿠키들의 지친 마음을 달래주는 새콤달콤 아이스크림. 한 입 물고 달리면 말랑한 기분을 만끽할 수 있다.',
baseId: 'tr_ga009_m'
},
{
id: 'tr_ga010_m_blessed',
name: '축복받은 샤이닝 초코잼\n헤어왁스',
rarity: 'S',
effect: '강화 수치에 따라 곰젤리파티 시간 10~20% 연장\n강화 수치에 따라 노란곰젤리 400~700점 추가',
method: '다크 초코잼 헤어무스 진화하여 획득',
description: '쿠키들이 파티를 앞두고 펑키헤어를 만들기 위해\n꼭 찾는 아이템.',
baseId: 'tr_ga010_m'
},
{
id: 'tr_ga011_m_blessed',
name: '축복받은 심해 방수\n손목시계',
rarity: 'A',
effect: '보너스타임 2초 연장\n강화 수치에 따라 보너스타임 점수 5~10% 추가',
method: '특수 방수 손목시계 진화하여 획득',
description: '물 속에 빠져도 젖지 않게 보호막을 형성해주는\n방수 손목시계. 이제 물놀이가 두렵지 않아!',
baseId: 'tr_ga011_m'
},
{
id: 'tr_ga012_m_blessed',
name: '축복받은 은빛 쿠키주스\n병뚜껑',
rarity: 'S',
effect: '강화 수치에 따라 코인 8~10% 보너스\n강화 수치에 따라 경험치 8~10% 보너스',
method: '의문의 쿠키주스 병뚜껑 진화하여 획득',
description: '코인과 착각하기 쉬운 은빛 병뚜껑. 하지만\n코인보다 귀하니 함부로 버리지 말자.',
baseId: 'tr_ga012_m'
},
{
id: 'tr_ga016_m_blessed',
name: '축복받은 바다빗깔\n뿔소라 귀걸이',
rarity: 'A',
effect: '강화 수치에 따라 은화 획득시 700~1000점 추가',
method: '바다빗깔 뿔소라 껍데기 진화하여 획득',
description: '차고 있으면 항상 바다 소리를 들을 수 있는\n귀걸이. 잠시만 하던 일을 멈추고 귀를 기울여\n보자.',
baseId: 'tr_ga016_m'
},
{
id: 'tr_ga017_m_blessed',
name: '축복받은 도도한\n얼굴 가면',
rarity: 'B',
effect: '강화 수치에 따라 경험치 7~10% 보너스',
method: '활짝 웃는 얼굴 가면 진화하여 획득',
description: '이것만 있으면 나도 차가운 도시 쿠키.',
baseId: 'tr_ga017_m'
},
{
id: 'tr_ga018_m_blessed',
name: '축복받은 유명한\n허니칩 쿠키',
rarity: 'S',
effect: '강화 수치에 따라 노란곰젤리 300~600점 추가',
method: '유명한 초코칩 쿠키 진화하여 획득',
description: '천연벌집을 얹어 달달하고 건강한 맛. 더 유명해질\n것 같다.',
baseId: 'tr_ga018_m'
},
{
id: 'tr_ga019_m_blessed',
name: '축복받은 튼튼한\n종합비타민제',
rarity: 'B',
effect: '강화 수치에 따라 광속질주 속도 5~10% 증가\n체력이 60 증가',
method: '활력 비타민 C 알약 진화하여 획득',
description: '비타민 C, D, E가 골고루 들어 있어 하루를\n가뿐하게 시작할 수 있는 종합비타민제.',
baseId: 'tr_ga019_m'
},
{
id: 'tr_ga020_m_blessed',
name: '축복받은 고칼로리\n크랜베리 시리얼',
rarity: 'A',
effect: '강화 수치에 따라 분홍곰젤리 200~400점 추가\n강화 수치에 따라 노란곰젤리 200~300점 추가',
method: '영양만점 크랜베리 진화하여 획득',
description: '영양과 칼로리가 더해진 시리얼. 간질간질한\n맛이다. 커피맛 쿠키는 칼로리가 높아서\n싫어한다고.',
baseId: 'tr_ga020_m'
},
{
id: 'tr_ga021_m_blessed',
name: '축복받은 일명 털의\n습격 발모크림',
rarity: 'A',
effect: '강화 수치에 따라 금화 획득시 500~1000점 추가\n강화 수치에 따라 은화 획득시 300~500점 추가',
method: '털털한 발모제 크림형 진화하여 획득',
description: '일주일만 발라보자. 털로 둘러싸인 자신을 발견할\n수 있다.',
baseId: 'tr_ga021_m'
},
{
id: 'tr_ga022_m_blessed',
name: '축복받은 쫀득한\n마시멜로 파이',
rarity: 'B',
effect: '강화 수치에 따라 알파벳젤리 400~600점 추가',
method: '고양이 발바닥 마시멜로 진화하여 획득',
description: '마시멜로를 살짝 구워 흐르기 직전에\n초코비스킷에 얹었다! 바로 먹어야 환상의 맛을\n즐길 수 있다고.',
baseId: 'tr_ga022_m'
},
{
id: 'tr_ga023_m_blessed',
name: '축복받은 자외선 차단\n올리브 오일',
rarity: 'A',
effect: '강화 수치에 따라 기본속도 4~6% 증가\n아이템 시간 10% 연장',
method: '처음 수확한 올리브 오일 진화하여 획득',
description: '햇빛에 장시간 노출되어도 걱정없다. SPF50+++',
baseId: 'tr_ga023_m'
},
{
id: 'tr_ga029_m_blessed',
name: '축복받은 시럽뿌린\n바삭바삭 크래커',
rarity: 'A',
effect: '강화 수치에 따라 체력이 20~40 증가',
method: '갓 구운 크래커 진화하여 획득',
description: '항상 눅눅해질까봐 시럽은 나중에 뿌려먹는데\n시럽을 부어도 바삭한 크래커라니!',
baseId: 'tr_ga029_m'
},
{
id: 'tr_ga030_m_blessed',
name: '축복받은 은으로 빚은\n화살촉',
rarity: 'B',
effect: '강화 수치에 따라 은화 획득시 600~800점 추가',
method: '흙으로 빚은 화살촉 진화하여 획득',
description: '은으로 빚어 더 고급스러워진 화살촉. 잘 못\n다뤘다간 다칠 수 있으니 조심하자.',
baseId: 'tr_ga030_m'
},
{
id: 'tr_ga031_m_blessed',
name: '축복받은 시럽 철철\n달콤 체리',
rarity: 'B',
effect: '강화 수치에 따라 분홍곰젤리 300~500점 추가',
method: '빛나는 빨간 체리 진화하여 획득',
description: '사탕수수 즙과 각설탕, 거기에 호박꿀까지 바른\n체리는 얼마나 환상적인 맛일까?',
baseId: 'tr_ga031_m'
},
{
id: 'tr_ga032_m_blessed',
name: '축복받은 보송보송\n압정',
rarity: 'C',
effect: '강화 수치에 따라 자석 시간 10~20% 연장\n강화 수치에 따라 펫이 획득한 점수 7~10% 추가',
method: '마녀가 깔아놓았던 압정 진화하여 획득',
description: '쿠키들의 반란. 압정을 곰팡이로 싸서 마녀의\n의자에 올려두었다.',
baseId: 'tr_ga032_m'
},
{
id: 'tr_ga033_m_blessed',
name: '축복받은 윤기나는\n밀',
rarity: 'C',
effect: '강화 수치에 따라 금화 획득시 500~700점 추가',
method: '풍년에 수확한 밀 진화하여 획득',
description: '철철 흐르는 밀의 윤기가 마녀의 머릿기름\n덕분이라는 소문이 있다.',
baseId: 'tr_ga033_m'
},
{
id: 'tr_ga034_m_blessed',
name: '축복받은 키가 큰\n도토리',
rarity: 'C',
effect: '보너스타임 2초 연장\n강화 수치에 따라 보너스타임 점수 5~10% 추가',
method: '언제봐도 귀여운 도토리 진화하여 획득',
description: '도토리가 키가 커 봤자지...',
baseId: 'tr_ga034_m'
},
{
id: 'tr_ga035_m_blessed',
name: '축복받은 설탕 가득\n유기농 밀가루',
rarity: 'B',
effect: '강화 수치에 따라 알파벳젤리 400~600점 추가',
method: '누런색 유기농 밀가루 진화하여 획득',
description: '유기농 밀가루와 달디 단 설탕을\n섞은 재료를 ’밀당’이라고 한다. 이 재료를 잘\n다루면? 밀당의 고수.',
baseId: 'tr_ga035_m'
},
{
id: 'tr_ga036_m_blessed',
name: '축복받은 신선한\n오색 땅콩잼',
rarity: 'A',
effect: '강화 수치에 따라 노란곰젤리 300~500점 추가',
method: '잘 볶은 신선한 땅콩 진화하여 획득',
description: '땅콩을 볶자마자 바로 만든 신선한 땅콩잼. 맛을\n더하기 위해서는 마녀의 곰팡이가 들어가야\n한다나.',
baseId: 'tr_ga036_m'
},
{
id: 'tr_ga042_m_blessed',
name: '축복받은 쿠키박스\n1440 컨트롤러',
rarity: 'S',
effect: '강화 수치에 따라 미니 자력 강화\n구멍에 빠진 쿠키를 2회 구출',
method: '쿠키박스720 컨트롤러 진화하여 획득',
description: '여러장소에서 달리기를 할 수 있어 두 배 재밌어진\n컨트롤러. 새로운 스테이지를 누비는 재미가\n쏠쏠하다.',
baseId: 'tr_ga042_m'
},
{
id: 'tr_ga043_m_blessed',
name: '축복받은 어드벤처스 코믹스\n스페셜 에디션',
rarity: 'S',
effect: '강화 수치에 따라 경험치 15~25% 보너스\n강화 수치에 따라 체력감소 3~4% 느림',
method: '마블링 코믹스 스페셜 에디션 진화하여 획득',
description: '마블링 코믹스의 최강의 영웅들이 한자리에\n모였다. 꿈과 희망과 모험이 가득한 이야기.\n영화로 곧 출시된다고.',
baseId: 'tr_ga043_m'
},
{
id: 'tr_ga044_m_blessed',
name: '축복받은 1000년 묵은\n홍삼주 핑크라벨',
rarity: 'S',
effect: '강화 수치에 따라 분홍곰젤리 400~1300점 추가\n강화 수치에 따라 아이템 시간 5~10% 연장',
method: '1000년 묵은 홍삼 진화하여 획득',
description: '1000년묵은 홍삼을 달여 만든 홍삼주. 이것을\n만들 때 온도와 습도를 비롯한 모든 조건이\n완벽했을 때만 핑크빛을 띤다고.',
baseId: 'tr_ga044_m'
},
{
id: 'tr_ga045_m_blessed',
name: '축복받은 마카롱\n소불고기 버거',
rarity: 'A',
effect: '아이템 시간 5% 연장\n강화 수치에 따라 거대화시 모든 젤리 150~250점\n추가',
method: '마카롱 소고기 버거 진화하여 획득',
description: '소고기에 여러가지 양념을 버무려 풍부한 식감을\n느낄 수 있는 고급버거.',
baseId: 'tr_ga045_m'
},
{
id: 'tr_ga046_m_blessed',
name: '축복받은 파.괴.신의\n돌망치',
rarity: 'S',
effect: '강화 수치에 따라 장애물 파괴시 11300~14000점\n추가\n강화 수치에 따라 체력 30~40으로 1회 부활',
method: '파.괴.신의 뿅망치 진화하여 획득',
description: '파.괴.신이 어느날 새로 들고 온 망치. 참\n단단하게도 생겼다.',
baseId: 'tr_ga046_m'
},
{
id: 'tr_ga047_m_blessed',
name: '축복받은 장밋빛 인생맛\n아이스크림',
rarity: 'S',
effect: '강화 수치에 따라 경험치 10~20% 보너스\n강화 수치에 따라 체력감소 4~5% 느림',
method: '인생맛 아이스크림 진화하여 획득',
description: '울 일보다 웃을 일이, 구멍에 빠지는 날보다\n날아오르는 날이 더 많은, 지금을 닮은 평범하지만\n소중한 아이스크림.',
baseId: 'tr_ga047_m'
},
{
id: 'tr_ga048_m_blessed',
name: '축복받은 배가 부른\n돼지 저금통',
rarity: 'A',
effect: '강화 수치에 따라 은화 획득시 500~1000점 추가\n강화 수치에 따라 금화 획득시 400~600점 추가',
method: '언제나 배고픈 돼지 저금통 진화하여 획득',
description: '왠지 돼지같지만 멋있어.',
baseId: 'tr_ga048_m'
},
{
id: 'tr_ga049_m_blessed',
name: '축복받은 베테랑\n감독님의 썬글라스',
rarity: 'S',
effect: '강화 수치에 따라 고급 어린이 연기점수 추가\n구멍에 빠진 쿠키를 2회 구출',
method: '까칠한 감독님의 클립보드 진화하여 획득',
description: '디테일한 감정까지 잡아낼 수 있는 썬글라스.\n발연기는 이제 그만.',
baseId: 'tr_ga049_m'
},
{
id: 'tr_ga050_m_blessed',
name: '축복받은 광속의\n유리 피냐타',
rarity: 'S',
effect: '광속질주 속도 5% 증가\n강화 수치에 따라 광속질주시 모든 젤리\n130~300점 추가',
method: '파티에서 도망친 피냐타 진화하여 획득',
description: '이제야 고향의 초원 위를 마음껏 달리는 피냐타.\n투명해진 피냐타 안의 사탕들이 아름답게 빛난다.',
baseId: 'tr_ga050_m'
},
{
id: 'tr_ga051_m_blessed',
name: '축복받은 보물 상인의\n절대금고',
rarity: 'S',
effect: '강화 수치에 따라 코인 10~15% 보너스\n충돌 피해 10% 감소',
method: '보물 상인의 미니 금고 진화하여 획득',
description: '특별한 주문을 외워야만 열리는 절대금고. 잠든\n보물 상인에게 물어보면 잠꼬대로 말해줄지도...',
baseId: 'tr_ga051_m'
},
{
id: 'tr_ga052_m_blessed',
name: '축복받은 플래티넘 펄샤이닝\n립스틱 7호 레드',
rarity: 'S',
effect: '강화 수치에 따라 별사탕젤리 700~1700점 추가\n초미니자력',
method: '뷰티풀 샤이닝 립스틱 3호 캔디핑크 진화하여 획득',
description: '누구나 한 번쯤 강렬한 빨간 립스틱을 바르고\n뽐내고 싶을 때가 있지. 화끈한 쿠키로 만들어줌.',
baseId: 'tr_ga052_m'
},
{
id: 'tr_ga053_m_blessed',
name: '축복받은 꿀에 재워둔\n자연산 산삼',
rarity: 'S',
effect: '강화 수치에 따라 모든 곰젤리 200~500점 추가\n강화 수치에 따라 체력회복량 4~7% 증가',
method: '드디어 발견한 자연산 산삼 진화하여 획득',
description: '꿀에 재워두면 산삼이 잠이 드는걸까? 그곳에선\n젤리꿈을 꾸고 있을지도 모르겠다.',
baseId: 'tr_ga053_m'
},
{
id: 'tr_ga054_m_blessed',
name: '축복받은 강호의\n옥수수 버터구이',
rarity: 'S',
effect: '강화 수치에 따라 2단점프부터 1000~1500점\n추가\n구멍에 빠진 쿠키를 3회 구출',
method: '강호의 야생 옥수수 진화하여 획득',
description: '옥수수 버터구이의 냄새를 풍기는 것만으로도\n집나간 쿠키가 돌아온다는 소문이 있다.',
baseId: 'tr_ga054_m'
},
{
id: 'tr_ga055_m_blessed',
name: '축복받은 팜므파탈\nNO.10 오 드 퍼퓸',
rarity: 'S',
effect: '강화 수치에 따라 거대화시 모든 젤리 200~400점\n추가\n강화 수치에 따라 거대화 시간 5~10% 연장',
method: '템테이션 NO.9 오 드 퍼퓸 진화하여 획득',
description: '뭐든지 유혹할 수 있는 치명적 유혹의 향수.\n정수리에 뿌리면 더 효과가 좋다고 한다.',
baseId: 'tr_ga055_m'
},
{
id: 'tr_ga056_m_blessed',
name: '축복받은 무적의\n강철 핫도그',
rarity: 'S',
effect: '강화 수치에 따라 장애물 파괴시 15300~18000점\n추가\n강화 수치에 따라 체력회복량 6~15% 증가',
method: '돌로 만든 핫도그 진화하여 획득',
description: '자, 이제 각오가 되었다면 씹고 뜯고 맛보고\n즐기자.',
baseId: 'tr_ga056_m'
},
{
id: 'tr_ga057_m_blessed',
name: '축복받은 꽝꽝얼린\n아이스 초코비스킷',
rarity: 'S',
effect: '강화 수치에 따라 기본속도 5.3~7.3% 증가\n강화 수치에 따라 체력감소 4.5~5.5% 느림',
method: '꽁꽁얼린 아이스비스킷 진화하여 획득',
description: '절대 녹지 않아 몸 속까지 시원해지는 신비로운\n간식. 마음까지 얼려버릴지 모르니 조심!',
baseId: 'tr_ga057_m'
},
{
id: 'tr_ga058_m_blessed',
name: '축복받은 열나게 맛있는\n용암 초코바',
rarity: 'S',
effect: '강화 수치에 따라 이어달리기시 체력 60~120\n증가\n점프 2회 추가',
method: '힘이 불끈 카라멜 초코바 진화하여 획득',
description: '쿠키들이 소풍갈 때 꼭 챙기는 초코바. 열이 날\n정도로 화끈한 맛.',
baseId: 'tr_ga058_m'
},
{
id: 'tr_ga059_m_blessed',
name: '축복받은 울트라 파워\n쌍무지개삼',
rarity: 'S',
effect: '강화 수치에 따라 모든 젤리 320~500점 추가\n강화 수치에 따라 체력감소 3~4% 느림',
method: '울트라 파워 무지개삼 진화하여 획득',
description: '행운의 발견. 흔히 볼 수 없는 쌍무지개 삼! 쿠키의\n자신감이 배가 된 느낌이다.',
baseId: 'tr_ga059_m'
},
{
id: 'tr_ga060_m_blessed',
name: '축복받은 어둠을 삼키는\n투명랜턴',
rarity: 'S',
effect: '강화 수치에 따라 장애물 통과시 11500~16000점\n추가\n강화 수치에 따라 체력감소 6~9% 느림',
method: '캠핑용 불꽃랜턴 진화하여 획득',
description: '삼켜진 어둠은 어디로 가기에 아직도 랜턴이\n투명한걸까?',
baseId: 'tr_ga060_m'
},
{
id: 'tr_ga061_m_blessed',
name: '축복받은 끈적한 재즈 뮤즈젤리',
rarity: 'S',
effect: '초 초미니자력\n강화 수치에 따라 음표젤리 500~800점 추가',
method: '새콤달콤 뮤즈젤리 진화하여 획득',
description: '시럽이 잔뜩 묻어있어 맛보는 것만으로도 끈적한 재즈 선율을 느낄 수 있다.',
baseId: 'tr_ga061_m'
},
{
id: 'tr_ga003_m_blessed',
name: '축복받은 인고의 세월을 간직한 달조각',
rarity: 'S',
effect: '강화 수치에 따라 경험치 10~15% 보너스\n강화 수치에 따라 코인 10~12% 보너스',
method: '차갑게 식은 달조각 진화하여 획득',
description: '시련은 쿠키를 단련하지. 하지만 똑같은 실수를 반복한다면 나아지지 못 한다고.',
baseId: 'tr_ga003_m'
},
{
id: 'tr_ga067_m_blessed',
name: '축복받은 광산용 황금 다이너마이트',
rarity: 'S',
effect: '강화 수치에 따라 장애물 파괴시 3~6코인 획득\n강화 수치에 따라 코인 3~5% 보너스',
method: '광산용 다이너마이트 진화하여 획득',
description: '다이너마이트는 터뜨려야 제맛인데 아까워서 터뜨릴 수나 있을까?',
baseId: 'tr_ga067_m'
},
{
id: 'tr_ga066_m_blessed',
name: '축복받은 황금이 열리는 마법의 화분',
rarity: 'S',
effect: '강화 수치에 따라 3~6% 확률로 코인꽃 생성\n강화 수치에 따라 코인 7~12% 보너스',
method: '오래된 마법의 화분 진화하여 획득',
description: '마법나무의 정기를 받고 황금 줄기를 틔운 화분. 화분 안쪽의 표시선까지 물을 붓고 3분을 기다리면 황금이 주렁주렁!',
baseId: 'tr_ga066_m'
},
{
id: 'tr_ga065_m_blessed',
name: '축복받은 원혼을 부르는 성난 횃불',
rarity: 'S',
effect: '강화 수치에 따라 원혼젤리 2000~4000점 추가\n강화 수치에 따라 장애물 통과시 6500~11000점 추가',
method: '원혼을 부르는 성냥갑 진화하여 획득',
description: '못다 이룬 꿈이 있는 원혼들이 자꾸 모여드는 횃불. 이글이글거리는 불꽃이 열정과 닮았다나.',
baseId: 'tr_ga065_m'
},
{
id: 'tr_ga064_m_blessed',
name: '축복받은 설탕진주 내리는 눈 케이크',
rarity: 'S',
effect: '강화 수치에 따라 눈꽃젤리 800~1700점 추가\n강화 수치에 따라 장애물 파괴시 11300~14000점 추가',
method: '눈설탕 조각 케이크 진화하여 획득',
description: '연인쿠키들에게 인기가 좋은 로맨틱한 선물. 펄펄 내리는 설탕진주가 여심을 자극한다나.',
baseId: 'tr_ga064_m'
},

{
id: 'tr_ga068_m_blessed',
name: '축복받은 힘이 넘치는 팔색 무지개떡',
rarity: 'S',
effect: '강화 수치에 따라 장애물 파괴시 17300~20000점 추가\n강화 수치에 따라 모든 젤리 100~150점 추가',
method: '힘이 솟는 오색 무지개떡 진화하여 획득',
description: '더 단단해져서 이제 무서울게 없는 무지개떡. 분홍 부분이 딸기맛인지 체리맛인지 쿠키들 사이에서 논란이 되고 있다고 함.',
baseId: 'tr_ga068_m'
},
{
id: 'tr_ga070_m_blessed',
name: '축복받은 완벽한 질주를 위한 에어 꽃신',
rarity: 'S',
effect: '강화 수치에 따라 광속질주시 모든 젤리 300~500점 추가\n광속질주 시간 5% 연장',
method: '아름다운 질주를 위한 꽃신 진화하여 획득',
description: '에어 덕분에 더 멀리 달릴 수 있는 러닝 전용 슈즈. 거기다 예쁘기까지.',
baseId: 'tr_ga070_m'
},
{
id: 'tr_ga071_m_blessed',
name: '축복받은 꿀 퐁당 가래떡꼬치',
rarity: 'S',
effect: '강화 수치에 따라 이어달리기시 체력 30~60 추가\n강화 수치에 따라 체력감소 3~4% 느림',
method: '꿀 찍은 가래떡 구이 진화하여 획득',
description: '꿀잼을 바르고 화염 꼬챙이에 꽂아 구운 특급 가래떡 꼬치. 맛좋은 가래떡이 네 개 씩이나! 아 배부르다!',
baseId: 'tr_ga071_m'
},
{
id: 'tr_ga072_m_blessed',
name: '축복받은 꿀잼바른 고급 영양 약과',
rarity: 'S',
effect: '보너스타임에서 펫이 커짐\n강화 수치에 따라 펫이 획득한 점수 10~15% 추가',
method: '펫 전용 영양 약과 진화하여 획득',
description: '맛과 쫀득함이 더해진 영양약과로 씹을 때마다 꿀재미를 느낄 수 있다.',
baseId: 'tr_ga072_m'
},
{
id: 'tr_ga073_m_blessed',
name: '축복받은 마그네틱 원기회복 드링크',
rarity: 'S',
effect: '초미니자력\n강화 수치에 따라 체력감소 4~6.5% 느림',
method: '마그네틱 에너지 드링크 진화하여 획득',
description: '이 드링크로 말씀드릴 것 같으면 한 번 마시면 착착 붙고, 두 번 마시면 훨훨 날지.',
baseId: 'tr_ga073_m'
},
{
id: 'tr_ga074_m_blessed',
name: '축복받은 폭풍달콤 부활의 도넛',
rarity: 'S',
effect: '강화 수치에 따라 구멍에 빠진 쿠키를 1~3회 구출\n강화 수치에 따라 체력 30으로 1~3회 부활',
method: '달콤한 부활의 도넛 진화하여 획득',
description: '한 입 베어물면 입안에서 달콤함의 폭풍이 몰아친다. 이대로 휩쓸려버려도 좋아!',
baseId: 'tr_ga074_m'
},
{
id: 'tr_ga075_m_blessed',
name: '축복받은 색동별젤리 왕관 리미티드 에디션',
rarity: 'S',
effect: '초 초미니자력\n강화 수치에 따라 색동별젤리 300~700점 추가',
method: '색동별젤리 펜던트 리미티드 에디션 진화하여 획득',
description: '한정판에도 급이 있다. 왕관으로 자리를 옮긴 색동별 젤리들은 하늘 높은 줄 모르고 자력과 점수가 치솟고 있다고.',
baseId: 'tr_ga075_m'
},
{
id: 'tr_ga076_m_blessed',
name: '축복받은 무지개 블랙홀 드링크',
rarity: 'S',
effect: '초미니자력\n강화 수치에 따라 모든 젤리 220~400점 추가',
method: '마그네틱 무지개 드링크 진화하여 획득',
description: '아주 강력해진 드링크. 섣불리 뚜껑을 열었다가는 영혼까지 빨려 들어갈 수도 있다!',
baseId: 'tr_ga076_m'
},
{
id: 'tr_ga077_m_blessed',
name: '축복받은 로열젤리 소프트 아이스크림',
rarity: 'S',
effect: '강화 수치에 따라 이어달리기시 체력 80~140 추가',
method: '여왕벌의 로열젤리 진화하여 획득',
description: '구름보다 부드럽고 캔디보다 달콤한 소프트 아이스크림. 마녀들의 디저트로 선풍적인 인기라고 한다.',
baseId: 'tr_ga077_m'
},
{
id: 'tr_ga078_m_blessed',
name: '축복받은 누군가 만들어준 불꽃 칵테일',
rarity: 'S',
effect: '강화 수치에 따라 체력감소 5~8% 느림\n강화 수치에 따라 체력 30~50으로 부활',
method: '누군가 만들어준 신선한 야채주스 진화하여 획득',
description: '이 칵테일을 마신 쿠키는 언제 쓰러졌냐는 듯 다시 일어날 수 있지.',
baseId: 'tr_ga078_m'
},
{
id: 'tr_ga079_m_blessed',
name: '축복받은 눈물콧물 쏙빠지는 와사비 챕스틱',
rarity: 'S',
effect: '강화 수치에 따라 경험치 15~25% 보너스\n강화 수치에 따라 체력 20~30으로 부활 2회',
method: '정신이 번쩍드는 와사비 챕스틱 진화하여 획득',
description: '슬픈 일이 있을 때 일부러 이 챕스틱을 바르고 맘껏 울어도 좋다.',
baseId: 'tr_ga079_m'
},
{
id: 'tr_ga080_m_blessed',
name: '축복받은 노란곰젤리 모양 초코 롤케이크',
rarity: 'S',
effect: '강화 수치에 따라 이어달리기시 노란곰젤리 1000~1500점 추가\n강화 수치에 따라 이어달리기시 구멍에 빠진 쿠키를 1~3회 구출',
method: '노란곰젤리 모양 롤케이크 진화하여 획득',
description: '초코의 풍미를 더해 더욱 맛있어진 롤케이크. 왠지 노란곰젤리가 더 신나보이는건 기분 탓일까.',
baseId: 'tr_ga080_m'
},
{
id: 'tr_ga081_m_blessed',
name: '축복받은 근육폭발 에너지드링크',
rarity: 'S',
effect: '초미니자력\n강화 수치에 따라 이어달리기시 체력 55~75 추가',
method: '레드쿠키 에너지드링크 진화하여 획득',
description: '붉은 근육이 불끈불끈 솟아나는 에너지 드링크. 진짜로 폭발하지는 않으니 걱정말자.',
baseId: 'tr_ga081_m'
},
{
id: 'tr_ga082_m_blessed',
name: '축복받은 엄마가 정성껏 싸주신 도시락',
rarity: 'S',
effect: '강화 수치에 따라 체력회복량 3~6% 증가\n강화 수치에 따라 거대화시 모든 젤리 200~400점 추가',
method: '간편하고 든든한 삼각 주먹밥 진화하여 획득',
description: '이 도시락을 한 입 먹으면 정성맛, 사랑맛, 행복맛이 입안 가득 느껴진다.',
baseId: 'tr_ga082_m'
},
{
id: 'tr_ga083_m_blessed',
name: '축복받은 우주를 누비는 젤리풍선다발',
rarity: 'S',
effect: '강화 수치에 따라 보너스타임 점수 10~15% 추가\n강화 수치에 따라 보너스타임 속도 3.2~5% 증가',
method: '하늘로 날아간 젤리풍선다발 진화하여 획득',
description: '향긋한 바람에 몸을 맡긴 풍선은 지금이 가장 행복하다고 한다.',
baseId: 'tr_ga083_m'
},
{
id: 'tr_ga084_m_blessed',
name: '축복받은 초콜릿커버 학습서 양장본',
rarity: 'S',
effect: '강화 수치에 따라 경험치 20~30% 보너스\n강화 수치에 따라 체력감소 2~3% 느림',
method: '초콜릿커버 학습서 진화하여 획득',
description: '아무리 열심히 봐도 헤지지 않는다. 짱짱함.\n소중히 간직했다가 동생에게 물려주세요.',
baseId: 'tr_ga084_m'
},
{
id: 'tr_ga090_m_blessed',
name: '축복받은 위대한 불멸의 도넛',
rarity: 'S',
effect: '강화 수치에 따라 구출/부활(체력 36) 총 2~4회',
method: '글레이즈드 불로장생 도넛 진화하여 획득',
description: '쿠키로 태어나 단 한 번 볼까 말까할 정도로 소중한 아이템. 흔하디 흔해 쌓이고 쌓인 일반 도넛과는 차원이 다르다.',
baseId: 'tr_ga090_m'
},
{
id: 'tr_ga091_m_blessed',
name: '축복받은 황금연꽃이 날리는 지혜의 링',
rarity: 'S',
effect: '충돌데미지추가\n강화 수치에 따라 코인 10~17% 보너스',
method: '황금으로 만든 가시 링 진화하여 획득',
description: '쿠키마을에서 가장 똑똑한 쿠키만이 지혜의 링을 쓸 수 있다고 한다. 지혜를 겨루는 방법은 꿀말잇기지. 우라늄!',
baseId: 'tr_ga091_m'
},
{
id: 'tr_ga092_m_blessed',
name: '축복받은 불타는 초코 에너지 저장 인형',
rarity: 'S',
effect: '충돌데미지추가\n강화 수치에 따라 이어달리기시 체력 90~150 추가',
method: '초콜릿 에너지 저장 인형 진화하여 획득',
description: '부글거리는 초코 마그마를 이용해 불에도 녹지 않는 엄청 강력한 초콜릿을 만들었다!',
baseId: 'tr_ga092_m'
},
{
id: 'tr_ga093_m_blessed',
name: '축복받은 자력차단 티타늄 헬멧',
rarity: 'S',
effect: '자력차단\n강화 수치에 따라 모든 젤리 530~800점 추가',
method: '자력차단 젤로 헬멧 진화하여 획득',
description: '궁극의 고수가 되고 싶다면, 이 헬멧을 쓰고도 무리없이 달릴 수 있어야 한다.',
baseId: 'tr_ga093_m'
},
{
id: 'tr_ga095_m_blessed',
name: '축복받은 기적을\n부르는 구급차 장난감',
rarity: 'S',
effect: '체력비례속도증가\n강화 수치에 따라 체력 30으로 1~3회 부활',
method: '작은 구급차 장난감 진화하여 획득',
description: '기적같은 힘으로 쿠키를 살려내는 장난감 차량. 그 작은 공간에 설탕 호흡기와 밀가루 반죽기까지 갖춰져 있다는 소문.',
baseId: 'tr_ga095_m'
},
{
id: 'tr_ga096_m_blessed',
name: '축복받은 핫핫슙슙슈비루왑빱빠쑝 드링크',
rarity: 'S',
effect: '초미니자력\n강화 수치에 따라 기본속도 5~8% 증가',
method: '레드 핫 칠리 에너지 드링크 진화하여 획득',
description: '참을 수 없이 맵고 화끈한 드링크. 마시면 저절로 외치게 된다. 핫핫슙슙슈비루왑빱빠쑝!',
baseId: 'tr_ga096_m'
},
{
id: 'tr_ga100_m_blessed',
name: '축복받은 선원의\n불타는 황금검',
rarity: 'S',
effect: '강화 수치에 따라 체력 20~30으로 부활 3회\n강화 수치에 따라 코인 6~8% 보너스',
method: '선원의 단단한 단검 진화하여 획득',
description: '황금시럽에 여러 번 담금질하여 더욱 강해졌음.',
baseId: 'tr_ga100_m'
},
{
id: 'tr_ga101_m_blessed',
name: '축복받은 빵빵한\n코끼리 저금통',
rarity: 'S',
effect: '강화 수치에 따라 금화 획득시 700~1200점 추가\n강화 수치에 따라 은화 획득시 300~800점 추가',
method: '언제나 배고픈 코끼리 저금통 진화하여 획득',
description: '저금통에 금화와 은화가 가득차 코에 끼고도 남는다.',
baseId: 'tr_ga101_m'
},
{
id: 'tr_ga102_m_blessed',
name: '축복받은 소다향\n쌍쌍쭈쭈바',
rarity: 'S',
effect: '강화 수치에 따라 체력회복량 5~8% 증가\n강화 수치에 따라 거품젤리 400~600점 추가',
method: '소다향 쭈쭈바 진화하여 획득',
description: '꽁다리 때문에 싸우는 일이 없도록 쌍쌍쭈쭈바가 개발되었다!',
baseId: 'tr_ga102_m'
},
{
id: 'tr_ga103_m_blessed',
name: '축복받은 더 맛있는\n몬스터머핀',
rarity: 'S',
effect: '강화 수치에 따라 체력감소 4.5~5.5% 느림\n강화 수치에 따라 체력 70~88으로 부활',
method: '생크림 몬스터머핀 진화하여 획득',
description: '더 무서워진 맛으로 돌아왔다! 한 입 맛보면 으르렁으르렁으르렁~',
baseId: 'tr_ga103_m'
},
{
id: 'tr_ga104_m_blessed',
name: '축복받은 비타비타\n플러스 드링크',
rarity: 'S',
effect: '초미니자력\n강화 수치에 따라 구출/부활(체력 20~30) 총 3회',
method: '비타비타 드링크 진화하여 획득',
description: '와우~ 너무 상큼해서 더 끌리는것 같아!',
baseId: 'tr_ga104_m'
},
{
id: 'tr_ga108_m_blessed',
name: '축복받은 진한\n블랙커피 드링크',
rarity: 'S',
effect: '초미니자력\n강화 수치에 따라 체력회복량 9~12% 증가',
method: '따뜻한 카페라떼 드링크 진화하여 획득',
description: '인생의 쓴맛을 아는 쿠키만이 이 깊고 진한 맛을 제대로 즐길 수 있다.',
baseId: 'tr_ga108_m'
},
{
id: 'tr_ga109_m_blessed',
name: '축복받은 로열\n곰젤리안장',
rarity: 'S',
effect: '강화 수치에 따라 소환수에 탑승시 모든 젤리\n800~1700점 추가\n강화 수치에 따라 체력감소 5~8% 느림',
method: '말랑말랑 젤리안장 진화하여 획득',
description: '너무 푹신해서 한 번 앉으면 엉덩이를 뗄 수 없는,\n왠지 미미안한 안장.',
baseId: 'tr_ga109_m'
},
{
id: 'tr_ga111_m_blessed',
name: '축복받은 불끈\n초 고단백 우유',
rarity: 'S',
effect: '강화 수치에 따라 거대화시 모든 젤리 200~400점\n추가\n강화 수치에 따라 체력 45~65으로 부활',
method: '얼룩소 고단백 우유 진화하여 획득',
description: '단백질이 99%나 함유되었다. 근육맛이 날 것 같아!',
baseId: 'tr_ga111_m'
},
{
id: 'tr_ga110_m_blessed',
name: '축복받은 진짜배기\n꿀꽈배기 도넛',
rarity: 'S',
effect: '강화 수치에 따라 이어달리기시 구출/부활(체력\n25~45) 총 3회',
method: '배배꼬인 꽈배기 도넛 진화하여 획득',
description: '설탕으론 부족해 아예 시럽을 들이부었다. 황홀한 맛에 혀가 배배 꼬일지도.',
baseId: 'tr_ga110_m'
},
{
id: 'tr_ga113_m_blessed',
name: '축복받은 영험한\n별빛 브로치',
rarity: 'S',
effect: '강화 수치에 따라 블랙베리젤리 1500~2500점\n추가\n강화 수치에 따라 색동별젤리 200~300점 추가',
method: '고귀한 별빛 브로치 진화하여 획득',
description: '영험한 기운이 담겨 브로치의 가치가 더욱 높아졌다.',
baseId: 'tr_ga113_m'
},
{
id: 'tr_ga114_m_blessed',
name: '축복받은 분홍곰젤리\n쌍고깔모자',
rarity: 'S',
effect: '강화 수치에 따라 60~80% 확률로 곰젤리파티에\n분홍곰젤리 출현\n강화 수치에 따라 분홍곰젤리 400~500점 추가',
method: '분홍곰젤리 고깔모자 진화하여 획득',
description: '더 재미있고 화려해진 고깔모자! 자꾸 누군가를 놀려주고 싶은 기분이다.',
baseId: 'tr_ga114_m'
},
{
id: 'tr_ga115_m_blessed',
name: '축복받은 캔디바퀴\n인라인스케이트',
rarity: 'S',
effect: '강화 수치에 따라 생명물약 획득시 광속질주\n0.5~1초\n강화 수치에 따라 체력감소 2~3% 느림',
method: '캔디바퀴 롤러스케이트 진화하여 획득',
description: '이것은 혁신. 새로운 유행. 캔디가 바닥에 닿는\n면적을 줄여 마찰을 최소화했다!',
baseId: 'tr_ga115_m'
},
{
id: 'tr_ga116_m_blessed',
name: '축복받은 상큼달큼\n대폭발 골드키위빵',
rarity: 'S',
effect: '강화 수치에 따라 거대화시 기본속도 5~10% 증가\n강화 수치에 따라 키위젤리 300~400점 추가',
method: '상큼폭발 키위빵 진화하여 획득',
description: '달큼함 속에 상큼함이 감돈다. 잘 구워진\n골든키위가 입에서 살살 녹는 맛!',
baseId: 'tr_ga116_m'
},
{
id: 'tr_ga117_m_blessed',
name: '축복받은 3단 피넛버터\n샌드위치',
rarity: 'S',
effect: '강화 수치에 따라 거대화시 체력감소 10~20%\n느림\n강화 수치에 따라 모든 젤리 320~500점 추가',
method: '달달한 피넛버터 샌드위치 진화하여 획득',
description: '쿠키들 사이에서 3단인지 6단인지 논란이 되고\n있지만, 맛있다는 것은 논할 필요가 없지!',
baseId: 'tr_ga117_m'
},
{
id: 'tr_ga118_m_blessed',
name: '축복받은 99.9%\n골든 드링크',
rarity: 'S',
effect: '초미니자력\n강화 수치에 따라 6~7% 확률로 코인꽃 생성',
method: '골든쉐이크 드링크 진화하여 획득',
description: '아무나 맛볼 수 없어서 더욱 귀하다. 한 모금만\n마시면 온몸이 블링블링해질것만 같아!',
baseId: 'tr_ga118_m'
},
{
id: 'tr_ga123_m_blessed',
name: '축복받은 뜨겁게 달궈진\n젤리코',
rarity: 'S',
effect: '5% 확률로 젤리코가 떨어짐\n강화 수치에 따라 체력감소 2~3% 느림',
method: '불타는 빨간 젤리코 진화하여 획득',
description: '한 번 달궈진 젤리코는 식는 법이 없지. 뜨거운\n맛이 뭔지 알게 될 거야!',
baseId: 'tr_ga123_m'
},
{
id: 'tr_ga124_m_blessed',
name: '축복받은 토핑 듬뿍\n밤하늘 크레페',
rarity: 'S',
effect: '강화 수치에 따라 그믐달젤리 500~1000점 추가\n강화 수치에 따라 체력 40~80으로 부활',
method: '달콤 밤하늘 크레페 진화하여 획득',
description: '별빛과 달빛을 잘 섞고 밤하늘 소스를\n먹음직스럽게 뿌렸다! 꿈을 꾸는 듯한 맛!',
baseId: 'tr_ga124_m'
},
{
id: 'tr_ga125_m_blessed',
name: '축복받은 보름달빛\n허니문 칵테일',
rarity: 'S',
effect: '강화 수치에 따라 체력감소 4~7% 느림\n구멍에 빠진 쿠키를 3회 구출',
method: '초승달빛 무드 칵테일 진화하여 획득',
description: '모든 것이 충만하고 완벽한, 가장 행복한 순간에\n한 모금 마시는 최상의 칵테일!',
baseId: 'tr_ga125_m'
},
{
id: 'tr_ga126_m_blessed',
name: '축복받은 치명적인\n쌍쌍 빙산바',
rarity: 'S',
effect: '강화 수치에 따라 기본속도 3~5% 증가\n강화 수치에 따라 경험치 20~30% 보너스',
method: '빙산의 일각 아이스바 진화하여 획득',
description: '치명적으로 차갑고 강하다! 나눠먹고 싶어도 쪼갤\n수가 없다는 소문이...',
baseId: 'tr_ga126_m'
},
{
id: 'tr_ga131_m_blessed',
name: '축복받은 신성한\n대지의 번영 팔찌',
rarity: 'S',
effect: '강화 수치에 따라 거대화 착지시 바닥에서 코인\n생성 고급 1단~10단',
method: '대지의 번영 팔찌 진화하여 획득',
description: '세상에서 가장 거대하고 자비로운 대지의 기운이\n응축되어 만들어진 전설의 팔찌.',
baseId: 'tr_ga131_m'
},
{
id: 'tr_ga132_m_blessed',
name: '축복받은 신성한\n불의 수호 반지',
rarity: 'S',
effect: '충돌 직전 모든 장애물을 파괴 2회\n강화 수치에 따라 체력감소 4~7% 느림',
method: '불의 수호 반지 진화하여 획득',
description: '세상에서 가장 깊고 뜨거운 불의 기운이 응축되어\n만들어진 전설의 반지.',
baseId: 'tr_ga132_m'
},
{
id: 'tr_ga133_m_blessed',
name: '축복받은 신성한\n바람의 질주 귀걸이',
rarity: 'S',
effect: '광속질주시 장애물 통과\n강화 수치에 따라 생명물약 획득시 광속질주\n0.5~1초',
method: '바람의 질주 귀걸이 진화하여 획득',
description: '세상에서 가장 날쌨고 가벼운 바람의 기운이\n응축되어 만들어진 전설의 귀걸이.',
baseId: 'tr_ga133_m'
},
{
id: 'tr_ga134_m_blessed',
name: '축복받은 신성한\n물의 회복 펜던트',
rarity: 'S',
effect: '장애물에 충돌시 체력복구 2회\n강화 수치에 따라 코인 10~15% 보너스',
method: '물의 회복 펜던트 진화하여 획득',
description: '세상에서 가장 맑고 깨끗한 물의 기운이 응축되어\n만들어진 전설의 펜던트.',
baseId: 'tr_ga134_m'
},
{
id: 'tr_ga135_m_blessed',
name: '축복받은 파직파지직\nC 건전지 바톤',
rarity: 'S',
effect: '강화 수치에 따라 이어달리기시 꼬마 자력 세기\n증가\n강화 수치에 따라 모든 젤리 160~300점 추가',
method: '짜릿한 AAA 건전지 바톤 진화하여 획득',
description: '사이즈가 커진 만큼 화끈하고 더 짜릿해진 건전지\n바톤!',
baseId: 'tr_ga135_m'
},
{
id: 'tr_ga136_m_blessed',
name: '축복받은 풍미폭발\n초코 크로와상',
rarity: 'S',
effect: '강화 수치에 따라 체력감소 3~5% 느림\n강화 수치에 따라 체력회복량 8.5~13% 증가',
method: '풍미가득 버터 크로와상 진화하여 획득',
description: '달콤함과 바삭함이 한 데 어우러져 폭발하는\n느낌!! 단, 입가에 초코를 묻히고 다니면 귀여울 수\n있으니 주의.',
baseId: 'tr_ga136_m'
},
{
id: 'tr_ga137_m_blessed',
name: '축복받은 미니 버블껌\n소다엔진 로켓',
rarity: 'S',
effect: '강화 수치에 따라 버블껌볼 발사점수\n1000~1500점 추가\n강화 수치에 따라 체력 60~80으로 부활',
method: '알록달록 미니 버블껌 미사일 진화하여 획득',
description: '소다 기포 추진 엔진을 장착한 버블껌 로켓.\n우주에 근사한 예술작품 하나 남겨볼까?',
baseId: 'tr_ga137_m'
},
{
id: 'tr_ga138_m_blessed',
name: '축복받은 미끌미끌\n황금 바나나 껍질',
rarity: 'S',
effect: '강화 수치에 따라 기본속도 5~7% 증가\n강화 수치에 따라 코인 11~13% 보너스',
method: '누군가가 놓아둔 바나나 껍질 진화하여 획득',
description: '일반 바나나보다 훨씬 미끈덩거리는 황금 바나나\n껍질. 알맹이는 어디로 갔을까?',
baseId: 'tr_ga138_m'
},
{
id: 'tr_ga139_m_blessed',
name: '축복받은 전문가용\n모래주머니 10g',
rarity: 'S',
effect: '이어달리기시 기본속도 10% 감소\n강화 수치에 따라 체력감소 5~7% 느림',
method: '초보용 모래주머니 5g 진화하여 획득',
description: '연습 효과가 짱짱! 발목에 착 달라붙어 착용감도\n짱짱!',
baseId: 'tr_ga139_m'
},
// {
//     id: 'tr_ga140_m_blessed',
//     name: '???',
//     rarity: 'S',
//     effect: '???',
//     method: '???',
//     description: '???',
//     baseId: 'tr_ga140_m',
//     booknone: true
// },
{
id: 'tr_ga141_m_blessed',
name: '축복받은 전문가용\n베이킹파우더',
rarity: 'S',
effect: '강화 수치에 따라 생명물약 획득시 거대화 2~3초\n강화 수치에 따라 체력회복량 6~8% 증가',
method: '초급자용 베이킹파우더 진화하여 획득',
description: '초급자 손에 닿지 않도록 주의. 케이크가 너무\n커져 깔릴 수 있음.',
baseId: 'tr_ga141_m'
},
{
id: 'tr_ga142_m_blessed',
name: '축복받은 젤리퐁퐁\n점핑 젤리말',
rarity: 'S',
effect: '초미니자력\n강화 수치에 따라 거대화 착지시 바닥에서 젤리\n생성 고급 1단~10단',
method: '젤리퐁퐁 스카이콩콩 진화하여 획득',
description: '탄력이 일품인 거대 젤리를 한 땀 한 땀 붙여\n만들었다. 달콤함이 폴폴~',
baseId: 'tr_ga142_m'
},
{
id: 'tr_ga143_m_blessed',
name: '축복받은 사르르르\n벚꽃만개 솜사탕',
rarity: 'S',
effect: '강화 수치에 따라 벚꽃젤리 점수 300~600점 추가\n강화 수치에 따라 기본속도 2~3% 증가',
method: '사르르 분홍벚꽃 솜사탕 진화하여 획득',
description: '한창 날리던 벚꽃을 곱게 말려, 솜사탕 위에 토핑\n했다. 분홍구름 위를 뛰노는 듯한 환상적인 맛!',
baseId: 'tr_ga143_m'
},
{
id: 'tr_ga144_m_blessed',
name: '축복받은 얼음돌풍\n스크류 소다바',
rarity: 'S',
effect: '강화 수치에 따라 거품젤리 480~780점 추가\n강화 수치에 따라 체력감소 3~4% 느림',
method: '시원달콤 아이스 소다바 진화하여 획득',
description: '얼음 돌풍 한가운데에서 얼었다. 무더운 여름을\n차갑게 얼려버릴 스크류 소다바!!',
baseId: 'tr_ga144_m'
},
{
id: 'tr_ga145_m_blessed',
name: '축복받은 아이스 스파클링\n워터 드링크',
rarity: 'S',
effect: '초미니자력\n강화 수치에 따라 체력 60~90으로 부활 1회',
method: '스파클링 워터 드링크 진화하여 획득',
description: '톡톡 쏘는 아이스 거품 한 입이면 온몸의 오장\n육부가 깨어나는 느낌.',
baseId: 'tr_ga145_m'
},
{
id: 'tr_ga150_m_blessed',
name: '축복받은 조청 가득\n대추꽃 송편',
rarity: 'S',
effect: '강화 수치에 따라 대추 젤리 500~1000점 추가\n강화 수치에 따라 체력 50~80으로 부활',
method: '달콤한 대추꽃 송편 진화하여 획득',
description: '꿀이 발라져 있어서, 행복 가득한 연휴를 보낼 수\n있을 것 같다. 사랑하는 쿠키들과 함께라면 더욱\n꿀같겠지.',
baseId: 'tr_ga150_m'
},
{
id: 'tr_ga151_m_blessed',
name: '축복받은 대나무향 솔솔 오곡 죽통밥',
rarity: 'S',
effect: '강화 수치에 따라 대나무잎 젤리 500~1000점 추가\n강화 수치에 따라 체력 50~80으로 부활',
method: '대나무향 물씬 죽통밥 진화하여 획득',
description: '쿠키의 건강에 좋은 각종 재료들을 넣어 죽통 안에서 밥과 함께 쪘다. 이보다 완벽한 밥이 있을까?',
baseId: 'tr_ga151_m'
},
{
id: 'tr_ga152_m_blessed',
name: '축복받은 완벽 방수 얼음부츠',
rarity: 'S',
effect: '강화 수치에 따라 20~30% 확률로 얼음다리 생성\n강화 수치에 따라 체력 감소 4~7% 느림',
method: '기능성 얼음구두 진화하여 획득',
description: '방수까지 완벽하게 되어 어떤 냉기와 눈보라에도 견딜 수 있다. 종아리 사이즈 제한 있음.',
baseId: 'tr_ga152_m'
},
{
id: 'tr_ga153_m_blessed',
name: '축복받은 으리번쩍 황금 철퇴',
rarity: 'S',
effect: '강화 수치에 따라 장애물 파괴시 30~80% 확률로 날개 달린 코인 생성\n강화 수치에 따라 코인 6~7% 보너스',
method: '번쩍번쩍 황금 쌍절곤 진화하여 획득',
description: '눈앞의 장애물을 모조리 없앨 수 있을 것만 같다! 실수로 자신이 맞는 일이 없도록 하자.',
baseId: 'tr_ga153_m'
},
{
id: 'tr_ga162_m_blessed',
name: '축복받은 과육듬뿍 오렌지라임 톡톡 스무디',
rarity: 'S',
effect: '강화 수치에 따라 체력 감소 4~5% 느림\n강화 수치에 따라 모든 과즙젤리 300~500점 추가',
method: '아이스 오렌지라임 스무디 진화하여 획득',
description: '입안에 톡 씹히는 알갱이가 이 더위를 한 방에 터뜨려버린다고?! 톡! 토독~!',
baseId: 'tr_ga162_m'
},
{
id: 'tr_ga160_m_blessed',
name: '축복받은 생크림 듬뿍 딸기 에클레어 바톤',
rarity: 'S',
effect: '강화 수치에 따라 체력 감소 4.5~5.5% 느림\n강화 수치에 따라 이어달리기 쿠키가 체력 70~88으로 부활',
method: '달콤한 초콜릿 에클레어 바톤 진화하여 획득',
description: '한껏 입을 크게 벌려야 베어먹을 수 있는 풍성한 한 입! 으음~',
baseId: 'tr_ga160_m'
},
{
id: 'tr_ga161_m_blessed',
name: '축복받은 더블 스프링 젤리슈즈 더 샤이니',
rarity: 'S',
effect: '강화 수치에 따라 구출/부활(체력 27) 총 2~4회\n점프 2회 추가',
method: '스프링 팡팡 핑크 젤리슈즈 진화하여 획득',
description: '더 반짝이는 더블 스프링을 달고 돌아왔다! 언제 어디서나 이쁘고 강력하게 솟아오를 수 있다!',
baseId: 'tr_ga161_m'
},
{
id: 'tr_ga174_m_blessed',
name: '축복받은 쫄깃바삭 갓 구운 난 세트',
rarity: 'S',
effect: '강화 수치에 따라 기본속도 7~12% 증가\n강화 수치에 따라 꿀과자젤리 2900~3800점 추가',
method: '쫄깃바삭 갓 구운 난 진화하여 획득',
description: '한 입만 베어물어도 식감과 풍미에 감동! 곁들인 꿀을 찍어먹으면 정말 눈물나게 맛있다.',
baseId: 'tr_ga174_m'
},
{
id: 'tr_ga175_m_blessed',
name: '축복받은 시원달콤 더블 망고 라씨',
rarity: 'S',
effect: '강화 수치에 따라 체력 감소 7~10% 느림\n강화 수치에 따라 카푸카푸젤리 3600~4500점 추가',
method: '시원달콤 망고 라씨 진화하여 획득',
description: '입맛도 건강도 한 번에 사로잡는 바로 그 맛!\n상큼한 요거트와 달콤한 과일이 서늘하게 땀을 식혀주는 과일 라씨. 망고를 두 배로 썰어 넣어 달콤함도 두 배가 되었다!',
baseId: 'tr_ga175_m'
},
{
id: 'tr_ga176_m_blessed',
name: '축복받은 달콤상큼짜릿 초탄산 드링크',
rarity: 'S',
effect: '초미니자력\n강화 수치에 따라 코인 8~15% 보너스',
method: '달콤상큼 탄산 드링크 진화하여 획득',
description: '텁텁한 입맛도 달콤하게, 퍽퍽한 마음도 상큼하게, 몽롱한 머리는 짜릿하게 터뜨려주는 바로 그 맛!\n마시고 나면 온 몸이 짜릿하게 깨어난다!',
baseId: 'tr_ga176_m'
},
{
id: 'tr_ga184_m_blessed',
name: '축복받은 소환수를 위한 특제 사료',
rarity: 'S',
effect: '강화 수치에 따라 소환수 탑승시 21~30% 체력감소 느림\n강화 수치에 따라 소환수에 탑승시 모든 젤리 400~1300점 추가',
method: '소환수를 위한 사료 진화하여 획득',
description: '소환수들의 까다로운 입맛마저 만족시키는 최고의 사료. 쿠키들의 동반자, 소환수들에게 특별한 한끼를 선사해보세요! (주의, 과다 섭취시 소환수가 통통해질 수 있습니다)',
baseId: 'tr_ga184_m'
},
{
id: 'tr_ga185_m_blessed',
name: '축복받은 챔피언을 위한 빛나는 크라운',
rarity: 'S',
effect: '강화 수치에 따라 자력세기 증가\n강화 수치에 따라 체력 50~60로 2회 부활',
method: '승자를 위한 깃털 월계관 진화하여 획득',
description: '챔피언을 위해 만들어진 오색빛깔 크라운. 쓰는 순간, 모든 쿠키가 당신을 향해 고개를 숙인다. 경배하라!',
baseId: 'tr_ga185_m'
},
{
id: 'tr_ga186_m_blessed',
name: '축복받은 리치리치 코인 지갑',
rarity: 'S',
effect: '강화 수치에 따라 거대화시 기본속도 10~15% 증가\n강화 수치에 따라 거대화시 50~100% 확률로 은화를 금화로 변경 (변경 최대 개수 제한 있음)',
method: '짤랑짤랑 코인 지갑 진화하여 획득',
description: '코인을 담아두기만 했는데, 뭔가 불어나는 기분이 드는 리치리치 동전지갑. 두툼한 지갑을 바라보기만 해도 마음이 배부르다.',
baseId: 'tr_ga186_m'
},
{
id: 'tr_ga190_m_blessed',
name: '축복받은 가을밤 캠핑꼬치 세트',
rarity: 'S',
effect: '강화 수치에 따라 모든 젤리 270~450점 추가\n강화 수치에 따라 체력감소 5~8% 느림',
method: '갓 구운 은행 꼬치 진화하여 획득',
description: '시원한 밤하늘 아래, 뜨거운 화로 위에 올려 지글지글 구워먹는 맛이 캠핑의 별미!',
baseId: 'tr_ga190_m'
},
{
id: 'tr_ga191_m_blessed',
name: '축복받은 슈퍼 머쉬룸 드링크',
rarity: 'S',
effect: '초미니자력\n강화 수치에 따라 생명물약 획득시 광속질주 0.5~1초',
method: '머쉬룸 드링크 진화하여 획득',
description: '험한 산을 뒤져봐도 찾기 힘들다는 희귀한 버섯으로 만들었다. 만들기 힘든 만큼 마시기만 하면 엄청난 효과가 있다고...',
baseId: 'tr_ga191_m'
},
{
id: 'tr_ga192_m_blessed',
name: '축복받은 숲속의 버섯램프',
rarity: 'S',
effect: '강화 수치에 따라 부활시 2~3초 동안 거대화 (중첩적용X)\n강화 수치에 따라 부활시 2~3초 동안 광속질주 (중첩적용X)',
method: '오래가는 버섯 손전등 진화하여 획득',
description: '어두운 밤 숲 속을 따뜻하게 밝혀주는 버섯 램프가 있다면 나무들도 외롭지 않다.',
baseId: 'tr_ga192_m'
},
]
};