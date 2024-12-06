var person = {
    name: 'Jerry',
    address: ['HN', 'BN'],
    say: function() {
        // this ở đây chính là obj person
        // mà person.name = this.name => Jerry
        console.log('Hello ' + this.name);
        console.log('address: ', this.address);
    }
};

// () -> execute function - thực thi
person.say();

// console.log(person);







/**
 * Mô tả con mèo
 * 
 * - 1 con mèo tên là Tom
 * - Nó có màu lông vàng
 * - Nó 2 tuổi
 * 
 * ----------
 * Mèo có thể: ăn, ngủ, kêu
 */

var cat = {
    name: 'Tom1',
    age: 2,
    color: 'Yellow',
    // methods
    // this = cat 
    // cat.name = 'Tom1'
    // this.name = 'Tom1'
    
    eat: function() {
      console.log(this.name, ' dang an');
    },
    sleep: function() {
      console.log(this.name, ' dang ngu');
    },
    meow: function() {
      console.log(this.name, ' keu Meo');
    }
  };
  // cat.name = 'Tom';
  // cat.color = 'Yellow';
  // cat['age'] = 2;
  
//   cat.eat();
//   cat.meow();
//   cat.sleep();
  
  // console.log(cat);