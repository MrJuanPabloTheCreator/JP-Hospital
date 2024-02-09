import { NextRequest, NextResponse } from "next/server";
const db = require('../../db')

export async function GET(req: NextRequest) {
    const [records] = await db.query(`SELECT city_id, city_name, state, latitude, longitude FROM cities`)
    return new NextResponse(JSON.stringify(records));
}