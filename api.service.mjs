/**
 * Quiz question object
 * @typedef {Object} Question
 * @property {number} id
 * @property {string} prompt
 * @property {string} answer
 * @property {number} points
 */

/** @type {Question[]} */
const apiData = [
  { id: 1, prompt: 'Are you alive?', answer: 'yes', points: 1 },
  { id: 2, prompt: 'Can you JavaScript?', answer: 'yes', points: 1 },
  {
    id: 3,
    prompt: 'Are a Set and an Array the same thing?',
    answer: 'no',
    points: 1,
  },
  {
    id: 4,
    prompt: 'Are Records being considered as a new primitive?',
    answer: 'yes',
    points: 1,
  },
  {
    id: 5,
    prompt: 'Is there a new Temporal type being developed for JS?',
    answer: 'yes',
    points: 1,
  },
  {
    id: 6,
    prompt: 'Are you going to pass this course?',
    answer: 'yes',
    points: 1,
  },
  {
    id: 7,
    prompt: 'Are you going to graduate this program?',
    answer: 'yes',
    points: 1,
  },
  { id: 8, prompt: 'Do you know your name?', answer: 'yes', points: 1 },
  {
    id: 9,
    prompt: 'Is the JSDocs syntax being used in this code?',
    answer: 'yes',
    points: 1,
  },
  {
    id: 10,
    prompt: 'What is the airspeed velocity of an unladen swallow?',
    answer: '...',
    points: 1,
  },
];

export async function getAllQuestions() {
  // Fake a delayed repsonse to an external API.
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(apiData), 500);
  });
}

export const BASE_URL = 'https://api.awesome.app';
