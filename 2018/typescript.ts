


function identity<T>( arg: T ): T{
    return arg;
}


console.log(identity<string>("OKOKOK"));
console.log(identity<number>(12));