// module.exports.func = function  myFunc()
// {
//     console.log("Function working");
// };

// module.exports.num = x = 123456;

function my()
{
    console.log("Subash Vetri");
}
//var  x = 123456;
  var num = x = 123456;

// module.exports.my = my;
// module.exports.x = x;
module.exports = {
    my:my,
    num:num,
    // dummy:function(){console.log('dummy Function')}
    dummy:() => {console.log('dummy Function')}
}