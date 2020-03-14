import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import renderer from 'react-test-renderer';
import { useHistory } from 'react-router-dom'

import { Form } from './Form';
import InputComponent from '../../components/inputComponent'
jest.mock('react-router-dom', () => ({
	useHistory: () => ({
		push: jest.fn(),
	}),
}));

let props = {
	label: 'test',
	name: 'test',
	placeholder: 'test',
	type: 'text',
	inputValue: {
		isPassed: false,
		rules: [{
			id: 1,
			isPassed: true,
			value: ''
		}],
		rule: 'test'
	},
	setShowValidationError: (p => 'p'),
	handleValueChange: (p => 'p'),
	ValidationError: false,
	value: ''
}
const setup = () => {
	const utils = render(<InputComponent  {...props} />)
	const input = utils.getByLabelText('test')
	return {
		input,
		...utils,
	}
}


it('render correctly Form', () => {
	const history = useHistory()
	const tree = renderer.create(<Form />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('render correctly InputComponent', () => {
	const tree = renderer.create(<InputComponent {...props} />).toJSON();
	expect(tree).toMatchSnapshot();
});
