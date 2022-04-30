exports.getLocation = (data, consumerId) => {
  if (data) {
    const locations = data
      .map((consumer) => consumer)
      .map((consumer) => consumer.location);
    const locationCategories = locations.map(
      (location) => (location.locationId - 100) * 4
    );
    const locationFilter = locationCategories.find(
      (range) => consumerId <= range
    );
    const locationId = locationFilter / 4 + 100;
    return locations.filter((place) => place.locationId === locationId);
  }
};

// The above logic is very verbose but works like so:

// I had an array of consumer objects. 120 consumers: (consumerId: 1 - 120)
// I had an array of location objects. 30 locations: (locationId: 101 - 130)
// neither of the two were linked - making it difficult to find the corresponding consumer:location
// I needed to make each location into a range of 4, allowing us to slot 4 consumers into each location
// (to make this data easier to work with I minused 100 to make the locationId 1 - 30)
// I then multiplied this by 4 to create 30 ranges from 4 - 120
// from here I can simply check a consumerId against a range by checking if it is less than or equal to the range and then divide by 4 to get the updated locationId
// then added the original 100 back on to get the actual locationId
