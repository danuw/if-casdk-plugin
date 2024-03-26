import {getBestEmissionsDataForLocationsByTime} from '../src/lib/casdk/api';

const config = {
  regions: 'uksouth,eastus',
};

const input = {
  duration: 5, // in minutes
  timestamp: '2024-03-24T00:00:00Z',
};

const regions = config.regions;
const start = new Date(input.timestamp);
const end = new Date();
end.setSeconds(start.getSeconds() + input.duration);
const response = await getBestEmissionsDataForLocationsByTime({
  location: regions.split(','),
  start: start,
  end: end,
});

console.log(response);
