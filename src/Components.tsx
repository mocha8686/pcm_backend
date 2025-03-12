import CallToAction from '$lib/components/CallToAction';
import { Link } from 'react-router';
import type { QuestionAnswer } from '$lib/QuestionAnswerContext';
import QuestionAnswerList from '$lib/components/QuestionAnswerList';

export default function Components() {
	// TODO: get these from django
	const questionAnswers: QuestionAnswer[] = [
		{ id: 0, question: 'What services does Players Club Management offer?', answer: 'We provide NIL deal negotiation, brand partnership facilitation, marketing strategy development, financial literacy education, and personal brand coaching for student-athletes.' },
		{ id: 1, question: 'Hello?', answer: 'Hi!' },
		{ id: 2, question: 'What services does Players Club Management offer?', answer: 'We provide NIL deal negotiation, brand partnership facilitation, marketing strategy development, financial literacy education, and personal brand coaching for student-athletes.' },
	];

	return (
		<>
			<CallToAction to='#' className='test' icon='tabler:mail-fast'>
				Contact Us
			</CallToAction>

			<Link to='/'>Go to home</Link>

			<QuestionAnswerList list={questionAnswers} />
		</>
	);
}
