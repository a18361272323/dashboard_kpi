// 大屏数据 API 服务
// 通过低代码模型方法或 API 编排获取数据
const API_BASE = window.location.origin;
const APP_KEY = 'eee42da8-4947-457b-a49d-04291079cfea';
const APP_TAG = 'dev';
const MODEL_KEY = 'MO5PltEtHl';

export interface KpiItem {
  name: string
  value: number
  unit: string
  icon: string
  trend: 'up' | 'down' | 'stable'
  changePercent: number
  color: string
}

export interface ChartItem {
  chartKey: string
  category: string
  series: string
  chartValue: number
  chartDate: string
  color: string
}

export interface MapItem {
  region: string
  value: number
}

export interface EventItem {
  type: string
  title: string
  content: string
  level: string
  logTime: string
  status: string
}

// 模拟种子数据
export function getMockKpiData(): KpiItem[] {
  return [
    { name: '总销售额', value: 1284567, unit: '元', icon: '💰', trend: 'up', changePercent: 12.5, color: '#00d4ff' },
    { name: '订单数量', value: 8965, unit: '单', icon: '📦', trend: 'up', changePercent: 8.3, color: '#00ff88' },
    { name: '活跃用户', value: 45231, unit: '人', icon: '👤', trend: 'down', changePercent: -3.2, color: '#ff6600' },
    { name: '转化率', value: 68.5, unit: '%', icon: '📊', trend: 'up', changePercent: 5.7, color: '#ff3366' },
  ]
}

export function getMockChartData(): ChartItem[] {
  const charts: ChartItem[] = []
  // Line chart data - 月度趋势
  const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
  months.forEach((m, i) => {
    charts.push({ chartKey: 'line_trend', category: m, series: '销售额', chartValue: 80000 + Math.random() * 40000, chartDate: `2025-${String(i+1).padStart(2,'0')}`, color: '#00d4ff' })
    charts.push({ chartKey: 'line_trend', category: m, series: '利润', chartValue: 30000 + Math.random() * 20000, chartDate: `2025-${String(i+1).padStart(2,'0')}`, color: '#00ff88' })
  })
  // Bar chart data
  ;['电子产品', '服装', '食品', '家居', '图书'].forEach((cat, i) => {
    charts.push({ chartKey: 'bar_category', category: cat, series: '销售额', chartValue: 50000 + Math.random() * 80000, chartDate: '2025', color: ['#00d4ff','#0099ff','#0066cc','#00ff88','#ff6600'][i] })
  })
  // Pie chart data
  ;['直接访问', '搜索引擎', '社交媒体', '邮件营销', '联盟推广'].forEach((cat, i) => {
    charts.push({ chartKey: 'pie_source', category: cat, series: '占比', chartValue: [40, 25, 18, 10, 7][i], chartDate: '2025', color: ['#00d4ff','#0099ff','#0066cc','#00ff88','#ff6600'][i] })
  })
  return charts
}

export function getMockMapData(): MapItem[] {
  return [
    { region: '北京', value: 8900 }, { region: '上海', value: 9500 },
    { region: '广州', value: 7800 }, { region: '深圳', value: 8200 },
    { region: '杭州', value: 6500 }, { region: '成都', value: 5800 },
    { region: '武汉', value: 4500 }, { region: '南京', value: 4900 },
    { region: '重庆', value: 4200 }, { region: '西安', value: 3800 },
    { region: '长沙', value: 3200 }, { region: '郑州', value: 2800 },
    { region: '沈阳', value: 2500 }, { region: '青岛', value: 3000 },
    { region: '厦门', value: 2700 }, { region: '苏州', value: 5100 },
  ]
}

export function getMockEvents(): EventItem[] {
  const events = [
    { type: '系统', title: '服务器状态', content: '所有服务运行正常', level: 'info' },
    { type: '业务', title: '新订单', content: '收到 #20240627 号订单', level: 'info' },
    { type: '告警', title: 'CPU 使用率', content: '峰值达到 85%', level: 'warning' },
    { type: '错误', title: '数据库连接', content: '连接池短暂耗尽后恢复', level: 'error' as const },
    { type: '业务', title: '用户注册', content: '今日新增 1,245 名用户', level: 'info' as const },
    { type: '系统', title: '备份完成', content: '每日数据备份已成功完成', level: 'info' as const },
    { type: '告警', title: '内存使用', content: '内存使用率 78%，在正常范围', level: 'warning' as const },
    { type: '业务', title: '退款申请', content: '收到 23 笔退款申请', level: 'info' as const },
  ]
  return events.map((e, i) => ({
    ...e,
    logTime: new Date(Date.now() - i * 60000).toLocaleTimeString(),
    status: ['进行中', '已完成', '待处理'][i % 3],
  }))
}

// 从低代码模型获取数据
export async function runModelMethod(methodKey: string, body: any = {}) {
  try {
    const res = await fetch(`${API_BASE}/xcodegw/app/${APP_KEY}/tag/${APP_TAG}/model/${MODEL_KEY}/method/${methodKey}/run`, {
      method: 'POST', credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    const json = await res.json()
    if (json.returnCode === 'SUC0000') return json.body
    throw new Error(json.errorMsg || json.returnCode)
  } catch (e) {
    console.warn('Model method call failed, using mock data:', e)
    return null
  }
}
