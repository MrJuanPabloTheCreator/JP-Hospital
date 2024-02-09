import { NextRequest, NextResponse } from "next/server";
const db = require('../../db')

export async function POST(req: NextRequest){
    const {name, employee_code, salary} = await req.json()
    await db.query(`INSERT INTO employees (name, employee_code, salary)
    VALUES ('${name}', '${employee_code}', '${salary}')`);

    return new NextResponse(JSON.stringify({ hello: 'it worked' }))
}

export async function GET(req: NextRequest) {
    const [records] = await db.query("SELECT * FROM employees")

    return new NextResponse(JSON.stringify(records));
}

export async function DELETE(req: NextRequest) {
    const {id} = await req.json()
    const deletedEmp = await db.query(`DELETE FROM employees WHERE id = ${id}`)

    if(deletedEmp[0].affectedRows === 0){
        // console.log('No ID found')
        return new NextResponse(JSON.stringify('No ID found'));
    } else {
        // console.log('Delete succesful')
        return new NextResponse(JSON.stringify('Delete succesful'));
    }
}