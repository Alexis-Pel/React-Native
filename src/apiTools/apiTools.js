import axios from 'axios';

export const getDataForDashboard = async () => {
  const res = await axios('https://api.igdb.com/v4/games', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Client-ID': '74bzvz25vgfsf8bgelf9t6tm53ca0w',
      Authorization: 'Bearer xkfzc7ravxrg5x6zd686x55i19u8yj',
    },
    data: 'fields cover,first_release_date,name;',
  });

  return res.data;
};

// Key word pool for api data fetch
/*
fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_localizations,game_modes,genres,hypes,involved_companies,keywords,language_supports,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites
*/
