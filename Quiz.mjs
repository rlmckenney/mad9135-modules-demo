export default class Quiz {
  #student = 'Test Student'
  score = 0

  /**
   * @param {string} title
   * @param {QuestionPool} pool
   * @param {number} questionCount
   */
  constructor(title, pool, questionCount = 5) {
    this.title = title
    this.pool = pool
    this.questionIds = pool.selectRandomQuestions(questionCount)
  }

  /**
   * @returns {Question[]}
   */
  getQuestions() {
    const questions = new Array()
    this.questionIds.forEach(id => questions.push(this.pool.getQuestion(id)))
    return questions
  }

  get student() {
    return this.#student
  }

  set student(value) {
    if (typeof value !== 'string' || value.length === 0) value = 'Mickey Mouse'
    this.#student = value
  }
}
