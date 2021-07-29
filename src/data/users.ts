export interface Iuser {
  id: number;
  name: string;
  picture: string;
}
export const users: Iuser[] = [
  {
    id: 0,
    name: '고민지',
    picture: 'users/profile_image_dummy.svg',
  },
  {
    id: 1,
    name: 'gigibean',
    picture: 'users/profile_image_dummy.svg',
  },
  {
    id: 2,
    name: '도레미',
    picture: 'users/profile_image_dummy.svg',
  },
];
