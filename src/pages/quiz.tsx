import { Box, Button, Typography } from '@material-ui/core'
import PageLayout from '../components/PageLayout'
import QuestionGroup from '../components/QuestionGroup'

const questions = [
  {
    id: '0',
    title: 'Question 1',
    answers: [
      { id: '0', text: 'Answer 1' },
      { id: '1', text: 'Answer 2' },
      { id: '2', text: 'Answer 3' },
      { id: '3', text: 'Answer 4' }
    ]
  },
  {
    id: '1',
    title: 'Question 2',
    answers: [
      { id: '4', text: 'Answer 1' },
      { id: '5', text: 'Answer 2' },
      { id: '6', text: 'Answer 3' },
      { id: '7', text: 'Answer 4' }
    ]
  },
  {
    id: '2',
    title:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa esse possimus voluptatibus id ratione, voluptatum, eius est et facere laborum accusantium earum quas vel sequi eum asperiores modi laboriosam architecto fuga. Debitis quod labore exercitationem odio architecto ratione quidem. Tenetur officia sed velit facere tempora dignissimos ratione necessitatibus eligendi quos aut, omnis, odit voluptatum similique autem consequatur explicabo iure, impedit iusto exercitationem. Maxime, laborum minus temporibus ratione impedit natus consequatur officia nisi libero repellendus unde. Dolorem eligendi nam laboriosam eos aliquid eaque. Eius ratione eaque dolorum nisi, quaerat unde dolorem reprehenderit repellendus soluta blanditiis architecto! Minima doloremque soluta, rerum corporis, natus laudantium eum velit, id reprehenderit quam qui! Veniam, ut placeat, in numquam voluptatem quia exercitationem adipisci ipsum labore fugit fugiat temporibus enim ea repellendus, non error possimus tempore! Debitis vel ex non natus asperiores eaque accusantium neque accusamus sequi harum minima quasi sit, libero autem magni delectus sint deserunt eum dolorum voluptatum earum laboriosam, eius labore dolore. Corrupti blanditiis tempora fugiat autem quod cumque quasi, explicabo incidunt est maxime aperiam quidem, quis non distinctio nobis sed accusamus eveniet? Iste qui numquam eum maiores fuga, corrupti aut voluptas debitis adipisci tempore delectus voluptates! Perspiciatis, accusantium? Natus sunt sit veritatis alias?',
    answers: [
      {
        id: '4',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, perspiciatis sed consectetur quibusdam placeat enim cumque facere alias quasi odit? Et nemo vel, labore quos explicabo adipisci voluptatum, incidunt omnis aliquid culpa iste est veritatis earum ut eius magnam laudantium! Doloremque, quibusdam nam id voluptas quasi necessitatibus, excepturi amet adipisci sequi quia perferendis, corrupti quam repellat voluptatibus sunt vero facere ad est sit. Hic harum sunt quaerat consectetur tempora veniam atque assumenda, omnis distinctio magnam dolore illo cupiditate nisi repudiandae illum quis laborum minima ex molestias blanditiis doloremque itaque doloribus. Reprehenderit, suscipit. Culpa aliquid quis veniam alias eum! Cumque, vero.'
      },
      { id: '5', text: 'Answer 2' },
      { id: '6', text: 'Answer 3' },
      { id: '7', text: 'Answer 4' }
    ]
  }
]

interface QuizProps {
  title: string
}

export default function Quiz({ title }: QuizProps) {
  return (
    <PageLayout>
      <Typography component="h1">
        <h1>{title || 'Quiz 1'}</h1>
      </Typography>

      <Box>
        {questions.map((question, index) => (
          <QuestionGroup key={question.id} index={index} question={question} />
        ))}
      </Box>

      <Button variant="contained" color="primary">
        Enviar
      </Button>
    </PageLayout>
  )
}
