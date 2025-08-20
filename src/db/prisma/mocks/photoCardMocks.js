const imgBaseUrl = "https://favorite-photo-server.onrender.com";

// 주어진 범위 내에서 10단위의 무작위 가격을 반환하는 함수
function getRandomPrice(min, max) {
  const range = max - min;
  const randomValue = Math.floor(Math.random() * (range / 10 + 1));
  return min + randomValue * 10;
}

export const PhotoCardMocks = [
  {
    title: "여우",
    description:
      "신비로운 눈빛을 가진 여우의 순간을 포착한 감각적인 카드입니다. 숲의 아름다움을 느껴보세요.",
    rank: "RARE",
    genre: "ANIMAL",
    price: getRandomPrice(300, 500),
    imgUrl: `${imgBaseUrl}/uploads/여우.jpg`,
    creatorId: 4,
  },
  {
    title: "앵무새",
    description:
      "선명한 색채를 뽐내는 앵무새의 매혹적인 포토카드입니다. 생생한 컬러감을 즐겨보세요.",
    rank: "RARE",
    genre: "ANIMAL",
    price: getRandomPrice(300, 500),
    imgUrl: `${imgBaseUrl}/uploads/앵무새.jpg`,
    creatorId: 7,
  },
  {
    title: "백호",
    description:
      "신비롭고 위엄 있는 백호의 강렬한 눈빛을 담은 특별한 레전드 카드입니다. 희귀한 동물을 만나보세요.",
    rank: "LEGENDARY",
    genre: "ANIMAL",
    price: getRandomPrice(800, 950),
    imgUrl: `${imgBaseUrl}/uploads/백호.jpg`,
    creatorId: 1,
  },
  {
    title: "종달새",
    description:
      "베란다에 찾아온 작은 종달새의 평화로운 모습을 담은 카드입니다. 소소한 일상의 행복을 느껴보세요.",
    rank: "COMMON",
    genre: "ANIMAL",
    price: getRandomPrice(0, 300),
    imgUrl: `${imgBaseUrl}/uploads/종달새.jpg`,
    creatorId: 2,
  },
  {
    title: "사막",
    description:
      "자연이 빚어낸 거대한 사막의 곡선과 색감이 압도적인 포토카드입니다. 모험의 기분을 느껴보세요.",
    rank: "COMMON",
    genre: "LANDSCAPE",
    price: getRandomPrice(0, 300),
    imgUrl: `${imgBaseUrl}/uploads/사막.jpg`,
    creatorId: 5,
  },
  {
    title: "밤하늘의 별",
    description:
      "별이 쏟아지는 밤하늘과 고요한 물 위를 항해하는 배가 어우러진 몽환적인 포토카드입니다. 꿈같은 순간을 소유해 보세요.",
    rank: "SUPERRARE",
    genre: "LANDSCAPE",
    price: getRandomPrice(500, 790),
    imgUrl: `${imgBaseUrl}/uploads/밤하늘의 별.jpg`,
    creatorId: 3,
  },
  {
    title: "웃고있는 남자",
    description:
      "보는 사람도 미소 짓게 만드는, 따뜻하고 긍정적인 느낌의 포토카드입니다. 행복한 기운을 나눠보세요.",
    rank: "COMMON",
    genre: "PORTRAIT",
    price: getRandomPrice(0, 300),
    imgUrl: `${imgBaseUrl}/uploads/웃고있는 남자.jpg`,
    creatorId: 6,
  },
  {
    title: "아인슈타인",
    description:
      "위대한 과학자 아인슈타인의 유쾌하고 익살스러운 모습을 담은 포토카드입니다. 재미있는 소장 가치를 더합니다.",
    rank: "LEGENDARY",
    genre: "PORTRAIT",
    price: getRandomPrice(800, 950),
    imgUrl: `${imgBaseUrl}/uploads/아인슈타인.jpg`,
    creatorId: 1,
  },
  {
    title: "앉아있는 여자",
    description:
      "푸른 하늘 아래 절벽에 앉아 평화로운 풍경을 즐기는 인물을 담았습니다. 잔잔한 감성을 더해줍니다.",
    rank: "RARE",
    genre: "PORTRAIT",
    price: getRandomPrice(300, 500),
    imgUrl: `${imgBaseUrl}/uploads/앉아있는 여자.jpg`,
    creatorId: 5,
  },
  {
    title: "후지산",
    description:
      "일본의 상징, 후지산의 웅장한 모습을 담은 포토카드입니다. 여행의 감동을 그대로 담아보세요.",
    rank: "RARE",
    genre: "LANDSCAPE",
    price: getRandomPrice(300, 500),
    imgUrl: `${imgBaseUrl}/uploads/후지산.jpg`,
    creatorId: 3,
  },
  {
    title: "영국",
    description:
      "런던의 대표 랜드마크 빅밴입니다. 신비로운 분위기를 소유해 보세요.",
    rank: "COMMON",
    genre: "LANDSCAPE",
    price: getRandomPrice(0, 300),
    imgUrl: `${imgBaseUrl}/uploads/영국.jpg`,
    creatorId: 4,
  },
  {
    title: "네덜란드",
    description:
      "네덜란드의 풍경을 담은 카드입니다. 동화 같은 색감으로 눈을 즐겁게 해줍니다.",
    rank: "COMMON",
    genre: "LANDSCAPE",
    price: getRandomPrice(0, 300),
    imgUrl: `${imgBaseUrl}/uploads/네덜란드.jpg`,
    creatorId: 7,
  },
  {
    title: "휴양지",
    description:
      "고요한 바다와 파라솔이 어우러진 휴양지의 풍경입니다. 보는 것만으로도 편안함을 느낄 수 있습니다.",
    rank: "COMMON",
    genre: "LANDSCAPE",
    price: getRandomPrice(0, 300),
    imgUrl: `${imgBaseUrl}/uploads/휴양지.jpg`,
    creatorId: 2,
  },
  {
    title: "모래시계",
    description:
      "시간의 흐름을 상징하는 고풍스러운 모래시계입니다. 감성적인 인테리어 소품으로도 좋습니다.",
    rank: "RARE",
    genre: "OBJECT",
    price: getRandomPrice(300, 500),
    imgUrl: `${imgBaseUrl}/uploads/모래시계.jpg`,
    creatorId: 6,
  },
  {
    title: "핑크튜브",
    description:
      "화사한 핑크색이 돋보이는 튜브를 담은 카드입니다. 여름의 청량함과 즐거움을 담고 있습니다.",
    rank: "COMMON",
    genre: "OBJECT",
    price: getRandomPrice(0, 300),
    imgUrl: `${imgBaseUrl}/uploads/핑크튜브.jpg`,
    creatorId: 1,
  },
  {
    title: "호수",
    description:
      "산과 호수가 어우러진 웅장한 풍경을 담은 카드입니다. 자연의 위대함을 느껴보세요.",
    rank: "COMMON",
    genre: "LANDSCAPE",
    price: getRandomPrice(0, 300),
    imgUrl: `${imgBaseUrl}/uploads/호수.png`,
    creatorId: 5,
  },
  {
    title: "선인장",
    description:
      "독특한 형태의 선인장을 담은 감성 카드입니다. 미니멀한 분위기를 연출하기에 좋습니다.",
    rank: "COMMON",
    genre: "OBJECT",
    price: getRandomPrice(0, 300),
    imgUrl: `${imgBaseUrl}/uploads/선인장.jpg`,
    creatorId: 3,
  },
  {
    title: "지구본 모형",
    description:
      "신비로운 느낌의 지구본 모형을 담은 카드입니다. 탐험가 정신을 자극하는 소장 가치가 있습니다.",
    rank: "RARE",
    genre: "OBJECT",
    price: getRandomPrice(300, 500),
    imgUrl: `${imgBaseUrl}/uploads/지구본 모형.jpg`,
    creatorId: 4,
  },
  {
    title: "피자",
    description:
      "방금 오븐에서 나온 듯한 따뜻한 피자의 먹음직스러운 모습입니다. 보는 것만으로도 행복해지는 카드입니다.",
    rank: "COMMON",
    genre: "FOOD",
    price: getRandomPrice(0, 300),
    imgUrl: `${imgBaseUrl}/uploads/피자.jpg`,
    creatorId: 7,
  },
  {
    title: "샐러드",
    description:
      "보기만 해도 기분이 좋아지는, 신선하고 다채로운 색감의 샐러드입니다. 건강한 식탁의 순간을 담았습니다.",
    rank: "COMMON",
    genre: "LANDSCAPE",
    price: getRandomPrice(0, 300),
    imgUrl: `${imgBaseUrl}/uploads/샐러드.jpg`,
    creatorId: 6,
  },
  {
    title: "포케",
    description:
      "신선한 채소와 과일이 가득 담긴 건강한 포케 샐러드입니다. 다채로운 색감이 눈을 즐겁게 합니다.",
    rank: "COMMON",
    genre: "FOOD",
    price: getRandomPrice(0, 300),
    imgUrl: `${imgBaseUrl}/uploads/포케.jpg`,
    creatorId: 1,
  },
];
