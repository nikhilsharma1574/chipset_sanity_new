import { NextRequest, NextResponse } from 'next/server';

// Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxddU_vHPshJTklz1ufSbvgSQcpDw7gpJt3u50k0xQZKrStikwQdFYM5n84JJI6Yraq/exec';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Forward the request to Google Apps Script Web App
    const scriptResponse = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      redirect: 'follow',
    });

    const responseData = await scriptResponse.json();

    const status = !responseData.success && responseData.duplicate ? 409 : (scriptResponse.ok ? 200 : 500);

    return NextResponse.json(responseData, { status });

  } catch (error) {
    console.error('Recruitment API Error:', error);
    
    return NextResponse.json({
      success: false,
      error: 'Failed to process recruitment application',
      message: error instanceof Error ? error.message : 'Please try again later'
    }, { status: 500 });
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}