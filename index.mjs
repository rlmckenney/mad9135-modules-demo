import { createQuestionPool } from './QuestionPool.mjs';
import Quiz from './Quiz.mjs';

async function main() {
  const pool = await createQuestionPool();
  const quiz = new Quiz('Example Quiz', pool, 3);

  quiz.student = '';

  console.log(quiz);

  const questions = quiz.getQuestions();

  if (typeof window !== 'undefined') {
    document.getElementById('root').innerHTML = `
    <pre>${JSON.stringify(questions, null, 2)}</pre>
    `;
    //https://www.youtube.com/watch?v=0k4NwimfszA - to learn about the extra params
  } else {
    console.log(questions);
  }
}

main();
