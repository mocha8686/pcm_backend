import type React from 'react';
import { createContext, useContext } from 'react';

export const QuestionAnswerContext = createContext<
	ContextQuestionAnswer[] | null
>(null);
export const QuestionAnswerDispatchContext =
	createContext<React.Dispatch<Action> | null>(null);

export function useQuestionAnswers() {
	return useContext(QuestionAnswerContext);
}

export function useQuestionAnswersDispatch() {
	return useContext(QuestionAnswerDispatchContext);
}

export interface QuestionAnswer {
	id: QuestionAnswerID;
	question: string;
	answer: string;
}

export interface QuestionAnswerProviderProps {
	questionAnswers: QuestionAnswer[];
}

export type QuestionAnswerID = number;

export interface ContextQuestionAnswer extends QuestionAnswer {
	id: QuestionAnswerID;
	open: boolean;
}

export interface ToggleAction {
	id: QuestionAnswerID;
	type: 'toggle';
}

export interface CollapseAllAction {
	type: 'collapseAll';
}

export type Action = ToggleAction | CollapseAllAction;

export function questionAnswerReducer(
	questionAnswers: ContextQuestionAnswer[],
	action: Action,
): ContextQuestionAnswer[] {
	switch (action.type) {
		case 'toggle':
			return questionAnswers.map(qa =>
				qa.id === action.id ? { ...qa, open: !qa.open } : qa,
			);
		case 'collapseAll':
			return questionAnswers.map(qa => ({ ...qa, open: false }));
	}
}
