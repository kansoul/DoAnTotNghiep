import * as yup from "yup";

export const diaryValidate = yup.object().shape({
  sport: yup.string().optional(),
  movies: yup.string().optional(),
  writer: yup.string().optional(),
  musics: yup.string().optional(),
  tvShow: yup.string().optional(),
  games: yup.string().optional(),
  books: yup.string().optional(),
  other: yup.string().optional(),
});
