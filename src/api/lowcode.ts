// Low-code Platform API SDK for Dashboard
const APP_KEY = 'eee42da8-4947-457b-a49d-04291079cfea';
const MODEL_KEY = 'MOUJn1fQ9M';
const APP_TAG = 'dev';
const BASE = `/xcodegw/app/${APP_KEY}/tag/${APP_TAG}/model/${MODEL_KEY}/method`;

// Method keys for MOUJn1fQ9M
const METHODS = {
  list: 'FUF08ktjo2',    // 列表查询
  create: 'FULytBVVOo',   // 新增
  update: 'FUyV59iHd2',   // 编辑
  detail: 'FU019yKTqL',   // 查看详情
  delete: 'FUh2cNNnKB',   // 删除
  batchDelete: 'FUxPRdov7A', // 批量删除
  export: 'FUrb1sq5OK',    // 批量导出
  import: 'FUsmqDXjlC'     // 批量导入
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
  chart_id: string; item_name: string; item_value: number; item_json: string; id?: number;
}

interface ListResponse { list: DashboardRecord[]; total: number; current: number; pageSize: number; }

export async function fetchChartData(chartId: string): Promise<DashboardRecord[]> {
  const result = await lowcodePost<ListResponse>(`${BASE}/${METHODS.list}/run`, { chart_id: chartId, current: 1, pageSize: 500 });
  return result.list || [];
}

export async function addRecords(records: Omit<DashboardRecord, 'id'>[]) {
  const results = [];
  for (const r of records) results.push(await lowcodePost(`${BASE}/${METHODS.create}/run`, r));
  return results;
}

// Export method keys for direct access
export { METHODS, BASE, APP_KEY, APP_TAG, MODEL_KEY };
