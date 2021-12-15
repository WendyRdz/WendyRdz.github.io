/*
  The following is to demonstrate indeterminiate / mixed state for styled checkboxes.  There is no native HTML attribute for the indeterminiate/mixed state - so you must use the indeterminiate IDL attribute to set this state in HTML.  OR, you can use the aria-checked=mixed attribute.  Both of which require JavaScript.
*/

// add a button to allow the checkboxes to
// be reset for this demo w/out refresh
const btn = document.querySelector('button');
btn.addEventListener('click', function () {
	ic1.checked = false;
	ic1.indeterminate='true';
	
	ic2.checked = false;
	ic2.setAttribute('aria-checked', 'mixed');
	
	this.setAttribute('aria-disabled', 'true');
	this.tabIndex = -1;
});

const ic1 = document.getElementById('c3');
// make checkbox example 3 'mixed' using the indeterminate IDL attribute
ic1.indeterminate = true;
ic1.addEventListener('click', function () {
	if ( btn.disabled || btn.hasAttribute('aria-disabled')) {
		enable();
	}
});

const ic2 = document.getElementById('c4');
ic2.addEventListener('change', function () {
	if ( this.hasAttribute('aria-checked') ) {
		this.removeAttribute('aria-checked');
		enable();
	}
});

const enable = function () {
	btn.disabled = false;
	btn.removeAttribute('aria-disabled');
	btn.removeAttribute('tabindex');
}