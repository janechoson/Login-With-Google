export type RuleResult = true | string | Promise<void>;

// Basic Rules

export const RULES = {
  required: (rule: unknown, value: string | number): RuleResult =>
    (Boolean(value) && Promise.resolve()) ||
    (value === 0 && Promise.resolve()) ||
    Promise.reject("須項目です。"),

  multipleRequired: (rule: unknown, value: unknown[]): RuleResult =>
    (value != null && value.length >= 1 && Promise.resolve()) ||
    Promise.reject("1つ以上選択して下さい。"),

  number: (rule: unknown, v: string): RuleResult =>
    !v ||
    (/^[0-9]+$/.test(v) && Promise.resolve()) ||
    Promise.reject("半角数字で入力ください"),

  requiredBoolean: (v: unknown): RuleResult =>
    Boolean(v) || v === false || "必須項目です。", // false 許容
  // requiredSelect: (v: unknown): RuleResult =>
  //   Boolean(v) || v === 0 || '必須項目です。選択してください。',
  kana: (v: string): RuleResult =>
    !v || /^[ァ-ヴー\s]+$/g.test(v) || "全角カタカナを入力してください。",
  houjin: (v: string): RuleResult =>
    !v || /^[0-9]{13}$/im.test(v) || "法人番号を入力ください",

  integer: (v: string): RuleResult =>
    !v || /^[0-9-+]+$/.test(v) || "半角数字で入力ください",
  slug: (v: string): RuleResult =>
    !v || /^[a-zA-Z0-9-_]*$/.test(v) || "正しい形式ではありません",
  phone: (v: string): RuleResult =>
    !v ||
    /^[+]?[(]?[0-9]{3,4}[)]?[-\s]?[0-9]{3,4}[-\s]?[0-9]{4,6}$/im.test(v) ||
    "電話番号をハイフンなしで入力ください。",
  postalCode: (v: string): RuleResult =>
    !v ||
    /^[0-9]{7}$/.test(v) ||
    "郵便番号はハイフンなしで半角数字７桁で入力ください",
  postalCode1: (v: string): RuleResult =>
    !v || /^[0-9]{3}$/.test(v) || "半角数字3桁で入力ください",
  postalCode2: (v: string): RuleResult =>
    !v || /^[0-9]{4}$/.test(v) || "半角数字4桁で入力ください",
  url: (v: string): RuleResult =>
    !v ||
    /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi.test(
      v
    ) ||
    "URL形式で入力ください。",
  prefecture: (v: string): RuleResult =>
    (v || "").length <= 4 || ` 4文字以内で入力ください`,
  max18: (v: string): RuleResult =>
    (v || "").length <= 18 || ` 18文字以内で入力ください。`,
  max32: (v: string): RuleResult =>
    (v || "").length <= 32 || ` 32文字以内で入力ください。`,
  max64: (v: string): RuleResult =>
    (v || "").length <= 64 || ` 64文字以内で入力ください。`,
  max128: (v: string): RuleResult =>
    (v || "").length <= 128 || ` 128文字以内で入力ください。`,
  max256: (v: string): RuleResult =>
    (v || "").length <= 256 || ` 256文字以内で入力ください。`,
  max512: (v: string): RuleResult =>
    (v || "").length <= 512 || ` 512文字以内で入力ください。`,
  max3000: (v: string): RuleResult =>
    (v || "").length <= 3000 || ` 3,000文字以内で入力ください。`,
  password: (v: string): RuleResult =>
    /^((?=.*?[a-z])|(?=.*?[A-Z]))(?=.*?\d)(?=.*?[!-/:-@[-`{-~])[!-~]{6,32}$/.test(
      v
    ) || "半角英数記号を含む6〜32文字で入力して下さい。",
  passwordNullable: (rule: unknown, v: string): RuleResult =>
    v === undefined ||
    v === null ||
    (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/.test(v) &&
      Promise.resolve()) ||
    (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[&*:#_-])[A-Za-z\d&*:#_-]{8,30}$/.test(
      v
    ) &&
      Promise.resolve()) ||
    (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[&*:#_-])[A-Za-z\d&*:#_-]{8,30}$/.test(
      v
    ) &&
      Promise.resolve()) ||
    (/^(?=.*[a-z])(?=.*\d)(?=.*[&*:#_-])[A-Za-z\d&*:#_-]{8,30}$/.test(v) &&
      Promise.resolve()) ||
    Promise.reject("半角英数記号を含む8〜30文字で入力して下さい。"),

  passwordEmtyOrRequired: (rule: unknown, v: string): RuleResult =>
    (v || "").length === 0 ||
    (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/.test(v) &&
      Promise.resolve()) ||
    (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[&*:#_-])[A-Za-z\d&*:#_-]{8,30}$/.test(
      v
    ) &&
      Promise.resolve()) ||
    (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[&*:#_-])[A-Za-z\d&*:#_-]{8,30}$/.test(
      v
    ) &&
      Promise.resolve()) ||
    (/^(?=.*[a-z])(?=.*\d)(?=.*[&*:#_-])[A-Za-z\d&*:#_-]{8,30}$/.test(v) &&
      Promise.resolve()) ||
    Promise.reject("半角英数記号を含む8〜30文字で入力して下さい。"),

  requiredAlpha: (rule: unknown, value: any): RuleResult =>
    (/^[a-zA-Z0-9]*$/.test(value) && Promise.resolve()) ||
    Promise.reject("英数字で入力して下さい。"),

  email: (rule: unknown, v: string): RuleResult =>
    (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && Promise.resolve()) ||
    Promise.reject("正しいメールアドレスを入力してください。"),

  // email: (v: string): RuleResult =>
  //   /.+@.+\..+/.test(v) || "正しいメールアドレスを入力してください。",
  emailNullable: (v: string): RuleResult =>
    (v || "").length === 0 ||
    /.+@.+\..+/.test(v) ||
    "正しいメールアドレスを入力してください。",
  halfWidthAlphanumericWithUnderscoreAndDot: (v: string): RuleResult =>
    /^[a-zA-Z0-9_.]*$/.test(v) ||
    "半角英数・アンダーバー・ドットで入力してください。",
  halfWidthAlphanumericWithUnderscore: (v: string): RuleResult =>
    /^[a-zA-Z0-9_]*$/.test(v) || "半角英数・アンダーバーで入力してください。",
  halfWidthAlphanumericWithUnderscoreAndHyphen: (v: string): RuleResult =>
    /^[a-zA-Z0-9_-]*$/.test(v) ||
    "半角英数・アンダーバー・ハイフンで入力してください。",
  halfWidthAlphanumeric: (v: string): RuleResult =>
    /^[a-zA-Z0-9]*$/.test(v) || "半角英数で入力してください。",
  positiveNum: (v: number): RuleResult =>
    v >= 0 || "マイナス以外の数字で入力してください。",
  positiveRealNum: (v: number): RuleResult =>
    /^([1-9][0-9]+|[1-9])$/.test(v.toString()) ||
    "正の整数または0で入力してください。",
  positiveRealNumWithZero: (v: number): RuleResult =>
    /^([1-9][0-9]+|[0-9])$/.test(v.toString()) ||
    "正の整数または0で入力してください。",
  numMin1: (v: number): RuleResult => !v || v >= 1 || "1以上で入力ください。",
  numMax100: (v: number): RuleResult => v <= 100 || "100以下で入力ください。",
  numMax9999: (v: number): RuleResult =>
    v <= 9999 || "9999以下で入力ください。",
  numMax: (v: number): RuleResult =>
    v <= Number.MAX_SAFE_INTEGER || "扱えない数値です。",
  datetimePeriodRequired: (v: string[]): RuleResult =>
    (v[0] != null && v[1] != null) || "必須項目です。",
  timePeriodOver: (v: string[]): RuleResult =>
    (v[0] == null && v[1] == null) ||
    v[0] < v[1] ||
    "終了時刻は開始時刻より後を指定してください。",
  // multipleRequired: (v: unknown[]): RuleResult =>
  //   (v != null && v.length >= 1) || '1つ以上選択して下さい。',
  chipsRequired: (v: unknown[] | undefined): RuleResult =>
    v === undefined || v.length >= 1 || "1つ以上選択して下さい。",
  searchOrderNo: (v: string): RuleResult =>
    (v || "").length >= 5 || ` 5文字以上で入力ください`,
  phoneOrFax: (name: string, v: string): RuleResult =>
    !v || /^[0-9()-]+$/.test(v) || `${name}は正しい形式ではありません`,
  phoneJP: (rule: unknown, value: any): RuleResult =>
    !value ||
    (/^\d{3}|^\d{4}$[-]\d{4}[-]\d{4}$/.test(value) && Promise.resolve()) ||
    Promise.reject(""),
};
