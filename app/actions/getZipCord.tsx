"use server"

export default async function getZipCords(postalCode: string) {

    // add postalCode limitations************!!!!!!!!!
    try {
        const response = await fetch(`${process.env.ZIPCODEBASE}${postalCode}&country=US`);

        // Check if the response is successful (status code 200)
        if (response.ok) {
            const data = await response.json();
            const city = data.results[postalCode][0].city
            const latitude = data.results[postalCode][0].latitude
            const longitude = data.results[postalCode][0].longitude
            const locationCords = [city,latitude,longitude]
            return locationCords;
        } else {
            // console.error('Error:', response.status, response.statusText);
            return null; // or handle the error as needed
        }
    } catch (error) {
        // console.error('Error:', error);
        return null; // or handle the error as needed
    }
}
