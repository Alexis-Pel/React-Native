import axios from 'axios';

// IGDB api services are called using POST method

export const getDataForDashboard = async () => {
  const res = await axios('https://api.igdb.com/v4/games', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Client-ID': '74bzvz25vgfsf8bgelf9t6tm53ca0w',
      Authorization: 'Bearer xkfzc7ravxrg5x6zd686x55i19u8yj',
    },
    data: 'fields cover,first_release_date,name; where screenshots != null & total_rating != null & cover != null & total_rating_count > 0;',
  });

  return res.data;
};

export const getDataForDetail = async game_id => {
  const res = await axios('https://api.igdb.com/v4/games', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Client-ID': '74bzvz25vgfsf8bgelf9t6tm53ca0w',
      Authorization: 'Bearer xkfzc7ravxrg5x6zd686x55i19u8yj',
    },
    data:
      'fields cover.image_id,total_rating_count,total_rating,name,screenshots.image_id,summary; where id=' +
      game_id +
      ';',
  });
  return res.data[0];
};

export const getSearchDataForDashboard = async search => {
  const res = await axios('https://api.igdb.com/v4/games', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Client-ID': '74bzvz25vgfsf8bgelf9t6tm53ca0w',
      Authorization: 'Bearer xkfzc7ravxrg5x6zd686x55i19u8yj',
    },
    data: `search "${search}"; limit 20; fields cover,first_release_date,name; where cover!=null;`,
  });

  return res.data;
};
