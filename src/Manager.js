import find from 'lodash/find';
import sortBy from 'lodash/sortBy';

export default class Manager {
	refs = {};
	add(collection, ref) {
		if (!this.refs[collection]) this.refs[collection] = [];

		this.refs[collection].push(ref)
	}
	getIndex(collection, ref) {
		return this.refs[collection].indexOf(ref);
	}
	getOrderedRefs(collection = this.active.collection) {
		return sortBy(this.refs[collection], 'index');
	}
	remove(collection, ref) {
		let index = this.getIndex(collection, ref);

		if (index !== -1) {
			this.refs[collection].splice(index, 1);
		}
	}
	getActive() {
		return find(this.refs[this.active.collection], (ref) => ref.index == this.active.index);
	}
}
