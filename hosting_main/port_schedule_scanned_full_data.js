// 港入港スケジュール（AI読取結果のモック）
// ここを「本物のOCR/API結果」に差し替えるだけで、後段ロジックを変えずに本番化できます。
// 参照: schedule_202601.txt の SCANNED_FULL_DATA
window.SCANNED_FULL_DATA = [
  // 2026-01-17
  { date: '2026-01-17', berthName: '1-3B', shipName: '第18住若丸', eta: '08:00', etd: '17:00', cargo: '未定', status: '完了', trucksPlanned: 0, trucksArrived: 0 },
  { date: '2026-01-17', berthName: '1-4', shipName: '未定', eta: '08:00', etd: '16:00', cargo: 'スラグ(日)', status: '完了', trucksPlanned: 10, trucksArrived: 10 },
  { date: '2026-01-17', berthName: '3-1(東)', shipName: '第12天洋丸', eta: '-', etd: '18:00', cargo: '購入土(大)', status: '完了', trucksPlanned: 20, trucksArrived: 20 },

  // 2026-01-18
  { date: '2026-01-18', berthName: '1-2', shipName: '富士丸', eta: '08:00', etd: '17:00', cargo: '不明', status: '完了', trucksPlanned: 5, trucksArrived: 5 },
  { date: '2026-01-18', berthName: '1-3A', shipName: '安積丸', eta: '09:00', etd: '16:00', cargo: '不明', status: '完了', trucksPlanned: 8, trucksArrived: 8 },
  { date: '2026-01-18', berthName: '1-8', shipName: '橙星', eta: '15:00', etd: '19:00', cargo: '購入土(大)', status: '完了', trucksPlanned: 12, trucksArrived: 12 },
  { date: '2026-01-18', berthName: '2-2', shipName: '未定', eta: '07:30', etd: '16:00', cargo: '(8)石膏', status: '完了', trucksPlanned: 0, trucksArrived: 0 },
  { date: '2026-01-18', berthName: '2-4(西)', shipName: 'CREST CRANE', eta: '08:00', etd: '17:00', cargo: '湿灰(相)', status: '完了', trucksPlanned: 0, trucksArrived: 0 },
  { date: '2026-01-18', berthName: '5-2', shipName: 'KIMIMACHI', eta: '08:00', etd: '18:00', cargo: '石炭(相)', status: '完了', trucksPlanned: 0, trucksArrived: 0 },

  // 2026-01-19
  { date: '2026-01-19', berthName: '1-3A', shipName: '陸丸', eta: '09:00', etd: '12:00', cargo: '(5)鋼材(相)', status: '作業中', trucksPlanned: 15, trucksArrived: 5 },
  { date: '2026-01-19', berthName: '1-4', shipName: '船舶給水(庄司)', eta: '10:00', etd: '11:00', cargo: '給水', status: '作業中', trucksPlanned: 1, trucksArrived: 0 },
  { date: '2026-01-19', berthName: '2-2', shipName: '扇忠丸', eta: '07:00', etd: '17:00', cargo: '(19)石膏(相)', status: '作業中', trucksPlanned: 20, trucksArrived: 12 },
  { date: '2026-01-19', berthName: '2-3', shipName: '有明丸', eta: '08:00', etd: '18:00', cargo: '(1)石炭(相)', status: '作業中', trucksPlanned: 0, trucksArrived: 0 },
  { date: '2026-01-19', berthName: '3-1(東)', shipName: '第12天洋丸', eta: '07:00', etd: '17:00', cargo: '購入土(大)', status: '作業中', trucksPlanned: 30, trucksArrived: 10 },

  // 2026-01-20
  { date: '2026-01-20', berthName: '1-2', shipName: '富士丸', eta: '08:00', etd: '17:00', cargo: '不明', status: '予定', trucksPlanned: 5, trucksArrived: 0 },
  { date: '2026-01-20', berthName: '1-3A', shipName: '朱正号', eta: '09:00', etd: '12:00', cargo: '木材チップ(日)', status: '予定', trucksPlanned: 10, trucksArrived: 0 },
  { date: '2026-01-20', berthName: '1-4', shipName: '未定', eta: '08:00', etd: '16:00', cargo: 'スラグ(日)', status: '予定', trucksPlanned: 0, trucksArrived: 0 },
  { date: '2026-01-20', berthName: '1-8', shipName: '橙星', eta: '11:00', etd: '12:00', cargo: '購入土(大)', status: '予定', trucksPlanned: 5, trucksArrived: 0 },
  { date: '2026-01-20', berthName: '2-2', shipName: '未定', eta: '17:00', etd: '23:59', cargo: '(1)湿灰(相)', status: '予定', trucksPlanned: 0, trucksArrived: 0 },
  { date: '2026-01-20', berthName: '2-4(西)', shipName: '未定', eta: '08:00', etd: '17:00', cargo: '(1)湿灰(相)', status: '予定', trucksPlanned: 0, trucksArrived: 0 },
  { date: '2026-01-20', berthName: '3-4', shipName: 'なつい', eta: '10:00', etd: '15:00', cargo: '不明', status: '予定', trucksPlanned: 0, trucksArrived: 0 },
  { date: '2026-01-20', berthName: '5-1', shipName: 'あけぼの丸', eta: '08:00', etd: '18:00', cargo: 'LNG(日)', status: '予定', trucksPlanned: 0, trucksArrived: 0 },
  { date: '2026-01-20', berthName: '5-2', shipName: 'SHONAI MARU', eta: '08:00', etd: '18:00', cargo: '石炭(相)', status: '予定', trucksPlanned: 0, trucksArrived: 0 },
  { date: '2026-01-20', berthName: '5-4', shipName: '第2藤進', eta: '08:00', etd: '11:30', cargo: '残土(相)', status: '予定', trucksPlanned: 8, trucksArrived: 0 },

  // 2026-01-21
  { date: '2026-01-21', berthName: '1-3A', shipName: '未定', eta: '08:00', etd: '17:00', cargo: '未定', status: '予定', trucksPlanned: 0, trucksArrived: 0 },
  { date: '2026-01-21', berthName: '1-4', shipName: '未定', eta: '08:00', etd: '16:00', cargo: 'セメント', status: '予定', trucksPlanned: 0, trucksArrived: 0 },
  { date: '2026-01-21', berthName: '1-8', shipName: '第12天洋丸', eta: '07:00', etd: '17:00', cargo: '購入土(大阪)', status: '予定', trucksPlanned: 20, trucksArrived: 0 },
  { date: '2026-01-21', berthName: '2-2', shipName: '未定', eta: '16:00', etd: '23:59', cargo: '(8)石膏(相)', status: '予定', trucksPlanned: 0, trucksArrived: 0 },
  { date: '2026-01-21', berthName: '2-3', shipName: '海宝丸', eta: '08:00', etd: '17:00', cargo: '線材(相)', status: '予定', trucksPlanned: 0, trucksArrived: 0 },
  { date: '2026-01-21', berthName: '2-4(西)', shipName: 'CREST CRANE', eta: '08:00', etd: '17:00', cargo: '湿灰(相)', status: '予定', trucksPlanned: 0, trucksArrived: 0 },
  { date: '2026-01-21', berthName: '2-4(東)', shipName: '未定', eta: '-', etd: '18:00', cargo: '湿灰(相)', status: '予定', trucksPlanned: 0, trucksArrived: 0 },
  { date: '2026-01-21', berthName: '3-1(東)', shipName: '未定', eta: '07:00', etd: '17:00', cargo: '不明', status: '予定', trucksPlanned: 0, trucksArrived: 0 },
  { date: '2026-01-21', berthName: '5-4', shipName: '第2藤進', eta: '00:00', etd: '07:00', cargo: '残土(相)', status: '予定', trucksPlanned: 0, trucksArrived: 0 },

  // 2026-01-22
  { date: '2026-01-22', berthName: '1-3A', shipName: '未定', eta: '08:00', etd: '17:00', cargo: '未定', status: '予定', trucksPlanned: 0, trucksArrived: 0 },
  { date: '2026-01-22', berthName: '2-2', shipName: '扇忠丸', eta: '13:00', etd: '23:59', cargo: '不明', status: '予定', trucksPlanned: 0, trucksArrived: 0 },
  { date: '2026-01-22', berthName: '2-3', shipName: 'ライチャージ', eta: '-', etd: '17:00', cargo: '(1)石炭(相)', status: '予定', trucksPlanned: 0, trucksArrived: 0 },
  { date: '2026-01-22', berthName: '3-1(西)', shipName: '希洋丸', eta: '08:00', etd: '17:00', cargo: '不明', status: '予定', trucksPlanned: 0, trucksArrived: 0 },

  // 以降（1/23〜2/3）も同様に追加可能。必要なら続きもこのファイルに追記します。
];

