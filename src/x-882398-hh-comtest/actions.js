import {actionTypes} from '@servicenow/ui-core';
import {GridView, LocalDataProvider} from 'realgrid'
import {createHttpEffect} from '@servicenow/ui-effect-http';
import '@servicenow/now-button';
import { useEffect, useState, useRef } from 'react'

const FETCH_ITEM_SUCCEEDED = 'FETCH_ITEM_SUCCEEDED';
const CHECKLIST_LOAD_REQUESTED = 'CHECKLIST_LOAD_REQUESTED';
const REAL_LOAD_REQUESTED = 'REAL_LOAD_REQUESTED';
const FETCH_ITEM_FAILED = 'FETCH_ITEM_FAILED';
const BUTTON_FIRED = 'BUTTON_FIRED';
const REAL_LOAD_DP = 'REAL_LOAD_DP';
const REAL_LOAD_EVENT = 'REAL_LOAD_EVENT';
const FETCH_ITEM_REQUESTED = 'FETCH_ITEM_REQUESTED';
const FETCH_ITEM_SEARCHED = 'FETCH_ITEM_SEARCHED';
const REAL_LOAD_S = 'REAL_LOAD_S';
const REAL_LOAD_PR = 'REAL_LOAD_PR';
const CHECKLIST_ITEM_ADD = 'CHECKLIST_ITEM_ADD';

window.firstBtnClicked = (itemIndex) => {
	console.log(itemIndex)
}

export default {
	actionHandlers: {
		[actionTypes.COMPONENT_BOOTSTRAPPED]: ({dispatch}) => {
			dispatch(CHECKLIST_LOAD_REQUESTED);
		},
		[CHECKLIST_LOAD_REQUESTED]: createHttpEffect('/api/now/table/incident', {
			successActionType: FETCH_ITEM_SUCCEEDED,
			errorActionType: FETCH_ITEM_FAILED
		}),
		[FETCH_ITEM_FAILED]: () => {
			debugger
		},
		[FETCH_ITEM_SUCCEEDED]: ({action, updateState, dispatch}) => {
			const {
				payload: {result = []}
			} = action;
			console.log("Result:", result);
			updateState({
				path: 'rows',
				operation: 'set',
				value: result.map(item => ({
					number: item.number,
					sys_id: item.sys_id,
					opened: item.opened_at,
					short_description: item.short_description,
					caller_name: item.caller_id.link,
					caller_sys_id: item.caller_id.value,
					priority: item.priority,
					state: item.state,
					category: item.category,
					channel: item.contact_type,
					assignment_group_sys_id: item.assignment_group.value,
					assignment_group_name: item.assignment_group.link,
					assigned_to_name: item.assigned_to.link,
					assigned_to_sys_id: item.assigned_to.value
				}))
			});
			dispatch(REAL_LOAD_DP);
		},
		[REAL_LOAD_DP]: ({action, updateState, dispatch, host}) => {
			const container = host.shadowRoot.querySelector("#realgrid");
			//const provider = new LocalDataProvider(true);
			updateState({
				path: 'grid',
				operation: 'set',
				value: new GridView(container)
			});
			dispatch(REAL_LOAD_PR);
		},
		[REAL_LOAD_PR]: ({action, updateState, dispatch, host}) => {
			//const container = host.shadowRoot.querySelector("#realgrid");
			//const provider = new LocalDataProvider(true); 
			updateState({
				path: 'provider',
				operation: 'set',
				value: new LocalDataProvider(true)
			});
			dispatch(REAL_LOAD_REQUESTED);
		},
		[REAL_LOAD_REQUESTED]:{
			effect({state, host}){
				const grid = state.grid;
				const provider = state.provider;
				const fields = state.fields;
				const columns = state.columns;
				const layouts = state.layouts;
				const rows = state.rows;

				grid.setDataSource(provider);
				provider.setFields(fields);
				grid.setColumns(columns);
				grid.setColumnLayout(layouts);

				var menu = [{label: "1 - Critical", tag: 1},{label: "2 - High", tag: 2},{label: "3 - Moderate", tag: 3},{label: "4 - Low", tag: 4},
				{label: "5 - Planning", tag: 5}];
				grid.addPopupMenu("menu1", menu);
				provider.setRows(rows);
			}
		},
		// [BUTTON_FIRED] : (coeffects) => {
		// 	console.log('clicked');
		// 	dispatch(FETCH_ITEM_REQUESTED, {
		// 		sysparm_fields: 'sys_id,short_description,active,assigned_to',
		// 		sysparm_query: `assigned_to=${userSysId}^ORDERBYDESCsys_created_on`
		// 		//sysparm_query: `ORDERBYDESCsys_created_on`
		// 	});

		[CHECKLIST_ITEM_ADD]: ({action, updateState, dispatch, state}) => {
			const {
				payload: {inputValue}
			} = action;
			updateState({inputValue: ''});
			dispatch(FETCH_ITEM_REQUESTED, {
				sysparm_fields: 'sys_id,opened_at,short_description,caller_id,priority,state,category,contact_type,assignment_group,active,assigned_to,number',
				sysparm_query: `sys_id=1c741bd70b2322007518478d83673af3`
			});
		},
		[FETCH_ITEM_REQUESTED]: createHttpEffect('/api/now/table/incident', {
			queryParams: ['sysparm_fields', 'sysparm_query'],
			errorActionType: FETCH_ITEM_FAILED,
			successActionType: FETCH_ITEM_SEARCHED
		}),
		[FETCH_ITEM_SEARCHED]: ({action, updateState, dispatch}) => {
			const {
				payload: {result = []}
			} = action;
			console.log("Result:", result);
			updateState({
				path: 'rows',
				operation: 'set',				
				value: result.map(item => ({
					number: item.number,
					sys_id: item.sys_id,
					opened: item.opened_at,
					short_description: item.short_description,
					caller_name: item.caller_id.link,
					caller_sys_id: item.caller_id.value,
					priority: item.priority,
					state: item.state,
					category: item.category,
					channel: item.contact_type,
					assignment_group_sys_id: item.assignment_group.value,
					assignment_group_name: item.assignment_group.link,
					assigned_to_name: item.assigned_to.link,
					assigned_to_sys_id: item.assigned_to.value
				}))
			});
			dispatch(REAL_LOAD_S);
		},
		[REAL_LOAD_S]:{
			effect({state, host}){
				// const grid = state.grid;
				debugger
				const provider = state.provider;
				// const fields = state.fields;
				// const columns = state.columns;
				// const layouts = state.layouts;
				const rows = state.rows;

				// grid.setDataSource(provider);
				// provider.setFields(fields);
				// grid.setColumns(columns);
				// grid.setColumnLayout(layouts);

				// var menu = [{label: "1 - Critical", tag: 1},{label: "2 - High", tag: 2},{label: "3 - Moderate", tag: 3},{label: "4 - Low", tag: 4},
				// {label: "5 - Planning", tag: 5}];
				// grid.addPopupMenu("menu1", menu);
				// provider.setRows(rows);
				provider.setRows(rows);
			}
		}

}
}