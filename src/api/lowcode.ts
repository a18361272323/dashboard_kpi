// Low-code Platform API SDK — per skill references/vue-iframe-lowcode-backend.md
// Endpoint: POST /api/run/odexftopenapiv2appmodelmethodrun?appTag=&modelKey=&methodKey=
// Headers: Content-Type + Accept + xcode-appsource:procode + credentials:include

const BASE = 'https://xft-demo.cmburl.cn/xcodegw';
const APP_KEY = 'eee42da8-4947-457b-a49d-04291079cfea';
const APP_TAG = 'dev';
const MODEL_KEY = 'MOIucc0YGX';

function isSuccess(res: any) {
  return !!res && (res.returnCode === 'SUC0000' || res.code === 'SUC0000' || res.code === 0 || res.code === 200);
}

function getBody(res: any) { return res && (res.body || res.data || res); }

async function runModelMethod(methodKey: string, body: Record<string, any> = {}) {
  const q = new URLSearchParams({ appTag: APP_TAG, modelKey: MODEL_KEY, methodKey });
  const resp = await fetch(`${BASE}/api/run/odexftopenapiv2appmodelmethodrun?${q}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json, text/plain, */*', 'xcode-appsource': 'procode' },
    credentials: 'include',
    body: JSON.stringify(body)
  });
  const json = await resp.json().catch(() => ({}));
  if (!resp.ok || !isSuccess(json)) throw new Error(json.errorMsg || json.message || `HTTP ${resp.status}`);
  return getBody(json);
}

// Convenience wrappers — method keys to be verified in low-code editor Model > Methods tab
export async function fetchList(params: Record<string, any> = {}) {
  return runModelMethod('list', { current: 1, pageSize: 500, ...params });
}

export async function fetchCreate(record: Record<string, any>) {
  return runModelMethod('create', record);
}

export async function fetchUpdate(record: Record<string, any>) {
  return runModelMethod('update', record);
}

export async function fetchDelete(id: string | number) {
  return runModelMethod('delete', { id });
}

export interface DashboardRecord { chart_id: string; item_name: string; item_value: number; item_json: any; chart_type?: string; sort_order?: number; data_date?: string; id?: number; }

export async function fetchChartData(chartId: string): Promise<DashboardRecord[]> {
  const result = await fetchList({ chart_id: chartId }) as { list?: DashboardRecord[]; total?: number };
  return result?.list || [];
}

export { runModelMethod, BASE, APP_KEY, APP_TAG, MODEL_KEY, isSuccess, getBody };
