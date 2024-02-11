import ClientForm from "./_components/clientForm";
import SummaryInfo from "./_components/summaryInfo";

const BookAppointment = () => {

    return (
        <div>
            <div className="mt-10 py-16 bg-blue-950 w-full">
                <h1 className="ml-24 text-6xl font-bold text-white">Schedule Appointment</h1>
            </div>
            <div className="flex w-full justify-center">
                <div className="bg-white flex mt-10 p-10 rounded-lg shadow-md">
                    <SummaryInfo/> 
                    <ClientForm/> 
                </div>
            </div>        
        </div>
    )
}

export default BookAppointment