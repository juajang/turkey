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
      return { income: state.income + action.income };
    case "consume":
      return { consume: state.consume + action.consume };
    case "invest":
      return { invest: state.invest + action.invest };
    case "deposit":
      return { deposit: state.deposit + action.deposit };
    default:
      throw new Error();
  }
}
