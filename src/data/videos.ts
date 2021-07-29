export interface Ivideo {
  id: number;
  src: string;
  describe: string;
  hashtag: string;
  userId: number;
}
export const videos: Ivideo[] = [
  {
    id: 0,
    src: '/videos/sv1.mp4',
    describe: '귀여운 무무',
    hashtag: '#무무 #롤 #참깨',
    userId: 0,
  },
  {
    id: 1,
    src: '/videos/sv2.mp4',
    describe: '내 옵치 팟지',
    hashtag: '#5인궁 #개멋져',
    userId: 1,
  },
  {
    id: 2,
    src: '/videos/sv3.mp4',
    describe: '배그 머리 맛집',
    hashtag: '#헤드샷 #빵야',
    userId: 0,
  },
  {
    id: 4,
    src: '/videos/sv5.mp4',
    describe: '디바 팟지',
    hashtag: '#디바 #메카',
    userId: 2,
  },
  {
    id: 5,
    src: '/videos/sv6.mp4',
    describe: '롤 하이라이트',
    hashtag: '#페이크',
    userId: 1,
  },
  {
    id: 6,
    src: '/videos/sv7.mp4',
    describe: '라인 캐리',
    hashtag: '#탱차이',
    userId: 2,
  },
  {
    id: 7,
    src: '/videos/sv8.mp4',
    describe: '새로나온 스킨',
    hashtag: '#새스킨 #야스오',
    userId: 1,
  },
  {
    id: 8,
    src: '/videos/sv9.mp4',
    describe: '매드무비',
    hashtag: '#멋쟁이',
    userId: 2,
  },
  {
    id: 9,
    src: '/videos/sv10.mp4',
    describe: '더이상 쓸게없다',
    hashtag: '#해시태그 #쥐어짜기',
    userId: 1,
  },
  {
    id: 10,
    src: '/videos/sv11.mp4',
    describe: '뭘 더쓸까',
    hashtag: '#나도몰라',
    userId: 0,
  },
];
