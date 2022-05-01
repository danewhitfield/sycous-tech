exports.searchNames = (data, nameVal) => {
	if (data) {
		const result = data.map((arr) => arr.consumers);
		const consumersList = result.map((consumer) => consumer);
		for (let consumers of consumersList) {
			for (let person of consumers) {
				if (person.name.toLowerCase().match(nameVal.toLowerCase())) {
					return person;
				}
			}
		}
	}
};
