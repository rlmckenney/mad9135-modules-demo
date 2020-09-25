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
  {id: 1, prompt: '', answer: '', points: 1},
  {id: 2, prompt: '', answer: '', points: 1},
  {id: 3, prompt: '', answer: '', points: 1},
  {id: 4, prompt: '', answer: '', points: 1},
  {id: 5, prompt: '', answer: '', points: 1},
  {id: 6, prompt: '', answer: '', points: 1},
  {id: 7, prompt: '', answer: '', points: 1},
  {id: 8, prompt: '', answer: '', points: 1},
  {id: 9, prompt: '', answer: '', points: 1},
  {id: 10, prompt: '', answer: '', points: 1}
]

export async function getAllQuestions() {
  // Fake a delayed repsonse to an external API.
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(apiData), 500)
  })
}

export const BASE_URL = 'https://api.awesome.app'
