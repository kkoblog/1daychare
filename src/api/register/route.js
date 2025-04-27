async function handler({ name, email, scheduleDate }) {
  if (!name || !email || !scheduleDate) {
    return {
      status: 400,
      error: "必須項目が入力されていません",
    };
  }

  if (name.length < 2 || name.length > 50) {
    return {
      status: 400,
      error: "名前は2文字以上50文字以内で入力してください",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      status: 400,
      error: "有効なメールアドレスを入力してください",
    };
  }

  const validDates = ["2025-02", "2025-03"];
  if (!validDates.includes(scheduleDate)) {
    return {
      status: 400,
      error: "無効な開催日が選択されています",
    };
  }

  try {
    const result = await db.query(
      `INSERT INTO registrations (name, email, schedule_date) 
       VALUES ($1, $2, $3) 
       RETURNING id`,
      [name, email, scheduleDate]
    );

    return {
      status: 200,
      message: "登録が完了しました",
      data: { id: result.rows[0].id },
    };
  } catch (error) {
    console.error("Registration error:", error);
    return {
      status: 500,
      error: "サーバーエラーが発生しました",
    };
  }
}
export async function POST(request) {
  return handler(await request.json());
}