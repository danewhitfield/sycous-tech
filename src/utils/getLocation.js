exports.getLocation = (data, consumerId) => {
  if (data) {
    const locations = data
      .map((consumer) => consumer)
      .map((consumer) => consumer.location);
    const locationCategories = locations.map(
      (location) => (location.locationId - 100) * 4
    );
    const locationFilter = locationCategories.find(
      (category) => consumerId <= category
    );
    const locationId = locationFilter / 4 + 100;
    return locations.filter((place) => place.locationId === locationId);
  }
};
