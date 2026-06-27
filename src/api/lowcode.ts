// Low-code Platform API SDK for Dashboard
// All URLs are absolute to work inside srcdoc iframes

const ORIGIN = 'https://xft-demo.cmburl.cn';
const APP_KEY = 'eee42da8-4947-457b-a49d-04291079cfea';
const MODEL_KEY = 'MOUJn1fQ9M';
const APP_TAG = 'dev';
const BASE = `${ORIGIN}/xcodegw/app/${APP_KEY}/tag/${APP_TAG}/model/${MODEL_KEY}/method`;

const METHODS = {
  list: 'FUF08ktjo2',    // 列表查询
  create: 'FULytBVVOo'   // 新增
};

interface LowcodeResponse<T = any> { returnCode: string; errorMsg?: string; body: T; }

async function lowcodePost<T = any>(path: string, body: Record<string, any> = {}): Promise<T> {
  const res = await fetch(path, {
    method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    credentials: 'include', body: JSON.stringify(body)
  });
  const json: LowcodeResponse<T> = await res.json().catch(() => ({} as any));
  if (json.returnCode && json.returnCode !== 'SUC0000') throw new Error(json.errorMsg || json.returnCode);
  return json.body;
}

export interface DashboardRecord {
  chart_id: string; item_name: string; item_value: number; item_json: any; id?: number;
}

export async function fetchChartData(chartId: string): Promise<DashboardRecord[]> {
  const result = await lowcodePost<{ list: DashboardRecord[]; total: number }>(`${BASE}/${METHODS.list}/run`, { chart_id: chartId, current: 1, pageSize: 500 });
  return result.list || [];
}

export { METHODS, BASE, ORIGIN, APP_KEY, APP_TAG, MODEL_KEY, lowcodePost };
