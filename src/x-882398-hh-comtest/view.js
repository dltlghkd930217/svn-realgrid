import '@servicenow/now-heading';
import '@servicenow/now-button';
import '@servicenow/now-loader';
import '@servicenow/now-label-value';

export default (state, {dispatch, updateProperties}) => {
	const ENTER_KEY_CODE = 13;
	const inputValue = '';
	const CHECKLIST_ITEM_ADD = 'CHECKLIST_ITEM_ADD';

	
	return (
		<main className="now-checklist">
		<script>var realGrid2Lic = 'upVcPE+wPOmtLjqyBIh9RkM/nBOseBrflwxYpzGZyYm9cY8amGDkiHqyYT2U1Yh3Dufv8SUhNy4cHDDEc2etng=='</script>
			<div><input
				placeholder="What needs to be done?"
				autoFocus
				value={inputValue}
				on-keypress={({keyCode, target: {value}}) => {
					const inputValue = value.trim();
					if (keyCode === ENTER_KEY_CODE && inputValue) {
						dispatch(CHECKLIST_ITEM_ADD, {inputValue});
					}
				}}/></div>
			<div><button>click me</button></div>
			<div id='realgrid'></div>
		</main>
	);
};
//var realGrid2Lic = 'upVcPE+wPOmtLjqyBIh9RkM/nBOseBrflwxYpzGZyYm9cY8amGDkiHqyYT2U1Yh3Dufv8SUhNy4cHDDEc2etng==';ddd

//<script>var realGrid2Lic = 'upVcPE+wPOmtLjqyBIh9RkM/nBOseBrflwxYpzGZyYl7CwX6ItpP+1nkO6QZ3yCAJKTWpoOpNFnkmhX0fXje4w7n7/ElITcuG9J4R7ssMRE='</script>
//var realGrid2Lic = 'upVcPE+wPOmtLjqyBIh9RkM/nBOseBrflwxYpzGZyYl7CwX6ItpP++bUn16KUuDYPGjmXkNrgkO9y6iqz39NL2bv3IdPQpJ8UK2/tsl9QqU=';

// local 개발용 <script>var realGrid2Lic = 'upVcPE+wPOmtLjqyBIh9RkM/nBOseBrflwxYpzGZyYm9cY8amGDkiHqyYT2U1Yh3Dufv8SUhNy4cHDDEc2etng=='</script>

// 배포용 <script>var realGrid2Lic = 'upVcPE+wPOmtLjqyBIh9RkM/nBOseBrflwxYpzGZyYl7CwX6ItpP++bUn16KUuDYPGjmXkNrgkO9y6iqz39NL2bv3IdPQpJ8UK2/tsl9QqU='</script>
