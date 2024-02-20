import { NextResponse } from "next/server";
const db = require('@/app/db')

//GET API for a specific ID

export async function GET (
    req: Request,
    { params }: { params: {validateId: string}}
) {
    const doctor_id = params.validateId;

    const { searchParams } = new URL(req.url);
    const time = searchParams.get("time_slot") || undefined;
    const date = searchParams.get("date") || undefined;
    try {
        const connection = await db.getConnection();
        const [records] = await connection.query(`select * from doctor_schedule where doctor_id='${doctor_id}' AND date='${date}' AND time_slot_${time}='1';`)
        connection.release()
        if(records.length === 0){
            // console.log('No ecords Found:',records)
            return NextResponse.json('No Records Found');
        } else {
            // console.log('Records Found:',records)
            return NextResponse.json('Records Found');
        }

    } catch (error) {
        console.log('Not Working', error);
        return new NextResponse("Internal error", {status: 500});
    }
}