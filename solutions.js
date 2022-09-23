// EX 1

function alphabet_order(str) {
  return str.split("").sort().join("");
}
console.log(alphabet_order("webmaster"));

console.log(alphabet_order("32411"));

// EX 2

function detect_data_type(value) {
  let dtypes = [Function, RegExp, Number, String, Boolean, Object],
    x,
    len;

  if (typeof value === "object" || typeof value === "function") {
    for (x = 0, len = dtypes.length; x < len; x++) {
      if (value instanceof dtypes[x]) {
        return dtypes[x];
      }
    }
  }

  return typeof value;
}
console.log(detect_data_type(12));
console.log(detect_data_type("w3resource"));

// EX 3

function Second_Greatest_Lowest(arr_num) {
  arr_num.sort(function (x, y) {
    return x - y;
  });
  let uniqa = [arr_num[0]];
  let result = [];

  for (let j = 1; j < arr_num.length; j++) {
    if (arr_num[j - 1] !== arr_num[j]) {
      uniqa.push(arr_num[j]);
    }
  }
  result.push(uniqa[1], uniqa[uniqa.length - 2]);
  return result.join(",");
}

console.log(Second_Greatest_Lowest([1, 2, 3, 4, 5]));

// EX 4

function is_perfect(number) {
  let temp = 0;
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      temp += i;
    }
  }

  if (temp === number && temp !== 0) {
    console.log("It is a perfect number.");
  } else {
    console.log("It is not a perfect number.");
  }
}
is_perfect(28);

// EX 5

function factors(n) {
  let num_factors = [],
    i;

  for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
    if (n % i === 0) {
      num_factors.push(i);
      if (n / i !== i) num_factors.push(n / i);
    }
  num_factors.sort(function (x, y) {
    return x - y;
  }); // numeric sort
  return num_factors;
}
console.log(factors(15)); // [1,3,5,15]
console.log(factors(16)); // [1,2,4,8,16]
console.log(factors(17)); // [1,17]

// EX 6

function amountTocoins(amount, coins) {
  if (amount === 0) {
    return [];
  } else {
    if (amount >= coins[0]) {
      left = amount - coins[0];
      return [coins[0]].concat(amountTocoins(left, coins));
    } else {
      coins.shift();
      return amountTocoins(amount, coins);
    }
  }
}
console.log(amountTocoins(46, [25, 10, 5, 2, 1]));

// EX 7

function unique_char(str1) {
  let str = str1;
  let uniql = "";
  for (let x = 0; x < str.length; x++) {
    if (uniql.indexOf(str.charAt(x)) == -1) {
      uniql += str[x];
    }
  }
  return uniql;
}
console.log(unique_char("thequickbrownfoxjumpsoverthelazydog"));

// EX 8

function Char_Counts(str1) {
  let uchars = {};
  str1.replace(/\S/g, function (l) {
    uchars[l] = isNaN(uchars[l]) ? 1 : uchars[l] + 1;
  });
  return uchars;
}
console.log(Char_Counts("Hello World"));

// EX 9

function makeid(l) {
  let text = "";
  let char_list =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < l; i++) {
    text += char_list.charAt(Math.floor(Math.random() * char_list.length));
  }
  return text;
}
console.log(makeid(10));

// EX 10

function find_FirstNotRepeatedChar(str) {
  let arra1 = str.split("");
  let result = "";
  let ctr = 0;

  for (let x = 0; x < arra1.length; x++) {
    ctr = 0;

    for (let y = 0; y < arra1.length; y++) {
      if (arra1[x] === arra1[y]) {
        ctr += 1;
      }
    }

    if (ctr < 2) {
      result = arra1[x];
      break;
    }
  }
  return result;
}
console.log(find_FirstNotRepeatedChar("abacddbec"));

// EX 11

function longest_substring_without_repeating_characters(input) {
  let chars = input.split("");
  let curr_char;
  let str = "";
  let longest_string = "";
  let hash = {};
  for (let i = 0; i < chars.length; i++) {
    curr_char = chars[i];
    if (!hash[chars[i]]) {
      str += curr_char;
      hash[chars[i]] = { index: i };
    } else {
      if (longest_string.length <= str.length) {
        longest_string = str;
      }
      let prev_dupeIndex = hash[curr_char].index;
      let str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
      str = str_FromPrevDupe + curr_char;
      hash = {};
      for (let j = prev_dupeIndex + 1; j <= i; j++) {
        hash[input.charAt(j)] = { index: j };
      }
    }
  }
  return longest_string.length > str.length ? longest_string : str;
}
console.log(longest_substring_without_repeating_characters("google.com"));

console.log(longest_substring_without_repeating_characters("example.com"));

// EX 12

function is_Palindrome(str1) {
  let rev = str1.split("").reverse().join("");
  return str1 == rev;
}

function longest_palindrome(str1) {
  let max_length = 0,
    maxp = "";

  for (let i = 0; i < str1.length; i++) {
    let subs = str1.substr(i, str1.length);

    for (let j = subs.length; j >= 0; j--) {
      let sub_subs_str = subs.substr(0, j);
      if (sub_subs_str.length <= 1) continue;

      if (is_Palindrome(sub_subs_str)) {
        if (sub_subs_str.length > max_length) {
          max_length = sub_subs_str.length;
          maxp = sub_subs_str;
        }
      }
    }
  }

  return maxp;
}
console.log(longest_palindrome("abracadabra"));

console.log(
  longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE")
);

// EX 13

function abc() {
  console.log(arguments.callee.name);
}

abc();
