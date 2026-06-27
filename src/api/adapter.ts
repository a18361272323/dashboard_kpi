// Shared data adapter: fetch from model, fallback to mock
const BASE = '/xcodegw/app/eee42da8-4947-457b-a49d-04291079cfea/tag/dev/model/MOUJn1fQ9M/method/FUF08ktjo2/run'

export interface DashboardRecord {
  chart_id: string; item_name: string; item_value: number; item_json: any; id?: number
}

export async function fetchChart(chartId: string): Promise<DashboardRecord[]> {
  try {
    const res = await fetch(BASE, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'include',
      body: JSON.stringify({ chart_id: chartId, current: 1, pageSize: 500 })
    })
    const j = await res.json()
    if (j.returnCode === 'SUC0000' && j.body?.list?.length) return j.body.list
  } catch {}
  return []
}
