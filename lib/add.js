function add(a, b) {
  // 实现该函数
  var arrA = a.split('').reverse()
  var arrB = b.split('').reverse()
  console.log(arrA)
  console.log(arrB)
  var list = [],
  		flag = 0;
  // 获取两个array的最大长度
  var max = Math.max(arrA.length, arrB.length)

  // 遍历让两个array相同位置的数字相加
  for(var i=0; i<max; i++) {
  	var sum = (+arrA[i]||0) + (+arrB[i]||0) + flag
  	flag = 0

  	// 如果相加结果大于9，移除10位数字
  	if(sum>9) {
  		sum -= 10
  		flag = 1
  	}
  	list.push(sum)
  }

  if(flag === 1) {
  	list.push(flag)
  }
  console.log(list)
  return list.reverse().join('')
}


function add2(a, b) {
  var res='', c=0;
  a = a.split('');
  b = b.split('');
  //while c， 如果有进位会继续执行
  while (a.length || b.length || c){
    console.log(c+'####')
    // ~~：如果超出任何一个大数的length，.pop()会返回undefined，~~会把undefined转换为数字0
		c += ~~a.pop() + ~~b.pop();
    console.log(c)
    res = c % 10 + res;
    //如果出现进位，c为true，下一相加时，在运算时ture会作为1相加进去
    c = c>9;
  }
  return res.replace(/^0+/,'');
}

function add3(x, y) {
	let rs = [];
    
  while (x.length > 0 || y.length > 0) {
  	console.log(x)
  	//parseInt(string, 10) 按照10进制进行解析
  	//大数的从末尾每14位截取一下，直接相加（js可以处理14位以内的数字的相加），把相加的结果放到一个array里面
    rs.push(parseInt(x.substr(-14) || 0, 10) + parseInt(y.substr(-14) || 0, 10));
    console.log(rs)
    //移除大数相加过的14位
    x = x.substr(0, x.length - 14);
    console.log(x+'###')
    y = y.substr(0, y.length - 14);
  }
  
  var u = 0, o = '';
  while (rs.length) {
  	// u是进位的值
    let v = (rs.shift() + u).toString();
    o = v.substr(-14) + o;
    //如果v.length-14 > 1,则返回v的前n位的值，会加到下一个数上面（解决进位问题） 
    u = parseInt(v.substr(0, v.length - 14) || 0, 10);
  }
  
  return o;
}

module.exports = add3