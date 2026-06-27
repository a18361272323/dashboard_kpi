// Low-code API SDK — per skill vue-iframe-lowcode-backend.md
// Model: MOUJn1fQ9M (dashboard_prod / 大屏数据)

const BASE = 'https://xft-demo.cmburl.cn/xcodegw';
const APP_KEY = 'eee42da8-4947-457b-a49d-04291079cfea';
const APP_TAG = 'dev';
const MODEL_KEY = 'MOUJn1fQ9M';

// Method keys from model readback 2026-06-27
const M = {
  list:    'FUF08ktjo2', // 列表查询 BATCH_FIND
  create:  'FULytBVVOo', // 新增 ADD
  update:  'FUyV59iHd2', // 编辑 UPDATE
  detail:  'FU019yKTqL', // 查看详情 FIND
  remove:  'FUh2cNNnKB', // 删除 REMOVE
  batchRm: 'FUxPRdov7A', // 批量删除 BATCH_REMOVE
  export_: 'FUrb1sq5OK', // 批量导出 EXPORT
  import_: 'FUsmqDXjlC', // 批量导入 IMPORT
};

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

export interface DashboardRecord {
  chart_id: string; item_name: string; item_value: number; item_json: any; id?: number;
}

export async function fetchChartData(chartId: string): Promise<DashboardRecord[]> {
  const result = await runModelMethod(M.list, { chart_id: chartId, current: 1, pageSize: 500 }) as { list?: DashboardRecord[]; total?: number };
  return result?.list || [];
}

export async function createRecord(record: DashboardRecord) {
  return runModelMethod(M.create, record);
}

export { runModelMethod, M, BASE, APP_KEY, APP_TAG, MODEL_KEY, isSuccess, getBody };
