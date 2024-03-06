import { createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import view from './view';
import styles from './checklist.scss';
import checklistActions from './actions';
import rtlBehavior from '@servicenow/behavior-rtl';
import {columns, fields, layouts} from './realgrid-data';
import {GridView, LocalDataProvider} from 'realgrid'


// const container = document.querySelector("#realgrid");
// debugger
// const provider = new LocalDataProvider(true);
// const grid = new GridView(container);

createCustomElement('x-882398-hh-comtest', {
    renderer: { type: snabbdom },
    view,
    initialState: {
        provider : {},
        grid : {},
		columns, 
		fields,
        layouts,
		rows : [],
        inputValue : ''
	},
    ...checklistActions,
    styles,
    behaviors: [rtlBehavior]
});
