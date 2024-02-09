import { NextRequest, NextResponse } from "next/server";
const db = require('../../db')

export async function GET(req: NextRequest) {
    const connection = await db.getConnection();
    const [records] = await connection.query("SELECT * FROM specialties")
    connection.release()

    return new NextResponse(JSON.stringify(records));
}
