import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

// Healthcheck para o Railway — responde 200 quando o app está de pé.
export function GET() {
  return NextResponse.json({ status: 'ok' })
}
