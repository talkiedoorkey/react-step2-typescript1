export const Practice4 = () => {
  const calcTotalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClicePractice = () => calcTotalFee(100);
  return (
    <div>
      <p>練習問題：設定ファイルを触ってみる</p>
      <button onClick={onClicePractice}>練習問題4を実行</button>
    </div>
  );
};
