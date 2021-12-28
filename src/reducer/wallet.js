export const initialState = {
  income: 0, // 수입
  consume: 0, // 지출
  invest: 0, // 투자
  deposit: 0, // 저축
};

export const init = () => initialState;

export function reducer(state, action) {
  switch (action.type) {
    case "income":
      return {
        income: state.income + action.income,
        consume: state.consume,
        invest: state.invest,
        deposit: state.deposit,
      };
    case "consume":
      return {
        income: state.income,
        consume: state.consume + action.consume,
        invest: state.invest,
        deposit: state.deposit,
      };
    case "invest":
      return {
        income: state.income,
        consume: state.consume,
        invest: state.invest + action.invest,
        deposit: state.deposit,
      };
    case "deposit":
      return {
        income: state.income,
        consume: state.consume,
        invest: state.invest,
        deposit: state.deposit + action.deposit
      };
    default:
      throw new Error();
  }
}
