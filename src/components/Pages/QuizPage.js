import Quiz from 'react-quiz-component';
import { Container } from '@mui/material';
import { quiz } from '../../quiz';


export const QuizPage = () => {
  return (
    <Container id="quiz">
      <Quiz quiz={quiz} showInstantFeedback={true} continueTillCorrect={true} />
    </Container>
  )
}