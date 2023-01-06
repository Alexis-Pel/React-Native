import axios from 'axios';

export const getDataForDashboard = async () => {
  const res = await axios('https://api.igdb.com/v4/games', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Client-ID': '74bzvz25vgfsf8bgelf9t6tm53ca0w',
      Authorization: 'Bearer xkfzc7ravxrg5x6zd686x55i19u8yj',
    },
    data: 'limit 20; fields cover,first_release_date,name; where cover!=null;',
  });

  return res.data;
};

export const getSearchDataForDashboard = async search => {
  const res = await axios('https://api.igdb.com/v4/games', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Client-ID': '74bzvz25vgfsf8bgelf9t6tm53ca0w',
      Authorization: 'Bearer xkfzc7ravxrg5x6zd686x55i19u8yj',
    },
    data: `search "${search}"; limit 5; fields cover,first_release_date,name; where cover!=null;`,
  });

  return res.data;
};
