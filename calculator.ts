
type Operation = 'multiply'| 'add'| 'divide'
type Result = number
const calculator = (a:number,b: number, op: Operation): Result=>{
if(op=='multiply') return a*b
if(op=='add') return a+b
if(op=='divide') {
    if(b==0) throw new Error('no se puede dividir entre cero.')
    return a/b
}
throw new Error('Operacion invalida')
}
console.log(process.argv)