export const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BACKGROUND_LOGO =
  "https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d8a0fd20-b34b-405e-860f-53499c2517b7/US-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const USER_IMG =
  "https://occ-0-3996-33.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTvTV1d97HoOuutIG9GUEJgNIhg89JU3EQmtIikzdqolTLHSDqxwytfl61TC-HlrVt7QrzxdB5xR3nD2CPKNL9TF3qKTmcI.png?r=cad";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer" + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CD_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "telugu", name: "Telugu" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
//
