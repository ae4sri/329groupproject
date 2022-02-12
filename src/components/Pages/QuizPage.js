import Quiz from 'react-quiz-component';
import { Container } from 'react-bootstrap';
import { quiz } from '../../quiz';


export const QuizPage = () => {
  return (
      <Quiz quiz={quiz} showInstantFeedback={true} continueTillCorrect={true} />
  )
}