import { NextResponse } from "next/server";

//GET API for a specific ID

export async function GET (
    req: Request,
    {params}: {params: { testId: string}}
) {
    try {
        console.log(params.testId)

        return NextResponse.json(params.testId);

    } catch (error) {
        console.log('Not Working', error);
        return new NextResponse("Internal error", {status: 500});
    }
}

//GET API with url search params, and Store ID that includes multiple products

// export async function GET(
//     req: Request,
//     { params }: { params: { storeId: string} }
// ) {
//     try {
//         const { searchParams } = new URL(req.url);
//         const categoryId = searchParams.get("categoryId") || undefined;
//         const colorId = searchParams.get("colorId") || undefined;
//         const sizeId = searchParams.get("sizeId") || undefined;
//         const isFeatured = searchParams.get("isFeatured") || undefined;

//         if(!params.storeId){
//             return new NextResponse("Store ID is required", {status: 400});
//         }

//         const products = await prismadb.product.findMany({
//             where: {
//                 storeId: params.storeId,
//                 categoryId,
//                 colorId,
//                 sizeId,
//                 isFeatured: isFeatured ? true : undefined,
//                 isArchived: false,
//             },
//             include: {
//                 images: true,
//                 category: true,
//                 color: true,
//                 size: true
//             },
//             orderBy: {
//                 createdAt: 'desc'
//             }
//         });

//         return NextResponse.json(products);

//     } catch (error) {
//         console.log('[PRODUCTS_GET]', error);
//         return new NextResponse("Internal error", {status: 500});
//     }
// };