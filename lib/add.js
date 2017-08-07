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

module.exports = add