export const initialState = {
  income: 9000000, // 수입
  consume: 1500000, // 지출
  invest: 3000000, // 투자
  deposit: 4500000, // 저축
  incomeList: [
    {"title": "월급", "price": 5000000},
    {"title": "용돈", "price": 3000000},
    {"title": "보너스", "price": 1000000},
  ], // 수입 세부
  consumeList: [
    {"title": "월세", "price": 800000},
    {"title": "식비", "price": 500000},
    {"title": "통신비", "price": 200000},
  ], // 지출 세부
  investList: [
    {"title": "적금", "price": 3000000},
  ], // 투자 세부
  depositList: [
    {"title": "주식", "price": 1000000},
    {"title": "부동산", "price": 1000000},
    {"title": "코인", "price": 1000000},
    {"title": "채권", "price": 1000000},
    {"title": "펀드", "price": 500000},
  ], // 저축 세부
};

export const init = () => initialState;

export function reducer(state, action) {
  switch (action.type) {
    case "income":
      return {
        ...state,
        income: action.income
      };
    case "consume":
      return {
        ...state,
        income: state.income + action.consume,
        consume: state.consume + action.consume
      };
    case "invest":
      return {
        ...state,
        invest: state.invest + action.invest
      };
    case "deposit":
      return {
        ...state,
        deposit: state.deposit + action.deposit
      };
    case "add_income":
      return {
        ...state,
        income: state.income + action.price,
        incomeList: [...state.incomeList, { "title": action.title, "price": action.price }],
      };
    case "add_consume":
      return {
        ...state,
        consume: state.consume + action.price,
        consumeList: [...state.consumeList, {"title": action.title, "price": action.price}],
      };
    case "add_invest":
      return {
        ...state,
        invest: state.invest + action.price,
        investList: [...state.investList, { "title": action.title, "price": action.price }],
      };
    case "add_deposit":
      return {
        ...state,
        deposit: state.deposit + action.price,
        depositList: [...state.depositList, { "title": action.title, "price": action.price }],
      };
    default:
      throw new Error();
  }
}
