import './QuestionAnswer.css';
import clsx from 'clsx';
import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';

export interface QuestionAnswerProps {
	question: string;
	last?: boolean;
}

export default function QuestionAnswer({
	question,
	children,
	last = false,
}: React.PropsWithChildren<QuestionAnswerProps>) {
	const [show, setShow] = useState(false);
	const ref: ElementRef<HTMLButtonElement> = useRef(null);
	const answerRef: ElementRef<HTMLDivElement> = useRef(null);

	useEffect(() => {
		if (answerRef.current && ref.current) {
			const collapsedHeight = ref.current.clientHeight;
			const expandedHeight = answerRef.current.clientHeight + collapsedHeight;

			// HACK: graaAAAAAAHHHHHHHHH
			// there might be a better way to adjust the heights
			// for padding instead of adding random constants?
			ref.current.style.setProperty(
				'--collapsed-height',
				`${collapsedHeight + 4}px`,
			);
			ref.current.style.setProperty(
				'--expanded-height',
				`${expandedHeight + 16}px`,
			);
		}
	}, []);

	const toggle = () => setShow(!show);

	return (
		<button
			className={clsx(
				'QuestionAnswer',
				show && 'is-expanded',
				last && 'QuestionAnswer--last',
			)}
			type='button'
			onClick={toggle}
			ref={ref}
		>
			<div className='QuestionAnswer-question'>
				{question}
				<Icon
					className={clsx('QuestionAnswer-icon', show && 'is-enabled')}
					icon='tabler:square-plus'
				/>
			</div>
			<div className='QuestionAnswer-answer' ref={answerRef}>
				{children}
			</div>
		</button>
	);
}

type ElementRef<T> = React.MutableRefObject<null | T>;
