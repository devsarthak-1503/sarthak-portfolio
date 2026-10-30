import { NextResponse } from "next/server";

// Unique persistent key for Sarthak's live portfolio
const COUNTER_KEY = "sarthak_gaikwad_portfolio_prod_views";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const shouldIncrement = searchParams.get("inc") === "1";

    const endpoint = shouldIncrement
      ? `https://countapi.mileshilliard.com/api/v1/hit/${COUNTER_KEY}`
      : `https://countapi.mileshilliard.com/api/v1/get/${COUNTER_KEY}`;

    const res = await fetch(endpoint, {
      cache: "no-store",
      headers: {
        "User-Agent": "SarthakPortfolioServer/1.0",
      },
    });

    if (!res.ok) {
      throw new Error(`Counter service returned status ${res.status}`);
    }

    const data = await res.json();
    const views = Number(data?.value) || 1;

    return NextResponse.json({
      success: true,
      views,
    });
  } catch (error) {
    console.error("Failed to fetch/increment visitor views:", error);
    // Graceful fallback so UI always displays cleanly
    return NextResponse.json(
      {
        success: false,
        views: null,
      },
      { status: 200 }
    );
  }
}
