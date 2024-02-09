import { NextRequest, NextResponse } from "next/server";
const db = require('../../db')

export async function GET(req: NextRequest) {
   
    const [records] = await db.query(`SELECT doctor_id, name, last_name FROM doctors`)
    return new NextResponse(JSON.stringify(records));
}
