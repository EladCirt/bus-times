const BASE_URL = 'http://localhost:8088/';
const stationUrl = BASE_URL + 'stations';
const allBusesUrl = BASE_URL + 'buses';
const busesUrl = stationUrl + '/';
const busesStationUrl = allBusesUrl + '/';
const busesTimePrefixUrl = stationUrl + '/';
const busesTimeSuffixUrl = '/bus/';
const busesCurTimeUrl = '/time';
let testIndex = 1;

function hash() {
    return testIndex++
}

function fetchFromServer(url) {
    return fetch(url).then(result => {
        if (result.ok) {
            return result;
        } else {
            throw new Error('Network response was not ok.');
        }
    });
}
function createLabelForBus(bus) {
    return bus.destination != null ? `${bus.number} ל${bus.destination}` : bus.number
}
function busesToValidJson(arr) {
    return arr.map(value => {
        return { id: value.id, value: value.id, number: value.number, label: createLabelForBus(value), destination: value.destination }
    });
}

function stationsToValidJson(json) {
    return json.map(value => {
        return { id: value.id, value: value.id, name: value.name, label: value.id + '(' + value.name + ')', lat: value.lat, lon: value.lon }
    });
}
export function stationBusesHash(stationId, busId) {
    return (stationId << 16) | busId;
}

class Buses {
    static getStations() {
        return fetchFromServer(stationUrl).then(result => result.json()).then(json => stationsToValidJson(json))
    }

    static getBuses() {
        return fetchFromServer(allBusesUrl).then(result => result.json()).then(json => busesToValidJson(json))
    }

    static getBusesStations(busesIds) {
        const fetchUrl = busesStationUrl + busesIds.join(",");
        return fetchFromServer(fetchUrl).then(result => result.json()).then(json => stationsToValidJson(json))
    }

    static getStationBuses(stationId) {
        const fetchUrl = busesUrl + stationId;
        return fetchFromServer(fetchUrl).then(result => result.json()).then(json => busesToValidJson(json));
    }


    static getBusesTimes(stationId, busId) {
        const fetchUrl = busesTimePrefixUrl + stationId + busesTimeSuffixUrl + busId;
        const busesTimeToValidJson = (json) => {
            return json.map(val => {
                return { id: hash(val.time, val.count), time: val.time, count: val.count }
            })
        };
        return fetchFromServer(fetchUrl).then(result => result.json()).then(json => busesTimeToValidJson(json));
    }

    static getBusesCurTimes(stationId, busId) {
        const fetchUrl = busesTimePrefixUrl + stationId + busesTimeSuffixUrl + busId + busesCurTimeUrl;
        return fetchFromServer(fetchUrl).then(result => result.text()).then(res => {
            if (res !== '') {
                res = parseInt(res, 10)
            }
            return res
        });
    }
}

export default Buses