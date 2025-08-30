const CUISINE_NAMES = [
  "Italian",
  "Chinese",
  "Indian",
  "Mexican",
  "Japanese",
  "Thai",
  "French",
  "Greek",
  "Spanish",
  "Korean",
  "Vietnamese",
  "Turkish",
  "Lebanese",
  "Ethiopian",
  "Moroccan",
  "American",
  "Brazilian",
  "Caribbean",
  "Persian",
  "Pakistani",
  "German",
  "Portuguese",
  "Filipino",
  "Malaysian",
];

export const CUISINES = CUISINE_NAMES.map((name, i) => ({
  id: i,
  name,
  selected: false,
}));

export const ACTIVE_COLOR = "#EF8E52";
export const INACTIVE_COLOR = "#B3B1B4";
