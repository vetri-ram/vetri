class myClass
{
    constructor(name)
    {
        this.name = name;
    }
    myfunc()
    {
        console.log('My Name is ' + this.name)
                
    }
    mytask()
    {
        console.log(`Total is ${2+2}`)
    }
}
module.exports.myClass = myClass;
