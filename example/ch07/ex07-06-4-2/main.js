const f =
	(                       /* 無名関数Aを実行するために関数の定義を囲む開き括弧 */
	  function()                /* 無名関数（Aとする）の定義の始まり */
	  {
	    let count = 0;
	    return function() {         /* 無名関数（Bとする）の定義の始まり */
	      return `この関数が呼ばれた回数：${++count}回。`;
	    }                           /* 無名関数Bの定義の終わり */
	  }                         /* 無名関数Aの定義の終わり */
	)                       /*  無名関数Aを実行するための閉じ括弧 */
(); /* 関数定義の後に()があるので、無名関数Aを実行している。無名関数Bが値として戻る */

console.log(f()); // この関数が呼ばれた回数：1回。
console.log(f()); // この関数が呼ばれた回数：2回。
console.log(f()); // この関数が呼ばれた回数：3回。
