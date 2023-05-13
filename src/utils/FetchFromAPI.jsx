import axios from 'axios'

const BASE_URL = 'https://youtube-v3-alternative.p.rapidapi.com'

const options = {
  params: {
    lang: 'en',
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com',
  },
}

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)
  return data
}
