exports.getFizzBuzzPattern = async (count) => {
   console.log(count);
   let data = [];

   for(let i=1;i<=parseInt(count,10);i++){
       if(i%3 === 0 && i%5 === 0)
         data.push('FizzBuzz');
       else if(i%3 === 0)
         data.push('Fizz');
       else if(i%5 === 0)
        data.push('Buzz');
       else
         data.push(i);
   }
   console.log(data)
   return data;
}