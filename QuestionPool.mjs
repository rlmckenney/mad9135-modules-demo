import { getAllQuestions } from './api.service.mjs';
// What about BASE_URL?
/**
 * Quiz question object
 * @typedef {Object} Question
 * @property {number} id
 * @property {string} prompt
 * @property {string} answer
 * @property {number} points
 */

class QuestionPool {
  constructor(questions) {
    this.pool = questions;
  }

  /**
   * Return the pool question with the given `id`
   * @param {number} id
   * @returns {Question}
   */
  getQuestion(id) {
    return this.pool.get(id);
  }

  /**
   * Return a unique set of randomly selected question IDs
   * @param {number} count Number of IDs to select
   * @returns {Set<number>}
   */
  selectRandomQuestions(count) {
    /** @type {Set<number>} */
    let questionIds = new Set();

    while (questionIds.size < count) {
      const id = Math.floor(Math.random() * this.pool.size) + 1;
      questionIds.add(id);
    }

    /* this does not work... because of possible conflicting ids */
    // for (let i = 0; i < count; i++) {
    //   const id = Math.floor(Math.random() * this.pool.size) + 1
    //   questionIds.add(id)
    // }

    return questionIds;
  }
}

// Factory pattern
export async function createQuestionPool() {
  /** @type {Set<Question>} */
  const questions = new Map();
  const apiData = await getAllQuestions();
  apiData.forEach((item) => questions.set(item.id, item));

  // getAllQuestions().then(apiData => {
  //   apiData.forEach(item => questions.set(item.id, item))
  //   return new QuestionPool(questions)
  // })

  return new QuestionPool(questions);
}

const pool = createQuestionPool();
console.log(pool);
