//একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।

function multipleOfNumber(num) {
  for (i = 1; i <= 10; i++) {
    var result = i * num;
    var namota = num + '*' + i + '=' + result;
    console.log(namota)
  }
}

multipleOfNumber(13);
