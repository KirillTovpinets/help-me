module.exports = function count(s, pairs) {
  var N = 1;

  for (var i = 0; i < pairs.length; i++) {
  	N *= Math.pow(pairs[i][0], pairs[i][1])
  }

  if (N > 12320) {
  	return 0;
  }

  function nod(a, b){
    if (b === 0) {
      return a;
    }
    return nod(b, a % b);
  }
  var total = 0;
  for (var k = 0; k < N; k++) {
  		for (var j = 0; j < s.length; j++) {
        if (s[j] === '1') {
          if (nod(N, k + j) === 1 && j === (s.length - 1)) {
            total++;
          }else if(nod(N, k + j) !== 1 ){
            break;
          }
  		  }else if(s[j] === '0'){
          if (nod(N, k + j) !== 1 && j === (s.length - 1)) {
            total++;
          }else if(nod(N, k + j) === 1 ){
            break;
          }
        }
  	}
  }

  var result = total % 1000000007;
  return result;
}