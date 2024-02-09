import { calculateHaversineDistance } from "./calculateDistance";

interface DoctorData {
    city_name: string;
    city_id: number;
    latitude: string;
    longitude: string;
}

export default function getClosestDoctor(doctorsData: DoctorData[], userLatitude: string | null, userLongitude: string | null){
    let closestDistance = Infinity;

    var closestDoctor;

    for(let i = 0; i < doctorsData.length; i++){
        const docLocatioName = (doctorsData[i].city_name)
        const docLocationId = (doctorsData[i].city_id)
        const docloclat = (doctorsData[i].latitude)
        const docloclon = (doctorsData[i].longitude)

        const distance = calculateHaversineDistance(userLatitude, userLongitude, docloclat, docloclon);
        if (distance < closestDistance) {
            closestDoctor = docLocationId;
            closestDistance = distance;
        }
    }
    console.log('from getClosest:', closestDoctor)
    return closestDoctor
}