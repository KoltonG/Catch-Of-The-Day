/**
 * Price formatter function that takes in cents and outputs USD currency
 * @param {number} cents Price in cents
 */
export function formatPrice(cents) {
  return (cents / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
}

/**
 * Random array item selection function
 * @param {Object[]} arr
 */
export function rando(arr) {
  return arr[Math.floor(Math.random * arr.length)];
}

/**
 * Turn text into a slug for safe URL's
 * @param {String} text
 */
export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

/**
 * Creates a fun name using random adjectives and nouns
 */
export function getFunName() {
  const adjectives = [
    'adorable',
    'beautiful',
    'clean',
    'drab',
    'elegant',
    'fancy',
    'glamorous',
    'handsome',
    'long',
    'magnificent',
    'old-fashioned',
    'plain',
    'quaint',
    'sparkling',
    'ugliest',
    'unsightly',
    'angry',
    'bewildered',
    'clumsy',
    'defeated',
    'embarrassed',
    'fierce',
    'grumpy',
    'helpless',
    'itchy',
    'jealous',
    'lazy',
    'mysterious',
    'nervous',
    'obnoxious',
    'panicky',
    'repulsive',
    'scary',
    'thoughtless',
    'uptight',
    'worried',
  ];

  const nouns = [
    'women',
    'men',
    'children',
    'teeth',
    'feet',
    'people',
    'leaves',
    'mice',
    'geese',
    'halves',
    'knives',
    'wives',
    'lives',
    'elves',
    'loaves',
    'potatoes',
    'tomatoes',
    'cacti',
    'foci',
    'fungi',
    'nuclei',
    'syllabuses',
    'analyses',
    'diagnoses',
    'oases',
    'theses',
    'crises',
    'phenomena',
    'criteria',
    'data',
  ];

  return `${rando(adjectives)} - ${rando(adjectives)} - ${rando(nouns)}`;
}
