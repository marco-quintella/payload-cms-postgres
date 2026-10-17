import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

// Railway healthcheck. Returns 200 when the app is up.
export function GET() {
  return NextResponse.json({ status: 'ok' })
}
