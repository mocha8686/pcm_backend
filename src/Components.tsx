import CallToAction from '$lib/components/CallToAction';
import { Link } from 'react-router';
import QuestionAnswer from './lib/components/QuestionAnswer';

export default function Components() {
	return (
		<>
			<CallToAction to='#' className='test' icon='tabler:mail-fast'>
				Contact Us
			</CallToAction>

			<Link to='/'>Go to home</Link>

			{/* TODO: may want to make a QuestionAnswerList component */}
			<QuestionAnswer question='What services does Players Club Management offer?'>
				We provide NIL deal negotiation, brand partnership facilitation,
				marketing strategy development, financial literacy education, and
				personal brand coaching for student-athletes.
			</QuestionAnswer>
			<QuestionAnswer question='Hello?'>Hi!</QuestionAnswer>
			<QuestionAnswer
				last
				question='What services does Players Club Management offer?'
			>
				We provide NIL deal negotiation, brand partnership facilitation,
				marketing strategy development, financial literacy education, and
				personal brand coaching for student-athletes.
			</QuestionAnswer>
		</>
	);
}
